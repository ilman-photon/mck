import React, { CSSProperties } from "react";


type ImageComponentProps = {
    src: any;
    id: string;
    width?: number;
    height?: number;
    alt?: string;
    className?: any;
    tabIndex?: number;
} 
export function ImageComponent({src, height, width, alt, className, tabIndex, id}: ImageComponentProps) {
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