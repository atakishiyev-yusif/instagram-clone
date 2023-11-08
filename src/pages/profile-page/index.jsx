import { useStore } from "~/store";
import { ProfilePageHeader } from "~/components/profile-page-header";
import { Hightlight } from "~/components/hightlight";
import { Tab } from "@headlessui/react";
import { PostsIcon } from "~/icons/PostsIcon";
import { ReelsIcon } from "~/icons/ReelsIcon";
import { TaggedIcon } from "~/icons/TaggedIcon";
import youtubeIcon from "~/assets/images/youtube-icon.jpg";
import motivationIcon from "~/assets/images/motivation-icon.jpg";
import musicIcon from "~/assets/images/music-icon.jpg";
import playlistIcon from "~/assets/images/playlist-icon.jpg";
import moviesIcon from "~/assets/images/movies-icon.jpg";

export const ProfilePage = () => {
  const { username, fullName, profile } = useStore(
    (state) => state.currentUser
  );

  return (
    <div className="mx-[66px] px-[22px] pt-[30px] w-[500vh]">
      <ProfilePageHeader
        username={username}
        fullName={fullName}
        profile={profile}
      />
      <div className="flex items-center gap-14">
        <Hightlight label="YouTube" imgUrl={youtubeIcon} />
        <Hightlight label="Motivation" imgUrl={motivationIcon} />
        <Hightlight label="Music" imgUrl={musicIcon} />
        <Hightlight label="Playlist" imgUrl={playlistIcon} />
        <Hightlight label="Movies" imgUrl={moviesIcon} />
      </div>

      <Tab.Group>
        <Tab.List className="w-[30%] flex items-center justify-center gap-24 mt-4">
          <Tab className="flex items-center gap-2 border-t pt-2">
            <span>
              <PostsIcon />
            </span>
            <span className="text-[11px] font-semibold">POSTS</span>
          </Tab>
          <Tab className="flex items-center gap-2 pt-2">
            <span>
              <ReelsIcon size={12} />
            </span>
            <span className="text-[11px] font-semibold pt-2">REELS</span>
          </Tab>
          <Tab className="flex items-center gap-2 pt-2">
            <span>
              <TaggedIcon />
            </span>
            <span className="text-[11px] font-semibold">TAGGED</span>
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-12">
          <Tab.Panel className="flex items-center gap-1 flex-wrap">
            <div className=" w-[316px] h-[316px] max-w-[316px] max-h-[316px] object-cover relative">
              <img
                className="w-full h-full"
                src="https://picsum.photos/200/300.webp"
              />
            </div>
            <div className=" w-[316px] h-[316px] max-w-[316px] max-h-[316px] object-cover relative">
              <img
                className="w-full h-full"
                src="https://picsum.photos/200/300.jpg"
              />
            </div>
            <div className=" w-[316px] h-[316px] max-w-[316px] max-h-[316px] object-cover relative">
              <img
                className="w-full h-full"
                src="https://picsum.photos/seed/picsum/200/300"
              />
            </div>
          </Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
