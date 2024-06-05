import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { useSpring, animated } from "@react-spring/web";

const Column = ({ columnIndex, columnData, gameData, setGameData }) => {
  const [springs, api] = useSpring(() => ({
    from: { y: 0 },
  }));

  const shiftUp = (col) => {
    api.start({
      from: {
        y: 0,
      },
      to: {
        y: -40,
      },
    });

    setTimeout(() => {
      // Store the current data
      let tempData = [...gameData];

      // Store the column to update
      let tempArray = gameData[col];

      // Move the first item to the end
      let tempItem = gameData[col].shift();
      tempArray.push(tempItem);
      tempData.splice(col, 1, tempArray);

      // Update the game data in state
      setGameData(tempData);
    }, 600);
  };

  return (
    <div className="column">
      <span
        key={`button-${columnIndex}`}
        className="button"
        onClick={() => shiftUp(columnIndex)}
      >
        <ChevronUpIcon className="size-5" />
      </span>

      <animated.div style={springs}>
        {columnData.map((element, j) => (
          <span key={j} className="tile">
            {element}
          </span>
        ))}
      </animated.div>
    </div>
  );
};

export { Column };
