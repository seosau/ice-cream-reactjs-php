import className from "classnames/bind";
import { Btn } from "../../../components";
import style from "./ViewOrder.module.scss"
import { useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import {
    faUser,
    faEnvelope,
    faPhone,
    faLocationDot
} from "@fortawesome/free-solid-svg-icons";
const cx = className.bind(style);

function ViewOrder() {
    const [datas, setData] = useState([
        {
            id: 1,
            nameProduct: "Ice cream",
            img: require("../../../assets/img/products/product0.jpg"),
            price: 120,
            quantity: 5,
            date: "2023-11-01",
            status: "in progress",
            name: "Duy",
            phone: "0987.654.321",
            email: "duy@gmail.com",
            address: "UIT"
        },
        {
            id: 2,
            nameProduct: "Ice cream",
            img: require("../../../assets/img/products/product0.jpg"),
            price: 120,
            quantity: 5,
            date: "2023-11-01",
            status: "in progress",
            name: "Duy",
            phone: "0987.654.321",
            email: "duy@gmail.com",
            address: "UIT"
        },
        {
            id: 3,
            nameProduct: "Ice cream",
            img: require("../../../assets/img/products/product0.jpg"),
            price: 120,
            quantity: 5,
            date: "2023-11-01",
            status: "in progress",
            name: "Duy",
            phone: "0987.654.321",
            email: "duy@gmail.com",
            address: "UIT"
        },
        {
            id: 1,
            nameProduct: "Ice cream",
            img: require("../../../assets/img/products/product0.jpg"),
            price: 120,
            quantity: 5,
            date: "2023-11-01",
            status: "in progress",
            name: "Duy",
            phone: "0987.654.321",
            email: "duy@gmail.com",
            address: "UIT"
        },
        {
            id: 4,
            nameProduct: "Ice cream",
            img: require("../../../assets/img/products/product0.jpg"),
            price: 120,
            quantity: 5,
            date: "2023-11-01",
            status: "in progress",
            name: "Duy",
            phone: "0987.654.321",
            email: "duy@gmail.com",
            address: "UIT"
        },
        {
            id: 5,
            nameProduct: "Ice cream",
            img: require("../../../assets/img/products/product0.jpg"),
            price: 120,
            quantity: 5,
            date: "2023-11-01",
            status: "in progress",
            name: "Duy",
            phone: "0987.654.321",
            email: "duy@gmail.com",
            address: "UIT"
        },
        {
            id: 6,
            nameProduct: "Ice cream",
            img: require("../../../assets/img/products/product0.jpg"),
            price: 120,
            quantity: 5,
            date: "2023-11-01",
            status: "in progress",
            name: "Duy",
            phone: "0987.654.321",
            email: "duy@gmail.com",
            address: "UIT"
        },
    ]);

    const { productId } = useParams();

    const data = datas.find((item) => item.id === parseInt(productId, 10));

    if (!data) {
        return <p>Product not found</p>;
    }

    const handleButtonCancel = (dataId) => {
        let orderDate = new Date();
        orderDate = format(orderDate, "yyyy-MM-dd");
        const updatedStatus = datas.map(data => {
            if (data.id === parseInt(dataId, 10))
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

            <div className={cx("order-detail")}>
                <div className={cx("heading")}>
                    <h1>Order Detail</h1>
                    <img src={require("../../../assets/img/separator.png")}
                        alt="separator"
                    />
                </div>
                <div className={cx("box-container")}>
                    <div className={cx("box")}>
                        <div className={cx("col")}>
                            <p className={cx("date")}> {data.date} </p>
                            <img src={data.img} alt="product" />
                            <h3 className={cx("nameProduct")}>{data.nameProduct}</h3>
                            <div className={cx("flex")}>
                                <p className={cx("price")}>price: {data.price}</p>
                                <p className={cx("quantity")}>quantity: {data.quantity} </p>
                            </div>
                            <p className={cx("grand-total")}> total amount: {data.price * data.quantity} </p>
                        </div>
                        <div className={cx("col")}>
                            <h3 className={cx("title")}> billing address </h3>
                            <p className={cx("user")}>
                                <FontAwesomeIcon icon={faUser} className={cx("icon")} />
                                {data.name}
                            </p>
                            <p className={cx("user")}>
                                <FontAwesomeIcon icon={faPhone} className={cx("icon")} />
                                {data.phone}
                            </p>
                            <p className={cx("user")}>
                                <FontAwesomeIcon icon={faEnvelope} className={cx("icon")} />
                                {data.email}
                            </p>
                            <p className={cx("user")}>
                                <FontAwesomeIcon icon={faLocationDot} className={cx("icon")} />
                                {data.address}
                            </p>
                            <p className={cx("status", `${data.status.toLowerCase()}`)}>
                                {data.status}
                            </p>
                            {data.status.toLowerCase() === "delivered" ? null :
                                <Btn href=""
                                    value={data.status === "canceled" ? "order again" : "cancel"}
                                    onclick={() => handleButtonCancel(productId)} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewOrder;