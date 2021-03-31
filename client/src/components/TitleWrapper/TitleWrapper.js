import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";

const HeadlineContainer = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 25rem;
  min-width: 100%;
  margin-bottom: 16px;
  text-transform: uppercase;
  color: var(--color-white);
`;

const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  padding-bottom: var(--spacing-size-lg-2);
  min-width: 0;
`;

const Headline = styled.h1`
  position: relative;
  font-size: var(--font-size-xl);
  letter-spacing: 1.7px;
  font-weight: bold;

  &::before {
    content: "";
    position: absolute;
    display: inline-block;
    top: 3.7rem;
    left: 0;
    width: 13rem;
    height: 0.4rem;
    background-color: var(--color-spotify-green);
  }
`;

const SeeMoreLink = styled(Link)`
  font-size: 1.3rem;
  color: var(--color-spotify-green);
  transition: all 0.3s;

  &:hover {
    color: var(--color-spotify-logo-green);
  }
`;

const TitleWrapper = ({ children, headline, link }) => {
  return (
    <HeadlineContainer>
      <ContainerHeader>
        <Headline>{headline}</Headline>
        <SeeMoreLink to={link}>Show more</SeeMoreLink>
      </ContainerHeader>
      {children}
    </HeadlineContainer>
  );
};

export default TitleWrapper;
