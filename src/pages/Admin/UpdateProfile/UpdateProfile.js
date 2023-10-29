import className from "classnames/bind";
import style from "./UpdateProfile.module.scss";
import { useState, useEffect } from "react";
import { Btn, AdminHeader } from "../../../components";
import Profile from "../Profile/Profile";

const cx = className.bind(style);
function UpdateProfile() {
    return (
        <div className={cx("container")}>
            <div className={cx("heading")}>
                <h1 className={cx("heading-title")}>update profile details</h1>
                <img src={require("../../../assets/img/separator.png")} alt="spr" />
            </div>
            <div className={cx("form-container")}>
                <form className={cx("form")}>
                    <div className={cx("img-box")}>
                        <img src={require("../../../assets/img/avt.png")} alt="" />
                        {/*fetch img from db */}
                    </div>
                    <div className={cx("flex")}>
                        <div className={cx("col")}>
                            <div className={cx("input-field")}>
                                <p>
                                    your name <span>*</span>
                                </p>
                                <input
                                    className={cx("box")}
                                    type="text"
                                    name="name"
                                    placeholder="your old name"
                                    //fetch placeholder from db
                                />
                            </div>
                            <div className={cx("input-field")}>
                                <p>
                                    your email <span>*</span>
                                </p>
                                <input
                                    className={cx("box")}
                                    type="email"
                                    name="email"
                                    placeholder="youroldemail@gmail.com"
                                    //fetch placeholder from db
                                />
                            </div>
                            <div className={cx("input-field")}>
                                <p>
                                    select picture <span>*</span>
                                </p>
                                <input
                                    className={cx("box")}
                                    type="file"
                                    name="image"
                                    accept="image/*"
                                    //fetch placeholder from db
                                />
                            </div>
                        </div>
                        <div className={cx("col")}>
                            <div className={cx("input-field")}>
                                <p>
                                    your old password <span>*</span>
                                </p>
                                <input
                                    className={cx("box")}
                                    type="password"
                                    name="oldpass"
                                    placeholder="enter your old password"
                                    //fetch placeholder from db
                                />
                            </div>
                            <div className={cx("input-field")}>
                                <p>
                                    your new password <span>*</span>
                                </p>
                                <input
                                    className={cx("box")}
                                    type="password"
                                    name="newpass"
                                    placeholder="enter your new password"
                                    //fetch placeholder from db
                                />
                            </div>
                            <div className={cx("input-field")}>
                                <p>
                                    confirm password <span>*</span>
                                </p>
                                <input
                                    className={cx("box")}
                                    type="password"
                                    name="cpass"
                                    placeholder="confirm your password"
                                    //fetch placeholder from db
                                />
                            </div>
                        </div>
                    </div>
                    <Btn value={"update profile"} />
                </form>
            </div>
        </div>
    );
}

export default UpdateProfile;
