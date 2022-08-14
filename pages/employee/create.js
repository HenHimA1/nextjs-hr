import Navbar from "../../components/Navbar";
import useAppContext from "../../context/state";
import InputTextField from "../../components/InputTextField";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export default function CreateEmployee() {
  const router = useRouter();
  const { dispatch } = useAppContext();
  const [employeeData, setEmployeeData] = useState({
    id: Date.now(),
    name: "",
    position: "",
    age: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: "addEmployee", payload: employeeData });
    router.push("/employee");
  };

  const handleChange = (e) => {
    setEmployeeData({
      ...employeeData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-gray-100 w-screen h-screen">
      <Navbar />

      <form onSubmit={handleSubmit} className="p-5 m-5 bg-white">
        <h1 className="text-xl mb-2">Create Employee</h1>
        <InputTextField
          label="Name"
          name="name"
          onChange={handleChange}
          value={employeeData.name}
        />
        <InputTextField
          label="Position"
          name="position"
          onChange={handleChange}
          value={employeeData.position}
        />
        <InputTextField
          label="Age"
          name="age"
          onChange={handleChange}
          value={employeeData.age}
        />
        <div className="flex">
          <button
            className="bg-gray-500 p-2 mr-2 rounded text-white"
            type="submit"
          >
            Create
          </button>
          <Link href={`/employee`}>
            <a className="text-gray-500 p-2 mr-2 rounded border border-gray-500">
              Discard
            </a>
          </Link>
        </div>
      </form>
    </div>
  );
}
