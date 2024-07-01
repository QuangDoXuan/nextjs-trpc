import { createCallerFactory, publicProcedure, router } from '../trpc';
import { storeRouter } from '../apis/stores/router';
import { authRouter } from '../apis/auth/router';

export const appRouter = router({
  healthcheck: publicProcedure.query(() => 'Pong!'),
  auth: authRouter,
  store: storeRouter,
});

export const createCaller = createCallerFactory(appRouter);

export type AppRouter = typeof appRouter;
