import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { useWindowResize } from "@/hooks/useWindowResize";
import { HandleImageLoading } from "../health_needs/HealthNeedImageComponent";

function PdpCarousel(prodViewData: any) {
    const router = useRouter();
    const [deviceWidth] = useWindowResize();
    const { data } = router.query;
    const [selectedItemIndex, setSelectedItemIndex] = useState(0);
    const [lastIndex, setLastIndex] = useState(0);
    const [arrowClick, setArrowClick] = useState(0);


    const [prodResponse, setProdResponse] = useState<any>();

    // const url = `${process.env.API_URL}/api/episerver/v3.0/content/?ContentUrl=${process.env.API_URL}/en/pdp/${data?.length ? data : "vitamin-d3-50-mcg-2000"}/&expand=*`
    function fetchPDPCarouselDetails() {
        // console.log("query data --> ", router, data)
        return axios.get(
            `${process.env.API_URL}/api/episerver/v3.0/content/?ContentUrl=${process.env.API_URL}/en/pdp/${data?.length && data }/&expand=*`,
            {
                headers: {
                    "Accept-Language": "en",
                },
            }
        );
    }
    useEffect(() => {
        setLastIndex(deviceWidth <= 400 ? 3 : (deviceWidth > 400 && deviceWidth <= 812) ? 4 : (deviceWidth > 812 && deviceWidth <= 1024) ? 5 : 6)
        setArrowClick(0);
    }, [deviceWidth])



    useEffect(() => {
        fetchPDPCarouselDetails()
            .then((res) => {
                setProdResponse(res.data[0]);
            })
            .catch((e: Error | AxiosError) => console.log(e));
    }, [prodResponse?.routeSegment, data]);
    console.log("response ---> ", prodResponse)
    const handleDownArrowClick = () => {
        if (lastIndex < prodResponse?.productImages?.value?.length) {
            setArrowClick(() => arrowClick + 1)
            setLastIndex(() => lastIndex + 1)
        }
    }

    const handleUpArrowClick = () => {
        if (arrowClick > 0) {
            setArrowClick(() => arrowClick - 1)
            setLastIndex(() => lastIndex - 1)
        }
    }

    const handleImageClick = (i: any) => {
        setSelectedItemIndex(i)
    }

    const handleMouseOver = (id: number) => {
        setSelectedItemIndex(id)
    }

    return (
        <div className="flex lg:mx-auto lg:h-[636px] mx-4 lg:mx-0" tabIndex={0}  id="pdp-01">
            <div className="flex flex-col-reverse lg:flex-row pdp-carousel w-full">
                <div className="pdp_images flex lg:grid relative">
                    <div className="hidden lg:block cursor-pointer absolute left-[36px] top-[-13px]">
                        <img onClick={handleUpArrowClick} src="images\carousel_top.png" alt="img" className={`m-auto ${arrowClick === 0 ? 'opacity-25' : ''}`} id="pdp-img-001" />
                    </div>
                    <div onClick={handleUpArrowClick} className={`carousel-prev -left-6 cursor-pointer lg:hidden flex items-center absolute left-[-10px] top-[27px] ${arrowClick === 0 ? 'opacity-25' : ''}`}>
                        <svg width="28" height="49" viewBox="0 0 48 49" tabIndex={0} id="hcp-btn-005" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24.8306" r="24" fill="#4D5F9C"></circle><path d="M28.9401 18.7106L27.0601 16.8306L19.0601 24.8306L27.0601 32.8306L28.9401 30.9506L22.8334 24.8306L28.9401 18.7106Z" fill="#ffffff"></path></svg></div>
                    {/* <button onClick={handleUpArrowClick}>Up arrow</button> */}
                    <ul className="3GnUWp flex lg:flex-col">
                        {prodResponse?.productImages?.value?.slice(arrowClick, lastIndex).map((imgdata: any, index: any) => {
                            return (
                                <li className={`lg:w-24 w-20 lg:h-24 h-20 rounded box-border flex flex-row justify-center items-center p-2 bg-white border border-solid border-mckblue mb-3 
                                    ${selectedItemIndex === index ? 'cursor-pointer border-solid border-4 border-indigo-600 hover:border-solid hover:border-4' : ''} 
                                `}

                                    id={"pdp_carousel_" + index}
                                    // key={imgdata?.id}
                                    key={Math.random()}
                                    onClick={() => {
                                        handleImageClick(index);
                                    }}
                                    onMouseOver={(event) => handleMouseOver(index)}
                                >
                                    <img className="max-w-xl w-10" role="img" src={imgdata?.url} alt={`pdp-img-C0` + index} id={`pdp-img-C0` + index} />
                                </li>
                            )
                        }
                        )}
                    </ul>
                    {/* <button onClick={handleDownArrowClick}>Down arrow</button> */}
                    <div className="hidden lg:block cursor-pointer absolute bottom-[-13px] left-[36px]">
                        <img onClick={handleDownArrowClick} src='images\carousel_down.png' alt="image" className={`m-auto ${lastIndex === prodResponse?.productImages?.value?.length ? 'opacity-25' : ''}`} />
                    </div>

                    <div onClick={handleDownArrowClick} className={`carousel-next -right-6 lg:hidden cursor-pointer flex items-center absolute top-[27px] right-[-10px] ${lastIndex === prodResponse?.productImages?.value?.length ? 'opacity-25' : ''}`}>

                        <svg width="24" height="49" viewBox="0 0 48 49" tabIndex={0} id="hcp-btn-006" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24.8306" r="24" fill="#001A71"></circle><path d="M20.9401 16.8306L19.0601 18.7106L25.1667 24.8306L19.0601 30.9506L20.9401 32.8306L28.9401 24.8306L20.9401 16.8306Z" fill="#fff"></path></svg></div>
                </div>
                <div className={`lg:w-[526px] ${(deviceWidth < 1024 && deviceWidth !== 0) ? 'h-[300px]' : ''} box-border flex flex-row justify-center items-center p-2 bg-white rounded border border-solid border-mckblue lg:ml-14`}>
                    <HandleImageLoading 
                        src={prodResponse?.productImages?.value && prodResponse?.productImages?.value[selectedItemIndex + arrowClick]?.url}
                        className="lg:w-[270px]"
                        alt='Image is not available'
                        id={"pdp_carousel_" + prodResponse?.productImages?.value?.imgdata?.id}
                    />
                </div>
            </div>
        </div>
    )
}

export default PdpCarousel;
