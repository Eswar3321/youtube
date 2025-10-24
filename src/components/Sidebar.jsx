import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    isMenuOpen && (
      <div className="flex flex-col p-4 gap-4 w-44 max-sm:fixed bg-amber-50 max-sm:rounded-3xl">
        <div className="border-b-1 pb-4 border-gray-400">
          <ul className="px-2">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Shorts</li>
            <li>Subscription</li>
          </ul>
        </div>
        <div className="border-b-1 pb-4 border-gray-400">
          <h3 className="text-2xl font-bold">You</h3>
          <ul className="px-2">
            <li>History</li>
            <li>Playlist</li>
            <li>Watch Later</li>
            <li>Liked Videos</li>
          </ul>
        </div>
        <div className="border-b-1 pb-4 border-gray-400">
          <h3 className="text-2xl font-bold">Explore</h3>
          <ul className="px-2">
            <li>Shopping</li>
            <li>Music</li>
            <li>Films</li>
          </ul>
        </div>
        <div className="">
          <h3 className="text-2xl font-bold">More from Youtube</h3>
          <ul className="px-2">
            <li>Youtube Premium</li>
            <li>Youtube Music</li>
            <li>Youtube Kids</li>
          </ul>
        </div>
      </div>
    )
  );
};

export default Sidebar;
