import { useRouter } from "next/router";
import FooterComponent from "@/components/footer";
import HeaderComponent from "@/components/header";
import { useEffect, useState } from "react";
import FilterComponent from "@/components/filter";

function HealthNeedsComponent() {

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
        }
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
        <div className="container w-full mx-auto grid grid-cols-1">
            <div className="health-needs-categories">
                <div className="health-needs-categories-icons">
                    <ul>
                        <li><img src="images/beauty.svg" />Beauty</li>
                        <li><img src="images/bone.svg" />Bone</li>
                        <li><img src="images/digestion.svg" />Digestion</li>
                        <li><img src="images/energy.svg" />Energy</li>
                        <li><img src="images/eye-health.svg" />Eye Health</li>
                        <li><img src="images/general-wellness.svg" />General<br />Wellness</li>
                        <li><img src="images/heart.svg" />Heart</li>
                        <li><img src="images/immune-health.svg" />Immune<br />Health</li>
                        <li><img src="images/joints.svg" />Joints</li>
                        <li><img src="images/kids.svg" />Kids</li>
                        <li><img src="images/mens-health.svg" />Men's<br />Health</li>
                        <li><img src="images/mood.svg" />Mood</li>
                        <li><img src="images/prenatal-postnatal.svg" />Prenatal &<br />Postnatal</li>
                        <li><img src="images/sleep.svg" />Sleep</li>
                        <li><img src="images/stress.svg" />Stress</li>
                        <li><img src="images/womens-health.svg" />Women's<br />Health</li>
                    </ul>
                </div>
            </div>
            <div className="search-page-container">
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
                <div className="showing-filter-count">Showing 5 results</div>
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
        </div>
        </>
    );
}

export default HealthNeedsComponent;