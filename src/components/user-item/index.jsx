import { useStore } from "~/store";

export const UserItem = ({ type, defaultUser, username, profileImg }) => {
  const currentUser = useStore((state) => state.currentUser);
  return (
    <>
      {defaultUser ? (
        <div className="flex items-center justify-between py-2 px-[3px]">
          <div className="flex items-center gap-3">
            <div className="w-[44.5px] h-[44.5px] overflow-hidden rounded-full">
              <img
                src={currentUser.profile}
                alt={`${currentUser.username} profile`}
              />
            </div>
            <div className="text-[14px] leading-[18px]">
              <div className="font-bold">{currentUser.username}</div>
              <div className="text-[#969696]">{currentUser.fullName}</div>
            </div>
          </div>
          {type == "switch" && (
            <button className="font-semibold text-[#0095f6] text-sm">
              Switch
            </button>
          )}
          {type == "follow" && (
            <button className="font-semibold text-[#0095f6] text-sm">
              Follow
            </button>
          )}
        </div>
      ) : (
        <div className="flex items-center justify-between py-2 px-[3px]">
          <div className="flex items-center gap-3">
            <div className="w-[44.5px] h-[44.5px] overflow-hidden rounded-full">
              <img src={profileImg} alt={`${username} profile`} />
            </div>
            <div className="text-[14px] leading-[18px]">
              <div className="font-bold">{username}</div>
              <div className="text-[#969696]">{username}</div>
            </div>
          </div>
          {type == "switch" && (
            <button className="font-semibold text-[#0095f6] text-sm">
              Switch
            </button>
          )}
          {type == "follow" && (
            <button className="font-semibold text-[#0095f6] text-sm">
              Follow
            </button>
          )}
        </div>
      )}
    </>
  );
};
