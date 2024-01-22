import React, { useEffect, useState } from "react";

const ProductTemplate = (props) => {
  const {
    padge = {},
    isFav: externalIsFav,
    img,
    rating,
    cashback,
    price,
    oldPrice,
    quantity,
    name,
    description,
  } = props;

  const [isFav, setIsFav] = useState(externalIsFav);

  useEffect(() => {
    setIsFav(externalIsFav);
  }, [externalIsFav]);

  const toggleFavorite = () => {
    setIsFav((prevIsFav) => !prevIsFav);
  };

  const productStyle = {
    maxWidth: "300px",
    maxHeight: "570px",
  };

  return (
    <div style={productStyle} className="my-5 mx-3">
      <div className="product-header flex justify-between">
        <div>
          {padge.name && padge.name == "sale" && (
            <div
              className={` bg-red-600 text-white gap-2 flex py-1 px-5 rounded-br-lg`}
            >
              <span>Sale</span>
              <span>{padge.value}%</span>
            </div>
          )}
          {padge.name && padge.name == "topdeal" && (
            <div
              className={` bg-orange-500 text-white gap-1 flex py-1 pr-4 pl-1 md:pl-3 md:pr-5 rounded-br-lg justify-center`}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_607_41)">
                  <path
                    d="M10.0004 19.1667C8.74807 19.1666 7.52461 18.7902 6.4887 18.0864C5.45279 17.3826 4.6522 16.3839 4.19073 15.2196C3.72927 14.0554 3.62822 12.7793 3.90068 11.5569C4.17314 10.3346 4.80655 9.22223 5.71878 8.36417C6.83711 7.31167 9.58378 5.41667 9.16711 1.25C14.1671 4.58333 16.6671 7.91667 11.6671 12.9167C12.5004 12.9167 13.7504 12.9167 15.8338 10.8583C16.0588 11.5025 16.2504 12.195 16.2504 12.9167C16.2504 14.5743 15.592 16.164 14.4199 17.3361C13.2478 18.5082 11.658 19.1667 10.0004 19.1667Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_607_41">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <span>Top Deal</span>
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
        <img style={{ maxWidth: "250px" }} src={img} alt={name} />
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
            index < rating ? (
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
        <div className="product-cashback my-2 md:my-0 max-w-28">
          <div className="cashback bg-yellow-300 pr-2 py-1  rounded-br-lg">
            <div className="flex gap-2 items-center font-semibold text-sm ">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 12.1167V13V3V12.1167ZM3 14C2.74444 14 2.51389 13.9 2.30833 13.7C2.10278 13.5 2 13.2667 2 13V3C2 2.74444 2.10278 2.51389 2.30833 2.30833C2.51389 2.10278 2.74444 2 3 2H13C13.2667 2 13.5 2.10278 13.7 2.30833C13.9 2.51389 14 2.74444 14 3V5.23333H13V3H3V13H13V10.7833H14V13C14 13.2667 13.9 13.5 13.7 13.7C13.5 13.9 13.2667 14 13 14H3ZM8.96667 11.1167C8.58889 11.1167 8.28889 11.0056 8.06667 10.7833C7.84444 10.5611 7.73333 10.2667 7.73333 9.9V6.11667C7.73333 5.73889 7.84444 5.44167 8.06667 5.225C8.28889 5.00833 8.58889 4.9 8.96667 4.9H13.4667C13.8444 4.9 14.1444 5.00833 14.3667 5.225C14.5889 5.44167 14.7 5.73889 14.7 6.11667V9.9C14.7 10.2667 14.5889 10.5611 14.3667 10.7833C14.1444 11.0056 13.8444 11.1167 13.4667 11.1167H8.96667ZM13.7 10.1167V5.9H8.73333V10.1167H13.7Z"
                  fill="#070706"
                />
                <path
                  d="M9.78105 8.57899C9.5207 8.31864 9.5207 7.89653 9.78105 7.63618L10.7239 6.69337C10.9842 6.43302 11.4063 6.43302 11.6667 6.69337L12.6095 7.63618C12.8698 7.89653 12.8698 8.31864 12.6095 8.57899L11.6667 9.5218C11.4063 9.78215 10.9842 9.78215 10.7239 9.5218L9.78105 8.57899Z"
                  fill="#070706"
                />
              </svg>
              <span>+ {cashback} SAR</span>
            </div>
          </div>
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
        {quantity >= 1 ? (
          oldPrice ? (
            <div className="flex gap-3">
              <p>{price},00 SAR</p>
              <p
                className="text-red-600"
                style={{
                  textDecoration: "line-through",
                  textDecorationColor: "red",
                }}
              >
                {oldPrice},00 SAR
              </p>
            </div>
          ) : (
            <span>{price},00 SAR</span>
          )
        ) : (
          <span className="text-red-600">Out of stock</span>
        )}
      </div>
      <div className="product-name">{name}</div>
      <div className="product-description">{description}</div>
    </div>
  );
};

export default ProductTemplate;
