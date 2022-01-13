import React from 'react';
import Styled from 'styled-components';

import { Logo } from './common';

const FooterWrapper = Styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 10% 40px;

  @media (max-width: 600px) {
    & span {
      display: none;
    }
  }
`;

const LeftWrapper = Styled.div`
    display: flex;
    flex-direction: column;

    & a {
        margin: 10px 0 0;

        @media (max-width: 600px) {
            margin-top: 5px;
        } 
    }
`;

const CenterWrapper = Styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 33%;
`;

const RightWrapper = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    & button {
        text-decoration: underline;
        border: none;
        background: none;
        padding: 0;

        &:hover {
            color: #CCC;
        }

        &:hover i {
            border: solid #CCC;
            border-width: 0 3px 3px 0;
        }
    }
`;

const ArrowUp = Styled.i`
    border: solid black;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
    margin-right: 10px;
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
`;

const Footer = () => {

    const scrollToTop = () => {
        window[`scrollTo`]({ top: 0, behavior: `smooth` })
    }

    return (
        <FooterWrapper>
            <LeftWrapper>
                <a href="https://github.com/I-am-aar">GitHub</a>
                <a href="https://www.linkedin.com/in/arn%C3%B3r-ragnarsson-8631a7159/">LinkedIn</a>
                <a href="https://medium.com/@aar_83570">Medium</a>
                <a href="https://www.facebook.com/myNameIsArnor">Facebook</a>
            </LeftWrapper>
            <CenterWrapper>
                <Logo size={'60%'} />
                <p>&lt;/<span>WEB DEVELOPER</span>&gt;</p>
            </CenterWrapper>
            <RightWrapper>
                <button onClick={scrollToTop}><ArrowUp /><span>Back</span> to top</button>
            </RightWrapper>
        </FooterWrapper>
    )
    
};

export default Footer;