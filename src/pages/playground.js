import React from 'react';
import Styled from 'styled-components';

import { PageWrapper, Back } from '../components/common';
import Seo from '../components/seo';
import TicTacToe from '../components/games/TicTacToe';

const PlaygroundWrapper = Styled.div`
    width: 100%;
    display: flex;

    @media (max-width: 700px) {
        flex-direction: column;
    } 
`;

const TextWrapper = Styled.div`
    width: 50%;
    padding-right: 5%;

    @media (max-width: 700px) {
        width: 100%;
    } 
`;

const Playground = () => (
    <PageWrapper>
        <Seo title="Playground" />
        <Back/>
        <PlaygroundWrapper
            data-sal='slide-up'
            data-sal-duration='1000'
            data-sal-delay='200'
            data-sal-easing='easeInQuad'
        >
            <TextWrapper>
                <h2>Playground</h2>
                <p>
                    Here I will showcase all my hobby projects and more. Over the years I've been doing all sorts of things in web development and programming in general. Soon this playground will be full of fun things to browse and try out.<br/><br/> In the meantime grab a friend or a coworker and play a game of tic tac toe.
                </p>
            </TextWrapper>
            <TicTacToe />
        </PlaygroundWrapper>
    </PageWrapper>
)

export default Playground;