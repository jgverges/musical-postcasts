import { Podcast } from "../models/Podcast";
import { PodcastListResponse } from "../models/podcastAPI";

function filterPodcastData(data: PodcastListResponse): Podcast[] {
  const podcasts: Podcast[] = [];

  if (data?.feed?.entry && Array.isArray(data.feed.entry)) {
    data.feed.entry.forEach((entry) => {
      const { label: title } = entry["im:name"] || {};
      const podcastId = entry.id.attributes?.["im:id"];
      const summary = entry["summary"] ? entry["summary"].label : "";
      const { label: artist } = entry["im:artist"] || {};
      const imageObj = entry["im:image"]?.find(
        (img) => img.attributes?.height === "60"
      );
      const image = imageObj?.label || "";

      if (title && podcastId && artist && image && summary) {
        const podcast: Podcast = {
          title,
          podcastId,
          artist,
          image,
          summary,
        };
        podcasts.push(podcast);
      }
    });
  }
  if (podcasts.length === 0) console.log("Error filtering the data");

  return podcasts;
}
