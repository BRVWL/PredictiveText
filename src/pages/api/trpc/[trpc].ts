/**
 * This is the API-handler of your app that contains all your API routes.
 */
import * as trpcNext from "@trpc/server/adapters/next";
import { z } from "zod";
// import { keypadConfig } from "~/config/keypadConfig";
import { publicProcedure, router } from "~/server/trpc";
import { PrefixTree } from "~/Trie";
import wordsDictionaryMap from "../../../../wordsDictionaryMap.json";
// import { keys } from "../../../config/keypadConfig";
// import wordsDictionary from "../../../../words_dictionary.json";
// const bdFile = Object.keys(wordsDictionary).map((word) => {
//   const t9code = word
//     .split("")
//     .map((char) => keys[char])
//     .join("");
//   return [word, t9code];
// });

// const wordsDictionaryMap = bdFile.reduce(
//   (acc: Record<string, string[]>, cur) => {
//     const [word, t9code] = cur;
//     if (!acc.hasOwnProperty(t9code)) {
//       acc[t9code] = [word];
//     } else {
//       acc[t9code] = acc[t9code].concat(word);
//     }
//     return acc;
//   },
//   {}
// );

const prefixTree = new PrefixTree();

Object.keys(wordsDictionaryMap).forEach((code) => {
  prefixTree.addWord(code);
});

// brute force solution
// function addDigit(array: string[], options: string) {
//   const newArray: string[] = [];
//   array.forEach((item) => {
//     options.split("").forEach((letter) => {
//       newArray.push(item.concat(letter));
//     });
//   });
//   return newArray;
// }

const processNumberToWords = (numericString: string): string[] => {
  // brute force solution
  // var result = [""];
  // numericString.split("").forEach((digit) => {
  //   result = addDigit(result, keypadConfig[digit]);
  // });

  const predictedCodes = prefixTree.predictWord(numericString);
  const predictedWords = predictedCodes.map((code) => {
    return numericString.length ? wordsDictionaryMap[code] : [];
  });

  return predictedWords.flat();
};

const appRouter = router({
  processNumberToWords: publicProcedure
    .input(
      z.object({
        numericString: z.string(),
      })
    )
    .query(async ({ input }) => {
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
