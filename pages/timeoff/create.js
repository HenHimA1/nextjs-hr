import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import FormTimeoff from "../../components/Form/Timeoff";
import Navbar from "../../components/Navbar";
import useAppContext from "../../context/state";

export default function CreateTimeoff() {
  const router = useRouter();
  const [timeoffData, setTimeoffData] = useState({
    id: Date.now(),
    employee: "",
    dateStart: "",
    dateEnd: "",
    description: "",
    approved: false,
  });
  const { state, dispatch } = useAppContext();

  const handleClickSave = (event) => {
    event.preventDefault();
    dispatch({ type: "addTimeoff", payload: timeoffData });
    router.push(`/timeoff/view?id=${timeoffData.id}`);
  };

  const handleClickDiscard = () => {
    router.push(`/timeoff`);
  };

  const handleChange = (event) => {
    setTimeoffData({
      ...timeoffData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <Head>
        <title>My Present | Time Off</title>
        <meta name="description" content="Create timeoff" />
      </Head>
      <div className="bg-gray-100 w-screen h-screen">
        <Navbar />

        <div className="p-5 md:mx-5">
          <div className="md:px-2 mb-2 flex flex-col md:flex-row md:items-center justify-between gap-2">
            <h1 className="text-xl text-gray-500">
              <Link href={"/timeoff"}>
                <a className="underline">Time Off</a>
              </Link>{" "}
              | Create Timeoff
            </h1>
          </div>

          <FormTimeoff
            LabelConfirm="Create"
            LabelDiscard="Cancel"
            listEmployee={state.employees}
            timeoffData={timeoffData}
            handleChange={handleChange}
            handleClickDiscard={handleClickDiscard}
            handleClickSave={handleClickSave}
          />
        </div>
      </div>
    </>
  );
}
