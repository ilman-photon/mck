function ActiveProductFilter({
  activeFiltersData,
  activeFilter,
  handleClearOne,
  handleClearAll,
}: any) {
  return (
    <div className="flex lg:mb-2 items-center text-mckblue" tabIndex={0} aria-label={activeFiltersData?.activeFiltersText?.value}>
      {activeFiltersData?.activeFiltersText?.value}
      <img
        src={activeFiltersData?.activeFiltersImage?.expandedValue?.url}
        className="mr-2 ml-2" alt={activeFiltersData?.activeFiltersText?.value}
        tabIndex={0}
      />

      <div className="flex flex-wrap items-baseline">
        {activeFilter?.map((item: any) => {
          return (
            <div className="flex rounded-xl px-2 py-0.5 text-xs border border-[#001A71] font-normal text-sofia-regular mr-1 mb-3 mck-hn-selected-value" key={item}>
              {item}&nbsp;
              <img
                src="/images/hn-delete-icon.svg"
                className="mck-filter-delete-icon cursor-pointer"
                alt="delete icon"
                onClick={() => handleClearOne(item)}
              />
            </div>
          );
        })}
        <div className="flex cursor-pointer ml-2 items-baseline">
          <img
            src="/images/hn-delete-icon.svg"
            className="mck-filter-clearall-icon"
            alt="delete icon"
          />
          <div className="underline" onClick={handleClearAll} tabIndex={0} aria-label={activeFiltersData?.clearAllText?.value}>
            {activeFiltersData?.clearAllText?.value}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActiveProductFilter;
