export async function fetchApiData(url: string, signal: AbortSignal) {
  try {
    const response = await fetch(url, { signal });
    if (signal?.aborted) return null;
    if (!response.ok) throw new Error("Error fetching data");
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
