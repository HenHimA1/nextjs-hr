import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import FormEmployee from "../../components/Form/Employee";
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
  const { dispatch } = useAppContext();

  const handleClickSave = (event) => {
    event.preventDefault();
    dispatch({ type: "addEmployee", payload: employeeData });
    router.push(`/employee/view?id=${employeeData.id}`);
  };

  const handleClickDiscard = () => {
    router.push(`/employee`);
  };

  const handleChange = (event) => {
    setEmployeeData({
      ...employeeData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <Head>
        <title>My Present | Employee</title>
        <meta name="description" content="Create employee" />
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

          <FormEmployee
            LabelConfirm="Create"
            LabelDiscard="Cancel"
            employeeData={employeeData}
            handleChange={handleChange}
            handleClickDiscard={handleClickDiscard}
            handleClickSave={handleClickSave}
          />
        </div>
      </div>
    </>
  );
}
