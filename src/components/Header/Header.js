import className from "classnames/bind";
import style from "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHome,
  faFileExport,
  faFileImport,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faPinterestP,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const cx = className.bind(style);
function Header() {
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
          <FontAwesomeIcon className={cx("user-icon")} icon={faUser} />
          <div className={cx("toggle-btn")}></div>
        </div>
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
      </div>
      <div className={cx("profile")}>
        <img
          src={require("../../assets/img/logo.png")}
          className={cx("logo_img")}
          width="100"
          alt="logo"
        />
        <p>User Name</p>
      </div>

      <h5>menu</h5>
      <div className={cx("navbar")}>
        <ul>
          <li>
            <a href="dashboard.php">
              <FontAwesomeIcon className={cx("home-icon")} icon={faHome} />
              dashboard
            </a>
          </li>
          <li>
            <a href="add_product.php">
              <FontAwesomeIcon className={cx("add-icon")} icon={faFileImport} />
              add products{" "}
            </a>
          </li>
          <li>
            <a href="view_product.php">
              <FontAwesomeIcon
                className={cx("view-icon")}
                icon={faFileExport}
              />
              view product
            </a>
          </li>
          <li>
            <a href="user_account.php">
              <i className={cx("bx bxs-user_detail")}></i>accounts
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
                className={cx("view-icon")}
                icon={faRightFromBracket}
              />
              logout
            </a>
          </li>
        </ul>
      </div>
      <h5>find us</h5>
      <div className={cx("social-links")}>
        <FontAwesomeIcon className={cx("view-icon")} icon={faFacebookF} />
        <FontAwesomeIcon className={cx("view-icon")} icon={faInstagram} />
        <FontAwesomeIcon className={cx("view-icon")} icon={faLinkedinIn} />
        <FontAwesomeIcon className={cx("view-icon")} icon={faXTwitter} />
        <FontAwesomeIcon className={cx("view-icon")} icon={faPinterestP} />
      </div>
    </div>
  );
}

export default Header;
