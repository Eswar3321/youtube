import React from 'react';

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-4 m-2 w-91 shadow-2xl rounded-4xl">
      <img
        src={thumbnails.medium.url}
        alt="thumbnail"
        className="rounded-2xl"
      />
      <ul>
        <li className="text-lg font-bold mt-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount}</li>
      </ul>
    </div>
  );
};

export default VideoCard;
