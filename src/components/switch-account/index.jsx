"use client";

import { DownChevronIcon } from "~/icons/DownChevronIcon";
import { Modal } from "flowbite-react";
import { useState } from "react";
import { useStore } from "~/store";
import { NewMessageIcon } from "~/icons/NewMessageIcon";
import { UserItem } from "~/components/user-item/";

export function SwitchAccount() {
  const [openModal, setOpenModal] = useState(false);
  const { username } = useStore((state) => state.currentUser);

  return (
    <>
      <div className="flex items-center justify-between">
        <button
          className="w-full pt-4 pb-6 px-4 hover:opacity-70 transition-colors flex items-center gap-2"
          onClick={() => setOpenModal(true)}
        >
          <span className="font-bold text-2xl">{username}</span>
          <span>
            {" "}
            <DownChevronIcon />{" "}
          </span>
        </button>

        <div className="pb-4">
          <NewMessageIcon />
        </div>
      </div>

      <div className="w-full ">
        <Modal
          className="mx-[30%]  w-[440px] rounded-2xl h-[286px] my-[auto] z-[9999999999999999999] bg-[#242424] p-2 flex items-center justify-center"
          show={openModal}
          onClose={() => setOpenModal(false)}
        >
          <div className="flex items-center justify-between border-b border-b-[#353535] pb-4">
            <span className="ml-[35%] font-semibold text-lg">
              Switch accounts
            </span>
            <Modal.Header className="border-b-[#353535]" />
          </div>

          <UserItem defaultUser />
          <UserItem username={"user"} />
          <div className="flex items-center justify-center text-[13px] text-[#1677DE] hover:text-white transition-colors font-semibold">
            <a className="absolute top-[36vh]" href="#">
              Log into an Existing Account
            </a>
          </div>
        </Modal>
      </div>
    </>
  );
}
