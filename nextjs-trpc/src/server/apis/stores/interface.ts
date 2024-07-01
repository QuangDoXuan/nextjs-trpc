export interface GetListBaseParams {
  limit: number,
  cursor?: string | null | undefined,
}

export interface AddFavouriteParams {
  storeId: string;
}

export interface GetListPostParams extends GetListBaseParams {}
