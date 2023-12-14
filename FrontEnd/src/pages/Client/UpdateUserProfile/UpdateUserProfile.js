import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import className from "classnames/bind";
import style from "./UpdateUserProfile.module.scss";
import Btn from "../../../components/Button/Btn";
import axiosClient from "../../../axiosClient/axios.js";
import Alert from "../../../components/Alert/Alert";
import { useStateContext } from "../../../context/ContextProvider.js";
import { Loader } from "../../../components/index.js";
const cx = className.bind(style);

function UpdateUserProfile() {
  const navigate = useNavigate();
  const { currentUser, setcurrentUser } = useStateContext();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const [userDataUpdate, setUserDataUpdate] = useState({
    name: "",
    email: "",
    old_password: "",
    password: "",
    password_confirmation: "",
    image: null,
    image_url: null,
  });
  useEffect(() => {
    setLoading(true);
    axiosClient
      .get("/me")
      .then(({ data }) => {
        setUserDataUpdate(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const user_img_url = currentUser.image_url
    ? currentUser.image_url
    : require("../../../assets/img/avt.png");
  const onImageChoose = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setUserDataUpdate({
        ...userDataUpdate,
        image: file,
        image_url: reader.result,
      });
      e.target.value = "";
    };
    reader.readAsDataURL(file);
  };
  const onUpdate = async () => {
    const payload = { ...userDataUpdate };
    if (payload.image) {
      payload.image = payload.image_url;
    }
    delete payload.image_url;
    console.log(payload);
    await axiosClient
      .post(`/updateprofile`, payload)
      .then(({ data }) => {
        console.log(data);
        setcurrentUser(data);
        Alert("success", "Update Successfully", "Have a nice day");
        navigate("/profile");
      })
      .catch((error) => {
        if (error.response) {
          setErrors(error.response.data.errors);
          Alert(
            "error",
            "Update Failed",
            "Something went wrong, please check again"
          );
        }
      });
  };
  return (
    <div className={cx("form-container")}>
      <div className={cx("banner")}>
        <div className={cx("detail")}>
          <h1>Update Profile</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing
            <br />
            elit, sed do eiusmod tempor incididunt ut labore et <br />
            dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className={cx("heading")}>
        <h1>update profile details</h1>
        <img src={require("../../../assets/img/separator.png")} />
      </div>
      {loading && <Loader />}
      {!loading && (
        <form className={cx("register")}>
          <div className={cx("user")}>
            <img
              src={
                userDataUpdate.image_url
                  ? userDataUpdate.image_url
                  : user_img_url
              }
              alt="image"
            />
          </div>
          <div className={cx("")}>
            <div className={cx("row")}>
              <div className={cx("input-field")}>
                <p className={cx("")}>your name</p>
                <input
                  className={cx("box")}
                  type="text"
                  name="name"
                  placeholder="enter your name..."
                  maxLength={50}
                  onChange={(e) => {
                    if (errors?.name) {
                      setErrors({ ...errors, name: "" });
                    }
                    setUserDataUpdate({
                      ...userDataUpdate,
                      name: e.target.value,
                    });
                  }}
                  value={userDataUpdate.name}
                />
                {errors?.name ? (
                  <div className={cx("error")}>{errors?.name}</div>
                ) : null}
              </div>
              <div className={cx("input-field")}>
                <p className={cx("")}>your email</p>
                <input
                  className={cx("box")}
                  type="email"
                  name="email"
                  placeholder="enter your email..."
                  maxLength={50}
                  onChange={(e) => {
                    if (errors?.email) {
                      setErrors({ ...errors, email: "" });
                    }
                    setUserDataUpdate({
                      ...userDataUpdate,
                      email: e.target.value,
                    });
                  }}
                  value={userDataUpdate.email}
                />
                {errors?.email ? (
                  <div className={cx("error")}>{errors?.email}</div>
                ) : null}
              </div>
            </div>

            <div className={cx("row")}>
              <div className={cx("input-field")}>
                <p className={cx("")}>your current password</p>
                <input
                  className={cx("box")}
                  type="password"
                  name="current password"
                  placeholder="enter your password..."
                  maxLength={50}
                  value={userDataUpdate.old_password}
                  onChange={(e) => {
                    if (errors?.old_password) {
                      setErrors({ ...errors, old_password: "" });
                    }
                    setUserDataUpdate({
                      ...userDataUpdate,
                      old_password: e.target.value,
                    });
                  }}
                  id={cx("current-pw")}
                />
                {errors?.old_password ? (
                  <div className={cx("error")}>{errors.old_password}</div>
                ) : null}
              </div>
              <div className={cx("input-field")}>
                <p className={cx("")}>
                  your new password <span className={cx("required")}>*</span>
                </p>
                <input
                  className={cx("box")}
                  type="password"
                  name="new password"
                  placeholder="enter your new password..."
                  maxLength={50}
                  value={userDataUpdate.password}
                  onChange={(e) => {
                    if (errors?.password) {
                      setErrors({ ...errors, password: "" });
                    }
                    setUserDataUpdate({
                      ...userDataUpdate,
                      password: e.target.value,
                    });
                  }}
                  id={cx("new-pw")}
                />
                {errors?.password ? (
                  <div className={cx("error")}>
                    {errors.password[errors?.password?.length - 1]}
                  </div>
                ) : null}
              </div>
              <div className={cx("input-field")}>
                <p className={cx("")}>
                  confirm your new password
                  <span className={cx("required")}>*</span>
                </p>
                <input
                  className={cx("box")}
                  type="password"
                  name="password-confirmation"
                  placeholder="confirm your new password..."
                  maxLength={50}
                  value={userDataUpdate.password_confirmation}
                  onChange={(e) => {
                    if (errors?.password) {
                      setErrors({ ...errors, password: "" });
                    }
                    setUserDataUpdate({
                      ...userDataUpdate,
                      password_confirmation: e.target.value,
                    });
                  }}
                />
                {errors?.password && errors.password?.length > 1 ? (
                  <div className={cx("error")}>{errors.password[0]}</div>
                ) : null}
              </div>
            </div>
          </div>
          <div className={cx("")}>
            <p className={cx("")}>your profile</p>
            <input
              className={cx("box")}
              type="file"
              name="image"
              accept="image/*"
              onChange={(e) => onImageChoose(e)}
            />
          </div>
          <Btn value={"update now"} onclick={onUpdate} style={{ width: "100%" }}></Btn>
        </form>
      )}
    </div>
  );
}

export default UpdateUserProfile;
