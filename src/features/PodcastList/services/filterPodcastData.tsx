import { Podcast } from "../models/Podcast";
import { PodcastListResponse } from "../models/podcastAPI";

function filterPodcastData(data: PodcastListResponse): Podcast[] {
    const podcasts: Podcast[] = [];

    if (data?.feed?.entry && Array.isArray(data.feed.entry)) {
        data.feed.entry.forEach((entry) => {
            const { label: title } = entry["im:name"] || {};
            const podcastId = entry.id.attributes?.["im:id"];
            const { label: artist } = entry["im:artist"] || {};
            const imageObj = entry["im:image"]?.find((img) => img.attributes?.height === "60");
            const image = imageObj?.label || '';

            if (title && podcastId && artist && image) {
                const podcast: Podcast = {
                    title,
                    podcastId,
                    artist,
                    image
                };
                podcasts.push(podcast);
            }
        });
    }

    return podcasts;
}
