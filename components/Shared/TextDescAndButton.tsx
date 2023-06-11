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
      <h1
      className={titleStyle}
      id={`${idComponent}_lbl_001`}
    >
      {title}
    </h1>
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
            backgroundColor: CTABackgroundColor,
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