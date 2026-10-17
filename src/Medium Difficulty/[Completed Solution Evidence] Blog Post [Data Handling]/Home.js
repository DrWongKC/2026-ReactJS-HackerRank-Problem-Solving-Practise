import { useState } from "react";
import Input from "./Input";
import PostDisplay from "./PostDisplay";

function Home() {
  const [count, setCount] = useState(1);
  const [blogPosts, setBlogPosts] = useState([]);

  return (
    <div className="text-center ma-20">
      <div className="mb-20">
        <Input
          count={count}
          setCount={setCount}
          blogPosts={blogPosts}
          setBlogPosts={setBlogPosts}
        />
      </div>
      <div className="posts-section">
        <PostDisplay blogPosts={blogPosts} setBlogPosts={setBlogPosts} />
      </div>
    </div>
  );
}

export default Home;
