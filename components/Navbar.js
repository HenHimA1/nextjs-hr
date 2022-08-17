import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="bg-white md:flex md:justify-between shadow">
      <div className="px-2 py-2 flex justify-between text-2xl items-center text-gray-500">
        <Link href="/">
          <a>My Present</a>
        </Link>
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="inline md:hidden"
          type="button"
        >
          {openMenu ? (
            <XIcon className="w-5 h-5" />
          ) : (
            <MenuIcon className="w-5 h-5" />
          )}
        </button>
      </div>
      <ul
        className={`px-2 top-10 ${
          openMenu ? "block" : "hidden"
        } absolute md:static md:flex md:items-center text-gray-500 bg-white w-full md:w-auto transition-all ease-in-out delay-300 duration-300`}
      >
        <li className="py-2 md:mx-2">
          <Link href="/employee">
            <a>Employee</a>
          </Link>
        </li>
        <li className="py-2 md:mx-2">
          <Link href="/attendance">
            <a>Attendance</a>
          </Link>
        </li>
        <li className="py-2 md:mx-2">
          <Link href="/timeoff">
            <a>Time Off</a>
          </Link>
        </li>
        <li className="py-2 md:mx-2">
          <Link href="/login">
            <a>Login</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
