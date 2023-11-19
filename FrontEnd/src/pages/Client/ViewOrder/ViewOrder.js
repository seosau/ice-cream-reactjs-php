import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import className from "classnames/bind";
import style from "./ViewOrder.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { format } from "date-fns";
import { Btn, Loader } from "../../../components";
import axiosClient from "../../../axiosClient/axios";
const cx = className.bind(style);

function ViewOrder() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [orderInfo, setOrderInfo] = useState({});
  useEffect(() => {
    setLoading(true);
    axiosClient
      .get(`/order/${id}`)
      .then(({ data }) => {
        setOrderInfo(...data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleButtonCancel = (dataId) => {
    // let orderDate = new Date();
    // orderDate = format(orderDate, "yyyy-MM-dd");
    // const updatedStatus = datas.map(data => {
    //     if (data.id === parseInt(dataId, 10))
    //         return {
    //             ...data,
    //             status: data.status.toLowerCase() === "canceled" ? "in progress" : "canceled",
    //             date: data.date = orderDate,
    //         }
    //     return data;
    // })
    // setData(updatedStatus);
  };

  return (
    <div className={cx("main-container")}>
      <div className={cx("order-detail")}>
        <div className={cx("heading")}>
          <h1>Order Detail</h1>
          <img
            src={require("../../../assets/img/separator.png")}
            alt="separator"
          />
        </div>
        {loading && <Loader />}
        {!loading && (
          <div className={cx("box-container")}>
            <div className={cx("box")}>
              <div className={cx("col")}>
                <p className={cx("date")}> {orderInfo.date} </p>
                <img src={orderInfo.image_url} alt="product" />
                <h3 className={cx("nameProduct")}>{orderInfo.product_name}</h3>
                <div className={cx("flex")}>
                  <p className={cx("price")}>price: {orderInfo.price}$</p>
                  <p className={cx("quantity")}>
                    quantity: {orderInfo.quantity}{" "}
                  </p>
                </div>
                <p className={cx("grand-total")}>
                  {" "}
                  total amount: {orderInfo.price * orderInfo.quantity}$
                </p>
              </div>
              <div className={cx("col")}>
                <h3 className={cx("title")}> billing address </h3>
                <p className={cx("user")}>
                  <FontAwesomeIcon icon={faUser} className={cx("icon")} />
                  {orderInfo.user_name}
                </p>
                <p className={cx("user")}>
                  <FontAwesomeIcon icon={faPhone} className={cx("icon")} />
                  {orderInfo.phone_number}
                </p>
                <p className={cx("user")}>
                  <FontAwesomeIcon icon={faEnvelope} className={cx("icon")} />
                  {orderInfo.email}
                </p>
                <p className={cx("user")}>
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className={cx("icon")}
                  />
                  {orderInfo.address}
                </p>
                <p
                  className={cx("status", `${orderInfo.status?.toLowerCase()}`)}
                >
                  {orderInfo.status}
                </p>
                {orderInfo.status?.toLowerCase() === "delivered" ? null : (
                  <Btn
                    href=""
                    value={
                      orderInfo.status === "canceled" ? "order again" : "cancel"
                    }
                    onclick={() => handleButtonCancel(orderInfo.product_id)}
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ViewOrder;
