/**
 * This is the API-handler of your app that contains all your API routes.
 */
import * as trpcNext from "@trpc/server/adapters/next";
import { z } from "zod";
import { publicProcedure, router } from "~/server/trpc";

const appRouter = router({
  greeting: publicProcedure
    // This is the input schema of your procedure
    .input(
      z.object({
        name: z.string().nullish(),
      })
    )
    .query(({ input }) => {
      // This is what you're returning to your client
      return {
        text: `hello ${input?.name ?? "world"}`,
      };
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
