import { useState } from "react";
import className from "classnames/bind";
import style from "./Register.module.scss";
import Btn from "../../../components/Button/Btn";
import axiosClient from "../../../axiosClient/axios.js"
const cx = className.bind(style);

function Register() {
  const [userDataRegister, setUserDataRegister] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    image: "",
  });
//   console.log(process.env.API_BASE_URL)
  const onSubmit = () => {
    // console.log(userDataRegister);
    axiosClient.post('/register', userDataRegister)
    .then(res => {
        console.log(res)
    })
  };
  return (
    <div className={cx("form-container")}>
      <form
        action="#"
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
                name="password"
                placeholder="enter your password..."
                maxLength={50}
                required
                onChange={(e) =>
                  setUserDataRegister({
                    ...userDataRegister,
                    password: e.target.value,
                  })
                }
                value={userDataRegister.password}
              />
            </div>
            <div className={cx("input-field")}>
              <p className={cx("")}>
                confirm password <span className={cx("")}>*</span>
              </p>
              <input
                className={cx("box")}
                type="password"
                name="password-confirmation"
                placeholder="confirm your password..."
                maxLength={50}
                required
                onChange={(e) =>
                  setUserDataRegister({
                    ...userDataRegister,
                    passwordConfirmation: e.target.value,
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
            className={cx("box")}
            type="file"
            name="image"
            accept="image/*"
            required
            onChange={(e) =>
              setUserDataRegister({
                ...userDataRegister,
                image: e.target.value,
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
        <Btn value={"register now"} onclick={onSubmit}></Btn>
      </form>
    </div>
  );
}

export default Register;
