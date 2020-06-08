import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { Circular } from "styled-loaders-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Moment from "react-moment";
import {
  faCompactDisc,
  faMusic,
  faMicrophoneSlash,
  faCopyright,
  faHistory,
  faArrowCircleLeft,
} from "@fortawesome/free-solid-svg-icons";

function Lyrics() {
  const [lyrics, setLyrics] = useState({});
  const [track, setTrack] = useState({});
  const [loading, setLoading] = useState(true);

  const { id, commonid } = useParams();

  useEffect(() => {
    let apiKey = "563b5892cb1b463c423624cd18653c0f";
    setLoading(true);
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&apikey=${apiKey}`
      )
      .then((response) => {
        setLyrics(response.data.message.body.lyrics);
        console.log(response.data);
        setLoading(true);
        return axios.get(
          `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${id}&apikey=${apiKey}`
        );
      })
      .then((response) => {
        setTrack(response.data.message.body.track);
        setLoading(false);
      })
      .catch((error) => console.log("Error"));
  }, []);

  if (loading) {
    return (
      <div>
        <Circular width="40px" color="black" />
      </div>
    );
  }
  var explicit = function () {
    if (lyrics.explicit == 0) {
      return "No";
    } else {
      return "Yes";
    }
  };
  return (
    <div className="mb-10 p-10">
      <div>
        <Link
          to="/"
          className="bg-gray-400 py-2 px-4 mb-10 hover:shadow-md block w-2/5 text-center"
        >
          <FontAwesomeIcon icon={faArrowCircleLeft} className="mr-2" />
          Go Back
        </Link>
      </div>
      <div className="p-3 px-5 rounded text-xl bg-gray-300">
        <FontAwesomeIcon icon={faCompactDisc} className="" />
        <span className="">Track:</span>
        {track.album_name}
      </div>
      <div className="p-3 mt-4  ">
        <div className="text-xl my-2 text-gray-800">
          <FontAwesomeIcon icon={faMusic} /> Lyrics:
        </div>
        {lyrics.lyrics_body ? lyrics.lyrics_body : "No Lyrics"}
      </div>
      <div className="grid grid-cols-3 gap-3 rounded my-2">
        <div className="p-3 bg-gray-300 my-2">
          <span className="font-medium">Artist Name: </span>
          {track.artist_name}
        </div>
        <div className="p-3 bg-gray-300 my-2 rounded my-2">
          <span className="font-medium">Album Id: </span>
          <span className="">{track.album_id}</span>
        </div>{" "}
        <div className="p-3 bg-gray-300 my-2 rounded my-2 ">
          <span className="font-medium">
            <FontAwesomeIcon icon={faMicrophoneSlash} />
            Explicit:
          </span>
          <span className="ml-2"> {explicit()}</span>
        </div>
      </div>

      <div className="">
        <div className="w-full border border-gray-500 p-3 ">
          <span className="font-medium">
            <FontAwesomeIcon icon={faCopyright} className="mr-1" />
            Copyright:
          </span>
          <span className="ml-2"> {lyrics.lyrics_copyright}</span>
        </div>
      </div>
      <div className="bg-gray-200 py-2 px-4 mt-6 text-sm text-gray-600">
        <span>
          <FontAwesomeIcon icon={faHistory} /> Updated time :{" "}
        </span>
        <span>
          <Moment format="MM/DD/YYYY">{lyrics.updated_time}</Moment>
        </span>
      </div>
    </div>
  );
}

export default Lyrics;
