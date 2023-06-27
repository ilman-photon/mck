import React, { useState, memo } from "react";
import DOMPurify from "isomorphic-dompurify";

interface CatogaryComponentProps {
  CatogaryListing: any;
  Catogarytitle: string;
  OnCatogarySelcete: (e: any) => void;
}

const ItemExpandeble = ({ dataCategory, OnCatogarySelcete, idx }: any) => {
  const [selectedValue, setSelectedValue] = useState<boolean>(false);
  const handleOnClick = (e: string) => {
    if (e == "Enter" || e === "click") {
      setSelectedValue(!selectedValue);
    }
  };

  return (
    <div
      className="lg:px-6 px-2 desktop:px-4 smalldekstop:px-4"
      key={`${dataCategory?.contentLink?.id}${idx}`}
    >
      <div className="tab text-mckblue w-full overflow-hidden lg:border-none sm:border-none xs:border-none">
        <React.Fragment>
          <input
            type="checkbox"
            id={dataCategory?.categoryDisplayName?.value}
            className="hidden"
            checked={selectedValue}
          />
          <label
            className="tab-label py-2 pr-4 flex cursor-pointer text-sofia-reg font-extrabold text-base relative"
            htmlFor={dataCategory?.categoryDisplayName?.value}
            id={`blog-subcatogary-lbl-${idx}`}
            tabIndex={0}
            role="application"
            onClick={(e) => handleOnClick("click")}
            onKeyUp={(e) => handleOnClick(e.key)}
          >
            {dataCategory?.categoryImage?.expandedValue?.url && (
              <img
                className="mr-3"
                src={DOMPurify.sanitize(
                  dataCategory?.categoryImage?.expandedValue?.url
                )}
                alt={DOMPurify.sanitize(
                  dataCategory?.categoryImage?.expandedValue?.name
                )}
                id={`blog-subcatogary-img-${idx}`}
                aria-hidden={true}
              />
            )}
            {dataCategory?.categoryDisplayName?.value}
          </label>
        </React.Fragment>
        <div className="tab-content text-sofia-reg font-normal text-base text-mcknormalgrey">
          {dataCategory?.subCategory?.value?.map((item: any, index: number) => (
            <button
              id={`blog-subcatogary-dis-${index}`}
              onClick={() => OnCatogarySelcete(item)}
              key={index}
              className="w-full list-none text-sofia-reg text-base font-normal text-mcknormalgrey cursor-pointer text-left hover:bg-shadesblue pl-2 py-1"
            >
              {item?.description}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const CatogaryComponent: React.FC<CatogaryComponentProps> = ({
  CatogaryListing,
  Catogarytitle,
  OnCatogarySelcete,
}) => {
  return (
    <div className="category-card shade-blue-border rounded-lg overflow-hidden pb-4 mb-6">
      <div
        className="text-mckblue shade-blue-bg py-3 px-4 text-sofia-bold font-extrabold text-lg mb-4"
        id="blog-label-008"
      >
        {Catogarytitle}
      </div>
      {CatogaryListing?.map((item: any, index: number) => (
        <ItemExpandeble
          key={index}
          dataCategory={item}
          OnCatogarySelcete={OnCatogarySelcete}
          idx={index}
        />
      ))}
    </div>
  );
};

export default memo(CatogaryComponent);
