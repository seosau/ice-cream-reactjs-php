import className from "classnames/bind";
import style from "./UserAccount.module.scss";
import { useState, useEffect } from "react";
import { Btn, AdminHeader } from "../../../components";

const cx = className.bind(style);
function UserAccount() {
    return (
        <div className={cx("container")}>
            <div className={cx("heading")}>
                <h1 className={cx("heading-title")}>registered users</h1>
                <img src={require("../../../assets/img/separator.png")} alt="spr" />
            </div>
            <div className={cx("box-container")}>
                {/* <div className={cx("empty")}>
                    <p>no registered user yet!</p>
                </div> */}
            </div>
        </div>
    );
}

export default UserAccount;
