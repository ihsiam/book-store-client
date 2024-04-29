import { useState } from "react";
import { FaCloudUploadAlt, FaSignOutAlt } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";
import { Link } from "react-router-dom";
import Profile from "../assets/img/profile.jpg";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const menuItem = [
    {
      path: "/admin/dashboard",
      title: "DashBoard",
      icon: <RxDashboard />,
    },
    {
      path: "/admin/dashboard/managebook",
      title: "Manage Book",
      icon: <IoMdSettings />,
    },
    {
      path: "/admin/dashboard/uploadBook",
      title: "Upload Book",
      icon: <FaCloudUploadAlt />,
    },
    {
      path: "/admin/dashboard",
      title: "Sign Out",
      icon: <FaSignOutAlt />,
    },
  ];

  return (
    <div className="bg-gray-50 px-3 py-2 md:py-4 text-gray-900 md:h-screen shadow md:shadow-lg">
      <div className="flex justify-between md:justify-normal items-center md:bg-gray-100 md:hover:bg-gray-200 md:rounded-lg">
        <button onClick={() => setOpen(!open)}>
          <FaBarsStaggered className="md:hidden" />
        </button>
        <div className="md:px-2 md:py-1 flex items-center gap-2">
          <img src={Profile} className="rounded-full w-10 h-10" />
          <h1 className="hidden md:block">User</h1>
        </div>
      </div>

      <div className="mt-5 hidden md:flex md:flex-col md:gap-5 md:w-full">
        {menuItem.map((item) => (
          <div
            key={Math.random()}
            className="p-2 bg-gray-100 md:hover:bg-gray-200 rounded-lg"
          >
            <Link to={item.path}>
              <div className="flex items-center gap-1 md:text-sm lg:text-lg">
                {item.icon}
                <h1>{item.title}</h1>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {open && (
        <div className="fixed top-0 left-0 h-screen bg-gray-50 md:hidden px-3 py-5 shadow-xl">
          <div className="flex flex-col gap-5">
            {menuItem.map((item) => (
              <div
                key={Math.random()}
                className="px-4 py-2 bg-gray-100 rounded-lg"
              >
                <Link to={item.path}>
                  <div
                    className="flex items-center gap-1 text-lg"
                    onClick={() => setOpen(false)}
                  >
                    {item.icon}
                    <h1>{item.title}</h1>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
