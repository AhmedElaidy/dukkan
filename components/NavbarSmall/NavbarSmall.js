"use client";
import React from "react";
import Container from "../Container/Container";
import { useTranslation } from "react-i18next";

const NavbarSmall = () => {
  const { t } = useTranslation();

  return (
    <nav className="block md:hidden pb-1">
      <div className="py-4 px-5 w-full bg-primary">
        <Container>
          <div className="w-full">
            <div className="burgericonDiv flex justify-between">
              <div className="flex gap-2">
                <div className="cursor-pointer">
                  <BurgerIconSvg />
                </div>
                <div>
                  <LogoSvg />
                </div>
              </div>
              <div className="flex gap-2 items-end">
                <div className="cashback bg-yellow-300 pb-1 rounded-br-lg h-fit">
                  <div className="flex gap-2 items-center font-semibold text-sm px-1 ">
                    <WalletIconSvg />
                    <span className="flex gap-1 rtl:flex-row-reverse">
                      <span>{t("mainNav.SAR")}</span>
                      <span>124,00</span>
                    </span>{" "}
                  </div>
                </div>
                <div>
                  <CartIconSvg />
                </div>
              </div>
            </div>
            <div className="searchbarDiv grid grid-flow-col grid-cols-2 gap-4 mt-4">
              <div className="searchInput relative col-span-4">
                <input
                  type="text"
                  placeholder={t("mainNav.search")}
                  className="border border-gray-300 w-full p-2 ltr:pl-10 rtl:pr-10  rounded rounded-tl-lg  rounded-bl-lg rounded-tr-3xl  rounded-br-3xl xl:w-80"
                />
                <div className="absolute inset-y-0 ltr:left-0 rtl:right-2 pl-2 flex items-center cursor-pointer">
                 <SeacrhIconSvg/>
                </div>
                <div className="absolute inset-y-0 ltr:right-2 rtl:left-0 pl-2 flex items-center cursor-pointer">
                <QrIconSvg/>
                </div>
              </div>
              <div className="ringIcon col-span-1 flex items-center">
                <RingIconSvg />
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div
        className="locationDiv bg-gray-950"
        style={{ backgroundColor: "#DCF3F3", maxHeight: "40px" }}
      >
        <Container>
          <div className="grid grid-flow-col grid-cols-2 w-full m-2 text-sm gap-2">
            <div className=" grid grid-flow-col grid-cols-12 w-full col-span-4">
              <div className=" grid grid-flow-col col-span-1">
                <LocationIconSvg />
              </div>
              <div className=" grid grid-flow-col col-span-11 truncate">
                Sulaimaniyah Dist, 455 Riyad Saudasd Sula..
              </div>
            </div>
            <div className="text-orange-600 font-bold inline-block mb-1 cursor-pointer col-span-1">
              change
            </div>
          </div>
        </Container>
      </div>
    </nav>
  );
};

