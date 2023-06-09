import { memo } from "react";

const TagsComponent = ({BlogInfo}: any) => {
  return (
    <div className="flex flex-wrap">
      {BlogInfo?.tag?.value.map((item: any, index: any) => (
        <div
          key={index}
          style={{
            backgroundColor: BlogInfo.tagBackgroundColorCode.value,
          }}
          className="categoryTag mb-1.5 text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 ml-1 border-solid shade-blue-border"
          id="blog-label-006"
        >
          {item.description}
        </div>
      ))}
    </div>
  );
};
export default memo(TagsComponent);
