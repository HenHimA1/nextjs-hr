import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import FormEmployee from "../../components/Form/Employee";
import Navbar from "../../components/Navbar";
import useAppContext from "../../context/state";

export default function EditEmployee() {
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

  const handleClickSave = (event) => {
    event.preventDefault();
    dispatch({ type: "updateEmployee", payload: employeeData });
    router.push(`/employee/view?id=${id}`);
  };

  const handleClickDiscard = () => {
    router.push(`/employee/view?id=${id}`);
  };

  const handleChange = (event) => {
    setEmployeeData({
      ...employeeData,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    if (id && state.employees) {
      let currentEmployee = state.employees.find((value) => value.id == id);

      if (currentEmployee) {
        setEmployeeData(currentEmployee);
      } else {
        router.push("/employee");
      }
    }
  }, [router, state]);

  return (
    <>
      <Head>
        <title>My Present | Employee</title>
        <meta name="description" content="Edit employee" />
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

          <FormEmployee
            LabelConfirm="Save"
            LabelDiscard="Cancel"
            employeeData={employeeData}
            handleChange={handleChange}
            handleClickSave={handleClickSave}
            handleClickDiscard={handleClickDiscard}
          />
        </div>
      </div>
    </>
  );
}
