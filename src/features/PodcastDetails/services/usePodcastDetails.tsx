import { ParsedContents } from "../models/PodcastDetailsResponse";
import { fetchApiData } from "../../../common/api/fetchApiData";
import {
  ALLORIGIN_URL,
  PODCAST_DETAIL_BASE_URL,
} from "../../../common/constants/apiURLConstants";
import { useRequest } from "../../../common/api/useRequest";
import { DETAIL_CACHE_KEY } from "../../../common/constants/localStorageConstants";

async function fetchPodcastDetails(
  podcastId: string,
  abortController: AbortController
) {
  if (!podcastId) return null;
  const PROXY_URL =
    ALLORIGIN_URL +
    encodeURIComponent(`${PODCAST_DETAIL_BASE_URL}&id=${podcastId}`);
  const data = await fetchApiData(PROXY_URL, abortController.signal);
  if (!data) return null;
  const parsedContents = (await JSON.parse(data.contents)) as ParsedContents;
  const results = await parsedContents.results;
  return results;
}
export function usePodcastDetails(podcastId: string) {
  const { data: results, error } = useRequest({
    fetchFn: (abortController: AbortController) =>
      fetchPodcastDetails(podcastId, abortController),
    cachekey: `${DETAIL_CACHE_KEY}-${podcastId}`,
  });
  return { results, error };
}
