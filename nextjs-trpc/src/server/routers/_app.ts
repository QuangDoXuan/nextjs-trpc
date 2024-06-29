import { createCallerFactory, publicProcedure, router } from '../trpc';
import { storeRouter } from '../apis/stores/router';

export const appRouter = router({
  healthcheck: publicProcedure.query(() => 'yay!'),
  store: storeRouter,
});

export const createCaller = createCallerFactory(appRouter);

export type AppRouter = typeof appRouter;
