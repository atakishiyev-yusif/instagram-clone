export const StoryItem = ({ imgUrl, label }) => {
  return (
    <div>
      <div className="mt-3 w-[63px] p-[2px] h-[63px] rounded-full overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="rounded-full border-2 border-black overflow-hidden">
          <img src={imgUrl} alt="asdasd" />
        </div>
      </div>
      <div className="mt-1 text-[#DFE0E0] px-[1px] text-[13px] max-w-[74px] whitespace-nowrap text-ellipsis overflow-hidden">
        {label}
      </div>
    </div>
  );
};
