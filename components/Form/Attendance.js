import { SaveAsIcon, XIcon } from "@heroicons/react/solid";
import InputTextField from "../Input/TextField";
import InputSelectField from "../Input/SelectField";

export default function FormAttendance({
    LabelConfirm,
    LabelDiscard,
    attendanceData,
    listEmployees,
    handleChange,
    handleClickSave,
    handleClickDiscard,
}) {
    return (
        <form
            onSubmit={(event) => handleClickSave(event)}
            className="px-2 pt-2 bg-white rounded-lg"
        >
            <InputSelectField
                className="grid-cols-2"
                label="Employee"
                name="employee"
                onChange={handleChange}
                value={attendanceData.employee}
                listOption={listEmployees}
                required="required"
            />
            <InputTextField
                label="Date"
                name="date"
                required="required"
                type="date"
                onChange={handleChange}
                value={attendanceData.date}
                className="grid-cols-2"
            />
            <InputTextField
                label="Check in"
                name="check_in"
                required="required"
                type="time"
                onChange={handleChange}
                value={attendanceData.check_in}
                className="grid-cols-2"
            />
            <InputTextField
                label="Check out"
                name="check_out"
                type="time"
                onChange={handleChange}
                value={attendanceData.check_out}
                className="grid-cols-2"
            />
            <div className="flex pb-2 gap-2">
                <button
                    type="submit"
                    className="p-2 flex items-center bg-white border border-gray-500 rounded-md text-gray-500 hover:text-white hover:bg-gray-500"
                >
                    <SaveAsIcon className="w-5 h-5 mr-2 inline" />
                    {LabelConfirm}
                </button>
                <button
                    type="button"
                    className="p-2 flex items-center bg-white border border-gray-500 rounded-md text-gray-500 hover:text-white hover:bg-gray-500"
                    onClick={() => handleClickDiscard()}
                >
                    <XIcon className="w-5 h-5 mr-2 inline" />
                    {LabelDiscard}
                </button>
            </div>
        </form>
    );
}
