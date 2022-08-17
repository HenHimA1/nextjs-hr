import Navbar from "../../components/Navbar";
import useAppContext from "../../context/state";
import { CheckIcon, PlusCircleIcon, XIcon } from "@heroicons/react/solid";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import SearchButton from "../../components/SearchButton";
import { useEffect, useState } from "react";
import SpanBooleanField from "../../components/SpanBooleanField";

export default function Timeoff() {
  const router = useRouter();
  const { state } = useAppContext();

  const [search, setSearch] = useState("");
  const [employees, setEmployees] = useState([]);
  const [timeoffs, setTimeoffs] = useState([]);

  const handleRecordClick = (id) => {
    router.push(`/timeoff/view?id=${id}`);
  };

  useEffect(() => {
    if (search) {
      setEmployees(
        state.employees
          .filter((employee) =>
            employee.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((employee) => {
            return employee.id;
          })
      );
    } else {
      setEmployees(
        state.employees.map((employee) => {
          return employee.id;
        })
      );
    }
  }, [search, state]);

  useEffect(() => {
    setTimeoffs(
      state.timeoffs
        .filter((timeoff) => employees.includes(parseInt(timeoff.employee)))
        .sort((start, end) => {
          return (
            new Date(end.dateStart).getTime() -
            new Date(start.dateStart).getTime()
          );
        })
    );
  }, [employees]);

  return (
    <>
      <Head>
        <title>My Present | Timeoff</title>
        <meta name="description" content="Access timeoff" />
      </Head>
      <div className="bg-gray-100 w-screen h-screen">
        <Navbar />
        <div className="p-5 md:mx-5">
          <div className="md:px-2 mb-2 flex md:items-center flex-col md:flex-row justify-between gap-2">
            <h1 className="text-xl text-gray-500">Time Off</h1>
            <div className="flex flex-wrap gap-2">
              <SearchButton search={search} setSearch={setSearch} />
              <Link href="/timeoff/create">
                <button
                  type="button"
                  className="flex items-center bg-white rounded-md px-2 py-1 text-gray-500 hover:text-white hover:bg-gray-500"
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
                  <th className="p-2 text-left text-gray-500">Date Start</th>
                  <th className="p-2 text-left text-gray-500">Date End</th>
                  <th className="p-2 text-left text-gray-500">Approved</th>
                </tr>
              </thead>
              <tbody>
                {timeoffs?.map((timeoff, index) => {
                  return (
                    <tr
                      className={`border ${
                        (index + 1) % 2
                          ? "bg-white border-white"
                          : "bg-gray-50 border-gray-50"
                      } cursor-pointer hover:border-gray-300`}
                      key={timeoff.id}
                      onClick={() => handleRecordClick(timeoff.id)}
                    >
                      <td className="p-2 text-gray-500">{index + 1}</td>
                      <td className="p-2 text-gray-500">
                        {
                          state.employees.find(
                            (employee) =>
                              employee.id === parseInt(timeoff.employee)
                          )?.name
                        }
                      </td>
                      <td className="p-2 text-gray-500">{timeoff.dateStart}</td>
                      <td className="p-2 text-gray-500">{timeoff.dateEnd}</td>
                      <td className="p-2 text-gray-500">
                        {timeoff.approved ? (
                          <CheckIcon className="w-5 h-5" />
                        ) : (
                          <XIcon className="w-5 h-5" />
                        )}
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
