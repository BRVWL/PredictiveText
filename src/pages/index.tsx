/**
 * This is a Next.js page.
 */
import React from "react";
import { trpc } from "../utils/trpc";
import { NumericKeypad } from "../components/NumericKeypad";
import { Badge, Stack } from "@chakra-ui/react";

export default function IndexPage() {
  const [inputNumericString, setInputNumericString] =
    React.useState<string>("");

  const result = trpc.processNumberToWords.useQuery({
    numericString: inputNumericString,
  });

  const onClickHandler = ({ numericKey }: Record<"numericKey", string>) => {
    setInputNumericString(inputNumericString.concat(numericKey));
  };

  if (!result?.data) {
    return (
      <div style={styles.container}>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div style={styles.container}>
      <div style={styles.wordsContainer}>
        <Stack spacing={2} direction="row" align="center">
          {result.data.map((item) => {
            return (
              <Badge colorScheme="purple" key={item}>
                {item}
              </Badge>
            );
          })}
        </Stack>
      </div>
      <div style={styles.numericKeypadContainer}>
        <NumericKeypad onClickHandler={onClickHandler} />
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: 20,
    overflow: "scroll",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  numericKeypadContainer: {
    width: 400,
  },
  wordsContainer: {
    height: 60,
    width: 400,
    backgroundColor: "#edf2f6",
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    overflow: "scroll",
    display: "flex",
    alignItems: "center",
    padding: 20,
  },
};
