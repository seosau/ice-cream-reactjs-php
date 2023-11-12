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

function Shop(){
    const [datas, setData] = useState([
        {
            id: 1,
            name: "Ice cream 1",
            img: require("../../../assets/img/products/687180636_012c012ccc@2x.jpg"),
            price: 12000,
            inLike: true,
            inCart: true,
            desciption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        },
        {
            id: 2,
            name: "Ice cream 2",
            img: require("../../../assets/img/products/product5.jpg"),
            price: 12000,
            inLike: false,
            inCart: false,
            desciption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        },
        {
            id: 3,
            name: "Ice cream",
            img: require("../../../assets/img/products/687180662_012c012ccc@2x.jpg"),
            price: 12000,
            inLike: false,
            inCart: true,
            desciption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        },
        {
            id: 4,
            name: "Ice cream",
            img: require("../../../assets/img/products/514215896_012c012ccc@2x.jpg"),
            price: 12000,
            inLike: false,
            inCart: false,
            desciption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        },

        {
            id: 5,
            name: "Ice cream",
            img: require("../../../assets/img/products/518151488_012c012ccc@2x.jpg"),
            price: 12000,
            inLike: true,
            inCart: false,
            desciption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        }, 
        {
            id: 6,
            name: "Ice cream",
            img: require("../../../assets/img/products/535405916_012c012ccc@2x.jpg"),
            price: 12000,
            inLike: true,
            inCart: false,
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
                        <h2>{data.name}</h2>
                        <p className={cx("product-price")}>Price: {data.price}</p>
                        <h3>Description</h3>
                        <p className={cx("description-text")}>{data.desciption}</p>
                        <div className={cx("detail-btn")}>
                            <Btn 
                                onclick={() => handleClickLike(data.id)} 
                                style={{
                                    width: "fit-content",
                                }}
                                value={
                                    data.inLike ? "Already In Wishlist" : "Add To Wishlist"
                                }
                            />
                            <Btn 
                                onclick={() => handleClickCart(data.id)} 
                                style={{
                                    width: "fit-content",
                                }}
                                value={
                                    data.inCart ? "Already In Cart" : "Add To Cart"
                                }
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
                                </Link>
                                <div className={cx("content")}>
                                    <div className={cx("flex-btn")}>
                                        <h3 className={cx("name")}> {data.name}</h3>
                                        <p className={cx("price")}>Price: {data.price}</p>
                                    </div>
                                    <div className={cx("flex-btn")}>
                                        <Btn href={''}
                                            style={{
                                                width: "fit-content",
                                            }}
                                            value="Buy Now" />
                                        <FontAwesomeIcon 
                                            icon={faHeart} 
                                            className= {cx({ "icon-style": !data.inLike, "icon-style-clicked": data.inLike })}
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
                        )) : <div className={cx("empty")}>
                            <p>no product was found!</p>
                        </div>
                    }                    
                </div>
            </div>
        </div>
    )
}

export default Shop;