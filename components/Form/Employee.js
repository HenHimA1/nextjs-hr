import { SaveAsIcon, XIcon } from "@heroicons/react/solid";
import InputTextField from "../Input/TextField";

export default function FormEmployee({
  LabelConfirm,
  LabelDiscard,
  employeeData,
  handleChange,
  handleClickSave,
  handleClickDiscard,
}) {
  return (
    <form
      onSubmit={(event) => handleClickSave(event)}
      className="px-2 pt-2 bg-white rounded-lg"
    >
      <InputTextField
        label="Name"
        name="name"
        onChange={handleChange}
        value={employeeData.name}
        className="grid-cols-2"
        required="required"
      />
      <InputTextField
        label="Position"
        name="position"
        onChange={handleChange}
        value={employeeData.position}
        className="grid-cols-2"
        required="required"
      />
      <InputTextField
        label="Age"
        name="age"
        onChange={handleChange}
        value={employeeData.age}
        className="grid-cols-2"
      />
      <InputTextField
        label="Address"
        name="address"
        onChange={handleChange}
        value={employeeData.address}
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
