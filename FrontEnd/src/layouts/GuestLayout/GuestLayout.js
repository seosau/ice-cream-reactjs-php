import { Outlet } from "react-router-dom";
import style from "./GuestLayout.module.scss";
import className from "classnames/bind";

function GuestLayout() {
    const cx = className.bind(style);

    return (
        <div className={cx("background")}>
            <Outlet />
        </div>
    );
}

export default GuestLayout;
