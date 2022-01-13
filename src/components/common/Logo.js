import React from 'react';
import Styled from 'styled-components';
import LogoBlack from '../../assets/images/aar_logo_black.svg';

const LogoImg = Styled.img`
    width: ${props => props.width};
    height: auto;
    position: relative;
`;

export const Logo = ({size}) => (
    <LogoImg src={LogoBlack} width={size} />
);