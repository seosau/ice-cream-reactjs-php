import className from "classnames/bind";
import style from "./Dashboard.module.scss";
import { useState, useEffect } from "react";
import { Btn, AdminHeader } from "../../../components";

const cx = className.bind(style);
function Dashboard() {
    return (
        <div className={cx("container")}>
            <div className={cx("heading")}>
                <h1 className={cx("heading-title")}>dashboard</h1>
                <img src={require("../../../assets/img/separator.png")} alt="spr" />
            </div>
            <div className={cx("box-container")}>
                <div className={cx("box")}>
                    <h3 className={cx("box-title")}>Welcome !</h3>
                    <p>User Name</p> {/*fetch_profile['name'] */}
                    <Btn
                        value={"update profile"}
                        style={{
                            width: "fit-content",
                        }}
                    ></Btn>
                </div>
                <div className={cx("box")}>
                    {/*select mesage from db*/}
                    <h3 className={cx("box-title")}>23{/*Number of message */}</h3>
                    <p>unread message</p>

                    <Btn
                        value={"see message"}
                        style={{
                            width: "fit-content",
                        }}
                        href={"/Admin/Message"}
                    ></Btn>
                </div>
                <div className={cx("box")}>
                    {/* select product from db*/}
                    <h3 className={cx("box-title")}>23{/*Number of product */}</h3>

                    <p>products added</p>
                    <Btn
                        href={"/Admin/AddProduct"}
                        value={"add product"}
                        style={{
                            width: "fit-content",
                        }}
                    ></Btn>
                </div>
                <div className={cx("box")}>
                    {/* select active product from db*/}
                    <h3 className={cx("box-title")}>20{/*Number of active product */}</h3>

                    <p>Total active products</p>

                    <Btn
                        href={"/Admin/ViewActiveProduct"}
                        value={"View active product"}
                        style={{
                            width: "fit-content",
                        }}
                    ></Btn>
                </div>
                <div className={cx("box")}>
                    {/* select deactive product from db*/}
                    <h3 className={cx("box-title")}>0{/*Number of deactive product */}</h3>

                    <p>products added</p>

                    <Btn
                        href={"/Admin/ViewInActiveProduct"}
                        value={"Total inactive products"}
                        style={{
                            width: "fit-content",
                        }}
                    ></Btn>
                </div>
                <div className={cx("box")}>
                    {/*select users from db*/}
                    <h3 className={cx("box-title")}>0{/*Number of users */}</h3>
                    <p>users account</p>
                    <Btn
                        href={"/Admin/Profile"}
                        value={"see users"}
                        style={{
                            width: "fit-content",
                        }}
                    ></Btn>
                </div>
                <div className={cx("box")}>
                    {/*select sellers from db*/}
                    <h3 className={cx("box-title")}>2{/*Number of sellers */}</h3>
                    <p>sellers account</p>
                    <Btn
                        href={"/Admin/Profile"}
                        value={"see sellers"}
                        style={{
                            width: "fit-content",
                        }}
                    ></Btn>
                </div>
                <div className={cx("box")}>
                    {/*select orders from db*/}
                    <h3 className={cx("box-title")}>2{/*Number of orders */}</h3>
                    <p>total orders placed</p>

                    <Btn
                        href={"/Admin/Order"}
                        value={"total orders"}
                        style={{
                            width: "fit-content",
                        }}
                    ></Btn>
                </div>
                <div className={cx("box")}>
                    {/*select confirm orders from db*/}
                    <h3 className={cx("box-title")}>2{/*Number of confirm orders */}</h3>
                    <p>total confirm orders </p>

                    <Btn
                        value={"confirm orders"}
                        style={{
                            width: "fit-content",
                        }}
                    ></Btn>
                </div>
                <div className={cx("box")}>
                    {/*select canceled orders from db*/}
                    <h3 className={cx("box-title")}>2{/*Number of canceled orders */}</h3>
                    <p>total canceled orders </p>

                    <Btn
                        value={"canceled orders"}
                        style={{
                            width: "fit-content",
                        }}
                    ></Btn>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
