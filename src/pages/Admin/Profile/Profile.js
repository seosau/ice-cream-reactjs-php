import className from "classnames/bind";
import style from "./Profile.module.scss";
import { useState, useEffect } from "react";
import { Btn, AdminHeader } from "../../../components";

const cx = className.bind(style);
function Profile() {
    return (
        <div className={cx("container")}>
            <div className={cx("heading")}>
                <h1 className={cx("heading-title")}>profile details</h1>
                <img src={require("../../../assets/img/separator.png")} alt="spr" />
            </div>

            <div className={cx("details")}>
                <div className={cx("seller")}>
                    <img
                        alt=""
                        /*Fetch from db */
                        src={require("../../../assets/img/avt.png")}
                    />
                    <h3>user name</h3>
                    <span>seller</span>
                    <Btn href={"/Admin/UpdateProfile"} value={"update your profile"} />
                </div>
                <div className={cx("flex")}>
                    <div className={cx("box")}>
                        <span>{/*fetch total produts*/}20</span>
                        <p>total products</p>
                        <Btn href={"/Admin/ViewProduct"} value={"view your products"} />
                    </div>
                    <div className={cx("box")}>
                        <span>{/*fetch total orders*/}20</span>
                        <p>total orders placed</p>

                        <Btn href={"/Admin/ViewOrder"} value={"view all orders"} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
