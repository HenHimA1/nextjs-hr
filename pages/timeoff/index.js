import Navbar from "../../components/Navbar";
import useAppContext from "../../context/state";
import { PlusCircleIcon } from "@heroicons/react/solid";
import Link from "next/link";
import Head from "next/head";
import SearchButton from "../../components/SearchButton";
import { useEffect, useState } from "react";
import ListTimeoff from "../../components/List/Timeoff";

export default function Timeoff() {
  const { state } = useAppContext();

  const [search, setSearch] = useState("");
  const [employees, setEmployees] = useState([]);
  const [timeoffs, setTimeoffs] = useState([]);

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
  }, [employees, state]);

  return (
    <>
      <Head>
        <title>My Present | Time Off</title>
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
            <ListTimeoff timeoffs={timeoffs} employees={state.employees} />
          </div>
        </div>
      </div>
    </>
  );
}
