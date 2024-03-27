import React, { useEffect, useState } from "react";
import { Link, Outlet, useParams, useLocation } from "react-router-dom";
import { Podcast } from "../../PodcastList/models/Podcast";
import "../../../styles/PodcastDetails/PodcastLayout.css";

export default function PodcastLayout() {
  const { podcastId } = useParams();
  const location = useLocation();
  const [podcast, setPodcast] = useState<Podcast>();

  useEffect(() => {
    const data = location.state?.data;
    if (data) setPodcast(data);
    if (!data) console.log("Does not find data in location");
  }, []);

  return (
    <>
      <Link
        to={`/podcast/${podcastId}`}
        state={{ data: podcast }}
        className="no-underline"
      >
        <div className="single-card">
          <img
            src={podcast?.image}
            alt={podcast?.title}
            className="shared-podcast-img"
          />
          <h2>{podcast?.title}</h2>
          <h3>Description</h3>
          <p>{podcast?.summary}</p>
        </div>
      </Link>
      <Outlet />
    </>
  );
}
