import React from "react";
import DropDown from "./DropDown";

export default function Filter({ category, setCategory, clearFilters }) {
  return (
    <div className="filter">
      <DropDown category={category} setCategory={setCategory} />
      <button className="clear__filter-btn" onClick={clearFilters}>
        сбросить все фильтры
      </button>
    </div>
  );
}
