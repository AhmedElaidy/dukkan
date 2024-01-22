import React, { useEffect, useState } from "react";
import ImgHandler from "../ImgHandler/ImgHandler";
import DescriptionComponent from "../DescriptionComponent/DescriptionComponent";

const ProductTemplate = (props) => {
  const {
    available_quantity,
    currency,
    desc,
    have_sale,
    image,
    in_cart,
    is_fav,
    limit_order_num,
    name,
    percentage,
    price,
    price_after,
    product_id_in_cart,
    rate_avg,
    type,
    type_trans,
  } = props;

  const [isFav, setIsFav] = useState(is_fav);

  useEffect(() => {
    setIsFav(is_fav);
  }, [is_fav]);

  const toggleFavorite = () => {
    setIsFav((prevIsFav) => !prevIsFav);
  };

  return (
    <div className="my-5 mx-3">
      <div className="product-header flex justify-between">
        <div>
          {type && type == "top_deals" ? (
            <div
              className={` bg-orange-500 text-white sm:pl-1 flex py-1 pl-1 pr-1 md:pl-3 md:pr-5  rounded-br-lg justify-center`}
              style={{ paddingRight: "2px" }}
            >
              <span>{type_trans}</span>
            </div>
          ) : (
            <div className={` bg-blue-400 text-white py-1 px-5 rounded-br-lg`}>
              <span>{type_trans}</span>
            </div>
          )}
        </div>
        <div
          className="product-heart-svg cursor-pointer"
          onClick={toggleFavorite}
        >
          {isFav ? (
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="#007460"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.9504 5.32554C22.3749 3.1323 19.2542 4.01615 17.3795 5.42402L17.3795 5.42403C16.6108 6.00128 16.2265 6.28991 16.0003 6.28991C15.7742 6.28991 15.3899 6.00128 14.6212 5.42402C12.7465 4.01615 9.62577 3.1323 6.05024 5.32554C1.35775 8.20391 0.295953 17.6998 11.1197 25.7111C13.1813 27.237 14.2121 28 16.0003 28C17.7886 28 18.8194 27.237 20.881 25.7111C31.7047 17.6998 30.6429 8.20391 25.9504 5.32554Z"
                stroke="#007460"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.9504 5.32554C22.3749 3.1323 19.2542 4.01615 17.3795 5.42402L17.3795 5.42403C16.6108 6.00128 16.2265 6.28991 16.0003 6.28991C15.7742 6.28991 15.3899 6.00128 14.6212 5.42402C12.7465 4.01615 9.62577 3.1323 6.05024 5.32554C1.35775 8.20391 0.295953 17.6998 11.1197 25.7111C13.1813 27.237 14.2121 28 16.0003 28C17.7886 28 18.8194 27.237 20.881 25.7111C31.7047 17.6998 30.6429 8.20391 25.9504 5.32554Z"
                stroke="#007460"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          )}
        </div>
      </div>
      <div className="flex h-64 w-full justify-center p-5">
        <ImgHandler
          item={{ image: image, name: name }}
          styles={{ maxWidth: "250px", maxHeight: "100%" }}
          failImage="https://i.ibb.co/n3KjkXQ/pngtree-error-404-not-found-neon-effect-png-image-2928214.jpg"
        />
      </div>
      <div className="product-plus-minus cursor-pointer">
        <div
          className="text-white py-1 px-2 w-fit rounded-r-lg text-lg"
          style={{ backgroundColor: "rgba(0, 116, 96, 1)" }}
        >
          +
        </div>
      </div>
      <div className="product-stars-div my-3 flex flex-col md:flex-row  md:justify-between">
        <div className="flex">
          {Array.from({ length: 5 }).map((_, index) =>
            index < rate_avg ? (
              <svg
                key={index}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_607_56)">
                  <path
                    d="M11.9999 18.26L4.94691 22.208L6.52191 14.28L0.586914 8.792L8.61391 7.84L11.9999 0.5L15.3859 7.84L23.4129 8.792L17.4779 14.28L19.0529 22.208L11.9999 18.26Z"
                    fill="#F7DE6F"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_607_56">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            ) : (
              <svg
                key={index}
                width="24"
                height="23"
                viewBox="0 0 24 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.9999 18.26L4.94691 22.208L6.52191 14.28L0.586914 8.792L8.61391 7.84L11.9999 0.5L15.3859 7.84L23.4129 8.792L17.4779 14.28L19.0529 22.208L11.9999 18.26ZM11.9999 15.968L16.2469 18.345L15.2979 13.572L18.8709 10.267L14.0379 9.694L11.9999 5.275L9.96191 9.695L5.12891 10.267L8.70191 13.572L7.75291 18.345L11.9999 15.968Z"
                  fill="#F7DE6F"
                />
              </svg>
            )
          )}
        </div>
        <div className="product-add-svg cursor-pointer">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.33366 7.33333C3.86699 7.33333 3.47255 7.17222 3.15033 6.85C2.8281 6.52778 2.66699 6.13333 2.66699 5.66667C2.66699 5.2 2.8281 4.80556 3.15033 4.48333C3.47255 4.16111 3.86699 4 4.33366 4C4.80033 4 5.19477 4.16111 5.51699 4.48333C5.83921 4.80556 6.00033 5.2 6.00033 5.66667C6.00033 6.13333 5.83921 6.52778 5.51699 6.85C5.19477 7.17222 4.80033 7.33333 4.33366 7.33333ZM4.36699 15.6667C3.90033 15.6667 3.50033 15.5056 3.16699 15.1833C2.83366 14.8611 2.66699 14.4667 2.66699 14C2.66699 13.5333 2.83366 13.1389 3.16699 12.8167C3.50033 12.4944 3.90033 12.3333 4.36699 12.3333C4.81144 12.3333 5.19477 12.5 5.51699 12.8333C5.83921 13.1667 6.00033 13.5556 6.00033 14C6.00033 14.4444 5.83921 14.8333 5.51699 15.1667C5.19477 15.5 4.81144 15.6667 4.36699 15.6667ZM4.36699 24C3.90033 24 3.50033 23.8389 3.16699 23.5167C2.83366 23.1944 2.66699 22.8111 2.66699 22.3667C2.66699 21.9 2.83366 21.5 3.16699 21.1667C3.50033 20.8333 3.90033 20.6667 4.36699 20.6667C4.81144 20.6667 5.19477 20.8333 5.51699 21.1667C5.83921 21.5 6.00033 21.9 6.00033 22.3667C6.00033 22.8111 5.83921 23.1944 5.51699 23.5167C5.19477 23.8389 4.81144 24 4.36699 24ZM9.33366 6.66667V4.66667H26.667V6.66667H9.33366ZM9.33366 15V13H24.4337C23.4114 13 22.4448 13.1778 21.5337 13.5333C20.6225 13.8889 19.8114 14.3778 19.1003 15H9.33366ZM9.33366 23.3333V21.3333H16.167C16.167 21.6889 16.1892 22.0333 16.2337 22.3667C16.2781 22.7 16.3448 23.0222 16.4337 23.3333H9.33366ZM24.4337 27.5333C22.7003 27.5333 21.2225 26.9167 20.0003 25.6833C18.7781 24.45 18.167 22.9889 18.167 21.3C18.167 19.5667 18.7781 18.0833 20.0003 16.85C21.2225 15.6167 22.7003 15 24.4337 15C26.1448 15 27.617 15.6167 28.8503 16.85C30.0837 18.0833 30.7003 19.5667 30.7003 21.3C30.7003 22.9889 30.0837 24.45 28.8503 25.6833C27.617 26.9167 26.1448 27.5333 24.4337 27.5333ZM23.9337 25.5333H25.0337V21.8667H28.7003V20.7667H25.0337V17.1H23.9337V20.7667H20.267V21.8667H23.9337V25.5333Z"
              fill="#555555"
            />
          </svg>
        </div>
      </div>
      <div className="product-price font-bold my-1 ">
        {available_quantity >= 1 ? (
          price_after ? (
            <div className="flex gap-3">
              <p>
                <span className="flex gap-1 rtl:flex-row-reverse">
                  <span>{price_after}</span>
                  <span>{currency}</span>
                </span>
              </p>
              <p
                className="text-red-600"
                style={{
                  textDecoration: "line-through",
                  textDecorationColor: "red",
                }}
              >
                <span className="flex gap-1 rtl:flex-row-reverse">
                  <span>{price}</span>
                  <span>{currency}</span>
                </span>
              </p>
            </div>
          ) : (
            <span className="flex gap-1 ">
              <span>{price}</span>
              <span>{currency}</span>
            </span>
          )
        ) : (
          <span className="text-red-600">Out of stock</span>
        )}
      </div>
      <div className="product-name my-1">{name}</div>
      <DescriptionComponent desc={desc} />
    </div>
  );
};

export default ProductTemplate;
