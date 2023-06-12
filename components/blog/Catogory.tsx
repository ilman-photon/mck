import React, { memo } from "react";
import DOMPurify from 'isomorphic-dompurify';

interface CatogaryComponentProps {
  CatogaryListing: any;
  Catogarytitle: string;
  OnCatogarySelcete: (e: any) => void;
}

const CatogaryComponent: React.FC<CatogaryComponentProps> = ({
  CatogaryListing,
  Catogarytitle,
  OnCatogarySelcete,
}) => {

  return (
    <div className="category-card shade-blue-border rounded-lg overflow-hidden pb-4 mb-6">
      <div className="text-mckblue shade-blue-bg py-3 px-4 text-sofia-bold font-extrabold text-lg mb-4" id="blog-label-008">
        {Catogarytitle}
      </div>
      {CatogaryListing?.map((item: any, index: number) => (
        <div className="lg:px-6 px-2" key={`${item?.contentLink?.id}${index}`}>
          <div className="tab text-mckblue w-full overflow-hidden lg:border-none sm:border-none xs:border-none">
            <React.Fragment>
              <input type="checkbox" id={item.categoryDisplayName.value} className="hidden" />
              <label className="tab-label py-2 pr-4 flex cursor-pointer text-sofia-reg font-extrabold text-base relative" htmlFor={item.categoryDisplayName.value}>
                {item?.categoryImage?.expandedValue?.url && (
                  <img
                    className="mr-3"
                    src={DOMPurify.sanitize(item?.categoryImage?.expandedValue?.url)}
                    alt={DOMPurify.sanitize(item?.categoryImage?.expandedValue?.name)}
                    id={item.categoryImage.expandedValue.name}
                  />
                )}
                {item?.categoryDisplayName?.value}
              </label>
            </React.Fragment>
            <div className="tab-content text-sofia-reg font-normal text-base text-mcknormalgrey">
              {item.subCategory.value.map((item: any, index: number) => (
                <button onClick={() => OnCatogarySelcete(item)} key={index} className="w-full list-none text-sofia-reg text-base font-normal text-mcknormalgrey cursor-pointer text-left hover:bg-shadesblue pl-2 py-1">
                  {item?.description}
                </button>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(CatogaryComponent);
