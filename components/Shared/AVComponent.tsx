import React from 'react'
import ReactPlayer from "react-player"
import { SourceProps } from "react-player/base"

interface MediaComponentProps {
    isVideoExist:boolean
    videoContainerStyle:string,
    videoSource:string | string[] | SourceProps[] | MediaStream | undefined
    idComponent:number
    videoControls:boolean
    videoComponentRef:React.LegacyRef<ReactPlayer> | undefined
    onSeek:((seconds: number) => void) | undefined
    onStart:() => void
    onPlay:() => void
    onPause:() => void
    flagVideoUrl:boolean
    onClickIconPlay:React.MouseEventHandler<HTMLDivElement> | undefined
    iconPlayWrapperRef: React.LegacyRef<HTMLDivElement> | undefined
  }
  
export default function AVComponent (props:MediaComponentProps) {
  
    const {
      isVideoExist,
      videoContainerStyle,
      videoSource,
      idComponent,
      videoControls,
      videoComponentRef,
      onPause,
      onPlay,
      onSeek,
      onStart,
      flagVideoUrl,
      onClickIconPlay,
      iconPlayWrapperRef
    } = props
    
    const renderVideo = isVideoExist ? (
      <div
        className={videoContainerStyle}
      >
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full mx-auto relative flex flex-col justify-center lg:px-0 px-10" id="video-container">
          <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url={videoSource}
            id={`${idComponent}_vid_001`}
            controls
            width='100%'
            height='100%'
            ref={videoComponentRef}
            playing={videoControls}
            onSeek={onSeek}
            onStart={onStart}
            onPlay={onPlay}
            onPause={onPause}
            pip={true}
          />
          </div>
          {!videoControls && flagVideoUrl ? (
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center w-full h-auto pointer-events-none">
              <div
                title="Play video"
                className={`play-gif cursor-pointer pointer-events-auto ${videoControls ? 'hidden' : 'visible'}`}
                id="circle-play-b"
                onClick={onClickIconPlay}
                ref={iconPlayWrapperRef}
              >
                <svg className="w-100 h-100 fill-white stroke-white cursor-pointer bg-overlaygrey rounded-50 opacity-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
                  <path d="M40 0a40 40 0 1040 40A40 40 0 0040 0zM26 61.56V18.44L64 40z" />
                </svg>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
    ) : null
    
    return renderVideo
  }