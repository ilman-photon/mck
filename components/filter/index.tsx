function FilterComponent() {
  const filterArr = [
    {
      lable: "Gender",
      filter: [
        { name: "View All", checked: false },
        { name: "Female", checked: false },
        { name: "Male", checked: false },
      ],
    },
    {
      lable: "Age",
      filter: [
        { name: "View All", checked: false },
        { name: "Adults", checked: false },
        { name: "Children", checked: false },
      ],
    },
    {
      lable: "Form",
      filter: [
        { name: "Bandage", checked: false },
        { name: "Capsule", checked: false },
        { name: "Chewable", checked: false },
        { name: "Liquid Gel", checked: false },
        { name: "Tablet", checked: false },
      ],
    },
  ];

  const handleClickFilter = (
    obj: any,
    index: any,
    item: any,
    filterIndex: any
  ) => {
    console.log(
      "obj",
      obj,
      "index",
      index,
      "item",
      item,
      "filterIndex",
      filterIndex
    );
  };

  return (
    <div>
      {filterArr.map((obj, index) => (
        <div className="filter-container" key={obj.lable}>
          <div className="heading">{obj.lable}</div>
          <div className="filter-option">
            {obj.filter.map((item, filterIndex) => (
              <div
                className="filter-row"
                key={item.name}
                onClick={() => handleClickFilter(obj, index, item, filterIndex)}
              >
                <input
                  id={item.name}
                  type="checkbox"
                  value={item.name}
                  checked={item.checked}
                />
                <div>{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default FilterComponent;
