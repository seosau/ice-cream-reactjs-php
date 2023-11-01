import className from "classnames/bind";
import { Btn, HomeHeader, Footer } from "../../../components";
import style from "./Cart.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { faEdit } from "@fortawesome/free-solid-svg-icons"
const cx = className.bind(style);

function Cart() {
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

    const handleQuantity = (e, itemId) => {
        const newQuantities = { ...quantities };
        newQuantities[itemId] = e.target.value;
        setQuantities(newQuantities);
    }

    useEffect(() => {
        let total = 0;
        for (const data of datas) {
            const quantity = quantities[data.id] || 0;
            total += data.price * quantity;
        }
        setGrandTotal(total);
    }, [datas, quantities]);

    return (
        <div className={cx("main-container")}>
            <div className={cx("products")}>
                <div className={cx("heading")}>
                    <h1>My cart</h1>
                    <img src={require("../../../assets/img/separator.png")}
                        alt="separator"
                    />
                </div>
                <div className={cx("box-container")}>
                    {
                    datas.length > 0 ? datas.map(data => (
                        <form key={data.id}action="" method="post" className={cx("box")}>
                            <input type="hidden" name="cart_id" value={data.id} />
                            <img src={data.img} alt="image product" />
                            <div className={cx("content")}>
                                <h3>{data.name}</h3>
                                <div className={cx("flex-btn")}>
                                    <p className={cx("price")}>Price: {data.price}</p>
                                    <input
                                        type="number"
                                        name="quantity"
                                        required
                                        min="0"
                                        max="99"
                                        maxLength="2"
                                        value={quantities[data.id] || 0}
                                        className={cx("quantity", "box")}
                                        onChange={(e) => handleQuantity(e, data.id)}
                                    />
                                    <Btn
                                        href=""
                                        style={{
                                            width: "fit-content",
                                        }}
                                        value={<FontAwesomeIcon icon={faEdit} />}
                                    />
                                </div>
                                <div className={cx("flex-btn")}>
                                    <p className={cx("sub-total")}>Sub total: <span>{data.price * (quantities[data.id] || 0)}</span></p>
                                    <Btn
                                        href=""
                                        style={{
                                            width: "fit-content",
                                        }}
                                        value="delete"
                                    />
                                </div>
                            </div>
                        </form>
                    )) : <div className={cx("empty")}>
                        <p>no product was found!</p>
                    </div>

                }
                </div>
                
                {
                    grandTotal > 0 ? (<div className={cx("cart-total")}>
                        <p>total amount payable: <span>{grandTotal}</span></p>
                        <Btn href=""
                            style={{
                                width: "fit-content",
                            }}
                            value="Proceed to checkout"
                        />
                    </div>) : null
                }
            </div>
        </div>
    )
}

export default Cart;