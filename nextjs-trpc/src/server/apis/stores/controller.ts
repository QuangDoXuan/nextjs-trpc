import { ErrorHandler } from "~/server/libs/errors/error-handler";
import { AddFavouriteParams, GetDetailStoreParams, GetListStoreParams } from "./interface";
import { StoreService } from "./service";
import { Context } from "~/server/context";

export class StoreController {
  constructor(
    private readonly storeService = new StoreService(),
    private readonly errorHandler = new ErrorHandler()
  ) {}

  async getRestaurants(context: Context, input: GetListStoreParams) {
    try {
      const userId = context.user?.id!;
      const res = await this.storeService.getRestaurants(userId, input)
      return res
    } catch (err) {
      this.errorHandler.handleError(err)
    }
  }

  async getDetailRestaurant(context: Context, input: GetDetailStoreParams) {
    try {
      const userId = context.user?.id!;
      const res = await this.storeService.getDetailRestaurant(userId, input.storeId)
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