const BurgerIconSvg = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_5_2183)">
        <path
          d="M4 5.33333H28V7.99999H4V5.33333ZM4 14.6667H28V17.3333H4V14.6667ZM4 24H28V26.6667H4V24Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_5_2183">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const LogoSvg = () => {
  return (
    <svg
      width="107"
      height="32"
      viewBox="0 0 107 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32.3138 16.0005C32.3138 20.4222 30.5047 24.4215 27.5799 27.312C24.656 30.2075 20.6164 32 16.1574 32H5.70823C2.55761 32 0 29.4672 0 26.3472V5.65875C0 4.09576 0.641159 2.68182 1.67464 1.65937C2.7031 0.634933 4.13593 0 5.70823 0H16.1564C25.0805 0 32.3138 7.16212 32.3138 16.0005Z"
        fill="white"
      />
      <path
        d="M24.3361 16.0019C24.3371 16.61 24.1023 17.2201 23.6347 17.6821L17.4258 23.8307C16.9562 24.2948 16.3422 24.5263 15.7281 24.5263C15.113 24.5263 14.498 24.2948 14.0304 23.8307L7.82248 17.6841C7.3529 17.2191 7.12012 16.61 7.12012 16.0009C7.12012 15.3928 7.3529 14.7837 7.82248 14.3197L14.0304 8.17006C14.499 7.70702 15.115 7.47451 15.7281 7.4765C16.3422 7.4765 16.9562 7.70702 17.4258 8.17204L23.6337 14.3187C24.1013 14.7837 24.3361 15.3938 24.3361 16.0019Z"
        fill="#FF4300"
      />
      <path
        d="M105.61 18.0381C104.915 18.0381 104.352 18.5955 104.352 19.2841V25.6772L96.9526 18.4048C96.747 18.2021 96.4881 18.0868 96.2202 18.054C96.16 18.0451 96.0978 18.0391 96.0356 18.0391C95.3412 18.0391 94.7783 18.5965 94.7783 19.2851V28.6601C94.7783 29.3476 95.3412 29.9051 96.0356 29.9051C96.7299 29.9051 97.2938 29.3476 97.2938 28.6601V22.2501L104.72 29.5484C104.967 29.7908 105.289 29.911 105.61 29.91H105.611C106.305 29.9091 106.867 29.3516 106.867 28.665V19.2861C106.867 18.5965 106.304 18.0381 105.61 18.0381Z"
        fill="white"
      />
      <path
        d="M62.9157 18.0381C62.2213 18.0381 61.6575 18.5955 61.6575 19.2841V23.9731C61.6575 25.8719 60.0972 27.417 58.1797 27.417C56.2623 27.417 54.702 25.8719 54.702 23.9731V19.2841C54.702 18.5965 54.1391 18.0381 53.4438 18.0381C52.7495 18.0381 52.1855 18.5955 52.1855 19.2841V23.9731C52.1855 27.2461 54.8746 29.9081 58.1787 29.9081C61.4839 29.9081 64.1719 27.2451 64.1719 23.9731V19.2841C64.1739 18.5965 63.61 18.0381 62.9157 18.0381Z"
        fill="white"
      />
      <path
        d="M43.9902 18.0371H40.945C39.3195 18.0371 37.998 19.3467 37.998 20.9554V26.9898C37.998 28.5985 39.3205 29.9081 40.945 29.9081H43.9902C47.2954 29.9081 49.9834 27.2451 49.9834 23.9731C49.9834 20.6991 47.2944 18.0371 43.9902 18.0371ZM43.9902 27.417H40.945C40.7072 27.417 40.5135 27.2252 40.5135 26.9898V20.9554C40.5135 20.7199 40.7072 20.5282 40.945 20.5282H43.9902C45.9077 20.5282 47.4679 22.0733 47.4679 23.9721C47.4679 25.8719 45.9077 27.417 43.9902 27.417Z"
        fill="white"
      />
      <path
        d="M86.5811 18.0381C83.2759 18.0381 80.5879 20.701 80.5879 23.9731V28.662C80.5879 29.3496 81.1508 29.9081 81.8451 29.9081C82.5395 29.9081 83.1034 29.3506 83.1034 28.662V26.7871H90.0598V28.662C90.0598 29.3496 90.6227 29.9081 91.317 29.9081C92.0114 29.9081 92.5753 29.3506 92.5753 28.662V23.9731C92.5753 20.701 89.8862 18.0381 86.5811 18.0381ZM83.1034 24.297V23.9741C83.1034 22.0752 84.6636 20.5301 86.5811 20.5301C88.4985 20.5301 90.0588 22.0752 90.0588 23.9741V24.297H83.1034Z"
        fill="white"
      />
      <path
        d="M73.7869 23.2977L77.8737 20.293C78.4316 19.8826 78.5479 19.1026 78.1335 18.5501C77.7192 17.9977 76.9315 17.8824 76.3736 18.2928L68.8924 23.7935V19.2824C68.8924 18.5948 68.3295 18.0364 67.6352 18.0364C66.9409 18.0364 66.377 18.5938 66.377 19.2824V28.6216C66.377 29.3092 66.9398 29.8666 67.6352 29.8666C68.3295 29.8666 68.8924 29.3092 68.8924 28.6216V26.8957L71.7541 24.7911L76.2091 29.5089C76.4569 29.7712 76.792 29.9034 77.1282 29.9034C77.4362 29.9034 77.7442 29.7921 77.9871 29.5675C78.4948 29.0976 78.5209 28.3096 78.0463 27.8068L73.7869 23.2977Z"
        fill="white"
      />
      <path
        d="M105.612 2.09149C104.917 2.09149 104.354 2.64892 104.354 3.33751V12.6767C104.354 13.3643 104.916 13.9227 105.612 13.9227C106.306 13.9227 106.869 13.3653 106.869 12.6767V3.33652C106.869 2.64892 106.306 2.09149 105.612 2.09149Z"
        fill="white"
      />
      <path
        d="M81.8461 13.9217H86.5791H87.756H98.5333C100.53 13.9217 102.155 12.313 102.155 10.3357V3.33652C102.155 2.64892 101.592 2.09149 100.897 2.09149C100.203 2.09149 99.6391 2.64892 99.6391 3.33652V10.3357C99.6391 10.9398 99.1434 11.4307 98.5333 11.4307H91.9732C92.3415 10.759 92.5502 9.98989 92.5502 9.17312C92.5502 6.5549 90.3989 4.42455 87.755 4.42455H83.4435C82.7492 4.42455 82.1853 4.98197 82.1853 5.67056C82.1853 6.35816 82.7482 6.91559 83.4435 6.91559H87.755C89.0123 6.91559 90.0347 7.9281 90.0347 9.17312C90.0347 10.4181 89.0123 11.4307 87.755 11.4307H86.5781H81.8461C81.1518 11.4307 80.5879 11.9881 80.5879 12.6757C80.5889 13.3643 81.1518 13.9217 81.8461 13.9217Z"
        fill="white"
      />
      <path
        d="M77.1285 2.08911H60.5225C58.5288 2.08911 56.9064 3.69582 56.9064 5.67017C56.9064 7.64452 58.5288 9.25123 60.5225 9.25123H70.3607H74.0622H74.7665C75.3736 9.25123 75.8672 9.7401 75.8672 10.3412C75.8672 10.9424 75.3736 11.4313 74.7665 11.4313H67.7639H67.3004H55.8087C55.1986 11.4313 54.7029 10.9404 54.7029 10.3363V3.33612C54.7029 2.64853 54.1401 2.0901 53.4457 2.0901C52.7514 2.0901 52.1885 2.64753 52.1885 3.33612V10.3353C52.1885 12.3126 53.813 13.9213 55.8097 13.9213H67.3004H67.7639H74.7665C76.7602 13.9213 78.3827 12.3146 78.3827 10.3403C78.3827 8.3659 76.7602 6.75919 74.7665 6.75919H74.0622H70.3607H60.5225C59.9155 6.75919 59.4218 6.27033 59.4218 5.66918C59.4218 5.06803 59.9155 4.57916 60.5225 4.57916H77.1275C77.8218 4.57916 78.3847 4.02173 78.3847 3.33414C78.3857 2.64654 77.8228 2.08911 77.1285 2.08911Z"
        fill="white"
      />
      <path
        d="M48.7272 4.5703C48.0328 4.5703 47.4689 5.12773 47.4689 5.81631V7.98641C47.4689 9.88525 45.9087 11.4303 43.9912 11.4303C42.0737 11.4303 40.5135 9.88525 40.5135 7.98641V5.81631C40.5135 5.12872 39.9506 4.5703 39.2563 4.5703C38.5619 4.5703 37.999 5.12773 37.999 5.81631V7.98641C37.999 11.2594 40.6881 13.9214 43.9922 13.9214C47.2963 13.9214 49.9854 11.2585 49.9854 7.98641V5.81631C49.9844 5.12773 49.4215 4.5703 48.7272 4.5703Z"
        fill="white"
      />
      <path
        d="M43.6207 6.29686C43.7241 6.39921 43.8595 6.44988 43.994 6.44988C44.1284 6.44988 44.2649 6.39921 44.3672 6.29686L45.7338 4.94353C45.8362 4.84218 45.8883 4.70705 45.8883 4.5739C45.8883 4.43976 45.8372 4.30562 45.7338 4.20427L44.3682 2.85193C44.2649 2.74959 44.1294 2.69891 43.995 2.69891C43.8595 2.69891 43.7241 2.74959 43.6217 2.85193L42.2551 4.20526C42.1518 4.30761 42.1006 4.44175 42.1006 4.5749C42.1006 4.70904 42.1518 4.84318 42.2551 4.94552L43.6207 6.29686Z"
        fill="white"
      />
    </svg>
  );
};

