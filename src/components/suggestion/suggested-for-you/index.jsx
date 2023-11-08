import { Link } from "react-router-dom";
import { UserItem } from "../../user-item";
import { useState, useEffect } from "react";

export const SuggestedForYou = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    fetch("https://dummyjson.com/users/")
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, []);

  return (
    <div className="mt-4 mb-2">
      <div className="flex text-[#646464] items-center justify-between font-semibold pb-3">
        <span>Suggested for you</span>
        <Link className="text-xs hover:text-white transition-colors">
          See All
        </Link>
      </div>

      {users?.slice(6, 11).map((item) => (
        <UserItem
          type={"follow"}
          profileImg={item.image}
          username={item.username}
        />
      ))}
    </div>
  );
};
