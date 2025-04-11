import { use, useState } from "react";
import Information from "./Information";
import Squares from "./Square/Squares";
import RestartButton from "./RestartButton";
import SwitchMode from "./SwitchMode";

const players: number[] = [1, -1];
const defaultUserSteps: Map<number, number[]> = new Map();
defaultUserSteps.set(1, []);
defaultUserSteps.set(-1, []);

const TicTacToe = () => {

    const [currentPlayerId, setCurrentPlayerId] = useState(players[0]);
    const [playersStepMap, setPlayerStepMap]= useState(defaultUserSteps);
    const [isSinglePlay, setIsSinglePlay]= useState(false);
    const [judgmentInfo, setJudgmentInfo] = useState({
        winnerId: 0,
        winnerStepsList: [],
        lastStepsToWin: {}
    });

    const {winnerId, winnerStepsList, lastStepsToWin} = judgmentInfo;
    const isGameEndedInTie: boolean = players.flatMap((playerId) => playersStepMap.get(playerId)).length === 9;

    const handleClickSquare: (squareId: number) => void = (squareId: number) => {
        const isSquareEnable = playersStepMap.get(1)?.indexOf(squareId) === -1 && playersStepMap.get(-1)?.indexOf(squareId) === -1;
        if (isSquareEnable) {
            const prevPlayerStepList: number[] = playersStepMap.get(currentPlayerId) || [];
            const newPlayerStepList: number[] = [...prevPlayerStepList, squareId];
            const newPlayerStepMap: Map<number, number[]> = new Map(playersStepMap).set(currentPlayerId, newPlayerStepList);
            setPlayerStepMap(newPlayerStepMap);
            setCurrentPlayerId((prev: number) => -1 * prev);
        };
    };

    return (
        <div className="background">
            <div className="container">
                <Information currentPlayerId={currentPlayerId} winnerId={winnerId} isGameEndedInTie={isGameEndedInTie}></Information>
                <Squares playersStepMap={playersStepMap} winnerStepList={winnerStepsList} handleClickSquare={handleClickSquare}></Squares>
                <div className="action">
                    <RestartButton handleResetState={}></RestartButton>
                    <SwitchMode isActive={isSinglePlay} handleSwitchPlayMode={}></SwitchMode>
                </div>
            </div>
        </div>
    );
};

export default TicTacToe;