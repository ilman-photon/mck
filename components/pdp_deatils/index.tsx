import axios from "axios";

function PdpDetail(pdpViewData: any) {
    return (
        <div className="row-span-3">
            <h1 className="text-gtl-med text-mckblue text-54 font-medium mb-6"
                dangerouslySetInnerHTML={{ __html: pdpViewData.value[0].title.value, }}></h1>
            <h2 className="text-gtl-med text-mcknormalgrey text-4xl font-medium mb-2"
                dangerouslySetInnerHTML={{ __html: pdpViewData.value[0].subTitle.value, }}></h2>
            <p className="text-gtl-med text-mcknormalgrey text-4xl font-medium mb-2"
            dangerouslySetInnerHTML={{ __html: pdpViewData.value[0].volume.value, }}></p>
            {/* <p className="text-gtl-med text-mcknormalgrey text-4xl font-medium mb-6">100 SOFTGELS</p> */}
            <div className="border-y-2 py-6">
                <h6 className="text-gtl-med text-mcknormalgrey text-2xl font-medium">Description</h6>
                <ul className="text-sofia-reg text-mcknormalgrey text-lg font-normal list-disc pl-9">
                    <div dangerouslySetInnerHTML={{ __html: pdpViewData.value[0].description.value, }}></div>
                </ul>
            </div>

            <div className="flex flex-wrap justify-start overflow-hidden text-black">
                <label className="grow px-4 py-3 font-medium text-lg text-sofia-reg border-b flex">Ingredients
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mx-2 my-1 h-6 w-6 transition-all duration-200 peer-checked:rotate-45 ml-auto">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                    </svg>
                </label>
                <input className="hidden peer mx-4 my-3 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0" type="checkbox" name="collapse" id="collapse" />

                <div className="-transparent absolute -translate-y-full scale-75 scale-y-0 px-4 py-3 opacity-0 transition-all duration-200 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100  peer-checked:opacity-100 text-lg text-sofia-reg border-b"
                    dangerouslySetInnerHTML={{ __html: pdpViewData.value[0].ingredients.value, }}>
                </div>
            </div>
            <div className="flex flex-wrap justify-start overflow-hidden text-black">
                <label className="grow px-4 py-3 font-medium text-lg text-sofia-reg border-b flex">Directions
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mx-2 my-1 h-6 w-6 transition-all duration-200 peer-checked:rotate-45 ml-auto">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                    </svg>
                </label>
                <input className="hidden peer mx-4 my-3 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0" type="checkbox" name="collapse2" id="collapse2" />

                <div className="-transparent absolute -translate-y-full scale-75 scale-y-0 px-4 py-3 opacity-0 transition-all duration-200 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100  peer-checked:opacity-100 text-lg text-sofia-reg"
                    dangerouslySetInnerHTML={{ __html: pdpViewData.value[0].directions.value, }}></div>
            </div>
            <div className="flex flex-wrap justify-start overflow-hidden text-black">
                <label className="grow px-4 py-3 font-medium text-lg text-sofia-reg border-b flex">Warnings
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mx-2 my-1 h-6 w-6 transition-all duration-200 peer-checked:rotate-45 ml-auto">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                    </svg>
                </label>
                <input className="hidden peer mx-4 my-3 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0" type="checkbox" name="collapse3" id="collapse3" />

                <div className="-transparent absolute -translate-y-full scale-75 scale-y-0 px-4 py-3 opacity-0 transition-all duration-200 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100  peer-checked:opacity-100 text-lg text-sofia-reg"
                    dangerouslySetInnerHTML={{ __html: pdpViewData.value[0].warnings.value, }}></div>
            </div>
        </div>
    );
}
export default PdpDetail;
