import { CommentItem } from "~/components/comment-item";
import { useState, useEffect } from "react";
import { PulseLoader } from "react-spinners";

export const Comments = () => {
  const [comments, setComments] = useState();
  const [showComments, setShowComments] = useState(false);

  console.log(comments);

  useEffect(() => {
    fetch("https://dummyjson.com/comments")
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
        if (data.comments.length > 10) {
          setShowComments(true);
        }
      });

    const timer = setTimeout(() => {
      setShowComments(true);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="overflow-auto h-[350px] w-full flex flex-col gap-4">
      {showComments ? (
        comments?.comments.map((item) => (
          <CommentItem
            username={item.user.username}
            comment={item.body}
            image={item.download_url}
          />
        ))
      ) : (
        <span className="translate-x-[65%] translate-y-[65%]">
          <PulseLoader color="#525252" />
        </span>
      )}
    </div>
  );
};
