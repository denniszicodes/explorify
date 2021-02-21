import React, { useState, useEffect } from "react";
import { getRecentlyPlayed } from "../../api/api";

const Home = () => {
  const [recentlyPlayed, setRecentlyPlayed] = useState(null);

  useEffect(() => {
    getRecentlyPlayed().then((res) => setRecentlyPlayed(res.data));
  }, []);

  return <div>Home</div>;
};

export default Home;
