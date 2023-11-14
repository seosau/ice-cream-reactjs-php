import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import className from "classnames/bind";
import style from "./Shop.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Btn, Loader } from "../../../components";
import FilterProducts from "../../../components/FilterProducts/FilterProducts";
import PaginationLinks from "../../../components/PaginationLinks/PaginationLinks";
import axiosClient from "../../../axiosClient/axios";
const cx = className.bind(style);

function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [meta, setMeta] = useState({});
  const getProducts = (url = `/menu`) => {
    setLoading(true);
    axiosClient
      .get(url)
      .then(({ data }) => {
        setProducts(data.data);
        setMeta(data.meta);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const onPageClick = (link) => {
    getProducts(link.url);
  };
  useEffect(() => {
    getProducts();
  }, []);
  // const [datas, setData] = useState([
  //     {
  //         id: 1,
  //         name: "Ice cream 1",
  //         img: require("../../../assets/img/products/687180636_012c012ccc@2x.jpg"),
  //         price: 12000,
  //         inLike: true,
  //         inCart: true,
  //     },
  //     {
  //         id: 2,
  //         name: "Ice cream 2",
  //         img: require("../../../assets/img/products/product5.jpg"),
  //         price: 12000,
  //         inLike: false,
  //         inCart: false,
  //     },
  //     {
  //         id: 3,
  //         name: "Ice cream",
  //         img: require("../../../assets/img/products/687180662_012c012ccc@2x.jpg"),
  //         price: 12000,
  //         inLike: false,
  //         inCart: true,
  //     },
  //     {
  //         id: 4,
  //         name: "Ice cream",
  //         img: require("../../../assets/img/products/514215896_012c012ccc@2x.jpg"),
  //         price: 12000,
  //         inLike: false,
  //         inCart: false,
  //     },

  //     {
  //         id: 5,
  //         name: "Ice cream",
  //         img: require("../../../assets/img/products/518151488_012c012ccc@2x.jpg"),
  //         price: 12000,
  //         inLike: true,
  //         inCart: false,
  //     },
  //     {
  //         id: 6,
  //         name: "Ice cream",
  //         img: require("../../../assets/img/products/535405916_012c012ccc@2x.jpg"),
  //         price: 12000,
  //         inLike: true,
  //         inCart: false,
  //     },
  // ]);
  const handleClickLike = (itemId) => {
    // const updatedDatas = datas.map(item => {
    //   if (item.id === itemId) {
    //     return { ...item, inLike: !item.inLike };
    //   }
    //   return item;
    // });
    // setData(updatedDatas);
  };
  const handleClickCart = (itemId) => {
    // const updatedDatas = datas.map(item => {
    //     if (item.id === itemId) {
    //       return { ...item, inCart: !item.inCart };
    //     }
    //     return item;
    //   });
    //   setData(updatedDatas);
  };
  return (
    <div className={cx("main-container")}>
      <div className={cx("banner")}>
        <div className={cx("detail")}>
          <h1>Our Menu</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing
            <br />
            elit, sed do eiusmod tempor incididunt ut labore et <br />
            dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className={cx("products")}>
        <div className={cx("heading")}>
          <h1>Our Latest Flavoure</h1>
          <img
            src={require("../../../assets/img/separator.png")}
            alt="separator"
          />
        </div>
        {/* {products.length > 0 && (
          <FilterProducts
            meta={meta}
            onPageClick={onPageClick}
            onGetSortValue={onGetSortValue}
          />
        )} */}
        {loading && <Loader />}
        <div className={cx("box-container")}>
          {!loading && (
            <>
              {products.length > 0 ? (
                products.map((product) => (
                  <div className={cx("box")} key={product.id}>
                    <Link
                      to={`/shop/view1product/${product.id}`}
                      className={cx("view-order")}
                    >
                      <img src={product.image_url} alt="product" />
                    </Link>
                    <div className={cx("content")}>
                      <div className={cx("flex-btn")}>
                        <h3 className={cx("name")}> {product.name}</h3>
                        <p className={cx("price")}>Price: ${product.price}</p>
                      </div>
                      <div className={cx("flex-btn")}>
                        <Btn
                          href={``}
                          style={{
                            width: "fit-content",
                          }}
                          value="Buy Now"
                        />
                        <FontAwesomeIcon
                          icon={faHeart}
                          className={cx({
                            "icon-style": true,
                            "icon-style-clicked": false,
                          })}
                          onClick={() => handleClickLike(product.id)}
                        />
                        <FontAwesomeIcon
                          icon={faShoppingCart}
                          className={cx({
                            "icon-style": true,
                            "icon-style-clicked": false,
                          })}
                          onClick={() => handleClickCart(product.id)}
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
        {products.length > 0 && (
          <PaginationLinks meta={meta} onPageClick={onPageClick} />
        )}
      </div>
    </div>
  );
}

export default Shop;
