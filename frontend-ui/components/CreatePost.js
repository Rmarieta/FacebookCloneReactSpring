import Image from "next/image";
import { React, useState, useRef } from "react";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { FaPhotoVideo } from "react-icons/fa";
import { GoSmiley } from "react-icons/go";
import { useSession } from "next-auth/react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { addPost } from "../public/src/features/postSlice";
import axios from "axios";

const CreatePost = () => {
  const FACEBOOK_CLONE_ENDPOINT = "http://localhost:8080/api/v1/post";

  const { data: session } = useSession();

  const inputRef = useRef(null);
  const hiddenFileInput = useRef(null);

  const [imageToPost, setImageToPost] = useState(null);

  const dispatch = useDispatch();

  const keepFirst = (name) => {
    const firstName = name.split(" ")[0];
    return firstName;
  };

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (r) => {
        setImageToPost(r.target.result);
      };
    }
  };

  const removeImage = () => {
    setImageToPost(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;
    const formData = new FormData();

    console.log(
      "HandleSubmit :\nfile : " +
        imageToPost +
        "\npost : " +
        inputRef.current.value +
        "\nname : " +
        session?.user.name
    );

    formData.append("file", imageToPost);
    formData.append("post", inputRef.current.value);
    formData.append("name", session?.user.name);
    formData.append("profilePic", session?.user.image);

    axios
      .post(FACEBOOK_CLONE_ENDPOINT, formData, {
        headers: { Accept: "application/json" },
      })
      .then((response) => {
        inputRef.current.value = "";
        dispatch(addPost(response.data));
        console.log("Data within handleSubmit :\n" + response.data);
        removeImage();
      })
      .catch((error) => {
        console.log("KAKOU");
        console.log(error);
      });
  };

  return (
    <div className="bg-[#242526] rounded-md shadow-md  p-2 pb-1">
      <div className="flex p-4 space-x-2 items-center">
        <Image
          src={session?.user.image}
          alt="User"
          width={40}
          height={40}
          className="rounded-full cursor-pointer"
        />
        <form className="flex flex-1">
          <input
            ref={inputRef}
            className="bg-[#3a3b3c] text-[#96979a] hover:bg-[#4e4f50] cursor-pointer rounded-full h-12 flex-grow focus:outline-none font-medium px-4"
            type="text"
            placeholder={`What's on your mind, ${keepFirst(
              session?.user.name
            )}?`}
          />
          <button hidden onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
      {imageToPost && (
        <div className="flex justify-center px-4 py-2 space-x-4  cursor-pointer">
          <img
            src={imageToPost}
            className="h-10 object-contain hover:brightness-110 transition duration-100"
          />
          <RiDeleteBin6Line
            onClick={removeImage}
            className="h-10 hover:text-red-800 "
          />
        </div>
      )}
      <hr className="w-[95%] mx-auto mt-2 mb-1 bg-[#3a3b3c] border-0 h-px" />
      <div className="flex justify-evenly py-1 px-2">
        <div className="flex items-center p-1 py-2 space-x-2 flex-grow justify-center hover:bg-[#3a3b3c] rounded-md cursor-pointer">
          <HiOutlineVideoCamera size={20} className="text-red-600" />
          <p className="font-semibold text-[#b9bbbe]">Live Video</p>
        </div>

        <div
          onClick={handleClick}
          className="flex items-center p-1 py-2 space-x-2 flex-grow justify-center hover:bg-[#3a3b3c] rounded-md cursor-pointer"
        >
          <FaPhotoVideo size={20} className="text-green-600" />
          <p className="font-semibold text-[#b9bbbe]">Photo/video</p>
          <input
            ref={hiddenFileInput}
            onChange={addImageToPost}
            type="file"
            accept="image/*"
            hidden
          />
        </div>

        <div className="flex items-center p-1 py-2 space-x-2 flex-grow justify-center hover:bg-[#3a3b3c] rounded-md cursor-pointer">
          <GoSmiley size={20} className="text-yellow-600" />
          <p className="font-semibold text-[#b9bbbe]">Feeling/activity</p>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
