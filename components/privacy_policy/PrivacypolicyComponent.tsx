import React from 'react'

function PrivacypolicyComponent() {
  return (
    <>
            <div className="privacypolicy container flex flex-col lg:p-72 lg:pb-0 p-4 pt-6 pb-0 mx-auto">
                <h1 className="lg:text-54 text-27 text-gtl-med text-mckblue pb-3 text-center font-medium" id='privacy-label-001'>Privacy Notice</h1>
                <div className="text-center text-mckblue text-gtl-med lg:text-27 text-xl font-medium"  id='privacy-label-001-01'>Effective Date: December 1, 2021</div>        

                <div className="w-full">
                    <div className="pt-6 pb-6 [&>*:last-child]:pb-0">
                        <h2 className="lg:pb-6 pb-4 lg:text-4xl text-27 text-base text-mckblue text-gtl-med font-medium"  id='privacy-label-002'>Scope</h2>
                        <p className="lg:pb-4 pb-2 lg:text-lg text-base grey-txt text-sofia-reg font-normal"  id='privacy-label-002-01'>The McKesson <a href="" className="border-transparent hover:border-solid hover:border-mcklightyellow text-mckblue font-extrabold" target="_blank" id='privacy-label-002-02'>Privacy Notice</a> applies only to <a href="www.McKesson.com" className="border-transparent hover:border-solid hover:border-mcklightyellow text-mckblue font-extrabold" target="_blank" aria-labelledby="link to McKesson page" id='privacy-label-002-03'>www.McKesson.com</a>. Below are some of the highlights of our website privacy practices.</p>
                    </div>
                    
                    <div className="pb-6">
                        <h2 className="lg:pb-6 pb-4 lg:text-4xl text-27 text-base text-mckblue text-gtl-med font-medium" id='privacy-label-003'>Personal Information</h2>
                        <ul className='list-disc lg:text-lg text-base grey-txt text-sofia-reg font-normal pl-7' id='privacy-label-003-01'>
                            <li>We may collect your contact information, unique identifiers and preference information when you visit our website</li>
                            <li>We may combine the personal information we collect from you when you visit our website with information obtained from other sources to help us improve its overall accuracy and completeness, and to help us better tailor our interactions with you</li>
                            <li>We may also collect information relating to your use of our website through the use of various tracking technologies, including cookies</li>
                        </ul>
                    </div>
                    
                    <div className="pb-6">
                        <h2 className="lg:pb-6 pb-4 lg:text-4xl text-27 text-base text-mckblue text-gtl-med font-medium" id='privacy-label-004'>Uses</h2>
                        <ul className='list-disc lg:text-lg text-base grey-txt text-sofia-reg font-normal pl-7' id='privacy-label-004-01'>
                            <li>When you visit our website, we may use information collected about you for various purposes, such as to improve our products and services, communicate with website users, market products and services and to conduct surveys</li>
                            <li>We may contact you for customer satisfaction surveys, market research or information in connection with certain transactions</li>
                        </ul>
                    </div>
                    
                    <div className="pb-6">
                        <h2 className="lg:pb-6 pb-4 lg:text-4xl text-27 text-base text-mckblue text-gtl-med font-medium" id='privacy-label-005'>Sharing</h2>
                        <ul className='list-disc lg:text-lg text-base grey-txt text-sofia-reg font-normal pl-7' id='privacy-label-005-01'>
                            <li>We share personal information about you with our service providers to the extent necessary to enable their performance</li>
                            <li>We share personal information about you with other third parties when it is legally permissible or required</li>
                            <li>We will not sell personal information about you that we collect when you visit our website to third parties</li>
                        </ul>
                    </div>
                    
                    <div className="pb-6">
                        <h2 className="lg:pb-6 pb-4 lg:text-4xl text-27 text-base text-mckblue text-gtl-med font-medium" id='privacy-label-006'>Your Choices</h2>
                        <ul className='list-disc lg:text-lg text-base grey-txt text-sofia-reg font-normal pl-7' id='privacy-label-006-01'>
                            <li>You may contact us to correct, update, amend or request deletion of personal information about you at <a href="mailto:privacy@McKesson.com" className="border-transparent hover:border-solid hover:border-mcklightyellow text-mckblue font-extrabold" target="_blank" id='privacy-link-006-01'>privacy@McKesson.com</a></li>
                            <li>To opt-out of receiving our newsletter or marketing emails, follow the unsubscribe instructions included in these emails</li>
                            <li>You may also turn off cookies in your browser</li>
                        </ul>
                    </div>

                    <p className="pb-4 lg:text-lg text-base grey-txt text-sofia-reg font-normal" id='privacy-label-007'>To find out more about our privacy practices, please see the McKesson <a href="" className="border-transparent hover:border-solid hover:border-mcklightyellow text-mckblue font-extrabold" target="_blank" id='privacy-link-007-01'>Privacy Notice</a>.</p>
                    <p className="lg:text-lg text-base grey-txt text-sofia-reg font-normal break-all" id='privacy-label-008'>For state specific privacy rights please <a href="" className="border-transparent hover:border-solid hover:border-mcklightyellow text-mckblue font-extrabold" target="_blank" aria-label='click here' id='privacy-label-008-01'>CLICK HERE</a>.</p>
                </div>
            </div>
        </>
  )
}

export default PrivacypolicyComponent