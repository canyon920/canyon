import { useEffect, useState, KeyboardEvent } from 'react';
import { useInterval } from './useInterval';
import { randomShape } from './ShapeFactory';

export const ROW_COUNT = 20;
export const COLUMN_COUNT = 10;

interface Point {
    x: number;
    y: number;
}

interface Shape {
    shape: Point[];
    width: number;
    height: number;
}

function copyScene(scene: number[][]) {
    return scene.map((row) => row.slice());
}

function mergeIntoStage(stage: number[][], shape: Shape, position: Point) {
    let res = stage;

    shape.shape.forEach((point) => {
        const x = point.x + position.x;
        const y = point.y + position.y;

        if (x < 0 || y < 0 || x >= COLUMN_COUNT || y >= ROW_COUNT) {
            return;
        }

        res = updateStage(res, x, y, 1);
    });

    return res;
}

function updateStage(stage: number[][], x: number, y: number, value: number) {
    if (stage[y][x] === value) {
        return stage;
    }
    const res = stage.slice();
    res[y] = stage[y].slice();
    res[y][x] = value;
    return res;
}

function createEmptyScene() {
    return Array.from(Array(ROW_COUNT), () => Array(COLUMN_COUNT).fill(0));
}

export function useBoard(): [number[][], number, (event: KeyboardEvent) => void] {
    const [scene, setScene] = useState(() => createEmptyScene());
    const [shape, setShape] = useState(() => randomShape());
    const [position, setPosition] = useState<Point>({ x: 0, y: 0 });
    const [display, setDisplay] = useState(() => mergeIntoStage(scene, shape, position));
    const [score, setScore] = useState(0);
    const [drop, setDrop] = useState(false); // 떨어뜨리기 키를 추적하는 새로운 상태

    useEffect(updateDisplay, [scene, shape, position]);
    useEffect(removeFullLines, [scene]);
    // useInterval(tick, 600);
    useInterval(() => {
        if (!drop && !movePosition(0, 1)) {
            placeShape();
        }
    }, 600);

    useEffect(() => {
        if (drop) {
            const intervalId = setInterval(() => {
                if (!movePosition(0, 1)) {
                    setDrop(false);
                    clearInterval(intervalId);
                }
            }, 50);
        }
    }, [drop]);

    function updateDisplay() {
        const newDisplay = mergeIntoStage(scene, shape, position);
        setDisplay(newDisplay);
    }

    function tick() {
        if (!drop && !movePosition(0, 1)) {
            placeShape();
        }
    }

    function placeShape() {
        setScene(mergeIntoStage(scene, shape, position));
        setShape(randomShape());
        setPosition({ x: 0, y: 0 });
    }

    function rotateShape() {
        const tX = Math.floor(shape.width / 2);
        const tY = Math.floor(shape.height / 2);

        const newPoints = shape.shape.map((point) => {
            let { x, y } = point;

            x -= tX;
            y -= tY;

            let rX = -y;
            let rY = x;

            rX += tX;
            rY += tY;

            return { x: rX, y: rY };
        });
        const newShape: Shape = {
            shape: newPoints,
            width: shape.width,
            height: shape.height,
        };

        if (validPosition(position, newShape)) {
            setShape(newShape);
        }
    }

    function removeFullLines() {
        const newScene = copyScene(scene);
        let touched = false;

        const removeRow = (rY: number) => {
            for (let y = rY; y > 0; y--) {
                for (let x = 0; x < COLUMN_COUNT - 1; x++) {
                    newScene[y][x] = newScene[y - 1][x];
                }
            }
            for (let x = 0; x < COLUMN_COUNT - 1; x++) {
                newScene[0][x] = 0;
            }

            touched = true;
            setScore((oldVal) => oldVal + 1000);
        };

        for (let y = 0; y < ROW_COUNT; y++) {
            let rowHasEmptySpace = false;
            for (let x = 0; x < COLUMN_COUNT - 1; x++) {
                if (newScene[y][x] === 0) {
                    rowHasEmptySpace = true;
                    break;
                }
            }
            if (!rowHasEmptySpace) {
                removeRow(y);
            }
        }

        if (touched) {
            setScene(newScene);
        }
    }

    function onKeyDown(event: KeyboardEvent) {
        switch (event.key) {
            case 'ArrowRight':
                movePosition(1, 0);
                event.preventDefault();
                break;
            case 'ArrowLeft':
                movePosition(-1, 0);
                event.preventDefault();
                console.log("zz");
                break;
            case 'ArrowDown':
                movePosition(0, 1);
                event.preventDefault();
                break;
            case 'Enter':
                setDrop(true);
                // movePosition(0, 18);
                event.preventDefault();
                console.log("gg");
                break;
            case 'ArrowUp':
                rotateShape();
                event.preventDefault();
                break;
            default:
                break;
        }
    }

    function movePosition(x: number, y: number) {
        const res = { x: x + position.x, y: y + position.y };

        if (!validPosition(res, shape)) {
            return false;
        }

        setPosition(res);

        return true;
    }

    function validPosition(position: Point, shape: Shape) {
        return shape.shape.every((point) => {
            const tX = point.x + position.x;
            const tY = point.y + position.y;

            if (tX < 0 || tX >= COLUMN_COUNT) {
                return false;
            }

            if (tY < 0 || tY >= ROW_COUNT) {
                return false;
            }

            if (scene[tY][tX] !== 0) {
                return false;
            }

            return true;
        });
    }

    return [display, score, onKeyDown];
}
