export const Hightlight = ({ imgUrl, label }) => {
  return (
    <div className="my-12 ">
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center w-[77px] h-[77px] border-2 border-[#2b2b2b] rounded-full overflow-hidden object-cover">
          <img src={imgUrl} />
        </div>

        <div className="font-semibold text-[13px] mt-3">{label}</div>
      </div>
    </div>
  );
};
