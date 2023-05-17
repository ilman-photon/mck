import React from 'react';
import Image from 'next/image';
import HeaderImage from '../../public/images/health-professional.png';
import Quotes from '../../public/images/teamcarousel-quotes.png';
function HealthCareProfessionalComponent() {
  return (
    <>
        <div className='container mx-auto'>
            <div>
                <Image src={HeaderImage} alt="Health Care Header Banner" className='w-full' id="hcp-img-001" tabIndex={0}></Image>
            </div>
        </div>
        <div className='bg-mcklightyellow lg:p-72 lg:pt-12 pt-6 lg:pb-16 lg:mt-18 mt-6'>
            <div className='container mx-auto'>
                <h1 className='text-gtl-med lg:text-54 text-27 font-medium text-mckblue text-center pb-6' id="hcp-label-002" tabIndex={0}>What people are saying:</h1>
                <div className='relative lg:p-0 px-6 pb-8'>
                    <div className='grid lg:grid-cols-3 grid-col gap-4 grid-rows-1'>
                        <div className="bg-mckwhite shadow-whatpeoplesaying rounded-lg  lg:p-6 lg:pb-54 p-4 relative">
                            <p className="text-sofia-reg text-base font-normal text-mckblack pb-4" tabIndex={0} id="hcp-label-003">As a practicing family doctor, I have recommended Foster & Thrive products to my clients because of the quality of their products and my patients love them.</p>
                            <div className='text-sofia-reg text-base font-medium text-mckblue' tabIndex={0} id="hcp-label-004">Amar Singh - MD </div>
                            
                            <div className='w-full absolute left-0 -bottom-11'>
                                <svg width="84" height="84" className='mx-auto shadow-circleshadow rounded-full' viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="84" height="84" rx="42" fill="white"/><path d="M38 49.9841C38 56.6115 32.6274 61.984 26 61.984C19.3726 61.984 14 56.6115 14 49.9841C14 28.041 33 19.717 33 22.5508C33 22.5508 23 28.2834 26 35.7167C29 43.15 38 43.3567 38 49.9841Z" fill="#A7C8E9"/><path d="M70 49.9841C70 56.6115 64.6274 61.984 58 61.984C51.3726 61.984 46 56.6115 46 49.9841C46 28.041 65 19.717 65 22.5508C65 22.5508 55 28.2834 58 35.7167C61 43.15 70 43.3567 70 49.9841Z" fill="#A7C8E9"/></svg>
                            </div>
                        </div>
                        
                        <div className="lg:block hidden bg-mckwhite shadow-whatpeoplesaying rounded-lg  lg:p-6 lg:pb-54 p-4 relative">
                            <p className="text-sofia-reg text-base font-normal text-mckblack pb-4">I have been a practicing physician for 15 years. Foster & Thrive has been with me all along the way, with the products and support that makes my job easy. </p>
                            <div className='text-sofia-reg text-base font-medium text-mckblue'>Rebecca McKennon - Registered Nurse </div>
                            
                            <div className='w-full absolute left-0 -bottom-11'>
                                <svg width="84" height="84" className='mx-auto shadow-circleshadow rounded-full' viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="84" height="84" rx="42" fill="white"/><path d="M38 49.9841C38 56.6115 32.6274 61.984 26 61.984C19.3726 61.984 14 56.6115 14 49.9841C14 28.041 33 19.717 33 22.5508C33 22.5508 23 28.2834 26 35.7167C29 43.15 38 43.3567 38 49.9841Z" fill="#A7C8E9"/><path d="M70 49.9841C70 56.6115 64.6274 61.984 58 61.984C51.3726 61.984 46 56.6115 46 49.9841C46 28.041 65 19.717 65 22.5508C65 22.5508 55 28.2834 58 35.7167C61 43.15 70 43.3567 70 49.9841Z" fill="#A7C8E9"/></svg>
                            </div>
                        </div>
                        
                        <div className="lg:block hidden bg-mckwhite shadow-whatpeoplesaying rounded-lg  lg:p-6 lg:pb-54 p-4 relative">
                            <p className="text-sofia-reg text-base font-normal text-mckblack pb-4">Foster and Thrive has always come through for me. Their website and support helps me find what I need to help my clients.</p>
                            <div className='text-sofia-reg text-base font-medium text-mckblue'>Shaniqua Johnson - Pharmacist </div>
                            
                            <div className='w-full absolute left-0 -bottom-11'>
                                <svg width="84" height="84" className='mx-auto shadow-circleshadow rounded-full' viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="84" height="84" rx="42" fill="white"/><path d="M38 49.9841C38 56.6115 32.6274 61.984 26 61.984C19.3726 61.984 14 56.6115 14 49.9841C14 28.041 33 19.717 33 22.5508C33 22.5508 23 28.2834 26 35.7167C29 43.15 38 43.3567 38 49.9841Z" fill="#A7C8E9"/><path d="M70 49.9841C70 56.6115 64.6274 61.984 58 61.984C51.3726 61.984 46 56.6115 46 49.9841C46 28.041 65 19.717 65 22.5508C65 22.5508 55 28.2834 58 35.7167C61 43.15 70 43.3567 70 49.9841Z" fill="#A7C8E9"/></svg>
                            </div>
                        </div>
                    </div>
                    <div className='text-sofia-reg text-xl font-normal text-mckblue text-center lg:pt-20 pt-18'>1/9</div>
                    
                    <div className='lg:block hidden carousel-button w-full lg:absolute flex items-center justify-center top-28'>
                        <div className='carousel-prev lg:absolute -left-6 cursor-pointer'>
                            <svg width="48" height="49" viewBox="0 0 48 49" tabIndex={0} id="hcp-btn-005" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24.8306" r="24" fill="#4D5F9C"/><path d="M28.9401 18.7106L27.0601 16.8306L19.0601 24.8306L27.0601 32.8306L28.9401 30.9506L22.8334 24.8306L28.9401 18.7106Z" fill="#ffffff"/></svg>
                        </div>
                        <div className='lg:hidden text-sofia-reg text-xl font-normal px-3'>1/3</div>
                        <div className='carousel-next lg:absolute -right-6 cursor-pointer'>
                            <svg width="48" height="49" viewBox="0 0 48 49" tabIndex={0} id="hcp-btn-006" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24.8306" r="24" fill="#001A71"/><path d="M20.9401 16.8306L19.0601 18.7106L25.1667 24.8306L19.0601 30.9506L20.9401 32.8306L28.9401 24.8306L20.9401 16.8306Z" fill="#fff"/></svg>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
        <div className='container mx-auto lg:p-72 lg:pt-12 pt-6 pb-0'>
            <div className='text-sofia-reg lg:text-32 text-xl font-extrabold text-mckblue text-center lg:pb-12 pb-6 lg:max-w-5xl max-w-sm mx-auto' tabIndex={0} id="hcp-btn-007">We consider every aspect of your customers&apos; journey, in and out of the store, so we&apos;ve thoughtfully crafted four product categories to help your patients find the items they need:</div>
            <div className='NavTabs_Contain lg:px-0 px-4'>
                <div className="tabs border border-mckthingrey rounded-lg overflow-hidden">
                    <input type="radio" name="tabs" id="tabone" checked />
                    <label htmlFor="tabone" className='flex text-sofia-reg text-base font-extrabold text-mckblue text-center uppercase bg-mcklightyellow cursor-pointer border border-mckthingrey items-center py-4 lg:px-0 px-4 relative' tabIndex={0} id="hcp-label-008">key benefits<svg className="lg:hidden block absolute right-5" width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.41 0.961914L6 5.54191L10.59 0.961914L12 2.37191L6 8.37191L0 2.37191L1.41 0.961914Z" fill="#001A71"/></svg></label>
                    <div className="tab px-6 py-4">
                        <h3 className='text-gtl-med lg:text-5xl text-2xl text-mckblue font-medium lg:pb-12' tabIndex={0} id="hcp-label-009">Key Benefits</h3>
                        <p className='text-sofia-reg lg:text-32 text-mckblue font-extrabold lg:pb-12 pb-6' tabIndex={0} id="hcp-label-010">With Foster & Thrive you get the best of both worlds, quality ingredients and better value.</p>
                        <ul className='list-disc lg:pl-8 pl-6'>
                            <li className='text-sofia-reg lg:text-2xl text-mcknormalgrey font-normal pb-1'>Better value for products with the same active ingredient as the national brand comparison</li>
                            <li className='text-sofia-reg lg:text-2xl text-mcknormalgrey font-normal pb-1'>Better value for pharmacists and patients</li>
                            <li className='text-sofia-reg lg:text-2xl text-mcknormalgrey font-normal pb-1'>Products meet or exceed FDA quality</li>
                            <li className='text-sofia-reg lg:text-2xl text-mcknormalgrey font-normal pb-1'>Satisfaction guaranteed</li>
                            <li className='text-sofia-reg lg:text-2xl text-mcknormalgrey font-normal pb-1'>Trusted and transparent products</li>
                        </ul>
                    </div>
                    
                    <input type="radio" name="tabs" id="tabtwo" />
                    <label htmlFor="tabtwo" className='text-sofia-reg text-base font-extrabold text-mckblue text-center uppercase bg-mckthingrey cursor-pointer border border-mckthingrey flex items-center py-4 lg:px-0 px-4 relative'><svg className="mr-3" width="18" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.355 5.22691L13.347 0.878906C12.159 1.08891 10.567 1.57891 8.45501 2.48891C-1.50099 6.77091 0.0490063 10.0689 5.32901 9.88491C5.32901 9.88491 9.20901 9.82291 11.365 9.14491C11.365 9.14491 -0.166994 13.5209 2.09701 17.5269C2.09701 17.5269 4.03701 21.3489 13.737 16.9729C13.737 16.9729 17.723 15.3429 16.853 14.4449C15.959 13.5229 13.321 13.8309 10.497 15.0029C7.78501 16.1269 3.64301 18.6929 6.19301 21.1629C6.19301 21.1629 7.80901 22.6729 11.527 21.9949" stroke="#001A71" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path></svg>Acute CARE<svg className="lg:hidden block absolute right-5" width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.41 0.961914L6 5.54191L10.59 0.961914L12 2.37191L6 8.37191L0 2.37191L1.41 0.961914Z" fill="#001A71"/></svg></label>
                    <div className="tab px-6 py-4">
                        <h3 className='text-gtl-med lg:text-5xl text-2xl text-mckblue font-medium lg:pb-12'>Key Benefits</h3>
                        <p className='text-sofia-reg lg:text-32 text-mckblue font-extrabold lg:pb-12 pb-6'>With Foster & Thrive you get the best of both worlds, quality ingredients and better value.</p>
                        <ul className='list-disc lg:pl-8 pl-6'>
                            <li className='text-sofia-reg lg:text-2xl text-mcknormalgrey font-normal pb-1'>Better value for products with the same active ingredient as the national brand comparison</li>
                            <li className='text-sofia-reg lg:text-2xl text-mcknormalgrey font-normal pb-1'>Better value for pharmacists and patients</li>
                            <li className='text-sofia-reg lg:text-2xl text-mcknormalgrey font-normal pb-1'>Products meet or exceed FDA quality</li>
                            <li className='text-sofia-reg lg:text-2xl text-mcknormalgrey font-normal pb-1'>Satisfaction guaranteed</li>
                            <li className='text-sofia-reg lg:text-2xl text-mcknormalgrey font-normal pb-1'>Trusted and transparent products</li>
                        </ul>
                    </div>
                    
                    <input type="radio" name="tabs" id="tabthree" />
                    <label htmlFor="tabthree" className='text-sofia-reg text-base font-extrabold text-mckblue text-center uppercase bg-preventiveyellow cursor-pointer border border-mckthingrey flex items-center py-4 lg:px-0 px-4 relative'><svg className="mr-3" width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.4934 9.02714C19.4934 9.02714 21.7594 12.1191 19.4934 15.7851C17.1934 19.5051 12.8214 19.1631 12.8214 19.1631C6.89536 18.6431 8.01736 14.4551 8.01736 14.4551C8.01736 14.4551 8.58736 11.2211 12.5834 11.9811C16.5794 12.7411 15.5794 17.6891 15.5794 17.6891C15.5794 17.6891 14.7934 23.9291 7.95536 23.2271C5.20536 22.9451 2.95536 21.1711 1.87736 18.4951C0.591358 15.3051 2.12336 12.5031 2.12336 12.5031C2.12336 12.5031 4.22536 7.24114 10.9674 8.98514C10.9674 8.98514 7.83936 7.50914 8.99936 4.46314C8.99936 4.46314 9.64736 2.45514 11.5754 1.82914C12.7854 1.43514 14.3234 1.82514 14.9294 2.88114C16.0874 4.89114 13.4814 6.03514 13.4814 6.03514C9.36536 7.63314 6.84136 4.35514 6.84136 4.35514C6.84136 4.35514 5.60136 2.88714 5.49336 1.67914" stroke="#001A71" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path></svg>preventative Care<svg className="lg:hidden block absolute right-5" width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.41 0.961914L6 5.54191L10.59 0.961914L12 2.37191L6 8.37191L0 2.37191L1.41 0.961914Z" fill="#001A71"/></svg></label>
                    <div className="tab px-6 py-4">
                        <h3 className='text-gtl-med lg:text-5xl text-2xl text-mckblue font-medium lg:pb-12'>Key Benefits</h3>
                        <p className='text-sofia-reg lg:text-32 text-mckblue font-extrabold lg:pb-12 pb-6'>With Foster & Thrive you get the best of both worlds, quality ingredients and better value.</p>
                        <ul className='list-disc lg:pl-8 pl-6'>
                            <li className='text-sofia-reg lg:text-2xl text-mcknormalgrey font-normal pb-1'>Better value for products with the same active ingredient as the national brand comparison</li>
                            <li className='text-sofia-reg lg:text-2xl text-mcknormalgrey font-normal pb-1'>Better value for pharmacists and patients</li>
                            <li className='text-sofia-reg lg:text-2xl text-mcknormalgrey font-normal pb-1'>Products meet or exceed FDA quality</li>
                            <li className='text-sofia-reg lg:text-2xl text-mcknormalgrey font-normal pb-1'>Satisfaction guaranteed</li>
                            <li className='text-sofia-reg lg:text-2xl text-mcknormalgrey font-normal pb-1'>Trusted and transparent products</li>
                        </ul>
                    </div>
                    
                    <input type="radio" name="tabs" id="tabfour" />
                    <label htmlFor="tabfour" className='text-sofia-reg text-base font-extrabold text-mckblue text-center uppercase bg-everydayblue cursor-pointer border border-mckthingrey flex items-center py-4 lg:px-0 px-4 relative'><svg className="mr-3" width="16" height="25" viewBox="0 0 16 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.9549 16.5989C11.6189 17.3649 11.0229 19.4429 10.4909 20.8109C9.99288 22.0869 8.73688 23.2669 7.26888 23.2649C5.62888 23.2629 4.01488 22.0089 4.01288 20.1989C4.00888 17.6249 6.31288 16.5049 7.23288 15.6809C9.52688 13.6289 13.5509 11.4409 13.5469 7.92688C13.5429 4.35888 10.5049 1.69688 7.22888 1.69288C4.03288 1.68888 0.938875 4.10488 0.942875 7.91088C0.946875 11.0869 4.19087 12.9149 7.23487 15.6789C9.68487 17.9029 12.0589 20.4529 15.0589 23.2269" stroke="#001A71" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path></svg>every day care<svg className="lg:hidden block absolute right-5" width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.41 0.961914L6 5.54191L10.59 0.961914L12 2.37191L6 8.37191L0 2.37191L1.41 0.961914Z" fill="#001A71"/></svg></label>
                    <div className="tab px-6 py-4">
                        <h3 className='text-gtl-med lg:text-5xl text-2xl text-mckblue font-medium lg:pb-12'>Key Benefits</h3>
                        <p className='text-sofia-reg lg:text-32 text-mckblue font-extrabold lg:pb-12 pb-6'>With Foster & Thrive you get the best of both worlds, quality ingredients and better value.</p>
                        <ul className='list-disc lg:pl-8 pl-6'>
                            <li className='text-sofia-reg lg:text-2xl text-mcknormalgrey font-normal pb-1'>Better value for products with the same active ingredient as the national brand comparison</li>
                            <li className='text-sofia-reg lg:text-2xl text-mcknormalgrey font-normal pb-1'>Better value for pharmacists and patients</li>
                            <li className='text-sofia-reg lg:text-2xl text-mcknormalgrey font-normal pb-1'>Products meet or exceed FDA quality</li>
                            <li className='text-sofia-reg lg:text-2xl text-mcknormalgrey font-normal pb-1'>Satisfaction guaranteed</li>
                            <li className='text-sofia-reg lg:text-2xl text-mcknormalgrey font-normal pb-1'>Trusted and transparent products</li>
                        </ul>
                    </div>
                    
                    <input type="radio" name="tabs" id="tabfive" />
                    <label htmlFor="tabfive" className='text-sofia-reg text-base font-extrabold text-mckblue text-center uppercase bg-diagnosticgreen cursor-pointer border border-mckthingrey flex items-center py-4 lg:px-0 px-4 relative'><svg className="mr-3" width="19" height="25" viewBox="0 0 19 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.1208 10.637C18.1208 10.637 7.52883 9.57696 6.76683 15.423M8.37283 18.723C5.66283 17.471 6.41083 13.851 9.05883 13.027C12.1948 12.051 15.5988 14.675 15.3768 17.863C15.1168 21.617 11.0108 23.741 7.51483 23.225C1.65083 22.361 0.040831 15.665 3.75283 11.565C5.66483 9.45296 8.37283 8.71896 10.8628 7.48896C11.9008 6.97496 12.9988 6.05696 12.9308 4.80096C12.9308 3.07696 11.5048 1.67896 9.74483 1.67896C7.98483 1.67896 6.55883 3.07696 6.55883 4.80096C6.55883 4.80096 6.46083 7.40696 9.50083 7.99296" stroke="#001A71" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path></svg>diagnostic care<svg className="lg:hidden block absolute right-5" width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.41 0.961914L6 5.54191L10.59 0.961914L12 2.37191L6 8.37191L0 2.37191L1.41 0.961914Z" fill="#001A71"/></svg></label>
                    <div className="tab px-6 py-4">
                        <h3 className='text-gtl-med lg:text-5xl text-2xl text-mckblue font-medium lg:pb-12'>Key Benefits</h3>
                        <p className='text-sofia-reg lg:text-32 text-mckblue font-extrabold lg:pb-12 pb-6'>With Foster & Thrive you get the best of both worlds, quality ingredients and better value.</p>
                        <ul className='list-disc lg:pl-8 pl-6'>
                            <li className='text-sofia-reg lg:text-2xl text-mcknormalgrey font-normal pb-1'>Better value for products with the same active ingredient as the national brand comparison</li>
                            <li className='text-sofia-reg lg:text-2xl text-mcknormalgrey font-normal pb-1'>Better value for pharmacists and patients</li>
                            <li className='text-sofia-reg lg:text-2xl text-mcknormalgrey font-normal pb-1'>Products meet or exceed FDA quality</li>
                            <li className='text-sofia-reg lg:text-2xl text-mcknormalgrey font-normal pb-1'>Satisfaction guaranteed</li>
                            <li className='text-sofia-reg lg:text-2xl text-mcknormalgrey font-normal pb-1'>Trusted and transparent products</li>
                        </ul>
                    </div>
                </div> 
            </div>
        </div>
    </>
  )
}
export default HealthCareProfessionalComponent;