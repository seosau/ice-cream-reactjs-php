import className from "classnames/bind";
import style from "./AdminHeader.module.scss";
import { Link } from "react-router-dom";
import { Register, Login, Dashboard, AddProduct, ViewProduct, ProductDetail } from "../../pages";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHome, faEye, faFileImport, faRightFromBracket, faUserPlus, faBars } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faLinkedinIn, faPinterestP, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { useState, useEffect } from "react";
import Btn from "../Button/Btn";

const cx = className.bind(style);
const sidebarClass = cx("sidebar");
const sidebarActive = sidebarClass + " " + cx("active");

function Header({ children }) {
    const [showProfile, setShowProfile] = useState(false);
    const [showSideBar, setShowSideBar] = useState(false);

    const handleShowProfile = () => {
        setShowProfile(!showProfile);
    };
    const handleShowSideBar = () => {
        setShowSideBar(!showSideBar);
    };
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
    useEffect(() => {
        function handleResize() {
            setViewportWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <div className={cx("main")}>
            <div className={cx("header-container")}>
                <div className={cx("header")}>
                    <div className={cx("left")}>
                        <div className={cx("logo")}>
                            <img src={require("../../assets/img/logo.png")} width="130" alt="logo" />
                        </div>
                        <FontAwesomeIcon
                            icon={faBars}
                            onClick={(e) => handleShowSideBar()}
                            className={cx("toggle-btn")}
                            style={
                                showSideBar
                                    ? {
                                          left: "250px",
                                          transform: "rotate(90deg) ",
                                      }
                                    : { left: "30px" }
                            }
                        />
                    </div>

                    <FontAwesomeIcon className={cx("user-icon")} icon={faUser} onClick={(e) => handleShowProfile()} />

                    {showProfile ? (
                        <div className={cx("profile-detail")}>
                            <div className={cx("profile")}>
                                <img
                                    src={require("../../assets/img/avt.png")} //load later from user info
                                    className={cx("logo-img")}
                                    width="100"
                                    alt="profile"
                                />
                                <p>User Name</p>
                                <div className={cx("flex-btn")}>
                                    <Btn
                                        style={{
                                            width: "fit-content",
                                        }}
                                        href={"/Admin/Profile"}
                                        value={"profile"}
                                        onclick={(e) => {
                                            handleShowProfile();
                                        }}
                                    />
                                    <Btn
                                        style={{
                                            width: "fit-content",
                                        }}
                                        to=""
                                        value={"log out"}
                                    />
                                </div>
                            </div>
                        </div>
                    ) : null}
                </div>
                <div className={cx("sidebar-container")}>
                    <div className={showSideBar ? sidebarActive : sidebarClass}>
                        <div className={cx("profile")}>
                            <img src={require("../../assets/img/avt.png")} className={cx("user-img")} width="150" height="150" alt="logo" />
                            <p>User Name</p>
                        </div>

                        <h5>menu</h5>
                        <div className={cx("navbar")}>
                            <ul>
                                <li>
                                    <Link to="/Admin/Dashboard">
                                        <FontAwesomeIcon className={cx("sidebar-icon")} icon={faHome} />
                                        <p>dashboard</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/Admin/AddProduct">
                                        <FontAwesomeIcon className={cx("sidebar-icon")} icon={faFileImport} />
                                        <p>add products </p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/Admin/ViewProduct">
                                        <FontAwesomeIcon className={cx("sidebar-icon")} icon={faEye} />
                                        <p>view product</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/Admin/Profile">
                                        <FontAwesomeIcon className={cx("sidebar-icon")} icon={faUserPlus} />
                                        <p>accounts</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to=""
                                        onclick={() => {
                                            // confirm("logout from this website");
                                        }}
                                    >
                                        <FontAwesomeIcon className={cx("sidebar-icon")} icon={faRightFromBracket} />
                                        <p>logout</p>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <h5>find us</h5>
                        <div className={cx("social-links")}>
                            <FontAwesomeIcon className={cx("social-icon")} icon={faFacebookF} />
                            <FontAwesomeIcon className={cx("social-icon")} icon={faInstagram} />
                            <FontAwesomeIcon className={cx("social-icon")} icon={faLinkedinIn} />
                            <FontAwesomeIcon className={cx("social-icon")} icon={faXTwitter} />
                            <FontAwesomeIcon className={cx("social-icon")} icon={faPinterestP} />
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={cx("main-container")}
                style={{
                    width: (viewportWidth / 100) * 18 > 220 ? "81vw" : viewportWidth - 220 + "px",
                    left: showSideBar && (viewportWidth / 100) * 18 < 220 ? "180px" : (viewportWidth / 100) * 18 < 220 ? "12vw" : null,
                }}
            >
                {children}
            </div>
        </div>
    );
}

export default Header;
