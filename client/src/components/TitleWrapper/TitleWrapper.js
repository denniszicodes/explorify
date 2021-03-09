import React from "react";
import { Link } from "react-router-dom";
import classes from "./TitleWrapper.module.css";

const TitleWrapper = ({ children, headline, link, className }) => {
  return (
    <div className={`${classes.titleWrapper} ${className}`}>
      <div className={classes.headline}>
        <h2>{headline}</h2>
        <Link to={link}>See more</Link>
      </div>
      {children}
    </div>
  );
};

export default TitleWrapper;
