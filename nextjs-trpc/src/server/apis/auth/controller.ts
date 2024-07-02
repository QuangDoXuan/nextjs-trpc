import { AuthService } from "./service";
import { RegisterUserParams, UserLoginParams } from "./interface";
import { ErrorHandler } from "~/server/libs/errors/error-handler"
import { Context } from "~/server/context";

export class AuthController {
  constructor(
    private readonly authService = new AuthService(),
    private readonly errorHandler = new ErrorHandler()
  ) {}

  async register(input: RegisterUserParams) {
    try {
      const res = await this.authService.register(input)
      return res
    } catch (err) {
      this.errorHandler.handleError(err)
    }
  };

  async login(ctx: Context, input: UserLoginParams) {
    try {
      const res = await this.authService.login(ctx, input)
      return res
    } catch (err) {
      this.errorHandler.handleError(err)
    }
  };
}
