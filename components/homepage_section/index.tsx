import { useRouter } from "next/router";
import React, { useRef, useState, useEffect } from 'react';

export default function ImageVideoAndTextSection({ sectionData }: any) {
  const router = useRouter();

  const handleCTABtn = (url: string) => {
    router.push({
      pathname: url,
    });
  };

  const [isPlaying, setIsPlaying] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const circlePlayButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
  
    const handlePlaying = () => {
      setIsPlaying(true);
    };
    
    const handlePause = () => {
      setIsPlaying(false);
    };
  
    if (video) {
      video.addEventListener('playing', handlePlaying);
      video.addEventListener('pause', handlePause);
  
      return () => {
        video.removeEventListener('playing', handlePlaying);
        video.removeEventListener('pause', handlePause);
      };
    }
  }, []);
  

  const handleTogglePlay = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
  
    const video = videoRef.current;
  
    if (video) {
      if (isPlaying) {
        video.pause();
        setIsPlaying(false);
      } else {
        const currentTime = video.currentTime;
        const targetTime = 10; // Replace with the desired time in seconds
        if (currentTime < targetTime) {
          video.currentTime = targetTime;
        }
        video.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <>
      <div>
        <div>{sectionData.video?.value?.url ? <div
          id="learning-section"
          className={`${sectionData?.assetPosition?.value === "Right"
            ? "flex-row-reverse text-center"
            : "text-left"
            } container mx-auto grid lg:flex w-full lg:py-6 mb-6`}
          style={{ backgroundColor: sectionData?.backgroundColor?.value }}
          key={sectionData?.image?.value?.id}
        >
          <div
            className={`${sectionData?.assetPosition?.value} w-full lg:w-1/2 h-auto lg:px-9 lg:pt-0 pt-6 col-span-1`}
          >
              <div className="video-wrapper">
                <div className="video-container" id="video-container">
                  <video
                    className="w-full lg:px-0"
                    src={sectionData.video?.value?.url}
                    ref={videoRef}
                    controls={isPlaying}
                  />
                  {!isPlaying && (
                    <div className="play-button-wrapper">
                      <div
                        title="Play video"
                        className={`play-gif ${isPlaying ? 'hidden' : 'visible'}`}
                        id="circle-play-b"
                        onClick={handleTogglePlay}
                        ref={circlePlayButtonRef}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
                          <path d="M40 0a40 40 0 1040 40A40 40 0 0040 0zM26 61.56V18.44L64 40z" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          <div className="lg:p-5 p-4 lg:pr-9 lg:pl-9 my-auto col-span-1 w-full lg:w-1/2">
            <h2
              className="lg:pb-6 pb-4 text-2xl text-54 text-gtl-med text-left blue-txt"
              tabIndex={0}
              id={sectionData?.title?.value}
            >
              {sectionData?.title?.value}
            </h2>
            <div
              className="jsx-290076256 text-lg font-normal text-sofia-reg text-left lg:pb-6 pb-4 text-mcknormalgrey"
              dangerouslySetInnerHTML={{ __html: sectionData?.description?.value }}
              tabIndex={0}
              id={sectionData?.description?.value}
            ></div>
            {sectionData?.buttonText?.value && (
              <div
                className={`${sectionData?.assetPosition?.value === "Right" ? "mx-auto" : "ml-0"
                  } jsx-290076256 w-[139px] leading-5 pd-12 h-[44px] text-sofia-bold justify-center items-center text-center text-white bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer flex lg:ml-0`}
                style={{
                  backgroundColor: `${sectionData?.assetPosition?.value === "Right"
                    ? sectionData?.buttonColorCode?.value
                    : sectionData?.buttonColorCode?.value
                    }`,
                }}
                tabIndex={0}
                id={sectionData?.buttonText?.value}
                role="button"
                onClick={() => handleCTABtn(sectionData?.buttonUrl?.value)}
              >
                {sectionData?.buttonText?.value}
              </div>
            )}
          </div>
        </div>
          : sectionData?.image?.value?.url ?
            <div
              id="learning-section"
              className={`${sectionData?.assetPosition?.value === "Right"
                ? "flex-row-reverse text-center"
                : "text-left"
                } container mx-auto grid lg:flex w-full lg:py-6 mb-6`}
              style={{ backgroundColor: sectionData?.backgroundColor?.value }}
              key={sectionData?.image?.value?.id}
            >
              <div
                className={`${sectionData?.assetPosition?.value} w-full lg:w-1/2 h-auto lg:px-9 lg:pt-0 pt-6 col-span-1`}
              >
                <img
                  className="w-full px-5 lg:px-0"
                  src={sectionData?.image?.value?.url}
                  tabIndex={0}
                  id={sectionData?.image?.value?.url}
                  alt="learning image"
                />
              </div>
              <div className="lg:p-5 p-4 lg:pr-9 lg:pl-9 my-auto col-span-1 w-full lg:w-1/2">
                <h2
                  className="lg:pb-6 pb-4 text-2xl text-54 text-gtl-med text-left blue-txt"
                  tabIndex={0}
                  id={sectionData?.title?.value}
                >
                  {sectionData?.title?.value}
                </h2>
                <div
                  className="jsx-290076256 text-lg font-normal text-sofia-reg text-left lg:pb-6 pb-4 text-mcknormalgrey"
                  dangerouslySetInnerHTML={{ __html: sectionData?.description?.value }}
                  tabIndex={0}
                  id={sectionData?.description?.value}
                ></div>
                {sectionData?.buttonText?.value && (
                  <div
                    className={`${sectionData?.assetPosition?.value === "Right" ? "mx-auto" : "ml-0"
                      } jsx-290076256 w-[139px] leading-5 pd-12 h-[44px] text-sofia-bold justify-center items-center text-center text-white bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer flex lg:ml-0`}
                    style={{
                      backgroundColor: `${sectionData?.assetPosition?.value === "Right"
                        ? sectionData?.buttonColorCode?.value
                        : sectionData?.buttonColorCode?.value
                        }`,
                    }}
                    tabIndex={0}
                    id={sectionData?.buttonText?.value}
                    role="button"
                    onClick={() => handleCTABtn(sectionData?.buttonUrl?.value)}
                  >
                    {sectionData?.buttonText?.value}
                  </div>
                )}
              </div>
            </div> : sectionData.backgroundImage?.expandedValue?.url ?
              <>
                <img id="image0_992_146329" 
                  src={sectionData.backgroundImage?.expandedValue?.url}
                />
              </> : null
        }</div>
      </div>
    </>
  );
}
