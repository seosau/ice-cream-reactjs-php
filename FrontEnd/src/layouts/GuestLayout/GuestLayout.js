import { Outlet } from "react-router-dom";
import style from "./GuestLayout.module.scss";
import className from "classnames/bind";

const cx = className.bind(style);
function GuestLayout() {

    return (
        <div className={cx("background")}>
            <Outlet />
        </div>
    );
}

export default GuestLayout;
