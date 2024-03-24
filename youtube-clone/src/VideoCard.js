import React from 'react';
import Avatar from '@mui/material/Avatar';

function VideoCard(image, channel, views, timestamp, channelImage) {
  return (
    <div className='videoCard'>
        <img src={image} alt=''/>
        <div className='videoCard__info'>
          <Avatar 
            className='videoCard__avatar' 
            alt={channel} 
            src={channelImage} 
          />
          <div className='video__text'>
            
            <p>{channel}</p>
            <p>
              {views} • {timestamp}
            </p>
          </div>
        </div>
    </div>
  );
}

export default VideoCard;
