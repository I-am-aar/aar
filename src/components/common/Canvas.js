import Styled from 'styled-components';

export const Canvas = Styled.canvas`
    background: ${props => props.bcColor || 'black'};
`;