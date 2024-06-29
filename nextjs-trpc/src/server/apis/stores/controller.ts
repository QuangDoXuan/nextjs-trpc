import { ErrorHandler } from "~/server/libs/errors/error-handler";
import { AddFavouriteParams, GetListPostParams } from "./interface";
import { StoreService } from "./service";
import { Context } from "~/server/context";

export class StoreController {
  constructor(
    private readonly storeService = new StoreService(),
    private readonly errorHandler = new ErrorHandler()
  ) {}

  async getRestaurants(context: Context, input: GetListPostParams) {
    try {
      const userId = context.user?.id!;
      const res = await this.storeService.getRestaurants(userId, input)
      return res
    } catch (err) {
      this.errorHandler.handleError(err)
    }
  }

  async addFavourite(context: Context, input: AddFavouriteParams) {
    try {
      const userId = context.user?.id!;
      const res = await this.storeService.addFavourites(userId, input)
      return res
    } catch (err) {
      this.errorHandler.handleError(err)
    }
  }
}
