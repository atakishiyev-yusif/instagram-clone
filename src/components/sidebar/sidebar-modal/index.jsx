import { SidebarLink } from "~/components/sidebar/SidebarLink.jsx";
import { useState } from "react";
import { MenuItem } from "../sidebar-modal/MenuItem";
import { MoreIcon } from "~/icons/MoreIcon";
import { SettingsIcon } from "~/icons/SettingsIcon";
import { ActivityIcon } from "~/icons/ActivityIcon";
import { SavedIcon2 } from "~/icons/SavedIcon2";
import { SwitchApperanceIcon } from "~/icons/SwitchApperanceIcon";
import { ReportIcon } from "~/icons/ReportIcon";
import { ThreadsIcon } from "~/icons/ThreadsIcon";

export const SidebarModal = ({ label }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      {openModal && (
        <div className="absolute top-16 bg-[#242424] w-[265px] p-2 max-h-[470px] overflow-y-auto overflow-x-hidden rounded-2xl">
          <MenuItem label={"Settings"} icon={<SettingsIcon />} />
          <MenuItem label={"Yout Activity"} icon={<ActivityIcon />} />
          <MenuItem label={"Saved"} icon={<SavedIcon2 />} />
          <MenuItem label={"Switch Apperance"} icon={<SwitchApperanceIcon />} />
          <MenuItem label={"Report a problem"} icon={<ReportIcon />} />
          <div className="border-y-4 my-3 border-y-[#323232]">
            <MenuItem label={"Threads"} icon={<ThreadsIcon />} />
          </div>
          <MenuItem label={"Switch Accouts"} />
          <MenuItem label={"Log out"} />
        </div>
      )}
      <button onClick={() => setOpenModal(!openModal)}>
        <SidebarLink label="More" icon={<MoreIcon />} />
      </button>
    </div>
  );
};
