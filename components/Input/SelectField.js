export default function InputSelectField({
  label,
  name,
  value,
  onChange,
  listOption,
  className,
  required,
}) {
  return (
    <div className={`grid ${className}`}>
      <label>{label}</label>
      <select
        name={name}
        className="pb-2 mb-2 border-b-2 bg-white focus:outline-none required:border-gray-500"
        value={value}
        onChange={onChange}
        required={required}
      >
        <option value=""></option>
        {listOption.map((list) => {
          return (
            <option key={list.id} value={list.id}>
              {list.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
