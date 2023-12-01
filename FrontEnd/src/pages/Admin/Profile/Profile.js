import { useState, useEffect } from "react";

import className from "classnames/bind";
import style from "./Profile.module.scss";
import { Btn } from "../../../components";
import { useStateContext } from "../../../context/ContextProvider";
import axiosClient from "../../../axiosClient/axios";
const cx = className.bind(style);
function Profile() {
  const [data, setData] = useState({});
  const [loading, setLoaing] = useState(false);

  const { currentUser } = useStateContext();
  const image_url = currentUser.image_url
    ? currentUser.image_url
    : require("../../../assets/img/avt.png");
  useEffect(() => {
    setLoaing(true);
    axiosClient
      .get("/admin/dashboard")
      .then(({ data }) => {
        setData(data);
        setLoaing(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className={cx("container")}>
      <div className={cx("heading")}>
        <h1 className={cx("heading-title")}>profile details</h1>
        <img src={require("../../../assets/img/separator.png")} alt="spr" />
      </div>

      <div className={cx("details")}>
        <div className={cx("seller")}>
          <img
            alt=""
            /*Fetch from db */
            src={image_url}
          />
          <h3>{currentUser.name}</h3>
          <span>seller</span>
          <Btn href="/admin/updateprofile" value="update your profile" />
        </div>
        <div className={cx("flex")}>
          <div className={cx("box")}>
            <span>{/*fetch total produts*/}{data.totalProducts}</span>
            <p>Total Products</p>
            <Btn href="/admin/viewproduct" value="view your products" />
          </div>
          <div className={cx("box")}>
            <span>
              {/*fetch total orders*/}
              {data.totalOrderPlaced}
            </span>
            <p>Total Orders Placed</p>

            <Btn href="/admin/order" value="view all orders" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
