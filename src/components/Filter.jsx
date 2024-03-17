import DropDown from "./DropDown";
import { useDispatch } from "react-redux";
import { clearFilters } from "../redux/slices/filterReducer";

export default function Filter() {
  const dispatch = useDispatch();
  return (
    <div className="filter">
      <DropDown />
      <button
        className="clear__filter-btn"
        onClick={() => dispatch(clearFilters())}
      >
        сбросить все фильтры
      </button>
    </div>
  );
}
