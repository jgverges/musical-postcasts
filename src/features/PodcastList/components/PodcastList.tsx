import React from "react";
import PodcastListIem from "./PodcastListItem";
import usePodcastsList from "../services/usePodcastsList";

function PostcastList() {
  const { podcasts, error } = usePodcastsList();

  if (error) console.log(error);

  return (
    <div className="container">
      {podcasts &&
        podcasts.map((podcast) => (
          <PodcastListIem key={podcast.podcastId} podcast={podcast} />
        ))}
    </div>
  );
}
export default PostcastList;
