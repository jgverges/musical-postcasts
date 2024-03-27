import React from "react";
import { Route, Routes } from "react-router-dom";
import EpisodeDetails from "./features/EpisodeDetails/components/EpisodeDetail";
import NotFoundPage from "./features/common/NotFoundPage";
import PodcastList from "../src/features/PodcastList/components/PodcastList";
import PodcastDetails from "../src/features/PodcastDetails/components/PodcastDetails";
import PodcastLayout from "./features/PodcastDetails/components/PodcastLayout";
import "./styles/main.css";
import { LoadingProvider } from "./features/common/LoadingContext";
import Header from "./features/common/Header";

function App() {
  return (
    <LoadingProvider>
      <main className="app">
        <Header />
        <div className="main-content">
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
        </div>
      </main>
    </LoadingProvider>
  );
}
export default App;
