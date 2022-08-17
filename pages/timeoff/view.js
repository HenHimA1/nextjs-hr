import { TrashIcon, PencilIcon } from "@heroicons/react/solid";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import SpanBooleanField from "../../components/SpanBooleanField";
import SpanTextField from "../../components/SpanTextField";
import useAppContext from "../../context/state";

export default function ViewTimeoff() {
  const router = useRouter();
  const [timeoffData, setTimeoffData] = useState({
    id: "",
    employee: "",
    dateStart: "",
    dateEnd: "",
    description: "",
    approved: false,
  });
  const { state, dispatch } = useAppContext();

  const { id } = router.query;

  const handleClickEdit = () => {
    router.push(`/timeoff/edit?id=${id}`);
  };

  const handleClickDelete = () => {
    dispatch({ type: "removeTimeoff", payload: parseInt(id) });
    router.push(`/timeoff`);
  };

  useEffect(() => {
    if (id && state.timeoffs.find((value) => value.id === parseInt(id))) {
      setTimeoffData(state.timeoffs.find((value) => value.id == id));
    }
  }, [router, state]);

  return (
    <>
      <Head>
        <title>My Present | Timeoff</title>
        <meta name="description" content="View timeoff" />
      </Head>
      <div className="bg-gray-100 w-screen h-screen">
        <Navbar />

        <div className="p-5 md:mx-5">
          <div className="md:px-2 mb-2 flex flex-col md:flex-row md:items-center justify-between gap-2">
            <h1 className="text-xl text-gray-500">
              <Link href={"/timeoff"}>
                <a className="underline">Timeoff</a>
              </Link>{" "}
              | {timeoffData.id}
            </h1>
          </div>

          <div className="px-2 pt-2 bg-white rounded-lg">
            <SpanTextField
              label="Employee"
              value={
                state.employees.find(
                  (employee) => employee.id === parseInt(timeoffData.employee)
                )?.name
              }
              href={`/employee/view?id=${timeoffData.employee}`}
            />
            <SpanTextField label="Date Start" value={timeoffData.dateStart} />
            <SpanTextField label="Date End" value={timeoffData.dateEnd} />
            <SpanTextField
              label="Description"
              value={timeoffData.description}
            />
            <SpanBooleanField label="Approved" value={timeoffData.approved} />

            <div className="flex gap-2 pb-2">
              <button
                type="button"
                className="flex p-2 items-center bg-white border border-gray-500 rounded-md text-gray-500 hover:text-white hover:bg-gray-500"
                onClick={() => handleClickEdit()}
              >
                <PencilIcon className="w-5 h-5 mr-2 inline" />
                Edit
              </button>
              <button
                type="button"
                className="flex p-2 items-center bg-white border border-gray-500 rounded-md text-gray-500 hover:text-white hover:bg-gray-500"
                onClick={() => handleClickDelete()}
              >
                <TrashIcon className="w-5 h-5 mr-2 inline" />
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
