import { memo } from "react";
import DOMPurify from 'isomorphic-dompurify';
import { handlecategoryColorCode } from "../global/CommonUtil";
import { useHeaderStore } from "../navbar/Store/useNavBarStore";
const TagsComponent = ({BlogTag}: any) => {
  const catMapping = useHeaderStore((state) => state.categoryMapping);
  return (
    <div className="flex flex-wrap">
      {BlogTag?.value.map((item: any, index: any) => (
        <div
          key={index}
          style={{
            backgroundColor: handlecategoryColorCode(item.id, catMapping),
        }}
          className="categoryTag mb-1.5 text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 ml-1 border-solid shade-blue-border"
          id="blog-label-006"
        >
          {DOMPurify.sanitize(item?.description)}
        </div>
      ))}
    </div>
  );
};
export default memo(TagsComponent);
