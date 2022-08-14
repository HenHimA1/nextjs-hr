import Navbar from "../../components/Navbar";
import useAppContext from "../../context/state";
import { PlusCircleIcon } from "@heroicons/react/solid";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import SearchButton from "../../components/SearchButton";

export default function Employee() {
  const router = useRouter();
  const { state } = useAppContext();

  const handleRecordClick = (id) => {
    router.push(`/employee/view?id=${id}`);
  };

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
              <SearchButton />
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
            <table className="w-full rounded whitespace-nowrap">
              <thead className="bg-gray-50">
                <tr className="cursor-pointer border border-gray-50 hover:border-gray-300">
                  <th className="p-2 text-left text-gray-500">No</th>
                  <th className="p-2 text-left text-gray-500">Name</th>
                  <th className="p-2 text-left text-gray-500">Position</th>
                  <th className="p-2 text-left text-gray-500">Age</th>
                </tr>
              </thead>
              <tbody>
                {state.employees.map((employee, index) => {
                  return (
                    <tr
                      className={`border ${
                        (index + 1) % 2
                          ? "bg-white border-white"
                          : "bg-gray-50 border-gray-50"
                      } cursor-pointer hover:border-gray-300`}
                      key={employee.id}
                      onClick={() => handleRecordClick(employee.id)}
                    >
                      <td className="p-2 text-gray-500">{index + 1}</td>
                      <td className="p-2 text-gray-500">{employee.name}</td>
                      <td className="p-2 text-gray-500">{employee.position}</td>
                      <td className="p-2 text-gray-500">{employee.age}</td>
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
