import { getYoutubeId } from '@/utils/URLUtils'
import React, { useState, useEffect, useRef } from 'react';
import ReactPlayer from "react-player"
import { SourceProps } from "react-player/base"
import ReactYoutube from 'react-youtube'

interface MediaComponentProps {
    isVideoExist: boolean
    videoContainerStyle: string,
    videoSource: string | string[] | SourceProps[] | MediaStream | undefined
    idComponent: number
    videoControls: boolean
    videoComponentRef: React.RefObject<ReactPlayer> | null;
    onSeek: ((seconds: number) => void) | undefined
    onStart: () => void
    onPlay: () => void
    onPause: () => void
    flagVideoUrl: boolean
    onClickIconPlay: React.MouseEventHandler<HTMLDivElement> | undefined
    iconPlayWrapperRef: React.RefObject<HTMLDivElement> | undefined;
}

export default function AVComponent(props: MediaComponentProps) {

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

    const youtubeId = getYoutubeId(String(videoSource));
    const videoPlayerRef = useRef<ReactPlayer>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        // Add event listener for key press
        document.addEventListener('keydown', handleKeyPress);

        // Clean up the event listener when the component is unmounted
        return () => {
        document.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    const handleKeyPress = (event: KeyboardEvent) => {
        // Check if the pressed key is the space bar (key code 32)
        if (event.keyCode === 32) {
        event.preventDefault();
        togglePlay();
        }
    };

    const togglePlay = () => {
        setIsPlaying((prevIsPlaying) => {
        const newIsPlaying = !prevIsPlaying;
        if (newIsPlaying) {
            onPlay();
        } else {
            onPause();
        }
        return newIsPlaying;
        });
    };

    const renderVideo = isVideoExist ? (
        <div
            className={videoContainerStyle}
        >
            <div className="w-full h-full flex justify-center items-center">
                <div className={`w-full mx-auto relative flex flex-col justify-center lg:px-0 md:px-0`} id="video-container">
                    <div className='player-wrapper relative pt-[56.25%] rounded-10 mt-[0.8rem] mb-[0.8rem]'>
                        {String(videoSource)?.toLowerCase()?.includes('youtube') ? (
                           <ReactYoutube
                            videoId={String(youtubeId)}
                            iframeClassName="w-full h-full rounded-10 lg:px-0 z-0"
                            style={{
                                width:'100%',
                                height:'100%',
                                borderRadius:10,
                                position:'absolute',
                                top:0,
                                left:0
                            }}
                           />
                        ) : (

                            <ReactPlayer
                            className='react-player absolute top-0 left-0 rounded-10 overflow-hidden'
                            url={videoSource}
                            id={`${idComponent}_vid_001`}
                            controls={videoControls}
                            playsinline
                            width='100%'
                            height='100%'
                            ref={videoComponentRef!}
                            playing={videoControls}
                            onSeek={onSeek}
                            onStart={onStart}
                            onPlay={onPlay}
                            onPause={onPause}
                            pip={true}
                            tabIndex='1'
                            />
                        )}
                    </div>
                    {!videoControls && flagVideoUrl ? (
                        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center w-full h-auto pointer-events-none">
                            <div
                                title="Play video"
                                className={`play-gif cursor-pointer pointer-events-auto ${videoControls ? 'hidden' : 'visible'}`}
                                id="circle-play-b"
                                onClick={onClickIconPlay}
                                ref={iconPlayWrapperRef}
                                tabIndex={1}
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