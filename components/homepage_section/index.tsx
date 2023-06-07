import { useWindowResize } from "@/hooks/useWindowResize";
import { useRouter } from "next/router";
import React, { useRef, useState, useEffect } from 'react';
import ReactPlayer from "react-player";

export default function ImageVideoAndTextSection({ sectionData, index, customStyleClass='' }: any) {
  const router = useRouter();
  const [ApiRespond, setApiRespond] = useState<any>();
  const [deviceWidth] = useWindowResize();
  const handleCTABtn = (url: string) => {
    router.push({
      pathname: url,
    });
  };

  const [isPlaying, setIsPlaying] = useState(false);
  
  const videoRef = useRef<ReactPlayer>(null);
  const circlePlayButtonRef = useRef<HTMLDivElement>(null);

  const handleTogglePlay = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsPlaying(!isPlaying)

    const video = videoRef.current;

    if (video) {
      if (isPlaying) {
        video.getInternalPlayer().play();
      } else {
        video.getInternalPlayer().pause();
      }
    }

    if (video) {
      if (isPlaying) {
        video.getInternalPlayer().pause();
        setIsPlaying(false);
      } else {
        const currentTime = video.getInternalPlayer().currentTime;
        const targetTime = 10; // Replace with the desired time in seconds
        if (currentTime < targetTime) {
          video.getInternalPlayer().currentTime = targetTime;
        }
        video.getInternalPlayer().play();
        setIsPlaying(true);
      }
    }
  };  

  useEffect(() => {
    const setPageNameAsClassName = () => {
      const pageName: string = "home-component";
      document.body.className = pageName;
    };
    setPageNameAsClassName();
  }, []);

  useEffect(() => {
    // Set the lang attribute to "en" on the <html> element
    document.documentElement.lang = "en";
  }, []);

  useEffect(() => {
    // Set the title of the document dynamically
    document.title = ApiRespond?.data[0]?.title.value || "Home";
  }, [ApiRespond]);

  const isInternalSource = sectionData?.video?.value?.url
  const isInternalSourceMatchAPI = isInternalSource?.includes(`${process?.env?.API_URL}`)

  return (
    <div className={`${deviceWidth > 2160 && "container mx-auto lg:pl-6"}`}>
      {sectionData.video?.value?.url || sectionData?.videoUrl?.value ? (
        <div
          id="learning-section"
          className={`${sectionData?.assetPosition?.value === "Right"
            ? "flex-row-reverse text-center"
            : "text-left"
            }  ${customStyleClass} w-full lg:py-9 mb-6 lg:mb-12`}
          style={{ backgroundColor: sectionData?.backgroundColor?.value }}
          key={sectionData?.image?.value?.id}
        >
          <div className="container mx-auto grid lg:flex">
            <div
              className={`${sectionData?.assetPosition?.value} w-full lg:w-1/2 h-auto lg:px-9 lg:pt-0 col-span-1`}
            >
              <div className="w-full h-full flex justify-center items-center">
                <div className="w-full mx-auto relative flex flex-col justify-center lg:px-0 px-10" id="video-container">
                  <div className='player-wrapper'>
                  <ReactPlayer
                    className='react-player'
                    url={sectionData?.video?.value?.url || sectionData?.videoUrl?.value}
                    id={`${index}_vid_001`}
                    controls={isPlaying}
                    width='100%'
                    height='100%'
                    ref={videoRef}
                    playing={isPlaying}
                    onSeek={() => setIsPlaying(true)}
                    onStart={() => setIsPlaying(true)}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    pip={true}
                  />
                  </div>
                  {!isPlaying && isInternalSourceMatchAPI ? (
                    <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center w-full h-auto pointer-events-none">
                      <div
                        title="Play video"
                        className={`play-gif cursor-pointer pointer-events-auto ${isPlaying ? 'hidden' : 'visible'}`}
                        id="circle-play-b"
                        onClick={handleTogglePlay}
                        ref={circlePlayButtonRef}
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
            <div className="lg:p-5 p-4 lg:px-4 my-auto col-span-1 w-full lg:w-1/2">
              <h2
                className={`${sectionData?.assetPosition?.value === "Right"
                    ? "mx-auto lg:text-left text-center"
                    : "ml-0 text-left"
                  } lg:mb-6 mb-4 text-2xl text-54 text-gtl-med text-left blue-txt text-heading-ellipsis`}
                  id={`${index}_lbl_001`}
              >
                {sectionData?.title?.value}
              </h2>
              <div
                className={`${sectionData?.assetPosition?.value === "Right"
                    ? "mx-auto lg:text-left text-center"
                    : "ml-0 text-left"
                  } jsx-290076256 text-lg font-normal text-sofia-reg lg:mb-6 mb-4 text-mcknormalgrey text-content-ellipsis`}
                dangerouslySetInnerHTML={{
                  __html: sectionData?.description?.value,
                }}
                id={`${index}_des_001`}
              ></div>
              {sectionData?.buttonText?.value && (
                <button
                  className={`${sectionData?.assetPosition?.value === "Right"
                      ? "mx-auto"
                      : "ml-0"
                    } jsx-290076256 w-[139px] leading-5 pd-12 h-[44px] text-sofia-bold justify-center items-center text-center text-white bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer flex lg:mx-0 lg:ml-auto`}
                  style={{
                    backgroundColor: `${sectionData?.assetPosition?.value === "Right"
                        ? sectionData?.buttonColorCode?.value
                        : sectionData?.buttonColorCode?.value
                      }`,
                  }}
                  id={`${index}bt_001`}
                  // id={sectionData?.buttonText?.value}
                  onClick={() => handleCTABtn(sectionData?.buttonUrl?.value)}
                >
                  {sectionData?.buttonText?.value}
                </button>
              )}
            </div>
          </div>
        </div>
      ) : sectionData?.image?.value?.url ? (
        <div
          id="learning-section"
          className={`${sectionData?.assetPosition?.value === "Right"
              ? "flex-row-reverse text-center"
              : "text-left"
            } w-full lg:py-8 lg:px-0 py-6 px-4 mb-6 lg:mb-12`}
          style={{ backgroundColor: sectionData?.backgroundColor?.value }}
          key={sectionData?.image?.value?.id}
        >
          <div
            className={`${sectionData?.assetPosition?.value === "Right"
                ? "flex-row-reverse text-center"
                : "text-left"
              } container mx-auto grid lg:flex`}
          >
            <div
              className={`${sectionData?.assetPosition?.value} w-full lg:w-1/2 h-auto lg:px-9 lg:pt-0  col-span-1`}
            >
              <img
                id={`${index}_IMG_001`}
                className="w-full lg:px-0"
                src={sectionData?.image?.value?.url}
                alt={`${index}_IMG_001`}
              />
            </div>
            <div className="lg:p-5 lg:pr-9 lg:pl-8 my-auto col-span-1 w-full lg:w-1/2">
              <h3
                className={`${sectionData?.assetPosition?.value === "Right"
                    ? "mx-auto lg:text-left text-left"
                    : "ml-0 text-left"
                  } lg:mb-6 mb-4 lg:mt-0 mt-6 text-2xl text-54 text-gtl-med text-left blue-txt text-heading-ellipsis`}
                  id={`${index}_lbl_001`}
              >
                {sectionData?.title?.value}
              </h3>
              <div
                className={`${sectionData?.assetPosition?.value === "Right"
                    ? "mx-auto lg:text-left text-left"
                    : "ml-0 text-left"
                  } jsx-290076256 text-lg font-normal text-sofia-reg lg:mb-6 mb-4 text-mcknormalgrey text-content-ellipsis`}
                dangerouslySetInnerHTML={{
                  __html: sectionData?.description?.value,
                }}
                id={`${index}_des_001`}
              ></div>
              {sectionData?.buttonText?.value && (
                <button
                  className={`${sectionData?.assetPosition?.value === "Right"
                      ? "mr-auto "
                      : "ml-0"
                    } jsx-290076256 min-w-[139px] leading-5 pd-12 h-[44px] text-sofia-bold justify-center items-center text-center text-white bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer flex lg:mx-0 lg:mr-auto lg:blue-bg lg:text-white`}
                  style={{
                    backgroundColor: `${sectionData?.assetPosition?.value === "Right"
                        ? sectionData?.buttonColorCode?.value
                        : sectionData?.buttonColorCode?.value
                      }`,
                  }}
                  id={`${index}_btn_001`}
                  onClick={() => handleCTABtn(sectionData?.buttonUrl?.value)}
                >
                  {sectionData?.buttonText?.value}
                </button>
              )}
            </div>
          </div>
        </div>
      ) : sectionData.backgroundImage?.expandedValue?.url ? (
        sectionData.assetPosition?.value === "Right" ? (
          <div className="relative lg:mb-12 mb-10">
            <img
              src={sectionData?.backgroundImage?.expandedValue?.url}
              alt={`${index}_img_001`}
              id={`${index}_img_001`}
              className="w-full"
            />
            <div className="container mx-auto position-relative bg-transparent-left">
              <div className="lg:absolute top-0 bottom-0 lg:pr-11 lg:pl-6 w-540 flex flex-col justify-center lg:items-end pt-8 lg:pt-0">
                <h2
                  className="text-mckblue text-gtl-med heading font-medium lg:mb-6 mb-4 text-heading-ellipsis"
              id={`${index}_lbl_001`}
                
                >
                  {sectionData?.name}
                </h2>
                <p
                  className="lg:mb-6 mb-4 text-sofia-reg text-lg font-normal text-mcknormalgrey text-p-ellipsis"
                  dangerouslySetInnerHTML={{
                    __html: sectionData?.description?.value,
                  }}
                  id={`${index}_dis_001`}
                ></p>
                {sectionData?.buttonUrl?.value && (
                  <button
                    onClick={() => handleCTABtn(sectionData?.buttonUrl?.value)}
                    className="p-3 uppercase rounded-lg blue-bg text-white text-sofia-bold font-extrabold text-base float-right w-fit"
                    id={`${index}_btn_001`}
                    aria-label={sectionData?.buttonText?.value}
                    style={{
                      backgroundColor: sectionData?.buttonColorCode?.value,
                    }}
                  >
                    {sectionData?.buttonText?.value}
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="container mx-auto bg-transparent-left relative lg:mb-12 mb-6 lg:px-72">
            <img
              src={sectionData?.backgroundImage?.expandedValue?.url}
              alt={`${index}_img_001`}
              className="w-full"
              id={`${index}_img_001`}
            />
            <div className="lg:absolute top-0 right-0 bottom-0 bg-transparent-right lg:pr-11 lg:pl-6 w-540 float-right flex flex-col justify-center lg:items-end pt-8 lg:pt-0 lg:hidden">
              <h2
                className="text-mckblue text-gtl-med heading font-medium lg:pb-6 pb-4"
                id={`${index}_lbl_001`}
              >
                {sectionData?.name}
              </h2>
              <p
                className="pb-6 text-sofia-reg lg:text-lg font-normal text-mcknormalgrey text-base"
                id={`${index}_dis_001`}
                dangerouslySetInnerHTML={{
                  __html: sectionData?.description?.value,
                }}
              ></p>
              {sectionData?.buttonText?.value && (
                <button
                  className={`${sectionData?.assetPosition?.value === "Right"
                      ? "mx-auto"
                      : "ml-0"
                    } jsx-290076256 w-[139px] leading-5 pd-12 h-[44px] text-sofia-bold justify-center items-center text-center text-white bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer flex lg:mx-0 lg:ml-auto`}
                  style={{
                    backgroundColor: `${sectionData?.assetPosition?.value === "Right"
                        ? sectionData?.buttonColorCode?.value
                        : sectionData?.buttonColorCode?.value
                      }`,
                  }}
                  id={`${index}_btn_001`}
                  onClick={() => handleCTABtn(sectionData?.buttonUrl?.value)}
                >
                  {sectionData?.buttonText?.value}
                </button>
              )}
            </div>
          </div>
        )
      ) : (
        <div
          className={`w-full p-6 mx-auto lg:p-72`}
          key={sectionData?.contentLink?.id}
        >
          <h1
            className="text-27 lg:text-5xl text-gtl-med blue-txt lg:mb-5 text-center lg:text-left page-heading-h3 md:mb-4 sm:mb-4"
            id={`${index}_lbl_001`}
          >
            {sectionData?.title?.value}
          </h1>
          <div
            className={`w-full lg:${"w-1/2"} text-sofia-reg grey-txt text-base lg:text-left sm:text-center ${sectionData?.buttonText?.value ? "mb-3" : ""
              }
          `}
            dangerouslySetInnerHTML={{
              __html: sectionData?.description?.value,
            }}
            id={`${index}_dis_001`}
          ></div>
          {sectionData?.buttonText?.value && (
            <button
              className={`jsx-290076256 min-w-[139px] leading-5 pd-12 h-[44px] text-sofia-bold justify-center items-center text-center text-white bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer flex mx-auto lg:mx-0`}
              style={{
                backgroundColor: `${sectionData?.buttonColorCode?.value}`,
              }}
              id={`${index}_btn_001`}
              onClick={() => handleCTABtn(sectionData?.buttonUrl?.value)}
            >
              {sectionData?.buttonText?.value}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
