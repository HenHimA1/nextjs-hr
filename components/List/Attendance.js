import { useRouter } from "next/router";

export default function ListAttendance({ attendances, employees }) {
  const { push } = useRouter()

  const handleRecordClick = (id) => {
    push(`/attendance/view?id=${id}`);
  }

  return (
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
        {attendances.map((attendance, index) => {
          return (
            <tr
              className={`border ${(index + 1) % 2
                ? "bg-white border-white"
                : "bg-gray-50 border-gray-50"
                } cursor-pointer hover:border-gray-300`}
              key={attendance.id}
              onClick={() => handleRecordClick(attendance.id)}
            >
              <td className="p-2 text-gray-500">{index + 1}</td>
              <td className="p-2 text-gray-500">
                {
                  employees.find(
                    (employee) =>
                      employee.id === parseInt(attendance.employee)
                  )?.name
                }
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
  );
}
