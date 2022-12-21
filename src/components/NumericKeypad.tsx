import React from "react";
import { Button, SimpleGrid, Box } from "@chakra-ui/react";
import { keypadConfig } from "~/config/keypadConfig";
interface NumericKeypadProps {
  onClickHandler: ({ numericKey }: { numericKey: string }) => void;
}

export const NumericKeypad: React.FC<NumericKeypadProps> = ({
  onClickHandler,
}) => {
  return (
    <SimpleGrid columns={3} spacing={4}>
      {Object.keys(keypadConfig).map((numericKey) => {
        const correspondingString = keypadConfig[numericKey];
        return (
          <Box style={styles.item} height="50px">
            <Button
              style={styles.btn}
              onClick={() => {
                onClickHandler({ numericKey });
              }}
            >
              <div>
                <div>
                  <b>{numericKey}</b>
                </div>
                <div>{correspondingString}</div>
              </div>
            </Button>
          </Box>
        );
      })}
    </SimpleGrid>
  );
};

const styles = {
  item: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    width: "100%",
    height: "100%",
  },
};
