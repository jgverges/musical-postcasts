import React, { useEffect, useState } from "react";
import { Link, Outlet, useParams, useLocation } from "react-router-dom";
import { Podcast } from "../../PodcastList/models/Podcast";
import "../../../styles/PodcastLayout.css";

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
    <div className="shared-podcast">
      <Link
        to={`/podcast/${podcastId}`}
        state={{ data: podcast }}
        className="inline-div"
      >
        <div className="single-card">
          <img
            src={podcast?.image}
            alt={podcast?.title}
            className="shared-podcast-img"
          />
          <div className="details">
            <h2>{podcast?.title}</h2>
            <h4>Description</h4>
            <p>{podcast?.summary}</p>
          </div>
        </div>
      </Link>
      <Outlet />
    </div>
  );
}
