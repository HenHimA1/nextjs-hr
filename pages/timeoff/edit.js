import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import FormTimeoff from "../../components/FormTimeoff";
import Navbar from "../../components/Navbar";
import useAppContext from "../../context/state";

export default function EditTimeoff() {
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

  const handleClickSave = (event) => {
    event.preventDefault();
    dispatch({ type: "updateTimeoff", payload: timeoffData });
    router.push(`/timeoff/view?id=${id}`);
  };

  const handleClickDiscard = () => {
    router.push(`/timeoff/view?id=${id}`);
  };

  const handleChange = (e) => {
    setTimeoffData({
      ...timeoffData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (id && state.timeoffs) {
      let currentTimeoff = state.timeoffs.find((value) => value.id == id);

      if (currentTimeoff) {
        if (currentTimeoff.approved) {
          router.push("/timeoff");
        } else {
          setTimeoffData(currentTimeoff);
        }
      } else {
        router.push("/timeoff");
      }
    }
  }, [router, state]);

  return (
    <>
      <Head>
        <title>My Present | Time Off</title>
        <meta name="description" content="Access timeoff" />
      </Head>
      <div className="bg-gray-100 w-screen h-screen">
        <Navbar />

        <div className="p-5 md:mx-5">
          <div className="md:px-2 mb-2 flex flex-col md:flex-row md:items-center justify-between gap-2">
            <h1 className="text-xl text-gray-500">
              <Link href={"/timeoff"}>
                <a className="underline">Time Off</a>
              </Link>{" "}
              | {timeoffData.id}
            </h1>
          </div>

          <FormTimeoff
            LabelConfirm="Save"
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
