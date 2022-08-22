import { CheckIcon, XIcon } from "@heroicons/react/solid";

export default function SpanBooleanField({ label, value }) {
  let valueIcon;
  if (value) {
    valueIcon = <CheckIcon className="w-5 h-5 text-green-500" />;
  } else {
    valueIcon = <XIcon className="w-5 h-5 text-red-500" />;
  }

  return (
    <div className="grid grid-cols-2 pb-2">
      <label>{label}</label>
      {valueIcon}
    </div>
  );
}
