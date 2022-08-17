import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";

import { AppReducer, initialState } from "./reducer";
import { dummyData } from "./dumyData";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("state"))) {
      dispatch({
        type: "initStored",
        payload: JSON.parse(localStorage.getItem("state")),
      });
    } else {
      localStorage.setItem("state", JSON.stringify(dummyData));
      dispatch({
        type: "initStored",
        payload: JSON.parse(localStorage.getItem("state")),
      });
    }
  }, []);

  useEffect(() => {
    if (state !== initialState) {
      localStorage.setItem("state", JSON.stringify(state));
    }
  }, [state]);

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

export default function useAppContext() {
  return useContext(AppContext);
}
