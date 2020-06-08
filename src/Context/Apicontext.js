import React, { useContext, useState, createContext, useEffect } from "react";
import axios from "axios";
import { SearchContext } from "../Components/Tracks/Search";

export const Context = createContext();

const ContextProvider = (props) => {
  const [tracks, setTracks] = useState({
    track_list: null,
    loading: true,
  });

  let apiKey = "563b5892cb1b463c423624cd18653c0f";
  let endpoint = `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=it&f_has_lyrics=1&apikey=${apiKey}`;

  useEffect(() => {
    setTracks({
      track_list: null,
      loading: true,
    });
    axios({
      method: "GET",
      url: endpoint,
    })
      .then((response) => {
        setTracks({
          track_list: response.data.message.body.track_list,
          loading: false,
        });
        console.log(response.data.message.body.track_list);
      })

      .catch((error) => {
        console.log("error");
        setTracks({
          track_list: null,
          loading: false,
        });
        return <div>Error</div>;
      });
  }, []);

  return (
    <Context.Provider value={{ tracks }}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;

// track_list: [
//   { track: { track_name: "Hare krishna" } },
//   { track: { track_name: "Hi" } },
// ],
