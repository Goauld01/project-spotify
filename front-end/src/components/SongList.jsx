import React from "react";
import SongItems from "./SongItems";
import { useState } from "react";

const SongList = ({ songsArray }) => {
  const [items, setItems] = useState(5);
  return (
    <div className="song-list">
      {songsArray
        .filter((currentValeu, index) => index < items)
        .map((currentSongsObj, index) => (
          <SongItems {...currentSongsObj} key={index} index={index} />
        ))}
      <p
        className="song-list__see-more"
        onClick={() => {
          setItems(items + 5);
        }}
      >
        Ver mais
      </p>
    </div>
  );
};

export default SongList;
