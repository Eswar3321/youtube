import ChatMessage from './ChatMessage';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice.js';
import { generateRandomName, generateRandomMessage } from '../utils/helper.js';
const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const [liveMessage, setLiveMessage] = useState('');
  useEffect(() => {
    const i = setInterval(() => {
      // API Polling
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(20),
        })
      );
    }, 1000);
    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className="overflow-scroll flex flex-col-reverse h-[415px]">
        {chatMessages.map((c, i) => (
          <ChatMessage name={c.name} message={c.message} key={i} />
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: 'Eswar',
              message: liveMessage,
            })
          );
          setLiveMessage('');
        }}
      >
        <input
          type="text"
          placeholder="Comment here..."
          className="border p-2 rounded-2xl mr-2 my-2 max-sm:w-58 w-76"
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
          value={liveMessage}
        />
        <button className="bg-blue-500 text-white px-2 rounded-2xl">
          Submit
        </button>
      </form>
    </>
  );
};

export default LiveChat;
