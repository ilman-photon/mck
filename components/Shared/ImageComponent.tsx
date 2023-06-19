import React from 'react'

interface ImageComponentProps {
    imageStyle:string
    alt:string
    imageSource:string
    id:string
    imageContainerStyle:string
    ariahidden:boolean
  }
  
export default function ImageComponent (props:ImageComponentProps) {
  
    const { 
        imageContainerStyle,
        imageStyle,
        imageSource,
        id,
        alt,
        ariahidden,
    } = props
  
    return (
      <div
      className={imageContainerStyle}
    >
    {imageSource ? (
        <img
          className={imageStyle}
          alt={alt}
          src={imageSource}
          id={id}
          aria-hidden={ariahidden}
        />
    ) : null}    
    </div>
    )
  }