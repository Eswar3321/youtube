import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice.js';
import { useSearchParams } from 'react-router-dom';
import { GOOGLE_API_KEY } from '../utils/constant.js';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [video, setVideo] = useState({});
  const videoId = searchParams.get('v');
  // const title = video.title;
  const dispatch = useDispatch();
  const getVideoDetails = async (id) => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${GOOGLE_API_KEY}`
    );
    const json = await data.json();
    const { snippet } = json.items[0];
    setVideo(snippet);
  };
  useEffect(() => {
    dispatch(closeMenu());
    getVideoDetails(videoId);
  }, []);
  return (
    <div className="p-5">
      <div className="flex max-sm:flex-col">
        <div>
          <iframe
            width="100%"
            className="max-sm:h-[215px] h-[415px]"
            src={'https://www.youtube.com/embed/' + searchParams.get('v')}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <h3 className="font-bold mt-3 text-2xl">{video.title}</h3>
          <div className="flex gap-2 items-center py-4">
            <span className="p-2 rounded-full bg-gray-300">🏡</span>
            <h3 className="font-bold">{video.channelTitle}</h3>
            <button className="bg-black text-white rounded-full px-4 py-1">
              Subscribe
            </button>
          </div>
        </div>
        <div className="px-2 max-sm:w-[325px] w-[450px]">
          <LiveChat />
        </div>
      </div>
      <div className="w-full">
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
