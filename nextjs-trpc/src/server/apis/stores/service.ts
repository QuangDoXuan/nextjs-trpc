import { AddFavouriteParams, GetListPostParams } from "./interface";
import { StoreRepository } from "./repository";

export class StoreService {
  constructor(
    private readonly storeRepository = new StoreRepository()
  ){}

  async getRestaurants(userId: string, input: GetListPostParams) {
    const { limit, cursor } = input;
    const items = await this.storeRepository.getAll(userId, input);
    let nextCursor: typeof cursor| undefined = undefined;
    if (items.length > limit) {
      const nextItem = items.pop()!;
      nextCursor = nextItem.id;
    }
    return {
      items: items,
      nextCursor,
    };
  }

  async addFavourites(userId: string, input: AddFavouriteParams) {
    const existingFavour = await this.storeRepository.getUserFavourite(userId, input.storeId)
    if (!existingFavour) {
      return this.storeRepository.addFavourites(userId, input.storeId)
    }
    return this.storeRepository.removeFromFavourites(userId, input.storeId)
  }
}