function PdpCarousel(prodViewData: any) {
    console.log(prodViewData, "prodViewData")
    // {
    //     prodViewData.value &&
    //         (prodViewData.value.map((detail: any) => {
    //             return (
    //                 <div className="flex mx-auto">
    //                     <div className="flex mx-auto">
    //                         <div key={detail.contentLink.id}>
    //                             <div className="_2mLllQ">
    //                                 <ul className="_3GnUWp">
    //                                     <li className="w-24 h-24 rounded box-border flex flex-row justify-center items-center p-2 bg-white border border-solid border-mckblue mb-3">
    //                                         {detail.productImages.value && detail.productImages.value.map((pic: any) => {
    //                                             return <img className="max-w-xl w-10" key={pic.id} src={pic.url} />
    //                                         })}
    //                                     </li>
    //                                 </ul>
    //                             </div>
    //                         </div>
    //                         <div className="w-[526px] h-[636px] box-border flex flex-row justify-center items-center p-2 bg-white rounded border border-solid border-mckblue ml-14">
    //                             {detail.productImages.value && detail.productImages.value.map((image: any) => {
    //                                 <img alt="" src={image.url} />
    //                             })}
    //                         </div>
    //                     </div>
    //                 </div>
    //             )
    //         }
    //         )
    //         )
    // }

    return (
        <div className="flex mx-auto">
            <div className="flex mx-auto">
                <div className="">
                    <div className="_2mLllQ">
                        <ul className="_3GnUWp">

                            {prodViewData.value[0].productImages.value.slice(0, 3).map((imgdata: any) => (
                                <img className="max-w-xl w-10" src={imgdata?.url} key={imgdata?.id} />
                            )
                            )}

                            {/* <li className="w-24 h-24 rounded box-border flex flex-row justify-center items-center p-2 bg-white border border-solid border-mckblue mb-3">
                                <img className="max-w-xl w-10" src={prodViewData.value[0].productImages.value[0].url} />
                            </li>
                            <li className="w-24 h-24 rounded box-border flex flex-row justify-center items-center p-2 bg-white border border-solid border-mckblue mb-3">
                                <img className="max-w-xl w-10" src={prodViewData.value[0].productImages.value[1].url} />
                            </li>
                            <li className="w-24 h-24 rounded box-border flex flex-row justify-center items-center p-2 bg-white border border-solid border-mckblue mb-3">
                                <img className="max-w-xl w-10" src={prodViewData.value[0].productImages.value[2].url} />
                            </li>
                            <li className="w-24 h-24 rounded box-border flex flex-row justify-center items-center p-2 bg-white border border-solid border-mckblue mb-3">
                                <img className="max-w-xl w-10" src={prodViewData.value[0].productImages.value[3].url} />
                            </li>
                            <li className="w-24 h-24 rounded box-border flex flex-row justify-center items-center p-2 bg-white border border-solid border-mckblue mb-3">
                                <img className="max-w-xl w-10" src={prodViewData.value[0].productImages.value[4].url} />
                            </li>
                            <li className="w-24 h-24 rounded box-border flex flex-row justify-center items-center p-2 bg-white border border-solid border-mckblue mb-3">
                                <img className="max-w-xl w-10" src={prodViewData.value[0].productImages.value[5].url} />
                            </li> */}
                            {/* <li className="w-24 h-24 rounded box-border flex flex-row justify-center items-center p-2 bg-white border border-solid border-mckblue mb-3">
                                <img src={prodViewData.value[0].productImages.value[6].url} />
                            </li> */}
                        </ul>
                    </div>
                </div>
                <div className="w-[526px] h-[636px] box-border flex flex-row justify-center items-center p-2 bg-white rounded border border-solid border-mckblue ml-14">
                    <img alt="" src={prodViewData.value[0].productImages.value[1].url} />
                </div>
            </div>
        </div>
    );
}

export default PdpCarousel;
