import React from "react";
import classes from "./Explorify.module.css";

import SideNav from "../../components/SideNav/SideNav";
import Header from "../../components/Header/Header";

const Explorify = ({ children }) => {
  return (
    <div className={classes.Container}>
      <main className={classes.Explorify}>
        <SideNav />
        <Header />
        <div className={classes.Content}>{children}</div>
      </main>
    </div>
  );
};

export default Explorify;
