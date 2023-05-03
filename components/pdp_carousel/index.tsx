function PdpCarousel(prodViewData: any) {
    return (
        <div className="flex mx-auto">
            <div className="flex mx-auto">
                <div className="">
                    <div className="_2mLllQ">
                        <ul className="_3GnUWp">
                            {prodViewData?.value[0]?.productImages?.value?.slice(0, 5).map((imgdata: any) => (
                                <li className="w-24 h-24 rounded box-border flex flex-row justify-center items-center p-2 bg-white border border-solid border-mckblue mb-3" key={imgdata?.id}>
                                    <img className="max-w-xl w-10" src={imgdata?.url}  />
                                </li>
                            )
                            )}
                        </ul>
                    </div>
                </div>
                <div className="w-[526px] h-[636px] box-border flex flex-row justify-center items-center p-2 bg-white rounded border border-solid border-mckblue ml-14">
                    <img alt="" src={prodViewData?.value[0]?.productImages?.value[1]?.url} />
                </div>
            </div>
        </div>
    );
}

export default PdpCarousel;
