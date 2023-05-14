import React from 'react';

function PageNotFound() {
    return (
        <>
        <div className="lg:p-72 p-4 pb-0 container mx-auto lg:mt-36 mt-16">
        <div className="text-54 font-medium text-gtl-med text-mckblue lg:pb-6 pb-1" tabIndex={0} id="pnf_label_001">No Matches Found for “Hip Replacement”</div>
        <div className="text-lg text-sofia-reg text-black pb-1 font-normal" tabIndex={0} id="pnf_label_002">Showing results for <span className="text-mckblue italic">hip replacement</span></div>
        <div className="text-base text-sofia-reg text-black lg:pb-6 pb-3 font-normal" tabIndex={0} id="pnf_label_003">Search for <span className="text-mckred italic">Pain Releef</span></div>
        <div className="lg:text-lg text-base pb-6 text-sofia-reg font-normal textmcknormalgrey lg:pb-11 border-b-[#CCD1E3]" tabIndex={0} id="pnf_label_003_01">Showing 18 results</div>
        <div className="border-[#CCD1E3] border rounded-lg overflow-hidden lg:mb-6 mb-4">
            <div className="px-4 py-3 text-lg font-extrabold text-sofia-bold text-mckblue bg-[#F8F9FB] border-b" tabIndex={0} id="pnf_label_004">Search Tips</div>
            <div className="p-6 text-lg text-sofia-reg text-mcknormalgrey">
                <ul className="list-disc ml-5" tabIndex={0} id="pnf_label_005">
                    <li tabIndex={0} id="pnf_label_005_01">Search by product type, product number, or product feature</li>
                    <li tabIndex={0} id="pnf_label_005_02">Check your spelling</li>
                    <li tabIndex={0} id="pnf_label_005_03">Broaden your search by using fewer or more general words</li>
                </ul>
            </div>
        </div>
        <div className="grid lg:grid-cols-2">
        <div className="border-[#CCD1E3] border rounded-lg overflow-hidden lg:mr-6 mb-4 lg:mb-0">
            <div className="px-4 py-3 text-lg font-extrabold text-sofia-bold text-mckblue bg-[#F8F9FB] border-b" tabIndex={0} id="pnf_label_006">Speak to a Specialist</div>
            <div className="p-6 text-lg text-sofia-reg text-mckblue">
                <p><a href="" tabIndex={0} id="pnf_label_006_01" role="link" aria-label="Find a store">Find a store</a></p>
            </div>
        </div>
        <div className="border-[#CCD1E3] border rounded-lg overflow-hidden">
            <div className="px-4 py-3 text-lg font-extrabold text-sofia-bold text-mckblue bg-[#F8F9FB] border-b" tabIndex={0} id="pnf_label_007">Send Feedback</div>
            <div className="p-6 text-lg text-sofia-reg text-mckblue">
                <p tabIndex={0}>Help us make our search better <a href="" tabIndex={0} id="pnf_label_007_01" role="link" aria-label="Send feedback">Send feedback</a></p>
            </div>
        </div>
        </div>
        </div>
        </>
    );
}
export default PageNotFound;