import React from "react";
import CreatePost from "./CreatePost";
import Posts from "./Posts";

const Feed = () => {
  return (
    <div className="no-scrollbar flex-grow h-screen pt-6 mr-5 ml-2 overflow-y-auto bg-[#18191a]">
      <div className="mx-auto max-w-md md:max-w-xl lg:max-w-2xl">
        {/* POST BOX */}
        <CreatePost />
        {/* POSTS */}
        <Posts />
      </div>
    </div>
  );
};

export default Feed;
