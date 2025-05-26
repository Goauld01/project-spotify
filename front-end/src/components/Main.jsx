import React from "react";
import ItemList from "./ItemList.jsx";
import { artistArray } from "../assets/database/artists.js";
import { songsArray } from "../assets/database/songs.js";

const Main = ({ type }) => {
  return (
    <div className="main">
      {type === "Artists" || type === undefined ? (
        <ItemList
          title="Artistas"
          items={7}
          itemsArray={artistArray}
          path="/artists"
          idPath="/artist"
        />
      ) : (
        <></>
      )}

      {type === "Songs" || type === undefined ? (
        <ItemList
          title="Músicas"
          items={14}
          itemsArray={songsArray}
          path="/songs"
          idPath="/song"
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Main;
