import { SecondaryButton } from "~/components/secondary-button";
import { ThreadsIcon } from "~/icons/ThreadsIcon";

export const ProfilePageHeader = ({ username, fullName, profile }) => {
  return (
    <div className="flex items-center gap-[55px]">
      <div className="w-[155px] h-[155px] object-cover mr-12 rounded-full overflow-hidden">
        <img src={profile} className="w-full h-full" />
      </div>

      <div>
        <div className="flex items-center gap-6 mb-5">
          <span className="text-2xl">{username}</span>
          <div className="flex items-center gap-4">
            <SecondaryButton label="Edit profile" />
            <SecondaryButton label="View Archive" />
            <SecondaryButton label="Add tools" />
            <SecondaryButton label="Settings" />
          </div>
        </div>

        <div>
          <div className="text-[16px] flex items-center gap-12 mb-5">
            <span>
              <span className="font-semibold">15</span> posts
            </span>
            <span>
              <span className="font-semibold">17</span> followers
            </span>
            <span>
              <span className="font-semibold">42</span> following
            </span>
          </div>
        </div>

        <div className="flex flex-col items-start mb-3">
          <span className="font-semibold">{fullName}</span>
          <a
            href="https://www.threads.net/@yusifatakishiyev"
            className="mt-1 w-[130px] h-[28px] rounded-2xl flex items-center gap-2 bg-[#353535] justify-center px-2"
          >
            <ThreadsIcon size={16} />
            <span className="text-[13px]">yusifatakishiyev</span>
          </a>
        </div>

        <div className="text-[#9A9A9A]">Digital creator</div>
        <div>Front-end Developer 👨🏻‍💻</div>

        <div className="mt-2">
          177 accounts reached in the last 30 days.{" "}
          <a href="#" className="font-semibold">
            View insights
          </a>
        </div>
      </div>
    </div>
  );
};
