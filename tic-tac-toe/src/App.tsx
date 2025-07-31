import React from "react";
import GameBoard from "./components/gameBoard/gameBoard";

const App: React.FC = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Score:</h1>
      <GameBoard />
    </div>
  );
};

export default App;
