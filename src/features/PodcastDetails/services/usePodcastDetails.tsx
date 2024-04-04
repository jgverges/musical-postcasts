import { useEffect, useState } from "react";
import {
  PodcastDetail,
  Episode,
  Results,
} from "../models/PodcastDetailsResponse";
import { useLoading } from "../../../common/contexts/LoadingContext";
import { getPodcastDetailWithCache } from "../../../common/api/fetchApiData";

export function usePodcastDetails(podcastId: string | undefined): {
  results: (PodcastDetail | Episode)[] | null;
  error: string | null;
} {
  const [results, setResults] = useState<(PodcastDetail | Episode)[] | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);
  const { setLoading } = useLoading();

  useEffect(() => {
    const abortCont = new AbortController();
    if (!podcastId) return;

    const fetchPodcastDetails = async () => {
      try {
        setLoading(true);
        const cachedData = (await getPodcastDetailWithCache(
          podcastId,
          abortCont.signal
        )) as Results[];
        if (cachedData) {
          setResults(cachedData);
          return;
        }
      } catch (error) {
        if (abortCont.signal.aborted) {
          console.log("clean up fetch");
        } else {
          setError("An error occurred while fetching podcast details");
        }
      } finally {
        if (!abortCont.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchPodcastDetails();

    return () => {
      abortCont.abort();
    };
  }, [podcastId, setLoading]);

  return { results, error };
}

export default usePodcastDetails;
