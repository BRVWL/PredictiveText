/**
 * This is the API-handler of your app that contains all your API routes.
 */
import * as trpcNext from "@trpc/server/adapters/next";
import { z } from "zod";
import { publicProcedure, router } from "~/server/trpc";
import { PrefixTree } from "~/Trie";
import wordsDictionaryMap from "../../../../wordsDictionaryMap.json";

const prefixTree = new PrefixTree();

Object.keys(wordsDictionaryMap).forEach((code) => {
  prefixTree.addWord(code);
});

const processNumberToWords = (numericString: string): string[] => {
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
