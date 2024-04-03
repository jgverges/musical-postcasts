import React from "react";
import { Route, Routes } from "react-router-dom";
import EpisodeDetails from "./features/EpisodeDetails/components/EpisodeDetail";
import NotFoundPage from "./common/components/NotFoundPage";
import PodcastList from "../src/features/PodcastList/components/PodcastList";
import PodcastDetails from "../src/features/PodcastDetails/components/PodcastDetails";
import PodcastLayout from "./features/PodcastDetails/components/PodcastLayout";
import "./styles.css";
import { LoadingProvider } from "./common/contexts/LoadingContext";
import Header from "./common/components/Header/Header";
import {
  EPISODE_DETAILS_ROUTE,
  PODCAST_DETAILS_ROUTE,
  PODCAST_ROUTE,
  ROOT_ROUTE,
} from "./common/constants/routesConstants";

function App() {
  return (
    <LoadingProvider>
      <main className="app">
        <Header />
        <div className="main-content">
          <Routes>
            <Route path={ROOT_ROUTE} element={<PodcastList />} />
            <Route path={PODCAST_ROUTE} element={<PodcastLayout />}>
              <Route
                path={PODCAST_DETAILS_ROUTE}
                index
                element={<PodcastDetails />}
              />
              <Route
                path={EPISODE_DETAILS_ROUTE}
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
