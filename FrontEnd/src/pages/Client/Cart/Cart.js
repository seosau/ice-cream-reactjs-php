import { useState, useEffect } from "react";
import className from "classnames/bind";
import style from "./Cart.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { Alert, Btn, Loader } from "../../../components";
import axiosClient from "../../../axiosClient/axios";
import { useStateContext } from "../../../context/ContextProvider";
const cx = className.bind(style);

function Cart() {
  const { setCartIds, setQuantityCart } = useStateContext();
  const [grandTotal, setGrandTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
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
    const total = products.reduce((accumulator, product) => {
      return accumulator + product.price * product.quantity;
    }, 0);
    setGrandTotal(total);
  };
  // const handleQuantity = (number, id) => {
  //   setProducts((prevProducts) => {
  //     return prevProducts.map((product) => {
  //       if (product.product_id === id) {
  //         if (number === 1 || number === -1) {
  //           return {
  //             ...product,
  //             quantity:
  //               product.quantity + number <= 0
  //                 ? 1
  //                 : product.quantity + number > product.stock
  //                 ? product.stock
  //                 : product.quantity + number,
  //           };
  //         }
  //         return {
  //           ...product,
  //           quantity:
  //             number > 0 && number <= product.stock ? number : product.quantity,
  //         };
  //       }
  //       return product;
  //     });
  //   });
  // };
  const handleQuantity = (number, id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.product_id === id
          ? {
              ...product,
              quantity:
                number === 1
                  ? Math.min(product.quantity + 1, product.stock)
                  : number === -1
                  ? Math.max(product.quantity - 1, 1)
                  : Math.min(Math.max(number, 1), product.stock),
            }
          : product
      )
    );
  };
  const handleUpdateCart = (cart_id, quantity) => {
    debugger;
    axiosClient
      .put(`/cart/${cart_id}`,{ quantity})
      .then(({ data }) => {
        Alert("success", "Update quantity successfully");
        setProducts(data.cartList);
        setQuantityCart(data.quantity);
      })
      .catch((error) => console.log(error));
  };
  const handleButtonDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosClient
          .delete(`/cart/${id}`)
          .then(({ data }) => {
            setCartIds(data.cartListIds);
            setQuantityCart(data.quantity);
            getProductsInCart();
            Swal.fire({
              title: "Deleted!",
              text: "Your product has been deleted.",
              icon: "success",
            });
          })
          .catch((error) => {
            Swal.fire({
              title: "Something went wrong",
              icon: "error",
            });
          });
      }
    });
  };
  useEffect(() => {
    getProductsInCart();
  }, []);
  useEffect(() => {
    handleTotalPrice();
  }, [products]);

  return (
    <div className={cx("main-container")}>
      <div className={cx("products")}>
        <div className={cx("heading")}>
          <h1>My cart</h1>
          <img
            src={require("../../../assets/img/separator.png")}
            alt="separator"
          />
        </div>
        {loading && <Loader />}
        <div className={cx("box-container")}>
          {!loading && (
            <>
              {products.length > 0 ? (
                products.map((product, index) => (
                  <div key={index} className={cx("box")}>
                    <img src={product.image_url} alt="product" />
                    <div className={cx("content")}>
                      <img
                        alt=""
                        src={require("../../../assets/img/shape-19.png")}
                        className={cx("sharp")}
                      />
                      <h3>{product.name}</h3>
                      <div className={cx("flex-btn")}>
                        <p className={cx("price")}>Price: ${product.price}</p>
                        <div className={cx("quantity")}>
                          <button
                            className={cx("btn-quantity", "quanity-item")}
                            onClick={() =>
                              handleQuantity(-1, product.product_id)
                            }
                          >
                            <FontAwesomeIcon icon={faMinus} color={"#da6285"} />
                          </button>
                          <input
                            className={cx("quantity-input")}
                            type="text"
                            value={product.quantity}
                            onChange={(e) =>
                              handleQuantity(
                                Number(e.target.value),
                                product.product_id
                              )
                            }
                          />
                          <button
                            className={cx("btn-quantity")}
                            onClick={() =>
                              handleQuantity(1, product.product_id)
                            }
                          >
                            <FontAwesomeIcon icon={faPlus} color={"#da6285"} />
                          </button>
                        </div>

                        <Btn
                          onclick={() => handleUpdateCart(product.cart_id, product.quantity)}
                          style={{
                            width: "fit-content",
                          }}
                          value={<FontAwesomeIcon icon={faEdit} />}
                        />
                      </div>
                      <div className={cx("flex-btn")}>
                        <p className={cx("sub-total")}>
                          Sub total:
                          <span> {product.price * product.quantity}$</span>
                        </p>
                        <Btn
                          onclick={() => handleButtonDelete(product.cart_id)}
                          style={{
                            width: "fit-content",
                          }}
                          value="delete"
                        />
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

        {grandTotal > 0 ? (
          <div className={cx("cart-total")}>
            <p>
              total amount payable: <span>{grandTotal}$</span>
            </p>
            <Btn
              href="/checkout"
              style={{
                width: "fit-content",
              }}
              value="Proceed to checkout"
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Cart;
