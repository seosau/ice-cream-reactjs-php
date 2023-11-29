import { useState, useEffect } from "react";
import className from "classnames/bind";
import style from "./Order.module.scss";
import Swal from "sweetalert2";
import { Btn, Alert, Loader } from "../../../components";
import axiosClient from "../../../axiosClient/axios";
const cx = className.bind(style);
function Order() {
  const [orderData, setOrderData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState({});
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
  const handleUpdatePaymentStatus = (orderId, index) => {
    if (
      paymentStatus.paymentStatus === "completed" &&
      orderId === paymentStatus.orderId
    ) {
      const updateOrderData = orderData.map((prevOrderInfo) => {
        if (prevOrderInfo.id === orderId) {
          return {
            ...prevOrderInfo,
            payment_status: paymentStatus.paymentStatus,
            status:
              paymentStatus.paymentStatus === "completed"
                ? "delivered"
                : "in progress",
          };
        }
        return prevOrderInfo;
      });
      axiosClient
        .put(`/order/${orderId}`, updateOrderData[index])
        .then(({ data }) => {
          getOrderData();
          Alert({
            title: "Updated!",
            text: "This order will be deliverd to cusomer!",
            icon: "success",
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  const handleDeleteOrder = (orderId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosClient
          .delete(`/order/${orderId}`)
          .then(({ data }) => {
            getOrderData();
            Swal.fire({
              title: "Deleted!",
              text: "This order was deleted!",
              icon: "success",
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };
  useEffect(() => {
    getOrderData();
  }, []);
  return (
    <div className={cx("container")}>
      <div className={cx("heading")}>
        <h1 className={cx("heading-title")}>total orders placed</h1>
        <img src={require("../../../assets/img/separator.png")} alt="spr" />
      </div>
      {loading && <Loader />}
      <div className={cx("box-container")}>
        {!loading && (
          <>
            {orderData.length > 0 ? (
              orderData.map((orderInfo, index) => (
                <div className={cx("box")} key={index}>
                  <div className={cx("status")} style={{ color: "limegreen" }}>
                    {orderInfo.status}
                  </div>
                  <div className={cx("details")}>
                    <p>
                      user name:{" "}
                      <span>
                        {orderInfo.user_name}
                        {/*fetch from db*/}
                      </span>
                    </p>
                    <p>
                      product name:{" "}
                      <span>
                        {orderInfo.product_name}
                        {/*fetch from db*/}
                      </span>
                    </p>
                    <p>
                      quantity:{" "}
                      <span>
                        {orderInfo.quantity}
                        {/*fetch from db*/}
                      </span>
                    </p>
                    <p>
                      place on:{" "}
                      <span>
                        {orderInfo.date}
                        {/*fetch from db*/}
                      </span>
                    </p>
                    <p>
                      phone number:{" "}
                      <span>
                        {orderInfo.phone_number}
                        {/*fetch from db*/}
                      </span>
                    </p>
                    <p>
                      email:{" "}
                      <span>
                        {orderInfo.email}
                        {/*fetch from db*/}
                      </span>
                    </p>
                    <p>
                      total price:{" "}
                      <span>
                        {orderInfo.price * orderInfo.quantity}$
                        {/*fetch from db*/}
                      </span>
                    </p>
                    <p>
                      payment method:
                      <span>
                        {orderInfo.payment_method}
                        {/*fetch from db*/}
                      </span>
                    </p>
                    <p>
                      address:{" "}
                      <span>
                        {orderInfo.address}
                        {/*fetch from db*/}
                      </span>
                    </p>
                  </div>
                  <form>
                    <select
                      className={cx("box")}
                      name="update_payment"
                      onChange={(e) => {
                        setPaymentStatus({
                          orderId: orderInfo.id,
                          paymentStatus: e.target.value,
                        });
                      }}
                    >
                      <option
                        value={
                          orderInfo.payment_status === "pending"
                            ? "pending"
                            : "completed"
                        }
                      >
                        {orderInfo.payment_status === "pending"
                          ? "pending"
                          : "order delivered"}
                      </option>
                      <option
                        value={
                          orderInfo.payment_status !== "pending"
                            ? "pending"
                            : "completed"
                        }
                      >
                        {orderInfo.payment_status !== "pending"
                          ? "pending"
                          : "order delivered"}
                      </option>
                    </select>
                    <div className={cx("flex-btn")}>
                      <Btn
                        value={"update payment"}
                        onclick={() =>
                          handleUpdatePaymentStatus(orderInfo.id, index)
                        }
                      />
                      <Btn
                        value={"delete order"}
                        onclick={() => handleDeleteOrder(orderInfo.id)}
                      />
                    </div>
                  </form>
                </div>
              ))
            ) : (
              <div className={cx("empty")}>
                <p>no order placed yet!</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Order;
