import React from "react";
import { keypadConfig } from "~/config/keypadConfig";
interface NumericKeypadProps {
  onClickHandler: ({ numericKey }: { numericKey: string }) => void;
}

export const NumericKeypad: React.FC<NumericKeypadProps> = ({
  onClickHandler,
}) => {
  return (
    <div>
      {Object.keys(keypadConfig).map((numericKey) => {
        const correspondingString = keypadConfig[numericKey];
        return (
          <div key={numericKey}>
            <button
              onClick={() => {
                onClickHandler({ numericKey });
              }}
            >
              <span>
                <b>{numericKey}</b>
                <span>{correspondingString}</span>
              </span>
            </button>
          </div>
        );
      })}
    </div>
  );
};
