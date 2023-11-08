export const MenuItem = ({ label, icon }) => {
  return (
    <div className="gap-2 w-full px-3 h-[50px] hover:bg-[#5555] flex items-center rounded-lg ">
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  );
};
