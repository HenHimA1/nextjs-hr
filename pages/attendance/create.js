import Navbar from "../../components/Navbar";
import useAppContext from "../../context/state";
import InputTextField from "../../components/InputTextField";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export default function CreateAttendance() {
  const router = useRouter();
  const { dispatch } = useAppContext();
  const [attendanceData, setAttendanceData] = useState({
    id: Date.now(),
    name: "",
    date: "",
    check_in: "",
    check_out: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: "addAttendance", payload: attendanceData });
    router.push("/attendance");
  };

  const handleChange = (e) => {
    setAttendanceData({
      ...attendanceData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-gray-100 w-screen h-screen">
      <Navbar />

      <form onSubmit={handleSubmit} className="p-5 m-5 bg-white">
        <h1 className="text-xl mb-2">Create Attendance</h1>
        <InputTextField
          label="Name"
          name="name"
          required="required"
          onChange={handleChange}
          value={attendanceData.name}
        />
        <InputTextField
          label="Date"
          name="date"
          required="required"
          type="date"
          onChange={handleChange}
          value={attendanceData.date}
        />
        <InputTextField
          label="Check in"
          name="check_in"
          required="required"
          type="time"
          onChange={handleChange}
          value={attendanceData.check_in}
        />
        <InputTextField
          label="Check out"
          name="check_out"
          type="time"
          onChange={handleChange}
          value={attendanceData.check_out}
        />
        <div className="flex">
          <button
            className="bg-gray-500 p-2 mr-2 rounded text-white"
            type="submit"
          >
            Create
          </button>
          <Link href={`/attendance`}>
            <a className="text-gray-500 p-2 mr-2 rounded border border-gray-500">
              Discard
            </a>
          </Link>
        </div>
      </form>
    </div>
  );
}
