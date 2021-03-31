import React from "react";
import CardContainer from "./CardContainer/CardContainer";
import TitleWrapper from "../TitleWrapper/TitleWrapper";
import CardItem from "./CardItem/CardItem";
import styled from "styled-components/macro";
import Loader from "../Loader/Loader";

const StyledCardContainer = styled(CardContainer)`
  /* min-height: 26rem; */
`;

const CardSection = ({ data, type, title, link = "/" }) => {
  let content = undefined;

  content = data.map((item) => (
    <li key={item.id}>
      <CardItem data={item} type={type} />
    </li>
  ));

  return (
    <>
      <TitleWrapper headline={title || "Section"} link={link}>
        <StyledCardContainer>{content || <Loader />}</StyledCardContainer>
      </TitleWrapper>
    </>
  );
};

export default CardSection;
