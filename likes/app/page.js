import Post from "./components/cards/Post";
import Title from "./components/typography/Title";
import AddPost from "./components/forms/AddPost";
import Nav from "./components/globalComps/Nav";
import Footer from "./components/globalComps/Footer";

export default function Home() {
  const posts = [
    {
      id: 1,
      title: "post1",
      image: "https://source.unsplash.com/random/150×150",
      message: "111111 111111 1111111 1111111 111111.",
    },
    {
      id: 2,
      title: "post2",
      image: "https://source.unsplash.com/random/150×150",
      message: "2222222 2222222 2222 22 22222 2222 2222222 2222",
    },
    {
      id: 3,
      title: "post3",
      image: "https://source.unsplash.com/random/150×150",
      message: "3333 3333333 3333 333333",
    },
  ];

  const addPostHandler = (post) => {
    setPosts((prevPosts) => {
      return [post, ...prevPosts];
    });
    // SEE IF THIS WORKS
    // setPosts(posts.push(post));
  };

  return (
    <>
      <Nav />
      <main className="flex min-h-screen flex-col p-12 items-center">
        <Title text="Social Site" />
        <div className="flex flex-wrap gap-8 justify-center">
          {posts.map((post) => {
            return (
              <Post
                // spread the post values into the post component
                {...post}
                key={post.id}
              />
            );
          })}
        </div>
        <AddPost />
      </main>
      <Footer />
    </>
  );
}
