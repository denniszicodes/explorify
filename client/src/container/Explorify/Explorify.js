import React, { useState, useEffect } from "react";
import { getRecentlyPlayed } from "../../api/index";

import SongContainer from "../../components/SongContainer/SongContainer";

import classes from "./Explorify.module.css";

const Explorify = () => {
  const [recentlyPlayedSongs, setRecentlyPlayedSongs] = useState(null);

  //LIFECYCLE
  useEffect(() => {
    getRecentlyPlayed().then((res) => setRecentlyPlayedSongs(res.data));
  }, []);

  return (
    <div className={classes.Explorify}>
      {recentlyPlayedSongs ? (
        <SongContainer tracks={recentlyPlayedSongs.items} />
      ) : null}
    </div>
  );
};

export default Explorify;
