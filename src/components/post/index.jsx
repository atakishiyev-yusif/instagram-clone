import { PostHeader } from "./post-header";
import { PostBody } from "./post-body";

export const Post = ({
  profileImg,
  username,
  isVerified,
  date,
  postImg,
  description,
  likes,
  comments,
}) => {
  return (
    <div className="w-[466px] max-w-[466px] border-b border-[#262626] mb-5 mt-1 max-md:scale-90">
      {/* header */}
      <PostHeader
        profileImg={profileImg}
        username={username}
        isVerified={isVerified}
        date={date}
      />

      {/* body */}
      <PostBody
        postImg={postImg}
        username={username}
        description={description}
        likes={likes}
        comments={comments}
      />
    </div>
  );
};
