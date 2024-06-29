import { TRPCError } from "@trpc/server";

export class ErrorHandler {
  constructor(){}
  handleError(error: TRPCError | any) {
    if (!error?.code) {
      console.log(error)
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Internal Server error"
      })
    }
    throw error
  }
}
