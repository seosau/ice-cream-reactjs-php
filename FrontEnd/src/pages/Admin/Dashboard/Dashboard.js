import { useState, useEffect } from "react";
import className from "classnames/bind";
import style from "./Dashboard.module.scss";
import { Btn, Loader } from "../../../components";
import { useStateContext } from "../../../context/ContextProvider";
import axiosClient from "../../../axiosClient/axios";
const cx = className.bind(style);

function Dashboard() {
  const { currentUser } = useStateContext();
  const [data, setData] = useState({});
  const [loading, setLoaing] = useState(false);
  const currentURL = window.location.pathname;
  useEffect(() => {
    setLoaing(true);
    axiosClient
      .get(currentURL)
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
        <h1 className={cx("heading-title")}>dashboard</h1>
        <img src={require("../../../assets/img/separator.png")} alt="spr" />
      </div>
      {loading && <Loader />}
      {!loading && (
        <div className={cx("box-container")}>
          <div className={cx("box")}>
            <h3 className={cx("box-title")}>Welcome !</h3>
            <p>{currentUser.name}</p> {/*fetch_profile['name'] */}
            <Btn
              value={"update profile"}
              style={{
                width: "fit-content",
              }}
              href={
                currentURL.includes("seller")
                  ? "/seller/updateprofile"
                  : "/admin/updateprofile"
              }
            ></Btn>
          </div>
          <div className={cx("box")}>
            {/*select mesage from db*/}
            <h3 className={cx("box-title")}>
              {data.totalMessage}
              {/*Number of message */}
            </h3>
            <p>unread message</p>

            <Btn
              value={"see message"}
              style={{
                width: "fit-content",
              }}
              href={
                currentURL.includes("seller")
                  ? "/seller/message"
                  : "/admin/message"
              }
            ></Btn>
          </div>
          <div className={cx("box")}>
            {/* select product from db*/}
            <h3 className={cx("box-title")}>
              {data.totalProducts}
              {/*Number of product */}
            </h3>

            <p>products added</p>
            <Btn
              href={
                currentURL.includes("seller")
                  ? "/seller/addproduct"
                  : "/admin/viewproduct"
              }
              value={
                currentURL.includes("seller") ? "add product" : "view product"
              }
              style={{
                width: "fit-content",
              }}
            ></Btn>
          </div>
          <div className={cx("box")}>
            {/* select active product from db*/}
            <h3 className={cx("box-title")}>
              {data.totalActiveProducts}
              {/*Number of active product */}
            </h3>

            <p>Total active products</p>

            <Btn
              href={
                currentURL.includes("seller")
                  ? "/seller/viewproduct?sortBy=status&order=active"
                  : "/admin/viewproduct?sortBy=status&order=active"
              }
              value={"View active product"}
              style={{
                width: "fit-content",
              }}
            ></Btn>
          </div>
          <div className={cx("box")}>
            {/* select deactive product from db*/}
            <h3 className={cx("box-title")}>
              {data.totalIactiveProducts}
              {/*Number of inactive product */}
            </h3>

            <p>Total inactive products</p>

            <Btn
              href={
                currentURL.includes("seller")
                  ? "/seller/viewproduct?sortBy=status&order=inactive"
                  : "/admin/viewproduct?sortBy=status&order=inactive"
              }
              value="View inactive product"
              style={{
                width: "fit-content",
              }}
            ></Btn>
          </div>
          {data.totalUserAccounts > 0 ? (
            <div className={cx("box")}>
              {/*select users from db*/}
              <h3 className={cx("box-title")}>
                {data.totalUserAccounts}
                {/*Number of users */}
              </h3>
              <p>users account</p>
              <Btn
                href={"/admin/useraccount"}
                value={"see users"}
                style={{
                  width: "fit-content",
                }}
              ></Btn>
            </div>
          ) : null}
          {data.totalSellerAccounts > 0 ? (
            <div className={cx("box")}>
              {/*select sellers from db*/}
              <h3 className={cx("box-title")}>
                {data.totalSellerAccounts}
                {/*Number of sellers */}
              </h3>
              <p>sellers account</p>
              <Btn
                href={"/admin/staffaccount"}
                value={"see sellers"}
                style={{
                  width: "fit-content",
                }}
              ></Btn>
            </div>
          ) : null}
          <div className={cx("box")}>
            {/*select orders from db*/}
            <h3 className={cx("box-title")}>{data.totalOrderPlaced}</h3>
            <p>total orders placed</p>

            <Btn
              href={
                currentURL.includes("seller") ? "/seller/order" : "/admin/order"
              }
              value={"total orders"}
              style={{
                width: "fit-content",
              }}
            ></Btn>
          </div>
          <div className={cx("box")}>
            {/*select confirm orders from db*/}
            <h3 className={cx("box-title")}>
              {data.totalOrderConfirmed}
              {/*Number of confirm orders */}
            </h3>
            <p>total confirm orders </p>

            <Btn
              value={"confirm orders"}
              href={
                currentURL.includes("seller")
                  ? "/seller/order?status=delivered&payment_status=completed"
                  : "/admin/order?status=delivered&payment_status=completed"
              }
              style={{
                width: "fit-content",
              }}
            ></Btn>
          </div>
          <div className={cx("box")}>
            {/*select canceled orders from db*/}
            <h3 className={cx("box-title")}>
              {data.totalOrderCanceld}
              {/*Number of canceled orders */}
            </h3>
            <p>total canceled orders </p>

            <Btn
              value={"canceled orders"}
              href={ currentURL.includes("seller")
              ? '/seller/order?status=canceled&payment_status=pending'
              : '/admin/order?status=canceled&payment_status=pending'}
              style={{
                width: "fit-content",
              }}
            ></Btn>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
