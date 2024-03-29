import React, { useState } from "react";
import PodcastListIem from "./PodcastListItem";
import usePodcastsList from "../services/usePodcastsList";
import { PodcastFiltered } from "../models/PodcastFiltered";
import "../../../styles/PodcastList/PodcastList.css";

function PostcastList() {
  const { podcasts, error } = usePodcastsList();
  const [searchTerm, setSearchTerm] = useState<string>("");

  if (error) console.log(error);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  console.log({ podcasts });
  const filteredPodcasts =
    podcasts && podcasts.length > 0
      ? podcasts.filter((podcast: PodcastFiltered) => {
          const podcastTitle = podcast.title.toLowerCase();
          const authorName = podcast.artist.toLowerCase();
          const searchTermLower = searchTerm.toLowerCase();
          return (
            podcastTitle.includes(searchTermLower) ||
            authorName.includes(searchTermLower)
          );
        })
      : [];
  console.log({ filteredPodcasts });

  const filteredPodcastsLength = filteredPodcasts ? filteredPodcasts.length : 0;

  return (
    <section className="list-container">
      <div className="list-header">
        <div className="div-right">
          <div className="list-counter">{filteredPodcastsLength}</div>
          <div>
            <input
              id="Filter Podcasts"
              name="Filter Podcasts"
              type="text"
              placeholder="Search Podcasts..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="search-input"
            />
          </div>
        </div>
      </div>

      <div className="podcasts-list">
        {filteredPodcasts.map((podcast) => (
          <PodcastListIem key={podcast.podcastId} podcast={podcast} />
        ))}
      </div>
    </section>
  );
}

export default PostcastList;
