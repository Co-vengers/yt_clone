import React from 'react';
import "./RecommendedVideos.css";
import VideoCard from './VideoCard';

function RecommendedVideos() {
  return (
    <div className='recommendedVideos'>
      <h2>Recommended</h2>
      <div className='recommendedVideos__videos'>
        <VideoCard
          views="2.3M views"
          timestamp="2 days ago"
          channelImage="https://yt3.ggpht.com/D68ULcNbyzSw1OPJuaPs3gj9Q6J83D3CWpEBQuBxOoOFVoc73p2h3SZW5tuFLmd-i-Uv4XPz5g=s68-c-k-c0x00ffffff-no-rj"
          channel="Snax Gaming"
          image="https://i.ytimg.com/vi/QOqGjrP3el0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDkvs6TyeWfdm-N_tqGM5-oJQGM-g"
          />
        <VideoCard
          views="128k views"
          timestamp="2 days ago"
          channelImage="https://yt3.ggpht.com/_IeXatuaOljpYO79YU849CIyOgo3jlyfaCztI5WQOgUZCnw7P0J9tfW753CtWs1QduiRxzRz61E=s68-c-k-c0x00ffffff-no-rj"
          channel="AnkkitaC"
          image="https://i.ytimg.com/vi/NiAla46Dm_A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBLl0U3GUb8Vcxr4nEjJKFjluePGQ"
          />
        <VideoCard
          views="348k views"
          timestamp="2 days ago"
          channelImage="https://yt3.ggpht.com/ytc/AIdro_nAxZ3BFjjj8dS8AJkroWUoAu92k3xcqE5OtYhk2g=s68-c-k-c0x00ffffff-no-rj"
          channel="Kaemi"
          image="https://i.ytimg.com/vi/0FjGW-BJ_ho/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-UZn-R81InVIbyZYnRr1NnTVTYw"
          />
      </div>
    </div>
  );
}

export default RecommendedVideos
