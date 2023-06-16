import Link from "next/link";
import { ReactElement } from "react";
import DOMPurify from 'isomorphic-dompurify';

type LinkComponentProps = {
    rel?: string;
    key?: string;
    id?: string;
    "aria-label"?: string;
    href: string | object;
    className?: string;
    ariahidden:boolean;
    tabIndex:number;
    children?: ReactElement | string | number 
}
export function LinkComponent({rel, key, id, href, className, ariahidden, tabIndex, children, ...props}: LinkComponentProps){
    const child:any = children
    return(
        <Link
            {...props}
            className={className}
            tabIndex={tabIndex}
            rel={rel || "stylesheet"}
            href= {href || '#'}
            key={key}
            id={id && DOMPurify.sanitize(id)}
            aria-hidden={ariahidden}
            aria-label={props["aria-label"] && DOMPurify.sanitize(props["aria-label"])}
        >{children}</Link>

    )
}