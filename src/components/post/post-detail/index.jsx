import { CommentInput } from "~/components/comment-input";
import { PostDonate } from "./PostDonate";

export const PostDetail = ({ username }) => {
  return (
    <>
      <PostDonate />
      <div className="font-bold pb-3">1 like</div>
      <div>
        <a href="#" className="font-bold">
          {username}{" "}
        </a>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nemo,
          molestiae in debitis repellat nulla explicabo unde! Tempore ut maxime
          obcaecati labore possimus sed perspiciatis suscipit, consectetur nam
          deleniti repudiandae.
        </span>
      </div>
      <div>
        <div className="text-[#717171] pt-2">View all 7 comments</div>
        <CommentInput />
      </div>
    </>
  );
};
