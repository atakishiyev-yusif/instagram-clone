import { useState } from "react";
import Modal from "react-modal";
import { PostModalBody } from "./post-modal-body";
import { useStore } from "~/store";
import { CloseIcon } from "~/icons/CloseIcon";

export const PostModal = ({ imgUrl }) => {
  const togglePostModal = useStore((state) => state.togglePostModal);
  const openPostModal = useStore((state) => state.openPostModal);
  const closePostModal = useStore((state) => state.closePostModal);

  return (
    <div>
      <button
        className="absolute w-full h-full hover:bg-black hover:opacity-40 transition-all ease-linear duration-500"
        onClick={openPostModal}
      ></button>
      <Modal
        isOpen={togglePostModal}
        onRequestClose={closePostModal}
        className={
          "absolute top-[50%] left-[50%] right-auto bottom-auto mr-[50%] translate-x-[-50%] translate-y-[-50%] focus:border-none focus:outline-none "
        }
        contentLabel="Example Modal"
        overlayClassName={"fixed top-0 bottom-0 left-0 right-0"}
      >
        <div className="flex bg-black">
          <div className="w-[480px] h-[580px] object-cover border border-[#262626] ">
            <img src={imgUrl} className="w-full h-full" alt="" />
          </div>
          <PostModalBody />
        </div>
        <button
          className="text-black absolute right-0 top-0 p-2"
          onClick={closePostModal}
        >
          <CloseIcon />
        </button>
      </Modal>
    </div>
  );
};
