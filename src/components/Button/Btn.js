import className from "classnames/bind";
import style from "./Btn.module.scss";
const cx = className.bind(style);

function Btn({ value, width }) {
    return (
        <div
            style={{
                width: width == "fit-content" ? "fit-content" : "auto",
            }}
            className={cx("btn")}
        >
            {value}
        </div>
    );
}

export default Btn;
