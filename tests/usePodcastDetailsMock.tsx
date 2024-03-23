import mockPodcast from "./__mocks__/Podcast-detail.mock.json";
import { PodcastDetailResponse } from "../src/features/PodcastDetails/models/PodcastDetailsResponse";

export default function usePodcastDetailsMock(): PodcastDetailResponse {
  return mockPodcast;
}
