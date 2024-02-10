import React from "react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import MainTweet from "../../components/MainTweet/MainTweet";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import Signin from "../Signin/Signin";

import { useSelector } from "react-redux";

const ComLanding = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="w-full py-[40px]">
      {!currentUser ? (
        <Signin />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4">
          <div className="px-6">
            <LeftSidebar />
          </div>
          <div className="col-span-3 border-x-2 border-t-slate-800 px-6">
            <MainTweet />
          </div>
        </div>
      )}
    </div>
  );
};

export default ComLanding;
