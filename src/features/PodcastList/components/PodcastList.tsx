import React from "react"
import PodcastListIem from "./PodcastListItem"
import usePodcasts from "../services/usePodcasts"


function PostcastList() {
    const podcasts =usePodcasts()

    return (<div className="container">
        {podcasts.map(podcast => <PodcastListIem key={podcast.title} podcast={podcast} />)}
    </div>)
}
export default PostcastList