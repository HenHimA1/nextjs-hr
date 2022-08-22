import Navbar from "../../components/Navbar";
import useAppContext from "../../context/state";
import { PlusCircleIcon } from "@heroicons/react/solid";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import SearchButton from "../../components/SearchButton";
import { useEffect, useState } from "react";
import ListEmployee from "../../components/List/Employee";

export default function Employee() {
  const router = useRouter();
  const { state } = useAppContext();

  const [search, setSearch] = useState("");
  const [employees, setEmployees] = useState([]);

  const handleRecordClick = (id) => {
    router.push(`/employee/view?id=${id}`);
  };

  useEffect(() => {
    setEmployees(
      state.employees.filter((employee) =>
        employee.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, state]);

  return (
    <>
      <Head>
        <title>My Present | Employee</title>
        <meta name="description" content="Access employee" />
      </Head>
      <div className="bg-gray-100 w-screen h-screen">
        <Navbar />
        <div className="p-5 md:mx-5">
          <div className="md:px-2 mb-2 flex md:items-center flex-col md:flex-row justify-between gap-2">
            <h1 className="text-xl text-gray-500">Employee</h1>
            <div className="flex flex-wrap gap-2">
              <SearchButton search={search} setSearch={setSearch} />
              <Link href="/employee/create">
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
            <ListEmployee employees={employees} />
          </div>
        </div>
      </div>
    </>
  );
}
