import React, { useState, useEffect } from "react";
import { getAccessToken, getMyInfo } from "../../api/index";

import classes from "./App.module.css";

const App = () => {
  const [accessToken, setAccessToken] = useState("");
  const [userInfo, setUserInfo] = useState("");

  //LIFECYCLE
  useEffect(() => {
    const token = getAccessToken();
    setAccessToken(token);
  }, []);

  //TEMPORARY
  getMyInfo().then((res) => setUserInfo(JSON.stringify(res, null, 4)));

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
      <pre>{userInfo}</pre>
    </div>
  );
};

export default App;
