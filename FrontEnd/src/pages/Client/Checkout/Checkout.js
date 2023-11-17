import className from "classnames/bind";
import { Btn } from "../../../components";
import style from "./Checkout.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const cx = className.bind(style);

export default function Checkout() {
    const [userData, setUserData] = useState({
        name: "",
        number: "",
        email: "",
        method: "",
        addressType: "",
        flat: "",
        street: "",
        city: "",
        country: "",
        pincode: "",
    });

    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Ice Cream 1",
            img: require("../../../assets/img/products/product5.jpg"),
            quantity: 2,
            price: 120.
        },
        {
            id: 2,
            name: "Ice Cream 2",
            img: require("../../../assets/img/products/product5.jpg"),
            quantity: 1,
            price: 130.
        },
        {
            id: 3,
            name: "Ice Cream 3",
            img: require("../../../assets/img/products/product5.jpg"),
            quantity: 2,
            price: 160.
        },
        {
            id: 4,
            name: "Ice Cream 4",
            img: require("../../../assets/img/products/product5.jpg"),
            quantity: 2,
            price: 160.
        },
    ]);

    const [errors, setErrors] = useState({});

    return (
        <div className={cx("main-container")}>
            <div className={cx("checkout")}>
                <div className={cx("heading")}>
                    <h1>checkout summary</h1>
                    <img src={require("../../../assets/img/separator.png")}
                        alt="separator"
                    />
                </div>
                <div className={cx("summary")}>
                    <h3>My Bag</h3>
                    <div className={cx("box-container")}>
                        {
                            products.map((product) => (
                                <div className={cx("box")} key={product.id}>
                                    <img src={product.img} alt={`product ${product.id}`} className={cx("")}/>
                                    <div className={cx("")}>
                                        <h3 className={cx("name")}>{product.name}</h3>
                                        <p className={cx("price")}>
                                            {product.price} X {product.quantity}
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className={cx("total")}>
                        <span>Total amount payable: </span>
                    </div>
                </div>

                <div className={cx("form-container")}>
                    <form action="" method="" className={cx("register")} onSubmit="">
                        <input type="hidden" name="p_id" value="" />
                        <h3 className={cx("")}>billing details</h3>
                        <div className={cx("row")}>
                            <div className={cx("input-field")}>
                                <p className={cx("")}>
                                    your name <span className={cx("")}>*</span>
                                </p>
                                <input className={cx("box")}
                                    type="text"
                                    name="name"
                                    placeholder="enter your name..."
                                    maxLength={50}
                                    value={userData.name}
                                    onChange={(e) => {
                                        if (errors?.name) {
                                            setErrors({ ...errors, name: "" });
                                        }
                                        setUserData({
                                            ...userData,
                                            name: e.target.value,
                                        });
                                    }}
                                />
                            </div>
                            <div className={cx("input-field")}>
                                <p className={cx("")}>
                                    your number <span className={cx("")}>*</span>
                                </p>
                                <input className={cx("box")}
                                    type="tel"
                                    name="number"
                                    placeholder="enter your number..."
                                    maxLength={50}
                                    value={userData.number}
                                    onChange={(e) => {
                                        if (errors?.number) {
                                            setErrors({ ...errors, number: "" });
                                        }
                                        setUserData({
                                            ...userData,
                                            number: e.target.value,
                                        });
                                    }}
                                />
                            </div>
                        </div>
                        <div className={cx("row")}>
                            <div className={cx("input-field")}>
                                <p className={cx("")}>
                                    your email <span className={cx("")}>*</span>
                                </p>
                                <input className={cx("box")}
                                    type="email"
                                    name="email"
                                    placeholder="enter your email..."
                                    maxLength={50}
                                    value={userData.email}
                                    onChange={(e) => {
                                        if (errors?.email) {
                                            setErrors({ ...errors, email: "" });
                                        }
                                        setUserData({
                                            ...userData,
                                            email: e.target.value,
                                        });
                                    }}
                                />
                            </div>
                            <div className={cx("input-field")}>
                                <p className={cx("")}>
                                    payment method <span className={cx("")}>*</span>
                                </p>
                                <select
                                    name="method"
                                    className={cx("box")}
                                    value={userData.method}
                                    onChange={(e) => {
                                        if (errors?.method) {
                                            setErrors({ ...errors, method: "" });
                                        }
                                        setUserData({
                                            ...userData,
                                            method: e.target.value,
                                        });
                                    }}
                                >
                                    <option value="cash on delivery">cash on delivery</option>
                                    <option value="credit or debit card">credit or debit card</option>
                                    <option value="net banking">net banking</option>
                                </select>
                            </div>
                        </div>
                        <div className={cx("row")}>
                            <div className={cx("input-field")}>
                                <p className={cx("")}>
                                    address type <span className={cx("")}>*</span>
                                </p>
                                <select
                                    name="addressType"
                                    className={cx("box")}
                                    value={userData.addressType}
                                    onChange={(e) => {
                                        if (errors?.addressType) {
                                            setErrors({ ...errors, addressType: "" });
                                        }
                                        setUserData({
                                            ...userData,
                                            addressType: e.target.value,
                                        });
                                    }}
                                >
                                    <option value="home">home</option>
                                    <option value="office">office</option>
                                </select>
                            </div>
                            <div className={cx("input-field")}>
                                <p className={cx("")}>
                                    address line 1 <span className={cx("")}>*</span>
                                </p>
                                <input className={cx("box")}
                                    type="text"
                                    name="flat"
                                    placeholder="flat or building name..."
                                    maxLength={50}
                                    value={userData.flat}
                                    onChange={(e) => {
                                        if (errors?.flat) {
                                            setErrors({ ...errors, flat: "" });
                                        }
                                        setUserData({
                                            ...userData,
                                            flat: e.target.value,
                                        });
                                    }}
                                />
                            </div>
                        </div>
                        <div className={cx("row")}>
                            <div className={cx("input-field")}>
                                <p className={cx("")}>
                                    address line 2 <span className={cx("")}>*</span>
                                </p>
                                <input className={cx("box")}
                                    type="text"
                                    name="street"
                                    placeholder="street name..."
                                    maxLength={50}
                                    value={userData.street}
                                    onChange={(e) => {
                                        if (errors?.street) {
                                            setErrors({ ...errors, street: "" });
                                        }
                                        setUserData({
                                            ...userData,
                                            street: e.target.value,
                                        });
                                    }}
                                />
                            </div>
                            <div className={cx("input-field")}>
                                <p className={cx("")}>
                                    your city <span className={cx("")}>*</span>
                                </p>
                                <input className={cx("box")}
                                    type="text"
                                    name="city"
                                    placeholder="city name..."
                                    maxLength={50}
                                    value={userData.city}
                                    onChange={(e) => {
                                        if (errors?.city) {
                                            setErrors({ ...errors, city: "" });
                                        }
                                        setUserData({
                                            ...userData,
                                            city: e.target.value,
                                        });
                                    }}
                                />
                            </div>
                        </div>
                        <div className={cx("row")}>
                            <div className={cx("input-field")}>
                                <p className={cx("")}>
                                    your country <span className={cx("")}>*</span>
                                </p>
                                <input className={cx("box")}
                                    type="text"
                                    name="country"
                                    placeholder="country name..."
                                    maxLength={50}
                                    value={userData.country}
                                    onChange={(e) => {
                                        if (errors?.country) {
                                            setErrors({ ...errors, country: "" });
                                        }
                                        setUserData({
                                            ...userData,
                                            country: e.target.value,
                                        });
                                    }}
                                />
                            </div>
                            <div className={cx("input-field")}>
                                <p className={cx("")}>
                                    pincode <span className={cx("")}>*</span>
                                </p>
                                <input className={cx("box")}
                                    type="number"
                                    name="pincode"
                                    placeholder="pincode..."
                                    maxLength={6}
                                    value={userData.pincode}
                                    onChange={(e) => {
                                        if (errors?.pincode) {
                                            setErrors({ ...errors, pincode: "" });
                                        }
                                        setUserData({
                                            ...userData,
                                            pincode: e.target.value,
                                        });
                                    }}
                                />
                            </div>
                        </div>
                        <Btn value="place order" onclick=""/>
                    </form>
                </div>
            </div>

        </div>
    )
}