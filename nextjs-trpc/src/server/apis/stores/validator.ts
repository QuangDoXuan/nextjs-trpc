import { z } from "zod";
import { paginationDefaultSetting } from "~/server/libs/constants/pagination";

export const getStoresValidatorSchema = z.object({
  page: z.number().min(1).max(100).default(paginationDefaultSetting.page),
  pageSize: z.number().min(1).max(100).default(paginationDefaultSetting.pageSize),
})
