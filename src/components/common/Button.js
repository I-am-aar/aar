import Styled from 'styled-components';

export const Button = Styled.button`
    padding: 20px 40px;
    background: ${props => props.buttonColor || 'black'};
    color: white;
`;