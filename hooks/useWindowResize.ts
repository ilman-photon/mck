import { useLayoutEffect, useState } from "react"

export const useWindowResize = () => {
    if(typeof window !== 'undefined'){
        const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
        useLayoutEffect(() => {
            function updateSize(){
                setSize([window.innerWidth, window.innerHeight]);
            }
            window.addEventListener('resize', updateSize);
            updateSize()
            return () => window.removeEventListener('resize', updateSize);
        }, [])
        return size;
    }
    return [0, 0];
}