const WalletIconSvg = () => {
  return (
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
  );
};

const CartIconSvg = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.93548 22H14.9644C19.3072 22 19.9677 19.3292 20.7687 15.4339C20.9998 14.3103 21.1153 13.7485 20.8375 13.3743C20.5596 13 20.0271 13 18.962 13H6.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M8 22L5.61703 10.4067C5.41468 9.57998 4.68744 9 3.85313 9H3"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M9.34278 22H7.51463C4.16178 22 4.1618 25 7.51462 25H21"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="0.5"
        cy="0.5"
        r="0.5"
        transform="matrix(1 0 0 -1 10 29)"
        stroke="white"
        strokeWidth="1.5"
      />
      <circle cx="17.5" cy="28.5" r="0.5" stroke="white" strokeWidth="1.5" />
    </svg>
  );
};

const SeacrhIconSvg = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_607_1036)">
        <path
          d="M15.0262 13.8475L18.5953 17.4158L17.4162 18.595L13.8478 15.0258C12.5201 16.0902 10.8687 16.6691 9.16699 16.6667C5.02699 16.6667 1.66699 13.3067 1.66699 9.16667C1.66699 5.02667 5.02699 1.66667 9.16699 1.66667C13.307 1.66667 16.667 5.02667 16.667 9.16667C16.6694 10.8683 16.0905 12.5198 15.0262 13.8475ZM13.3545 13.2292C14.4121 12.1416 15.0027 10.6837 15.0003 9.16667C15.0003 5.94334 12.3895 3.33334 9.16699 3.33334C5.94366 3.33334 3.33366 5.94334 3.33366 9.16667C3.33366 12.3892 5.94366 15 9.16699 15C10.684 15.0024 12.1419 14.4118 13.2295 13.3542L13.3545 13.2292Z"
          fill="#007460"
        />
      </g>
      <defs>
        <clipPath id="clip0_607_1036">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const QrIconSvg = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.8">
        <path
          d="M1 21V16.45H2.5V19.5H5.55V21H1ZM18.425 21V19.5H21.475V16.45H22.975V21H18.425ZM3.825 18.225V5.75H5.825V18.225H3.825ZM6.85 18.225V5.75H7.9V18.225H6.85ZM9.9 18.225V5.75H11.975V18.225H9.9ZM13.025 18.225V5.75H16.05V18.225H13.025ZM17.1 18.225V5.75H18.15V18.225H17.1ZM19.175 18.225V5.75H20.125V18.225H19.175ZM1 7.55V3H5.55V4.5H2.5V7.55H1ZM21.475 7.55V4.5H18.425V3H22.975V7.55H21.475Z"
          fill="#070706"
        />
      </g>
    </svg>
  );
};

