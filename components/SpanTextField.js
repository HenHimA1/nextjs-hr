import Link from "next/link";

export default function SpanTextField({ label, value, href }) {
  return (
    <div className="grid grid-cols-2">
      <label>{label}</label>

      {href ? (
        <Link href={href}>
          <a className="pb-2 mb-2 border-b-2 border-white focus:outline-none h-8 underline">
            {value}
          </a>
        </Link>
      ) : (
        <span className="pb-2 mb-2 border-b-2 border-white focus:outline-none h-8">
          {value}
        </span>
      )}
    </div>
  );
}
