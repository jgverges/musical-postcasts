export type PodcastDetail = {
  artistId?: number;
  artistName?: string;
  artistViewUrl?: string;
  artworkUrl100?: string;
  artworkUrl30?: string;
  artworkUrl60?: string;
  artworkUrl600?: string;
  collectionCensoredName?: string;
  collectionExplicitness: string;
  collectionHdPrice?: number;
  collectionId: number;
  collectionName: string;
  collectionPrice?: number;
  collectionViewUrl?: string;
  contentAdvisoryRating?: string;
  country: string;
  currency: string;
  feedUrl?: string;
  genreIds?: string[];
  genres?: string[];
  kind: string;
  primaryGenreName?: string;
  releaseDate: string;
  trackCensoredName?: string;
  trackCount?: number;
  trackExplicitness?: string;
  trackId?: number;
  trackName?: string;
  trackPrice?: number;
  trackTimeMillis?: number;
  trackViewUrl?: string;
  wrapperType: string;
};

export type Episode = {
  artistIds?: number[];
  artistViewUrl?: string;
  artworkUrl160?: string;
  artworkUrl60?: string;
  artworkUrl600?: string;
  closedCaptioning?: string;
  collectionId: number;
  collectionName: string;
  collectionViewUrl?: string;
  contentAdvisoryRating?: string;
  country: string;
  description: string;
  episodeContentType?: string;
  episodeFileExtension?: string;
  episodeGuid?: string;
  episodeUrl: string;
  feedUrl: string;
  genres?: { name: string; id: string }[];
  kind: string;
  previewUrl?: string;
  releaseDate: string;
  shortDescription?: string;
  trackId: number;
  trackName: string;
  trackTimeMillis?: number; // some episodes don't have trackTimeMillis!
  trackViewUrl?: string;
  wrapperType: string;
};
interface Status {
  url: string;
  content_type: string;
  http_code: number;
  response_time: number;
  content_length: number;
}
export type Results = PodcastDetail | Episode;

export interface ParsedContents {
  resultCount: number;
  results: Results[];
}

export type PodcastDetailResponse = {
  contents: string;
  status: Status;
};
