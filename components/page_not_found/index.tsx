import React from 'react';

function PageNotFound() {
    return (
        <>
        <div className="lg:p-72 p-4 pb-0 container mx-auto">
        <div className="text-54 font-medium text-gtl-med text-mckblue lg:pb-6 pb-1" tabIndex={0} id="pnf_label_001">No Matches Found for “Hip Replacement”</div>
        <div className="lg:text-lg text-base text-sofia-reg text-black pb-1 font-normal" tabIndex={0} id="pnf_label_002">Showing results for <span className="text-mckblue italic">hip replacement</span></div>
        <div className="lg:text-base text-sm text-sofia-reg text-black lg:pb-5 pb-3 font-normal" tabIndex={0} id="sr_label_003">Search for <span className="text-mckred italic">Pain Releef</span></div>
        </div>
        </>
    );
}
export default PageNotFound;