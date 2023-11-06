import { Outlet,Navigate } from "react-router-dom";
import className from "classnames/bind";
import style from "./AdminLayout.module.scss";
import { AdminHeader } from "../../components";
import { useStateContext } from "../../context/ContextProvider";

const cx = className.bind(style);

function AdminLayout() {
  // const { userToken } = useStateContext();
  // if (userToken) {
  //   return <Navigate to="/admin" />;
  // }
  return (
    <div className={cx("admin-container")}>
      <AdminHeader>
        <Outlet />
      </AdminHeader>
    </div>
  );
}

export default AdminLayout;
