//imports
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
//-----------------------------------------------------------------------------

const VideoCard = (props) => {
  const ref = useRef();
  const peer = props.peer;
  
  useEffect(() => {
    peer.on('stream', (stream) => {
      ref.current.srcObject = stream;
    });
    peer.on('track', (track, stream) => {
    });
  }, [peer]);

  return (
    <Video
      playsInline
      autoPlay
      ref={ref}
    />
  );
};

//-------------------------------------------------------------------------------
// styled components:

const Video = styled.video``;

export default VideoCard;
