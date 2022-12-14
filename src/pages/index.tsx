/**
 * This is a Next.js page.
 */
import React from "react";
import { trpc } from "../utils/trpc";
import { NumericKeypad } from "../components/NumericKeypad";

export default function IndexPage() {
  const [inputNumericString, setInputNumericString] =
    React.useState<string>("");
  const result = trpc.processNumberToWords.useQuery({
    numericString: inputNumericString,
  });

  const onClickHandler = ({ numericKey }: Record<"numericKey", string>) => {
    setInputNumericString(inputNumericString.concat(numericKey));
  };

  if (!result.data) {
    return (
      <div style={styles}>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div style={styles}>
      <ul>
        {result.data.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
      <NumericKeypad onClickHandler={onClickHandler} />
    </div>
  );
}

const styles = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
