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
  const [params, setParams] = useState({});
  const [paymentStatus, setPaymentStatus] = useState({});
  const currentURL = window.location.search;
  const currentPath = window.location.pathname;
  const isSort = currentURL.includes("status");
  const getOrderData = () => {
    const url = currentPath.includes("seller")
      ? "/seller/order"
      : "/admin/order";
    setLoading(true);
    var payload = {};
    if (url.includes("order")) {
      payload = { ...params };
    }
    axiosClient
      .get(url)
      .then(({ data }) => {
        setOrderData(data.orderList);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getProductsFromCurrentUrl = () => {
    if (isSort === true) {
      const searchParams = new URLSearchParams(currentURL);
      const status = searchParams.get("status");
      const payment_status = searchParams.get("payment_status");
      setParams({
        status: status,
        payment_status: payment_status,
      });
      onGetSortValue(status, payment_status);
    } else {
      getOrderData();
    }
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
        .put(`/seller/order/${orderId}`, updateOrderData[index])
        .then(({ data }) => {
          getOrderData();
          Alert(
            "success",
            "Updated!",
            "This order will be deliverd to cusomer!"
          );
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
          .delete(
            currentPath.includes("seller")
              ? `/seller/order/${orderId}`
              : `/admin/order/${orderId}`
          )
          .then(({ data }) => {
            // getProductsFromCurrentUrl();
            setOrderData((prevOrderData) =>
              prevOrderData.filter((orderInfo) => orderInfo.id !== orderId)
            );
            Swal.fire({
              icon: "success",
              title: "Deleted!",
              text: "This order was deleted!",
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };
  const onGetSortValue = (status, payment_status) => {
    setLoading(true);
    setParams({ status, payment_status });
    axiosClient
      .get(currentPath.includes("seller") ? "/seller/order" : "/admin/order", {
        params: {
          status: status,
          payment_status: payment_status,
        },
      })
      .then(({ data }) => {
        setOrderData(data.orderList);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getProductsFromCurrentUrl();
  }, [currentPath]);
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
                  <div
                    className={cx("status")}
                    style={{
                      color:
                        orderInfo.status === "canceled"
                          ? "red"
                          : orderInfo.status === "in progress"
                          ? "orange"
                          : "green",
                    }}
                  >
                    {orderInfo.status}
                  </div>
                  <div className={cx("details")}>
                    <p>
                      seller name:
                      <span>
                        {orderInfo.seller_name}
                        {/*fetch from db*/}
                      </span>
                    </p>
                    <p>
                      user name:
                      <span>
                        {orderInfo.user_name}
                        {/*fetch from db*/}
                      </span>
                    </p>
                    <p>
                      product name:
                      <span>
                        {orderInfo.product_name}
                        {/*fetch from db*/}
                      </span>
                    </p>
                    <p>
                      quantity:
                      <span>
                        {orderInfo.quantity}
                        {/*fetch from db*/}
                      </span>
                    </p>
                    <p>
                      place on:
                      <span>
                        {orderInfo.date}
                        {/*fetch from db*/}
                      </span>
                    </p>
                    <p>
                      phone number:
                      <span>
                        {orderInfo.phone_number}
                        {/*fetch from db*/}
                      </span>
                    </p>
                    <p>
                      email:
                      <span>
                        {orderInfo.email}
                        {/*fetch from db*/}
                      </span>
                    </p>
                    <p>
                      total price:
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
                      address:
                      <span>
                        {orderInfo.address}
                        {/*fetch from db*/}
                      </span>
                    </p>
                    {orderInfo.status === "canceled" ? null : (
                      <select
                        className={cx("box")}
                        name="update_payment"
                        value={orderInfo.payment_status}
                        onChange={(e) => {
                          setPaymentStatus({
                            orderId: orderInfo.id,
                            paymentStatus: e.target.value,
                          });
                        }}
                      >
                        <option value="completed">completed</option>
                        <option value="pending">pending</option>
                      </select>
                    )}
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
                  </div>
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
