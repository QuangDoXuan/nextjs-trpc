import { z } from "zod";
import { paginationDefaultSetting } from "~/server/libs/constants/pagination";

export const getStoresValidatorSchema = z.object({
  limit: z.number().min(1).max(100).default(paginationDefaultSetting.limit),
  cursor: z.string().nullish(),
})

export const addFavoriteStoreSchema =  z.object({
  storeId: z.string()
})

export const getStoreByIdValidatorSchema =  z.object({
  id: z.string().nullish()
})
