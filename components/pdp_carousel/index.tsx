import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
function PdpCarousel(prodViewData: any) {
    const router = useRouter();
    const { data } = router.query;
    const [selectedItemIndex, setSelectedItemIndex] = useState(0);
    const [imageHighLight, setImageHighLight] = useState<string>();
    const [lastIndex, setLastIndex] = useState(6)
    const [arrowClick, setArrowClick] = useState(0)

    const [prodResponse, setProdResponse] = useState<any>();

    function fetchPDPCarouselDetails() {
        return axios.get(
            `${process.env.API_URL}/api/episerver/v3.0/content/?ContentUrl=${process.env.API_URL}/en/pdp/${data?.length ? data : "vitamin-d3-50-mcg-2000"}/&expand=*`,
            {
                headers: {
                    "Accept-Language": "en",
                },
            }
        );
    }

    useEffect(() => {
        fetchPDPCarouselDetails()
            .then((res) => {
                setProdResponse(res.data[0]);
            })
            .catch((e: Error | AxiosError) => console.log(e));
    }, []);
     const handleDownArrowClick =()=>{
        // if(selectedItemIndex === prodResponse?.productImages?.value.length -1){
        //     return
        // }
        if(lastIndex < prodResponse?.productImages?.value.length){
            setArrowClick(() => arrowClick + 1)
            setLastIndex(() => lastIndex + 1)
        }
     }

     const handleUpArrowClick = () =>{
        // if(selectedItemIndex <= 0){
        //     return
        // }
        if(lastIndex > 6){
            setArrowClick(() => arrowClick - 1)
            setLastIndex(() => lastIndex - 1)
        }
     }

     const handleImageClick =(i:any) =>{
        setSelectedItemIndex(i)
    }
    
    const handleMouseOver = (id: number, event: any) => {
        console.log("**** odspda", event.target.id)
        setImageHighLight(event.target.id);
        setSelectedItemIndex(id)
    }
    
    console.log("**** image hei", lastIndex )

    const a = (imageH: string, idx: number) => `${imageH === `pdp_carousel_${idx}` ? 'bg-green' : 'bg-blue'}`
    
     return (
        <div className="flex lg:mx-auto lg:h-[636px] mx-4 lg:mx-0" tabIndex={0} role='slider'>
            <div className="flex flex-col-reverse lg:flex-row pdp-carousel">
                <div className="pdp_images flex lg:grid relative">
                <div className="hidden lg:block cursor-pointer absolute left-[36px] top-[-13px]">
                <img onClick={handleUpArrowClick} src="images\carousel_top.png" className="m-auto" />
                </div>
                <div onClick={handleUpArrowClick} className="carousel-prev -left-6 cursor-pointer lg:hidden flex items-center absolute left-[-10px] top-[27px]">
                    <svg width="28" height="49" viewBox="0 0 48 49" tabIndex={0} id="hcp-btn-005" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24.8306" r="24" fill="#4D5F9C"></circle><path d="M28.9401 18.7106L27.0601 16.8306L19.0601 24.8306L27.0601 32.8306L28.9401 30.9506L22.8334 24.8306L28.9401 18.7106Z" fill="#ffffff"></path></svg></div>
                    {/* <button onClick={handleUpArrowClick}>Up arrow</button> */}
                    <ul className="_3GnUWp flex lg:grid">
                        {prodResponse?.productImages?.value?.slice(arrowClick, lastIndex).map((imgdata: any, index :any ) => {
                            console.log("**** inside map ", index, selectedItemIndex, arrowClick, lastIndex)
                            return(
                                <li className={`lg:w-24 w-20 lg:h-24 h-20 rounded box-border flex flex-row justify-center items-center p-2 bg-white border border-solid border-mckblue mb-3 
                                ${selectedItemIndex === index ? 'cursor-pointer border-solid border-4 border-indigo-600 hover:border-solid hover:border-4' : ''} 
                                
                                `}
                                
                                id={"pdp_carousel_"+index}
                                // key={imgdata?.id}
                                key={Math.random()}
                                onClick={() => {
                                    handleImageClick(index);
                                  }}
                                onMouseOver={(event) => handleMouseOver(index, event)}
                                // onMouseLeave={handleMouseLeave}
                                >
                                    <img className="max-w-xl w-10" src={imgdata?.url}  alt=""/>
                                </li>
                            )}
                            )}
                    </ul>
                    {/* <button onClick={handleDownArrowClick}>Down arrow</button> */}
                    <div className="hidden lg:block cursor-pointer absolute bottom-[-13px] left-[36px]">   
                    <img onClick={handleDownArrowClick} src="images\carousel_down.png" className="m-auto" />
                    </div>
                                
            <div onClick={handleDownArrowClick} className="carousel-next -right-6 lg:hidden cursor-pointer flex items-center absolute top-[27px] right-[-10px]">
            
                <svg width="24" height="49" viewBox="0 0 48 49" tabIndex={0} id="hcp-btn-006" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24.8306" r="24" fill="#001A71"></circle><path d="M20.9401 16.8306L19.0601 18.7106L25.1667 24.8306L19.0601 30.9506L20.9401 32.8306L28.9401 24.8306L20.9401 16.8306Z" fill="#fff"></path></svg></div>
                </div>
               <div className="lg:w-[526px] box-border flex flex-row justify-center items-center p-2 bg-white rounded border border-solid border-mckblue lg:ml-14">
                  <img className="lg:w-[270px]" alt="" id={"pdp_carousel_"+prodResponse?.productImages?.value?.imgdata?.id} src={prodResponse?.productImages?.value[selectedItemIndex + arrowClick]?.url} />
               </div>
            </div>
        </div>
     )
}

export default PdpCarousel;
