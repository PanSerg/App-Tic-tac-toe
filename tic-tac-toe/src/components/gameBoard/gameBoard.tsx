import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../redux/store";
import { makeMove } from "../../redux/slices/gameSlice";
import { BoardWrapper, Title, BoardGrid, CellButton } from "./gameBoard.styled";

const GameBoard: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { board, currentPlayer, isGameOver } = useSelector(
    (state: RootState) => state.game
  );

  const handleClick = (index: number) => {
    if (!isGameOver && board[index] === null) {
      dispatch(makeMove(index));
    }
  };
  return (
    <BoardWrapper>
      <Title>Current Player: {currentPlayer}</Title>
      <BoardGrid>
        {board.map((cell, index) => (
          <CellButton
            key={index}
            onClick={() => handleClick(index)}
            disabled={!!cell || isGameOver}
          >
            {cell}
          </CellButton>
        ))}
      </BoardGrid>
    </BoardWrapper>
  );
};

export default GameBoard;
