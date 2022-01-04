import SerieCard from "./SerieCard.js";
import React from "react";

export default function SerieList({ serie, name, rating }) {
  return (
    <div className="List">
      {serie
        .filter(
          (el) =>
            el.title.toLowerCase().includes(name.toLowerCase()) &&
            el.rating >= rating
        )
        .map((el) => (
          <SerieCard serie={el} key={el.id} />
        ))}
      ;
    </div>
  );
}
