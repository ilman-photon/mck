import Image from 'next/image';
import Oldarticle1 from '../../public/images/other-article1.png';
import Oldarticle2 from '../../public/images/other-article2.png';

export default function CarouselComponent() {

    return (
        <div className='lg:pb-0 lg:p-6 lg:pt-0 pt-0 p-4'>
            <h3 className='text-gtl-med text-mckblue text-32 font-medium lg:pb-6'>Other Articles You May Like...</h3>
            <div className='grid lg:grid-cols-2 gap-4 lg:relative'>
                <article className="shadow-md rounded-lg lg:mb-12 mb-6">
                    <figure>
                        <Image src={Oldarticle1} className="w-full" alt="CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report article" id="blog-img-002" />
                    </figure>
                    <figcaption>
                        <div className="content lg:p-6 p-4">
                            <a href="" className="articleTitle lg:text-32 leading-10 max-[576px]:leading-8 sm:text-32 text-xl text-gtl-med text-mckblue no-underline" aria-labelledby="CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report">CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report</a>
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
                            <a href="" className="articleTitle lg:text-32 text-xl leading-10 max-[576px]:leading-8 sm:text-32 text-gtl-med text-mckblue no-underline" aria-labelledby="CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report">CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report</a>
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
                        <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24.8306" r="24" fill="#4D5F9C" /><path d="M28.9401 18.7106L27.0601 16.8306L19.0601 24.8306L27.0601 32.8306L28.9401 30.9506L22.8334 24.8306L28.9401 18.7106Z" fill="black" /></svg>
                    </div>
                    <div className='lg:hidden text-sofia-reg text-xl font-normal px-3'>1/3</div>
                    <div className='carousel-next lg:absolute -right-6 cursor-pointer'>
                        <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24.8306" r="24" fill="#001A71" /><path d="M20.9401 16.8306L19.0601 18.7106L25.1667 24.8306L19.0601 30.9506L20.9401 32.8306L28.9401 24.8306L20.9401 16.8306Z" fill="black" /></svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
