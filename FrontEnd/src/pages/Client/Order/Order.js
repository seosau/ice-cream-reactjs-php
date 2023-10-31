import className from "classnames/bind";
import { Btn, HomeHeader, Footer } from "../../../components";
import style from "./Order.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
const cx = className.bind(style);

function Order() {
    const [datas, setData] = useState([
        {
            id: 1,
            name: "Ice cream",
            img: require("../../../assets/img/products/product0.jpg"),
            price: 120,
            date: "2023-11-01",
            status: "in progress",
        },
        {
            id: 2,
            name: "Ice cream",
            img: require("../../../assets/img/products/product0.jpg"),
            price: 120,
            date: "2023-11-01",
            status: "in progress",
        },
        {
            id: 3,
            name: "Ice cream",
            img: require("../../../assets/img/products/product0.jpg"),
            price: 120,
            date: "2023-11-01",
            status: "in progress",
        },
        {
            id: 4,
            name: "Ice cream",
            img: require("../../../assets/img/products/product0.jpg"),
            price: 120,
            date: "2023-11-01",
            status: "in progress",
        },

        {
            id: 5,
            name: "Ice cream",
            img: require("../../../assets/img/products/product0.jpg"),
            price: 120,
            date: "2023-11-01",
            status: "delivered",
        }, {
            id: 6,
            name: "Ice cream",
            img: require("../../../assets/img/products/product0.jpg"),
            price: 120,
            date: "2023-10-20",
            status: "canceled",
        },
    ]);
    const handleButtonCancel = (dataId) => {
        let orderDate = new Date();
        orderDate = format(orderDate, "yyyy-MM-dd");
        const updatedStatus = datas.map(data => {
            if (data.id === dataId)
                return {
                    ...data,
                    status: data.status.toLowerCase() === "canceled" ? "in progress" : "canceled",
                    date: data.date = orderDate,
                }
            return data;
        })
        setData(updatedStatus);
    };
    return (
        <div className={cx("main-container")}>
            <HomeHeader />
            <div className={cx("orders")}>
                <div className={cx("heading")}>
                    <h1>My Orders</h1>
                    <img src={require("../../../assets/img/separator.png")}
                        alt="separator"
                    />
                </div>
                <div className={cx("box-container")}>
                    {
                        datas.length > 0 ? datas.map(data => (
                            <div className={cx("box")} key={data.id}>
                                <Link to="/Client/Order/ViewOrder" className={cx("view-order")}>
                                    <img src={data.img} alt="ordered"/>
                                    <p className={cx("date")}>{data.date}</p>
                                </Link>
                                <div className={cx("content")}>
                                    <div className={cx("flex-btn")}>
                                        <h3 className={cx("name")}> {data.name}</h3>
                                        <p className={cx("price")}>Price: {data.price}</p>
                                        <p className={cx("status", `${data.status.toLowerCase()}`)}>{data.status}</p>
                                    </div>
                                    <div className={cx("flex-btn")}>
                                        <Btn href="/Client/Order/ViewOrder"
                                            style={{
                                                width: "fit-content",
                                            }}
                                            value="view order" />
                                        {
                                            data.status.toLowerCase() === "delivered" ? null :
                                                <Btn href=""
                                                    style={{
                                                        width: "fit-content",
                                                    }}
                                                    value={data.status === "canceled" ? "order again" : "cancel"}
                                                    onclick={() => handleButtonCancel(data.id)} />
                                        }
                                    </div>
                                </div>
                            </div>
                        )) : <div className={cx("empty")}>
                            <p>no product was found!</p>
                        </div>
                    }
                </div >
            </div>
            <Footer />
        </div >

    )
}

export default Order;