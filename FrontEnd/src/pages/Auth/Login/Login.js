import className from "classnames/bind";
import style from "./Login.module.scss";
import { useState } from "react";
import Btn from "../../../components/Button/Btn";

const cx = className.bind(style);

function Login() {
    const [userDataLogin, setUserDataLogin] = useState({
        email: "",
        pass: "",
    });
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
                        name="pass"
                        placeholder="enter your password..."
                        maxLength={50}
                        required
                        onChange={(e) =>
                            setUserDataLogin({
                                ...userDataLogin,
                                pass: e.target.value,
                            })
                        }
                        value={userDataLogin.pass}
                    />
                </div>
                <p className={cx("link")}>
                    do not have an account?
                    <a href="/Register" className={cx("")}>
                        register now
                    </a>
                </p>

                <Btn value={"login now"}></Btn>
            </form>
        </div>
    );
}

export default Login;
