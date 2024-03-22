import React from "react";
import { Link, useParams } from "react-router-dom";
import usePodcast from "../services/usePodcast";
import {
  isoDateToDayMonthYear,
  millisecondsToHoursMinutes,
} from "../../common/utils/dateConversor";
import "../../../styles/PodcastDetails.css";

function PostcastDetails() {
  const podcastDetails = usePodcast();
  const { podcastId } = useParams();

  const { results } = podcastDetails;

  return (
    <div className="episodes-list">
      <div className="episodes-counter">Episodes: {results.length - 1}</div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {results.map((detail, index) => {
            if ("episodeUrl" in detail)
              return (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "even-row" : "odd-row"}
                >
                  <td>
                    <Link
                      key={detail?.episodeUrl}
                      to={`/podcast/${podcastId}/episode/${podcastId}`}
                      state={{ data: detail }}
                      className="no-underline"
                    >
                      {detail.trackName}
                    </Link>
                  </td>
                  <td>
                    <Link
                      key={detail?.episodeUrl}
                      to={`/podcast/${podcastId}/episode/${podcastId}`}
                      state={{ data: detail }}
                      className="no-underline"
                    >
                      {isoDateToDayMonthYear(detail.releaseDate)}
                    </Link>
                  </td>
                  <td>
                    <Link
                      key={detail?.episodeUrl}
                      to={`/podcast/${podcastId}/episode/${podcastId}`}
                      state={{ data: detail }}
                      className="no-underline"
                    >
                      {millisecondsToHoursMinutes(detail.trackTimeMillis)}
                    </Link>
                  </td>
                </tr>
              );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default PostcastDetails;
