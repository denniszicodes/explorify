import React, { useState, useEffect } from "react";
import { getAccessToken, getRecentlyPlayed } from "../../api/index";
import SongContainer from "../../components/SongContainer/SongContainer";

import classes from "./App.module.css";
import "./colors.css";

const App = () => {
  const [accessToken, setAccessToken] = useState("");
  const [recentlyPlayedSongs, setRecentlyPlayedSongs] = useState(null);

  //LIFECYCLE
  useEffect(() => {
    const token = getAccessToken();
    setAccessToken(token);
    getRecentlyPlayed().then((res) => setRecentlyPlayedSongs(res.data));
  }, []);

  //TEMPORARY
  const login = accessToken ? (
    <p>You are logged in!</p>
  ) : (
    <button>
      <a href="http://localhost:8080/login">Login!</a>
    </button>
  );

  return (
    <div className={classes.App}>
      {login}
      {recentlyPlayedSongs ? (
        <SongContainer tracks={recentlyPlayedSongs.items} />
      ) : null}
    </div>
  );
};

export default App;
