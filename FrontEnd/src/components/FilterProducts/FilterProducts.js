import className from "classnames/bind";
import style from "./FilterProducts.module.scss";
import PaginationLinks from "../PaginationLinks/PaginationLinks";
const cx = className.bind(style);
function FilterProducts({ meta, onPageClick, onSortChoose, onStatusChoose }) {
  return (
    <div className={cx("container")}>
      <div className={cx("sort-choice")}>
        <p className={cx("sort-text")}>Sorted by</p>
        <select className={cx("sort-select")} onChange={(e) => onSortChoose(e.target.value)}>
          <option value="DESC">Price: Low to High </option>
          <option value="ASC">Price: High to Low </option>
        </select>
        <select className={cx("sort-select")} onChange={(e) => onStatusChoose(e.target.value)}>
          <option value="active">Status: Active </option>
          <option value="inactive">Status:  Inactive</option>
        </select>
      </div>
      <PaginationLinks meta={meta} onPageClick={onPageClick} isFilter={true}/>
    </div>
  );
}

export default FilterProducts;
