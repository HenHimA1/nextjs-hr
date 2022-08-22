import Navbar from "../../components/Navbar";
import useAppContext from "../../context/state";
import { PlusCircleIcon } from "@heroicons/react/solid";
import Link from "next/link";
import Head from "next/head";
import { useEffect, useState } from "react";
import SearchButton from "../../components/SearchButton";
import ListAttendance from "../../components/List/Attendance";

export default function Attendance() {
  const { state } = useAppContext();

  const [search, setSearch] = useState("");
  const [employees, setEmployees] = useState([]);
  const [attendances, setAttendances] = useState([]);

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
    setAttendances(
      state.attendances
        .filter((attendance) =>
          employees.includes(parseInt(attendance.employee))
        )
        .sort((start, end) => {
          return new Date(end.date).getTime() - new Date(start.date).getTime();
        })
    );
  }, [employees, state]);

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
            <div className="flex gap-2">
              <SearchButton search={search} setSearch={setSearch} />
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
            <ListAttendance attendances={attendances} employees={state.employees} />
          </div>
        </div>
      </div>
    </>
  );
}
