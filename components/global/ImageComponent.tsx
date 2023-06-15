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
    ariahidden: boolean;
};

export function ImageComponent({
    src,
    height,
    width,
    alt,
    className,
    id,
    ariahidden
}: ImageComponentProps) {
    const [didLoad, setLoad] = React.useState(false);
    const [srcImage, setsrcImage] = React.useState<any>();
    const noImageSrc = useNoImage();

    useEffect(() => {
        const img = new Image();
        const sanitizedSrc = DOMPurify.sanitize(src);
        img.src = sanitizedSrc;

        const handleImageLoad = () => {
            setsrcImage(sanitizedSrc);
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

    const sanitizedAlt = alt ? DOMPurify.sanitize(String(alt)) : "Image is not available";
    const sanitizedId = DOMPurify.sanitize(id);

    return (
        <img
            style={{ height, width, ...style }}
            className={className}
            src={srcImage}
            onLoad={() => setLoad(true)}
            alt={sanitizedAlt}
            id={sanitizedId}
            aria-hidden={ariahidden}
        />
    );
}
