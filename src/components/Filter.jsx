import React from "react";
import DropDown from "./DropDown";

export default function Filter({ category, setCategory }) {
  return (
    <div className="filter">
      <DropDown category={category} setCategory={setCategory} />
    </div>
  );
}
