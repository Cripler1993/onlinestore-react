import React from "react";
import { tagsArr } from "../utiles/constants";

export default function Tags({ handleActive, activeClass }) {
  return (
    <div className="tags__row">
      {tagsArr.map(function (elem) {
        return (
          <button
            key={elem}
            onClick={() => handleActive(elem)}
            className={activeClass(elem) ? "tag tag__active" : "tag"}
          >
            {elem}
          </button>
        );
      })}
    </div>
  );
}
