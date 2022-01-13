import React from 'react';
import Styled from 'styled-components';

import Experience from './Experience';
import CV from '../assets/downloads/CV.pdf'

const AboutWrapper = Styled.div`
    width: 100%;
    overflow: hidden;
`;

const TextWrapper = Styled.div`
    width: 50%;
    padding-right: 5%;

    @media (max-width: 800px) {
        width: 100%;
        padding-right: 0;
    } 
`;

const Contact = Styled.div`
    background: #000;
    width: 100%;
    padding: 20px 0;
    display: flex;
    justify-content: space-around;
    
    & a {
        color: #FFF;
    }
`;

const AboutMe = () => (
    <AboutWrapper
        data-sal='slide-up'
        data-sal-duration='1000'
        data-sal-delay='200'
        data-sal-easing='easeInQuad'
    >
        <TextWrapper>
            <h1>I am</h1>
            <p>
                Arnór Aðalsteinn Ragnarsson (AAR), born and raised in Húsavík, Iceland and currently based there. I graduated with a diploma in web development from Vefskólinn.<br/><br/>
                I would categorize myself as an frontend developer with a good eye for design and some knowledge of backend development. I love creating fun and beautiful interactive applications.<br/>Hard working, ready to learn new things and up for a challenge.
                <br/><br/>
                I am currently searching for a job as an frontend developer with the opportunity to work remotely from Húsavík.
            </p>
            <Experience />
            <Contact>
                <a href={CV}>CV</a>
                <a href="mailto:aar@aar.is">aar@aar.is</a>
                <a href="https://github.com/I-am-aar">GitHub</a>
                <a href="https://www.linkedin.com/in/arn%C3%B3r-ragnarsson-8631a7159/">LinkedIn</a>
            </Contact>
        </TextWrapper>
        
    </AboutWrapper>
);

export default AboutMe;