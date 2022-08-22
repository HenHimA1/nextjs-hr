import { CheckIcon, XIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

export default function ListTimeoff({ timeoffs, employees }) {
    const { push } = useRouter()

    const handleRecordClick = (id) => {
        push(`/timeoff/view?id=${id}`);
    }

    return (
        <table className="w-full rounded whitespace-nowrap">
            <thead className="bg-gray-50">
                <tr className="cursor-pointer border border-gray-50 hover:border-gray-300">
                    <th className="p-2 text-left text-gray-500">No</th>
                    <th className="p-2 text-left text-gray-500">Employee</th>
                    <th className="p-2 text-left text-gray-500">Date Start</th>
                    <th className="p-2 text-left text-gray-500">Date End</th>
                    <th className="p-2 text-left text-gray-500">Approved</th>
                </tr>
            </thead>
            <tbody>
                {timeoffs?.map((timeoff, index) => {
                    return (
                        <tr
                            className={`border ${(index + 1) % 2
                                ? "bg-white border-white"
                                : "bg-gray-50 border-gray-50"
                                } cursor-pointer hover:border-gray-300`}
                            key={timeoff.id}
                            onClick={() => handleRecordClick(timeoff.id)}
                        >
                            <td className="p-2 text-gray-500">{index + 1}</td>
                            <td className="p-2 text-gray-500">
                                {
                                    employees.find(
                                        (employee) =>
                                            employee.id === parseInt(timeoff.employee)
                                    )?.name
                                }
                            </td>
                            <td className="p-2 text-gray-500">{timeoff.dateStart}</td>
                            <td className="p-2 text-gray-500">{timeoff.dateEnd}</td>
                            <td className="p-2 text-gray-500">
                                {timeoff.approved ? (
                                    <CheckIcon className="w-5 h-5 text-green-500" />
                                ) : (
                                    <XIcon className="w-5 h-5 text-red-500" />
                                )}
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>)
}