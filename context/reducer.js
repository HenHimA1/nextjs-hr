export const initialState = {
  attendances: [],
  employees: [],
  timeoffs: [],
};

export const AppReducer = (state, action) => {
  switch (action.type) {
    case "initStored":
      return action.payload;

    case "addEmployee":
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };

    case "removeEmployee":
      let currentEmployees = state.employees.filter(
        (value) => value.id !== action.payload
      );
      return { ...state, employees: currentEmployees };

    case "updateEmployee":
      let employeeIndex = state.employees.findIndex(
        (employee) => employee.id === action.payload.id
      );
      state.employees[employeeIndex] = action.payload;
      return {
        ...state,
        employees: state.employees,
      };

    case "addAttendance":
      return {
        ...state,
        attendances: [...state.attendances, action.payload],
      };

    case "updateAttendance":
      let attendanceIndex = state.attendances.findIndex(
        (attendance) => attendance.id === action.payload.id
      );
      state.attendances[attendanceIndex] = action.payload;
      return {
        ...state,
        attendances: state.attendances,
      };

    case "removeAttendance":
      let currentAttendances = state.attendances.filter(
        (value) => value.id !== action.payload
      );
      return { ...state, attendances: currentAttendances };

    case "addTimeoff":
      return {
        ...state,
        timeoffs: [...state.timeoffs, action.payload],
      };

    case "updateTimeoff":
      let timeoffIndex = state.timeoffs.findIndex(
        (timeoff) => timeoff.id === action.payload.id
      );
      state.timeoffs[timeoffIndex] = action.payload;
      return {
        ...state,
        timeoffs: state.timeoffs,
      };

    default:
      return state;
  }
};
