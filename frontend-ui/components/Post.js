import React from "react";
import Image from "next/image";
import { FiThumbsUp } from "react-icons/fi";
import { FaRegCommentAlt } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";

const Post = ({ post }) => {
  console.log("Post id : " + post.id + ", " + post.post);

  const keepBeginning = (date) => {
    return date.split(" ", 4).join(" ");
  };

  if (post.image !== null) console.log("IMAGE : \n" + post.image);
  return (
    <div className="flex flex-col " key={post.id}>
      <div className="bg-[#242526] mt-6 rounded-t-md p-4 shadow-md">
        <div className="flex items-center">
          <img
            className="rounded-full w-10 h-10 mr-2"
            src={post.profilePic}
            alt="image"
          />
          <div>
            <p className="font-medium">{post.name}</p>
            <p className="text-xs text-[#96979a]">
              {keepBeginning(post.timeStamp)}
            </p>
          </div>
        </div>
        <p className="pt-4">{post.post}</p>
      </div>
      {/* If any image */}
      {post.image != null ? (
        <div className="relative bg-black">
          <img className="mx-auto h-60 md:h-96" src={post.image} alt="Post" />
        </div>
      ) : (
        <div className="text-[#b9bbbe]">
          <hr className="w-[100%] mt-0 mb-0 border-t-1 border-b-0" />
        </div>
      )}
      {/*  */}

      {/* Footer */}
      <div className="flex items-center justify-center bg-[#242526] py-1 px-4  rounded-b-md">
        <div className="text-[#b9bbbe] flex items-center space-x-1 hover:bg-[#3a3b3c] flex-grow justify-center p-2 rounded-md cursor-pointer">
          <FiThumbsUp className="h-4"></FiThumbsUp>
          <p className="text-xs sm:text-base">Like</p>
        </div>
        <div className="text-[#b9bbbe] flex items-center space-x-1 hover:bg-[#3a3b3c] flex-grow justify-center p-2 rounded-md cursor-pointer">
          <FaRegCommentAlt className="h-4" />
          <p className="text-xs sm:text-base">Comment</p>
        </div>
        <div className="text-[#b9bbbe] flex items-center space-x-1 hover:bg-[#3a3b3c] flex-grow justify-center p-2 rounded-md cursor-pointer">
          <RiShareForwardLine className="h-4" />
          <p className="text-xs sm:text-base">Share</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
