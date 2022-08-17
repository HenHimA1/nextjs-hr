import { XIcon, SaveAsIcon } from "@heroicons/react/solid";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import InputSelectField from "../../components/InputSelectField";
import InputTextField from "../../components/InputTextField";
import Navbar from "../../components/Navbar";
import useAppContext from "../../context/state";

export default function EditAttendance() {
  const router = useRouter();
  const [attendanceData, setAttendanceData] = useState({
    id: "",
    employee: "",
    date: "",
    check_in: "",
    check_out: "",
  });
  const { state, dispatch } = useAppContext();

  const { id } = router.query;

  const handleClickSave = (event) => {
    event.preventDefault();
    dispatch({ type: "updateAttendance", payload: attendanceData });
    router.push(`/attendance/view?id=${id}`);
  };

  const handleClickDiscard = () => {
    router.push(`/attendance/view?id=${id}`);
  };

  const handleChange = (e) => {
    setAttendanceData({
      ...attendanceData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (id && state.attendances) {
      let currentAttendance = state.attendances.find((value) => value.id == id);

      if (currentAttendance) {
        setAttendanceData(currentAttendance);
      } else {
        router.push("/attendance");
      }
    }
  }, [router, state]);

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
              | {attendanceData.id}
            </h1>
          </div>

          <form
            onSubmit={(event) => handleClickSave(event)}
            className="px-2 pt-2 bg-white rounded-lg"
          >
            <InputSelectField
              className="grid-cols-2"
              label="Employee"
              name="employee"
              onChange={handleChange}
              value={attendanceData.employee}
              listOption={state.employees}
              required="required"
            />
            <InputTextField
              label="Date"
              name="date"
              required="required"
              type="date"
              onChange={handleChange}
              value={attendanceData.date}
              className="grid-cols-2"
            />
            <InputTextField
              label="Check in"
              name="check_in"
              required="required"
              type="time"
              onChange={handleChange}
              value={attendanceData.check_in}
              className="grid-cols-2"
            />
            <InputTextField
              label="Check out"
              name="check_out"
              type="time"
              onChange={handleChange}
              value={attendanceData.check_out}
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
