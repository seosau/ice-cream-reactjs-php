import className from "classnames/bind";
import { Btn } from "../../../components";
import style from "./Shop.module.scss"
import { useState } from "react";
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
        },
        {
            id: 2,
            name: "Ice cream 2",
            img: require("../../../assets/img/products/product5.jpg"),
            price: 12000,
            inLike: false,
            inCart: false,
        },
        {
            id: 3,
            name: "Ice cream",
            img: require("../../../assets/img/products/687180662_012c012ccc@2x.jpg"),
            price: 12000,
            inLike: false,
            inCart: true,
        },
        {
            id: 4,
            name: "Ice cream",
            img: require("../../../assets/img/products/514215896_012c012ccc@2x.jpg"),
            price: 12000,
            inLike: false,
            inCart: false,
        },

        {
            id: 5,
            name: "Ice cream",
            img: require("../../../assets/img/products/518151488_012c012ccc@2x.jpg"),
            price: 12000,
            inLike: true,
            inCart: false,
        }, 
        {
            id: 6,
            name: "Ice cream",
            img: require("../../../assets/img/products/535405916_012c012ccc@2x.jpg"),
            price: 12000,
            inLike: true,
            inCart: false,
        },
    ]); 
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
            <div className={cx("banner")}>
                <div className={cx("detail")}>
                    <h1>Our Menu</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing<br />
                    elit, sed do eiusmod tempor incididunt ut labore et <br />
                    dolore magna aliqua.</p>
                </div>
            </div>
            <div className={cx("products")}>
                <div className={cx("heading")}>
                    <h1>Our Latest Flavoure</h1>
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
                                        <Btn href={``}
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