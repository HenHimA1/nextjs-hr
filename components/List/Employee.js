import { useRouter } from "next/router";

export default function ListEmployee({ employees }) {
  const { push } = useRouter()
  
  const handleRecordClick = (id) => {
    push(`/employee/view?id=${id}`);
  }

  return (
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
        {employees.map((employee, index) => {
          return (
            <tr
              className={`border ${(index + 1) % 2
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
  );
}
