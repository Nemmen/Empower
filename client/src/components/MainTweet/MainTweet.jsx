import React, { useState } from "react";
import TimelineTweet from "../TimelineTweet/TimelineTweet";

import { useSelector } from "react-redux";
import axios from "axios";

const MainTweet = () => {
  const [tweetText, setTweetText] = useState("");

  const { currentUser } = useSelector((state) => state.user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const submitTweet = await axios.post("/tweets", {
        userId: currentUser._id,
        description: tweetText,
      });
      window.location.reload(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {currentUser && (
        <p className="font-bold pl-2 my-2">{currentUser.username}</p>
      )}

      <form className="border-b-2 pb-6">
        <textarea
          onChange={(e) => setTweetText(e.target.value)}
          type="text"
          placeholder="What's happening"
          maxLength={280}
          className="bg-slate-200 rounded-lg w-full p-2"
        ></textarea>
        <button
          onClick={handleSubmit}
          className=" bg-[#6a65ff] text-white font-medium transition-all duration-200 border-0 rounded-full hover:bg-[#273b47] hover:text-white py-1 px-5 "
        >
          Post
        </button>
      </form>
      <TimelineTweet />
    </div>
  );
};

export default MainTweet;
