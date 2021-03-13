import React from "react";
import Loader from "../Loader";
import classes from "./LoaderScreen.module.css";

const LoaderScreen = () => {
  return (
    <div className={classes.loaderScreenContainer}>
      <Loader />
    </div>
  );
};

export default LoaderScreen;
