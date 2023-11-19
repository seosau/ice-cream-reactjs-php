import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import className from "classnames/bind";
import style from "./Order.module.scss";
import { format } from "date-fns";
import { Btn, Loader } from "../../../components";
import axiosClient from "../../../axiosClient/axios";
const cx = className.bind(style);

function Order() {
  const [loading, setLoading] = useState(false);
  const [orderData, setOrderData] = useState([
    {
      id: 1,
      name: "Ice cream",
      img: require("../../../assets/img/products/product0.jpg"),
      price: 120,
      date: "2023-11-01",
      status: "in progress",
    },
    {
      id: 2,
      name: "Ice cream",
      img: require("../../../assets/img/products/product0.jpg"),
      price: 120,
      date: "2023-11-01",
      status: "in progress",
    },
    {
      id: 3,
      name: "Ice cream",
      img: require("../../../assets/img/products/product0.jpg"),
      price: 120,
      date: "2023-11-01",
      status: "in progress",
    },
    {
      id: 4,
      name: "Ice cream",
      img: require("../../../assets/img/products/product0.jpg"),
      price: 120,
      date: "2023-11-01",
      status: "in progress",
    },

    {
      id: 5,
      name: "Ice cream",
      img: require("../../../assets/img/products/product0.jpg"),
      price: 120,
      date: "2023-11-01",
      status: "delivered",
    },
    {
      id: 6,
      name: "Ice cream",
      img: require("../../../assets/img/products/product0.jpg"),
      price: 120,
      date: "2023-10-20",
      status: "canceled",
    },
  ]);
  const handleButtonCancel = (dataId) => {
    // let orderDate = new Date();
    // orderDate = format(orderDate, "yyyy-MM-dd");
    // const updatedStatus = datas.map(data => {
    //     if (data.id === dataId)
    //         return {
    //             ...data,
    //             status: data.status.toLowerCase() === "canceled" ? "in progress" : "canceled",
    //             date: data.date = orderDate,
    //         }
    //     return data;
    // })
    // setData(updatedStatus);
  };
  const getOrderData = () => {
    setLoading(true);
    axiosClient
      .get("/order")
      .then(({ data }) => {
        setOrderData(data.orderList);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getOrderData();
  }, []);
  return (
    <div className={cx("main-container")}>
      <div className={cx("orders")}>
        <div className={cx("heading")}>
          <h1>My Orders</h1>
          <img
            src={require("../../../assets/img/separator.png")}
            alt="separator"
          />
        </div>
        {loading && <Loader />}
        <div className={cx("box-container")}>
          {!loading && (
            <>
              {orderData.length > 0 ? (
                orderData.map((orderInfo) => (
                  <div className={cx("box")} key={orderInfo.id}>
                    <Link
                      to={`/order/vieworder/${orderInfo.id}`}
                      className={cx("view-order")}
                    >
                      <img src={orderInfo.image_url} alt="ordered" />
                      <p className={cx("date")}>{orderInfo.date}</p>
                    </Link>
                    <div className={cx("content")}>
                      <div className={cx("flex-btn")}>
                        <h3 className={cx("name")}> {orderInfo.product_name}</h3>
                        <p className={cx("price")}>Price: {orderInfo.price}$</p>
                        <p
                          className={cx(
                            "status",
                            `${orderInfo.status.toLowerCase()}`
                          )}
                        >
                          {orderInfo.status}
                        </p>
                      </div>
                      <div className={cx("flex-btn")}>
                        <Btn
                          href={`/order/vieworder/${orderInfo.id}`}
                          style={{
                            width: "fit-content",
                          }}
                          value="view order"
                        />
                        {orderInfo.status.toLowerCase() ===
                        "delivered" ? null : (
                          <Btn
                            href=""
                            style={{
                              width: "fit-content",
                            }}
                            value={
                              orderInfo.status === "canceled"
                                ? "order again"
                                : "cancel"
                            }
                            onclick={() => handleButtonCancel(orderInfo.id)}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className={cx("empty")}>
                  <p>no product was found!</p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Order;
