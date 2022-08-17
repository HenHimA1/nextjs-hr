export default function ListEmployee({ state }) {
  return (
    <table className="bg-gray-200 w-full">
      <thead>
        <tr>
          <td className="p-1 text-left">No</td>
          <td className="p-1 text-left">Name</td>
          <td className="p-1 text-left">Position</td>
        </tr>
      </thead>
      <tbody>
        {state.employees.map((employee, index) => {
          return (
            <tr
              key={employee.id}
              className={`${
                (index + 1) % 2 == 0 ? "bg-gray-200" : "bg-gray-50"
              }`}
            >
              <td className="p-1 text-left text-gray-700">{index + 1}</td>
              <td className="p-1 text-left text-gray-700">{employee.name}</td>
              <td className="p-1 text-left text-gray-700">
                {employee.position}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
