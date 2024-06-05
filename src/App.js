// Stylesheets
import "./App.css";

import { useState } from "react";

import { Column } from "./Components/Column.js";

function App() {
  const [gameData, setGameData] = useState([
    ["T", "W", "T", "M", "A", "C", "T", "N", "W", "B", "T", "O", "F"],
    ["U", "O", "N", "I", "H", "E", "H", "O", "N", "A", "H", "A", "I"],
    ["R", "E", "L", "I", "S", "D", "L", "O", "V", "T", "T", "L", "E"],
    ["N", "I", "P", "S", "G", "C", "S", "T", "P", "I", "U", "I", "H"],
    ["T", "A", "O", "L", "H", "E", "B", "G", "G", "I", "O", "F", "E"],
    ["H", "A", "N", "W", "T", "R", "T", "T", "M", "A", "A", "R", "R"],
    ["E", "B", "Z", "P", "A", "T", "T", "T", "W", "T", "S", "A", "E"],
    ["T", "S", "E", "H", "E", "H", "O", "K", "K", "S", "Y", "A", "L"],
    ["A", "P", "E", "B", "E", "N", "E", "E", "A", "R", "R", "E", "E"],
    ["B", "M", "A", "E", "L", "I", "D", "X", "Y", "S", "A", "M", "E"],
    ["L", "N", "O", "I", "O", "Y", "T", "I", "G", "A", "U", "B", "P"],
    ["E", "T", "T", "U", "N", "U", "O", "H", "N", "I", "R", "S", "O"],
    ["S", "G", "R", "U", "S", "D", "N", "S", "T", "W", "R", "O", "H"],
  ]);

  return (
    <div className="App">
      <aside className="game-summary">
        <h1>Turn the Tables</h1>
      </aside>
      <div className="gameboard">
        {gameData ? (
          <>
            {gameData.map((column, i) => (
              <Column
                key={i}
                columnIndex={i}
                columnData={column}
                gameData={gameData}
                setGameData={setGameData}
              />
            ))}
          </>
        ) : (
          <>Loading...</>
        )}
      </div>
    </div>
  );
}

export default App;
