import { TrashIcon, PencilIcon } from "@heroicons/react/solid";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import SpanTextField from "../../components/SpanTextField";
import useAppContext from "../../context/state";

export default function ViewEmployee() {
  const router = useRouter();
  const [employeeData, setEmployeeData] = useState({
    id: "",
    name: "",
    position: "",
    age: "",
    address: "",
  });
  const { state, dispatch } = useAppContext();

  const { id } = router.query;

  const handleClickEdit = () => {
    router.push(`/employee/edit?id=${id}`);
  };

  const handleClickDelete = () => {
    dispatch({ type: "removeEmployee", payload: parseInt(id) });
    router.push(`/employee`);
  };

  useEffect(() => {
    if (id && state.employees.find((value) => value.id === parseInt(id))) {
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
          </div>

          <div className="px-2 pt-2 bg-white rounded-lg">
            <SpanTextField label="Name" value={employeeData.name} />
            <SpanTextField label="Position" value={employeeData.position} />
            <SpanTextField label="Age" value={employeeData.age} />
            <SpanTextField label="Address" value={employeeData.address} />

            <div className="flex gap-2 pb-2">
              <button
                type="button"
                className="flex p-2 items-center bg-white border border-gray-500 rounded-md text-gray-500 hover:text-white hover:bg-gray-500"
                onClick={() => handleClickEdit()}
              >
                <PencilIcon className="w-5 h-5 mr-2 inline" />
                Edit
              </button>
              <button
                type="button"
                className="flex p-2 items-center bg-white border border-gray-500 rounded-md text-gray-500 hover:text-white hover:bg-gray-500"
                onClick={() => handleClickDelete()}
              >
                <TrashIcon className="w-5 h-5 mr-2 inline" />
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
