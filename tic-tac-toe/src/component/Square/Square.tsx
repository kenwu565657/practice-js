interface SquareProps {
    id: number
}

export default function Square(props: SquareProps) {
    return (
        <div>{props.id}</div>
    );
}