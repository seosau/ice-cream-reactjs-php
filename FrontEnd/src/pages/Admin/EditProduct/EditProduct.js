import className from "classnames/bind";
import style from "./EditProduct.module.scss";
import { Btn } from "../../../components";

const cx = className.bind(style);
function EditProduct() {
    const inputField = cx("input-field");
    return (
        <div className={cx("container")}>
            <div className={cx("heading")}>
                <h1 className={cx("heading-title")}>edit product</h1>
                <img src={require("../../../assets/img/separator.png")} alt="spr" />
            </div>
            <div className={cx("box-container")}>
                {/*select product from db */}
                <div className={cx("form-container")}>
                    <form action="" method="post" encType="multipart/form-data">
                        <input
                            type="hidden"
                            name="old_image"
                            value={
                                {
                                    /*fetch */
                                }
                            }
                        />
                        <input
                            type="hidden"
                            name="product_id"
                            value={
                                {
                                    /*fetch */
                                }
                            }
                        />
                        <div className={inputField}>
                            <p>
                                product status<span>*</span>
                            </p>
                            <select name="status" className={cx("box")}>
                                <option
                                    value={
                                        {
                                            /*fetch status*/
                                        }
                                    }
                                ></option>
                                <option
                                    value={
                                        {
                                            /*fetch active*/
                                        }
                                    }
                                >
                                    active
                                </option>
                                <option
                                    value={
                                        {
                                            /*fetch deactive*/
                                        }
                                    }
                                >
                                    deactive
                                </option>
                            </select>
                        </div>
                        <div className={inputField}>
                            <p>
                                product name<span>*</span>
                            </p>
                            <input
                                type="text"
                                name="name"
                                /*fetch name */
                                value={"product name"}
                                className={cx("box")}
                            />
                        </div>
                        <div className={inputField}>
                            <p>
                                product price<span>*</span>
                            </p>
                            <input
                                type="number"
                                name="price"
                                /*fetch price */
                                value={"$5.0"}
                                className={cx("box")}
                            />
                        </div>
                        <div className={inputField}>
                            <p>
                                product description<span>*</span>
                            </p>

                            <textarea /*fetch desc */ name="description" className={cx("box")}></textarea>
                        </div>
                        <div className={inputField}>
                            <p>
                                product stock<span>*</span>
                            </p>
                            <input
                                type="number"
                                name="stock"
                                /*fetch stock */
                                value={"200"}
                                className={cx("box")}
                                min={0}
                                max={999999999}
                                maxLength={10}
                            />
                        </div>
                        <div className={inputField}>
                            <p>
                                product image<span>*</span>
                            </p>
                            <input
                                type="file"
                                name="image"
                                /*fetch stock */
                                accept="image/*"
                                className={cx("box")}
                            />
                            <img alt="" className={cx("image")} src={require("../../../assets/img/514215896_012c012ccc@2x.jpg")} />
                            <div className={cx("flex-btn")}>
                                <Btn value={"delete image"} style={{ width: "49%", height: "3rem" }} />
                                <Btn value={"go back"} style={{ width: "49%", height: "3rem" }} href={"/Admin/ViewProduct"} />
                            </div>
                        </div>
                        <div className={cx("flex-btn")}>
                            <Btn
                                value={"update product"}
                                style={{
                                    width: "49%",
                                }}
                            />
                            <Btn
                                value={"delete product"}
                                style={{
                                    width: "49%",
                                }}
                            />
                        </div>
                    </form>
                </div>
                {/* <div className={cx("flex-btn")}>
                    <Btn
                        value={"view product"}
                        href={"/Admin/ViewProduct"}
                        style={{
                            width: "49%",
                        }}
                    />
                    <Btn
                        value={"add product"}
                        href={"/Admin/AddProduct"}
                        style={{
                            width: "49%",
                        }}
                    />
                </div> */}
            </div>

            {/*-----If empty-----*/}
            {/* <div className={cx("empty")}>
                    <p>no product added yet!</p>
                    <Btn
                        style={{
                            width: "33%",
                            flex: 1,
                        }}
                        value={"add product"}
                        href={"/Admin/AddProduct"}
                    />
                </div> */}
        </div>
    );
}

export default EditProduct;
