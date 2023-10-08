"use client";
import { useState } from "react";

const AddPost = ({ addPostInParent }) => {
  const [postObj, setPostObj] = useState({
    title: "",
    image: "",
    message: "",
  });

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        addPostInParent(postObj);
      }}
    >
      <input
        type="text"
        placeholder="Title"
        className="border border-gray-300 p-2 rounded"
        onChange={(e) => {
          setPostObj({ ...postObj, title: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Image URL"
        className="border border-gray-300 p-2 rounded"
        onChange={(e) => {
          setPostObj({ ...postObj, image: e.target.value });
        }}
      />
      <textarea
        placeholder="Message"
        className="border border-gray-300 p-2 rounded"
        onChange={(e) => {
          setPostObj({ ...postObj, message: e.target.value });
        }}
      ></textarea>
      <button className="bg-blue-500 text-white p-2 rounded">Add Post</button>
    </form>
  );
};

export default AddPost;
