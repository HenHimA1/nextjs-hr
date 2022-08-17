import Head from "next/head";
import ListAttendance from "../components/ListAttendance";
import ListEmployee from "../components/ListEmployee";
import Navbar from "../components/Navbar";
import useAppContext from "../context/state";

export default function Home() {
  const { state } = useAppContext();
  return (
    <>
      <Head>
        <title>My Present</title>
      </Head>
      <div className="bg-gray-100 w-screen h-screen overflow-auto">
        <Navbar />
        <div className="m-2 p-2 md:p-5 md:mx-5">
          <h1 className="text-2xl p-2 text-gray-500 bg-white">Dashboard</h1>
          <div className="py-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-2 h-72 flex flex-col">
              <div className="pb-2">
                <h1 className="text-xl text-gray-500">List Employee</h1>
              </div>
              <div className="overflow-auto">
                <ListEmployee state={state} />
              </div>
            </div>
            <div className="bg-white p-2 h-72 flex flex-col">
              <div className="pb-2">
                <h1 className="text-xl text-gray-500">List Attendance</h1>
              </div>
              <div className="overflow-auto">
                <ListAttendance state={state} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
