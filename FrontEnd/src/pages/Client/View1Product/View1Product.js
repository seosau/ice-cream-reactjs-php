import className from "classnames/bind";
import { Btn, Alert } from "../../../components";
import style from "./View1Product.module.scss"
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
const cx = className.bind(style);

function View1Product(){
    const [datas, setData] = useState([
        {
            id: 1,
            name: "Ice cream 1",
            img: require("../../../assets/img/products/687180636_012c012ccc@2x.jpg"),
            price: 12000,
            inLike: true,
            inCart: true,
            inStock: 10,
            desciption: "Indulge in our exquisite Vanilla Bean ice cream, a timeless classic crafted with the finest Madagascar vanilla. Each velvety scoop promises a symphony of rich, creamy goodness, perfectly balanced to satisfy your sweet cravings. Elevate your dessert experience with the pure essence of vanilla in every bite – a true delight for your taste buds!",
        },
        {
            id: 2,
            name: "Ice cream 2",
            img: require("../../../assets/img/products/product5.jpg"),
            price: 12000,
            inLike: false,
            inCart: false,
            inStock: 0,
            desciption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        },
        {
            id: 3,
            name: "Ice cream",
            img: require("../../../assets/img/products/687180662_012c012ccc@2x.jpg"),
            price: 12000,
            inLike: false,
            inCart: true,
            inStock: 0,
            desciption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        },
        {
            id: 4,
            name: "Ice cream",
            img: require("../../../assets/img/products/514215896_012c012ccc@2x.jpg"),
            price: 12000,
            inLike: false,
            inCart: false,
            inStock: 10,
            desciption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        },

        {
            id: 5,
            name: "Ice cream",
            img: require("../../../assets/img/products/518151488_012c012ccc@2x.jpg"),
            price: 12000,
            inLike: true,
            inCart: false,
            inStock: 0,
            desciption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        }, 
        {
            id: 6,
            name: "Ice cream",
            img: require("../../../assets/img/products/535405916_012c012ccc@2x.jpg"),
            price: 12000,
            inLike: true,
            inCart: false,
            inStock: 10,
            desciption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        },
    ]);   
    const { productId } = useParams();

    const data = datas.find((item) => item.id === parseInt(productId, 10));

    if (!data) {
        return <p>Product not found</p>;
    }    
    const handleClickLike = (itemId) => {
        const updatedDatas = datas.map(item => {
          if (item.id === itemId) {
            return { ...item, inLike: !item.inLike };
          }       
          return item;
        });
    
        setData(updatedDatas);
    };
    const handleClickCart = (itemId) =>{
        const updatedDatas = datas.map(item => {
            if (item.id === itemId) {
              return { ...item, inCart: !item.inCart };
            }
            return item;
          });
      
          setData(updatedDatas);        
    }
    return(
        <div className={cx("main-container")}>
            <section className={cx("view-detail")}>
                <div className={cx("heading")}>
                    <h1>Product Detail</h1>
                        <img src={require("../../../assets/img/separator.png")}
                            alt="separator"
                        />
                </div>      
                <form action="" method="post" className={cx("main-box")}>
                    <div className={cx("img-box")}>
                        <img src={data.img} alt="Main image"/>
                    </div>
                    <div className={cx("detail-box")}>
                        <span className={data.inStock>0 ? cx("in-stock") : cx("out-of-stock")}>
                            {data.inStock>0 ? "In Stock" : "Out of Stock"}
                        </span>
                        <p className={cx("product-price")}>$ {data.price}</p>
                        <h2>{data.name}</h2>
                        <p className={cx("description-text")}>{data.desciption}</p>
                        <div className={cx("detail-btn")}>
                            {/* <Btn 
                                onclick={() => handleClickLike(data.id)} 
                                style={{
                                    width: "250px",
                                }}
                                value={
                                    data.inLike ? "Already In Wishlist" : "Add To Wishlist"
                                }
                            />
                            <Btn 
                                onclick={() => handleClickCart(data.id)} 
                                style={{
                                    width: "250px",
                                }}
                                value={
                                    data.inCart ? "Already In Cart" : "Add To Cart"
                                }
                            /> */}
                            <Btn 
                                onclick={() => handleClickLike(data.id)} 
                                style={{
                                    width: "272px",
                                }}
                                value={
                                    <>
                                        {data.inLike ? "Already In Wishlist" : "Add To Wishlist"}
                                        <FontAwesomeIcon 
                                            icon={faHeart} 
                                            className= {cx({ "detail-icon-style": !data.inLike, "detail-icon-style-clicked": data.inLike })}
                                        />                            
                                    </>
                                }
                                onClick={() => handleClickLike(data.id)}
                            />
                            <Btn 
                                onclick={() => handleClickCart(data.id)} 
                                style={{
                                    width: "272px",
                                }}
                                value={
                                    <>
                                        {data.inCart ? "Already In Cart" : "Add To Cart"}
                                        <FontAwesomeIcon 
                                            icon={faShoppingCart} 
                                            className= {cx({ "detail-icon-style": !data.inCart, "detail-icon-style-clicked": data.inCart })}
                                        />                                        
                                    </>
                                }
                                onClick={() => handleClickCart(data.id)} 
                            />
                        </div>
                    </div>
                </form>          
            </section>
            <div className={cx("products")}>
                <div className={cx("heading")}>
                    <h1>Similar Products</h1>
                        <img src={require("../../../assets/img/separator.png")}
                            alt="separator"
                        />
                </div>
                <div className={cx("box-container")}>
                {
                        datas.length > 0 ? datas.map(data => (
                            <div className={cx("box")} key={data.id}>
                                <Link to={`/shop/view1product/${data.id}`} className={cx("view-order")}>
                                    <img src={data.img} alt="product"/>
                                    <p className={cx("status")}>
                                        {data.inStock>0 ? "In Stock" : "Out of Stock"}
                                    </p>
                                </Link>
                                <div className={cx("content")}>
                                    <div className={cx("price-name")}>
                                        <h2 className={cx("price")}>Price ${data.price}</h2>
                                        <h3 className={cx("name")}> {data.name}</h3>
                                    </div>
                                    <div className={cx("flex-btn")}>
                                        <Btn href={``}
                                            style={{
                                                width: "fit-content",
                                            }}
                                            value="Buy Now" 
                                        />
                                        <div className={cx("like-cart")}>
                                            <FontAwesomeIcon 
                                                icon={faHeart} 
                                                className= {cx({ "icon-style": !data.inLike, "icon-style-clicked": data.inLike })}
                                                id= {cx("like-icon")}
                                                onClick={() => handleClickLike(data.id)}
                                            />
                                            <FontAwesomeIcon
                                                icon={faShoppingCart}
                                                className={cx({ "icon-style": !data.inCart, "icon-style-clicked": data.inCart })}
                                                onClick={() => handleClickCart(data.id)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )) : <div className={cx("empty")}>
                            <p>no product was found!</p>
                        </div>
                    }                    
                </div>
            </div>
        </div>
    )
}

export default View1Product;