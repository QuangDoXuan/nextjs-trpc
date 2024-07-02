import { prisma } from "~/server/libs/database";
import { GetListStoreParams } from "./interface";
import { Prisma } from "@prisma/client";
import { paginationParams } from "~/server/libs/constants/pagination";

const defaultStoreSelect = {
  id: true,
  name: true,
  desc: true,
  rating: true,
  ratingCount: true,
} satisfies Prisma.StoreSelect;

export class StoreRepository {
  getAll(userId: string, input: GetListStoreParams) {
    return prisma.store.findMany({
      relationLoadStrategy: 'join',
      select: {
        ...defaultStoreSelect,
        favourites: {
          where: {
            userId,
          }
        },
        featured: {
          select: {
            id: true,
            text: true,
            icon: true
          }
        },
        storeCategory: {
          select: {
            id: true,
            name: true,
            displayText: true
          }
        },
        city: {
          select: {
            id: true,
            name: true
          }
        },
        images: {
          select: {
            id: true,
            url: true,
            imageType: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc',
      },
      ...paginationParams(input)
    });
  }

  getDetailStore(userId: string, id: string) {
    return prisma.store.findFirst({ where: { id }}).favourites({ where: { userId }})
  }

  getUserFavourite(userId: string, storeId: string) {
    return prisma.favourite.findFirst({ where: { userId, storeId }})
  }

  addFavourites(userId: string, storeId: string) {
    return prisma.favourite.create({ data: { userId, storeId }})
  }

  removeFromFavourites(userId: string, storeId: string) {
    return prisma.favourite.deleteMany({ where: { userId, storeId }})
  }
}