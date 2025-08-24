import React from "react";
import type { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
// import GameBoard from "../gameBoard";
// import Chat from "../gameChat";
import { resetAll, resetGame } from "../../redux/slices/gameSlice";
import { resetChat } from "../../redux/slices/chatSlice";
import {
  ScreenWrapper,
  Header,
  HeaderContent,
  HorizontalDivider,
  PlayersRow,
  BoardsRow,
  PlayersLabel,
  Score,
  ScoreField,
  ScoreBtn,
  VerticalDivider,
  GameBoardWrapper,
} from "./gameScreen.styled";
const GameScreen: React.FC = () => {
  const { score } = useSelector((state: RootState) => state.game);
  //   const { messages } = useSelector((state: RootState) => state.chat);
  const dispatch = useDispatch();
  const handleReset = () => {
    dispatch(resetGame());
    dispatch(resetChat());
    dispatch(resetAll());
  };
  return (
    <ScreenWrapper>
      {" "}
      <Header>
        {" "}
        <HeaderContent>
          {" "}
          <PlayersRow>
            {" "}
            <PlayersLabel>Player 1</PlayersLabel>{" "}
            <ScoreField>
              {" "}
              <Score>
                {" "}
                Score: {score.X} : {score[0]}{" "}
              </Score>{" "}
              <ScoreBtn type="button" onClick={handleReset}>
                {" "}
                Reset{" "}
              </ScoreBtn>{" "}
            </ScoreField>{" "}
            <PlayersLabel>Player 2</PlayersLabel>{" "}
          </PlayersRow>{" "}
          <HorizontalDivider />{" "}
        </HeaderContent>{" "}
      </Header>{" "}
      <BoardsRow>
        {" "}
        <GameBoardWrapper>
          {" "}
          {/* <GameBoard player="X" /> <Chat messages={messages} player="X" />{" "} */}
        </GameBoardWrapper>{" "}
        <VerticalDivider />{" "}
        <GameBoardWrapper>
          {" "}
          {/* <GameBoard player="0" /> <Chat messages={messages} player="0" />{" "} */}
        </GameBoardWrapper>{" "}
      </BoardsRow>{" "}
    </ScreenWrapper>
  );
};
export default GameScreen;
