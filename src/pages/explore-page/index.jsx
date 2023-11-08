import { useState } from "react";
import { PostModal } from "~/components/post-modal";
import { useStore } from "~/store";
import { LikeIcon } from "~/icons/LikeIcon";
import { CommentIcon } from "~/icons/CommentIcon";

export const ExplorePage = () => {
  const [postImages, setPostImages] = useState();
  const openPostModal = useStore((state) => state.openPostModal);
  const closePostModal = useStore((state) => state.closePostModal);
  const openSidebarLink = useStore((state) => state.openSidebarLink);
  fetch("https://picsum.photos/v2/list")
    .then((res) => res.json())
    .then((data) => setPostImages(data));

  return (
    <div
      className={`${
        openSidebarLink && "ml-60"
      } transition-all duration-1000 ml-12 w-[152vh]`}
    >
      <div className="flex items-center justify-around flex-wrap">
        {postImages?.map((item) => (
          <div className="group w-[316px] h-[316px] max-w-[316px] max-h-[316px] object-cover relative">
            <div className="group-hover:block hidden absolute w-full h-full">
              <div className="flex gap-4 items-center justify-center mt-[50%]">
                <span className="font-semibold flex items-center gap-2">
                  <LikeIcon /> 3758.71
                </span>
                <span className="font-semibold flex items-center gap-2">
                  <CommentIcon /> 17
                </span>
              </div>
            </div>
            <img className="w-full h-full" src={item.download_url} />
            <div className="absolute w-full h-full  top-0">
              <PostModal imgUrl={item ? item.download_url : ""} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
