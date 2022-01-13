import React, { useRef, useEffect } from 'react';
import { Canvas } from '../common';

const PingPong = () => {
    const canvasRef = useRef(null);
    const requestIdRef = useRef(null);
    const ballRef = useRef({x: 50, y: 50, dx: 5, dy: 5, rad: 10, speed: 10});
    const playerOneRef = useRef({height: 200, width: 20, y: 200})
    const playerTwoRef = useRef({height: 200, width: 20, y: 200});

    const drawBall = (ctx, ball) => {
        ctx.beginPath();
        ctx.fillStyle = 'white';
        ctx.arc(ball.x, ball.y, ball.rad, 0, 2 * Math.PI);
        ctx.fill();
    }

    const ballMovement = (canvas, ball) => {
        ball.x += ball.dx;
        ball.y += ball.dy;

        if (
            ball.y - ball.rad <= 0 ||
            ball.y + ball.rad >= canvas.height
        ) {
            ball.dy = -ball.dy;
        }
    
        if (
            ball.x + ball.rad >= canvas.width ||
            ball.x - ball.rad <= 0
        ) {
            ball.dx = -ball.dx;
        }
    }

    const player = (ctx, player, side) => {
        ctx.fillStyle = 'white';
        ctx.fillRect(side, player.y, player.width, player.height);
    }

    const render = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0,0,canvas.width,canvas.height);
        drawBall(ctx, ballRef.current);
        ballMovement(canvas, ballRef.current);
        player(ctx, playerOneRef.current,10);
        player(ctx, playerTwoRef.current, canvas.width-30);
    }

    const playGame = () => {
        if (!canvasRef.current) return;
        render();
        requestIdRef.current = requestAnimationFrame(playGame);      
    }

    useEffect(() => {
        requestIdRef.current = requestAnimationFrame(playGame);

        return () => {
            cancelAnimationFrame(requestIdRef.current);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Canvas 
                ref={canvasRef}
                width={800}
                height={600}
                onMouseMove={(e) => {playerOneRef.current.y = e.clientY - playerOneRef.current.height}}
            />
        </>
    )
}

export default PingPong;