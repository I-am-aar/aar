import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';
import { Light } from './Light';
import HexBlack from '../assets/images/hexGrid_black.svg'

const HexWrapper = Styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    overflow: hidden;
    background-image: linear-gradient(225deg, #414345 0%, #232526 100%);
    z-index: -1;
`;

const HexImg = Styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const HexGrid = () => {
    const [position, setPosition] = useState({x: 0, y: 0});

    useEffect(() => {
        onMouseMove();

        return () => cancelMouseMove();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onMouseMove = () => {
        document.addEventListener("mousemove", setMousePosition);
    };

    const cancelMouseMove = () => {
        document.removeEventListener("mousemove", setMousePosition);
    };

    const setMousePosition = (e) => {
        setPosition({x: e.clientX, y: e.clientY});
    };

    return (
        <HexWrapper>
            <Light moveX={position.x} moveY={position.y} />
            <HexImg src={HexBlack} alt="" />
        </HexWrapper>
        
    )
};

export default HexGrid;