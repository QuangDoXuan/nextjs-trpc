import { TRPCError } from "@trpc/server";
import { t } from "../../trpc";

export const protectedProcedure = t.procedure.use(async function isAuthed(
  opts,
) {
  const { ctx } = opts;
  if (!ctx.user) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }
  return opts.next({
    ctx: {
      user: ctx.user,
    },
  });
});
