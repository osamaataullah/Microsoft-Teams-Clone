//imports
import React, { useCallback } from 'react';
import styled from 'styled-components';
import './BottomBar.css';
//-------------------------------------------------------------------------

const BottomBar = ({
  openChat,
  goToBack,
  toggleCameraAudio,
  userVideoAudio,
  startScreenSharing,
  screenShare,
  videoDevices,
  showVideoDevices,
  setShowVideoDevices
}) => {
  const handleToggling = useCallback((e) => {
    setShowVideoDevices((state) => !state);
  },
    [setShowVideoDevices]
  );

  return (
    <Bar>
      {/* Left side components - mic button, video button*/}
      <Left>

        <CameraButton onClick={toggleCameraAudio} data-switch='video'>
          <div>
            {userVideoAudio.video ? (
              <FaIcon className='fas fa-video'></FaIcon>
            ) : (
              <FaIcon className='fas fa-video-slash'></FaIcon>
            )}
          </div>
          Camera
        </CameraButton>

        {showVideoDevices && (
          <SwitchList>
            {videoDevices.length > 0 &&
              videoDevices.map((device) => {
                console.log(device);
                return <div>{device.label}</div>;
              })}
            <div>Switch Camera</div>
          </SwitchList>
        )}

        <SwitchMenu onClick={handleToggling}>
          <i className='fas fa-angle-up'></i>
        </SwitchMenu>

        <CameraButton onClick={toggleCameraAudio} data-switch='audio'>
          <div>
            {userVideoAudio.audio ? (
              <FaIcon className='fas fa-microphone'></FaIcon>
            ) : (
              <FaIcon className='fas fa-microphone-slash'></FaIcon>
            )}
          </div>
          Audio
        </CameraButton>

      </Left>
      
      {/* Central components- screen share, chat buttons */}
      <Center>

        <ChatButton onClick={openChat}>
          <div>
            <FaIcon className='fas fa-comments'></FaIcon>
          </div>
          Chat
        </ChatButton>

        <ScreenButton onClick={startScreenSharing}>
          <div>
            <FaIcon
              className={`fas fa-desktop ${screenShare ? 'sharing' : ''}`}
            ></FaIcon>
          </div>
          Share Screen
        </ScreenButton>

      </Center>

      {/* Right side components- Leave meet button */}
      <Right>
        <StopButton onClick={goToBack}>Leave</StopButton>
      </Right>

    </Bar>
  );
};

//-------------------------------------------------------------------------------
// Styled Components:

const FaIcon = styled.i`
  width: 30px;
  font-size: calc(16px + 1vmin);
`;

const Bar = styled.div`
  position: absolute;
  width: 100%;
  height: 10%;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  background-color: #6264a7;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const Right = styled.div``;

const CameraButton = styled.div`
  position: relative;
  width: 90px;
  border: none;
  font-size: 0.9375rem;
  padding: 5px;

  :hover {
    background-color: #8F92F3;
    cursor: pointer;
    border-radius: 15px;
  }

  * {
    pointer-events: none;
  }

  .fa-microphone-slash {
    color: #ee2560;
  }

  .fa-video-slash {
    color: #ee2560;
  }
`;

const SwitchMenu = styled.div`
  display: flex;
  position: absolute;
  width: 20px;
  top: 7px;
  left: 80px;
  z-index: 1;

  :hover {
    background-color: #476d84;
    cursor: pointer;
    border-radius: 15px;
  }

  * {
    pointer-events: none;
  }

  > i {
    width: 90%;
    font-size: calc(10px + 1vmin);
  }
`;

const ChatButton = styled.div`
  width: 75px;
  border: none;
  font-size: 0.9375rem;
  padding: 5px;

  :hover {
    background-color: #8F92F3;
    cursor: pointer;
    border-radius: 15px;
  }

  * {
    pointer-events: none;
  }
`;

const ScreenButton = styled.div`
align-content: center;  
  width: auto;
  border: none;
  font-size: 0.9375rem;
  padding: 5px;

  :hover {
    background-color: #8F92F3;
    cursor: pointer;
    border-radius: 15px;
  }

  .sharing {
    color: #ee2560;
  }
`;

const StopButton = styled.div`
  font-size: 0.9375rem;
  line-height: 30px;  
  width: 75px;
  height: 30px;
  border: none;
  text-align: center;
  margin-right: 15px;
  border-radius: 15px;
  background-color: orange;
  
  :hover {
    background-color: #f25483;
    cursor: pointer;
  }
`;

const SwitchList = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: -115px;
  left: 80px;
  padding-top: 5px;
  padding-right: 10px;
  padding-bottom: 5px;
  padding-left: 10px;
  text-align: left;
  background-color: #4ea1d3;
  color: white;

  > div {
    font-size: 0.85rem;
    padding: 1px;
    margin-bottom: 5px;

    :not(:last-child):hover {
      background-color: #77b7dd;
      cursor: pointer;
    }
  }

  > div:last-child {
    border-top: 1px solid white;
    cursor: context-menu !important;
  }
`;

export default BottomBar;
