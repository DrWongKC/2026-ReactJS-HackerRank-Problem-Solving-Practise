import { useState } from "react";

function Input({ setCount, count, setBlogPosts, blogPosts }) {
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");

  function handleTitle(e) {
    setInputTitle(e.target.value);
  }

  function handleDescription(e) {
    setInputDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (inputTitle == "" || inputDescription == "") {
    } else {
      setCount(count + 1);
      setBlogPosts([
        ...blogPosts,
        {
          id: count,
          title: inputTitle,
          description: inputDescription,
        },
      ]);
    }

    setInputTitle("");
    setInputDescription("");
  }

  return (
    <>
      <div className="layout-column justify-content-center align-items-center">
        <input
          className="w-100"
          type="text"
          placeholder="Enter Title"
          value={inputTitle}
          onChange={handleTitle}
          data-testid="title-input"
        />
        <textarea
          className="mt-10 w-100"
          placeholder="Enter Description"
          value={inputDescription}
          onChange={handleDescription}
          data-testid="description-input"
        />
      </div>
      <button
        data-testid="create-button"
        className="mt-10"
        onClick={handleSubmit}
      >
        Create Post
      </button>
    </>
  );
}

export default Input;
