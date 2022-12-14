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
  return (
    <div>
      {Object.keys(keypadConfig).map((numericKey) => {
        const correspondingString = keypadConfig[numericKey];
        return (
          <>
            <button>
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
