import React from "react";
import mockPodcast from "../models/Podcast-detail.mock.json";
import { PodcastDetailResponse } from "../models/PodcastDetailsResponse";

export default function usePodcasts(): PodcastDetailResponse {
  return mockPodcast;
}
