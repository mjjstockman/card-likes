"use client";
import { useState } from "react";

const Post = ({ title, image, message }) => {
  const [isLiked, setIsLiked] = useState(false);
  const handleDeleteClick = () => {
    onDelete(id);
  };

  return (
    <div className="flex flex-wrap max-w-full">
      <div className="w-96 flex-col flex-1">
        <button
          className="{"
          // className='flex items-center gap-2'
          //  Use arrow function like a barrier to prevent the function from running on render,
          //  and only run when the button is clicked.
          onClick={() => setIsLiked(!isLiked)}
        >
          {/* Like/Dislike buttons */}
        </button>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{message}</p>
          </div>
        </div>
      </div>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
};

export default Post;
