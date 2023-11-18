import { useState, useEffect } from "react";
import className from "classnames/bind";
import style from "./Checkout.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Btn, Loader } from "../../../components";
import axiosClient from "../../../axiosClient/axios";
import { useStateContext } from "../../../context/ContextProvider";
const cx = className.bind(style);

export default function Checkout() {
  const { currentUser } = useStateContext();
  const [orderData, setOrderData] = useState({
    name: currentUser.name,
    phone_number: "",
    email: currentUser.email,
    payment_method: "cash on delivery",
    address: "",
  });
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [errors, setErrors] = useState({});
  const [grandTotal, setGrandTotal] = useState(0);
  const getProductsInCart = () => {
    setLoading(true);
    axiosClient
      .get("/cart")
      .then(({ data }) => {
        setProducts(data.cartList);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };
  const handleTotalPrice = () => {
    let total = 0;
    products.forEach((product) => {
      total += product.price * product.quantity;
    });
    setGrandTotal(total);
  };
  const handleSubmitOrder = () => {
    const payload = {...orderData, products};
    axiosClient.post('/order', payload)
    .then(({data}) => {
        console.log(data)
    })
    .catch(error => {
        console.log(error)
    })
  };
  useEffect(() => {
    getProductsInCart();
  }, []);
  useEffect(() => {
    handleTotalPrice();
  }, [products]);
  return (
    <div className={cx("main-container")}>
      <div className={cx("checkout")}>
        <div className={cx("heading")}>
          <h1>checkout summary</h1>
          <img
            src={require("../../../assets/img/separator.png")}
            alt="separator"
          />
        </div>
        {loading && <Loader />}
        <div className={cx("summary")}>
          <h3>My Bag</h3>
          <div className={cx("box-container")}>
            {products.map((product) => (
              <div className={cx("box")} key={product.product_id}>
                <img
                  src={product.image_url}
                  alt={product.name}
                  className={cx("")}
                />
                <div className={cx("")}>
                  <h3 className={cx("name")}>{product.name}</h3>
                  <p className={cx("price")}>
                    {product.price}$ X {product.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className={cx("total")}>
            <span>Total amount payable: {grandTotal}$</span>
          </div>
        </div>
        <div className={cx("form-container")}>
          <form className={cx("register")}>
            <h3 className={cx("")}>billing details</h3>
            <div className={cx("input-field")}>
              <p className={cx("")}>
                your name <span className={cx("")}>*</span>
              </p>
              <input
                className={cx("box")}
                type="text"
                name="name"
                placeholder="enter your name..."
                value={orderData.name}
                disabled
              />
            </div>
            <div className={cx("input-field")}>
              <p className={cx("")}>
                your phone number <span className={cx("")}>*</span>
              </p>
              <input
                className={cx("box")}
                type="tel"
                name="number"
                placeholder="enter your number..."
                maxLength={50}
                value={orderData.phone_number}
                onChange={(e) => {
                  //   if (errors?.number) {
                  //     setErrors({ ...errors, number: "" });
                  //   }
                  setOrderData({
                    ...orderData,
                    phone_number: e.target.value,
                  });
                }}
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
                disabled
                value={orderData.email}
              />

              <div className={cx("input-field")}>
                <p className={cx("")}>
                  payment method <span className={cx("")}>*</span>
                </p>
                <select
                  name="method"
                  className={cx("box")}
                  value={orderData.payment_method}
                  onChange={(e) => {
                    setOrderData({
                      ...orderData,
                      payment_method: e.target.value,
                    });
                  }}
                >
                  <option value="cash on delivery">cash on delivery</option>
                  <option value="credit or debit card">
                    credit or debit card
                  </option>
                  <option value="net banking">net banking</option>
                </select>
              </div>
            </div>

            <div className={cx("input-field")}>
              <p className={cx("")}>
                your address <span className={cx("")}>*</span>
              </p>
              <input
                className={cx("box")}
                type="text"
                name="country"
                placeholder="enter your address..."
                maxLength={50}
                value={orderData.address}
                onChange={(e) => {
                  //   if (errors?.country) {
                  //     setErrors({ ...errors, country: "" });
                  //   }
                  setOrderData({
                    ...orderData,
                    address: e.target.value,
                  });
                }}
              />
            </div>

            <Btn value="place order" onclick={handleSubmitOrder} />
          </form>
        </div>
      </div>
    </div>
  );
}
