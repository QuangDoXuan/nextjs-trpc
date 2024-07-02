import React, { useState } from "react"
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { trpc } from "~/utils/trpc";

export interface IRestaurant {
  id: string;
  name: string;
  desc: string;
  images: string[];
  city: string;
  maxPrice: number;
  minPrice: number;
  rating: number;
  ratingCount: number;
  rating_count: number;
  isFavorite: boolean
}

const Restaurant = (props: { restaurant: IRestaurant }) => {
  const { restaurant } = props
  const [isFavorite, setIsFavorite] = useState(props?.restaurant?.isFavorite || false);
  const mutation = trpc.store.addFavorite.useMutation({
    onSuccess: (res) => {
      console.log("success", res)
    },
    onError: (error) => {
      console.log("error", error)
    }
  });
  const addFavorite = (storeId: string) => {
    setIsFavorite(!isFavorite);
    mutation.mutate({ storeId })
  }
  return (
  <div
    key={restaurant.id}
    className="bg-white p-4 rounded-lg shadow-lg relative cursor-pointer transform transition-transform duration-300 hover:scale-105"
  >
    <Swiper
      pagination={{
        clickable: true,
        horizontalClass: 'custom-horizontal',
        bulletActiveClass: 'custom-bullet-active',
      }}
      modules={[Pagination]}
      className="h-64"
    >
      {restaurant.images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image}
            alt={restaurant.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </SwiperSlide>
      ))}
    </Swiper>
    <div className="flex items-center text-[#FF692E] text-[12px] mt-4">
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_167_10974)">
          <path
            d="M2.25 11V8.5M2.25 3.5V1M1 2.25H3.5M1 9.75H3.5M6.5 1.5L5.63291 3.75443C5.49191 4.12105 5.4214 4.30435 5.31177 4.45854C5.21459 4.5952 5.0952 4.71459 4.95854 4.81176C4.80435 4.9214 4.62105 4.99191 4.25443 5.13291L2 6L4.25443 6.86709C4.62105 7.00809 4.80435 7.0786 4.95854 7.18823C5.0952 7.28541 5.21459 7.4048 5.31177 7.54146C5.4214 7.69565 5.49191 7.87895 5.63291 8.24557L6.5 10.5L7.36709 8.24557C7.5081 7.87895 7.5786 7.69565 7.68824 7.54146C7.78541 7.4048 7.9048 7.28541 8.04146 7.18823C8.19565 7.0786 8.37895 7.00809 8.74557 6.86709L11 6L8.74557 5.13291C8.37895 4.99191 8.19565 4.9214 8.04146 4.81176C7.9048 4.71459 7.78541 4.5952 7.68824 4.45854C7.5786 4.30435 7.50809 4.12105 7.36709 3.75443L6.5 1.5Z"
            stroke="#FF692E"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_167_10974">
            <rect width="12" height="12" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <span className="ml-1">나카노시마×야키토리 상위 맛집</span>
    </div>
    <div className="flex justify-between items-center">
      <h2 className="font-bold text-title text-black whitespace-nowrap overflow-hidden text-ellipsis">
        {restaurant.name}
      </h2>
      <p className="text-custom-gray text-subTitle flex items-center">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_167_10979)">
            <path
              d="M7.53834 1.50996C7.70914 1.09931 8.29086 1.09931 8.46166 1.50996L9.99874 5.20555C10.0707 5.37867 10.2336 5.49695 10.4204 5.51194L14.4102 5.83179C14.8535 5.86733 15.0332 6.42059 14.6955 6.70992L11.6557 9.31378C11.5133 9.43575 11.4512 9.62714 11.4947 9.80952L12.4234 13.7028C12.5265 14.1354 12.0559 14.4773 11.6764 14.2455L8.26063 12.1592C8.10062 12.0615 7.89938 12.0615 7.73937 12.1592L4.32363 14.2455C3.94408 14.4773 3.47345 14.1354 3.57665 13.7028L4.50534 9.80952C4.54884 9.62714 4.48665 9.43575 4.34426 9.31378L1.30453 6.70992C0.966758 6.42059 1.14652 5.86733 1.58985 5.83179L5.57955 5.51194C5.76645 5.49695 5.92925 5.37867 6.00126 5.20555L7.53834 1.50996Z"
              fill="#F2F4F7"
            />
            <g clipPath="url(#clip1_167_10979)">
              <path
                d="M7.53834 1.50996C7.70914 1.09931 8.29086 1.09931 8.46166 1.50996L9.99874 5.20555C10.0707 5.37867 10.2336 5.49695 10.4204 5.51194L14.4102 5.83179C14.8535 5.86733 15.0332 6.42059 14.6955 6.70992L11.6557 9.31378C11.5133 9.43575 11.4512 9.62714 11.4947 9.80952L12.4234 13.7028C12.5265 14.1354 12.0559 14.4773 11.6764 14.2455L8.26063 12.1592C8.10062 12.0615 7.89938 12.0615 7.73937 12.1592L4.32363 14.2455C3.94408 14.4773 3.47345 14.1354 3.57665 13.7028L4.50534 9.80952C4.54884 9.62714 4.48665 9.43575 4.34426 9.31378L1.30453 6.70992C0.966758 6.42059 1.14652 5.86733 1.58985 5.83179L5.57955 5.51194C5.76645 5.49695 5.92925 5.37867 6.00126 5.20555L7.53834 1.50996Z"
                fill="#FDB022"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_167_10979">
              <rect width="16" height="16" fill="white" />
            </clipPath>
            <clipPath id="clip1_167_10979">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
        {restaurant.rating}({restaurant.ratingCount})
      </p>
    </div>
    <p className="text-custom-gray mt-2 text-subTitle whitespace-nowrap overflow-hidden text-ellipsis">
      {restaurant.desc}
    </p>
    <p className="text-custom-gray text-subTitle">
      {restaurant.city} · {restaurant.minPrice}~
      {restaurant.maxPrice}만원
    </p>
    <div className="bg-[#f5f2f2] flex jus items-center p-2 rounded-full absolute top-4 right-4 text-2xl border border-white">
      <svg
        className="cursor-pointer z-50"
        onClick={() => addFavorite(restaurant.id)}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill={isFavorite ? "red" : "none"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.4258 2.5C16.3609 2.5 18.3332 5.29375 18.3332 7.9C18.3332 13.1781 10.148 17.5 9.99984 17.5C9.85169 17.5 1.6665 13.1781 1.6665 7.9C1.6665 5.29375 3.63873 2.5 6.57391 2.5C8.2591 2.5 9.36095 3.35312 9.99984 4.10312C10.6387 3.35312 11.7406 2.5 13.4258 2.5Z"
          stroke="white"
          strokeWidth="1.66667"
          strokeLinecap="round"
         strokeLinejoin="round"
        />
      </svg>
    </div>
  </div>
  )
};
export default Restaurant