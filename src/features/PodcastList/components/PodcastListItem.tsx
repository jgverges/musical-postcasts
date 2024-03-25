import React from "react";
import { Link } from "react-router-dom";
import { Podcast } from "../models/Podcast";
import "../../../styles/PodcastList/PodcastListItem.css";

interface PodcastListItemProps {
  podcast: Podcast;
}
function PodcastListItem({ podcast }: PodcastListItemProps) {
  return (
    <>
      <Link
        to={`/podcast/${podcast.podcastId}`}
        state={{ data: podcast }}
        className="no-underline"
      >
        <div className="card">
          <img src={podcast.image} alt={podcast.title} />
          <div className="card-details">
            <h2>{podcast.title.toUpperCase()}</h2>
            <p>{podcast.artist}</p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default PodcastListItem;
