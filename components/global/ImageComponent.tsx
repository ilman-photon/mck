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
        img.src = src;

        const handleImageLoad = () => {
            setsrcImage(src);
        };

        const handleImageError = (e: any) => {
            setsrcImage(noImageSrc);
        };

        img.addEventListener('load', handleImageLoad);
        img.addEventListener('error', handleImageError);

        return () => {
            img.removeEventListener('load', handleImageLoad);
            img.removeEventListener('error', handleImageError);
        };
    }, [src]);

    const style: CSSProperties = didLoad ? {} : { visibility: 'hidden', height: 0, width: 0 };
    return <img
        style={{ height, width, ...style, }}
        className={className}
        src={DOMPurify.sanitize(srcImage)}
        onLoad={() => setLoad(true)}
        alt={DOMPurify.sanitize(String(alt)) || "Image is not available"}
        id={id}
    />;
}