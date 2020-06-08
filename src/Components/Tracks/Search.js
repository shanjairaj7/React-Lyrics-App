import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export const SearchContext = createContext();

function Search(props) {
  const [state, setState] = useState("");
  const [result, setResult] = useState({});
  console.log(state);

  const [loading, setLoading] = useState(true);

  const getTrack = (e) => {
    let apiKey = "563b5892cb1b463c423624cd18653c0f";
    e.preventDefault();
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${state}&page_size=10&page=1&s_track_rating=desc&apikey=${apiKey}`
      )
      .then((response) => {
        setResult(response.data.message.body.track_list);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const changeInput = (e) => {
    setState(e.target.value);
    getTrack(e);
  };

  return (
    <div>
      <form onSubmit={getTrack}>
        <label className="font-medium mb-2 block">Search for a Track</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
          id="username"
          type="text"
          placeholder="Track name"
          value={state}
          onChange={(e) => changeInput(e)}
        ></input>
      </form>
      <h1 className="text-xl border-b">Search Results</h1>
      <div>
        {loading
          ? ""
          : result.map((res) => (
              <Link
                to={`lyrics/track/${res.track.track_id}/${res.track.commontrack_id}`}
              >
                <div
                  key={res.track.track_id}
                  className="bg-gray-300 mb-3 rounded p-3"
                >
                  <h1 className="text-1xl">
                    <span className="font-medium">Track : </span>
                    {res.track.track_name}
                  </h1>
                  <div className="mt-3">
                    <h1>
                      <span className="font-medium">Artist Name : </span>
                      {res.track.artist_name}
                    </h1>
                    <div>
                      <h1>
                        <span className="font-medium">Album ID : </span>
                        {res.track.album_id}
                      </h1>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
      </div>
    </div>
  );
}

export default Search;
