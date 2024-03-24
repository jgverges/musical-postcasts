import mockPodcast from "./Podcast-detail.mock.json";
import { PodcastDetailResponse } from "../../src/features/PodcastDetails/models/PodcastDetailsResponse";

export default function usePodcastDetailsMock(): PodcastDetailResponse {
  return mockPodcast;
}
