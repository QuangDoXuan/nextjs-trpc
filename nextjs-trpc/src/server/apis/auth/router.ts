import { router, publicProcedure } from '../../trpc';
import { StoreController } from '../stores/controller';
import { AuthController } from './controller';
import { registerUserValidatorSchema, userLoginValidatorSchema } from './validator';

const authController = new AuthController();

export const authRouter = router({
  register: publicProcedure
    .input(registerUserValidatorSchema)
    .mutation(async ({ input }) => authController.register(input)),

  login: publicProcedure
    .input(userLoginValidatorSchema)
    .mutation(async ({ input }) => authController.login(input)),

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
  // add: publicProcedure
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