const RingIconSvg = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.52992 14.394C2.31727 15.7471 3.268 16.6862 4.43205 17.1542C8.89481 18.9486 15.1052 18.9486 19.5679 17.1542C20.732 16.6862 21.6827 15.7471 21.4701 14.394C21.3394 13.5625 20.6932 12.8701 20.2144 12.194C19.5873 11.2975 19.525 10.3197 19.5249 9.27941C19.5249 5.2591 16.1559 2 12 2C7.84413 2 4.47513 5.2591 4.47513 9.27941C4.47503 10.3197 4.41272 11.2975 3.78561 12.194C3.30684 12.8701 2.66061 13.5625 2.52992 14.394Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 21C9.79613 21.6219 10.8475 22 12 22C13.1525 22 14.2039 21.6219 15 21"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="20" cy="4" r="4" fill="#FF4300" />
    </svg>
  );
};

const LocationIconSvg = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.83301 15C4.3089 15.3431 3.33301 15.8702 3.33301 16.4614C3.33301 17.4952 6.31778 18.3333 9.99967 18.3333C13.6816 18.3333 16.6663 17.4952 16.6663 16.4614C16.6663 15.8702 15.6904 15.3431 14.1663 15"
        stroke="#070706"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12.0827 7.49999C12.0827 8.65058 11.1499 9.58332 9.99935 9.58332C8.84876 9.58332 7.91602 8.65058 7.91602 7.49999C7.91602 6.3494 8.84876 5.41666 9.99935 5.41666C11.1499 5.41666 12.0827 6.3494 12.0827 7.49999Z"
        stroke="#070706"
        strokeWidth="1.5"
      />
      <path
        d="M11.0472 14.578C10.7661 14.8487 10.3904 15 9.99948 15C9.60851 15 9.23284 14.8487 8.95177 14.578C6.37793 12.084 2.92867 9.29794 4.61077 5.2531C5.52027 3.06609 7.70347 1.66666 9.99948 1.66666C12.2955 1.66666 14.4787 3.06609 15.3882 5.2531C17.0682 9.29284 13.6274 12.0926 11.0472 14.578Z"
        stroke="#070706"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default NavbarSmall;