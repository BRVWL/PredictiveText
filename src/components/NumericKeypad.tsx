import React from "react";

const keypadConfig: Record<string, string> = {
  0: "0",
  1: "1",
  2: "ABC",
  3: "DEF",
  4: "GHI",
  5: "JKL",
  6: "MNO",
  7: "PQRS",
  8: "TUV",
  9: "WXYZ",
};

export const NumericKeypad = () => {
  const [inputNumber, setInputNumber] = React.useState<string>("");
  const [inputText, setInputText] = React.useState<string>("");
  return (
    <div>
      <div>
        <h1>{inputNumber}</h1>
      </div>
      <div>
        <h3>{inputText}</h3>
      </div>
      {Object.keys(keypadConfig).map((numericKey) => {
        const correspondingString = keypadConfig[numericKey];
        return (
          <>
            <button
              onClick={() => {
                setInputNumber(inputNumber.concat(numericKey));
                setInputText(inputText.concat(correspondingString));
              }}
            >
              <span>
                <b>{numericKey}</b>
                <span>{correspondingString}</span>
              </span>
            </button>
          </>
        );
      })}
    </div>
  );
};
