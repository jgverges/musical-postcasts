import {
  ParsedContents,
  PodcastDetailResponse,
} from "../../features/PodcastDetails/models/PodcastDetailsResponse";
import { PodcastFiltered } from "../../features/PodcastList/models/PodcastFiltered";
import { PodcastListResponse } from "../../features/PodcastList/models/PodcastListResponse";
import { filterPodcastData } from "../../features/PodcastList/services/filterPodcastData";
import {
  ALLORIGIN_URL,
  PODCAST_DETAIL_BASE_URL,
  PODCAST_LIST_URL,
} from "../constants/apiURLConstants";
import {
  DETAIL_CACHE_KEY,
  LIST_CACHE_KEY,
} from "../constants/localStorageConstants";

export async function fetchApiData<T>(
  url: string,
  signal: AbortSignal
): Promise<T | null> {
  try {
    const response = await fetch(url, { signal });
    if (signal.aborted) return null;
    return response.json();
  } catch (error) {
    if (signal.aborted) {
      console.log("clean up fetch");
    } else {
      console.error("An error occurred while fetching data:", error);
    }
    return null;
  }
}
function getLocalStorageDataWithinOneDay(
  cacheKey: string
): Promise<PodcastFiltered[]> | null {
  const storedData = localStorage.getItem(cacheKey);
  const storedTimestamp = localStorage.getItem(`${cacheKey}_Timestamp`);

  if (storedData && storedTimestamp) {
    const lastFetchTime = new Date(storedTimestamp).getTime();
    const currentTime = new Date().getTime();
    const ONE_DAY_IN_MILLISECONDS = 24 * 60 * 60 * 1000;

    if (currentTime - lastFetchTime < ONE_DAY_IN_MILLISECONDS) {
      return Promise.resolve(JSON.parse(storedData));
    }
  }
  return null;
}
export function saveToLocalStorage(key: string, data: string): void {
  localStorage.setItem(key, data);
  localStorage.setItem(`${key}_Timestamp`, new Date().toISOString());
}

export function getPodcastsFilteredWithCache(
  signal: AbortSignal
): Promise<PodcastFiltered[] | null> {
  const localStorageData = getLocalStorageDataWithinOneDay(LIST_CACHE_KEY);
  if (localStorageData) return localStorageData;

  return fetchApiData<PodcastListResponse>(PODCAST_LIST_URL, signal).then(
    (data) => {
      if (!data) return null;
      const filteredData = filterPodcastData(data);
      saveToLocalStorage(LIST_CACHE_KEY, JSON.stringify(filteredData));
      return filteredData;
    }
  );
}
export function getPodcastDetailWithCache(
  podcastId: string,
  signal: AbortSignal
) {
  const PROXY_URL =
    ALLORIGIN_URL +
    encodeURIComponent(`${PODCAST_DETAIL_BASE_URL}&id=${podcastId}`);
  const podcastDetailsSelected = `${DETAIL_CACHE_KEY}-${podcastId}`;
  const localStorageData = getLocalStorageDataWithinOneDay(
    podcastDetailsSelected
  );
  if (localStorageData) return localStorageData;

  return fetchApiData<PodcastDetailResponse>(PROXY_URL, signal).then((data) => {
    if (!data) return null;
    const parsedContents = JSON.parse(data.contents) as ParsedContents;
    const results = parsedContents.results;
    saveToLocalStorage(podcastDetailsSelected, JSON.stringify(results));
    return results;
  });
}
