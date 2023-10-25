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
                    <h1 className={cx("heading-title")}>ViewProduct</h1>
                    <img
                        src={require("../../assets/img/separator.png")}
                        alt="spr"
                    />
                </div>
            </div>
        </div>
    );
}

export default ViewProduct;
