import { PrimaryButton } from "~/components/primary-button/";

export const NotificationItem = ({
  type,
  username,
  profileImg,
  time,
  postImg,
}) => {
  return (
    <div className="flex items-center justify-between py-2 px-[3px]">
      <div className="flex items-center gap-3">
        <div className="w-[44.5px] h-[44.5px] overflow-hidden rounded-full">
          <img src={profileImg} alt={`${username} profile`} />
        </div>
        <div className="text-[14px] leading-[18px] flex items-center flex-wrap gap-2 justify-between">
          <div className="font-semibold">{username}</div>
          {type == "follow" && <span>started following you.</span>}
          {type == "like" && (
            <div className="flex items-center justify-between">
              <div className="flex gap-1">
                <span>liked your post.</span>
                <span className="text-[#9A9A9A]">{time}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {type == "like" && (
        <div>
          <img src={"https://picsum.photos/50/50.webp"} />
        </div>
      )}

      {type == "follow" && (
        <div className="ml-[2px]">
          <PrimaryButton label={"Follow"} />
        </div>
      )}
    </div>
  );
};
