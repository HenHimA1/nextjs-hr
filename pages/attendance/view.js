import { TrashIcon, PencilIcon } from "@heroicons/react/solid";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import SpanTextField from "../../components/SpanTextField";
import useAppContext from "../../context/state";

export default function ViewAttendance() {
  const router = useRouter();
  const [attendanceData, setAttendanceData] = useState({
    id: "",
    name: "",
    date: "",
    check_in: "",
    check_out: "",
  });
  const { state, dispatch } = useAppContext();

  const { id } = router.query;

  const handleClickEdit = () => {
    router.push(`/attendance/edit?id=${id}`);
  };

  const handleClickDelete = () => {
    dispatch({ type: "removeAttendance", payload: parseInt(id) });
    router.push(`/attendance`);
  };

  useEffect(() => {
    if (id && state.attendances.find((value) => value.id === parseInt(id))) {
      setAttendanceData(
        state.attendances.find((value) => value.id === parseInt(id))
      );
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
            <div className="flex gap-2">
              <button
                type="button"
                className="flex items-center bg-white rounded-md p-2 text-gray-500 hover:text-white hover:bg-gray-500"
                onClick={() => handleClickEdit()}
              >
                <PencilIcon className="w-5 h-5 mr-2 inline" />
                Edit
              </button>
              <button
                type="button"
                className="flex items-center bg-white rounded-md p-2 text-gray-500 hover:text-white hover:bg-gray-500"
                onClick={() => handleClickDelete()}
              >
                <TrashIcon className="w-5 h-5 mr-2 inline" />
                Delete
              </button>
            </div>
          </div>

          <div className="px-2 pt-2 bg-white">
            <SpanTextField label="Name" value={attendanceData.name} />
            <SpanTextField label="Date" value={attendanceData.date} />
            <SpanTextField label="Check in" value={attendanceData.check_in} />
            <SpanTextField label="Check out" value={attendanceData.check_out} />
          </div>
        </div>
      </div>
    </>
  );
}