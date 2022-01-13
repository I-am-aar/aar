import React, { useState } from 'react';
import Styled from 'styled-components';
import { Button } from '../common';

const Board = Styled.div`
    margin: 0 auto;
`;

const BoardRow = Styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
`;

const SquareBtn = Styled.button`
    background: #444;
    color: white;
    border: 1px solid #999;
    padding: 0;
    font-size: 84px;
    text-align: center;
    width: 100px;
    height: 100px;

    &:focus {
        outline: none;
        background: #222;
    }
`;

const Square = (props) => {
    return (
        <SquareBtn onClick={props.onClickEvent}>
            {props.value}
        </SquareBtn>
    );
};

const TicTacGame = () => {

    const initSquares = Array(9).fill(null);
    const [squares, setSquares] = useState(initSquares);
    const [xIsNext, setXIsNext] = useState(true);

    const handleClickEvent = (i) => {
        const newSquares = [...squares];

        const winnerDeclared = Boolean(calculateWinner(newSquares));
        const squaredFilled = Boolean(newSquares[i]);

        if(winnerDeclared || squaredFilled) {
            return;
        }

        newSquares[i] = xIsNext ? 'X' : 'O';
        setSquares(newSquares);
        setXIsNext(!xIsNext);
    }

    const renderSquare = (i) => {
        return (
            <Square 
                value={squares[i]} 
                onClickEvent={() => handleClickEvent(i)}
            />
        )
    }

    const calculateWinner = () => {
        const lines = [
            [0,1,2], [3,4,5], [6,7,8], // Rows
            [0,3,6], [1,4,7], [2,5,8], // Columns
            [0,4,8], [2,4,6] // Diagonals
        ]

        for(let line of lines) {
            const [a, b, c] = line;

            if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }

        return null;
    }

    const winner = calculateWinner(squares);
    const status = winner ?
        `Winner: ${winner}` :
        `Next player: ${xIsNext ? 'X' : 'O'}`;

    const resetGame = () => {
        setSquares(initSquares);
        setXIsNext(true);
    }

    return (
        <Board>
            <p style={{textAlign: 'center'}}>{status}</p>
            <BoardRow>
                {renderSquare(0)}{renderSquare(1)}{renderSquare(2)}
            </BoardRow>
            <BoardRow>
                {renderSquare(3)}{renderSquare(4)}{renderSquare(5)}
            </BoardRow>
            <BoardRow>
                {renderSquare(6)}{renderSquare(7)}{renderSquare(8)}
            </BoardRow>
            <Button style={{position: 'relative', left: '50%', transform: 'translateX(-50%)', marginTop: '40px'}} onClick={() => resetGame()}>{winner ? 'New Game' : 'Reset Game'}</Button>
        </Board>
    );
};

export default TicTacGame;