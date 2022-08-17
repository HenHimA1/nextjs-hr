import { CheckIcon, XIcon } from "@heroicons/react/solid";

export default function SpanBooleanField({ label, value }) {
  let valueIcon;
  if (value) {
    valueIcon = <CheckIcon className="w-5 h-5" />;
  } else {
    valueIcon = <XIcon className="w-5 h-5" />;
  }

  return (
    <div className="grid grid-cols-2 pb-2">
      <label>{label}</label>
      {valueIcon}
    </div>
  );
}
