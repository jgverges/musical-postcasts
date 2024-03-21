import React from "react"
import { Route, Routes } from "react-router-dom"
import EpisodeDetails from "./features/EpisodeDetails/components/EpisodeDetail"
import NotFoundPage from "./features/common/NotFoundPage"
import { useNavigate } from "react-router-dom";
import PodcastList from '../src/features/PodcastList/components/PodcastList'
import PodcastDetails from '../src/features/PodcastDetails/components/PodcastDetails'

function App (){
    const navigate = useNavigate();
    return (
        <>
        <h1 style={{color:'blue', marginLeft:'9rem'}} onClick={()  =>{navigate('/')}}>Podcaster</h1>
        <Routes>
          <Route path="/" element={<PodcastList />} />
          <Route path="/podcast/:podcastId" element={<PodcastDetails/>}/>
          <Route path="/podcast/:podcastId/episode/:episodeId" element={<EpisodeDetails/>}/>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        </>
      )
    }
export default App