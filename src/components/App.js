import React,{useState,useEffect} from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const App=()=>{
  const [videos,setVideos]=useState([]);
  const [selectedVideo,setSelectedVideo]=useState(null);

  useEffect(()=>{
    onTermSubmit('Cute Babies');
  },[]);

  const onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    //console.log(term);
    //console.log(response.data.items);

    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  
  const onVideoSelect = (video) => {
    //console.log('From the App',video);
    setSelectedVideo(video)  
  };

  return (
    <div className="ui container">
      <SearchBar onFORMSubmit={onTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              onVideoSelect={onVideoSelect}
              videos={videos}
            />
          </div>
        </div>
      </div>
    </div>
  );


};


export default App;
