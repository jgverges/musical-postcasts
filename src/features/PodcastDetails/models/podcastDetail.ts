import { Podcast } from "../../PodcastList/models/Podcast";

export interface Episode {
    episodeUrl: string;
    podcastId: number;
    podcastTitle: string;
    releaseDate: string;
    trackTimeMillis: number;
    description?:string;
  }

export interface PodcastDetails {
    podcast: Podcast;
    episodes: Episode[];
  }