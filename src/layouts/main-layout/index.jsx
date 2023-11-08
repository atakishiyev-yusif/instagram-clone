import React from "react";
import { useLocation } from "react-router-dom";
import { Content } from "~/components/content";
import { Sidebar } from "~/components/sidebar";
import { Suggestion } from "~/components/suggestion";

export const MainLayout = () => {
  const homeLocation = useLocation().pathname;

  return (
    <div
      className={`max-w-[1352px] mx-auto flex h-[100vh] ${
        homeLocation == "/" && "justify-between"
      }`}
    >
      <Sidebar />
      <div className="pt-[22px] flex justify-between">
        <Content />
        {homeLocation == "/" && <Suggestion />}
      </div>
    </div>
  );
};
