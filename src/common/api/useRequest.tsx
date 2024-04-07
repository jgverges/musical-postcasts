import { useEffect, useState } from "react";
import { useLoading } from "../contexts/LoadingContext";
import {
  getLocalStorageDataWithinOneDay,
  saveToLocalStorage,
} from "./localStorage";

type Props<T> = {
  fetchFn: (abortController: AbortController) => Promise<T | null>;
  cachekey: string;
};

export function useRequest<T>({ fetchFn, cachekey }: Props<T>) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { setLoading } = useLoading();

  useEffect(() => {
    const abortCont = new AbortController();
    const fetchData = async () => {
      try {
        const localStorageData = await getLocalStorageDataWithinOneDay(
          cachekey
        );
        if (localStorageData) {
          setData(localStorageData);
        } else {
          setLoading(true);
          const requestData = await fetchFn(abortCont);
          if (requestData) {
            setData(requestData);
            saveToLocalStorage(cachekey, JSON.stringify(requestData));
            return;
          }
        }
      } catch (error) {
        setError("An error occurred while fetching...");
      } finally {
        if (!abortCont.signal.aborted) {
          setLoading(false);
        }
      }
    };
    fetchData();
    return () => abortCont.abort();
  }, []);

  return { data, error };
}
