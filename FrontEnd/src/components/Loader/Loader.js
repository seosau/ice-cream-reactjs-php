import className from "classnames/bind";
import style from './Loader.module.scss'
const cx = className.bind(style);
function Loader() {
    return ( <div className={cx("loader")}></div> );
}

export default Loader;