import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

type Player = "X" | "0";
type Cell = Player | null;

interface GameState {
  board: Cell[];
  currentPlayer: Player;
  winner: Player | "Draw" | null;
  isGameOver: boolean;
  score: {
    X: number;
    0: number;
  };
}

const initialState: GameState = {
  board: Array(9).fill(null),
  currentPlayer: "X",
  winner: null,
  isGameOver: false,
  score: {
    X: 0,
    0: 0,
  },
};

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  [0, 4, 8],
  [2, 4, 6],
];

const checkWinner = (board: Cell[]): Player | "Draw" | null => {
  for (const combo of winningCombos) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  if (board.every((cell) => cell !== null)) return "Draw";
  return null;
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    makeMove: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      if (state.board[index] || state.isGameOver) return;

      state.board[index] = state.currentPlayer;
      const result = checkWinner(state.board);

      if (result) {
        state.winner = result;
        state.isGameOver = true;
        if (result === "X" || result === "0") {
          state.score[result]++;
        }
      } else {
        state.currentPlayer = state.currentPlayer === "X" ? "0" : "X";
      }
    },
    resetGame: (state) => {
      state.board = Array(9).fill(null);
      state.currentPlayer = "X";
      state.isGameOver = false;
      state.winner = null;
    },
    resetAll: () => initialState,
  },
});

export const { makeMove, resetGame, resetAll } = gameSlice.actions;
export default gameSlice.reducer;
