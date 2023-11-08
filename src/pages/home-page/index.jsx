import React, { useEffect, useState } from "react";
import { Post } from "~/components/post";
import { Story } from "~/components/story";
import { Suggestion } from "~/components/suggestion";

export const HomePage = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    fetch("https://dummyjson.com/users/")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  console.log(users);

  return (
    <div>
      <Story />
      <div className="mt-[55px] mr-[81px] ml-[34px] max-md:mx-auto max-md:w-[200px] max-md:flex max-md:flex-col max-md:items-center max-md:justify-center">
        {users?.users.map((item) => (
          <Post
            profileImg={item.image}
            username={item.username}
            postImg={item.image}
            description={item.userAgent}
            isVerified={true}
            date={"27m"}
            likes={item.height}
            comments={"asdasd"}
          />
        ))}
      </div>
    </div>
  );
};
