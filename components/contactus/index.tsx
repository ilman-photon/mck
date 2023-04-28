function ContactUsCoumponent() {
    return (
        <>
            <div className="four-oh-four container flex mx-auto px-0">
                <div className="heading pb-6">We are here to help!</div>
                <div className="grid lg:grid-cols-2 lg:gap-4">
                    <div className="overflow-hidden rounded-lg text-mckthingrey border contact-container mb-12">
                        <div className="text-mckblue py-3 px-4 text-lg font-extrabold shade-blue-bg text-sofia-bold">Contact Information</div>
                        <div className="p-6 contact-body">
                            <p className="text-base font-normal text-mcknormalgrey pb-3 inquiry-text text-sofia-reg">For medical inquiries, to report an adverse event, or a product complaint:</p>
                            <div className="flex flex-col lg:flex-row pb-3">
                                <span className="contact-number font-extrabold text-lg text-mckblue text-sofia-bold mr-3"><img src="images/call.svg" className="inline-block mr-3" />833-358-6431</span>
                                <p className="text-base font-normal text-mcknormalgrey text-sofia-reg">Strategic Sourcing Services LLC</p>
                            </div>
                            <div className="flex flex-col lg:flex-row pb-3">
                                <span className="contact-number font-extrabold text-lg text-mckblue text-sofia-bold mr-3"> <img src="images/timer.svg" className="inline-block mr-3" />Hours of Operation</span>
                                <p className="text-base font-normal text-mcknormalgrey text-sofia-reg">9:00am to 7:00pm ET (6:00am to 4:00pm PT) <br />Monday - Friday</p>
                            </div>
                            <div className="flex flex-col lg:flex-row pb-3">
                                <span className="contact-number font-extrabold text-lg text-mckblue text-sofia-bold mr-3"> <img src="images/email.svg" className="inline-block mr-3" /> Email Support</span>
                            </div>
                            <div className="flex flex-col lg:flex-row pb-3">
                                <span className="contact-number font-extrabold text-lg mr-3 text-mckblue text-sofia-bold"><img src="images/Address.svg" className="inline-block mr-3" />Company Address</span>
                                <p className="text-base font-normal text-mcknormalgrey text-sofia-reg">4835 Crumpler Rd. Suite C, Memphis, TN 38141</p>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-hidden rounded-lg text-mckthingrey border contact-container mb-12">
                        <div className="text-mckblue py-3 px-4 text-lg font-extrabold shade-blue-bg text-sofia-bold">Here’s What You Can Do</div>
                        <div className="p-6 contact-body">
                            <a href="" className="block pb-1 underline text-lg font-normal text-mckblue text-sofia-reg">Home</a>
                            <a href="" className="block pb-1 underline text-lg font-normal text-mckblue text-sofia-reg">Where to Buy</a>
                            <a href="" className="block pb-1 underline text-lg font-normal text-mckblue text-sofia-reg">FAQ</a>
                            <a href="" className="block underline text-lg font-normal text-mckblue text-sofia-reg">Privacy Notice</a>
                        </div>
                    </div>
                </div>
                <p className="text-sofia-reg text-mcknormalgrey font-normal text-base">DISCLAIMER:<br />This phone number or email is NOT for emergency use. Please call 911 or your healthcare provider if you need emergency assistance.</p>
            </div>
        </>
    );
}
export default ContactUsCoumponent;
