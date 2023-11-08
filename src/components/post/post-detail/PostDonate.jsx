import { CommentIcon } from "~/icons/CommentIcon";
import { LikeIcon } from "~/icons/LikeIcon";
import { ShareIcon } from "~/icons/ShareIcon";
import { SavedIcon } from "~/icons/SavedIcon";

export const PostDonate = () => {
  return (
    <div className="flex items-center justify-between py-3">
      <div className="flex items-center gap-4">
        <span>
          <LikeIcon />
        </span>
        <span>
          <CommentIcon />
        </span>
        <span>
          <ShareIcon />
        </span>
      </div>
      <div>
        <span>
          <SavedIcon />
        </span>
      </div>
    </div>
  );
};
