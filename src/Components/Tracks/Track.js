import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompactDisc, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Track({ track, onClick }) {
  return (
    <div className="py-3 px-3 bg-white shadow-md mb-8">
      <h1 className="text-2xl font-medium">Track: {track.track.album_name}</h1>
      <div className="text-sm mt-2">
        <h2>
          <span className="font-medium">
            <FontAwesomeIcon icon={faCompactDisc} /> Artist:
          </span>
          {track.track.artist_name}
        </h2>
        <h2>
          <span className="font-medium">
            <FontAwesomeIcon icon={faStar} /> Track Rating:
          </span>
          {track.track.track_rating}
        </h2>
      </div>
      <Link
        to={`/lyrics/track/${track.track.track_id}/${track.track.commontrack_id}`}
      >
        <button className="mt-3 py-2 w-full px-5 bg-gray-700 text-white">
          View Track
        </button>
      </Link>
    </div>
  );
}

export default Track;
