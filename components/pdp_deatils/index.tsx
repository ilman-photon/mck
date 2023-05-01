import axios from "axios";

function PdpDetail(pdpViewData: any) {
    return (
        <div className="lg:row-span-3 lg:ml-[72px] pdp-details-heading">
            <p className="text-gtl-med text-mckblue font-medium mb-6"
                dangerouslySetInnerHTML={{ __html: pdpViewData.value[0].title.value,}}></p>
            <h2 className="text-gtl-med text-mcknormalgrey text-4xl font-medium mb-2"
                dangerouslySetInnerHTML={{ __html: pdpViewData.value[0].subTitle.value, }}></h2>
            <p className="text-gtl-med text-mcknormalgrey text-4xl font-medium mb-2"
                dangerouslySetInnerHTML={{ __html: pdpViewData.value[0].volume.value, }}></p>
            {/* <p className="text-gtl-med text-mcknormalgrey text-4xl font-medium mb-6">100 SOFTGELS</p> */}
            <div className="border-y-2 py-6">
                <h6 className="text-gtl-med text-mcknormalgrey text-2xl font-medium">Description</h6>
                <ul className="pdp-detail-description text-sofia-reg text-mcknormalgrey text-lg font-normal list-disc pl-9">
                    <div dangerouslySetInnerHTML={{ __html: pdpViewData.value[0].description.value, }}></div>
                </ul>
            </div>
            <div className="flex flex-wrap justify-start overflow-hidden text-black">
                <input type="checkbox" id="chck2" />
                <label className="grow px-4 py-3 font-medium text-lg text-sofia-reg border-y flex w-full border-x-0" htmlFor="chck2">Ingredients</label>
                <div className="tab-content text-sofia-reg font-normal text-base text-mcknormalgrey w-full">
                    <p dangerouslySetInnerHTML={{ __html: pdpViewData.value[0].ingredients.value, }}></p>
                </div>
            </div>
            <div className="flex flex-wrap justify-start overflow-hidden text-black">
                <input type="checkbox" id="chck3" />
                <label className="grow px-4 py-3 font-medium text-lg text-sofia-reg border-y flex w-full border-x-0" htmlFor="chck3">Directions</label>
                <div className="tab-content text-sofia-reg font-normal text-base text-mcknormalgrey w-full">
                    <p dangerouslySetInnerHTML={{ __html: pdpViewData.value[0].ingredients.value, }}></p>
                </div>
            </div>
            <div className="flex flex-wrap justify-start overflow-hidden text-black">
                <input type="checkbox" id="chck4" />
                <label className="grow px-4 py-3 font-medium text-lg text-sofia-reg border-y flex w-full border-x-0" htmlFor="chck4">Warnings</label>
                <div className="tab-content text-sofia-reg font-normal text-base text-mcknormalgrey w-full">
                    <p dangerouslySetInnerHTML={{ __html: pdpViewData.value[0].warnings.value, }}></p>
                </div>
            </div>
        </div>
    );
}
export default PdpDetail;
