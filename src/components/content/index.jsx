import React from "react";
import { Outlet } from "react-router-dom";

export const Content = () => {
  return (
    <div className="w-[630px] ">
      <Outlet />
    </div>
  );
};
