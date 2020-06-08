import React from "react";
import Tracks from "../Tracks/Tracks";
import ContextProvider from "../../Context/Apicontext";
import Lyrics from "../Tracks/Lyrics";
import { SearchContext } from "../Tracks/Search";

function Index() {
  return (
    <React.Fragment>
      <ContextProvider>
        <Tracks />
      </ContextProvider>
    </React.Fragment>
  );
}

export default Index;
