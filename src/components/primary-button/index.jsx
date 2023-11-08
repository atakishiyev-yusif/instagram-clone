export const PrimaryButton = ({ label }) => {
  return (
    <button className="w-[82px] h-[32px] bg-[#038AE1] px-4 py-[7px] flex items-center justify-center font-semibold rounded-lg hover:opacity-90">
      {label}
    </button>
  );
};
