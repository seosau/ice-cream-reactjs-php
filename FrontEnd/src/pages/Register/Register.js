import className from "classnames/bind";
import style from "./Register.module.scss";
import { useState } from "react";
import Btn from "../../components/Button/Btn";

const cx = className.bind(style);

function Register() {
    const [userDataRegister, setUserDataRegister] = useState({
        name: "",
        email: "",
        pass: "",
        cpass: "",
        img: "",
    });
    console.log(userDataRegister);
    return (
        <div className={cx("form-container")}>
            <form action="" method="post" encType="multipart/from-data" className={cx("register")}>
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
                                onChange={(e) =>
                                    setUserDataRegister({
                                        ...userDataRegister,
                                        name: e.target.value,
                                    })
                                }
                                value={userDataRegister.name}
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
                                onChange={(e) =>
                                    setUserDataRegister({
                                        ...userDataRegister,
                                        email: e.target.value,
                                    })
                                }
                                value={userDataRegister.email}
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
                                onChange={(e) =>
                                    setUserDataRegister({
                                        ...userDataRegister,
                                        pass: e.target.value,
                                    })
                                }
                                value={userDataRegister.pass}
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
                                onChange={(e) =>
                                    setUserDataRegister({
                                        ...userDataRegister,
                                        cpass: e.target.value,
                                    })
                                }
                                value={userDataRegister.cpass}
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
                        onChange={(e) =>
                            setUserDataRegister({
                                ...userDataRegister,
                                img: e.target.value,
                            })
                        }
                        value={userDataRegister.img}
                    />
                </div>
                <p className={cx("link")}>
                    already have an account?
                    <a href="/Login" className={cx("")}>
                        login now
                    </a>
                </p>
                <Btn value={"register now"}></Btn>
            </form>
        </div>
    );
}

export default Register;
