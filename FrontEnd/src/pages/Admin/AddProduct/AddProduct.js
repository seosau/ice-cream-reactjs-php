import className from "classnames/bind";
import { useState } from "react";
import style from "./AddProduct.module.scss";
import { Btn } from "../../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import axiosClient from "../../../axiosClient/axios";
import { useStateContext } from "../../../context/ContextProvider";
import Alert from "../../../components/Alert/Alert";
const cx = className.bind(style);

function AddProduct() {
  const { currentUser } = useStateContext();
  const pathName = window.location.pathname;
  const [product, setProduct] = useState({
    name: "",
    price: "",
    product_detail: "",
    stock: "",
    image: "",
    image_url: "",
    status: "",
  });
  const onImageChoose = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setProduct({
        ...product,
        image: file,
        image_url: reader.result,
      });
      e.target.value = "";
    };
    reader.readAsDataURL(file);
  };
  const storeProduct = async (payload) => {
    if (payload.image) {
      payload.image = payload.image_url;
    }
    delete payload.image_url;
    await axiosClient
      .post("/admin/product", payload)
      .then((res) => {
        setProduct({
          name: "",
          price: "",
          product_detail: "",
          stock: "",
          image: "",
          image_url: "",
          status: "",
        });
        Alert("success", "Insert product successfully");
      })
      .catch((error) => {
        Alert("error", "Something went wrong");
        console.log(error);
      });
  };
  const addProduct = () => {
    const payload = { ...product, status: "active", seller_id: currentUser.id };
    storeProduct(payload);
  };
  const saveAsDraf = () => {
    const payload = {
      ...product,
      status: "inactive",
      seller_id: currentUser.id,
    };
    storeProduct(payload);
  };
  const inputField = cx("input-field");
  return (
    <div className={cx("container")}>
      <div className={cx("heading")}>
        <h1 className={cx("heading-title")}>add product</h1>
        <img src={require("../../../assets/img/separator.png")} alt="spr" />
      </div>
      <div className={cx("form-container")}>
        <form
          action=""
          method="post"
          encType="multipart/form-data"
          className={cx("add-product")}
        >
          <div className={inputField}>
            <p>
              product name<span>*</span>
            </p>
            <input
              className={cx("box")}
              type="text"
              name="name"
              maxLength={100}
              placeholder="add product name"
              onChange={(e) => setProduct({ ...product, name: e.target.value })}
              value={product.name}
            ></input>
          </div>
          <div className={inputField}>
            <p>
              product price<span>*</span>
            </p>
            <input
              className={cx("box")}
              type="number"
              name="price"
              maxLength={100}
              placeholder="add product price"
              required
              onChange={(e) =>
                setProduct({ ...product, price: Number(e.target.value) })
              }
              value={product.price}
            ></input>
          </div>
          <div className={inputField}>
            <p>
              product detail<span>*</span>
            </p>
            <textarea
              className={cx("box")}
              name="description"
              maxLength={1000}
              placeholder="add product detail"
              required
              onChange={(e) =>
                setProduct({ ...product, product_detail: e.target.value })
              }
              value={product.product_detail}
            ></textarea>
          </div>
          <div className={inputField}>
            <p>
              product stock<span>*</span>
            </p>
            <input
              className={cx("box")}
              type="number"
              name="stock"
              maxLength={10}
              min={0}
              max={9999999999}
              placeholder="add product stock"
              required
              onChange={(e) =>
                setProduct({ ...product, stock: Number(e.target.value) })
              }
              value={product.stock}
            ></input>
          </div>
          <div className={inputField}>
            <p>
              product image<span>*</span>
            </p>
            <div className={cx("product-img-box")}>
              {product.image_url && (
                <img
                  src={product.image_url}
                  alt="Image"
                  className={cx("img-choose")}
                />
              )}
              {!product.image_url && (
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
          <div className={cx("flex-btn")}>
            <Btn value="add product" onclick={addProduct} />

            <Btn value="save as draft" onclick={saveAsDraf} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
