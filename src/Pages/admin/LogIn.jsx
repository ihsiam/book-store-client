import { useNavigate } from "react-router-dom";

export default function LogIn() {
  // for navigation
  const navigate = useNavigate();

  // remove prev token
  localStorage.removeItem("Token");
  localStorage.setItem("Token", "");

  // login function
  const handleLogin = (e) => {
    // collect data from from
    e.preventDefault();
    const loginInfo = e.target;

    const email = loginInfo.email.value;
    const pass = loginInfo.pass.value;

    const user = {
      email,
      pass,
    };

    // send data
    fetch("https://book-store-server-delta.vercel.app/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => {
        // login error handle
        if (!res.ok) {
          throw new Error("Incorrect email or password");
        }
        return res.json();
      })
      .then((res) => {
        // token set to browser local storage
        localStorage.setItem("Token", res);
        // navigate to admin dashboard
        navigate("/admin/dashboard");
      })
      .catch((error) => {
        // Display the error message
        alert(error.message);
      });
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Log In</h1>
      <form className="flex flex-col gap-10 px-5 py-10" onSubmit={handleLogin}>
        <input
          className="w-full h-10 focus:outline-0 rounded p-2 text-lg border-2 border-black"
          type="email"
          placeholder="Email"
          name="email"
        />
        <input
          className="w-full h-10 focus:outline-0 rounded p-2 text-lg border-2 border-black"
          type="password"
          placeholder="Password"
          name="pass"
        />
        <button
          className="bg-gray-100 hover:bg-gray-200 border-2 border-black px-4 py-2 rounded-xl"
          type="submit"
        >
          Log In
        </button>
      </form>
    </div>
  );
}
