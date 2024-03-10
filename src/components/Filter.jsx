import React from "react";
import DropDown from "./DropDown";

export default function Filter({ clearFilters }) {
  return (
    <div className="filter">
      <DropDown />
      <button className="clear__filter-btn" onClick={clearFilters}>
        сбросить все фильтры
      </button>
    </div>
  );
}
