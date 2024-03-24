import mockList from "./filterdList.mock.json";
import { type Podcast } from "../../src/features/PodcastList/models/Podcast";

export default function usePodcastsListMock(): Podcast[] {
  return mockList as Podcast[];
}
