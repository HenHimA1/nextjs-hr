import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import FormAttendance from "../../components/Form/Attendance";
import Navbar from "../../components/Navbar";
import useAppContext from "../../context/state";

export default function CreateAttendance() {
  const router = useRouter();
  const [attendanceData, setAttendanceData] = useState({
    id: Date.now(),
    employee: "",
    date: "",
    check_in: "",
    check_out: "",
  });
  const { state, dispatch } = useAppContext();

  const handleClickSave = (event) => {
    event.preventDefault();
    dispatch({ type: "addAttendance", payload: attendanceData });
    router.push(`/attendance/view?id=${attendanceData.id}`);
  };

  const handleClickDiscard = () => {
    router.push(`/attendance`);
  };

  const handleChange = (e) => {
    setAttendanceData({
      ...attendanceData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Head>
        <title>My Present | Attendance</title>
        <meta name="description" content="Access attendance" />
      </Head>
      <div className="bg-gray-100 w-screen h-screen">
        <Navbar />

        <div className="p-5 md:mx-5">
          <div className="md:px-2 mb-2 flex flex-col md:flex-row md:items-center justify-between gap-2">
            <h1 className="text-xl text-gray-500">
              <Link href={"/attendance"}>
                <a className="underline">Attendance</a>
              </Link>{" "}
              | Create Attendance
            </h1>
          </div>


          <FormAttendance LabelConfirm="Create" LabelDiscard="Discard" listEmployees={state.employees} attendanceData={attendanceData} handleChange={handleChange} handleClickSave={handleClickSave} handleClickDiscard={handleClickDiscard} />

        </div>
      </div>
    </>
  );
}
