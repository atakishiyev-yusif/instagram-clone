import { EmojiIcon } from "~/icons/EmojiIcon";

export const CommentInput = ({ placeholder, label }) => {
  return (
    <div className="flex items-center justify-between pt-2 pb-4">
      <input
        className="placeholder:text-[#5a5a5a]"
        type="text"
        placeholder={placeholder || "Add a comment..."}
      />
      <EmojiIcon />
    </div>
  );
};
