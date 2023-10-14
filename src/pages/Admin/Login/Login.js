import className from "classnames/bind";
import style from "./Login.scss";

const cx = className.bind(style);

function Login() {
  return (
    <div className={cx("form-container")}>
      <form
        action=""
        method="post"
        encType="multipart/from-data"
        className={cx("login")}
      >
        <h3 className={cx("")}>login now</h3>
        <div className={cx("input-field")}>
          <p className={cx("")}>
            your email <span className={cx("")}>*</span>
          </p>
          <input
            className={cx("box")}
            type="email"
            name="email"
            placeholder="enter your email..."
            maxLength={50}
            required
          />
        </div>
        <div className={cx("input-field")}>
          <p className={cx("")}>
            your password <span className={cx("")}>*</span>
          </p>
          <input
            className={cx("box")}
            type="password"
            name="pass"
            placeholder="enter your password..."
            maxLength={50}
            required
          />
        </div>
        <p className={cx("link")}>
          do not have an account?
          <a href="/Register" className={cx("")}>
            register now
          </a>
        </p>
        <input
          type="submit"
          name="submit"
          value={"login now"}
          className={cx("btn")}
        />
      </form>
    </div>
  );
}

export default Login;
