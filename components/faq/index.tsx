function FaqComponent() {
    return (
        <>
            <div className="four-oh-four container flex mx-auto px-0">
                <div className="heading pb-3 text-center">FAQ</div>
                <div className="text-center text-mckblue text-gtl-med pb-6">Have questions? We here to help.</div>
                
                <div className="tab text-mckblue text-sofia-bold font-extrabold text-lg w-full overflow-hidden rounded-lg mb-6">
                    <input type="checkbox" id="chck1" />
                    <label className="tab-label shade-blue-bg py-3 px-4 flex justify-between cursor-pointer" htmlFor="chck1">What types of events are eligible for grants?</label>
                    <div className="tab-content text-sofia-reg font-normal text-base text-mcknormalgrey">
                        <ul>
                            <li className="list-disc ml-4">Natural or man-made disasters</li>
                            <li className="list-disc ml-4">Epidemics</li>
                            <li className="list-disc ml-4">Accidents</li>
                            <li className="list-disc ml-4">Illness or injury</li>
                            <li className="list-disc ml-4">Medical expenses not covered by insurance</li>
                            <li className="list-disc ml-4">Violent crimes</li>
                            <li className="list-disc ml-4">Domestic abuse</li>
                            <li className="list-disc ml-4">Death of employee or their immediate family member</li>
                        </ul>
                    </div>
                </div>

                <div className="tab text-mckblue text-sofia-bold font-extrabold text-lg w-full overflow-hidden rounded-lg mb-6">
                    <input type="checkbox" id="chck2" />
                    <label className="tab-label shade-blue-bg py-3 px-4 flex justify-between cursor-pointer" htmlFor="chck2">How do I apply for a We Care Grant?</label>
                    <div className="tab-content text-sofia-reg font-normal text-base text-mcknormalgrey">
                        <p>Natural or man-made disasters Epidemics Accidents Illness or injury Medical expenses not covered by insurance Violent crimes Domestic abuse</p>
                    </div>
                </div>

                <div className="shade-blue-border w-full mt-6 rounded-lg overflow-hidden">
                    <div className="shade-blue-bg text-mckblue text-sofia-bold font-extrabold text-lg py-3 px-4">Have a different question?</div>
                    <div className="shade-blue-border-top text-gtl-med font-medium text-base text-mckblue p-6 text-27">
                    <p className="pb-4">Not finding the answers to your questions?</p>
                    <button className="rounded-lg blue-bg text-white p-3 text-sofia-bold font-extrabold text-base uppercase">contact us</button>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 lg:gap-4 mt-6">
                    <div className="rounded-lg shade-blue-border overflow-hidden">
                        <div className="shade-blue-bg text-mckblue text-sofia-bold font-extrabold text-lg py-3 px-4">Here’s what you can do.</div>
                        <div className="p-6 text-mckblue shade-blue-border-top text-lg text-sofia-reg">
                            <a href="" className="underline block pb-1">Home</a>
                            <a href="" className="underline block pb-1">Where to Buy</a>
                            <a href="" className="underline block pb-1">Privacy Notice</a>
                        </div>
                    </div>
                    <div className="sm:mt-6 lg:mt-0">
                    <div className="rounded-lg shade-blue-border overflow-hidden">
                        <div className="shade-blue-bg text-mckblue text-sofia-bold font-extrabold text-lg py-3 px-4">Speak to a pharmacist</div>
                        <div className="p-6 text-mckblue shade-blue-border-top text-lg text-sofia-reg">
                            <a href="" className="underline block pb-1">Find a store</a>
                        </div>
                    </div>
                    <div className="rounded-lg shade-blue-border overflow-hidden mt-6">
                        <div className="shade-blue-bg text-mckblue text-sofia-bold font-extrabold text-lg py-3 px-4">Send Feedback</div>
                        <div className="p-6 text-mckblue shade-blue-border-top text-lg text-sofia-reg">
                            <p>Help us make our search better Send <a href="" className="underline">feedback</a></p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default FaqComponent;
