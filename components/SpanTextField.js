import Link from "next/link";

export default function SpanTextField({ label, value, href }) {
  let valueLabel;
  
  if (href) {
    valueLabel = (
      <Link href={href}>
        <a className="border-b-2 border-white focus:outline-none h-8 underline">
          {value}
        </a>
      </Link>
    );
  } else {
    valueLabel = (
      <span className="border-b-2 border-white focus:outline-none h-8">
        {value}
      </span>
    );
  }

  return (
    <div className="grid grid-cols-2 pb-2">
      <label>{label}</label>
      {valueLabel}
    </div>
  );
}
