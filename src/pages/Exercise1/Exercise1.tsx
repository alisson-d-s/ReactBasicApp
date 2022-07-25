import { useState } from "react";
import "../../css/Exercise1.css";

export const Exercise1 = () => {
  const [number, setNumber] = useState(0);

  const subtractNumber = () => {
    if (number === 0) return;
    setNumber(previousNumber => previousNumber - 1);
  };

  const addNumber = () => {
    setNumber(previousNumber => previousNumber + 1);
  };

  const reset = () => {
    setNumber(0);
  };

  return (
    <div>
      <div className="container">
        <button data-testid="subtractButton" className="btn-sup" onClick={subtractNumber}>-</button>
        <span data-testid="number" >{number}</span>
        <button data-testid="addButton" className="btn-sup" onClick={addNumber}>+</button>
      </div>
      <div className="container">
        <button data-testid="resetButton" className="btn-reset" onClick={reset}>reset</button>
      </div>
    </div>
  );
};
