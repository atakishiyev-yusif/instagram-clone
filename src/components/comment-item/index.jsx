export const CommentItem = ({ username, comment, image }) => {
  return (
    <div className="flex gap-3">
      <div>
        <div className="rounded-full overflow-hidden object-cover w-8 h-8">
          <img
            src={
              (image && image) ||
              "https://fastly.picsum.photos/id/870/200/300.jpg?blur=2&grayscale&hmac=ujRymp644uYVjdKJM7kyLDSsrqNSMVRPnGU99cKl6Vs"
            }
            alt=""
          />
        </div>
      </div>
      <div className="text-[13px]">
        <a
          href="#"
          className="mr-2 font-semibold hover:opacity-70 transition-colors"
        >
          {(username && username) || "username"}
        </a>
        <span className="text-sm">
          {(comment && comment) ||
            `. . . . read caption 👇🏻 Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Ad animi eveniet atque nihil ex! Itaque quidem non
                    quis, similique vero ipsum rem quas cum deleniti culpa omnis
                    exercitationem facilis praesentium?`}
        </span>
      </div>
    </div>
  );
};
