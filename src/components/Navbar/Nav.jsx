import { NavLink } from "react-router-dom";

export default function Nav() {
  // path and title
  const menuItem = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/about",
      title: "About",
    },
    {
      path: "/books",
      title: "Books",
    },
  ];

  return (
    <>
      {menuItem.map((item) => (
        <NavLink key={Math.random()} to={item.path}>
          <h1 className="text-base md:text-lg px-4 py-1 md:py-0">
            {item.title}
          </h1>
        </NavLink>
      ))}
    </>
  );
}
