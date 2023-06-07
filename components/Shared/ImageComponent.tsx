import React from 'react'

interface ImageComponentProps {
    imageStyle:string
    alt:string
    imageSource:string
    id:string
    imageContainerStyle:string
  }
  
export default function ImageComponent (props:ImageComponentProps) {
  
    const { 
        imageContainerStyle,
        imageStyle,
        imageSource,
        id,
        alt,
    } = props
  
    return (
      <div
      className={imageContainerStyle}
    >
      <img
        className={imageStyle}
        alt={alt}
        src={imageSource}
        id={id}
      />
    </div>
    )
  }