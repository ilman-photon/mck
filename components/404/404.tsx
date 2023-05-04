function FourOhFourCoumponent() {
    return (
        <>
            <div className="four-oh-four container flex flex-row mx-auto">
                <div className="lg:width-416 w-full">
                <div className="lg:heading pb-3 text-32 text-gtl-med font-medium" id="err-404-label-001">Oops! </div>
                <div className="lg:text pb-6 font-medium text-2xl text-mckblue text-gtl-med" id="err-404-label-002">We can’t find the page you are looking for.</div>
                <div className="lg:hint pb-6 text-xl">Not to worry...</div>
                <div className="table-container">
                    <div className="table-heading font-extrabold text-sofia-bold" id="err-404-label-003">Here’s what you can do.</div>
                    <div className="normal-text p-6 text-sofia-reg font-normal lg:text-lg text-base">
                    <p id="err-404-label-004" className="lg:text-lg text-base lg:pb-1 pb-2 text-sofia-reg font-normal">Retype the URL</p>
                    <a href="#" className="text-mckblue block lg:pb-1 pb-2">Home</a>
                    <a href="#" className="text-mckblue block lg:pb-1 pb-2">Sitemap</a>
                    <a href="#" className="text-mckblue block lg:pb-1 pb-2">FAQ</a>
                    <a href="#" className="text-mckblue block">Send Feedback</a>
                    </div>
                </div>
                </div>
                
                <div className="bg-logo-right overflow-hidden lg:relative absolute"><img src="images/Oops.svg" alt="oops" id="err-404-img-005"/></div>
            </div>
            
        </>
    );
}

export default FourOhFourCoumponent;
