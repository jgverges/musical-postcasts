export async function fetchApiData(url: string, signal: AbortSignal) {
  try {
    const response = await fetch(url, { signal });
    if (signal?.aborted) return null;
    return response.json();
  } catch (error) {
    if (signal?.aborted) {
      console.log("clean up fetch");
    } else {
      console.error("An error occurred while fetching data:", error);
    }
    return null;
  }
}
