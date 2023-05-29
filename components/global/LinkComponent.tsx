import Link from "next/link";
import { ReactElement } from "react";

type LinkComponentProps = {
    rel?: string;
    key?: string;
    id?: string;
    "aria-label"?: string;
    href: string | object;
    className?: string;
    children?: ReactElement | string | number 
}
export function LinkComponent({rel, key, id, href, className, children, ...props}: LinkComponentProps){
    return(
        <Link
            {...props}
            className={className}
            rel={rel || "stylesheet"}
            href= {href || '#'}
            key={key}
            id={id}
            aria-label={props["aria-label"]}
        >{children}</Link>

    )
}