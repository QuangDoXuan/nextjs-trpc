export interface GetListBaseParams {
  page: number;
  pageSize: number;
}

export interface AddFavouriteParams {
  storeId: string;
}

export interface GetListPostParams extends GetListBaseParams {}
