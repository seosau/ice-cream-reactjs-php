import { Outlet } from "react-router-dom";
import className from "classnames/bind";
import style from "./AdminLayout.module.scss";
import { AdminHeader } from "../../components";  
const cx = className.bind(style);

function AdminLayout() {
  return (
    <div className={cx("admin-container")}>
      <AdminHeader>
        <Outlet />
      </AdminHeader>
    </div>
  );
}

export default AdminLayout;
