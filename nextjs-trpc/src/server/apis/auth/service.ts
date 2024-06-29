import { TRPCError } from "@trpc/server";
import { RegisterUserParams, UserLoginParams } from "./interface";
import { AuthRepository } from "./repository";
import bcrypt from "bcrypt";
import { apiErrorMessages } from "~/server/libs/constants/message";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export class AuthService {
  constructor(
    private readonly authRepository = new AuthRepository()
  ){}

  async register(input: RegisterUserParams) {
    const hashedPassword = await bcrypt.hash(input.password, 12);
    const user = await this.authRepository.createUser({ ...input, password: hashedPassword })
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  async login(input: UserLoginParams) {
    const user = await this.authRepository.getUserByUserName(input.username)
    if (!user || !(await bcrypt.compare(input.password, user.password))) {
      throw new TRPCError({
        code: 'UNAUTHORIZED',
        message: apiErrorMessages.invalidEmailOrPassword,
      });
    }
    const secret = process.env.JWT_SECRET!;
    const accessToken = jwt.sign({ sub: user.id }, secret, {
      expiresIn: 60 * 60,
    });

    const cookieOptions = {
      httpOnly: true,
      path: '/',
      secure: process.env.NODE_ENV !== 'development',
      maxAge: 60 * 60,
    };
    cookies().set(process.env.ACCESS_TOKEN_KEY!, accessToken, cookieOptions);

    return {
      accessToken,
    };
  }
}