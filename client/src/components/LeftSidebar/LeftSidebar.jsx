import React from "react";
import { Link } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import PersonIcon from "@mui/icons-material/Person";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/userSlice";
import toast from "react-hot-toast";

const LeftSidebar = () => {
  const { currentUser } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());

    toast.success("Successfully logged out!", {
      position: "top-right",
    });
  };

  return (
    <>
      {/* <div classNameName="flex flex-col h-full md:h-[90vh] justify-between mr-6">
      <div classNameName="mt-6 flex flex-col space-y-4">
        <Link to="/comlanding">
          <div classNameName="flex items-center space-x-6 px-2 py-2 hover:bg-slate-200 rounded-full cursor-pointer">
            <HomeIcon fontSize="large" />
            <p>Stories</p>
          </div>
        </Link>
        <Link to="/explore">
          <div classNameName="flex items-center space-x-6 px-2 py-2 hover:bg-slate-200 rounded-full cursor-pointer">
            <TagIcon fontSize="large" />
            <p>Explore</p>
          </div>
        </Link>
        <Link to={`/profile/${currentUser._id}`}>
          <div classNameName="flex items-center space-x-6 px-2 py-2 hover:bg-slate-200 rounded-full cursor-pointer">
            <PersonIcon fontSize="large" />
            <p>Profile</p>
          </div>
        </Link>
      </div>
      <div classNameName="flex justify-between">
        <div>
          <p classNameName="font-bold">{currentUser.username}</p>
          <p classNameName="font-bold">@{currentUser.username}</p>
        </div>
        <div>
          <Link to="/signin">
            <button
              classNameName="bg-red-500 px-4 py-2 text-white rounded-full"
              onClick={handleLogout}
            >
              Logout
            </button>
          </Link>
        </div>
      </div>
    </div> */}
      <div className="hidden lg:col-span-3 lg:block xl:col-span-2">
        <nav aria-label="Sidebar" className="sticky top-4 divide-y divide-gray-300">
          <div className="space-y-1 pb-8">
            <Link 
              to="/comlanding"
              className="bg-gray-200 text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md"
              aria-current="page"
             
              x-state-description='Current: "bg-gray-200 text-gray-900", Default: "text-gray-700 hover:bg-gray-50"'
            >
              <svg
                className="text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                x-description="Heroicon name: outline/home"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                ></path>
              </svg>
              <span className="truncate">Story</span>
            </Link>

            <Link 
              to="/explore"
              className="text-gray-700 hover:bg-gray-50 group flex items-center px-3 py-2 text-sm font-medium rounded-md"
              x-state-description='undefined: "bg-gray-200 text-gray-900", undefined: "text-gray-700 hover:bg-gray-50"'
            >
              <svg
                className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                x-description="Heroicon name: outline/fire"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
                ></path>
              </svg>
              <span className="truncate">Stories to Discover</span>
            </Link>

            <Link
              to={`/profile/${currentUser._id}`}
              className="text-gray-700 hover:bg-gray-50 group flex items-center px-3 py-2 text-sm font-medium rounded-md"
              x-state-description='undefined: "bg-gray-200 text-gray-900", undefined: "text-gray-700 hover:bg-gray-50"'
            >
              <svg
                className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                x-description="Heroicon name: outline/user-group"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                ></path>
              </svg>
              <span className="truncate">Profile</span>
            </Link>

            
          </div>
          <div className="pt-10">
            <p
              className="px-3 text-sm font-medium text-gray-500"
              id="name"
            >
               Hii {currentUser.username} wanna go ? Don't forget  to add your story!
            </p>
            <div className="mt-3 space-y-2" aria-labelledby="communities-headline">
              <Link
                to='/signin'
                className="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              >
                <span className="truncate" onClick={handleLogout}>Logout</span>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default LeftSidebar;
