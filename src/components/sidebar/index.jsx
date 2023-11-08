import { useState, useEffect } from "react";
import { Logo } from "../logo";
import { SidebarLink } from "./SidebarLink";
import { HomeIcon } from "../../icons/HomeIcon";
import { SearchIcon } from "../../icons/SearchIcon";
import { ExploreIcon } from "../../icons/ExploreIcon";
import { ReelsIcon } from "../../icons/ReelsIcon";
import { MessagesIcon } from "../../icons/MessagesIcon";
import { NotificationIcon } from "../../icons/NotificationIcon";
import { CreateIcon } from "../../icons/CreateIcon";
import { useStore } from "~/store";
import { Tab } from "@headlessui/react";
import { SearchInput } from "../search-input";
import { InstagramIcon } from "~/icons/InstagramIcon";
import { RecentItem } from "./RecentItem";
import { useLocation } from "react-router-dom";
import { SidebarModal } from "./sidebar-modal/";
import { NotificationItem } from "~/components/notification-item/";

export const Sidebar = () => {
  const openSidebarLink = useStore((state) => state.openSidebarLink);
  const setOpenSidebarLink = useStore((state) => state.setOpenSidebarLink);
  const { username, profile } = useStore((state) => state.currentUser);
  const [users, setUsers] = useState();

  useEffect(() => {
    fetch("https://dummyjson.com/users/")
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, []);

  const [openNotification, setOpenNotification] = useState(false);
  console.log(openSidebarLink);
  return (
    <aside className="w-[244px] bg-black pb-5 pt-2 px-3 relative max-md:hidden">
      <div
        className={`fixed border-r border-[#262626] h-full bg-black max-lg:w-[60px]`}
      >
        <div className="max-lg:hidden">
          {openSidebarLink ? <InstagramIcon /> : <Logo />}
        </div>
        <div className="hidden max-lg:block">
          <InstagramIcon />
        </div>

        <Tab.Group>
          <Tab.List className="flex flex-col gap-[8.7px]">
            <SidebarLink label={"Home"} icon={<HomeIcon />} route={"/"} />
            <Tab onClick={() => setOpenSidebarLink(openSidebarLink)}>
              <SidebarLink label={"Search"} icon={<SearchIcon />} />
            </Tab>

            <SidebarLink
              label={"Explore"}
              icon={<ExploreIcon />}
              route={"explore"}
            />
            <SidebarLink label={"Reels"} icon={<ReelsIcon />} route={"reels"} />
            <SidebarLink
              label={"Messages"}
              icon={<MessagesIcon />}
              route={"direct/inbox"}
            />
            <Tab onClick={() => setOpenSidebarLink(openSidebarLink)}>
              <SidebarLink label={"Notification"} icon={<NotificationIcon />} />
            </Tab>
            <SidebarLink
              label={"Create"}
              icon={<CreateIcon />}
              route={"create"}
            />

            <SidebarLink
              label={"Profile"}
              icon={
                <img
                  width={25}
                  height={25}
                  className="rounded-full"
                  src={profile}
                />
              }
              route={username}
            />

            <SidebarModal />
          </Tab.List>

          <Tab.Panels
            className={`transition-all duration-1000 absolute w-[400px] h-full top-0 -z-[1] p-2 max-lg:pl-14 bg-black ${
              openSidebarLink == true ? "left-[25%] block" : "hidden"
            }
            `}
          >
            <Tab.Panel className={"z-50"}>
              <div className="pb-9 pl-6 pr-[14px] my-2">
                <span className="font-bold text-[25px]">Search</span>
              </div>
              <div className="mx-4">
                <SearchInput />
                <div className="block left-0 w-full h-[1px] bg-[#232323] rounded-full mt-6 absolute"></div>
                <div className="flex items-center justify-between mb-4 mt-12 px-2">
                  <span className="font-semibold text-[16px]">Recent</span>
                  <a
                    href=""
                    className="font-semibold text-[13px] text-[#0095f6]"
                  >
                    Clear all
                  </a>
                </div>
                <div>
                  <RecentItem />
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="font-bold pb-2 pl-6 pr-[14px] my-2">
                <div className="pb-2 text-[25px]">
                  <span>Notification</span>
                </div>
                <div className="py-2 ">
                  <span>This month</span>
                </div>
              </div>
              <div className="px-6 flex flex-col gap-2">
                {users?.splice(0, 2).map((item) => (
                  <NotificationItem
                    type={"follow"}
                    username={item.username}
                    profileImg={item.image}
                    time={"5d"}
                  />
                ))}

                {users?.splice(2, 4).map((item) => (
                  <NotificationItem
                    type={"like"}
                    username={item.username}
                    profileImg={item.image}
                    time={"5d"}
                  />
                ))}
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </aside>
  );
};
