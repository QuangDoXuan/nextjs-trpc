import { prisma } from "~/server/libs/database";
import { RegisterUserParams } from "./interface";
import { Prisma } from "@prisma/client";

export class AuthRepository {
  constructor() {}

  createUser(data: RegisterUserParams) {
    return prisma.user.create({ data });
  }

  getUserByUserName(username: string) {
    return prisma.user.findUnique({ where: { username }})
  }
}