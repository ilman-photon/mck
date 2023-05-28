import React, { CSSProperties } from "react";


type HandleImageLoadingProps = {
    src: any;
    width?: number;
    height?: number;
    alt?: string;
    className?: any;
    tabIndex?: number;
    id: string;
} 
export function HandleImageLoading({src, height, width, alt, className, tabIndex, id}: HandleImageLoadingProps) {
    const [didLoad, setLoad] = React.useState(false);
  
    const style: CSSProperties = didLoad ? {} : {visibility: 'hidden', height: 0, width: 0};
    return <img 
        style={{ height, width, ...style,}} 
        className={className}
        src={src} 
        onLoad={() => setLoad(true)} 
        alt={alt || "Image is not available"}
        tabIndex={tabIndex}
        id={id}
    />;
  }