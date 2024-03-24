import { useEffect, useState } from "react";
import { PodcastDetail, Episode } from "../models/PodcastDetailsResponse";
import {
  ALLORIGIN_URL,
  PODCAST_DETAIL_BASE_URL,
} from "./podcastDetailsApiUrls";

export function usePodcastDetails(podcastId: string | undefined): {
  results: (PodcastDetail | Episode)[] | null;
  error: string | null;
} {
  const [results, setResults] = useState<(PodcastDetail | Episode)[] | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);

  const PROXY_URL =
    ALLORIGIN_URL +
    encodeURIComponent(`${PODCAST_DETAIL_BASE_URL}&id=${podcastId}`);

  useEffect(() => {
    if (!podcastId) return;

    const podcastDetailsSelected = `podcastDetails-${podcastId}`;
    const podcastDetailsTimestampSelected = `podcastDetails-${podcastId}_Timestamp`;

    const fetchPodcastDetails = async () => {
      try {
        const storedDetails = localStorage.getItem(podcastDetailsSelected);
        const storedTimestamp = localStorage.getItem(
          podcastDetailsTimestampSelected
        );

        if (storedDetails && storedTimestamp) {
          const lastFetchTime = new Date(storedTimestamp).getTime();
          const currentTime = new Date().getTime();
          const oneDayInMilliseconds = 24 * 60 * 60 * 1000;

          if (currentTime - lastFetchTime < oneDayInMilliseconds) {
            setResults(JSON.parse(storedDetails));
            return;
          }
        } else {
          const response = await fetch(PROXY_URL);
          const data = await response.json();
          const { results } = await JSON.parse(data.contents);
          localStorage.setItem(podcastDetailsSelected, JSON.stringify(results));
          localStorage.setItem(
            podcastDetailsTimestampSelected,
            new Date().toISOString()
          );
          setResults(results);
        }
      } catch (error) {
        setError("An error occurred while fetching podcast details");
        console.error(
          "An error occurred while fetching podcast details",
          error
        );
      }
    };

    fetchPodcastDetails();
  }, [podcastId]);
  if (error) console.log(error);

  return { results, error };
}

export default usePodcastDetails;
