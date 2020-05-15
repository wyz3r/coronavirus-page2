import React from 'react'
import styled from "styled-components";

const VideoStyled = styled.div`
  width: 100%;
  margin-top: 30px;
  p{
    
    color: #494949;
    font-size: 1.1rem;
  }
  .video-content{
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    video {
      width: 100%;
    }
  }
  @media (max-width: 755px) {
    margin-top: 50px;
    .video-content{
      width: calc(100vw - 20%);
    video {
      width: 100%;
      }
    }
  }
`
const VideoSection = ({videoUrl,titulo,body }) => {
  return (
    <VideoStyled>
      <h3>{titulo}</h3>
      <p>{body}</p>
      <div className='video-content'>
        <video src={videoUrl} controls>
          Tu navegador no implementa
          el elemento <code>video</code>.
        </video>
      </div>
    </VideoStyled>
  )
}

export default VideoSection