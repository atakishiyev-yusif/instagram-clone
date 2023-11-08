import { StoryItem } from "./StoryItem";
import { useEffect, useState } from "react";

export const Story = () => {
  const [users, setUsers] = useState();
  useEffect(() => {
    fetch("https://dummyjson.com/users/")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div className="w-[630px] h-[101px] mt-4 -ml-[48px] overflow-auto max-md:px-12 max-md:mx-auto">
      <div className="flex items-center gap-3">
        {users?.users.map((item) => (
          <StoryItem imgUrl={item.image} label={item.username} />
        ))}
      </div>
    </div>
  );
};
