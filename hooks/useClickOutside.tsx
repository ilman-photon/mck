import { useEffect, useState } from "react";

export function useOutsideClick(ref: any) {
    const [isOutsideClicked, setIsOutsideClicked] = useState<boolean>(false)
    useEffect(() => {
      function handleClickOutside(event: any) {
        if (ref && ref?.current && !ref?.current.contains(event.target)) {
            setIsOutsideClicked(true)
        }else {
            setIsOutsideClicked(false)
        }

      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
    return [isOutsideClicked];
  }