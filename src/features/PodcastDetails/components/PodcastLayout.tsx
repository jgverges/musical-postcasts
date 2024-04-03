import React, { useEffect, useState } from "react";
import { Link, Outlet, useParams, useLocation } from "react-router-dom";
import { PodcastFiltered } from "../../PodcastList/models/PodcastFiltered";
import "./PodcastLayout.css";

export default function PodcastLayout() {
  const { podcastId } = useParams();
  const location = useLocation();
  const [podcast, setPodcast] = useState<PodcastFiltered>();

  useEffect(() => {
    const data = location.state?.data;
    if (data) setPodcast(data);
    if (!data) console.log("Does not find data in location");
  }, []);
  const image170Height = podcast?.imageList.find(
    (image) => image.attributes.height === "170"
  );

  return (
    <>
      <Link
        to={`/podcast/${podcastId}`}
        state={{ data: podcast }}
        className="no-underline"
      >
        <article className="single-card">
          <img
            src={image170Height?.label}
            alt={podcast?.title}
            className="shared-podcast-img"
          />
          <h2>{podcast?.title}</h2>
          <h3>Description</h3>
          <p>{podcast?.summary}</p>
        </article>
      </Link>
      <Outlet />
    </>
  );
}
