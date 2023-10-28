import className from "classnames/bind";
import style from "./ProductDetail.module.scss";
import { Btn } from "../../../components";

const cx = className.bind(style);

function ProductDetail() {
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
                <form className={cx("box")} method="post">
                    <input
                        className={cx("")}
                        type="hidden"
                        name="product_id"
                        value={1 /*from db */}
                    />
                    <div
                        className={cx("status")}
                        style={{ color: true ? "limegreen" : "coral" }}
                    >
                        status
                    </div>
                    {/*-----product image-----*/}

                    <img
                        className={cx("image")}
                        src={require("../../../assets/img/514215896_012c012ccc@2x.jpg")}
                    />
                    {/*-----product price-----*/}
                    <div className={cx("price")}>$5</div>
                    <div className={cx("title")}>product name</div>
                    <div className={cx("content")}>
                        {/*Product detail from db */}
                        Kem là một món ngon không thể thiếu trong danh sách
                        những món tráng miệng hấp dẫn. Với hương vị ngọt ngào và
                        mềm mịn, món kem là sự kết hợp tuyệt vời giữa sữa tươi,
                        đường, và các loại hương liệu tự nhiên. Có nhiều loại
                        kem khác nhau, từ kem sữa tươi truyền thống đến kem ngon
                        miệng như kem sô cô la, vani, dâu, và nhiều hương vị thú
                        vị khác. Kem có thể được thưởng thức trong các chiếc bát
                        hay cone mỏng, và thường được thêm các loại topping như
                        nước sô cô la nóng, hạt dẻ rang, hoặc trái cây tươi để
                        tạo thêm sự thú vị. Khám phá hương vị tuyệt vời của món
                        kem và thỏa mãn sự ngon miệng của bạn trong ngày hè nóng
                        bức hoặc bất cứ lúc nào bạn cảm thấy thèm đồ ngọt!
                    </div>
                    <div className={cx("flex-btn")}>
                        <Btn
                            style={{
                                width: "33%",
                            }}
                            href="edit_product.php"
                            value={"edit"}
                        />

                        <Btn
                            style={{
                                width: "33%",
                            }}
                            value={"delete this product"}
                        />

                        <Btn
                            style={{
                                width: "33%",
                            }}
                            href="/Admin/ViewProduct"
                            value={"go back"}
                        />
                    </div>
                </form>
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
                                        width:'33%'
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

export default ProductDetail;
