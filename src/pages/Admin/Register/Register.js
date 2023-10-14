import className from "classnames/bind";
import style from "./Register.scss";

const cx = className.bind(style);

function Register() {
  return (
    <div className={cx("form-container")}>
      <form
        action=""
        method="post"
        encType="multipart/from-data"
        className={cx("register")}
      >
        <h3 className={cx("")}>register now</h3>
        <div className={cx("flex")}>
          <div className={cx("col")}>
            <div className={cx("input-field")}>
              <p className={cx("")}>
                your name <span className={cx("")}>*</span>
              </p>
              <input
                className={cx("box")}
                type="text"
                name="name"
                placeholder="enter your name..."
                maxLength={50}
                required
              />
            </div>
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
          </div>
          <div className={cx("col")}>
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
            <div className={cx("input-field")}>
              <p className={cx("")}>
                confirm password <span className={cx("")}>*</span>
              </p>
              <input
                className={cx("box")}
                type="password"
                name="cpass"
                placeholder="confirm your password..."
                maxLength={50}
                required
              />
            </div>
          </div>
        </div>
        <div className={cx("input-field")}>
          <p className={cx("")}>
            your profile <span className={cx("")}>*</span>
          </p>
          <input
            box
            className={cx("box")}
            type="file"
            name="image"
            accept="image/*"
            required
          />
        </div>
        <p className={cx("link")}>
          already have an account?
          <a href="/Login" className={cx("")}>
            login now
          </a>
        </p>
        <input
          type="submit"
          name="submit"
          value={"register now"}
          className={cx("btn")}
        />
      </form>
    </div>
  );
}

export default Register;
