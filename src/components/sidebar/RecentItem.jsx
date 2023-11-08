import { CloseIcon } from "~/icons/CloseIcon";
import { HashtagIcon } from "~/icons/HashtagIcon";

export const RecentItem = () => {
  return (
    <div className="flex items-center justify-between px-5 mt-1">
      <div className="flex items-center gap-2">
        <span className="w-12 h-12 rounded-full border border-[#232323] flex items-center justify-center">
          <HashtagIcon />
        </span>
        <span className="font-bold">#programming</span>
      </div>
      <div>
        <CloseIcon />
      </div>
    </div>
  );
};
