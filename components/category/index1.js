import { useEffect } from "react";
export default function CategoryComponent(props) {
  useEffect(() => {
    console.log("CategoryComponent", props);
  });

  return <div></div>;
}
