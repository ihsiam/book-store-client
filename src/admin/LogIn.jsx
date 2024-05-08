export default function LogIn() {
  const handleLogin = (e) => {
    e.preventDefault();
    const loginInfo = e.target;

    const email = loginInfo.email.value;
    const pass = loginInfo.pass.value;

    const user = {
      email,
      pass,
    };
    console.log(user);
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
          type="text"
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
