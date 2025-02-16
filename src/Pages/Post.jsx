import React, { useState } from "react";
import Layout from "../components/Layout";
import PostItem from "./PostItem";

const Post = () => {
  const [postText, setPostText] = useState("");

  const handlePostSubmit = (e) => {
    e.preventDefault();
    // Handle post submission logic here (e.g., API call, state update)
    console.log("Post submitted:", postText);
    setPostText(""); // Clear the textbox after posting
  };


  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Create Post Section */}
        <div className="mb-8 p-4 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Create a Post</h2>
          <form onSubmit={handlePostSubmit}>
            <textarea
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
              className="w-full h-24 p-2 border rounded-md mb-4"
              placeholder="What's on your mind?"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Post
            </button>
          </form>
        </div>

        {/* Display Posts Section - Static Content */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Posts</h2>

          <PostItem
            fullName="John Doe"
            text="This is a static post.  No mapping needed!"
            datetime="2024-07-27, 09:00"
          />
          <PostItem
            fullName="Jane Smith"
            text="Another static post example."
            datetime="2024-07-27, 10:30"
          />
          <PostItem
            fullName="Peter Jones"
            text="Yet another one!  Static content is easy."
            datetime="2024-07-27, 12:00"
          />
          <PostItem
            fullName="Alice Johnson"
            text="Four posts, all static!"
            datetime="2024-07-27, 14:00"
          />
          <PostItem
            fullName="Bob Williams"
            text="Last static post"
            datetime="2024-07-27, 15:30"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Post;
