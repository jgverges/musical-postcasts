import React from "react";
import { useLocation } from "react-router-dom";
import "../../../styles/EpisodeDetail.css";
import { extractTitleFromTrack } from "../../common/utils/FormattingHelpers";

function EpisodeDetails() {
  const location = useLocation();

  const receivedData = location.state?.data;
  const { episodeUrl, trackName, description } = receivedData;

  return (
    <div className="episode-detail">
      <h2 className="episode-detail-title">
        {extractTitleFromTrack(trackName)}
      </h2>
      <p>{description} </p>
      <audio controls>
        <source src={episodeUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
export default EpisodeDetails;
