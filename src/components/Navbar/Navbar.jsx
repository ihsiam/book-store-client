import { useState } from "react";
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";

export default function Navbar() {
  // responsive btn
  const [menu, setMenu] = useState(false);

  return (
    <div className="bg-teal-100 px-4 py-2 md:px-24 md:py-4 sticky top-0 z-[20] flex w-full flex-wrap items-center justify-between overflow-hidden">
      <NavLink to="/">
        <h1 className=" text-2xl gap-2 flex items-center text-blue-700 font-bold">
          <FaBlog />
          Books
        </h1>
      </NavLink>
      <div className="flex uppercase items-center justify-end">
        <div className="w-full hidden justify-between md:flex gap-8 text-black cursor-pointer">
          <Nav />
        </div>
        <div className="md:hidden">
          <button onClick={() => setMenu(!menu)}>
            {menu ? <FaXmark /> : <FaBarsStaggered />}
          </button>
        </div>
      </div>
      {menu && (
        <div
          className="w-full flex flex-col items-center basis-full md:hidden"
          onClick={() => setMenu(false)}
        >
          <Nav />
        </div>
      )}
    </div>
  );
}
