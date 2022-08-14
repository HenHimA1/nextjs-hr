import Navbar from "../../components/Navbar";
import useAppContext from "../../context/state";
import { PlusCircleIcon } from "@heroicons/react/solid";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Attendance() {
  const router = useRouter();
  const { state } = useAppContext();

  const handleRecordClick = (id) => {
    router.push(`/attendance/view?id=${id}`);
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
          <div className="md:px-2 mb-2 flex md:items-center flex-col md:flex-row justify-between gap-2">
            <h1 className="text-xl text-gray-500">Attendance</h1>
            <div className="flex">
              <Link href="/attendance/create">
                <button
                  type="button"
                  className="flex px-2 py-1 items-center bg-white rounded-md text-gray-500 hover:text-white hover:bg-gray-500"
                >
                  <PlusCircleIcon className="w-5 h-5 mr-2 inline" />
                  Add
                </button>
              </Link>
            </div>
          </div>

          <div className="overflow-auto">
            <table className="w-full rounded whitespace-nowrap">
              <thead className="bg-gray-50">
                <tr className="cursor-pointer border border-gray-50 hover:border-gray-300">
                  <th className="p-2 text-left text-gray-500">No</th>
                  <th className="p-2 text-left text-gray-500">Employee</th>
                  <th className="p-2 text-left text-gray-500">Date</th>
                  <th className="p-2 text-left text-gray-500">Check in</th>
                  <th className="p-2 text-left text-gray-500">Check out</th>
                </tr>
              </thead>
              <tbody>
                {state.attendances.map((attendance, index) => {
                  return (
                    <tr
                      className={`border ${
                        (index + 1) % 2
                          ? "bg-white border-white"
                          : "bg-gray-50 border-gray-50"
                      } cursor-pointer hover:border-gray-300`}
                      key={attendance.id}
                      onClick={() => handleRecordClick(attendance.id)}
                    >
                      <td className="p-2 text-gray-500">{index + 1}</td>
                      <td className="p-2 text-gray-500">
                        {state.employees.find(
                          (employee) =>
                            employee.id === parseInt(attendance.employee)
                        ) &&
                          state.employees.find(
                            (employee) =>
                              employee.id === parseInt(attendance.employee)
                          ).name}
                      </td>
                      <td className="p-2 text-gray-500">{attendance.date}</td>
                      <td className="p-2 text-gray-500">
                        {attendance.check_in}
                      </td>
                      <td className="p-2 text-gray-500">
                        {attendance.check_out}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
