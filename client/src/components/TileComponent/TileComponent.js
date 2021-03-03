import React from "react";
import classes from "./TileComponent.module.css";

const TileComponent = ({ imageURL, headline, title, subtitle, alt }) => {
  return (
    <div className={classes.tileComponent}>
      <div className={classes.image}>
        <img src={imageURL} alt={alt} />
      </div>
      <div className={classes.overlay}></div>
      <div className={classes.textBox}>
        <p className={classes.headline}>{headline}</p>
        <div className={classes.titleBox}>
          <p className={classes.subtitle}>{subtitle}</p>
          <p className={classes.title}>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TileComponent;
