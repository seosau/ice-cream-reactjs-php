import className from "classnames/bind";
import style from "./AddProduct.module.scss";
import { useState, useEffect } from "react";
import Btn from "../../components/Button/Btn";
import Header from "../../components/Header/Header";

const cx = className.bind(style);

function AddProduct() {
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
    useEffect(() => {
        function handleResize() {
            setViewportWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <div className={cx("main-container")}>
            <Header className={cx("header")} />

            <div
                style={{
                    width:
                        (viewportWidth / 100) * 18 > 220
                            ? "82vw"
                            : viewportWidth - 220 + "px",
                }}
                className={cx("add-product")}
            >
                <div className={cx("heading")}>
                    <h1 className={cx("heading-title")}>add product</h1>
                    <img
                        src={require("../../assets/img/separator.png")}
                        alt="spr"
                    />
                </div>
                <div className={cx("form-container")}>
                    <form
                        action=""
                        method="post"
                        encType="multipart/form-data"
                        className={cx("add-product")}
                    >
                        <div className={cx("input field")}>
                            <p>
                                product name<span>*</span>
                            </p>
                            <input
                                className={cx("box")}
                                type="text"
                                name="name"
                                maxLength={100}
                                placeholder="add product name"
                                required
                            ></input>
                        </div>
                        <div className={cx("input field")}>
                            <p>
                                product price<span>*</span>
                            </p>
                            <input
                                className={cx("box")}
                                type="number"
                                name="price"
                                maxLength={100}
                                placeholder="add product price"
                                required
                            ></input>
                        </div>
                        <div className={cx("input field")}>
                            <p>
                                product detail<span>*</span>
                            </p>
                            <textarea
                                className={cx("box")}
                                name="description"
                                maxLength={1000}
                                placeholder="add product detail"
                                required
                            ></textarea>
                        </div>
                        <div className={cx("input field")}>
                            <p>
                                product stock<span>*</span>
                            </p>
                            <input
                                className={cx("box")}
                                type="number"
                                name="stock"
                                maxLength={10}
                                min={0}
                                max={9999999999}
                                placeholder="add product stock"
                                required
                            ></input>
                        </div>
                        <div className={cx("input field")}>
                            <p>
                                product image<span>*</span>
                            </p>
                            <input
                                className={cx("box")}
                                type="file"
                                name="image"
                                accept="image/*"
                                placeholder="add product image"
                                required
                            ></input>
                        </div>
                        <div className={cx("flex-btn")}>
                            <Btn value={"add product"} />

                            <Btn value={"save as draft"} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddProduct;
