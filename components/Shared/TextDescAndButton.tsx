import React from "react"
import DOMPurify from 'isomorphic-dompurify';

interface TextDescAndButtonProps{
    parentKey?:React.Key | null | undefined
    idComponent:number
    title:string
    description:string
    isButtonExist:boolean
    onPressCTA: React.MouseEventHandler<HTMLButtonElement> | undefined
    CTABackgroundColor:string
    CTATitle:string
    containerStyle?:string
    titleStyle:string
    descriptionStyle:string
    buttonStyle:string
    buttonContainerStyle?:string
    containerBackgroundColor?:string
  }
  
export default function TextDescAndButton (props:TextDescAndButtonProps) {

    const blueColorBackground =  "#001a71"
    const greenColorBackground = "#2ccfad"

    const whiteColor = 'white'
    const blackColor = 'black'
  
    // If button colour is McKesson Blue, the font colour should be white.
    // If button colour is McKesson Green, the font colour should Black.
    // If any other colour is provided, default to McKesson Blue with font colour being white. 
    // Please do this on a priority the first thing tomorrow morning.
    // Please start with home page (including recommendational products and the carosal). 
    // Consider this as a P2.
  
    const {
      parentKey,
      idComponent,
      titleStyle,
      descriptionStyle,
      containerStyle,
      buttonStyle,
      title,
      description,
      isButtonExist,
      onPressCTA,
      CTABackgroundColor,
      CTATitle,
      buttonContainerStyle,
      containerBackgroundColor
    } = props
  
    const renderTitle  = title ? (
    <div>
      <h3
      className={titleStyle}
      id={`${idComponent}_lbl_001`}
    >
      {title}
    </h3>
    </div>
    ) : null
  
    const renderDescription  = description ? (
      <>
      <div
        className={descriptionStyle}
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(description),
        }}
        id={`${idComponent}_dis_001`}
      />
      </>
    ) : null
  
    const renderButton = isButtonExist ?  (
      <div className={buttonContainerStyle}>
        <button
          className={buttonStyle}
          style={{
            backgroundColor: CTABackgroundColor?.toLowerCase() === blueColorBackground ? blueColorBackground : CTABackgroundColor?.toLowerCase() === greenColorBackground ? greenColorBackground : blueColorBackground,
            color:CTABackgroundColor?.toLowerCase() === blueColorBackground ? whiteColor : CTABackgroundColor?.toLowerCase() === greenColorBackground ? blackColor : whiteColor
          }}
          id={`${idComponent}_btn_001`}
          onClick={onPressCTA}
        >
          {CTATitle}
        </button>
      </div>
    ) : null
  
    return (
        <div
          className={containerStyle}
          style={{
            backgroundColor:containerBackgroundColor ? containerBackgroundColor : 'transparent'
          }}
          key={parentKey}
        >
          {renderTitle}
          {renderDescription}
          {renderButton}
       </div>
    )
  }