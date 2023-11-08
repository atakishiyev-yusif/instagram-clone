import React from "react";
import { UserItem } from "../user-item";
import { SuggestedForYou } from "./suggested-for-you";
import { useLocation } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

export const Suggestion = () => {
  return (
    <div className={`w-[383px] h-full pl-10 mt-9 max-md:hidden `}>
      <div className="w-[287px] h-[44px]">
        <UserItem type="switch" defaultUser={true} />
        <SuggestedForYou />
        <div className="mt-12 text-[#737373] text-[13px] flex items-center gap-2 flex-wrap">
          <span>About</span>
          <span>Help</span>
          <span>Press</span>
          <span>API</span>
          <span>Jobs</span>
          <span>Privacy</span>
          <span>Terms</span>
          <span>Locations</span>
          <span>Language</span>
          <span>Meta Verified</span>
        </div>
        <a href="https://www.instagram.com/yusifatakishiyev/">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "© 2023 INSTAGRAM FROM META",
              5000, // wait 1s before replacing "Mice" with "Hamsters"
              "© 2023 INSTAGRAM FROM YUSIF",
              5000,
            ]}
            wrapper="span"
            speed={10}
            style={{
              fontSize: "13px",
              display: "inline-block",
              color: "#737373",
              marginTop: "30px",
            }}
            repeat={Infinity}
          />
        </a>
      </div>
    </div>
  );
};
