import axios from "axios";
import React, { useState } from "react";
import formatDistance from "date-fns/formatDistance";

import { useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Tweet = ({ tweet, setData }) => {
  const { currentUser } = useSelector((state) => state.user);

  const [userData, setUserData] = useState();

  const dateStr = formatDistance(new Date(tweet.createdAt), new Date());
  const location = useLocation().pathname;
  const { id } = useParams();

  console.log(location);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const findUser = await axios.get(`/users/find/${tweet.userId}`);

        setUserData(findUser.data);
      } catch (err) {
        console.log("error", err);
      }
    };

    fetchData();
  }, [tweet.userId, tweet.likes]);

  const handleLike = async (e) => {
    e.preventDefault();

    try {
      const like = await axios.put(`/tweets/${tweet._id}/like`, {
        id: currentUser._id,
      });

      if (location.includes("profile")) {
        const newData = await axios.get(`/tweets/user/all/${id}`);
        setData(newData.data);
      } else if (location.includes("explore")) {
        const newData = await axios.get(`/tweets/explore`);
        setData(newData.data);
      } else {
        const newData = await axios.get(`/tweets/timeline/${currentUser._id}`);
        setData(newData.data);
      }
    } catch (err) {
      console.log("error", err);
    }
  };

  return (
    <div className="my-3 shadow px-[10px] rounded-md py-1">
      {userData && (
        <>
          {/* <div className="flex space-x-2"> */}
            {/* <img src="" alt="" /> */}
            {/* <Link to={`/profile/${userData._id}`}> */}
              {/* <h3 className="font-bold">{userData.username}</h3> */}
            {/* </Link> */}

            {/* <span className="font-normal">@{userData.username}</span> */}
            {/* <p> - {dateStr}</p> */}
          {/* </div> */}

          {/* <p>{tweet.description}</p> */}
          {/* <button onClick={handleLike}> */}
            {/* {tweet.likes.includes(currentUser._id) ? ( */}
              {/* <FavoriteIcon className="mr-2 my-2 cursor-pointer"></FavoriteIcon> */}
            {/* ) : ( */}
              {/* <FavoriteBorderIcon className="mr-2 my-2 cursor-pointer"></FavoriteBorderIcon> */}
            {/* )} */}
            {/* {tweet.likes.length}/</> */}
          {/*  </button> */}
          <article aria-labelledby="question-title-81614">
    <div class="flex space-x-3">
        <div class="flex-shrink-0">
            <img class="h-10 w-10 rounded-full" src={userData?.profilePicture} alt="" />
        </div>
        <div class="min-w-0 flex-1">
            <p class="text-sm font-medium text-gray-900">
          <Link to={`/profile/${userData._id}`}> 
              <h3 className="font-bold">{userData.username}</h3>
            </Link>
            </p>
            <p class="text-sm text-gray-500">
                <a href="#" class="hover:underline">
                    <time datetime="2020-12-09T11:43:00">{dateStr} ago</time>
                </a>
            </p>
        </div>
    </div>
    <h2 id="question-title-81614" class="mt-4 text-base font-medium text-gray-500">@{userData.username}</h2>
    <div class="mt-2 space-y-4 text-sm text-gray-700">
        <p>{tweet.description}</p>
    </div>
    <div class="mt-6 flex justify-between space-x-8">
        <div class="flex space-x-6">
            <span class="inline-flex items-center text-sm">
                {/* <button type="button" class="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                    <svg class="h-5 w-5" x-description="Heroicon name: mini/hand-thumb-up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path d="M1 8.25a1.25 1.25 0 112.5 0v7.5a1.25 1.25 0 11-2.5 0v-7.5zM11 3V1.7c0-.268.14-.526.395-.607A2 2 0 0114 3c0 .995-.182 1.948-.514 2.826-.204.54.166 1.174.744 1.174h2.52c1.243 0 2.261 1.01 2.146 2.247a23.864 23.864 0 01-1.341 5.974C17.153 16.323 16.072 17 14.9 17h-3.192a3 3 0 01-1.341-.317l-2.734-1.366A3 3 0 006.292 15H5V8h.963c.685 0 1.258-.483 1.612-1.068a4.011 4.011 0 012.166-1.73c.432-.143.853-.386 1.011-.814.16-.432.248-.9.248-1.388z"></path>
                    </svg>
                    <span class="font-medium text-gray-900">29</span>
                    <span class="sr-only">likes</span>
                </button> */}
                <button onClick={handleLike}> 
            {tweet.likes.includes(currentUser._id) ? ( 
             <FavoriteIcon className="mr-2 my-2 cursor-pointer"></FavoriteIcon> 
            ) : ( 
              <FavoriteBorderIcon className="mr-2 my-2 cursor-pointer"></FavoriteBorderIcon> 
             )} 
             {tweet.likes.length}
          </button>
            </span>
            <span class="inline-flex items-center text-sm">
                <button type="button" class="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                    <svg class="h-5 w-5" x-description="Heroicon name: mini/chat-bubble-left-ellipsis" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M10 2c-2.236 0-4.43.18-6.57.524C1.993 2.755 1 4.014 1 5.426v5.148c0 1.413.993 2.67 2.43 2.902.848.137 1.705.248 2.57.331v3.443a.75.75 0 001.28.53l3.58-3.579a.78.78 0 01.527-.224 41.202 41.202 0 005.183-.5c1.437-.232 2.43-1.49 2.43-2.903V5.426c0-1.413-.993-2.67-2.43-2.902A41.289 41.289 0 0010 2zm0 7a1 1 0 100-2 1 1 0 000 2zM8 8a1 1 0 11-2 0 1 1 0 012 0zm5 1a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path>
                    </svg>
                    <span class="font-medium text-gray-900">11</span>
                    <span class="sr-only">replies</span>
                </button>
            </span>
            <span class="inline-flex items-center text-sm">
                <button type="button" class="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                    <svg class="h-5 w-5" x-description="Heroicon name: mini/eye" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"></path>
                        <path fill-rule="evenodd" d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path>
                    </svg>
                    <span class="font-medium text-gray-900">2.7k</span>
                    <span class="sr-only">views</span>
                </button>
            </span>
        </div>
        <div class="flex text-sm">
            <span class="inline-flex items-center text-sm">
                <button type="button" class="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                    <svg class="h-5 w-5" x-description="Heroicon name: mini/share" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path d="M13 4.5a2.5 2.5 0 11.702 1.737L6.97 9.604a2.518 2.518 0 010 .792l6.733 3.367a2.5 2.5 0 11-.671 1.341l-6.733-3.367a2.5 2.5 0 110-3.475l6.733-3.366A2.52 2.52 0 0113 4.5z"></path>
                    </svg>
                    <span class="font-medium text-gray-900">Share</span>
                </button>
            </span>
        </div>
    </div>
</article>

        </>
      )}
    </div>
  );
};

export default Tweet;
