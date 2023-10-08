import Link from "next/link";

const Nav = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <Link href="#addPostForm">Add Post</Link>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
