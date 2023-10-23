import className from "classnames/bind";
import style from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faHome,
    faEye,
    faFileImport,
    faRightFromBracket,
    faUserPlus,
    faBars,
} from "@fortawesome/free-solid-svg-icons";
import {
    faFacebookF,
    faInstagram,
    faLinkedinIn,
    faPinterestP,
    faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
const cx = className.bind(style);
const sidebarClass = cx("sidebar");
const sidebarActive = sidebarClass + " " + cx("active");

function Header() {
    const [showProfile, setShowProfile] = useState(false);
    const [showSideBar, setShowSideBar] = useState(false);

    const handleShowProfile = () => {
        setShowProfile(!showProfile);
    };
    const handleShowSideBar = () => {
        setShowSideBar(!showSideBar);
    };
    return (
        <div className={cx("container")}>
            <div className={cx("header")}>
                <div className={cx("logo")}>
                    <img
                        src={require("../../assets/img/logo.png")}
                        width="130"
                        alt="logo"
                    />
                </div>
                <div className={cx("right")}>
                    <FontAwesomeIcon
                        className={cx("user-icon")}
                        icon={faUser}
                        onClick={(e) => handleShowProfile()}
                    />
                    <FontAwesomeIcon
                        icon={faBars}
                        onClick={(e) => handleShowSideBar()}
                        className={cx("toggle-btn")}
                    />
                </div>
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
                                <a href="profile.php" className={cx("btn")}>
                                    profile
                                </a>
                                <a
                                    href="../components/admin_logout.php"
                                    onclick="return confirm('logout from this website?');"
                                    className={cx("btn")}
                                >
                                    logout
                                </a>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
            <div className={cx("sidebar-container")}>
                <div className={showSideBar ? sidebarActive : sidebarClass}>
                    <div className={cx("profile")}>
                        <img
                            src={require("../../assets/img/avt.jpg")}
                            className={cx("user-img")}
                            width="150"
                            height="150"
                            alt="logo"
                        />
                        <p>User Name</p>
                    </div>

                    <h5>menu</h5>
                    <div className={cx("navbar")}>
                        <ul>
                            <li>
                                <a href="dashboard.php">
                                    <FontAwesomeIcon
                                        className={cx("sidebar-icon")}
                                        icon={faHome}
                                    />
                                    <p>dashboard</p>
                                </a>
                            </li>
                            <li>
                                <a href="add_product.php">
                                    <FontAwesomeIcon
                                        className={cx("sidebar-icon")}
                                        icon={faFileImport}
                                    />
                                    <p>add products </p>
                                </a>
                            </li>
                            <li>
                                <a href="view_product.php">
                                    <FontAwesomeIcon
                                        className={cx("sidebar-icon")}
                                        icon={faEye}
                                    />
                                    <p>view product</p>
                                </a>
                            </li>
                            <li>
                                <a href="user_account.php">
                                    <FontAwesomeIcon
                                        className={cx("sidebar-icon")}
                                        icon={faUserPlus}
                                    />
                                    <p>accounts</p>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="../components/admin_logout.php"
                                    onclick={() => {
                                        // confirm("logout from this website");
                                    }}
                                >
                                    <FontAwesomeIcon
                                        className={cx("sidebar-icon")}
                                        icon={faRightFromBracket}
                                    />
                                    <p>logout</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <h5>find us</h5>
                    <div className={cx("social-links")}>
                        <FontAwesomeIcon
                            className={cx("social-icon")}
                            icon={faFacebookF}
                        />
                        <FontAwesomeIcon
                            className={cx("social-icon")}
                            icon={faInstagram}
                        />
                        <FontAwesomeIcon
                            className={cx("social-icon")}
                            icon={faLinkedinIn}
                        />
                        <FontAwesomeIcon
                            className={cx("social-icon")}
                            icon={faXTwitter}
                        />
                        <FontAwesomeIcon
                            className={cx("social-icon")}
                            icon={faPinterestP}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
