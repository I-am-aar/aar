import React from 'react';
import { Link } from 'gatsby';
import Styled from 'styled-components';

import { TextAnimation } from './common';

const InfoText = Styled.h2`
    font-size: 130px;
    text-transform: uppercase;

    & span {
      display: block;
      margin: 5% 0;    
    }

    & a {
      font-size: 150px;
    }

    @media (max-width: 1660px) {
      font-size: 100px;
      & a {
        font-size: 120px;
      }
    }

    @media (max-width: 1450px) {
      font-size: 90px;
      & a {
        font-size: 110px;
      }
    }

    @media (max-width: 1250px) {
      font-size: 80px;
      & a {
        font-size: 100px;
      }
    }

    @media (max-width: 1180px) {
      font-size: 70px;
      & a {
        font-size: 90px;
      }
    }

    @media (max-width: 920px) {
      font-size: 60px;
      & a {
        font-size: 80px;
      }
    }

    @media (max-width: 800px) {
      font-size: 50px;
      & a {
        font-size: 65px;
      }
    }

    @media (max-width: 690px) {
      font-size: 40px;
      & a {
        font-size: 50px;
      }
    }

    @media (max-width: 580px) {
      font-size: 30px;
      & a {
        font-size: 40px;
      }
    }

    @media (max-width: 375px) {
      font-size: 20px;
      & a {
        font-size: 25px;
      }
    }
  }
`;



const Info = () => (
    <InfoText>
        <TextAnimation>I'm a<br/>web developer</TextAnimation>
        <TextAnimation pos='right'>based in Húsavík,</TextAnimation>
        <TextAnimation>Iceland. Learn more</TextAnimation>
        <TextAnimation pos='right'><Link to="/about">about</Link> me, checkout</TextAnimation>
        <TextAnimation>fun projects in</TextAnimation>
        <TextAnimation pos='right'>the <Link to="/playground">playground</Link></TextAnimation>
        <TextAnimation>area or read my</TextAnimation>
        <TextAnimation pos='right'>Medium <Link to="/stories">stories</Link></TextAnimation>
        <TextAnimation>if you like.</TextAnimation>
        <TextAnimation pos='right'>Either way, I hope</TextAnimation>
        <TextAnimation>you have fun.</TextAnimation>
    </InfoText>
);

export default Info;