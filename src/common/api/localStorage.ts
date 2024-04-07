export function getLocalStorageDataWithinOneDay(cacheKey: string) {
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
