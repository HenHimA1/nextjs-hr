import { SaveAsIcon, XIcon } from "@heroicons/react/solid";
import InputTextField from "../InputTextField";
import InputSelectField from "../InputSelectField";

export default function FormTimeoff({
  LabelConfirm,
  LabelDiscard,
  listEmployee,
  timeoffData,
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
        label="Employee"
        name="employee"
        listOption={listEmployee}
        onChange={handleChange}
        value={timeoffData.employee}
        className="grid-cols-2"
        required="required"
      />
      <InputTextField
        label="Date Start"
        name="dateStart"
        type="date"
        onChange={handleChange}
        value={timeoffData.dateStart}
        className="grid-cols-2"
        required="required"
      />
      <InputTextField
        label="Date End"
        name="dateEnd"
        type="date"
        onChange={handleChange}
        value={timeoffData.dateEnd}
        className="grid-cols-2"
        required="required"
      />
      <InputTextField
        label="Description"
        name="description"
        onChange={handleChange}
        value={timeoffData.description}
        className="grid-cols-2"
        required="required"
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
