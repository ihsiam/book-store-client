import { Outlet } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";

export default function DashBoardLayout() {
  return (
    <div className="flex flex-col md:flex-row gap-3 md:gap-5">
      <div className="w-full md:w-1/6">
        <Sidebar />
      </div>
      <div className="w-full md:w-5/6 p-2">
        <Outlet />
      </div>
    </div>
  );
}
