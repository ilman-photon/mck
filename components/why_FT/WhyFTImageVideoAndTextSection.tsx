/* eslint-disable @next/next/no-img-element */
import { useWindowResize } from "@/hooks/useWindowResize";
import { useRouter } from "next/router";
import React, { useRef, useState, useEffect } from 'react';
import ReactPlayer from "react-player";
import { AVComponent, ImageComponent, TextDescAndButton } from "../Shared";

export default function WhyFTImageVideoAndTextSection ({sectionData,index} : any) {
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

  type ContentAlignment = 'Right' | 'Left' | 'Centre'

  const isButtonRightAlignment = sectionData?.buttonPosition?.value === 'Right' as ContentAlignment
  const isButtonLeftAlignment = sectionData?.buttonPosition?.value === 'Left' as ContentAlignment
  const isButtonCenterAlignment = sectionData?.buttonPosition?.value === 'Centre' as ContentAlignment

  const VideoAndTextComponent = () => {
    return(
        <div
          id="learning-section"
          className={`${sectionData?.assetPosition?.value === "Right"
            ? "flex-row-reverse text-center"
            : "text-left"
            }  w-full lg:py-6 mb-6 lg:mb-12 py-6`}
          style={{ backgroundColor: sectionData?.backgroundColor?.value }}
          key={sectionData?.image?.value?.id}
        >
          {/* <div className="container mx-auto flex flex-col-reverse lg:flex-row-reverse"> */}
          <div className={`container mx-auto grid lg:flex xtralarge:px-72 mediumdesktop:px-72 ipadlarge:px-72 mobile:px-15 ${sectionData?.assetPosition?.value === 'Right' ? 'flex flex-row-reverse flex-1' : 'text-left'} `}>
            <AVComponent
            isVideoExist={sectionData.video?.value?.url || sectionData?.videoUrl?.value} 
            // videoContainerStyle={`${sectionData?.assetPosition?.value} w-full lg:w-1/2 h-auto lg:px-9 lg:pt-0 col-span-1`}
            videoContainerStyle={`w-full lg:w-1/2 h-auto lg:px-9 lg:pt-0 col-span-1 flex flex-1`}
            videoSource={sectionData.video?.value?.url || sectionData?.videoUrl?.value} 
            idComponent={index} 
            videoControls={isPlaying} 
            videoComponentRef={videoRef} 
            onSeek={() => setIsPlaying(true)} 
            onStart={() => setIsPlaying(true)} 
            onPlay={() => setIsPlaying(true)} 
            onPause={() => setIsPlaying(false)} 
            flagVideoUrl={isInternalSourceMatchAPI} 
            onClickIconPlay={handleTogglePlay} 
            iconPlayWrapperRef={circlePlayButtonRef}            
            />
            <TextDescAndButton
                titleStyle={`${sectionData?.assetPosition?.value === "Right"
                ? "mx-auto lg:text-left text-center"
                : "ml-0 text-left"
                } lg:mb-6 mb-4 text-2xl text-54 text-gtl-med text-left blue-txt text-heading-ellipsis`}
                descriptionStyle={`${sectionData?.assetPosition?.value === "Right"
                ? "mx-auto lg:text-left text-center"
                : "ml-0 text-left"
                } jsx-290076256 text-lg font-normal text-sofia-reg lg:mb-6 mb-4 text-mcknormalgrey text-content-ellipsis`}
                buttonContainerStyle={`${isButtonRightAlignment ? 'flex justify-end': isButtonLeftAlignment ? 'flex justify-start' : isButtonCenterAlignment ? 'flex justify-center' : 'mx-auto'}`}
                buttonStyle={`jsx-290076256 w-[139px] leading-5 pd-12 h-[44px] text-sofia-bold justify-center items-center text-center text-white bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer flex`}
                idComponent={index} 
                title={sectionData?.title?.value}
                description={sectionData?.description?.value} 
                isButtonExist={sectionData?.buttonUrl?.value} 
                onPressCTA={() => handleCTABtn(sectionData?.buttonUrl?.value)} 
                CTABackgroundColor={sectionData?.buttonColorCode?.value} 
                CTATitle={sectionData?.buttonText?.value}  
                // containerStyle="lg:p-5 p-4 lg:px-4 my-auto col-span-1 w-full lg:w-1/2 flex flex-1 flex-col" 
                containerStyle="lg:p-5 p-4 lg:px-4 my-auto col-span-1 w-full lg:w-1/2 flex flex-1 flex-col" 
                // containerStyle="lg:p-5 p-4 lg:px-4 my-auto col-span-1 w-full lg:w-1/2 flex flex-1 flex-col"        
            />
          </div>
        </div>
  )
}

const ImageWithTextComponent = () => {
  return (
    <div
    id="learning-section"
    className={`${sectionData?.assetPosition?.value === "Right"
        ? "flex-row-reverse text-center"
        : "text-left"
      } w-full lg:py-6 py-6 mb-6 lg:mb-12`}
    style={{ backgroundColor: sectionData?.backgroundColor?.value }}
    key={sectionData?.image?.value?.id}
  >
    <div
      className={`${sectionData?.assetPosition?.value === "Right"
          ? "flex-row-reverse text-center"
          : "text-left"
        } container mx-auto grid lg:flex xtralarge:px-72 mediumdesktop:px-72 ipadlarge:px-72 mobile:px-15`}
    >
      <ImageComponent
        // imageContainerStyle='w-full lg:w-1/2 h-auto lg:px-9 lg:pt-0  col-span-1'
        imageContainerStyle="w-full lg:w-1/2 h-auto lg:px-9 lg:pt-0 col-span-1 flex flex-1"
        imageStyle={`w-full ${sectionData?.image?.value?.url}`}
        imageSource={sectionData?.image?.value?.url}
        alt={`${index}_IMG_001`}
        id={`${index}_IMG_001`}
        ariahidden={false}
      />
      <TextDescAndButton 
          containerStyle="lg:p-5 lg:pr-9 lg:pl-8 my-auto col-span-1 w-full lg:w-1/2 flex flex-col"
          idComponent={index} 
          title={sectionData?.title?.value}
          description={sectionData?.description?.value}
          isButtonExist={sectionData?.buttonUrl?.value} 
          onPressCTA={() => handleCTABtn(sectionData?.buttonUrl?.value)} 
          CTABackgroundColor={sectionData?.buttonColorCode?.value} 
          CTATitle={sectionData?.buttonText?.value} 
          titleStyle={`${sectionData?.assetPosition?.value === "Right"
          ? "mx-auto lg:text-left text-left"
          : "ml-0 text-left"
        } lg:mb-6 flex w-full mb-4 lg:mt-0 mt-6 text-2xl text-54 text-gtl-med text-left blue-txt text-heading-ellipsis`}
          descriptionStyle={`${sectionData?.assetPosition?.value === "Right"
          ? "mx-auto lg:text-left text-left"
          : "ml-0 text-left"
        } jsx-290076256 text-lg font-normal text-sofia-reg lg:mb-6 mb-4 text-mcknormalgrey text-content-ellipsis`} 
          // buttonStyle={`${sectionData?.assetPosition?.value === "Right"
          // ? "mr-auto "
          // : "ml-0"
          // } jsx-290076256 min-w-[139px] leading-5 pd-12 h-[44px] text-sofia-bold justify-center items-center text-center text-white bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer flex lg:blue-bg lg:text-white`}        
          buttonContainerStyle={`${isButtonRightAlignment ? 'flex justify-end': isButtonLeftAlignment ? 'flex justify-start' : isButtonCenterAlignment ? 'flex justify-center' : 'mx-auto'}`}
          buttonStyle={`jsx-290076256 min-w-[139px] leading-5 pd-12 h-[44px] text-sofia-bold justify-center items-center text-center text-white bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer flex`}     
      />
    </div>
  </div>
  )
}

const ImageBGWithTextComponent = () => {
  return(
      <div className="relative lg:mb-12 mb-10">
            <ImageComponent
              imageContainerStyle="flex flex-1"
              imageSource={sectionData?.backgroundImage?.expandedValue?.url}
              imageStyle="w-full"
              alt={`${index}_img_001`}
              id={`${index}_img_001`}
              ariahidden={false}
            />   
            <div className="lg:container mx-auto position-relative bg-transparent-left">
            <TextDescAndButton 
              idComponent={index} 
              title={sectionData?.name} 
              description={sectionData?.description?.value} 
              isButtonExist={sectionData?.buttonUrl?.value} 
              onPressCTA={() => handleCTABtn(sectionData?.buttonUrl?.value)} 
              CTABackgroundColor={sectionData?.buttonColorCode?.value} 
              CTATitle={sectionData?.buttonText?.value}
              titleStyle="lg:text-left lg:mb-6 mb-4 text-2xl text-54 text-gtl-med text-left blue-txt"
              descriptionStyle="lg:mb-6 mb-4 text-sofia-reg text-lg font-normal text-mcknormalgrey text-p-ellipsis" 
              // buttonStyle="p-3 uppercase rounded-lg blue-bg text-white text-sofia-bold font-extrabold text-base float-right w-fit flex"  
              buttonContainerStyle={`${isButtonRightAlignment ? 'flex justify-end': isButtonLeftAlignment ? 'flex justify-start' : isButtonCenterAlignment ? 'flex justify-center' : 'mx-auto'}`}
              buttonStyle={`jsx-290076256 w-fit leading-5 pd-12 text-sofia-bold justify-center items-center text-center text-white bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer flex`}
              // containerStyle="lg:absolute lg:right-28 top-0 bottom-0 lg:pr-11 lg:pl-6 w-540 flex flex-col justify-center lg:items-start pt-8 lg:pt-0"         
              containerStyle={`${sectionData?.assetPosition?.value === 'Right' ? 'lg:absolute lg:right-28 top-0 bottom-0 pt-8 lg:pt-0 lg:pr-11 lg:pl-6 w-540 flex flex-col justify-center ' : 'lg:absolute top-0 bottom-0 lg:pr-11 lg:pl-6 w-540 flex flex-col justify-center pt-8 lg:pt-0 mediumdesktop:left-[72px] mobile:left-[15px] px-[15px]'}`}
           />
            </div>
      </div>
  )
}

const TextAndButtonOnlyComponents = () => {
  return(
    <TextDescAndButton 
            descriptionStyle={`w-full lg:${"w-1/2"} text-sofia-reg grey-txt text-base lg:text-left sm:text-center`}
            titleStyle="text-27 lg:text-5xl text-gtl-med blue-txt lg:mb-5 text-center lg:text-left page-heading-h3 md:mb-4 sm:mb-4"
            buttonContainerStyle={`${isButtonRightAlignment ? 'flex justify-end': isButtonLeftAlignment ? 'flex justify-start' : isButtonCenterAlignment ? 'flex justify-center' : 'mx-auto'}`}
            buttonStyle={`jsx-290076256 mt-3 min-w-[139px] leading-5 pd-12 h-[44px] text-sofia-bold justify-center items-center text-center text-white bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer flex`}
            containerStyle={`w-full p-6 lg:p-72 flex flex-1 flex-col ${sectionData?.assetPosition?.value  === 'Left' ? 'flex items-end w-1/2' : 'flex items-start'}`}
            idComponent={index} 
            containerBackgroundColor={sectionData?.backgroundColor?.value}
            title={sectionData?.title?.value} 
            description={sectionData?.description?.value} 
            isButtonExist={sectionData?.buttonUrl?.value} 
            onPressCTA={() => handleCTABtn(sectionData?.buttonUrl?.value)} 
            CTABackgroundColor={sectionData?.buttonColorCode?.value} 
            CTATitle={sectionData?.buttonText?.value}          
        />
  )
}


const videoSource = sectionData.video?.value?.url || sectionData?.videoUrl?.value
const imageSource = sectionData?.image?.value?.url
const isImageExistAndVideoExist = imageSource && videoSource
const isBackgroundImageAvail =  sectionData?.backgroundImage?.expandedValue?.url

// ImageVideoAndText == TwoColumnBlocks
// Text Title, Text Description, CTA Button,
//  On the other side we can have a video or image
// Video first then image , if no video or image text desc and button it shall remains in initial position
// If Background color is there then we need to show it
// It can also be a background image 
// CTA that can have a background color
// If CTA does not have URL then don’t show it
// Supposed title or desc not there yah don’t show it

// issues :
// 1. assets should be on the right place checking on its position // video
// 2. background color for the whole components
// 3. background image should fill the container part

if(videoSource) {
  return <VideoAndTextComponent/>
} 

if(isImageExistAndVideoExist){
  return <VideoAndTextComponent/>
}

if(isBackgroundImageAvail){
  return <ImageBGWithTextComponent/>
}

if(imageSource) {
  return <ImageWithTextComponent/>
}

return <TextAndButtonOnlyComponents/>
}
