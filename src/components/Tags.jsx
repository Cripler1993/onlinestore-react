import React from "react";
import { tagsArr } from "../utiles/constants";

export default function Tags({ handleActive, activeTags }) {
  return (
    <div className="tags__row">
      {tagsArr.map(function (elem) {
        return (
          <button
            onClick={() => handleActive(elem)}
            className={
              elem.label == activeTags.label ? "tag tag__active" : "tag"
            }
          >
            {elem.label}
          </button>
        );
      })}
    </div>
  );
}
