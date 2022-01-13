import React from "react";
import Styled from 'styled-components';

import { PageWrapper } from '../components/common';
import Info from '../components/Info';
import ImgAAR from '../assets/images/aar_img.png';
import portfolioMovie from '../assets/videos/portfolio_movie.mp4';
import Seo from "../components/seo"

const Herobanner = Styled.div`
  width: 100%;
  padding-top: 130px;
  display: flex;
  flex-direction: row-reverse;

  & video {
    width: 70%;
    float: right;

    @media (max-width: 580px) {
      width: 100%;
    }
  }
`;

const AboutWrapper = Styled.div`
  width: 100%;
  margin-top: -16%;
  position: relative;
  padding-bottom: 8%;
  z-index: 2;

  & img {
    width: 46%;
    height: auto;
    position: absolute;
    right: 0;
    bottom: 0;
  }

  @media (max-width: 800px) {
    & img {
      width: 80%;
      position: relative;
      float: right;
    }
  }

  @media (max-width: 580px) {
    margin-top: 0;
  }
`;

const IndexPage = () => (

  <PageWrapper>
    <Seo title="Home" />
    <Herobanner
      data-sal='slide-up'
      data-sal-duration='1000'
      data-sal-delay='200'
      data-sal-easing='easeInQuad'
    >
      <video autoPlay muted loop>
        <source src={portfolioMovie} type="video/mp4" />
      </video>
    </Herobanner>
    <AboutWrapper>
      <Info />
      <img src={ImgAAR} alt="Arnór Ragnarsson" />
    </AboutWrapper>
  </PageWrapper>
);


export default IndexPage
