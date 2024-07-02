import React, { Fragment, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import Head from 'next/head';
import {
  FaHeart,
  FaHome,
  FaList,
  FaUser,
  FaCog,
} from 'react-icons/fa';
import Restaurant from '~/components/Restaurant';
import { RouterOutput, trpc } from '~/utils/trpc';

const RestaurantList: React.FC = () => {
  const postsQuery = trpc.store.getRestaurants.useInfiniteQuery(
    {
      limit: 10,
    },
    {
      getNextPageParam(lastPage) {
        return lastPage?.nextCursor;
      },
    },
  );
  return (
    <>
      <Head>
        <title>Restaurant List</title>
      </Head>
      <div className="bg-banner flex w-full relative min-h-[350px] py-[50px] bg-no-repeat bg-cover bg-[#e0e0e0] box-border">
        <div className="mb-4 flex justify-center items-center w-full"></div>
      </div>
      <div className="min-h-screen bg-gray-100 py-8 px-4 pb-20 lg:pb-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {postsQuery.data?.pages.map((page, index: number) => (
              <Fragment key={index}>
                {page?.items.map((item: any, i) => (
                  <Restaurant key={i} restaurant={item} />
                ))}
              </Fragment>
            ))}
          </div>
        </div>
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 p-4 flex justify-around lg:hidden">
          <FaHome className="text-2xl" />
          <FaList className="text-2xl" />
          <FaUser className="text-2xl" />
          <FaHeart className="text-2xl" />
          <FaCog className="text-2xl" />
        </div>
      </div>
    </>
  );
};

export default RestaurantList;
