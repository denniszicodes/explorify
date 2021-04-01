import React from "react";
import CardContainer from "./CardContainer/CardContainer";
import TitleWrapper from "../TitleWrapper/TitleWrapper";
import CardItem from "./CardItem/CardItem";
import Loader from "../Loader/Loader";

const CardSection = ({ data, type, title, link = "/" }) => {
  const content = data.map((item) => (
    <li key={item.id}>
      <CardItem data={item} type={type} />
    </li>
  ));

  return (
    <>
      <TitleWrapper headline={title || "Section"} link={link}>
        <CardContainer>{content || <Loader />}</CardContainer>
      </TitleWrapper>
    </>
  );
};

export default CardSection;
