export default function InputTextField({ label, value }) {
  return (
    <div className="grid grid-cols-2">
      <label>{label}</label>
      <span className="pb-2 mb-2 border-b-2 border-white focus:outline-none h-8">{value}</span>
    </div>
  );
}
