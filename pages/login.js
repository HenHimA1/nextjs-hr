import { useState } from "react";
import { useRouter } from "next/router";
import InputTextField from "../components/InputTextField";
import Link from "next/link";

export default function Login() {
  const router = useRouter();
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push("/");
  };

  const handleChange = (e) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="h-screen w-screen bg-gray-100 flex justify-center items-center">
      <form className="bg-white text-gray-500 p-5 rounded-3xl" onSubmit={handleSubmit}>
        <h1 className="mb-2 text-2xl">Login</h1>
        <InputTextField
          label="Username"
          name="username"
          type="text"
          required="required"
          value={loginForm.username}
          onChange={handleChange}
        />
        <InputTextField
          label="Password"
          name="password"
          type="password"
          required="required"
          value={loginForm.password}
          onChange={handleChange}
        />
        <div className="flex justify-between">
          <button className="p-2 rounded bg-gray-500 text-white" type="submit">
            Login
          </button>
          <Link href={`/`}>
            <a className="p-2 hover:underline">Back to Home</a>
          </Link>
        </div>
      </form>
    </div>
  );
}
