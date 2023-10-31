import className from "classnames/bind";
import { Btn, HomeHeader, Footer } from "../../../components";
import style from "./Favourite.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { faCartShopping, faEye, faX } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";
const cx = className.bind(style);

function Favourite() {
    const [datas, setData] = useState([
        {
            id: 1,
            name: "Ice cream",
            img: require("../../../assets/img/products/product0.jpg"),
            price: 120,
            quantity: 5,
        },
        {
            id: 2,
            name: "Ice cream",
            img: require("../../../assets/img/products/product0.jpg"),
            price: 120,
            quantity: 5,
        },
        {
            id: 3,
            name: "Ice cream",
            img: require("../../../assets/img/products/product0.jpg"),
            price: 120,
            quantity: 5,
        },
        {
            id: 4,
            name: "Ice cream",
            img: require("../../../assets/img/products/product0.jpg"),
            price: 120,
            quantity: 5,
        },

        {
            id: 5,
            name: "Ice cream",
            img: require("../../../assets/img/products/product0.jpg"),
            price: 120,
            quantity: 5,
        }, {
            id: 6,
            name: "Ice cream",
            img: require("../../../assets/img/products/product0.jpg"),
            price: 120,
            quantity: 5,
        },
    ]);
    const [grandTotal, setGrandTotal] = useState(0);

    const [quantities, setQuantities] = useState({});

    const handleButtonDelete = () => {
        if (datas.length > 0) {
          const updatedDatas = datas.slice(0, -1);
          setData(updatedDatas);
        }
      };

    return (
        <div className={cx("main-container")}>
            <HomeHeader />
            <div className={cx("products")}>
                <div className={cx("heading")}>
                    <h1>My wishlist</h1>
                    <img src={require("../../../assets/img/separator.png")}
                        alt="separator"
                    />
                </div>
                <div className={cx("box-container")}>
                    {
                        datas.length > 0 ? datas.map(data => (
                            <form key={data.id} action="" method="post" className={cx("box")}>
                                <input type="hidden" name="cart_id" value={data.id} />
                                <img src={data.img} alt="image product" />
                                <div className={cx("content")}>
                                    <h3>{data.name}</h3>
                                    <div className={cx("flex-btn")}>
                                        <p className={cx("price")}>Price: {data.price}</p>
                                        <Btn
                                            href=""
                                            style={{
                                                width: "fit-content",
                                            }}
                                            value={<FontAwesomeIcon icon={faCartShopping} />}
                                        />
                                        <Btn
                                            href=""
                                            style={{
                                                width: "fit-content",
                                            }}
                                            value={<FontAwesomeIcon icon={faEye} />}
                                        />
                                        <Btn
                                            href=""
                                            style={{
                                                width: "fit-content",
                                            }}
                                            value={<FontAwesomeIcon icon={faX} /> }
                                            onclick={handleButtonDelete}
                                        />

                                    </div>
                                    <div className={cx("flex-btn")}>
                                        <Btn
                                            href=""
                                            style={{
                                                width: "fit-content",
                                            }}
                                            value="buy now"
                                        />
                                    </div>
                                </div>
                            </form>
                        )) : <div className={cx("empty")}>
                            <p>no product was found!</p>
                        </div>

                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Favourite;