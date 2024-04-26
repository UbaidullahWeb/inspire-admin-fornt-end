import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../../reactRoute/RouteConstants";
const Sidebar = () => {
  const location = useLocation();
  return (
    <div className="flex flex-col py-[56px] px-[32px] gap-[72px]">
      <Link to={ROUTES.orderInfo}>
        <img src="./images/logo.png" alt="" />
      </Link>
      <div className="flex flex-col gap-[20px]">
        <Link
          to={ROUTES.orderInfo}
          className={`px-[28px] py-[16px] font-[600] flex items-center gap-[12px]  rounded-[8px] ${
            location.pathname === ROUTES.orderInfo
              ? "bg-[#EFB749]  text-[#303031]"
              : "text-[#737791]"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2 3C2 2.44772 2.44772 2 3 2H5C5.52254 2 5.95698 2.40231 5.99705 2.9233L6.1568 5H21C21.2844 5 21.5554 5.12113 21.7451 5.33308C21.9348 5.54503 22.0253 5.82773 21.9939 6.11043L21.1778 13.455C21.018 14.8937 19.8537 16.013 18.4099 16.1161L8.05529 16.8557C6.40903 16.9733 4.97697 15.739 4.85039 14.0935L4.23371 6.0767L4.07397 4H3C2.44772 4 2 3.55228 2 3ZM11.5 10C10.9477 10 10.5 10.4477 10.5 11C10.5 11.5523 10.9477 12 11.5 12H14.5C15.0523 12 15.5 11.5523 15.5 11C15.5 10.4477 15.0523 10 14.5 10H11.5ZM16 20.5C16 19.6716 16.6716 19 17.5 19H17.51C18.3384 19 19.01 19.6716 19.01 20.5V20.51C19.01 21.3384 18.3384 22.01 17.51 22.01H17.5C16.6716 22.01 16 21.3384 16 20.51V20.5ZM8.5 19C7.67157 19 7 19.6716 7 20.5V20.51C7 21.3384 7.67157 22.01 8.5 22.01H8.51C9.33843 22.01 10.01 21.3384 10.01 20.51V20.5C10.01 19.6716 9.33843 19 8.51 19H8.5Z"
              fill={`${
                location.pathname === ROUTES.orderInfo ? "#303031" : "#737791"
              }`}
            />
          </svg>
          Orders
        </Link>
        <Link
          to={ROUTES.products}
          className={`px-[28px] py-[16px] font-[600] flex items-center gap-[12px]  rounded-[8px] ${
            location.pathname === ROUTES.products
              ? "bg-[#EFB749]  text-[#303031]"
              : "text-[#737791]"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M3 21H5M21 21H19M5 21H19M5 21V9.32837M19 21V9.32837M5 9.32837C4.96299 9.307 4.92651 9.28434 4.8906 9.2604L4.35024 8.90016C3.56331 8.37554 3.25144 7.37141 3.60269 6.49328L4.49711 4.25722C4.80084 3.4979 5.53626 3 6.35407 3H17.6459C18.4637 3 19.1992 3.4979 19.5029 4.25722L20.3973 6.49328C20.7486 7.37141 20.4367 8.37554 19.6498 8.90016L19.1094 9.2604C19.0735 9.28434 19.037 9.307 19 9.32837M5 9.32837C5.65537 9.70699 6.47351 9.68433 7.1094 9.2604L9 8L10.8906 9.2604C11.5624 9.70827 12.4376 9.70827 13.1094 9.2604L15 8L16.8906 9.2604C17.5265 9.68433 18.3446 9.70699 19 9.32837"
              stroke={`${
                location.pathname === ROUTES.products ? "#303031" : "#737791"
              }`}
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14 21V16C14 14.8954 13.1046 14 12 14V14C10.8954 14 10 14.8954 10 16V21"
              stroke={`${
                location.pathname === ROUTES.products ? "#303031" : "#737791"
              }`}
              stroke-width="2"
            />
          </svg>
          Products
        </Link>
      </div>
    </div>
  );
};
export default Sidebar;
