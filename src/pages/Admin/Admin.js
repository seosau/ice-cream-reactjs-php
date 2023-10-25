import className from "classnames/bind";
import style from "./Admin.module.scss";

const cx = className.bind(style);

function Admin() {
    return <div className={cx("admin-container")}></div>;
}

export default Admin;
