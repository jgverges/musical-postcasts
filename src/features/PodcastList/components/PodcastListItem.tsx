import React from "react";
import { Link } from "react-router-dom";
import { PodcastFiltered } from "../models/PodcastFiltered";
import "./PodcastListItem.css";
import { PODCAST_ROUTE } from "../../../common/constants/routesConstants";

interface PodcastListItemProps {
  podcast: PodcastFiltered;
}
function PodcastListItem({ podcast }: PodcastListItemProps) {
  const image60Height = podcast?.imageList.find(
    (image) => image.attributes.height === "60"
  );
  return (
    <>
      <Link
        to={`${PODCAST_ROUTE}/${podcast.podcastId}`}
        state={{ data: podcast }}
        className="no-underline"
      >
        <article className="card">
          <img src={image60Height?.label} alt={podcast.title} />
          <div className="card-details">
            <h2>{podcast.title.toUpperCase().substring(0, 45)}</h2>
            <p>{podcast.artist}</p>
          </div>
        </article>
      </Link>
    </>
  );
}

export default PodcastListItem;
