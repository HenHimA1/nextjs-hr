import { XIcon, SaveAsIcon } from "@heroicons/react/solid";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import InputTextField from "../../components/InputTextField";
import Navbar from "../../components/Navbar";
import useAppContext from "../../context/state";

export default function CreateEmployee() {
  const router = useRouter();
  const [employeeData, setEmployeeData] = useState({
    id: Date.now(),
    name: "",
    position: "",
    age: "",
    address: "",
  });
  const { state, dispatch } = useAppContext();

  const handleClickSave = (event) => {
    event.preventDefault();
    dispatch({ type: "addEmployee", payload: employeeData });
    router.push(`/employee/view?id=${employeeData.id}`);
  };

  const handleClickDiscard = () => {
    router.push(`/employee`);
  };

  const handleChange = (e) => {
    setEmployeeData({
      ...employeeData,
      [e.target.name]: e.target.value,
    });
  };

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
              | Create Employee
            </h1>
          </div>

          <form
            onSubmit={(event) => handleClickSave(event)}
            className="px-2 pt-2 bg-white rounded-lg" 
          >
            <InputTextField
              label="Name"
              name="name"
              onChange={handleChange}
              value={employeeData.name}
              className="grid-cols-2"
              required="required"
            />
            <InputTextField
              label="Position"
              name="position"
              onChange={handleChange}
              value={employeeData.position}
              className="grid-cols-2"
              required="required"
            />
            <InputTextField
              label="Age"
              name="age"
              onChange={handleChange}
              value={employeeData.age}
              className="grid-cols-2"
            />
            <InputTextField
              label="Address"
              name="address"
              onChange={handleChange}
              value={employeeData.address}
              className="grid-cols-2"
            />
            <div className="flex pb-2 gap-2">
              <button
                type="submit"
                className="p-2 flex items-center bg-white border border-gray-500 rounded-md text-gray-500 hover:text-white hover:bg-gray-500"
              >
                <SaveAsIcon className="w-5 h-5 mr-2 inline" />
                Save
              </button>
              <button
                type="button"
                className="p-2 flex items-center bg-white border border-gray-500 rounded-md text-gray-500 hover:text-white hover:bg-gray-500"
                onClick={() => handleClickDiscard()}
              >
                <XIcon className="w-5 h-5 mr-2 inline" />
                Discard
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
