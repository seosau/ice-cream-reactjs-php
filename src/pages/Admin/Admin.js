import Header from "../../components/Header/Header";
import Dashboard from "../../components/Dashboard/Dashboard";

import className from "classnames/bind";
import style from "./Admin.module.scss";
const cx = className.bind(style);

function Admin() {
    return (
        <div className={cx("main-container")}>
            <Header className={cx("header")} />
            <Dashboard />
        </div>
    );
}

export default Admin;
