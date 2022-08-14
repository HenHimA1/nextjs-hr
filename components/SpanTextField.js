export default function InputTextField({ label, value }) {
  return (
    <div className="grid grid-cols-2">
      <label>{label}</label>
      <span className="pb-2 mb-2 focus:outline-none">{value}</span>
    </div>
  );
}
