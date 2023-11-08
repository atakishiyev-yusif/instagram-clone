import { MoreOptionsIcon } from "~/icons/MoreOptionsIcon";
import { VerifiedIcon } from "~/icons/VerifiedIcon";

export const PostHeader = ({ profileImg, username, isVerified, date }) => {
  return (
    <div className="flex items-center justify-between  h-[32px] pl-1 pb-8 pt-[11px] ">
      <div className="flex items-center gap-3">
        <div className="object-cover rounded-full overflow-hidden">
          <img
            width={32}
            height={32}
            src={profileImg}
            alt={`${username} profile img`}
          />
        </div>
        <div className="flex items-center gap-1">
          <span className="font-bold">{username}</span>
          <span>{isVerified && <VerifiedIcon />}</span>
        </div>

        <div className="text-[#a5a5a5] list-item ml-2">{date}</div>
      </div>
      <div>
        <MoreOptionsIcon />
      </div>
    </div>
  );
};
