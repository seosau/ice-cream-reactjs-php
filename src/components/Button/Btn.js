import className from "classnames/bind";
import style from "./Btn.module.scss";
import { Link } from "react-router-dom";
const cx = className.bind(style);

function Btn({ value, width, href }) {
    return href ? (
        <Link
            to={href}
            style={
                width === "fit-content"
                    ? {
                          width: width,
                      }
                    : {
                          width: "auto",
                          flex: 1,
                      }
            }
            className={cx("btn")}
        >
            {value}
        </Link>
    ) : (
        <div
            href={href}
            style={
                width === "fit-content"
                    ? {
                          width: width,
                      }
                    : {
                          width: "auto",
                          flex: 1,
                      }
            }
            className={cx("btn")}
        >
            {value}
        </div>
    );
}

export default Btn;
