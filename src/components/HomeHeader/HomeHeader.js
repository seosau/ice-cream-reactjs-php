import className from "classnames/bind";
import style from "./HomeHeader.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faPlus, faSearch, faHeart, faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
const cx = className.bind(style);

const navBarClass = cx("navbar");
const navBarActive = navBarClass + " " + cx("active");

const searchFormClass = cx("search-form");
const searchFormActive = searchFormClass + " " + cx("active");
function HomeHeader() {
    const [showNavBar, setShowNavBar] = useState(false);
    const [showSearchForm, setShowSeachForm] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [showProfile, setShowProfile] = useState(false);

    const handleShowProfile = () => {
        setShowProfile(!showProfile);
    };
    const handleShowNavBar = () => {
        setShowNavBar(!showNavBar);
    }

    const handleShowSearchForm = () => {
        setShowSeachForm(!showSearchForm);
    }

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };
    return (
        <div className={cx("header")}>
            <section className={cx("flex")}>
                <a className={cx("logo")}>
                    <img
                        src={require("../../assets/img/logo.png")}
                        width="130"
                        alt="logo"
                    />
                </a>
                <nav className={showNavBar ? navBarActive : navBarClass}>
                    <a href="">home</a>
                    <a href="">about us</a>
                    <a href="">shop</a>
                    <a href="">order</a>
                    <a href="">contact us</a>
                </nav>
                <form className={showSearchForm ? searchFormActive : searchFormClass}>
                    <input
                        type="text"
                        name="search_product"
                        placeholder="Search product..."
                        value={searchValue}
                        onChange={handleSearchChange}
                        required
                        maxLength="100"
                    />
                    <button type="submit" id="search_product_btn">
                        <FontAwesomeIcon icon={faSearch} className={cx("icon-style")} />
                    </button>
                </form>
                <div className={cx("icons")}>
                    <div id={cx("menu-btn")} >
                        <FontAwesomeIcon icon={faPlus}
                            className={cx("icon-style")}
                            onClick={(e) => handleShowNavBar()}
                        />
                    </div>
                    <div id={cx("search-btn")}>
                        <FontAwesomeIcon icon={faSearch}
                            className={cx("icon-style")}
                            onClick={(e) => handleShowSearchForm()}
                        />
                    </div>
                    <a href="">
                        <FontAwesomeIcon icon={faHeart} className={cx("icon-style")} />
                        <sup>0</sup>
                    </a>
                    <a href="">
                        <FontAwesomeIcon icon={faShoppingCart} className={cx("icon-style")} />
                        <sup>0</sup>
                    </a>
                    <div id="user-btn">
                        <FontAwesomeIcon icon={faUser} 
                        className={cx("icon-style")}  
                        onClick={(e) => handleShowProfile()}
                        />
                    </div>
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
            </section>
        </div>
    )
}

export default HomeHeader;

