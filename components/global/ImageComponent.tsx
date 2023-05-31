import React, { CSSProperties, useEffect } from "react";

import NoImageAvailable from '../../public/images/No_image_available.png'
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

    useEffect(() => {
        const img = new Image();
        img.src = src;

        const handleImageLoad = () => {
            setsrcImage(src);
        };

        const handleImageError = () => {
            setsrcImage("https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg");
        };

        img.addEventListener('load', handleImageLoad);
        img.addEventListener('error', handleImageError);

        return () => {
            img.removeEventListener('load', handleImageLoad);
            img.removeEventListener('error', handleImageError);
        };
    }, []);

    const style: CSSProperties = didLoad ? {} : { visibility: 'hidden', height: 0, width: 0 };

    return <img
        style={{ height, width, ...style, }}
        className={className}
        src={srcImage}
        onLoad={() => setLoad(true)}
        alt={alt || "Image is not available"}
        id={id}
    />;
}