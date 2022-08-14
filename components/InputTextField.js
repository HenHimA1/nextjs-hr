export default function InputTextField({
  label,
  name,
  type,
  value,
  required,
  onChange,
  className
}) {
  return (
    <div className={`grid ${className}`}>
      <label>{label}</label>
      <input
        className="pb-2 mb-2 border-b-2 focus:outline-none required:border-gray-500"
        type={type}
        name={name}
        value={value}
        required={required}
        onChange={onChange}
      />
    </div>
  );
}
