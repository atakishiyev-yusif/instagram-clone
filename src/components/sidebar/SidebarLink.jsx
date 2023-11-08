import classnames from "classnames";
import React from "react";
import { NavLink } from "react-router-dom";
import { useStore } from "~/store";

export const SidebarLink = ({ label, icon, route }) => {
  const openSidebarLink = useStore((state) => state.openSidebarLink);
  return (
    <div
      className={`p-3 w-[220px] h-[48px] max-lg:w-[48px] max-lg:pl-[12px] max-lg:overflow-hidden ${
        openSidebarLink && "w-[48px] pl-[12px] overflow-hidden"
      } hover:bg-[#5555] flex items-center rounded-lg mx-[3px]`}
    >
      {route ? (
        <NavLink to={route} className={"w-full"}>
          <div className="flex items-center my-2 gap-[2px]">
            <span className="hover:scale-110 transition-all duration-100">
              {icon}
            </span>
            <span className= {`w-[63.3px] pl-4 text-lg max-lg:hidden ${openSidebarLink && 'hidden'}`}>
              {label}
            </span>
          </div>
        </NavLink>
      ) : (
        <div className="flex items-center my-2 gap-[2px] max-lg:w-[48px]">
          <span className="hover:scale-110 transition-all duration-100">
            {icon}
          </span>
          <span className="w-[63.3px] pl-4 text-lg max-lg:hidden">{label}</span>
        </div>
      )}
    </div>
  );
};
