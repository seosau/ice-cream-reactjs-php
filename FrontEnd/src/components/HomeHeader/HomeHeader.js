import className from "classnames/bind";
import style from "./HomeHeader.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPlus,
  faSearch,
  faHeart,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Btn from "../Button/Btn";
import { useStateContext } from "../../context/ContextProvider";
import axiosClient from "../../axiosClient/axios";

const cx = className.bind(style);
const navBarClass = cx("navbar");
const navBarActive = navBarClass + " " + cx("active");

const searchFormClass = cx("search-form");
const searchFormActive = searchFormClass + " " + cx("active");
function HomeHeader({ children }) {
  const { currentUser, setcurrentUser,setUserToken } = useStateContext();
  const user_img_url = `http://localhost:8000/${currentUser.image}`;
  const [showNavBar, setShowNavBar] = useState(false);
  const [showSearchForm, setShowSeachForm] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [showProfile, setShowProfile] = useState(false);
  useEffect(() => {
    axiosClient.get("/me").then(({ data }) => {
      setcurrentUser(data);
    });
  }, []);
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
  const handleLogout = () => {
    axiosClient.post("/logout").then((res) => {
      setcurrentUser({});
      setUserToken(null);
    });
  };

  return (
    <>
      <div className={cx("header")}>
        <section className={cx("flex")}>
          <Link to="/" className={cx("logo")}>
            <img
              src={require("../../assets/img/logo.png")}
              width="130"
              alt="logo"
            />
          </Link>
          <nav className={showNavBar ? navBarActive : navBarClass}>
            <Link to="/">home</Link>
            <Link to="/about">about us</Link>
            <Link to="/shop">shop</Link>
            <Link to="/order">order</Link>
            <Link to="/contact">contact us</Link>
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
            <div id={cx("menu-btn")}>
              <FontAwesomeIcon
                icon={faPlus}
                className={cx("icon-style")}
                onClick={(e) => handleShowNavBar()}
              />
            </div>
            <div id={cx("search-btn")}>
              <FontAwesomeIcon
                icon={faSearch}
                className={cx("icon-style")}
                onClick={(e) => handleShowSearchForm()}
              />
            </div>
            <Link to="/favourite">
              <FontAwesomeIcon icon={faHeart} className={cx("icon-style")} />
              <sup>2</sup>
            </Link>
            <Link to="/cart">
              <FontAwesomeIcon
                icon={faShoppingCart}
                className={cx("icon-style")}
              />
              <sup>0</sup>
            </Link>
            <div id="user-btn">
              <FontAwesomeIcon
                icon={faUser}
                className={cx("icon-style")}
                onClick={(e) => handleShowProfile()}
              />
            </div>
          </div>
          {showProfile ? (
            <div className={cx("profile-detail")}>
              <div className={cx("profile")}>
                <img
                  src={user_img_url}
                  className={cx("profile-img")}
                  alt="profile"
                />
                <p className={cx("profile-name")}>{currentUser.name}</p>
                <div className={cx("flex-btn")}>
                  <Btn href="/profile" value="profile"></Btn>
                  <Btn value="logout" onclick={handleLogout}></Btn>
                </div>
              </div>
            </div>
          ) : null}
        </section>
      </div>
      {children}
    </>
  );
}

export default HomeHeader;
