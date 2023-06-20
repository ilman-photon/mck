import DOMPurify from 'isomorphic-dompurify';

function ActiveProductFilter({
  activeFiltersData,
  activeFilter,
  handleClearOne,
  handleClearAll,
}: any) {
  return (
    <div className="flex flex-wrap relative lg:mb-2 items-center text-mckblue"  aria-label={DOMPurify.sanitize(activeFiltersData?.activeFiltersText?.value)}>
      {DOMPurify.sanitize(activeFiltersData?.activeFiltersText?.value)}
      <img
        src={DOMPurify.sanitize(activeFiltersData?.activeFiltersImage?.expandedValue?.url)}
        className="mr-2 ml-2" alt={DOMPurify.sanitize(activeFiltersData?.activeFiltersText?.value)}
        aria-hidden={true}
      />

      <div className="flex flex-wrap items-baseline pt-3 lg:pt-0 w-full lg:w-auto">
        {activeFilter?.map((item: any) => {
          return (
            <div className="flex gap-1 items-center rounded-xl px-2 py-0.5 text-xs border border-[#001A71] font-normal text-sofia-regular mr-1 mb-4 ml-0 lg:mb-0 leading-[18px] bg-[#F8F9FB] max-h-[22px]" key={item}>
              {item}&nbsp;
              <img
                src="/images/hn-delete-icon.svg"
                className="cursor-pointer mt-0.5"
                alt="delete icon"
                onClick={() => handleClearOne(item)}
              />
            </div>
          );
        })}
        <div className="flex gap-0 cursor-pointer ml-2 items-baseline absolute left-auto right-0 top-0 lg:static">
          <img
            src="/images/hn-delete-icon.svg"
            className="w-3 ml-0 mr-1"
            alt="delete icon"
          />
          <div className="underline" onClick={handleClearAll}  aria-label={DOMPurify.sanitize(activeFiltersData?.clearAllText?.value)}>
            {DOMPurify.sanitize(activeFiltersData?.clearAllText?.value)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActiveProductFilter;
