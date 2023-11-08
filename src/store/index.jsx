import { create } from "zustand";
import currentUserProfile from "~/assets/images/current-user.jpg";

export const useStore = create((set) => ({
  currentUser: {
    id: 1,
    username: "yusifatakishiyev",
    isVerified: true,
    profile: currentUserProfile,
    fullName: "Yusif Atakishiyev",
  },
  openSidebarLink: false,
  setOpenSidebarLink: (openSidebarLink) =>
    set(() => ({ openSidebarLink: !openSidebarLink })),

  togglePostModal: false,

  openPostModal: (openPostModal) => set(() => ({ togglePostModal: true })),

  closePostModal: (closePostModal) => set(() => ({ togglePostModal: false })),
}));
