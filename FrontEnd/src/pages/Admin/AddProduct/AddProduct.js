import className from "classnames/bind";
import style from "./AddProduct.module.scss";
import { Btn } from "../../../components";


const cx = className.bind(style);

function AddProduct() {
    const inputField = cx("input-field");
    return (
        <div className={cx("container")}>
            <div className={cx("heading")}>
                <h1 className={cx("heading-title")}>add product</h1>
                <img
                    src={require("../../../assets/img/separator.png")}
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
                    <div className={inputField}>
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
                    <div className={inputField}>
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
                    <div className={inputField}>
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
                    <div className={inputField}>
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
                    <div className={inputField}>
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
    );
}

export default AddProduct;
