import { useRouter } from "next/router";
import FooterComponent from "@/components/footer";
import HeaderComponent from "@/components/header";
import { useEffect, useState } from "react";
import FilterComponent from "@/components/filter";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

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
                            <div className="filter-section"><FilterComponent /></div>
                            <div className="product-list-section-container w-full">
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
                                {/* Beauty Carousel  */}
                                <div className="container mx-auto">
                                    <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
                                        {/* Carousel for desktop and large size devices */}
                                        <CarouselProvider className="lg:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={8} visibleSlides={4} step={1} infinite={true} naturalSlideHeight={0}>
                                            <div className="w-full relative flex items-center justify-center">
                                                <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                                                    <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </ButtonBack>
                                                <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                                                    <Slider>
                                                        <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                                            <Slide index={0}>
                                                                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                                    <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                                                    <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                                        <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 1</h2>
                                                                        <div className="flex h-full items-end pb-6">
                                                                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Slide>
                                                            <Slide index={1}>
                                                                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                                    <img src="https://i.ibb.co/DWrGxX6/carosel-2.png" alt="sitting area" className="object-cover object-center w-full" />
                                                                    <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                                        <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                                        <div className="flex h-full items-end pb-6">
                                                                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Slide>
                                                            <Slide index={2}>
                                                                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                                    <img src="https://i.ibb.co/tCfVky2/carosel-3.png" alt="sitting area" className="object-cover object-center w-full" />
                                                                    <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                                        <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                                        <div className="flex h-full items-end pb-6">
                                                                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Slide>
                                                            <Slide index={3}>
                                                                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                                    <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
                                                                    <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                                        <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                                        <div className="flex h-full items-end pb-6">
                                                                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Slide>
                                                            <Slide index={4}>
                                                                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                                    <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                                                    <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                                        <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                                        <div className="flex h-full items-end pb-6">
                                                                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Slide>
                                                            <Slide index={5}>
                                                                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                                    <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                                                    <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                                        <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                                        <div className="flex h-full items-end pb-6">
                                                                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Slide>
                                                            <Slide index={6}>
                                                                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                                    <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                                                    <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                                        <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                                        <div className="flex h-full items-end pb-6">
                                                                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Slide>
                                                            <Slide index={7}>
                                                                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                                    <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                                                    <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                                        <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                                        <div className="flex h-full items-end pb-6">
                                                                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Slide>
                                                            <Slide index={8}>
                                                                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                                    <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                                                    <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                                        <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                                        <div className="flex h-full items-end pb-6">
                                                                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Slide>
                                                        </div>
                                                    </Slider>
                                                </div>
                                                <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                                                    <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </ButtonNext>
                                            </div>
                                        </CarouselProvider>
                                    </div>
                                </div>
                                <div className="product-where-to-buy grid grid-cols-1">
                                    <div className="relative isolate overflow-hidden bg-slate-200 py-16 sm:py-24 lg:py-10">
                                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                                            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                                                <div className="flex max-w-xl lg:max-w-lg">
                                                    <img src="images/allergy-relief.png" alt="allergy relief" className="pr-6" />
                                                    <div>
                                                        <p className="mt-4 text-lg">Allergy relief that starts working fast on the first day you take it.</p>
                                                        <div id="cta-btn" className="jsx-290076256 w-[124px] h-[44px] m-3 ml-0 text-sofia-bold flex justify-center items-center text-center text-white bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer">Learn More</div>
                                                    </div>
                                                </div>
                                                <div className="flex max-w-xl lg:max-w-lg">
                                                    <img src="images/childrens-allergy-relief.png" alt="allergy relief" className="pr-6" />
                                                    <div>
                                                        <p className="mt-4 text-lg">Allergy relief that starts working fast on the first day you take it.</p>
                                                        <div id="cta-btn" className="jsx-290076256 w-[124px] h-[44px] m-3 ml-0 text-sofia-bold flex justify-center items-center text-center text-white bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer">Learn More</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                {/* <!-- Image gallery --> */}
                                <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                                    <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                                        <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg" alt="Two each of gray, white, and black shirts laying flat." className="h-full w-full object-cover object-center" />
                                    </div>
                                    <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                                        <div className="flex max-w-xl lg:max-w-lg">
                                            <img src="images/allergy-relief.png" alt="allergy relief" className="pr-6" />
                                            <div>
                                                <p className="mt-4 text-lg">Allergy relief that starts working fast on the first day you take it.</p>
                                                <div id="cta-btn" className="jsx-290076256 w-[124px] h-[44px] m-3 ml-0 text-sofia-bold flex justify-center items-center text-center text-white bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer">Learn More</div>
                                            </div>
                                        </div>
                                        <div className="flex max-w-xl lg:max-w-lg">
                                            <img src="images/allergy-relief.png" alt="allergy relief" className="pr-6" />
                                            <div>
                                                <p className="mt-4 text-lg">Allergy relief that starts working fast on the first day you take it.</p>
                                                <div id="cta-btn" className="jsx-290076256 w-[124px] h-[44px] m-3 ml-0 text-sofia-bold flex justify-center items-center text-center text-white bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer">Learn More</div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}

export default HealthNeedsComponent;