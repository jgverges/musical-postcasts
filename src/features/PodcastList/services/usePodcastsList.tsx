import { fetchApiData } from "../../../common/api/fetchApiData";
import { useRequest } from "../../../common/api/useRequest";
import { LIST_CACHE_KEY } from "../../../common/constants/localStorageConstants";
import { PODCAST_LIST_URL } from "../../../common/constants/apiURLConstants";
import { filterPodcastData } from "./filterPodcastData";

function fetchPodcastList(abortController: AbortController) {
  return fetchApiData(PODCAST_LIST_URL, abortController.signal).then((data) => {
    return data ? filterPodcastData(data) : null;
  });
}

export function usePodcastList() {
  const { data: podcasts, error } = useRequest({
    fetchFn: fetchPodcastList,
    cachekey: LIST_CACHE_KEY,
  });

  return { podcasts, error };
}
