import className from "classnames/bind";
import style from "./ViewProduct.module.scss";
import { useState, useEffect } from "react";
import Btn from "../../components/Button/Btn";
import Header from "../../components/Header/Header";

const cx = className.bind(style);

function ViewProduct() {
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
                className={cx("view-product")}
            >
                <div className={cx("heading")}>
                    <h1 className={cx("heading-title")}>your products</h1>
                    <img
                        src={require("../../assets/img/separator.png")}
                        alt="spr"
                    />
                </div>
                <div className={cx("box-container")}>
                    {/*Select product from database */}

                    <form className={cx("box")} action="" method="post">
                        <input
                            type="hidden"
                            name="product_id"
                            value={1} //select id from database
                        />
                        {/*-----product image-----*/}

                        <img src={require("../../assets/img/type.jpg")} />
                        <div
                            className={cx("status")}
                            style={{ color: true ? "limegreen" : "coral" }}
                        >
                            status
                        </div>
                        {/*-----product price-----*/}
                        <div className={cx("price")}>20.000đ</div>
                        <div className={cx("content")}>
                            <img
                                src={require("../../assets/img/shape-19.png")}
                                className={cx("sharp")}
                            />
                            <div className={cx("title")}>product name</div>
                            <div className={cx("flex-btn")}>
                                <Btn
                                    width={"fit-content"}
                                    href="edit_product.php"
                                    value={"edit"}
                                />

                                <Btn width={"fit-content"} value={"delete"} />

                                <Btn
                                    width={"fit-content"}
                                    href="read_product.php"
                                    value={"read product"}
                                />
                            </div>
                        </div>
                    </form>

                    <form className={cx("box")} action="" method="post">
                        <input
                            type="hidden"
                            name="product_id"
                            value={1} //select id from database
                        />
                        {/*-----product image-----*/}

                        <img src={require("../../assets/img/type.jpg")} />
                        <div
                            className={cx("status")}
                            style={{ color: true ? "limegreen" : "coral" }}
                        >
                            status
                        </div>
                        {/*-----product price-----*/}
                        <div className={cx("price")}>20.000đ</div>
                        <div className={cx("content")}>
                            <img
                                src={require("../../assets/img/shape-19.png")}
                                className={cx("sharp")}
                            />
                            <div className={cx("title")}>product name</div>
                            <div className={cx("flex-btn")}>
                                <Btn
                                    width={"fit-content"}
                                    href="edit_product.php"
                                    value={"edit"}
                                />

                                <Btn width={"fit-content"} value={"delete"} />

                                <Btn
                                    width={"fit-content"}
                                    href="read_product.php"
                                    value={"read product"}
                                />
                            </div>
                        </div>
                    </form>

                    <form className={cx("box")} action="" method="post">
                        <input
                            type="hidden"
                            name="product_id"
                            value={1} //select id from database
                        />
                        {/*-----product image-----*/}

                        <img src={require("../../assets/img/type.jpg")} />
                        <div
                            className={cx("status")}
                            style={{ color: true ? "limegreen" : "coral" }}
                        >
                            status
                        </div>
                        {/*-----product price-----*/}
                        <div className={cx("price")}>20.000đ</div>
                        <div className={cx("content")}>
                            <img
                                src={require("../../assets/img/shape-19.png")}
                                className={cx("sharp")}
                            />
                            <div className={cx("title")}>product name</div>
                            <div className={cx("flex-btn")}>
                                <Btn
                                    width={"fit-content"}
                                    href="edit_product.php"
                                    value={"edit"}
                                />

                                <Btn width={"fit-content"} value={"delete"} />

                                <Btn
                                    width={"fit-content"}
                                    href="read_product.php"
                                    value={"read product"}
                                />
                            </div>
                        </div>
                    </form>

                    <form className={cx("box")} action="" method="post">
                        <input
                            type="hidden"
                            name="product_id"
                            value={1} //select id from database
                        />
                        {/*-----product image-----*/}

                        <img src={require("../../assets/img/type.jpg")} />
                        <div
                            className={cx("status")}
                            style={{ color: true ? "limegreen" : "coral" }}
                        >
                            status
                        </div>
                        {/*-----product price-----*/}
                        <div className={cx("price")}>20.000đ</div>
                        <div className={cx("content")}>
                            <img
                                src={require("../../assets/img/shape-19.png")}
                                className={cx("sharp")}
                            />
                            <div className={cx("title")}>product name</div>
                            <div className={cx("flex-btn")}>
                                <Btn
                                    width={"fit-content"}
                                    href="edit_product.php"
                                    value={"edit"}
                                />

                                <Btn width={"fit-content"} value={"delete"} />

                                <Btn
                                    width={"fit-content"}
                                    href="read_product.php"
                                    value={"read product"}
                                />
                            </div>
                        </div>
                    </form>
                    {/*-----If empty-----*/}
                    {/* <div className={cx("empty")}>
                        <p>
                            no product added yet!
                            <br />
                            <a
                                style={{ marginTop: "1.5rem" }}
                                href="/AddProduct"
                            >
                                <Btn
                                    width={"fit-content"}
                                    value={"add product"}
                                />
                            </a>{" "}
                        </p>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default ViewProduct;
