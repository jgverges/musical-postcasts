import { useEffect, useState } from "react";
import { type PodcastFiltered } from "../models/PodcastFiltered";
import { useLoading } from "../../../common/contexts/LoadingContext";
import { PODCAST_LIST_URL } from "../../../common/constants/apiURLConstants";
import { getPodcastsFilteredWithCache } from "../../../common/api/fetchApiData";

function usePodcastList(): {
  podcasts: PodcastFiltered[] | null;
  error: string | null;
} {
  const [podcasts, setPodcasts] = useState<PodcastFiltered[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { setLoading } = useLoading();

  useEffect(() => {
    const abortCont = new AbortController();

    const fetchPodcasts = async () => {
      const podcastList = "podcastList";

      try {
        setLoading(true);
        const cachedList = await getPodcastsFilteredWithCache(
          PODCAST_LIST_URL,
          podcastList,
          abortCont.signal
        );
        if (cachedList) {
          setPodcasts(cachedList);
          return;
        }
      } catch (error) {
        if (abortCont.signal.aborted) {
          console.log("clean up fetch");
        } else {
          setError("An error occurred while fetching podcastList");
        }
      } finally {
        if (!abortCont.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchPodcasts();

    return () => abortCont.abort();
  }, [setLoading]);

  return { podcasts, error };
}

export default usePodcastList;
