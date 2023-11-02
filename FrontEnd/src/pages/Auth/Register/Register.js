import { useState } from "react";
import className from "classnames/bind";
import style from "./Register.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faImage
} from "@fortawesome/free-solid-svg-icons";
import Btn from "../../../components/Button/Btn";
import axiosClient from "../../../axiosClient/axios.js";
import { useStateContext } from "../../../context/ContextProvider";
import { useNavigate } from "react-router-dom";
import Alert from "../../../components/Alert/Alert";
const cx = className.bind(style);

function Register() {
  const navigate = useNavigate();
  const { setUserToken, setcurrentUser } = useStateContext();
  const [userDataRegister, setUserDataRegister] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    image: "",
    image_url: "",
  });
  const [error, setError] = useState({})
  const onImageChoose = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setUserDataRegister({
        ...userDataRegister,
        image: file,
        image_url: reader.result,
      });
      e.target.value = "";
    };
    reader.readAsDataURL(file);
  };
  const onSubmit = async () => {
    const payload = { ...userDataRegister };
    if (payload.image) {
      payload.image = payload.image_url;
    }
    delete payload.image_url;

    await axiosClient
      .post("/register", payload)
      .then(({ data }) => {
        Alert(
          "success",
          "Register Successfully",
          "Please login for a great experience"
        );
        navigate("/login");
      })
      .catch((error) => {
        setError()
        Alert(
          "error",
          "Register Failed",
          "Something went wrong, please check again"
        );
      });
  };
  return (
    <div className={cx("form-container")}>
      <form
        action="#"
        method="POST"
        encType="multipart/from-data"
        className={cx("register")}
        onSubmit={onSubmit}
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
                    password_confirmation: e.target.value,
                  })
                }
                value={userDataRegister.password_confirmation}
              />
            </div>
          </div>
        </div>
        <div className={cx("input-field")}>
          <p className={cx("")}>
            your profile <span className={cx("")}>*</span>
          </p>
          <div className={cx("profile-img-box")}>
            {userDataRegister.image_url && (
              <img
                src={userDataRegister.image_url}
                alt="Image"
                className={cx("img-choose")}
              />
            )}
            {!userDataRegister.image_url && (
              <div>
                <FontAwesomeIcon
                  icon={faImage}
                  className={cx("icon-style")}  
                />
              </div>
            )}
            <button className={cx("btn-chooseImg")}>
              <input
                className={cx("img-choose-input")}
                type="file"
                name="image"
                accept="image/*"
                onChange={onImageChoose}
              />
              Change
            </button>
          </div>
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
