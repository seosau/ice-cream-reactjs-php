import className from "classnames/bind";
import style from "./Login.module.scss";
import { useState } from "react";
import Btn from "../../../components/Button/Btn";
import axiosClient from "../../../axiosClient/axios";
import { useStateContext } from "../../../context/ContextProvider";
import Alert from "../../../components/Alert/Alert";
const cx = className.bind(style);

function Login() {
  const { setcurrentUser, setUserToken } = useStateContext();

  const [userDataLogin, setUserDataLogin] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({});
  const onSubmit = () => {
    axiosClient
      .post("/login", userDataLogin)
      .then(({ data }) => {
        Alert("success", "Login Successfully", "Have a nice day");
        setUserToken(data.token);
        setcurrentUser(data.user);
      })
      .catch((error) => {
        console.log(error);
        Alert(
            "error",
            "Login Failed",
            "Something went wrong, please check again"
          );
      });
  };
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
            onChange={(e) =>
              setUserDataLogin({
                ...userDataLogin,
                email: e.target.value,
              })
            }
            value={userDataLogin.email}
          />
        </div>
        <div className={cx("input-field")}>
          <p className={cx("")}>
            your password <span className={cx("")}>*</span>
          </p>
          <input
            className={cx("box")}
            type="password"
            name="password"
            placeholder="enter your password..."
            maxLength={50}
            required
            onChange={(e) =>
              setUserDataLogin({
                ...userDataLogin,
                password: e.target.value,
              })
            }
            value={userDataLogin.password}
          />
        </div>
        <p className={cx("link")}>
          do not have an account?
          <a href="/Register" className={cx("")}>
            register now
          </a>
        </p>

        <Btn value={"login now"} onclick={onSubmit}></Btn>
      </form>
    </div>
  );
}

export default Login;
