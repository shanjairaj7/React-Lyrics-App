import React, { useContext } from "react";
import { Context } from "../../Context/Apicontext";
import Track from "./Track";
import { Circular } from "styled-loaders-react";
import Search from "./Search";

function Tracks() {
  const { tracks, change } = useContext(Context);
  return (
    <React.Fragment>
      {tracks.loading ? (
        <div>
          <Circular color="black" size="40px" />
        </div>
      ) : (
        <div>
          <Search />
          <div>
            <h1 className="font-medium border-b border-gray-200 text-5xl my-3">
              <span>Top 10 Tracks</span>
            </h1>
          </div>
          <div className="grid grid-cols-2 col-gap-20">
            {tracks.track_list.map((track) => (
              <Track track={track} key={track.track.album_id} />
            ))}
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default Tracks;
