import { useWindowResize } from "@/hooks/useWindowResize";
import { useRouter } from "next/router";
import React, { useRef, useState, useEffect } from 'react';

export default function ImageVideoAndTextSection({ sectionData }: any) {
  const router = useRouter();
  const [ApiRespond, setApiRespond] = useState<any>();
  const [deviceWidth] = useWindowResize();
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

  return (
    <div className={`${deviceWidth > 2160 && "container mx-auto lg:pl-6" }`}>
      {sectionData.video?.value?.url ? (
        <div
          id="learning-section"
          className={`${sectionData?.assetPosition?.value === "Right"
              ? "flex-row-reverse text-center"
              : "text-left"
            } container mx-auto grid lg:flex w-full lg:py-9 learning-section`}
          style={{ backgroundColor: sectionData?.backgroundColor?.value }}
          key={sectionData?.image?.value?.id}
        >
          <div
            className={`${sectionData?.assetPosition?.value} w-full lg:w-1/2 h-auto lg:px-9 lg:pt-0 col-span-1`}
          >
            <div className="video-wrapper">
              <div className="video-container" id="video-container">
                <video
                  className="w-full lg:px-0"
                  src={sectionData.video?.value?.url}
                  ref={videoRef}
                  controls={isPlaying}
                >
                  <track kind="captions" src="path/to/captions.vtt" label="Captions" default />
                </video>
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
              className={`${sectionData?.assetPosition?.value === "Right"
              ? "mx-auto lg:text-left text-center"
              : "ml-0 text-left"
              } lg:mb-6 mb-4 text-2xl text-54 text-gtl-med text-left blue-txt text-heading-ellipsis`}
              tabIndex={0}
              id={sectionData?.title?.value}
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
              tabIndex={0}
              id={sectionData?.description?.value}
            ></div>
            {sectionData?.buttonText?.value && (
              <div
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
      ) : sectionData?.image?.value?.url ? (
        <div
          id="learning-section"
          className={`${sectionData?.assetPosition?.value === "Right"
            ? "flex-row-reverse text-center"
            : "text-left"
            } w-full lg:py-9 lg:px-0 py-6 px-4 learning-section`}
          style={{ backgroundColor: sectionData?.backgroundColor?.value }}
          key={sectionData?.image?.value?.id}
        >
          <div 
          className={`${sectionData?.assetPosition?.value === "Right"
          ? "flex-row-reverse text-center"
          : "text-left"
          } container mx-auto grid lg:flex`}>
          <div
            className={`${sectionData?.assetPosition?.value} w-full lg:w-1/2 h-auto lg:px-9 lg:pt-0  col-span-1`}
          >
            <img
              className="w-full lg:px-0"
              src={sectionData?.image?.value?.url}
              tabIndex={0}
              id={sectionData?.image?.value?.url}
              alt="learning image"
            />
          </div>
          <div className="lg:p-5 lg:pr-9 lg:pl-9 my-auto col-span-1 w-full lg:w-1/2">
            <h2
              className={`${sectionData?.assetPosition?.value === "Right" 
              ? "mx-auto lg:text-left text-left"
              : "ml-0 text-left"
              } lg:mb-6 mb-4 lg:mt-0 mt-6 text-2xl text-54 text-gtl-med text-left blue-txt text-heading-ellipsis`}
              tabIndex={0}
              id={sectionData?.title?.value}
            >
              {sectionData?.title?.value}
            </h2>
            <div
              className={`${sectionData?.assetPosition?.value === "Right"
              ? "mx-auto lg:text-left text-left"
              : "ml-0 text-left"
              } jsx-290076256 text-lg font-normal text-sofia-reg lg:mb-6 mb-4 text-mcknormalgrey text-content-ellipsis`}
              dangerouslySetInnerHTML={{
                __html: sectionData?.description?.value,
              }}
              tabIndex={0}
              id={sectionData?.description?.value}
            ></div>
            {sectionData?.buttonText?.value && (
              <div
                className={`${sectionData?.assetPosition?.value === "Right"
                  ? "mr-auto "
                  : "ml-0"
                  } jsx-290076256 w-[139px] leading-5 pd-12 h-[44px] text-sofia-bold justify-center items-center text-center text-white bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer flex lg:mx-0 lg:mr-auto lg:blue-bg lg:text-white`}
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
        </div>
      ) : sectionData.backgroundImage?.expandedValue?.url ? (sectionData.assetPosition?.value === 'Right' ?
        <div className="relative lg:mb-12 mb-10">
          <img
            src={sectionData?.backgroundImage?.expandedValue?.url}
            alt={sectionData?.backgroundImage?.expandedValue?.url}
            id="wft_img_004"
            tabIndex={0}
            className="w-full"
          />
          <div className="container mx-auto position-relative bg-transparent-left">
            <div className="lg:absolute top-0 bottom-0 lg:pr-11 lg:pl-6 w-540 flex flex-col justify-center lg:items-end pt-8 lg:pt-0">
              <h2
                className="text-mckblue text-gtl-med heading font-medium lg:mb-6 mb-4 text-heading-ellipsis"
                id="wft_label_005"
                tabIndex={0}
                role="text"
              >
                {sectionData?.name}
              </h2>
              <p
                className="lg:mb-6 mb-4 text-sofia-reg text-lg font-normal text-mcknormalgrey text-p-ellipsis"
                dangerouslySetInnerHTML={{
                  __html:
                    sectionData?.description?.value,
                }}
                id="wft_label_006"
                tabIndex={0}
              ></p>
              {sectionData?.buttonUrl?.value && (
                <button
                  onClick={() => handleCTABtn(sectionData?.buttonUrl?.value)}
                  className="p-3 uppercase rounded-lg blue-bg text-white text-sofia-bold font-extrabold text-base float-right lg:block hidden"
                  id="wft_btn_007"
                  aria-label={
                    sectionData?.buttonText?.value
                  }
                  style={{ backgroundColor: sectionData?.buttonColorCode?.value }}
                >
                  {sectionData?.buttonText?.value}
                </button>
              )}

            </div>
          </div>
        </div> :
        <div className="container mx-auto bg-transparent-left relative lg:mb-12 mb-6 lg:px-72">
          <img src={sectionData?.backgroundImage?.expandedValue?.url} className="w-full" id="wft_img_009" tabIndex={0} alt="heal and thrive" />
          <div className="lg:absolute top-0 right-0 bottom-0 bg-transparent-right lg:pr-11 lg:pl-6 w-540 float-right flex flex-col justify-center lg:items-end pt-8 lg:pt-0 lg:hidden">
            <h2
              className="text-mckblue text-gtl-med heading font-medium lg:pb-6 pb-4"
              id="wft_label_010"
              tabIndex={0}
            >
              {sectionData?.name}
            </h2>
            <p
              className="pb-6 text-sofia-reg lg:text-lg font-normal text-mcknormalgrey text-base"
              id="wft_label_011"
              tabIndex={0}
              dangerouslySetInnerHTML={{
                __html:
                  sectionData?.description?.value,
              }}
            ></p>
            {sectionData?.buttonText?.value && (
              <div
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
      ) : <div
        className={`w-full container lg:pb-6 pb-6 lg:pt-6  mx-auto lg:px-72`}
        key={sectionData?.contentLink?.id}
      >
        <h3
          className="text-27 pb-4 lg:text-5xl text-gtl-med blue-txt lg:mt-6 text-center page-heading-h3 lg:mb-7 md:mb-4 sm:mb-4" tabIndex={0} id={sectionData?.title?.value}
        >
          {sectionData?.title?.value}
        </h3>
        <div
          className={`mx-auto w-full lg:${'w-1/2'} text-sofia-reg grey-txt mainpage-styles text-base lg:text-left sm:text-center`}
          dangerouslySetInnerHTML={{ __html: sectionData?.description?.value }} tabIndex={0} id={sectionData?.description?.value}
        ></div>
      </div>}
    </div>
  );
}
