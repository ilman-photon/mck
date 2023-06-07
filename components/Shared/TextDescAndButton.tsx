import React from "react"

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
      CTATitle
    } = props
  
    const renderTitle  = title ? (
      <h1
      className={titleStyle}
      id={`${idComponent}_lbl_001`}
    >
      {title}
    </h1>
    ) : null
  
    const renderDescription  = description ? (
      <>
      <div
        className={descriptionStyle}
        dangerouslySetInnerHTML={{
          __html: description,
        }}
        id={`${idComponent}_dis_001`}
      />
      </>
    ) : null
  
    const renderButton = isButtonExist ?  (
      <>
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
      </>
    ) : null
  
    return (
        <div
          className={containerStyle}
          key={parentKey}
        >
          {renderTitle}
          {renderDescription}
          {renderButton}
       </div>
    )
  }