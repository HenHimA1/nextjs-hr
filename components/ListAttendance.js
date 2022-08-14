import useAppContext from "../context/state";

export default function ListAttendance() {
  const { state } = useAppContext();

  return (
    <table className="bg-gray-200 w-full">
      <thead>
        <tr>
          <td className="p-1 text-left">No</td>
          <td className="p-1 text-left">Name</td>
          <td className="p-1 text-left">Date</td>
          <td className="p-1 text-left">Check in</td>
          <td className="p-1 text-left">Check out</td>
        </tr>
      </thead>
      <tbody>
        {state.attendances.map((attendance, index) => {
          return (
            <tr
              key={attendance.id}
              className={`${(index + 1) % 2 == 0 ? "bg-gray-200" : "bg-gray-50"}`}
            >
              <td className="p-1 text-left text-gray-700">{index + 1}</td>
              <td className="p-1 text-left text-gray-700">{attendance.name}</td>
              <td className="p-1 text-left text-gray-700">{attendance.date}</td>
              <td className="p-1 text-left text-gray-700">
                {attendance.check_in}
              </td>
              <td className="p-1 text-left text-gray-700">
                {attendance.check_out}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
