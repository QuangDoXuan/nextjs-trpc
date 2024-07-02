export interface GetListBaseParams {
  limit: number,
  cursor?: string | null | undefined,
}

export interface AddFavouriteParams {
  storeId: string;
}

export interface GetDetailStoreParams {
  storeId: string;
}

export interface GetListStoreParams extends GetListBaseParams {}
