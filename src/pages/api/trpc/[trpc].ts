/**
 * This is the API-handler of your app that contains all your API routes.
 */
import * as trpcNext from "@trpc/server/adapters/next";
import { z } from "zod";
import { keypadConfig } from "~/config/keypadConfig";
import { publicProcedure, router } from "~/server/trpc";

function addDigit(array: string[], options: string) {
  const newArray: string[] = [];
  array.forEach((item) => {
    options.split("").forEach((letter) => {
      newArray.push(item.concat(letter));
    });
  });
  return newArray;
}

const processNumberToWords = (numericString: string) => {
  var result = [""];
  numericString.split("").forEach((digit) => {
    result = addDigit(result, keypadConfig[digit]);
  });
  return result;
};

const appRouter = router({
  processNumberToWords: publicProcedure
    .input(
      z.object({
        numericString: z.string(),
      })
    )
    .query(({ input }) => {
      return processNumberToWords(input.numericString);
    }),
});

// export only the type definition of the API
// None of the actual implementation is exposed to the client
export type AppRouter = typeof appRouter;

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
});
