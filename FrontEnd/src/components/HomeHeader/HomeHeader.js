import className from "classnames/bind";
import style from "./HomeHeader.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPlus, faSearch, faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import Btn from "../Button/Btn";
const cx = className.bind(style);

const navBarClass = cx("navbar");
const navBarActive = navBarClass + " " + cx("active");

const searchFormClass = cx("search-form");
const searchFormActive = searchFormClass + " " + cx("active");
function HomeHeader() {
    const [showNavBar, setShowNavBar] = useState(false);
    const [showSearchForm, setShowSeachForm] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [showProfile, setShowProfile] = useState(false);

    const handleShowProfile = () => {
        setShowProfile(!showProfile);
    };
    const handleShowNavBar = () => {
        setShowNavBar(!showNavBar);
    };

    const handleShowSearchForm = () => {
        setShowSeachForm(!showSearchForm);
    };

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };
    return (
        <div className={cx("header")}>
            <section className={cx("flex")}>
                <Link to={"/"} className={cx("logo")}>
                    <img src={require("../../assets/img/logo.png")} width="130" alt="logo" />
                </Link>
                <nav className={showNavBar ? navBarActive : navBarClass}>
                    <Link href="">home</Link>
                    <Link href="">about us</Link>
                    <Link href="">shop</Link>
                    <Link href="">order</Link>
                    <Link href="">contact us</Link>
                </nav>
                <form className={showSearchForm ? searchFormActive : searchFormClass}>
                    <input type="text" name="search_product" placeholder="Search product..." value={searchValue} onChange={handleSearchChange} required maxLength="100" />
                    <button type="submit" id="search_product_btn">
                        <FontAwesomeIcon icon={faSearch} className={cx("icon-style")} />
                    </button>
                </form>
                <div className={cx("icons")}>
                    <div id={cx("menu-btn")}>
                        <FontAwesomeIcon icon={faPlus} className={cx("icon-style")} onClick={(e) => handleShowNavBar()} />
                    </div>
                    <div id={cx("search-btn")}>
                        <FontAwesomeIcon icon={faSearch} className={cx("icon-style")} onClick={(e) => handleShowSearchForm()} />
                    </div>
                    <Link href="">
                        <FontAwesomeIcon icon={faHeart} className={cx("icon-style")} />
                        <sup>0</sup>
                    </Link>
                    <Link to="/Client/Cart">
                        <FontAwesomeIcon icon={faShoppingCart} className={cx("icon-style")} />
                        <sup>0</sup>
                    </Link>
                    <div id="user-btn">
                        <FontAwesomeIcon icon={faUser} className={cx("icon-style")} onClick={(e) => handleShowProfile()} />
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
                                <Btn href="/Profile" value={"profile"}></Btn>
                                <Btn value={"logout"} href="" onclick="return confirm('logout from this website?');"></Btn>
                            </div>
                        </div>
                    </div>
                ) : null}
            </section>
        </div>
    );
}

export default HomeHeader;
