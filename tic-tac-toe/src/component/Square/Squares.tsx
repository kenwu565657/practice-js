import Square from "./Square";

interface SquaresProps {
    playersStepMap: Map<number, number[]>,
    winnerStepList: number[],
    handleClickSquare: (squareId: number) => void
}

const squareIdArray = new Array(9).fill(0).map((_, index) => index);

export default function Squares(props: SquaresProps) {
    return (
        <div>
            {
                squareIdArray.map(
                    (id) => (<Square key={id} id={id}></Square>)
                )
            }
        </div>
    );
}