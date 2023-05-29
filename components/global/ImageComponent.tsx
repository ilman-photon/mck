import React, { CSSProperties } from "react";

import NoImageAvailable  from '../../public/images/No_image_available.png'
type ImageComponentProps = {
    src: string;
    id: string;
    width?: number | string;
    height?: number | string;
    alt?: string;
    className?: any;
    tabIndex?: number;
} 
export function ImageComponent({src, height, width, alt, className, tabIndex, id}: ImageComponentProps) {
    const [didLoad, setLoad] = React.useState(false);
  
    const style: CSSProperties = didLoad ? {} : {visibility: 'hidden', height: 0, width: 0};
    const handleImageError = (e: any) => {
        e.target.src = "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
    }
    return <img
        style={{ height, width, ...style,}} 
        className={className}
        src={src} 
        onLoad={() => setLoad(true)} 
        alt={alt || "Image is not available"}
        tabIndex={tabIndex}
        id={id}
        onError={handleImageError}
    />;
  }