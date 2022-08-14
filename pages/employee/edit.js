import { TrashIcon, PencilIcon, SaveAsIcon } from "@heroicons/react/solid";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import InputTextField from "../../components/InputTextField";
import Navbar from "../../components/Navbar";
import useAppContext from "../../context/state";

export default function EditEmployee() {
  const router = useRouter();
  const [employeeData, setEmployeeData] = useState({
    id: "",
    name: "",
    position: "",
    age: "",
  });
  const { state, dispatch } = useAppContext();

  const { id } = router.query;

  const handleClickSave = () => {
    dispatch({ type: "updateEmployee", payload: employeeData });
    router.push(`/employee/view?id=${id}`);
  };

  const handleClickDiscard = () => {
    router.push(`/employee/view?id=${id}`);
  };

  const handleChange = (e) => {
    setEmployeeData({
      ...employeeData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (id && state.employees.find((value) => value.id == id)) {
      setEmployeeData(state.employees.find((value) => value.id == id));
    }
  }, [router, state]);

  return (
    <>
      <Head>
        <title>My Present | Employee</title>
        <meta name="description" content="Access employee" />
      </Head>
      <div className="bg-gray-100 w-screen h-screen">
        <Navbar />

        <div className="p-5 md:mx-5">
          <div className="md:px-2 mb-2 flex flex-col md:flex-row md:items-center justify-between gap-2">
            <h1 className="text-xl text-gray-500">
              <Link href={"/employee"}>
                <a className="underline">Employee</a>
              </Link>{" "}
              | {employeeData.id}
            </h1>
            <div className="flex gap-2">
              <button
                type="button"
                className="flex items-center bg-white rounded-md p-2 text-gray-500 hover:text-white hover:bg-gray-500"
                onClick={() => handleClickSave()}
              >
                <SaveAsIcon className="w-5 h-5 mr-2 inline" />
                Save
              </button>
              <button
                type="button"
                className="flex items-center bg-white rounded-md p-2 text-gray-500 hover:text-white hover:bg-gray-500"
                onClick={() => handleClickDiscard()}
              >
                <TrashIcon className="w-5 h-5 mr-2 inline" />
                Discard
              </button>
            </div>
          </div>

          <div className="px-2 pt-2 bg-white">
            <InputTextField
              label="Name"
              name="name"
              onChange={handleChange}
              value={employeeData.name}
              className="grid-cols-2"
            />
            <InputTextField
              label="Position"
              name="position"
              onChange={handleChange}
              value={employeeData.position}
              className="grid-cols-2"
            />
            <InputTextField
              label="Age"
              name="age"
              onChange={handleChange}
              value={employeeData.age}
              className="grid-cols-2"
            />
          </div>
        </div>
      </div>
    </>
  );
}
