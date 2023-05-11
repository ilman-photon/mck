import React from 'react';
import Image from 'next/image';

import ArticleThumbnail from '../../public/images/blog-thumbnail.png';
import ClipBoardImage from '../../public/images/article-image.png';
import PlayImage from '../../public/images/icon-play.png';
import Benefit2 from '../../public/images/Benefit-2.png';
import Benefit4 from '../../public/images/medi-adherence.png';
import Oldarticle1 from '../../public/images/other-article1.png';
import Oldarticle2 from '../../public/images/other-article2.png';

function BlogDetailsComponent() {
  return (
    <>
        <div className='container w-full lg:p-72 lg:pb-0 p-4 pt-6  mx-auto'>
            <div className='col-start-1 col-end-7 rounded-lg overflow-hidden'>
                <Image src={ArticleThumbnail} className='w-full' alt="Are your medications causing you to lose nutrients? article" id='blog-img-001'/>
            </div>
            <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-4 lg:pt-12'>
                <div className='lg:col-span-2 col-start-1 col-end-7 lg:pl-24'>
                    <article className='mb-6'>
                        <div className='content lg:p-6 pb-0 p-4 px-0'>
                            <h1 className='lg:text-54 text-32 text-gtl-med text-mckblue lg:pb-6 text-center' id='blog-link-001'>Are your medications causing you to lose nutrients?</h1>
                            <div className='grid lg:grid-cols-2 lg:gap-4 lg:pt-0 pt-3 lg:pb-6 pb-4'>
                                <div className='lg:pb-0 pb-4'>
                                    <span className='text-mckblue text-sofia-reg font-normal text-base pr-2 border-solid shade-grey-right-border' id='blog-label-001'>February 18, 2022</span>
                                    <span className='text-mckblue text-sofia-reg font-normal text-base px-2 border-solid shade-grey-right-border' id='blog-label-002'>65 min read</span>
                                    <span className='text-mckblue text-sofia-reg font-normal text-base pl-2' id='blog-label-003'>76.6K views</span>
                                </div>
                                <div className='flex lg:justify-end'>
                                    <div className='bg-acuteblue text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2' id='blog-label-004'>Acute Care</div>
                                    <div className='categoryTag text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 ml-1 border-solid shade-blue-border' id='blog-label-006'>Sample Tag 1</div>
                                    <div className='categoryTag text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 ml-1 border-solid shade-blue-border' id='blog-label-007'>Sample Tag 2</div>
                                    <div className='categoryTag text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 ml-1 border-solid shade-blue-border' id='blog-label-008'>Sample Tag 3</div>
                                </div>
                            </div>
                            <div className='text-center text-sofia-reg text-lg font-normal text-mckblack pb-3 border border-t-0 border-x-0 mb-6'>
                                <p>Editor&apos;s Note: A version of this article originally appeared on McKesson&apos;s &quot;Our Stories&quot; site.</p>
                            </div>
                            <div className='border border-mckthingrey rounded-lg bg-shadesblue lg:p-6 p-4 lg:mb-6 mb-4'>
                                <h2 className='text-gtl-med text-mckblue text-32 font-medium text-center lg:pb-6 pb-4'>Table of Contents</h2>
                                <div className='text-gtl-med text-mckblue lg:text-2xl text-xl font-medium lg:pb-6 pb-4'>Benefit 1: Save time to focus on other priorities</div>
                                <div className='text-gtl-med text-mckblue lg:text-2xl text-xl font-medium lg:pb-6 pb-4'>Benefit 2: Minimize mistakes like medication errors</div>
                                <div className='text-gtl-med text-mckblue lg:text-2xl text-xl font-medium lg:pb-6 pb-4'>Benefit 3: Cut costs by paying a per-prescription fee</div>
                                <div className='text-gtl-med text-mckblue lg:text-2xl text-xl font-medium lg:pb-6 pb-4'>Benefit 4: Improve adherence to enhance patient outcomes</div>
                                <div className='text-gtl-med text-mckblue lg:text-2xl text-xl font-medium lg:pb-6 pb-4'>Central Fill as a Service can propel retail and mail-order pharmacies into the future</div>
                                <div className='text-gtl-med text-mckblue lg:text-2xl text-xl font-medium'>References</div>
                            </div>
                            <p className="lg:text-lg text-base text-mcknormalgrey text-sofia-reg font-normal lg:pb-4 pb-2">Central Fill as a Service can help retail and mail-order pharmacies save time, minimize mistakes, cut costs and improve adherence rates, with little to no upfront costs. This article explores Central Fill as a Service benefits and explains how CoverMyMeds can help pharmacies improve medication access, adherence and, ultimately, patient care.</p>
                            
                            <p className="lg:text-lg text-base text-mcknormalgrey text-sofia-reg font-normal lg:pb-4 pb-2">The COVID-19 pandemic transformed the way patients interact with pharmacists. As stay-at-home orders led <a href="" className='font-normal text-mckblue underline' target='self'>telehealth&apos;s popularity to skyrocket,</a> pharmacists had to take on increased patient care roles while also supporting government initiatives to control the pandemic and ensuring patients continued to receive their prescriptions.<a href="" className='font-medium text-mckblue no-underline' target='self'>[1]</a></p>
                            
                            <p className="lg:text-lg text-base text-mcknormalgrey text-sofia-reg font-normal lg:pb-4 pb-2">According to a recent study, nearly 9 in 10 pharmacists were found to be at high risk for burnout due to the pandemic — feelings attributed to staffing and scheduling issues, precepting requirements and rising patient needs.<a href="" className='font-medium text-mckblue no-underline' target='self'>[2]</a></p>
                            
                            <p className="lg:text-lg text-base text-mcknormalgrey text-sofia-reg font-normal lg:pb-4 pb-2">Central Fill as a Service can help alleviate some pressure while improving efficiencies. Instead of relying on the traditional central fill model that requires significant upfront investment, Central Fill as a Service is available to pharmacies through a per-prescription fee that can dramatically reduce the pharmacy&apos;s per-prescription cost.</p>
                            
                            <p  className="lg:text-lg text-base text-mcknormalgrey text-sofia-reg font-normal lg:pb-6 pb-4">Overall, Central Fill as a Service can help pharmacies and pharmacists save time, minimize mistakes, cut costs and improve adherence rates. Let&apos;s explore each benefit in more depth.</p>

                            <div className='relative flex items-center justify-center lg:mb-12 mb-4'>
                                <Image src={ClipBoardImage} className='w-full' alt="article-image-1"/>
                                <div className='absolute z-10 cursor-pointer'>
                                    <Image src={PlayImage} className='w-full' alt="article-image-1"/>
                                </div>
                            </div>
                            
                            <h3 className='text-gtl-med text-mckblue lg:text-32 text-2xl font-medium lg:pb-6 pb-4'>Benefit 1: Save time to focus on other priorities</h3>
                            <div className='lg:pb-12 pb-8'>
                                <p className="lg:text-lg text-base text-mcknormalgrey text-sofia-reg font-normal lg:pb-4 pb-2">Pharmacists&apos; <a href="" className='font-normal text-mckblue' target='self'>to-do lists are increasingly long,</a> growing beyond traditionally associated tasks like preparing and packaging prescription medications for patients. Now, they may also be expected to conduct health and wellness screenings, give immunizations and offer advice on healthy lifestyles.<a href="" className='font-medium text-mckblue no-underline' target='self'>[3]</a></p>

                                <p className="lg:text-lg text-base text-mcknormalgrey text-sofia-reg font-normal lg:pb-4 pb-2">If pharmacists can reduce or even eliminate the time it takes to count and dispense pills, they can instead focus on population health and experience of care.</p>
                                
                                <p className="lg:text-lg text-base text-mcknormalgrey text-sofia-reg font-normal lg:pb-4 pb-2">Central Fill as a Service connects pharmacies to central fill facilities where medicine is dispensed through automation technology and intelligent pharmacy control software to enable efficient prescription fulfillment.</p>
                                
                                <p className="lg:text-lg text-base text-mcknormalgrey text-sofia-reg font-normal">Once filled, the prescriptions are quickly verified and shipped directly to patients&apos; homes or their local pharmacies through advanced routing algorithms. With Central Fill as a Service on their side, pharmacists can save time on their traditional responsibilities and help more patients at the pharmacy counter — a benefit for both parties.</p>
                            </div>

                            <div className='text-gtl-med text-mckblue lg:text-27 text-2xl lg:font-medium font-bold lg:pb-18 pb-8 lg:w-598 lg:max-w-2xl max-w-sm mx-auto'>“Central Fill as a Service systems boast accuracy thanks to robotic filling”.</div>
                            
                            <h3 className='text-gtl-med text-mckblue lg:text-32 text-2xl font-medium lg:pb-6 pb-4'>Benefit 2: Minimize mistakes like medication errors</h3>
                            <div className='lg:pb-12 pb-6'>
                                <p className="lg:text-lg text-base text-mcknormalgrey text-sofia-reg font-normal ">The three most common manual dispensing errors include:</p>
                                <ul className='lg:text-lg text-base text-mcknormalgrey text-sofia-reg font-normal list-disc pl-5 lg:pb-6 pb-2'>
                                    <li>Dispensing an incorrect medication, dosage strength or dosage form</li>
                                    <li>Miscalculating a dose, and</li>
                                    <li>Failing to identify drug interactions or contraindications<a href="" className='font-medium text-mckblue no-underline' target='self'>[4]</a></li>
                                </ul>

                                <div className='grid lg:grid-cols-2 gap-4 lg:pb-1'>
                                    <div className='col-span-1'>
                                        <p className="lg:text-lg text-base text-mcknormalgrey text-sofia-reg font-normal lg:pb-4 pb-2">Each year 7,000 to 9,000 people die due to prescribing and/or dispensing errors in the U.S. Additionally, the total cost of looking after patients affected by those medication-associated errors exceeds $40 billion each year, with over 7 million patients affected.<a href="" className='font-medium text-mckblue no-underline' target='self'>[5]</a></p>
                                        <p className="lg:text-lg lg:block hidden text-base text-mcknormalgrey text-sofia-reg font-normal">Central Fill as a Service, by design, focuses on safety and accuracy</p>
                                
                                        <p className="lg:text-lg lg:hidden text-base text-mcknormalgrey text-sofia-reg font-normal">Central Fill as a Service, by design, focuses on safety and accuracy through robotic filling. Additionally, several safety measures are in place such as vision technology, scales, barcodes and RFID technology to ensure accuracy. The goal result is always right patient, right medication, and right dosage — with zero mistakes.</p>
                                    </div>
                                    <div className='col-span-1'>
                                        <Image src={Benefit2} className='w-full' alt="Minimize mistakes like medication errors"/>
                                    </div>
                                </div>
                                
                                <p className="lg:text-lg lg:block hidden text-base text-mcknormalgrey text-sofia-reg font-normal">through robotic filling. Additionally, several safety measures are in place such as vision technology, scales, barcodes and RFID technology to ensure accuracy. The goal result is always right patient, right medication, and right dosage — with zero mistakes.</p>
                            </div>
                            
                            <h3 className='text-gtl-med text-mckblue lg:text-32 text-2xl font-medium lg:pb-6 pb-4'>Benefit 3: Cut costs by paying a per-prescription fee</h3>
                            <div className='lg:pb-12 pb-4'>
                                <p className="lg:text-lg text-base text-mcknormalgrey text-sofia-reg font-normal">Central Fill as a Service doesn&apos;t only help save time and minimize mistakes, it can also provide cost savings for the pharmacy.</p>
                                <p className="lg:text-lg text-base text-mcknormalgrey text-sofia-reg font-normal lg:pb-4 pb-2">While automated dispensing is nothing new, pharmacies using traditional central fill models must pay upfront capital costs and ongoing fees for equipment, staffing and medication inventory, which prevents many retail and mail-order pharmacies from benefiting from these services. But now, pharmacies that might otherwise deem central fill unaffordable can also enjoy its rewards.</p>

                                <p className="lg:text-lg text-base text-mcknormalgrey text-sofia-reg font-normal">By using Central Fill as a Service capabilities, pharmacies simply pay per prescription so they can decide which prescriptions to fill in-store and which to outsource to the central facility — a process that can save money and reduce inventory.</p>
                                <p className="lg:text-lg text-base text-mcknormalgrey text-sofia-reg font-normal">Convenient access through central fill can translate to better medication adherence.</p>
                            </div>
                            
                            <h3 className='text-gtl-med text-mckblue lg:text-32 text-2xl font-medium lg:pb-6 pb-4'>Benefit 4: Improve adherence to enhance patient outcomes</h3>
                            <div className='lg:pb-12 pb-4'>
                                <div className='lg:grid lg:grid-cols-2 grid-cols-1 gap-4 lg:pb-1'>
                                    <div className='col-span-1 lg:pb-0 pb-4'>
                                        <Image src={Benefit4} className='w-full' alt="Improve adherence to enhance patient outcomes"/>
                                    </div>
                                    <div className='col-span-1'>
                                        <p className="lg:text-lg text-base text-mcknormalgrey text-sofia-reg font-normal lg:pb-4 pb-2">Medication adherence rates are low — only about 50% of U.S. patients take drugs exactly as prescribed. Additionally, nonadherence can account for up to 50% of treatment failures, around 125,000 deaths and up to 25% of hospitalizations each year in the U.S.<a href="" className='font-medium text-mckblue no-underline' target='self'>[6]</a></p>
                                        <p className="lg:text-lg text-base text-mcknormalgrey text-sofia-reg font-normal">Since Central Fill as a Service helps free pharmacists to focus on other tasks, they can <a href="" className='font-normal text-mckblue' target='self'>spend more time counseling patients</a> on the importance of medication adherence and educating them on best practices for taking their prescription medications.</p>
                                        <p className="lg:text-lg text-base text-mcknormalgrey text-sofia-reg font-normal">With an aging population on the rise, medication adherence is more important than ever. Nearly 95% percent of people over 65 have at least one chronic condition, and nearly 80% of have two or more.<a href="" className='font-medium text-mckblue no-underline' target='self'>[7]</a></p>
                                    </div>
                                    <div className='col-span-2'>
                                        <p className="lg:text-lg text-base text-mcknormalgrey text-sofia-reg font-normal w-full">Many treatments for those chronic conditions overlap, which makes medication side effects and interactions even more likely. Fortunately, convenient access through central fill can translate to better medication adherence and, in turn, improved patient outcomes by enabling more patient counseling and education at the pharmacy counter.</p>
                                    </div>
                                </div>
                            </div>

                            <h3 className='text-gtl-med text-mckblue lg:text-32 text-2xl font-medium lg:pb-6 pb-4'>Central Fill as a Service can propel retail and mail-order pharmacies into the future</h3>
                            <div className='lg:pb-6 pb-4'>
                                <p className="lg:text-lg text-base text-mcknormalgrey text-sofia-reg font-normal lg:pb-4 pb-2">CoverMyMeds&apos; mission is to help people get the medicine they need to live healthier lives. One of the ways we do that is through solutions that enable a variety of central fill opportunities. Central Fill as a Service is a CoverMyMeds-operated, centralized solution that allows retail and mail-order pharmacies to benefit from central fill automation and industry expertise without a major upfront investment.</p>

                                <p className="lg:text-lg text-base text-mcknormalgrey text-sofia-reg font-normal lg:pb-4 pb-2">Our central fill offerings, including Central Fill as a Service, are helping provide better medication access, adherence and convenience for patients — wherever they are, whenever they need it.</p>
                                
                                <p className="lg:text-lg text-base text-mcknormalgrey text-sofia-reg font-normal">These offerings, which are managed by <a href="" className='font-normal text-mckblue' target='self'>Sanitas pharmacy control software,</a> support the entire pharmacy ecosystem. They provide a flexible model that brings value to pharmacies and their patients, and does so safely, more quickly and more reliably.</p>
                                
                                <p className="lg:text-lg text-base text-mcknormalgrey text-sofia-reg font-normal">We&apos;ve spent 35 years innovating and providing a variety of solutions to pharmacies that allow them to leverage our scale and industry-specific expertise. Our customers can rely on us to set up their Central Fill as a Service pay-per-script systems in a way that helps them not only grow, but also meet the ever changing needs of today&apos;s patients.</p>
                                
                                <p className="lg:text-lg text-base text-mcknormalgrey text-sofia-reg font-normal">To learn more about CoverMyMeds&apos; Central Fill as a Service solution, contact <a href="mailto:automation-info@covermymeds.com" className='font-normal text-mckblue no-underline' target='self'>automation-info@covermymeds.com.</a></p>
                            </div>

                            <div className='BlogSource'>
                                <div className="tab text-mckblue w-full overflow-hidden lg:border-none border-none">
                                    <input type="checkbox" id="acute-1" value="" />
                                    <label className="tab-label py-2 flex cursor-pointer text-sofia-bold font-extrabold text-base relative" htmlFor="acute-1" id="blog-label-008-01">Sources</label>
                                    <div className="tab-content text-sofia-reg font-normal text-base text-mcknormalgrey mb-0">
                                        <ul className='lg:pl-1'>
                                            <ol>
                                                <li className='text-sofia-reg text-lg font-normal text-mckblue pb-2'>How COVID-19 has impacted the role of pharmacists around the world, National Library of Medicine, Feb. 22, 2021</li>
                                                <li className='text-sofia-reg text-lg font-normal text-mckblue pb-2'>The Striking, Startling Realities of Pharmacist Burnout, University of Illinois Chicago, Dec. 6, 2022</li>
                                                <li className='text-sofia-reg text-lg font-normal text-mckblue pb-2'>Pharmacists, U.S. Bureau of Labor Statistics, 2021</li>
                                                <li className='text-sofia-reg text-lg font-normal text-mckblue pb-2'>Medication Errors, AMCP, July 18, 2019</li>
                                                <li className='text-sofia-reg text-lg font-normal text-mckblue pb-2'>Medication Dispensing Errors And Prevention, National Library of Medicine, July 3, 20 22</li>
                                                <li className='text-sofia-reg text-lg font-normal text-mckblue pb-2'>Medication Adherence: The Elephant in the Room, U.S. Pharmacist, Jan. 19, 2018</li>
                                                <li className='text-sofia-reg text-lg font-normal text-mckblue'>Get the Facts on Healthy Aging, National Council on Aging, Jan 1, 2021</li>
                                            </ol>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>

                    <div className='lg:pb-0 lg:p-6 lg:pt-0 pt-0 p-4'>
                        <h3 className='text-gtl-med text-mckblue text-32 font-medium lg:pb-6'>Other Articles You May Like...</h3>
                        <div className='grid lg:grid-cols-2 gap-4 lg:relative'>
                            <article className="shadow-md rounded-lg lg:mb-12 mb-6">
                                <figure>
                                    <Image src={Oldarticle1} className="w-full" alt="CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report article" id="blog-img-002" />
                                </figure>
                                <figcaption>
                                    <div className="content lg:p-6 p-4">
                                        <a href="" className="articleTitle lg:text-32 text-xl text-gtl-med text-mckblue no-underline" aria-labelledby="CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report">CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report</a>
                                        <div className="pb-3 pt-3">
                                            <span className="text-mckblue text-sofia-reg font-normal lg:text-base text-sm pr-2 border-solid shade-grey-right-border">February 18, 2022</span>
                                            <span className="text-mckblue text-sofia-reg font-normal lg:text-base text-sm px-2 border-solid shade-grey-right-border">65 min read</span>
                                            <span className="text-mckblue text-sofia-reg font-normal lg:text-base text-sm pl-2">2.3K views</span>
                                        </div>
                                        <div className="flex">
                                            <div className="bg-everydayblue text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2">Everyday Care</div>
                                            <div className="categoryTag text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 ml-1 border-solid shade-blue-border">Sample Tag 1</div>
                                            <div className="categoryTag text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 ml-1 border-solid shade-blue-border">Sample Tag 3</div>
                                        </div>
                                    </div>
                                </figcaption>
                            </article>

                            <article className="shadow-md rounded-lg lg:mb-12 mb-6 lg:block hidden">
                                <figure>
                                    <Image src={Oldarticle2} className="w-full" alt="CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report article" id="blog-img-002" />
                                </figure>
                                <figcaption>
                                    <div className="content lg:p-6 p-4">
                                        <a href="" className="articleTitle lg:text-32 text-xl text-gtl-med text-mckblue no-underline" aria-labelledby="CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report">CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report</a>
                                        <div className="pb-3 pt-3">
                                            <span className="text-mckblue text-sofia-reg font-normal lg:text-base text-sm pr-2 border-solid shade-grey-right-border">February 18, 2022</span>
                                            <span className="text-mckblue text-sofia-reg font-normal lg:text-base text-sm px-2 border-solid shade-grey-right-border">65 min read</span>
                                            <span className="text-mckblue text-sofia-reg font-normal lg:text-base text-sm pl-2">778 views</span>
                                        </div>
                                        <div className="flex">
                                            <div className="bg-acuteblue text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2">Acute Care</div>
                                            <div className="categoryTag text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 ml-1 border-solid shade-blue-border">Sample Tag 1</div>
                                            <div className="categoryTag text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 ml-1 border-solid shade-blue-border">Sample Tag 3</div>
                                        </div>
                                    </div>
                                </figcaption>
                            </article>
                            <div className='carousel-button w-full lg:absolute flex items-center justify-center top-72'>
                                <div className='carousel-prev lg:absolute -left-6 cursor-pointer'>
                                    <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24.8306" r="24" fill="#4D5F9C"/><path d="M28.9401 18.7106L27.0601 16.8306L19.0601 24.8306L27.0601 32.8306L28.9401 30.9506L22.8334 24.8306L28.9401 18.7106Z" fill="black"/></svg>
                                </div>
                                <div className='lg:hidden text-sofia-reg text-xl font-normal px-3'>1/3</div>
                                <div className='carousel-next lg:absolute -right-6 cursor-pointer'>
                                    <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24.8306" r="24" fill="#001A71"/><path d="M20.9401 16.8306L19.0601 18.7106L25.1667 24.8306L19.0601 30.9506L20.9401 32.8306L28.9401 24.8306L20.9401 16.8306Z" fill="black"/></svg>
                                </div>
                            </div> 
                        </div>
                    </div>

                    <div>
                        <div className='text-sofia-reg text-lg font-extrabold text-mckblack pb-3 border border-t-0 border-x-0 border-mckdarkgrey mb-6'>1 Comment</div>
                        <div className='flex items-center text-sofia-reg text-lg font-normal text-mcknormalgrey pb-6'>
                            Sort by: <div className='flex items-center pl-2'>Most Recent <div className='pl-6 cursor-pointer'>
                                <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.08049 0.664435L6.79423 5.37818L11.508 0.664435C11.9818 0.190631 12.7472 0.190631 13.221 0.664435C13.6948 1.13824 13.6948 1.90361 13.221 2.37742L7.64465 7.95373C7.17084 8.42753 6.40547 8.42753 5.93166 7.95373L0.355353 2.37742C-0.118451 1.90361 -0.118451 1.13824 0.355353 0.664435C0.829157 0.20278 1.60668 0.190631 2.08049 0.664435Z" fill="#3A3E41"/></svg>
                                </div>
                            </div>
                        </div>
                        <div className='border border-mckdarkgrey rounded-lg p-6 mb-6'>
                            <div className='flex pb-6'>
                                <div className=''>
                                    <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_110_4273)"><rect y="0.809082" width="48" height="48" rx="24" fill="#DBDFEB"/><path d="M15 17.8091C15 12.8366 19.0275 8.80908 24 8.80908C28.9725 8.80908 33 12.8366 33 17.8091C33 22.7816 28.9725 26.8091 24 26.8091C19.0275 26.8091 15 22.7816 15 17.8091Z" fill="#CCD1E3"/><path d="M6 38.0591C6 32.0741 17.9925 29.0591 24 29.0591C30.0075 29.0591 42 32.0741 42 38.0591L37.5 44.3091L23.5 48.3091L10.5 44.3091L6 38.0591Z" fill="#CCD1E3"/></g><rect x="1" y="1.80908" width="46" height="46" rx="23" stroke="#CCD1E3" stroke-width="2"/><defs><clipPath id="clip0_110_4273"><rect y="0.809082" width="48" height="48" rx="24" fill="white"/></clipPath></defs></svg>
                                </div>
                                <div className='ml-3'>
                                    <div className='text-sofia-reg text-base font-normal text-mcknormalgrey'>Guest</div>
                                    <div className='text-sofia-reg text-base font-normal text-mcknormalgrey'>March 8,2023</div>
                                    <div className='pt-6 pb-6'>
                                        <p className='text-sofia-reg text-base font-normal text-mcknormalgrey'>Thank you for this information it’s been super helpful!</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex relative'>
                                <div className='flex items-center text-sofia-reg text-base font-normal text-mcknormalgrey pr-6 cursor-pointer'>
                                    <svg width="20" height="19" className="mr-3" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 0.634033C12.76 0.634033 11.09 1.44403 10 2.72403C8.91 1.44403 7.24 0.634033 5.5 0.634033C2.42 0.634033 0 3.05403 0 6.13403C0 9.91403 3.4 12.994 8.55 17.674L10 18.984L11.45 17.664C16.6 12.994 20 9.91403 20 6.13403C20 3.05403 17.58 0.634033 14.5 0.634033ZM10.1 16.184L10 16.284L9.9 16.184C5.14 11.874 2 9.02403 2 6.13403C2 4.13403 3.5 2.63403 5.5 2.63403C7.04 2.63403 8.54 3.62403 9.07 4.99403H10.94C11.46 3.62403 12.96 2.63403 14.5 2.63403C16.5 2.63403 18 4.13403 18 6.13403C18 9.02403 14.86 11.874 10.1 16.184Z" fill="#3A3E41"/></svg>Like
                                </div>
                                <div className='flex items-center text-sofia-reg text-base font-normal text-mcknormalgrey pr-6 cursor-pointer'>
                                    <svg width="22" height="22" className="mr-3" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.75 15.4791V2.30908H18.75V8.30908H20.75V2.30908C20.75 1.20908 19.85 0.309082 18.75 0.309082H2.75C1.65 0.309082 0.76 1.20908 0.76 2.30908L0.75 20.3091L4.75 16.3091H13.75V14.3091H3.92L2.75 15.4791Z" fill="#3A3E41"/><path d="M21.25 14.3091H19.05L20.75 10.3091H15.75V16.3091H17.75V21.3091L21.25 14.3091Z" fill="#3A3E41"/></svg>Reply
                                </div>
                                <div className='flex items-center text-sofia-reg text-base font-normal text-mcknormalgrey absolute right-0 cursor-pointer'>
                                    <svg width="24" height="25" className="mr-3" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_110_4288)"><rect y="0.809082" width="24" height="24" rx="12" fill="#DBDFEB"/><path d="M7.5 9.30908C7.5 6.82283 9.51375 4.80908 12 4.80908C14.4862 4.80908 16.5 6.82283 16.5 9.30908C16.5 11.7953 14.4862 13.8091 12 13.8091C9.51375 13.8091 7.5 11.7953 7.5 9.30908Z" fill="#CCD1E3"/><path d="M3 19.4341C3 16.4416 8.99625 14.9341 12 14.9341C15.0037 14.9341 21 16.4416 21 19.4341L18.75 22.5591L11.75 24.5591L5.25 22.5591L3 19.4341Z" fill="#CCD1E3"/></g><rect x="1" y="1.80908" width="22" height="22" rx="11" stroke="#CCD1E3" stroke-width="2"/><defs><clipPath id="clip0_110_4288"><rect y="0.809082" width="24" height="24" rx="12" fill="white"/></clipPath></defs></svg>1 Like
                                </div>
                            </div>
                        </div>

                        
                        <div className='border border-mckdarkgrey rounded'>
                            <div className='border border-mckthingrey rounded bg-shadesblue py-3 px-4 h-32'>
                                <p className='text-sofia-reg text-base text-mcklggrey font-normal'>Comment</p>
                            </div>
                            <div className='grid lg:grid-cols-2 gap-4 relative items-center py-3 px-5'>
                                <div className='flex items-center'>
                                    <div className='pr-4 cursor-pointer'>
                                        <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 0.809082H2C1 0.809082 0 1.80908 0 2.80908V16.8091C0 17.9091 0.9 18.8091 2 18.8091H20C21 18.8091 22 17.8091 22 16.8091V2.80908C22 1.80908 21 0.809082 20 0.809082ZM20 16.7291C19.98 16.7591 19.94 16.7891 19.92 16.8091H2V2.88908L2.08 2.80908H19.91C19.94 2.82908 19.97 2.86908 19.99 2.88908V16.7291H20ZM10 13.3191L7.5 10.3091L4 14.8091H18L13.5 8.80908L10 13.3191Z" fill="#767676"/></svg>
                                    </div>
                                    <div className='pr-4 cursor-pointer'>
                                        <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.225 7.59908C10.195 6.92908 10.875 5.82908 10.875 4.80908C10.875 2.54908 9.125 0.809082 6.875 0.809082H0.625V14.8091H7.665C9.755 14.8091 11.375 13.1091 11.375 11.0191C11.375 9.49908 10.515 8.19908 9.225 7.59908ZM3.625 3.30908H6.625C7.455 3.30908 8.125 3.97908 8.125 4.80908C8.125 5.63908 7.455 6.30908 6.625 6.30908H3.625V3.30908ZM7.125 12.3091H3.625V9.30908H7.125C7.955 9.30908 8.625 9.97908 8.625 10.8091C8.625 11.6391 7.955 12.3091 7.125 12.3091Z" fill="#767676"/></svg>
                                    </div>
                                    <div className='pr-4 cursor-pointer'>
                                        <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 0.809082V3.80908H6.21L2.79 11.8091H0V14.8091H8V11.8091H5.79L9.21 3.80908H12V0.809082H4Z" fill="#767676"/></svg>
                                    </div>
                                    <div className='pr-4 cursor-pointer'>
                                        <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 14.8091C10.31 14.8091 13 12.1191 13 8.80908V0.809082H10.5V8.80908C10.5 10.7391 8.93 12.3091 7 12.3091C5.07 12.3091 3.5 10.7391 3.5 8.80908V0.809082H1V8.80908C1 12.1191 3.69 14.8091 7 14.8091ZM0 16.8091V18.8091H14V16.8091H0Z" fill="#767676"/></svg>
                                    </div>
                                    <div className='pr-4 cursor-pointer'>
                                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.24 6.0542C3.98 5.5742 3.85 5.0242 3.85 4.3842C3.85 3.7742 3.98 3.2242 4.25 2.7142C4.51 2.2142 4.88 1.7842 5.36 1.4242C5.84 1.0742 6.41 0.794199 7.06 0.594199C7.72 0.404199 8.45 0.304199 9.24 0.304199C10.05 0.304199 10.78 0.414199 11.45 0.644199C12.11 0.864199 12.68 1.1842 13.14 1.5842C13.61 1.9842 13.97 2.4642 14.22 3.0142C14.47 3.5642 14.6 4.1642 14.6 4.8242H11.59C11.59 4.5142 11.54 4.2342 11.44 3.9742C11.35 3.7042 11.2 3.4842 11 3.2942C10.8 3.1042 10.55 2.9642 10.25 2.8542C9.95 2.7542 9.59 2.6942 9.19 2.6942C8.8 2.6942 8.45 2.7342 8.16 2.8242C7.87 2.9142 7.63 3.0342 7.44 3.1842C7.25 3.3442 7.1 3.5242 7 3.7342C6.9 3.9442 6.85 4.1642 6.85 4.3942C6.85 4.8742 7.1 5.2742 7.59 5.6042C7.97 5.8542 8.36 6.0842 9 6.3042H4.39C4.34 6.2242 4.28 6.1342 4.24 6.0542ZM18 7.3042H0V9.3042H9.62C9.8 9.3742 10.02 9.4442 10.17 9.5042C10.54 9.6742 10.83 9.8442 11.04 10.0142C11.25 10.1842 11.39 10.3742 11.47 10.5842C11.54 10.7842 11.58 11.0142 11.58 11.2742C11.58 11.5042 11.53 11.7242 11.44 11.9342C11.35 12.1342 11.21 12.3142 11.02 12.4642C10.83 12.6142 10.6 12.7242 10.31 12.8142C10.02 12.8942 9.68 12.9442 9.3 12.9442C8.87 12.9442 8.47 12.9042 8.12 12.8142C7.77 12.7242 7.46 12.5842 7.21 12.3942C6.96 12.2042 6.76 11.9542 6.62 11.6442C6.48 11.3342 6.37 10.8842 6.37 10.4342H3.4C3.4 10.9842 3.48 11.5642 3.64 12.0142C3.8 12.4642 4.01 12.8642 4.29 13.2242C4.57 13.5742 4.89 13.8842 5.27 14.1442C5.64 14.4042 6.05 14.6242 6.49 14.7942C6.93 14.9642 7.39 15.0942 7.87 15.1842C8.35 15.2642 8.83 15.3142 9.31 15.3142C10.11 15.3142 10.84 15.2242 11.49 15.0342C12.14 14.8442 12.7 14.5842 13.16 14.2442C13.62 13.9042 13.98 13.4742 14.23 12.9742C14.48 12.4742 14.61 11.9042 14.61 11.2642C14.61 10.6642 14.51 10.1242 14.3 9.6542C14.25 9.5442 14.19 9.4242 14.13 9.3242H18V7.3042Z" fill="#767676"/></svg>
                                    </div>
                                    <div className='pr-4 cursor-pointer'>
                                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 0.309082V3.30908H11.5V15.3091H14.5V3.30908H19.5V0.309082H6.5ZM0.5 8.30908H3.5V15.3091H6.5V8.30908H9.5V5.30908H0.5V8.30908Z" fill="#767676"/></svg>
                                    </div>
                                    <div className='pr-4 cursor-pointer'>
                                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.25 6.30908C1.42 6.30908 0.75 6.97908 0.75 7.80908C0.75 8.63908 1.42 9.30908 2.25 9.30908C3.08 9.30908 3.75 8.63908 3.75 7.80908C3.75 6.97908 3.08 6.30908 2.25 6.30908ZM2.25 0.309082C1.42 0.309082 0.75 0.979082 0.75 1.80908C0.75 2.63908 1.42 3.30908 2.25 3.30908C3.08 3.30908 3.75 2.63908 3.75 1.80908C3.75 0.979082 3.08 0.309082 2.25 0.309082ZM2.25 12.3091C1.42 12.3091 0.75 12.9891 0.75 13.8091C0.75 14.6291 1.43 15.3091 2.25 15.3091C3.07 15.3091 3.75 14.6291 3.75 13.8091C3.75 12.9891 3.08 12.3091 2.25 12.3091ZM5.25 14.8091H19.25V12.8091H5.25V14.8091ZM5.25 8.80908H19.25V6.80908H5.25V8.80908ZM5.25 0.809082V2.80908H19.25V0.809082H5.25Z" fill="#767676"/></svg>
                                    </div>
                                    <div className='pr-4 cursor-pointer'>
                                        <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 13.8091H2.5V14.3091H1.5V15.3091H2.5V15.8091H0.5V16.8091H3.5V12.8091H0.5V13.8091ZM1.5 4.80908H2.5V0.809082H0.5V1.80908H1.5V4.80908ZM0.5 7.80908H2.3L0.5 9.90908V10.8091H3.5V9.80908H1.7L3.5 7.70908V6.80908H0.5V7.80908ZM5.5 1.80908V3.80908H19.5V1.80908H5.5ZM5.5 15.8091H19.5V13.8091H5.5V15.8091ZM5.5 9.80908H19.5V7.80908H5.5V9.80908Z" fill="#767676"/></svg>
                                    </div>
                                </div>
                                <div className='lg:text-right'>
                                    <button type='button' className='text-sofia-reg lg:text-base text-sm lg:font-extrabold font-normal text-center text-mckwhite rounded-lg bg-mckblue lg:p-3 px-3 py-2'>ADD COMMENT</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='lg:col-span-1 col-start-1 col-end-7'>
                    <div className='flex w-fit mx-auto lg:p-6 py-6'>
                        <a href="" className='mx-1.5 hover:cursor-pointer' target='_blank'><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="0.479004" width="24" height="24" rx="12" fill="#001A71"/><path d="M14.6068 13.1431L14.9178 11.0956H12.9726V9.7674C12.9726 9.20709 13.2438 8.66061 14.1151 8.66061H15V6.9174C15 6.9174 14.1973 6.77905 13.4301 6.77905C11.8274 6.77905 10.7808 7.75995 10.7808 9.53498V11.0956H9V13.1431H10.7808V18.0933C11.1384 18.15 11.5041 18.1791 11.8767 18.1791C12.2493 18.1791 12.6151 18.15 12.9726 18.0933V13.1431H14.6068Z" fill="white"/></svg></a><a href="" className='mx-1.5 hover:cursor-pointer' target='_blank'><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_110_4315)"><rect y="0.479004" width="24" height="24" rx="12" fill="#001A71"/><path d="M9.21885 18.479C14.8778 18.479 17.9739 13.8618 17.9739 9.85894C17.9739 9.72913 17.971 9.59645 17.9651 9.46664C18.5674 9.0378 19.0872 8.50661 19.5 7.89805C18.9391 8.14376 18.3435 8.30424 17.7337 8.37399C18.3758 7.99503 18.8566 7.39971 19.0869 6.69838C18.4828 7.05085 17.8222 7.29949 17.1334 7.43364C16.6693 6.94809 16.0556 6.6266 15.3873 6.51887C14.719 6.41114 14.0332 6.52318 13.4361 6.83765C12.8389 7.15213 12.3636 7.65154 12.0837 8.25866C11.8037 8.86578 11.7346 9.5468 11.8872 10.1964C10.6641 10.136 9.46746 9.82315 8.37499 9.27818C7.28252 8.73321 6.31856 7.96828 5.54561 7.03298C5.15275 7.69987 5.03254 8.48901 5.20939 9.24002C5.38625 9.99104 5.84691 10.6476 6.49775 11.0762C6.00914 11.0609 5.53123 10.9314 5.10352 10.6983V10.7358C5.10308 11.4357 5.34881 12.1141 5.79894 12.6557C6.24908 13.1973 6.87583 13.5688 7.57266 13.7069C7.12003 13.8288 6.64499 13.8466 6.18428 13.7588C6.38091 14.3607 6.76348 14.8871 7.27861 15.2646C7.79373 15.6421 8.4157 15.8518 9.05772 15.8645C7.96777 16.7075 6.62136 17.1647 5.23535 17.1625C4.98955 17.1621 4.744 17.1473 4.5 17.1181C5.90804 18.0075 7.54596 18.4799 9.21885 18.479Z" fill="white"/></g><defs><clipPath id="clip0_110_4315"><rect y="0.479004" width="24" height="24" rx="12" fill="white"/></clipPath></defs></svg></a>
                        <a href="" className='mx-1.5 hover:cursor-pointer' target='_blank'><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="0.479004" width="24" height="24" rx="12" fill="#001A71"/><path d="M11.9973 6.31944C14.0042 6.31944 14.2419 6.32824 15.0312 6.36345C15.7647 6.39573 16.1608 6.51896 16.4249 6.62166C16.7741 6.75663 17.0264 6.92094 17.2875 7.18208C17.5516 7.44616 17.713 7.69556 17.848 8.04472C17.9507 8.3088 18.0739 8.70784 18.1062 9.43845C18.1414 10.2307 18.1502 10.4683 18.1502 12.4724C18.1502 14.4793 18.1414 14.717 18.1062 15.5063C18.0739 16.2398 17.9507 16.6359 17.848 16.9C17.713 17.2492 17.5487 17.5015 17.2875 17.7626C17.0235 18.0267 16.7741 18.1881 16.4249 18.3231C16.1608 18.4258 15.7618 18.549 15.0312 18.5813C14.239 18.6165 14.0013 18.6253 11.9973 18.6253C9.99031 18.6253 9.75264 18.6165 8.96336 18.5813C8.22982 18.549 7.83371 18.4258 7.56963 18.3231C7.22047 18.1881 6.96813 18.0238 6.70699 17.7626C6.44292 17.4986 6.28154 17.2492 6.14657 16.9C6.04388 16.6359 5.92064 16.2369 5.88836 15.5063C5.85316 14.7141 5.84435 14.4764 5.84435 12.4724C5.84435 10.4654 5.85316 10.2277 5.88836 9.43845C5.92064 8.70491 6.04388 8.3088 6.14657 8.04472C6.28154 7.69556 6.44585 7.44322 6.70699 7.18208C6.97107 6.91801 7.22047 6.75663 7.56963 6.62166C7.83371 6.51896 8.23275 6.39573 8.96336 6.36345C9.75264 6.32824 9.99031 6.31944 11.9973 6.31944ZM11.9973 4.9668C9.95804 4.9668 9.70276 4.9756 8.90174 5.01081C8.10365 5.04602 7.55496 5.17512 7.07963 5.35997C6.58376 5.55363 6.16418 5.8089 5.74753 6.22848C5.32794 6.64513 5.07267 7.06472 4.87902 7.55765C4.69416 8.03592 4.56506 8.58167 4.52985 9.37976C4.49464 10.1837 4.48584 10.439 4.48584 12.4782C4.48584 14.5175 4.49464 14.7727 4.52985 15.5738C4.56506 16.3718 4.69416 16.9205 4.87902 17.3959C5.07267 17.8917 5.32794 18.3113 5.74753 18.728C6.16418 19.1446 6.58376 19.4028 7.0767 19.5935C7.55496 19.7784 8.10072 19.9075 8.89881 19.9427C9.69983 19.9779 9.9551 19.9867 11.9943 19.9867C14.0336 19.9867 14.2888 19.9779 15.0899 19.9427C15.888 19.9075 16.4366 19.7784 16.912 19.5935C17.4049 19.4028 17.8245 19.1446 18.2411 18.728C18.6578 18.3113 18.916 17.8917 19.1067 17.3988C19.2916 16.9205 19.4207 16.3748 19.4559 15.5767C19.4911 14.7757 19.4999 14.5204 19.4999 12.4812C19.4999 10.4419 19.4911 10.1867 19.4559 9.38563C19.4207 8.58754 19.2916 8.03885 19.1067 7.56352C18.9219 7.06472 18.6666 6.64513 18.247 6.22848C17.8304 5.81183 17.4108 5.55363 16.9178 5.36291C16.4396 5.17806 15.8938 5.04895 15.0957 5.01374C14.2918 4.9756 14.0365 4.9668 11.9973 4.9668Z" fill="white"/><path d="M11.9971 8.61987C9.86689 8.61987 8.13867 10.3481 8.13867 12.4783C8.13867 14.6085 9.86689 16.3367 11.9971 16.3367C14.1273 16.3367 15.8555 14.6085 15.8555 12.4783C15.8555 10.3481 14.1273 8.61987 11.9971 8.61987ZM11.9971 14.9811C10.6151 14.9811 9.49425 13.8603 9.49425 12.4783C9.49425 11.0963 10.6151 9.97545 11.9971 9.97545C13.3791 9.97545 14.4999 11.0963 14.4999 12.4783C14.4999 13.8603 13.3791 14.9811 11.9971 14.9811Z" fill="white"/><path d="M16.909 8.46719C16.909 8.966 16.5041 9.36798 16.0082 9.36798C15.5094 9.36798 15.1074 8.96306 15.1074 8.46719C15.1074 7.96839 15.5123 7.56641 16.0082 7.56641C16.5041 7.56641 16.909 7.97132 16.909 8.46719Z" fill="white"/></svg></a>
                        <a href="" className='mx-1.5 hover:cursor-pointer' target='_blank'><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="0.479004" width="24" height="24" rx="12" fill="#001A71"/><path d="M19.8406 9.27822C19.8406 9.27822 19.6844 8.1751 19.2031 7.69072C18.5938 7.05322 17.9125 7.0501 17.6 7.0126C15.3625 6.8501 12.0031 6.8501 12.0031 6.8501H11.9969C11.9969 6.8501 8.6375 6.8501 6.4 7.0126C6.0875 7.0501 5.40625 7.05322 4.79688 7.69072C4.31563 8.1751 4.1625 9.27822 4.1625 9.27822C4.1625 9.27822 4 10.5751 4 11.8688V13.0813C4 14.3751 4.15937 15.672 4.15937 15.672C4.15937 15.672 4.31562 16.7751 4.79375 17.2595C5.40313 17.897 6.20313 17.8751 6.55938 17.9438C7.84063 18.0657 12 18.1032 12 18.1032C12 18.1032 15.3625 18.097 17.6 17.9376C17.9125 17.9001 18.5938 17.897 19.2031 17.2595C19.6844 16.7751 19.8406 15.672 19.8406 15.672C19.8406 15.672 20 14.3782 20 13.0813V11.8688C20 10.5751 19.8406 9.27822 19.8406 9.27822ZM10.3469 14.5532V10.0563L14.6687 12.3126L10.3469 14.5532Z" fill="white"/></svg></a>
                    </div>
                    <div className='category-card shade-blue-border rounded-lg overflow-hidden mb-6'>
                        <div className="text-mckblue shade-blue-bg py-3 px-4 text-sofia-bold font-extrabold text-lg" id='blog-label-009'>Recent Blogs</div>
                        <div className='m-4'>
                            <div className='border border-t-0 border-x-0 py-1'>
                                <a href='' className='articletitle-link w-full text-sofia-reg text-base font-normal text-mckblue cursor-pointer no-underline' aria-label='Four Ways Pharmacies Can Benefit from Central Fill as a Service' id='blog-label-009-01'>Four Ways Pharmacies Can Benefit from Central Fill as a Service</a>
                            </div>
                            <div className='border border-t-0 border-x-0 py-1'>
                                <a href='' className='articletitle-link w-full text-sofia-reg text-base font-normal text-mckblue cursor-pointer no-underline' aria-label='CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report' id='blog-label-009-02'>CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report</a>
                            </div>
                            <div className='border border-t-0 border-x-0 py-1'>
                                <a href='' className='articletitle-link w-full text-sofia-reg text-base font-normal text-mckblue cursor-pointer no-underline' aria-label='How COVID-19 has impacted the role of pharmacists around the world, National Library of Medicine, Feb. 22, 2021' id='blog-label-009-03'>How COVID-19 has impacted the role of pharmacists around the world, National Library of Medicine, Feb. 22, 2021</a>
                            </div>
                        </div>
                    </div>

                    <div className='related-card'>
                        <div className="text-mckblue text-sofia-bold font-extrabold text-lg mb-6"  id='blog-label-010'>Related Products</div>
                        <div className="shade-blue-border rounded-lg overflow-hidden lg:mb-6 mb-4 pt-4">
                            <figure className='w-full text-center'>
                                <img src="images/r-p-list.png" className="px-5 lg:px-0 m-auto" alt='Allergy Relief Product'  id='blog-img-006'/>
                            </figure>
                            <figcaption>
                                <div className="content p-6">
                                    <div className="bg-acuteblue text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 mb-3" id='blog-label-010-01'>Acute Care</div>
                                    <a href="" className="articleTitle text-xl text-sofia-reg font-extrabold text-mckblue mt-3 no-underline" aria-labelledby="CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report" id='blog-label-010-02'>Allergy Relief</a>
                                    <p className="text-sofia-reg font-noraml text-mcknormalgrey text-base" id='blog-label-010-03'>Antihistamine Loratadine oral solution USP, 5 mg/5 ml</p>
                                </div>
                            </figcaption>
                        </div>
                        
                        <div className="shade-blue-border rounded-lg overflow-hidden lg:mb-6 mb-4 pt-4">
                            <figure className='w-full text-center'>
                                <img src="images/r-blood-pressure.png" className="px-5 lg:px-0 m-auto" alt='Blood Pressure Monitor Product'  id='blog-img-007'/>
                            </figure>
                            <figcaption>
                                <div className="content p-6">
                                    <div className="bg-diagnosticgreen text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 mb-3" id='blog-label-010-04'>Diagnostic Care</div>
                                    <a href="" className="articleTitle text-xl text-sofia-reg font-extrabold text-mckblue mt-3 no-underline" aria-labelledby="CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report" id='blog-label-010-05'>Blood Pressure Monitor</a>
                                    <p className="text-sofia-reg font-noraml text-mcknormalgrey text-base" id='blog-label-010-06'>Antihistamine Loratadine oral solution USP, 5 mg/5 ml</p>
                                </div>
                            </figcaption>
                        </div>
                        
                        <div className="shade-blue-border rounded-lg overflow-hidden lg:mb-6 mb-4 pt-4">
                            <figure className='w-full text-center'>
                                <img src="images/r-vitamin.png" className="px-5 lg:px-0 m-auto" alt='Vitamin D3 Product'  id='blog-img-008'/>
                            </figure>
                            <figcaption>
                                <div className="content p-6">
                                    <div className="bg-preventiveyellow text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 mb-3" id='blog-label-010-07'>Preventive Care</div>
                                    <a href="" className="articleTitle text-xl text-sofia-reg font-extrabold text-mckblue mt-3 no-underline" aria-labelledby="CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report" id='blog-label-010-08'>Vitamin D3</a>
                                    <p className="text-sofia-reg font-noraml text-mcknormalgrey text-base" id='blog-label-010-09'>Antihistamine Loratadine oral solution USP, 5 mg/5 ml</p>
                                </div>
                            </figcaption>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default BlogDetailsComponent