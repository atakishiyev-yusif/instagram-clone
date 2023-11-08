import { Tab } from "@headlessui/react";
import { UserItem } from "../user-item";
import { SwitchAccount } from "../switch-account";
import { useState, useEffect } from "react";

export const DirectSidebar = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    fetch("https://dummyjson.com/users/")
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, []);

  return (
    <div className="w-[400px] border-r border-r-[#242424] h-[100vh] pr-12 pl-1">
      <div className="z-[999999999999999999999999999999]">
        <SwitchAccount />
      </div>
      <Tab.Group>
        <Tab.List className="flex items-center text-base font-semibold justify-between mb-4">
          <Tab className={"px-9 py-3 border-b"}>Primary</Tab>
          <Tab className={"px-9 py-3"}>General</Tab>
          <Tab className={"px-9 py-3"}>Requests</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            {users?.slice(0, 4).map((item) => (
              <UserItem
                username={`${item.firstName} ${item.lastName}`}
                profileImg={item.image}
              />
            ))}
          </Tab.Panel>
          <Tab.Panel>
            {users?.slice(12, 18).map((item) => (
              <UserItem
                username={`${item.firstName} ${item.lastName}`}
                profileImg={item.image}
              />
            ))}
          </Tab.Panel>
          <Tab.Panel>
            {users?.slice(22, 24).map((item) => (
              <UserItem
                username={`${item.firstName} ${item.lastName}`}
                profileImg={item.image}
              />
            ))}
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
