import React from 'react'

function BlogSearchComponent() {
  return (
    <>
      <div className='container grid grid-cols-1 gap-4 w-full lg:p-72 lg:px-9 lg:pb-0 p-4 pt-6  mx-auto'>
        <div id="search" className="w-full relative flex items-center content-center">
            <input
            className="w-full text-sofia-reg font-normal text-base text-mckblue placeholder:text-mckblue pl-4 py-3 pr-12 focus:border active:border border border-blue focus:outline-none rounded" type="text"
            placeholder="CoverMyMeds"
            />
            <svg className="absolute right-4 z-10 cursor-pointer" width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.7549 11.734H11.9649L11.6849 11.464C12.6649 10.324 13.2549 8.84401 13.2549 7.23401C13.2549 3.64401 10.3449 0.734009 6.75488 0.734009C3.16488 0.734009 0.254883 3.64401 0.254883 7.23401C0.254883 10.824 3.16488 13.734 6.75488 13.734C8.36488 13.734 9.84488 13.144 10.9849 12.164L11.2549 12.444V13.234L16.2549 18.224L17.7449 16.734L12.7549 11.734ZM6.75488 11.734C4.26488 11.734 2.25488 9.72401 2.25488 7.23401C2.25488 4.74401 4.26488 2.73401 6.75488 2.73401C9.24488 2.73401 11.2549 4.74401 11.2549 7.23401C11.2549 9.72401 9.24488 11.734 6.75488 11.734Z" fill="#001A71" /></svg>
        </div>
      </div>
      <div className='container grid grid-cols-3 gap-4 w-full lg:mt-12 lg:px-9 lg:pb-0 p-4 lg:pt-0 mx-auto'>
        <div className='lg:col-span-2 col-start-1 col-end-7'>
            <div className='w-full lg:pb-11 pb-5'>
                <h1 className="lg:text-54 text-32 text-gtl-med text-mckblue font-medium lg:pb-12 pb-1" id="sr-label-001">18 results found for “CoverMyMeds”</h1>
                <div className="text-lg text-sofia-reg text-mckback font-normal lg:pb-px pb-3" id="sr-label-002">Showing results for <strong className='text-mckblue'><i>CoverMyMeds</i></strong></div>
                <div className='text-lg text-sofia-reg text-mcknormalgrey font-normal' id="sr-label-003">Showing 12 results</div>
            </div>
            <div className='grid lg:grid-cols-2 gap-x-6 grid-cols-1'>
                <article className='shadow-md rounded-lg lg:mb-12 mb-6' id="sr-label-004">
                    <figure>
                        <img src="images/blog-oldarticle1.png" className='w-full' alt='CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report article'  id='sr-img-004'/>
                    </figure>
                    <figcaption>
                        <div className='content lg:p-6 p-4'>
                            <a href="" className='articleTitle lg:text-32 text-xl text-gtl-med text-mckblue pb-3 no-underline' aria-labelledby='CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report'  id="sr-link-004">CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report</a>
                            <div className='pb-3 lg:pt-0 pt-3'>
                                <span className='text-mckblue text-sofia-reg font-normal lg:text-base text-sm pr-2 border-solid shade-grey-right-border' id="sr-label-004-01">February 18, 2022</span>
                                <span className='text-mckblue text-sofia-reg font-normal lg:text-base text-sm px-2 border-solid shade-grey-right-border' id="sr-label-004-02">65 min read</span>
                                <span className='text-mckblue text-sofia-reg font-normal lg:text-base text-sm pl-2' id="sr-label-004-03">1.3K views</span>
                            </div>
                            <div className='flex'>
                                <div className='bg-diagnosticgreen text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2' id="sr-label-004-04">Diagnostic Care</div>
                                <div className='categoryTag text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 ml-1 border-solid shade-blue-border' id="sr-label-004-05">Sample Tag 1</div>
                                <div className='categoryTag text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 ml-1 border-solid shade-blue-border' id="sr-label-004-06">Sample Tag 3</div>
                            </div>
                        </div>
                    </figcaption>
                </article>
                <article className='shadow-md rounded-lg lg:mb-12 mb-6' id="sr-label-005">
                    <figure>
                        <img src="images/blog-oldarticle2.png" className='w-full' alt='CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report article'  id='sr-img-005'/>
                    </figure>
                    <figcaption>
                        <div className='content lg:p-6 p-4'>
                            <a href="" className='articleTitle lg:text-32 text-xl text-gtl-med text-mckblue pb-3 no-underline' aria-labelledby='CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report' id="sr-link-005">CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report</a>
                            <div className='pb-3 lg:pt-0 pt-3'>
                                <span className='text-mckblue text-sofia-reg font-normal lg:text-base text-sm pr-2 border-solid shade-grey-right-border' id="sr-label-005-01">February 18, 2022</span>
                                <span className='text-mckblue text-sofia-reg font-normal lg:text-base text-sm px-2 border-solid shade-grey-right-border' id="sr-label-005-01">65 min read</span>
                                <span className='text-mckblue text-sofia-reg font-normal lg:text-base text-sm pl-2' id="sr-label-005-01">220 views</span>
                            </div>
                            <div className='flex'>
                                <div className='bg-acuteblue text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2' id="sr-label-005-04">Acute Care</div>
                                <div className='categoryTag text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 ml-1 border-solid shade-blue-border' id="sr-label-005-05">Sample Tag 1</div>
                                <div className='categoryTag text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 ml-1 border-solid shade-blue-border' id="sr-label-005-06">Sample Tag 3</div>
                            </div>
                        </div>
                    </figcaption>
                </article>
                <article className='shadow-md rounded-lg lg:mb-12 mb-6' id="sr-label-006">
                    <figure>
                        <img src="images/blog-oldarticle1.png" className='w-full' alt='CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report article'  id='sr-img-006'/>
                    </figure>
                    <figcaption>
                        <div className='content lg:p-6 p-4'>
                            <a href="" className='articleTitle lg:text-32 text-xl text-gtl-med text-mckblue pb-3 no-underline' aria-labelledby='CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report' id="sr-link-006">CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report</a>
                            <div className='pb-3 lg:pt-0 pt-3'>
                                <span className='text-mckblue text-sofia-reg font-normal lg:text-base text-sm pr-2 border-solid shade-grey-right-border' id="sr-label-006-01">February 18, 2022</span>
                                <span className='text-mckblue text-sofia-reg font-normal lg:text-base text-sm px-2 border-solid shade-grey-right-border' id="sr-label-006-01">65 min read</span>
                                <span className='text-mckblue text-sofia-reg font-normal lg:text-base text-sm pl-2' id="sr-label-006-03">1.3K views</span>
                            </div>
                            <div className='flex'>
                                <div className='bg-diagnosticgreen text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2'id="sr-label-006-04">Diagnostic Care</div>
                                <div className='categoryTag text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 ml-1 border-solid shade-blue-border'id="sr-label-006-05">Sample Tag 1</div>
                                <div className='categoryTag text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 ml-1 border-solid shade-blue-border'id="sr-label-006-06">Sample Tag 3</div>
                            </div>
                        </div>
                    </figcaption>
                </article>
                <article className='shadow-md rounded-lg lg:mb-12 mb-6' id="sr-label-007">
                    <figure>
                        <img src="images/blog-oldarticle2.png" className='w-full' alt='CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report article'  id='sr-img-007'/>
                    </figure>
                    <figcaption>
                        <div className='content lg:p-6 p-4'>
                            <a href="" className='articleTitle lg:text-32 text-xl text-gtl-med text-mckblue pb-3 no-underline' aria-labelledby='CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report' id="sr-link-007">CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report</a>
                            <div className='pb-3 lg:pt-0 pt-3'>
                                <span className='text-mckblue text-sofia-reg font-normal lg:text-base text-sm pr-2 border-solid shade-grey-right-border' id="sr-label-007-01">February 18, 2022</span>
                                <span className='text-mckblue text-sofia-reg font-normal lg:text-base text-sm px-2 border-solid shade-grey-right-border' id="sr-label-007-02">65 min read</span>
                                <span className='text-mckblue text-sofia-reg font-normal lg:text-base text-sm pl-2' id="sr-label-007-03">220 views</span>
                            </div>
                            <div className='flex'>
                                <div className='bg-acuteblue text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2' id="sr-label-007-04">Acute Care</div>
                                <div className='categoryTag text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 ml-1 border-solid shade-blue-border' id="sr-label-007-05">Sample Tag 1</div>
                                <div className='categoryTag text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 ml-1 border-solid shade-blue-border' id="sr-label-007-06">Sample Tag 3</div>
                            </div>
                        </div>
                    </figcaption>
                </article>
                <article className='shadow-md rounded-lg lg:mb-12 mb-6' id="sr-label-008">
                    <figure>
                        <img src="images/blog-oldarticle3.png" className='w-full' alt='CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report article'  id='sr-img-008'/>
                    </figure>
                    <figcaption>
                        <div className='content lg:p-6 p-4'>
                            <a href="" className='articleTitle lg:text-32 text-xl text-gtl-med text-mckblue pb-3 no-underline' aria-labelledby='CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report' id="sr-link-008">CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report</a>
                            <div className='pb-3 lg:pt-0 pt-3'>
                                <span className='text-mckblue text-sofia-reg font-normal lg:text-base text-sm pr-2 border-solid shade-grey-right-border' id="sr-label-008-01">February 18, 2022</span>
                                <span className='text-mckblue text-sofia-reg font-normal lg:text-base text-sm px-2 border-solid shade-grey-right-border' id="sr-label-008-02">65 min read</span>
                                <span className='text-mckblue text-sofia-reg font-normal lg:text-base text-sm pl-2' id="sr-label-008-03">15.5K views</span>
                            </div>
                            <div className='flex'>
                                <div className='bg-preventiveyellow text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2' id="sr-label-008-04">Preventive Care</div>
                                <div className='categoryTag text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 ml-1 border-solid shade-blue-border' id="sr-label-008-05">Sample Tag 1</div>
                                <div className='categoryTag text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 ml-1 border-solid shade-blue-border' id="sr-label-008-06">Sample Tag 3</div>
                            </div>
                        </div>
                    </figcaption>
                </article>
                <article className='shadow-md rounded-lg lg:mb-12 mb-6' id="sr-label-009">
                    <figure>
                        <img src="images/blog-oldarticle4.png" className='w-full'  alt='CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report article'  id='sr-img-009'/>
                    </figure>
                    <figcaption>
                        <div className='content lg:p-6 p-4'>
                            <a href="" className='articleTitle lg:text-32 text-xl text-gtl-med text-mckblue pb-3 no-underline' aria-labelledby='CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report' id="sr-link-009">CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report</a>
                            <div className='pb-3 lg:pt-0 pt-3'>
                                <span className='text-mckblue text-sofia-reg font-normal lg:text-base text-xl pr-2 border-solid shade-grey-right-border' id="sr-label-009-01">February 18, 2022</span>
                                <span className='text-mckblue text-sofia-reg font-normal lg:text-base text-xl px-2 border-solid shade-grey-right-border' id="sr-label-009-01">65 min read</span>
                                <span className='text-mckblue text-sofia-reg font-normal lg:text-base text-xl pl-2' id="sr-label-009-03">223K views</span>
                            </div>
                            <div className='flex'>
                                <div className='bg-everydayblue text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2' id="sr-label-009-04">Everyday Care</div>
                                <div className='categoryTag text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 ml-1 border-solid shade-blue-border' id="sr-label-009-05">Sample Tag 1</div>
                                <div className='categoryTag text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 ml-1 border-solid shade-blue-border' id="sr-label-009-06">Sample Tag 3</div>
                            </div>
                        </div>
                    </figcaption>
                </article>
                <article className='shadow-md rounded-lg lg:mb-12 mb-6' id="sr-label-010">
                    <figure>
                        <img src="images/blog-oldarticle3.png" className='w-full' alt='CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report article'  id='sr-img-010'/>
                    </figure>
                    <figcaption>
                        <div className='content lg:p-6 p-4'>
                            <a href="" className='articleTitle lg:text-32 text-xl text-gtl-med text-mckblue pb-3 no-underline' aria-labelledby='CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report' id="sr-link-010">CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report</a>
                            <div className='pb-3 lg:pt-0 pt-3'>
                                <span className='text-mckblue text-sofia-reg font-normal lg:text-base text-sm pr-2 border-solid shade-grey-right-border' id="sr-label-010-01">February 18, 2022</span>
                                <span className='text-mckblue text-sofia-reg font-normal lg:text-base text-sm px-2 border-solid shade-grey-right-border' id="sr-label-010-02">65 min read</span>
                                <span className='text-mckblue text-sofia-reg font-normal lg:text-base text-sm pl-2' id="sr-label-010-03">15.5K views</span>
                            </div>
                            <div className='flex'>
                                <div className='bg-preventiveyellow text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2' id="sr-label-010-04">Preventive Care</div>
                                <div className='categoryTag text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 ml-1 border-solid shade-blue-border' id="sr-label-010-05">Sample Tag 1</div>
                                <div className='categoryTag text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 ml-1 border-solid shade-blue-border' id="sr-label-010-06">Sample Tag 3</div>
                            </div>
                        </div>
                    </figcaption>
                </article>
                <article className='shadow-md rounded-lg lg:mb-12 mb-6' id="sr-label-011">
                    <figure>
                        <img src="images/blog-oldarticle4.png" className='w-full'  alt='CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report article' id='sr-img-011'/>
                    </figure>
                    <figcaption>
                        <div className='content lg:p-6 p-4'>
                            <a href="" className='articleTitle lg:text-32 text-xl text-gtl-med text-mckblue pb-3 no-underline' aria-labelledby='CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report' id="sr-link-011">CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report</a>
                            <div className='pb-3 lg:pt-0 pt-3'>
                                <span className='text-mckblue text-sofia-reg font-normal lg:text-base text-xl pr-2 border-solid shade-grey-right-border' id='sr-label-011-01'>February 18, 2022</span>
                                <span className='text-mckblue text-sofia-reg font-normal lg:text-base text-xl px-2 border-solid shade-grey-right-border' id='sr-label-011-02'>65 min read</span>
                                <span className='text-mckblue text-sofia-reg font-normal lg:text-base text-xl pl-2' id='sr-label-011-03'>223K views</span>
                            </div>
                            <div className='flex'>
                                <div className='bg-everydayblue text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2' id='sr-label-011-04'>Everyday Care</div>
                                <div className='categoryTag text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 ml-1 border-solid shade-blue-border' id='sr-label-011-05'>Sample Tag 1</div>
                                <div className='categoryTag text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 ml-1 border-solid shade-blue-border' id='sr-label-011-06'>Sample Tag 3</div>
                            </div>
                        </div>
                    </figcaption>
                </article>
            </div>
        </div>

        <div className='lg:col-span-1 col-start-1 col-end-7'>
            <div className='category-card shade-blue-border rounded-lg overflow-hidden pb-4 mb-6'>
                <div className="text-mckblue shade-blue-bg py-3 px-4 text-sofia-bold font-extrabold text-lg" id='sr-label-012'>Category</div>
                <div className='lg:px-6 px-2 py-2 pb-0'>
                    <div className="tab text-mckblue w-full overflow-hidden lg:border-none border-none">
                        <input type="checkbox" id="acute-1" value='' />
                        <label className="tab-label py-2 px-4 flex cursor-pointer text-sofia-bold font-extrabold text-base relative" htmlFor='acute-1' id='sr-label-012-01'>
                            <div className='w-4 h-5 mr-3'>
                            <svg className='mr-3' width="18" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.355 5.22691L13.347 0.878906C12.159 1.08891 10.567 1.57891 8.45501 2.48891C-1.50099 6.77091 0.0490063 10.0689 5.32901 9.88491C5.32901 9.88491 9.20901 9.82291 11.365 9.14491C11.365 9.14491 -0.166994 13.5209 2.09701 17.5269C2.09701 17.5269 4.03701 21.3489 13.737 16.9729C13.737 16.9729 17.723 15.3429 16.853 14.4449C15.959 13.5229 13.321 13.8309 10.497 15.0029C7.78501 16.1269 3.64301 18.6929 6.19301 21.1629C6.19301 21.1629 7.80901 22.6729 11.527 21.9949" stroke="#001A71" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </div>
                        Acute Care</label>
                        <div className="tab-content text-sofia-reg font-normal text-base text-mcknormalgrey">
                            <button className='w-full list-none text-sofia-reg text-base font-normal text-mckblue cursor-pointer text-left hover:bg-shadesblue pl-2 py-1' id='sr-label-012-02'>Allergy Relief</button>
                            <button className='w-full list-none text-sofia-reg text-base font-normal text-mckblue cursor-pointer text-left hover:bg-shadesblue pl-2 py-1' id='sr-label-012-03'>Pain Relief</button>
                            <button className='w-full list-none text-sofia-reg text-base font-normal text-mckblue cursor-pointer text-left hover:bg-shadesblue pl-2 py-1' id='sr-label-012-04'>Cough, Cold & Flu Relief</button>
                            <button className='w-full list-none text-sofia-reg text-base font-normal text-mckblue cursor-pointer text-left hover:bg-shadesblue pl-2 py-1' id='sr-label-012-05'>Digestion Health</button>
                            <button className='w-full list-none text-sofia-reg text-base font-normal text-mckblue cursor-pointer text-left hover:bg-shadesblue pl-2 py-1' id='sr-label-012-06'>Smoking Cessation</button>
                            <button className='w-full list-none text-sofia-reg text-base font-normal text-mckblue cursor-pointer text-left hover:bg-shadesblue pl-2 py-1' id='sr-label-012-07'>Ear Care</button>
                            <button className='w-full list-none text-sofia-reg text-base font-normal text-mckblue cursor-pointer text-left hover:bg-shadesblue pl-2 py-1' id='sr-label-012-08'>Sinus Care</button>
                            <button className='w-full list-none text-sofia-reg text-base font-normal text-mckblue cursor-pointer text-left hover:bg-shadesblue pl-2 py-1' id='sr-label-012-09'>Oral Care</button>
                        </div>
                    </div>
                </div>
                <div className='lg:px-6 px-2'>
                    <div className="tab text-mckblue w-full overflow-hidden lg:border-none sm:border-none xs:border-none">
                        <input type="checkbox" id="diagnostic-1" />
                        <label className="tab-label py-2 px-4 flex cursor-pointer text-sofia-bold font-extrabold text-base relative" htmlFor='diagnostic-1' id='sr-label-012-10'>
                            <div className='w-4 h-5 mr-3'>
                            <svg className='mr-3' width="19" height="25" viewBox="0 0 19 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.1208 10.637C18.1208 10.637 7.52883 9.57696 6.76683 15.423M8.37283 18.723C5.66283 17.471 6.41083 13.851 9.05883 13.027C12.1948 12.051 15.5988 14.675 15.3768 17.863C15.1168 21.617 11.0108 23.741 7.51483 23.225C1.65083 22.361 0.040831 15.665 3.75283 11.565C5.66483 9.45296 8.37283 8.71896 10.8628 7.48896C11.9008 6.97496 12.9988 6.05696 12.9308 4.80096C12.9308 3.07696 11.5048 1.67896 9.74483 1.67896C7.98483 1.67896 6.55883 3.07696 6.55883 4.80096C6.55883 4.80096 6.46083 7.40696 9.50083 7.99296" stroke="#001A71" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </div>
                        Diagnostic Care</label>
                        <div className="tab-content text-sofia-reg font-normal text-base text-mcknormalgrey">
                            <button className='w-full list-none text-sofia-reg text-base font-normal text-mckblue cursor-pointer text-left hover:bg-shadesblue pl-2 py-1' id='sr-label-012-11'>Allergy Relief</button>
                            <button className='w-full list-none text-sofia-reg text-base font-normal text-mckblue cursor-pointer text-left hover:bg-shadesblue pl-2 py-1' id='sr-label-012-12'>Pain Relief</button>
                            <button className='w-full list-none text-sofia-reg text-base font-normal text-mckblue cursor-pointer text-left hover:bg-shadesblue pl-2 py-1' id='sr-label-012-13'>Cough, Cold & Flu Relief</button>
                            <button className='w-full list-none text-sofia-reg text-base font-normal text-mckblue cursor-pointer text-left hover:bg-shadesblue pl-2 py-1' id='sr-label-012-14'>Digestion Health</button>
                            <button className='w-full list-none text-sofia-reg text-base font-normal text-mckblue cursor-pointer text-left hover:bg-shadesblue pl-2 py-1' id='sr-label-012-15'>Smoking Cessation</button>
                            <button className='w-full list-none text-sofia-reg text-base font-normal text-mckblue cursor-pointer text-left hover:bg-shadesblue pl-2 py-1' id='sr-label-012-16'>Ear Care</button>
                            <button className='w-full list-none text-sofia-reg text-base font-normal text-mckblue cursor-pointer text-left hover:bg-shadesblue pl-2 py-1' id='sr-label-012-17'>Sinus Care</button>
                            <button className='w-full list-none text-sofia-reg text-base font-normal text-mckblue cursor-pointer text-left hover:bg-shadesblue pl-2 py-1' id='sr-label-012-18'>Oral Care</button>
                        </div>
                    </div>
                </div>
                <div className='lg:px-6 px-2'>
                    <div className="tab text-mckblue w-full overflow-hidden lg:border-none sm:border-none xs:border-none">
                        <input type="checkbox" id="every-1" />
                        <label className="tab-label py-2 px-4 flex cursor-pointer text-sofia-bold font-extrabold text-base relative" htmlFor='every-1' id='sr-label-012-19'>
                            <div className='w-4 h-5 mr-3'>
                            <svg width="16" height="25" viewBox="0 0 16 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.9549 16.5989C11.6189 17.3649 11.0229 19.4429 10.4909 20.8109C9.99288 22.0869 8.73688 23.2669 7.26888 23.2649C5.62888 23.2629 4.01488 22.0089 4.01288 20.1989C4.00888 17.6249 6.31288 16.5049 7.23288 15.6809C9.52688 13.6289 13.5509 11.4409 13.5469 7.92688C13.5429 4.35888 10.5049 1.69688 7.22888 1.69288C4.03288 1.68888 0.938875 4.10488 0.942875 7.91088C0.946875 11.0869 4.19087 12.9149 7.23487 15.6789C9.68487 17.9029 12.0589 20.4529 15.0589 23.2269" stroke="#001A71" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </div>
                        Every Day Care</label>
                        <div className="tab-content text-sofia-reg font-normal text-base text-mcknormalgrey">
                            <button className='w-full list-none text-sofia-reg text-base font-normal text-mckblue cursor-pointer text-left hover:bg-shadesblue pl-2 py-1' id='sr-label-012-20'>Allergy Relief</button>
                            <button className='w-full list-none text-sofia-reg text-base font-normal text-mckblue cursor-pointer text-left hover:bg-shadesblue pl-2 py-1' id='sr-label-012-21'>Pain Relief</button>
                            <button className='w-full list-none text-sofia-reg text-base font-normal text-mckblue cursor-pointer text-left hover:bg-shadesblue pl-2 py-1' id='sr-label-012-22'>Cough, Cold & Flu Relief</button>
                            <button className='w-full list-none text-sofia-reg text-base font-normal text-mckblue cursor-pointer text-left hover:bg-shadesblue pl-2 py-1' id='sr-label-012-23'>Digestion Health</button>
                            <button className='w-full list-none text-sofia-reg text-base font-normal text-mckblue cursor-pointer text-left hover:bg-shadesblue pl-2 py-1' id='sr-label-012-24'>Smoking Cessation</button>
                            <button className='w-full list-none text-sofia-reg text-base font-normal text-mckblue cursor-pointer text-left hover:bg-shadesblue pl-2 py-1' id='sr-label-012-25'>Ear Care</button>
                            <button className='w-full list-none text-sofia-reg text-base font-normal text-mckblue cursor-pointer text-left hover:bg-shadesblue pl-2 py-1' id='sr-label-012-26'>Sinus Care</button>
                            <button className='w-full list-none text-sofia-reg text-base font-normal text-mckblue cursor-pointer text-left hover:bg-shadesblue pl-2 py-1' id='sr-label-012-27'>Oral Care</button>
                        </div>
                    </div>
                </div>
                <div className='lg:px-6 px-2'>
                    <div className="tab text-mckblue w-full overflow-hidden lg:border-none sm:border-none xs:border-none">
                        <input type="checkbox" id="preventative-1" />
                        <label className="tab-label py-2 px-4 flex cursor-pointer text-sofia-bold font-extrabold text-base relative" htmlFor='preventative-1' id='sr-label-012-28'>
                            <div className='w-4 h-5 mr-3'>
                            <svg className='mr-3' width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.4934 9.02714C19.4934 9.02714 21.7594 12.1191 19.4934 15.7851C17.1934 19.5051 12.8214 19.1631 12.8214 19.1631C6.89536 18.6431 8.01736 14.4551 8.01736 14.4551C8.01736 14.4551 8.58736 11.2211 12.5834 11.9811C16.5794 12.7411 15.5794 17.6891 15.5794 17.6891C15.5794 17.6891 14.7934 23.9291 7.95536 23.2271C5.20536 22.9451 2.95536 21.1711 1.87736 18.4951C0.591358 15.3051 2.12336 12.5031 2.12336 12.5031C2.12336 12.5031 4.22536 7.24114 10.9674 8.98514C10.9674 8.98514 7.83936 7.50914 8.99936 4.46314C8.99936 4.46314 9.64736 2.45514 11.5754 1.82914C12.7854 1.43514 14.3234 1.82514 14.9294 2.88114C16.0874 4.89114 13.4814 6.03514 13.4814 6.03514C9.36536 7.63314 6.84136 4.35514 6.84136 4.35514C6.84136 4.35514 5.60136 2.88714 5.49336 1.67914" stroke="#001A71" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </div>
                        Preventative Care</label>
                        <div className="tab-content text-sofia-reg font-normal text-base text-mcknormalgrey">
                            <button className='w-full list-none text-sofia-reg text-base font-normal text-mckblue cursor-pointer text-left hover:bg-shadesblue pl-2 py-1' id='sr-label-012-29'>Allergy Relief</button>
                            <button className='w-full list-none text-sofia-reg text-base font-normal text-mckblue cursor-pointer text-left hover:bg-shadesblue pl-2 py-1' id='sr-label-012-30'>Pain Relief</button>
                            <button className='w-full list-none text-sofia-reg text-base font-normal text-mckblue cursor-pointer text-left hover:bg-shadesblue pl-2 py-1' id='sr-label-012-31'>Cough, Cold & Flu Relief</button>
                            <button className='w-full list-none text-sofia-reg text-base font-normal text-mckblue cursor-pointer text-left hover:bg-shadesblue pl-2 py-1' id='sr-label-012-32'>Digestion Health</button>
                            <button className='w-full list-none text-sofia-reg text-base font-normal text-mckblue cursor-pointer text-left hover:bg-shadesblue pl-2 py-1' id='sr-label-012-33'>Smoking Cessation</button>
                            <button className='w-full list-none text-sofia-reg text-base font-normal text-mckblue cursor-pointer text-left hover:bg-shadesblue pl-2 py-1' id='sr-label-012-34'>Ear Care</button>
                            <button className='w-full list-none text-sofia-reg text-base font-normal text-mckblue cursor-pointer text-left hover:bg-shadesblue pl-2 py-1' id='sr-label-012-35'>Sinus Care</button>
                            <button className='w-full list-none text-sofia-reg text-base font-normal text-mckblue cursor-pointer text-left hover:bg-shadesblue pl-2 py-1' id='sr-label-012-36'>Oral Care</button>
                        </div>
                    </div>
                </div>
                <div className='lg:px-6 px-2'>
                    <div className="tab text-mckblue w-full overflow-hidden lg:border-none sm:border-none xs:border-none">
                        <input type="checkbox" id="health-1" />
                        <label className="tab-label py-2 px-4 flex cursor-pointer text-sofia-bold font-extrabold text-base relative" htmlFor='health-1' id='sr-label-012-37'>Health Needs</label>
                        <div className="tab-content text-sofia-reg font-normal text-base text-mcknormalgrey">
                            <button className='w-full list-none text-sofia-reg text-base font-normal text-mckblue cursor-pointer text-left hover:bg-shadesblue pl-2 py-1' id='sr-label-012-38'>Allergy Relief</button>
                            <button className='w-full list-none text-sofia-reg text-base font-normal text-mckblue cursor-pointer text-left hover:bg-shadesblue pl-2 py-1' id='sr-label-012-39'>Pain Relief</button>
                            <button className='w-full list-none text-sofia-reg text-base font-normal text-mckblue cursor-pointer text-left hover:bg-shadesblue pl-2 py-1' id='sr-label-012-40'>Cough, Cold & Flu Relief</button>
                            <button className='w-full list-none text-sofia-reg text-base font-normal text-mckblue cursor-pointer text-left hover:bg-shadesblue pl-2 py-1' id='sr-label-012-41'>Digestion Health</button>
                            <button className='w-full list-none text-sofia-reg text-base font-normal text-mckblue cursor-pointer text-left hover:bg-shadesblue pl-2 py-1' id='sr-label-012-42'>Smoking Cessation</button>
                            <button className='w-full list-none text-sofia-reg text-base font-normal text-mckblue cursor-pointer text-left hover:bg-shadesblue pl-2 py-1' id='sr-label-012-43'>Ear Care</button>
                            <button className='w-full list-none text-sofia-reg text-base font-normal text-mckblue cursor-pointer text-left hover:bg-shadesblue pl-2 py-1' id='sr-label-012-44'>Sinus Care</button>
                            <button className='w-full list-none text-sofia-reg text-base font-normal text-mckblue cursor-pointer text-left hover:bg-shadesblue pl-2 py-1' id='sr-label-012-45'>Oral Care</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='category-card shade-blue-border rounded-lg overflow-hidden mb-6'>
                <div className="text-mckblue shade-blue-bg py-3 px-4 text-sofia-bold font-extrabold text-lg" id='sr-label-013'>Trending Blogs</div>
                <div className='m-4'>
                    <div className='border border-t-0 border-x-0 py-1'>
                        <a href='' className='articletitle-link w-full text-sofia-reg text-base font-normal text-mckblue cursor-pointer no-underline' aria-label='Four Ways Pharmacies Can Benefit from Central Fill as a Service' id='sr-label-013-01'>Four Ways Pharmacies Can Benefit from Central Fill as a Service</a>
                    </div>
                    <div className='border border-t-0 border-x-0 py-1'>
                        <a href='' className='articletitle-link w-full text-sofia-reg text-base font-normal text-mckblue cursor-pointer no-underline' aria-label='CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report' id='sr-label-013-02'>CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report</a>
                    </div>
                    <div className='border border-t-0 border-x-0 py-1'>
                        <a href='' className='articletitle-link w-full text-sofia-reg text-base font-normal text-mckblue cursor-pointer no-underline' aria-label='How COVID-19 has impacted the role of pharmacists around the world, National Library of Medicine, Feb. 22, 2021' id='sr-label-013-03'>How COVID-19 has impacted the role of pharmacists around the world, National Library of Medicine, Feb. 22, 2021</a>
                    </div>
                </div>
            </div>

            <div className='related-card'>
                <div className="text-mckblue text-sofia-bold font-extrabold text-lg mb-6"  id='sr-label-014'>Related Products</div>
                <div className="shade-blue-border rounded-lg overflow-hidden lg:mb-6 mb-4 pt-4">
                    <figure className='w-full text-center'>
                        <img src="images/r-p-list.png" className="px-5 lg:px-0 m-auto" alt='Allergy Relief Product'  id='sr-img-014'/>
                    </figure>
                    <figcaption>
                        <div className="content p-6">
                            <div className="bg-acuteblue text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 mb-3" id='sr-label-014-01'>Acute Care</div>
                            <a href="" className="articleTitle text-xl text-sofia-reg font-extrabold text-mckblue mt-3 no-underline" aria-labelledby="CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report" id='sr-link-014'>Allergy Relief</a>
                            <p className="text-sofia-reg font-noraml text-mcknormalgrey text-base" id='sr-label-014-02'>Antihistamine Loratadine oral solution USP, 5 mg/5 ml</p>
                        </div>
                    </figcaption>
                </div>
                
                <div className="shade-blue-border rounded-lg overflow-hidden lg:mb-6 mb-4 pt-4" id='sr-label-015'>
                    <figure className='w-full text-center'>
                        <img src="images/r-blood-pressure.png" className="px-5 lg:px-0 m-auto" alt='Blood Pressure Monitor Product'  id='sr-img-015'/>
                    </figure>
                    <figcaption>
                        <div className="content p-6">
                            <div className="bg-diagnosticgreen text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 mb-3" id='sr-label-015-01'>Diagnostic Care</div>
                            <a href="" className="articleTitle text-xl text-sofia-reg font-extrabold text-mckblue mt-3 no-underline" aria-labelledby="CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report" id='sr-link-015'>Blood Pressure Monitor</a>
                            <p className="text-sofia-reg font-noraml text-mcknormalgrey text-base" id='sr-label-015-02'>Antihistamine Loratadine oral solution USP, 5 mg/5 ml</p>
                        </div>
                    </figcaption>
                </div>
                
                <div className="shade-blue-border rounded-lg overflow-hidden lg:mb-6 mb-4 pt-4" id='sr-label-016'>
                    <figure className='w-full text-center'>
                        <img src="images/r-vitamin.png" className="px-5 lg:px-0 m-auto" alt='Vitamin D3 Product'  id='sr-img-016'/>
                    </figure>
                    <figcaption>
                        <div className="content p-6">
                            <div className="bg-preventiveyellow text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 mb-3" id='sr-label-016-01'>Preventive Care</div>
                            <a href="" className="articleTitle text-xl text-sofia-reg font-extrabold text-mckblue mt-3 no-underline" aria-labelledby="CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report" id='sr-link-016'>Vitamin D3</a>
                            <p className="text-sofia-reg font-noraml text-mcknormalgrey text-base" id='sr-label-016-02'>Antihistamine Loratadine oral solution USP, 5 mg/5 ml</p>
                        </div>
                    </figcaption>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default BlogSearchComponent;
