import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice.js';
import { SEARCH_SUGGESTION_API } from '../utils/constant.js';
import { cacheResults } from '../utils/searchSlice.js';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  useEffect(() => {
    // API Call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSearchResult(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(SEARCH_SUGGESTION_API + searchQuery);
    const json = await data.json();
    setSearchResult(json[1]);
    // update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col gap-2 p-4 items-center shadow-lg">
      <div className="flex col-span-1 gap-2 items-center">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAADPz89LS0uWlpb39/eCgoKQkJCxsbH29vZiYmI4ODh0dHTX19empqbFxcXr6+sQEBDh4eEbGxu7u7s0NDR6enpXV1egoKDJyclvb28ODg6IiIhcXFwfHx8ZGRnwNjATAAACZUlEQVR4nO3dCW7CMBCFYRdIw75vbSm9/y2rqKgUVRo72NJoxv93gveUkGBj7BAAAAAAAAAAAAAAAAAAoAKrdjq0Y9qu+tVbH1/sOa7TC7baYZ/UJvZrZtpJnzZrkgputHNm2KRUPGinzHKIF3zVzpjpNVZwq50w2zbScKodMNtULjjRzlfARGw41o5XwFhsONeOV8BcbGj3ZX83Extqpyui8oY77XQFXMWGJ+14BZzEhlbHTX/JY6iBdrwCFmJDD48auWBYaufLtow0NP803cUKhoV2xEyRT6H9+zR6j3bO2ikznFMKhrDSzvm05GnhxuYgap40l3izHlmbcpuNekx53y7kdmDHts/lAwAAAAAAAAAAxjRvy5Edy7e+P1zsh9q/JfU23PfoN7hqx33KdZBa0O5i9ugy9h+f2jkzfKYUfNdOmeU9XtD6Sm95lXfwsFhfXqofwkU7YLZLpKF2vgLkgnYXC93Jy4bsvgrv5JeivS9r/w3Fhh/a8QrYiA210xVR+TX0/zn0/yz1/z708KiRC1bwvdT+2CI6JeV+fFjBGL+CeRrLT5vEubYK5kuD/znvjvffLQAAAAAAAAAAgCHO94myt9fXoddeXxOj+7XFFkD/srtsKHHPPff7Jrrf+9L//qVf2hEzRfegtX2PdmL3qXa+AuSC/vfz9r8nu/999a3v5t2Rn6ba6YqovKH/c2ZsDpseyWcFWV/l3ZFXettfqh/9I7D7c9cqODvP/H+7EhazW5tke5RwhmVoLI+Bk84h9X+WbLA7hko9DzhUcKZzx/m53AAAAAAAAAAAAAAAAABg0zfn21Nf0tdOJAAAAABJRU5ErkJggg=="
        />
        <a href="/">
          <img
            className="h-10 w-24"
            alt="youtube-logo"
            src="https://pngdownload.io/wp-content/uploads/2024/03/YouTube-logo-video-platform-social-media-transparent-PNG-image-jpg.webp"
          />
        </a>
      </div>
      <div>
        <div className="col-span-10 flex">
          <input
            type="text"
            className="w-3/4 border-2 px-4 py-2 border-gray-300 border-solid rounded-l-full"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border-0.5 border-solid px-4 py-1 bg-gray-300 rounded-r-full">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed p-4 bg-amber-50 w-1/3 rounded-3xl">
            <ul>
              {searchResult.map((s) => (
                <li className="cursor-pointer pb-2" key={s}>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1 flex justify-end">
        <img
          className="h-8"
          alt="user"
          src="data:image/png;base64,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"
        />
      </div>
    </div>
  );
};

export default Header;
