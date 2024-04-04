import { PodcastFiltered } from "../../features/PodcastList/models/PodcastFiltered";
import { PodcastListResponse } from "../../features/PodcastList/models/PodcastListResponse";
import { filterPodcastData } from "../../features/PodcastList/services/filterPodcastData";

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
  url: string,
  cacheKey: string,
  signal: AbortSignal
): Promise<PodcastFiltered[] | null> {
  const localStorageData = getLocalStorageDataWithinOneDay(cacheKey);
  if (localStorageData) return localStorageData;

  return fetchApiData<PodcastListResponse>(url, signal).then((data) => {
    if (!data) return null;
    const filteredData = filterPodcastData(data);
    saveToLocalStorage(cacheKey, JSON.stringify(filteredData));
    return filteredData;
  });
}
export function getPodcastDetailWithCache(
  url: string,
  cacheKey: string,
  signal: AbortSignal
) {
  const localStorageData = getLocalStorageDataWithinOneDay(cacheKey);
  if (localStorageData) return localStorageData;

  return fetchApiData<any>(url, signal).then((data) => {
    if (!data) return null;
    const { results } = JSON.parse(data.contents);
    saveToLocalStorage(cacheKey, JSON.stringify(results));
    return results;
  });
}
