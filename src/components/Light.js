import Styled from 'styled-components';

export const Light = Styled.div.attrs(props => ({
    style: {
        top: props.moveY + 'px',
        left: props.moveX + 'px'
    }
}))`
    position: absolute;
    width: 20%;
    height: 0;
    padding-top: 20%;
    border-radius: 50%;
    background: linear-gradient(to right, #0083B0, #00B4DB);
    transform: translate(-50%, -50%);
    filter: blur(30px);
`;
