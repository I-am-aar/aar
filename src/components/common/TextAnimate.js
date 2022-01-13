import React from 'react';
import Styled from 'styled-components';

const Text = Styled.span`
    text-align: ${props => props.align || 'left'};
`;

export const TextAnimation = ({pos, children}) => (
    <Text 
        data-sal='slide-up'
        data-sal-duration='1000'
        data-sal-delay='200'
        data-sal-easing='easeInQuad'
        align={pos}
    >
        {children}
    </Text>
)

