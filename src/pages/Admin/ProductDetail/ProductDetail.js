import className from "classnames/bind";
import style from "./ProductDetail.module.scss";
import { useState, useEffect } from "react";
import { Btn, AdminHeader } from "../../../components";

const cx = className.bind(style);

function ProductDetail() {
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
            <AdminHeader className={cx("header")} />
            <div
                style={{
                    width:
                        (viewportWidth / 100) * 18 > 220
                            ? "82vw"
                            : viewportWidth - 220 + "px",
                }}
                className={cx("product-detail")}
            >
                <div className={cx("heading")}>
                    <h1 className={cx("heading-title")}>product detail</h1>
                    <img
                        src={require("../../../assets/img/separator.png")}
                        alt="spr"
                    />
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
