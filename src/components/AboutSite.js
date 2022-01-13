import React from 'react';
import Styled from 'styled-components';
import AboutSiteMov from '../assets/videos/about_site.mp4';

const AboutWrapper = Styled.div`
    width: 100%;
    padding-top: 100px;
    display: flex;

    & video {
        width: 45%;
    }

    @media (max-width: 800px) {
        flex-direction: column;

        & video {
            width: 100%;
        }
    } 
`

const AboutText = Styled.div`
    width: 50%;
    padding-left: 5%;

    @media (max-width: 800px) {
        width: 100%;
        padding-left: 0;
    } 
`

const AboutSite = () => (
    <AboutWrapper>
        <video autoPlay loop>
            <source src={AboutSiteMov} type="video/mp4" />
        </video>
        <AboutText>
            <h1>This is</h1>
            <p>
            My portfolio website.<br/> It has been a hobby of mine alongside football, CrossFit, Star Wars and Lego to write code. I've spent countless evenings creating things just for the fun of it and to learn new skills. I mostly like to program in JavaScript (React) but I have also been trying out Python, Swift and more to expand my knowledge.<br/><br/> What I'm working on now is to take these projects I've been playing around with and put them in my playground.<br/><br/>So the purpose of this website is to show that even though I lack real work experience. I do have experience in web development. It's one of the things that bring me joy and I want to make a career out of it.
            </p>
        </AboutText>
    </AboutWrapper>
);

export default AboutSite;