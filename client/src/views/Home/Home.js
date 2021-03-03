import React, { useState, useEffect } from "react";
import classes from "./Home.module.css";
import WelcomeUser from "./components/WelcomeUser/WelcomeUser";
import SongContainer from "../../components/SongContainer/SongContainer";
import {
  getRecentlyPlayed,
  getUsersTopArtistsShort,
  getUsersTopTracksShort,
} from "../../api/api";
import Loader from "../../components/Loader/Loader";
import TileComponent from "../../components/TileComponent/TileComponent";

const Home = () => {
  const [recentlyPlayedSongs, setRecentlyPlayedSongs] = useState(null);
  const [usersTopArtist, setUsersTopArtist] = useState(null);
  const [usersTopTrack, setUsersTopTrack] = useState(null);

  useEffect(() => {
    getRecentlyPlayed().then((res) => setRecentlyPlayedSongs(res.data));
    getUsersTopArtistsShort(1).then((res) =>
      setUsersTopArtist(res.data.items[0])
    );
    getUsersTopTracksShort(1).then((res) =>
      setUsersTopTrack(res.data.items[0])
    );
  }, []);

  return (
    <div className={classes.gridParent}>
      <div className={classes.gridHeader}>
        <WelcomeUser />
      </div>
      <div className={classes.topLeft}>
        {usersTopArtist ? (
          <TileComponent
            imageURL={usersTopArtist.images[1].url}
            headline={`Most played artists (last 30 days)`}
            title={usersTopArtist.name}
          />
        ) : (
          <Loader className={classes.loader} />
        )}
      </div>
      <div className={classes.topRight}>
        {usersTopTrack ? (
          <TileComponent
            imageURL={usersTopTrack.album.images[1].url}
            headline={`Most played song (last 30 days)`}
            title={usersTopTrack.name}
            subtitle={usersTopTrack.artists[0].name}
          />
        ) : (
          <Loader className={classes.loader} />
        )}
      </div>

      <div className={classes.middleLeft}></div>
      <div className={classes.middleRight}></div>
      <div className={classes.bottomLeft}></div>
      <div className={classes.bottomRight}>
        {recentlyPlayedSongs ? (
          <SongContainer
            tracks={recentlyPlayedSongs.items}
            title="Recently played songs"
          />
        ) : (
          <Loader className={classes.loader} />
        )}
      </div>
    </div>
  );
};

export default Home;
