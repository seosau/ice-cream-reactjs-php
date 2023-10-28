import className from "classnames/bind";
import style from "./Btn.module.scss";
import { Link } from "react-router-dom";
const cx = className.bind(style);

function Btn({ value, style, href }) {
    return href ? (
        <Link
            to={href}
            style={style ? style : { flex: 1, width: "auto" }}
            className={cx("btn")}
        >
            {value}
        </Link>
    ) : (
        <div
            href={href}
            style={style ? style : { flex: 1, width: "auto" }}
            className={cx("btn")}
        >
            {value}
        </div>
    );
}

export default Btn;
