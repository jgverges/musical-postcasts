import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import EpisodeDetails from "./features/EpisodeDetails/components/EpisodeDetail";
import NotFoundPage from "./features/common/NotFoundPage";
import { useNavigate } from "react-router-dom";
import PodcastList from "../src/features/PodcastList/components/PodcastList";
import PodcastDetails from "../src/features/PodcastDetails/components/PodcastDetails";
import PodcastLayout from "./features/PodcastDetails/components/PodcastLayout";
import "./styles/main.css";

function App() {
  return (
    <>
      <h1 style={{ color: "blue", marginLeft: "3rem" }}>
        <Link to="/">Podcaster</Link>
      </h1>
      <Routes>
        <Route path="/" element={<PodcastList />} />
        <Route path="/podcast" element={<PodcastLayout />}>
          <Route path=":podcastId" index element={<PodcastDetails />} />
          <Route
            path=":podcastId/episode/:episodeId"
            element={<EpisodeDetails />}
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
export default App;
