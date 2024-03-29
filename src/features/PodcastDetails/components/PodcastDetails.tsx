import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  extractTitleFromTrack,
  isoDateToDayMonthYear,
  millisecondsToHoursMinutes,
} from "../../common/utils/FormattingHelpers";
import "../../../styles/PodcastDetails/PodcastDetails.css";
import usePodcastDetails from "../services/usePodcastDetails";

function PostcastDetails() {
  const { podcastId } = useParams();
  const { results, error } = usePodcastDetails(podcastId);

  if (error) console.log(error);

  const resultsLength = results && results.length ? results.length - 1 : 0;
  return (
    <section className="episodes-list">
      <div className="episodes-counter">Episodes: {resultsLength}</div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {results &&
            results.map((detail, index) => {
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
                        {extractTitleFromTrack(detail.trackName)}
                      </Link>
                    </td>
                    <td>
                      <Link
                        key={detail?.episodeUrl}
                        to={`/podcast/${podcastId}/episode/${podcastId}`}
                        state={{ data: detail }}
                        className="no-underline cell-black"
                      >
                        {isoDateToDayMonthYear(detail.releaseDate)}
                      </Link>
                    </td>
                    <td>
                      <Link
                        key={detail?.episodeUrl}
                        to={`/podcast/${podcastId}/episode/${podcastId}`}
                        state={{ data: detail }}
                        className="no-underline cell-black"
                      >
                        {millisecondsToHoursMinutes(detail.trackTimeMillis)}
                      </Link>
                    </td>
                  </tr>
                );
            })}
        </tbody>
      </table>
    </section>
  );
}
export default PostcastDetails;
