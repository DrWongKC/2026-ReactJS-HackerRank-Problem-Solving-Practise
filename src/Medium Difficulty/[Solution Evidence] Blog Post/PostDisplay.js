function PostDisplay({ blogPosts, setBlogPosts }) {
  function deleteBlogPost(id) {
    setBlogPosts((currentPosts) =>
      currentPosts.filter((post) => post.id !== id),
    );
  }

  return (
    <div data-testid="posts-container" className="flex wrap gap-10">
      {blogPosts.map((blogPost) => (
        <div key={blogPost.id} className="post-box">
          <h3>{blogPost.title + blogPost.id}</h3>
          <p>{blogPost.description}</p>
          <button onClick={() => deleteBlogPost(blogPost.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default PostDisplay;
