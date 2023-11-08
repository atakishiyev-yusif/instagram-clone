import { ExploreUserItem } from "~/components/explore-user-item";
import { UserItem } from "~/components/user-item";
import { Comments } from "./comments";
import { PostDonate } from "~/components/post/post-detail/PostDonate";
import { CommentInput } from "~/components/comment-input";

export const PostModalBody = () => {
  return (
    <div className="w-[450px] py-6 px-4 relative">
      <ExploreUserItem />
      <div className="w-full h-[1px] block my-4 bg-[#262626]"></div>
      <div className="w-[300px]">
        <Comments />
      </div>
      <div className="absolute bottom-0 w-[94%] px-2">
        <PostDonate />
        <div className="font-bold pt-1">1 like</div>
        <div className="py-1 text-xs text-[#A8A8A8]">OCTOBER 20</div>
        <div className="w-full h-[1px] block my-1 bg-[#262626]"></div>
        <CommentInput />
      </div>
    </div>
  );
};
