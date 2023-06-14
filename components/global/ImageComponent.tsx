import React, { CSSProperties, useEffect } from "react";
import { useNoImage } from "./utils/constants/noImage";
import DOMPurify from "isomorphic-dompurify";



type ImageComponentProps = {
    src: string;
    id: string;
    width?: number | string;
    height?: number | string;
    alt?: string;
    className?: any;
}
export function ImageComponent({ src, height, width, alt, className, id }: ImageComponentProps) {
    const [didLoad, setLoad] = React.useState(false);
    const [srcImage, setsrcImage] = React.useState<any>();
    const noImageSrc = useNoImage()
    useEffect(() => {
        const img = new Image();
        img.src = DOMPurify.sanitize(src);

        const handleImageLoad = () => {
            setsrcImage(DOMPurify.sanitize(src));
        };

        const handleImageError = (e: any) => {
            setsrcImage(DOMPurify.sanitize(noImageSrc));
        };

        img.addEventListener('load', handleImageLoad);
        img.addEventListener('error', handleImageError);

        return () => {
            img.removeEventListener('load', handleImageLoad);
            img.removeEventListener('error', handleImageError);
        };
    }, [src]);

    const style: CSSProperties = didLoad ? {} : { visibility: 'hidden', height: 0, width: 0 };
    return(
        <img
            style={{ height, width, ...style, }}
            className={className}
            src={srcImage}
            onLoad={() => setLoad(true)}
            alt={DOMPurify.sanitize(String(alt)) || "Image is not available"}
            id={DOMPurify.sanitize(id)}
        />
    )
    
}