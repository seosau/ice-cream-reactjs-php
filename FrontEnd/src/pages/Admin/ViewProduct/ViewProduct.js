import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import className from "classnames/bind";
import style from "./ViewProduct.module.scss";
import { Btn } from "../../../components";
import { Loader } from "../../../components";
import axiosClient from "../../../axiosClient/axios";
import ProductListItem from "../../../components/ProductListItem/ProductListItem";

const cx = className.bind(style);

function ViewProduct() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const getProducts = () => {
    setLoading(true);
    axiosClient
      .get("/admin/product")
      .then(({ data }) => {
        setProducts(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getProducts();
  }, []);
  const onDelete = (id) => {
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
          .delete(`/admin/product/${id}`)
          .then((res) => {
            getProducts();
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
  return (
    <div className={cx("container")}>
      <div className={cx("heading")}>
        <h1 className={cx("heading-title")}>your products</h1>
        <img src={require("../../../assets/img/separator.png")} alt="spr" />
      </div>
      {loading && <Loader/>}
      {!loading && (
        <div className={cx("box-container")}>
          {products.length > 0 ? (
            products.map((product) => (
              <ProductListItem
                item={product}
                onDelete={onDelete}
                key={product.id}
              />
            ))
          ) : (
            <div className={cx("empty")}>
              <p>no product added yet!</p>
              <Btn
                style={{
                  width: "33%",
                  flex: 1,
                }}
                value={"add product"}
                href={"/admin/addproduct"}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ViewProduct;
