import { MoreOptionsIcon } from "~/icons/MoreOptionsIcon";
import { ExploreUserProfile } from "./ExploreUserProfile";

export const ExploreUserItem = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <ExploreUserProfile
          imgUrl={
            "https://fastly.picsum.photos/id/870/200/300.jpg?blur=2&grayscale&hmac=ujRymp644uYVjdKJM7kyLDSsrqNSMVRPnGU99cKl6Vs"
          }
        />

        <div className="flex items-center text-[13px]">
          <div className="flex flex-col">
            <div className="flex items-center">
              <div className="flex items-center gap-7">
                <span className=" font-semibold">@username</span>
                <span className="list-item"></span>
              </div>
              <button className="text-[14px] text-[#0095f6] font-semibold hover:text-white transition-colors">
                Follow
              </button>
            </div>
            <span className="#F5F5F5 text-xs">Original audio</span>
          </div>
        </div>
      </div>
      <button className="hover:opacity-70 transition-all">
        <MoreOptionsIcon />
      </button>
    </div>
  );
};
