import React from "react";
import { Link } from "react-router-dom";
import { PodcastFiltered } from "../models/PodcastFiltered";
import "../../../styles/PodcastList/PodcastListItem.css";

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
        to={`/podcast/${podcast.podcastId}`}
        state={{ data: podcast }}
        className="no-underline"
      >
        <div className="card">
          <img src={image60Height?.label} alt={podcast.title} />
          <div className="card-details">
            <h2>{podcast.title.toUpperCase().substring(0)}</h2>
            <p>{podcast.artist}</p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default PodcastListItem;
