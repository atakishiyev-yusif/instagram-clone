import { PostDetail } from "../post-detail";

export const PostBody = ({
  username,
  postImg,
  description,
  likes,
  comments,
}) => {
  return (
    <div>
      <div className="min-w-[468px] min-h-[499px] rounded-[3px] object-cover overflow-hidden border border-[#262626]">
        <img src={postImg} alt="" />
      </div>
      <PostDetail username={username} />
    </div>
  );
};
