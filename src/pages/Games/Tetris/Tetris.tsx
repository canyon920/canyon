import React, { memo, useEffect, useRef, KeyboardEvent } from 'react';
import { useBoard } from './useBoard';
import "./Tetris.css";

const Board = () => {
    const [display, score, onKeyDown]: any = useBoard();
    const eBoard: any = useRef<HTMLDivElement | null>(null);

    useEffect(focusBoard, []);

    function focusBoard() {
        if (eBoard.current) {
            eBoard.current.focus();
        }
    }

    function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
        onKeyDown(event);
    }

    return (
        <div ref={eBoard} className={'t-board'} tabIndex={0} onKeyDown={handleKeyDown}>
            <div>
                <span className="t-score-label">Score:</span>
                <span className="t-score">{score.toLocaleString()}</span>
            </div>
            {display.map((row: any, index: number) => (
                <Row row={row} key={index} />
            ))}
        </div>
    );
};

const Row = memo((props: { row: any }) => {
    return (
        <span className="t-row">
      {props.row.map((cell: any, index: number) => (
          <Cell cell={cell} key={index} />
      ))}
    </span>
    );
});

const Cell = memo((props: { cell: any }) => {
    const count: any = useRef(0);

    count.current++;

    const value = props.cell ? props.cell : 0;
    return <span className={`t-cell t-cell-${value}`}></span>;
});

export default memo(Board);
