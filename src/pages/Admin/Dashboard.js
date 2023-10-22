import Header from "../../components/Header/Header";

import className from "classnames/bind";
import style from "./Admin.scss";

const cx = className.bind(style);

function Dashboard() {
    return (
        <div className={cx("main-container")}>
            <Header />
        </div>
    );
}

export default Dashboard;
