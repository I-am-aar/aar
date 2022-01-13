import React from 'react';
import { navigate } from 'gatsby';
import Styled from 'styled-components';

const BackButton = Styled.button`
    margin-top: 120px;
    margin-bottom: 0;
    color: #000;
    text-decoration: underline;
    border: none;
    padding: 0;
    background: none;

    &:hover {
      color: #CCC;
    }

    &:hover i {
        border: solid #CCC;
        border-width: 0 2px 2px 0;
    }
`;

const ArrowLeft = Styled.i`
    border: solid #000;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
    margin: 0 10px 2px 0;
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
`;

export const Back = () => (
    <BackButton onClick={() => navigate(-1)} ><ArrowLeft />Go back</BackButton>
);