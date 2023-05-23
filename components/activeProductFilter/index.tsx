function ActiveProductFilter({
  activeFiltersData,
  activeFilter,
  handleClearOne,
  handleClearAll,
}: any) {
  return (
    <div className="flex mb-2 items-center text-mckblue">
      {activeFiltersData?.activeFiltersText?.value}
      <img
        src={activeFiltersData?.activeFiltersImage?.expandedValue?.url}
        className="mr-2 ml-2"
      />

      <div className="flex flex-wrap items-baseline">
        {activeFilter?.map((item: any) => {
          return (
            <div className="flex rounded-full mck-hn-selected-value" key={item}>
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
          <div className="underline" onClick={handleClearAll}>
            {activeFiltersData?.clearAllText?.value}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActiveProductFilter;
