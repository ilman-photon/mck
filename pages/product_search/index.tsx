import { useRouter } from "next/router";
import FooterComponent from "@/components/footer";
import HeaderComponent from "@/components/header";
import { useEffect, useState } from "react";
import FilterComponent from "@/components/filter";
import GoogleTagManager from "@/components/google_tag_manager";

function ProductSearchList() {
  const router = useRouter();

  const f = {
    name: "Gender",
    filter: [
      { name: "View All", checked: false },
      { name: "Female", checked: false },
      { name: "Male", checked: false },
    ],
  };

  const ProductArr = [
    {
      img: "/images/p_list.png",
      name: "Allergy Relief",
      cat: { name: "Acute Care", bg: "#79CDEE" },
      des: "Antihistamine Loratadine oral solution USP, 5 mg/5 ml",
    },
    {
      img: "/images/p_list.png",
      name: "Allergy Relief",
      cat: { name: "Acute Care", bg: "#79CDEE" },
      des: "Antihistamine Loratadine oral solution USP, 5 mg/5 ml",
    },
    {
      img: "/images/p_list.png",
      name: "Allergy Relief",
      cat: { name: "Acute Care", bg: "#79CDEE" },
      des: "Antihistamine Loratadine oral solution USP, 5 mg/5 ml",
    },
    {
      img: "/images/p_list.png",
      name: "Allergy Relief",
      cat: { name: "Acute Care", bg: "#79CDEE" },
      des: "Antihistamine Loratadine oral solution USP, 5 mg/5 ml",
    },
    {
      img: "/images/p_list.png",
      name: "Allergy Relief",
      cat: { name: "Acute Care", bg: "#79CDEE" },
      des: "Antihistamine Loratadine oral solution USP, 5 mg/5 ml",
    },
    {
      img: "/images/p_list.png",
      name: "Allergy Relief",
      cat: { name: "Acute Care", bg: "#79CDEE" },
      des: "Antihistamine Loratadine oral solution USP, 5 mg/5 ml",
    },
    {
      img: "/images/p_list.png",
      name: "Allergy Relief",
      cat: { name: "Acute Care", bg: "#79CDEE" },
      des: "Antihistamine Loratadine oral solution USP, 5 mg/5 ml",
    },
  ];

  // const [checkBoxValue, setCheckBoxValue] = useState(filterArr);
  const [filterItemArr, setFilterItemArr] = useState<Array<string>>([]);
  const [checked, setChecked] = useState<boolean>(false);

  const deleteFilter = (item: any) => {
    // item.checked = false;

    setFilterItemArr(filterItemArr.filter((ele) => item !== ele));
  };

  useEffect(() => {
    // console.log("router", checkBoxValue);
  });

  return (
    <>
      <GoogleTagManager/>
      <HeaderComponent />
      <div className="search-page-container">
        <div className="search-page-header">
          <div className="search-result-count">
            18 results found for &quot;Pain Relief&quot;
          </div>
          <div className="search-result-text">
            Showing results for <i>Pain Relief</i>
          </div>
          <div className="showing-result-count">Showing 18 results</div>
        </div>
        <div className="search-page-section">
          <div className="active-filter-section">
            <div className="text">Active Filters</div>
            <img src="images/filter_img.png" alt="" width={14} />
            <div className="selected-filter">
              {filterItemArr.map((ele) => (
                <div key={ele}>
                  <span>{ele}</span>
                  <span className="close-btn" onClick={() => deleteFilter(ele)}>
                    X
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="showing-filter-count">Showing 6 results</div>
          <div className="filter-and-product-section">
            <div className="filter-section">{/* <FilterComponent /> */}</div>
            <div className="product-list-section">
              {ProductArr.map((ele, index) => {
                return (
                  <div className="product-container" key={ele.name + index}>
                    <img className="product-img" src={ele.img} />
                    <div
                      className="category"
                      style={{ backgroundColor: ele.cat.bg }}
                    >
                      {ele.cat.name}
                    </div>
                    <div className="name">{ele.name}</div>
                    <div className="description">{ele.des}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
}

export default ProductSearchList;
