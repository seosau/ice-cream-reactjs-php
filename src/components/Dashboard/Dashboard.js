import className from "classnames/bind";
import style from "./Dashboard.module.scss";
import { useState, useEffect } from "react";

const cx = className.bind(style);
function Dashboard() {
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
        <div
            style={{
                width:
                    (viewportWidth / 100) * 18 > 220
                        ? "82vw"
                        : viewportWidth - 220 + "px",
            }}
            className={cx("dashboard")}
        >
            <div className={cx("heading")}>
                <h1 className={cx("heading-title")}>dashboard</h1>
                <img
                    src={require("../../assets/img/separator.png")}
                    alt="spr"
                />
            </div>
            <div className={cx("box-container")}>
                <div className={cx("box")}>
                    <h3 className={cx("box-title")}>Welcome !</h3>
                    <p></p> {/*fetch_profile['name'] */}
                    <a className={cx("btn")} href="update.php">
                        update profile
                    </a>
                </div>
                <div className={cx("box")}>
                    {/*select mesage from db*/}
                    <h3 className={cx("box-title")}>
                        23{/*Number of message */}
                    </h3>
                    <p>unread message</p>
                    <a className={cx("btn")} href="admin_message.php">
                        see message
                    </a>
                </div>
                <div className={cx("box")}>
                    {/* select product from db*/}
                    <h3 className={cx("box-title")}>
                        23{/*Number of product */}
                    </h3>

                    <p>products added</p>
                    <a className={cx("btn")} href="add_product.php">
                        add product
                    </a>
                </div>
                <div className={cx("box")}>
                    {/* select active product from db*/}
                    <h3 className={cx("box-title")}>
                        20{/*Number of active product */}
                    </h3>

                    <p>Total active products</p>
                    <a className={cx("btn")} href="add_product.php">
                        View active product
                    </a>
                </div>
                <div className={cx("box")}>
                    {/* select deactive product from db*/}
                    <h3 className={cx("box-title")}>
                        0{/*Number of deactive product */}
                    </h3>

                    <p>products added</p>
                    <a className={cx("btn")} href="add_product.php">
                        Total inactive products
                    </a>
                </div>
                <div className={cx("box")}>
                    {/*select users from db*/}
                    <h3 className={cx("box-title")}>0{/*Number of users */}</h3>
                    <p>users account</p>
                    <a className={cx("btn")} href="admin_message.php">
                        see users
                    </a>
                </div>
                <div className={cx("box")}>
                    {/*select sellers from db*/}
                    <h3 className={cx("box-title")}>
                        2{/*Number of sellers */}
                    </h3>
                    <p>sellers account</p>
                    <a className={cx("btn")} href="admin_message.php">
                        see sellers
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
