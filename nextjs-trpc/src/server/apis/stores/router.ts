import { router, protectedProcedure, publicProcedure } from '../../trpc';
import { StoreController } from '../stores/controller';
import { getStoresValidatorSchema } from './validator';

const storeController = new StoreController();

export const storeRouter = router({
  list: protectedProcedure
    .input(getStoresValidatorSchema)
    .query(async ({ input, ctx }) => storeController.getRestaurants(ctx, input)),
  // byId: protectedProcedure
  //   .input(getStoreByIdValidatorSchema)
  //   .query
  // byId: publicProcedure
  //   .input(
  //     z.object({
  //       id: z.string(),
  //     }),
  //   )
  //   .query(async ({ input }) => {
  //     const { id } = input;
  //     const post = await prisma.post.findUnique({
  //       where: { id },
  //       select: defaultPostSelect,
  //     });
  //     if (!post) {
  //       throw new TRPCError({
  //         code: 'NOT_FOUND',
  //         message: `No post with id '${id}'`,
  //       });
  //     }
  //     return post;
  //   }),
  // addFavourite: protectedProcedure
  //   .input(
  //     z.object({
  //       id: z.string().uuid().optional(),
  //       title: z.string().min(1).max(32),
  //       text: z.string().min(1),
  //     }),
  //   )
  //   .mutation(async ({ input }) => {
  //     const post = await prisma.post.create({
  //       data: input,
  //       select: defaultPostSelect,
  //     });
  //     return post;
  //   }),
});
