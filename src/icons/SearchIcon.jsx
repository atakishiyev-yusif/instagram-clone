import React from "react";

export const SearchIcon = ({ size, color }) => {
  return (
    <svg
      aria-label="Search"
      fill="currentColor"
      height={size || "24px"}
      role="img"
      viewBox="0 0 24 24"
      width={size || "24px"}
    >
      <title>Search</title>
      <path
        d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z"
        fill="none"
        stroke={color || "currentColor"}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      ></path>
      <line
        fill="none"
        stroke={color || "currentColor"}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        x1="16.511"
        x2="22"
        y1="16.511"
        y2="22"
      ></line>
    </svg>
  );
};
