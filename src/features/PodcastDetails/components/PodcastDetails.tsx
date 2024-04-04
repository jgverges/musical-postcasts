import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  extractTitleFromTrack,
  isoDateToDayMonthYear,
  millisecondsToHoursMinutes,
} from "../../../common/utils/FormattingHelpers";
import "./PodcastDetails.css";
import usePodcastDetails from "../services/usePodcastDetails";
import { PODCAST_ROUTE } from "../../../common/constants/routesConstants";

function PostcastDetails() {
  const { podcastId } = useParams();
  const { results, error } = usePodcastDetails(podcastId);

  if (error) {
    console.log(error);
    return;
  }

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
              if ("episodeUrl" in detail) {
                if (
                  !detail.trackName ||
                  !detail.trackTimeMillis ||
                  !detail.releaseDate
                )
                  console.log(
                    `Missing information  in episode: ${detail?.collectionName}`
                  );
                return (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "even-row" : "odd-row"}
                  >
                    <td>
                      <Link
                        key={detail?.episodeUrl}
                        to={`${PODCAST_ROUTE}/${podcastId}/episode/${podcastId}`}
                        state={{ data: detail }}
                        className="no-underline"
                      >
                        {extractTitleFromTrack(detail.trackName)}
                      </Link>
                    </td>
                    <td>
                      <Link
                        key={detail?.episodeUrl}
                        to={`${PODCAST_ROUTE}/${podcastId}/episode/${podcastId}`}
                        state={{ data: detail }}
                        className="no-underline cell-black"
                      >
                        {isoDateToDayMonthYear(detail.releaseDate)}
                      </Link>
                    </td>
                    <td>
                      <Link
                        key={detail?.episodeUrl}
                        to={`${PODCAST_ROUTE}/${podcastId}/episode/${podcastId}`}
                        state={{ data: detail }}
                        className="no-underline cell-black"
                      >
                        {detail?.trackTimeMillis &&
                          millisecondsToHoursMinutes(detail.trackTimeMillis)}
                      </Link>
                    </td>
                  </tr>
                );
              }
            })}
        </tbody>
      </table>
    </section>
  );
}
export default PostcastDetails;
