import React from 'react'

function LongLoadComponent() {

    return (
        <div>
            <div className="container mx-auto md:p-[72px] pb-0 px-4 lg:mt-36 mt-16 pt-4">
                <div className="row text-center">
                    <h1 className="pb-3 text-gtl-med font-medium text-mckblue text-[54px]" tabIndex={0} id="ll_label_001">Sorry!</h1>
                    <p className="text pb-6 font-medium text-4xl text-mckblue text-gtl-med" tabIndex={0} id="ll_label_002">This page load is taking longer than we expected.</p>
                    <div className="flex justify-center"><img src="images/long_load_icon.svg" tabIndex={0} id="ll_img_003" alt="long_load_img"/></div>
                    <div className="flex justify-center items-center gap-1">
                    <div className="rounded-full h-4 bg-white border border-mckgreyborder w-[600px]" tabIndex={0} id="ll_prg_004" aria-label="Long Loader in Progress Bar">
                        <div className="bg-mckgreyborder h-3.5 rounded-full w-52"></div>
                    </div>
                    <span className='md:block hidden' tabIndex={0} id="ll_prg_004_01">6 sec</span>
                    </div>
                    <p className='w-52 text-center mx-auto' tabIndex={0} id="ll_prg_004_02">52%</p>
                </div>

            </div>
        </div>
    )
}
export default LongLoadComponent;