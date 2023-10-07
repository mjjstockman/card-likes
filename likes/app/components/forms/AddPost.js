const AddPost = () => {
  return (
    <form className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Title"
        className="border border-gray-300 p-2 rounded"
      />
      <input
        type="text"
        placeholder="Image URL"
        className="border border-gray-300 p-2 rounded"
      />
      <textarea
        placeholder="Message"
        className="border border-gray-300 p-2 rounded"
      ></textarea>
      <button className="bg-blue-500 text-white p-2 rounded">Add Post</button>
    </form>
  );
};

export default AddPost;
