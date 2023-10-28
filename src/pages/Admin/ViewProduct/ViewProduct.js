import className from "classnames/bind";
import style from "./ViewProduct.module.scss";
import { Btn } from "../../../components";

const cx = className.bind(style);

function ViewProduct() {
    return (
        <div className={cx("container")}>
            <div className={cx("heading")}>
                <h1 className={cx("heading-title")}>your products</h1>
                <img
                    src={require("../../../assets/img/separator.png")}
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

                    <img
                        alt=""
                        src={require("../../../assets/img/514215896_012c012ccc@2x.jpg")}
                        className={cx("image")}
                    />
                    <div
                        className={cx("status")}
                        style={{ color: true ? "limegreen" : "coral" }}
                    >
                        status
                    </div>
                    {/*-----product price-----*/}
                    <div className={cx("price")}>$5</div>
                    <div className={cx("content")}>
                        <img
                            alt=""
                            src={require("../../../assets/img/shape-19.png")}
                            className={cx("sharp")}
                        />
                        <div className={cx("title")}>product name</div>
                        <div className={cx("flex-btn")}>
                            <Btn
                                style={{
                                    width: "30%",
                                }}
                                href="edit_product.php"
                                value={"edit"}
                            />

                            <Btn
                                style={{
                                    width: "30%",
                                }}
                                value={"delete"}
                            />

                            <Btn
                                style={{
                                    width: "30%",
                                }}
                                href="/Admin/ProductDetail"
                                value={"description"}
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

                    <img
                        alt=""
                        src={require("../../../assets/img/514215896_012c012ccc@2x.jpg")}
                        className={cx("image")}
                    />
                    <div
                        className={cx("status")}
                        style={{ color: true ? "limegreen" : "coral" }}
                    >
                        status
                    </div>
                    {/*-----product price-----*/}
                    <div className={cx("price")}>$5</div>
                    <div className={cx("content")}>
                        <img
                            alt=""
                            src={require("../../../assets/img/shape-19.png")}
                            className={cx("sharp")}
                        />
                        <div className={cx("title")}>product name</div>
                        <div className={cx("flex-btn")}>
                            <Btn
                                style={{
                                    width: "30%",
                                }}
                                href="edit_product.php"
                                value={"edit"}
                            />

                            <Btn
                                style={{
                                    width: "30%",
                                }}
                                value={"delete"}
                            />

                            <Btn
                                style={{
                                    width: "30%",
                                }}
                                href="/Admin/ProductDetail"
                                value={"description"}
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

                    <img
                        alt=""
                        src={require("../../../assets/img/514215896_012c012ccc@2x.jpg")}
                        className={cx("image")}
                    />
                    <div
                        className={cx("status")}
                        style={{ color: true ? "limegreen" : "coral" }}
                    >
                        status
                    </div>
                    {/*-----product price-----*/}
                    <div className={cx("price")}>$5</div>
                    <div className={cx("content")}>
                        <img
                            alt=""
                            src={require("../../../assets/img/shape-19.png")}
                            className={cx("sharp")}
                        />
                        <div className={cx("title")}>product name</div>
                        <div className={cx("flex-btn")}>
                            <Btn
                                style={{
                                    width: "30%",
                                }}
                                href="edit_product.php"
                                value={"edit"}
                            />

                            <Btn
                                style={{
                                    width: "30%",
                                }}
                                value={"delete"}
                            />

                            <Btn
                                style={{
                                    width: "30%",
                                }}
                                href="/Admin/ProductDetail"
                                value={"description"}
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

                    <img
                        alt=""
                        src={require("../../../assets/img/514215896_012c012ccc@2x.jpg")}
                        className={cx("image")}
                    />
                    <div
                        className={cx("status")}
                        style={{ color: true ? "limegreen" : "coral" }}
                    >
                        status
                    </div>
                    {/*-----product price-----*/}
                    <div className={cx("price")}>$5</div>
                    <div className={cx("content")}>
                        <img
                            alt=""
                            src={require("../../../assets/img/shape-19.png")}
                            className={cx("sharp")}
                        />
                        <div className={cx("title")}>product name</div>
                        <div className={cx("flex-btn")}>
                            <Btn
                                style={{
                                    width: "30%",
                                }}
                                href="edit_product.php"
                                value={"edit"}
                            />

                            <Btn
                                style={{
                                    width: "30%",
                                }}
                                value={"delete"}
                            />

                            <Btn
                                style={{
                                    width: "30%",
                                }}
                                href="/Admin/ProductDetail"
                                value={"description"}
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
                                    style={{
                                        width:'30%'
                                    }}
                                    value={"add product"}
                                />
                            </a>{" "}
                        </p>
                    </div> */}
            </div>
        </div>
    );
}

export default ViewProduct;
