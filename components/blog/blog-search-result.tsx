import React, { useEffect, useState } from "react";
import RelatedProducts from "../blog_details/RelatedProducts";
import CatogaryComponent from "./Catogory";
import SearchComponent from "./Search";
import ResentBlogListComponent from "../blog_details/RecentBlogs";
import { GetTime } from "../CommonUtil/time";
import axios from "axios";

function BlogSearchComponent() {
  const [BlogListingContent, setBlogListingContent] = useState<any>();
  const [ArticleContent, setArticleContent] = useState<any>();
  const [noSearchResult, setnoSearchResult] = useState<string>();
  const [noSearchClick, setnoSearchClick] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchBlogListing = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(
        `${process.env.API_URL}/api/episerver/v3.0/content/?ContentUrl=${process.env.API_URL}/en/blog-listing-setting/&expand=*`,
        { headers: { "Accept-Language": "en" } }
      );
      const responseid = await axios.get(
        `${process.env.API_URL}/api/episerver/v3.0/content/?ContentUrl=${process.env.API_URL}/en/blog/blog-page-are-your-medications-causing-you-to-lose-nutrients/&expand=*`,
        { headers: { "Accept-Language": "en" } }
      );
      setBlogListingContent(response);
      setArticleContent(responseid);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchBlogListing();
  }, []);
  const HandelSearch = (e: any, searchstring: any) => {
    console.log(e, searchstring);
  };

  // function handleKeyDown(e: any) {
  //     if (e.keyCode == 13) {
  //         console.log('e', e)
  //     }
  // }
  return (
    <>
      {isLoading ? ( // Render loading indicator while loading
        <div>Loading...</div>
      ) : (
        <>
          {" "}
          <div className="container grid grid-cols-1 gap-4 w-full lg:p-72 lg:px-9 lg:pb-0 p-4 pt-6 mx-auto lg:mt-36 mt-16">
            <div
              id="search"
              className="w-full relative flex items-center content-center"
            >
              <SearchComponent
                placeholder={
                  BlogListingContent?.data[0].blogSearchPlaceholderText.value
                }
                handleClick={(e, searchstring) => HandelSearch(e, searchstring)}
              />
            </div>
          </div>
          <div className="container grid grid-cols-3 gap-4 w-full lg:mt-12 lg:px-9 lg:pb-0 p-4 lg:pt-0 mx-auto">
            {noSearchClick ? (
              <div className="lg:col-span-2 col-start-1 col-end-7">
                <div className="w-full lg:pb-11 pb-5">
                  <h1
                    className="lg:text-32 text-32 text-gtl-med text-mckblue lg:pb-6 text-left"
                    id="sr-label-001"
                  >
                    18 results found for “CoverMyMeds”
                  </h1>
                  <div
                    className="text-lg text-sofia-reg text-mckback font-normal lg:pb-px pb-3"
                    id="sr-label-002"
                  >
                    Showing results for{" "}
                    <strong className="text-mckblue">
                      <i>{noSearchResult}</i>
                    </strong>
                  </div>
                  <div
                    className="text-lg text-sofia-reg text-mcknormalgrey font-normal"
                    id="sr-label-003"
                  >
                    Showing 12 results
                  </div>
                </div>
                <div className="grid lg:grid-cols-2 gap-x-6 grid-cols-1">
                  <article
                    className="shadow-md rounded-lg lg:mb-12 mb-6"
                    id="sr-label-004"
                  >
                    <figure>
                      <img
                        src="images/blog-oldarticle1.png"
                        className="w-full"
                        alt="CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report article"
                        id="sr-img-004"
                      />
                    </figure>
                    <figcaption>
                      <div className="content lg:p-6 p-4">
                        <a
                          href=""
                          className="articleTitle lg:text-32 text-xl text-gtl-med text-mckblue pb-3 no-underline"
                          aria-labelledby="CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report"
                          id="sr-link-004"
                        >
                          CoverMyMeds Leaders Analyze 4 Key Trends from
                          Medication Access Report
                        </a>
                        <div className="pb-3 lg:pt-0 pt-3">
                          <span
                            className="text-mckblue text-sofia-reg font-normal lg:text-base text-sm pr-2 border-solid shade-grey-right-border"
                            id="sr-label-004-01"
                          >
                            {GetTime(ArticleContent?.data[0].startPublish)}
                          </span>
                          <span
                            className="text-mckblue text-sofia-reg font-normal lg:text-base text-sm px-2 border-solid shade-grey-right-border"
                            id="sr-label-004-02"
                          >
                            65 min read
                          </span>
                          {/* <span className='text-mckblue text-sofia-reg font-normal lg:text-base text-sm pl-2' id="sr-label-004-03">1.3K views</span> */}
                        </div>
                        <div className="flex">
                          <div
                            className="bg-diagnosticgreen text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2"
                            id="sr-label-004-04"
                          >
                            Diagnostic Care
                          </div>
                          <div
                            className="categoryTag text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 ml-1 border-solid shade-blue-border"
                            id="sr-label-004-05"
                          >
                            Sample Tag 1
                          </div>
                          <div
                            className="categoryTag text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 ml-1 border-solid shade-blue-border"
                            id="sr-label-004-06"
                          >
                            Sample Tag 3
                          </div>
                        </div>
                      </div>
                    </figcaption>
                  </article>
                  <article
                    className="shadow-md rounded-lg lg:mb-12 mb-6"
                    id="sr-label-005"
                  >
                    <figure>
                      <img
                        src="images/blog-oldarticle2.png"
                        className="w-full"
                        alt="CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report article"
                        id="sr-img-005"
                      />
                    </figure>
                    <figcaption>
                      <div className="content lg:p-6 p-4">
                        <a
                          href=""
                          className="articleTitle lg:text-32 text-xl text-gtl-med text-mckblue pb-3 no-underline"
                          aria-labelledby="CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report"
                          id="sr-link-005"
                        >
                          CoverMyMeds Leaders Analyze 4 Key Trends from
                          Medication Access Report
                        </a>
                        <div className="pb-3 lg:pt-0 pt-3">
                          <span
                            className="text-mckblue text-sofia-reg font-normal lg:text-base text-sm pr-2 border-solid shade-grey-right-border"
                            id="sr-label-005-01"
                          >
                            February 18, 2022
                          </span>
                          <span
                            className="text-mckblue text-sofia-reg font-normal lg:text-base text-sm px-2 border-solid shade-grey-right-border"
                            id="sr-label-005-01"
                          >
                            65 min read
                          </span>
                          <span
                            className="text-mckblue text-sofia-reg font-normal lg:text-base text-sm pl-2"
                            id="sr-label-005-01"
                          >
                            220 views
                          </span>
                        </div>
                        <div className="flex">
                          <div
                            className="bg-acuteblue text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2"
                            id="sr-label-005-04"
                          >
                            Acute Care
                          </div>
                          <div
                            className="categoryTag text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 ml-1 border-solid shade-blue-border"
                            id="sr-label-005-05"
                          >
                            Sample Tag 1
                          </div>
                          <div
                            className="categoryTag text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 ml-1 border-solid shade-blue-border"
                            id="sr-label-005-06"
                          >
                            Sample Tag 3
                          </div>
                        </div>
                      </div>
                    </figcaption>
                  </article>
                  <article
                    className="shadow-md rounded-lg lg:mb-12 mb-6"
                    id="sr-label-006"
                  >
                    <figure>
                      <img
                        src="images/blog-oldarticle1.png"
                        className="w-full"
                        alt="CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report article"
                        id="sr-img-006"
                      />
                    </figure>
                    <figcaption>
                      <div className="content lg:p-6 p-4">
                        <a
                          href=""
                          className="articleTitle lg:text-32 text-xl text-gtl-med text-mckblue pb-3 no-underline"
                          aria-labelledby="CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report"
                          id="sr-link-006"
                        >
                          CoverMyMeds Leaders Analyze 4 Key Trends from
                          Medication Access Report
                        </a>
                        <div className="pb-3 lg:pt-0 pt-3">
                          <span
                            className="text-mckblue text-sofia-reg font-normal lg:text-base text-sm pr-2 border-solid shade-grey-right-border"
                            id="sr-label-006-01"
                          >
                            February 18, 2022
                          </span>
                          <span
                            className="text-mckblue text-sofia-reg font-normal lg:text-base text-sm px-2 border-solid shade-grey-right-border"
                            id="sr-label-006-01"
                          >
                            65 min read
                          </span>
                          {/* <span className='text-mckblue text-sofia-reg font-normal lg:text-base text-sm pl-2' id="sr-label-006-03">1.3K views</span> */}
                        </div>
                        <div className="flex">
                          <div
                            className="bg-diagnosticgreen text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2"
                            id="sr-label-006-04"
                          >
                            Diagnostic Care
                          </div>
                          <div
                            className="categoryTag text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 ml-1 border-solid shade-blue-border"
                            id="sr-label-006-05"
                          >
                            Sample Tag 1
                          </div>
                          <div
                            className="categoryTag text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 ml-1 border-solid shade-blue-border"
                            id="sr-label-006-06"
                          >
                            Sample Tag 3
                          </div>
                        </div>
                      </div>
                    </figcaption>
                  </article>
                  <article
                    className="shadow-md rounded-lg lg:mb-12 mb-6"
                    id="sr-label-007"
                  >
                    <figure>
                      <img
                        src="images/blog-oldarticle2.png"
                        className="w-full"
                        alt="CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report article"
                        id="sr-img-007"
                      />
                    </figure>
                    <figcaption>
                      <div className="content lg:p-6 p-4">
                        <a
                          href=""
                          className="articleTitle lg:text-32 text-xl text-gtl-med text-mckblue pb-3 no-underline"
                          aria-labelledby="CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report"
                          id="sr-link-007"
                        >
                          CoverMyMeds Leaders Analyze 4 Key Trends from
                          Medication Access Report
                        </a>
                        <div className="pb-3 lg:pt-0 pt-3">
                          <span
                            className="text-mckblue text-sofia-reg font-normal lg:text-base text-sm pr-2 border-solid shade-grey-right-border"
                            id="sr-label-007-01"
                          >
                            February 18, 2022
                          </span>
                          <span
                            className="text-mckblue text-sofia-reg font-normal lg:text-base text-sm px-2 border-solid shade-grey-right-border"
                            id="sr-label-007-02"
                          >
                            65 min read
                          </span>
                          <span
                            className="text-mckblue text-sofia-reg font-normal lg:text-base text-sm pl-2"
                            id="sr-label-007-03"
                          >
                            220 views
                          </span>
                        </div>
                        <div className="flex">
                          <div
                            className="bg-acuteblue text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2"
                            id="sr-label-007-04"
                          >
                            Acute Care
                          </div>
                          <div
                            className="categoryTag text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 ml-1 border-solid shade-blue-border"
                            id="sr-label-007-05"
                          >
                            Sample Tag 1
                          </div>
                          <div
                            className="categoryTag text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 ml-1 border-solid shade-blue-border"
                            id="sr-label-007-06"
                          >
                            Sample Tag 3
                          </div>
                        </div>
                      </div>
                    </figcaption>
                  </article>
                  <article
                    className="shadow-md rounded-lg lg:mb-12 mb-6"
                    id="sr-label-008"
                  >
                    <figure>
                      <img
                        src="images/blog-oldarticle3.png"
                        className="w-full"
                        alt="CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report article"
                        id="sr-img-008"
                      />
                    </figure>
                    <figcaption>
                      <div className="content lg:p-6 p-4">
                        <a
                          href=""
                          className="articleTitle lg:text-32 text-xl text-gtl-med text-mckblue pb-3 no-underline"
                          aria-labelledby="CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report"
                          id="sr-link-008"
                        >
                          CoverMyMeds Leaders Analyze 4 Key Trends from
                          Medication Access Report
                        </a>
                        <div className="pb-3 lg:pt-0 pt-3">
                          <span
                            className="text-mckblue text-sofia-reg font-normal lg:text-base text-sm pr-2 border-solid shade-grey-right-border"
                            id="sr-label-008-01"
                          >
                            February 18, 2022
                          </span>
                          <span
                            className="text-mckblue text-sofia-reg font-normal lg:text-base text-sm px-2 border-solid shade-grey-right-border"
                            id="sr-label-008-02"
                          >
                            65 min read
                          </span>
                          <span
                            className="text-mckblue text-sofia-reg font-normal lg:text-base text-sm pl-2"
                            id="sr-label-008-03"
                          >
                            15.5K views
                          </span>
                        </div>
                        <div className="flex">
                          <div
                            className="bg-preventiveyellow text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2"
                            id="sr-label-008-04"
                          >
                            Preventive Care
                          </div>
                          <div
                            className="categoryTag text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 ml-1 border-solid shade-blue-border"
                            id="sr-label-008-05"
                          >
                            Sample Tag 1
                          </div>
                          <div
                            className="categoryTag text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 ml-1 border-solid shade-blue-border"
                            id="sr-label-008-06"
                          >
                            Sample Tag 3
                          </div>
                        </div>
                      </div>
                    </figcaption>
                  </article>
                  <article
                    className="shadow-md rounded-lg lg:mb-12 mb-6"
                    id="sr-label-009"
                  >
                    <figure>
                      <img
                        src="images/blog-oldarticle4.png"
                        className="w-full"
                        alt="CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report article"
                        id="sr-img-009"
                      />
                    </figure>
                    <figcaption>
                      <div className="content lg:p-6 p-4">
                        <a
                          href=""
                          className="articleTitle lg:text-32 text-xl text-gtl-med text-mckblue pb-3 no-underline"
                          aria-labelledby="CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report"
                          id="sr-link-009"
                        >
                          CoverMyMeds Leaders Analyze 4 Key Trends from
                          Medication Access Report
                        </a>
                        <div className="pb-3 lg:pt-0 pt-3">
                          <span
                            className="text-mckblue text-sofia-reg font-normal lg:text-base text-xl pr-2 border-solid shade-grey-right-border"
                            id="sr-label-009-01"
                          >
                            February 18, 2022
                          </span>
                          <span
                            className="text-mckblue text-sofia-reg font-normal lg:text-base text-xl px-2 border-solid shade-grey-right-border"
                            id="sr-label-009-01"
                          >
                            65 min read
                          </span>
                          <span
                            className="text-mckblue text-sofia-reg font-normal lg:text-base text-xl pl-2"
                            id="sr-label-009-03"
                          >
                            223K views
                          </span>
                        </div>
                        <div className="flex">
                          <div
                            className="bg-everydayblue text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2"
                            id="sr-label-009-04"
                          >
                            Everyday Care
                          </div>
                          <div
                            className="categoryTag text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 ml-1 border-solid shade-blue-border"
                            id="sr-label-009-05"
                          >
                            Sample Tag 1
                          </div>
                          <div
                            className="categoryTag text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 ml-1 border-solid shade-blue-border"
                            id="sr-label-009-06"
                          >
                            Sample Tag 3
                          </div>
                        </div>
                      </div>
                    </figcaption>
                  </article>
                  <article
                    className="shadow-md rounded-lg lg:mb-12 mb-6"
                    id="sr-label-010"
                  >
                    <figure>
                      <img
                        src="images/blog-oldarticle3.png"
                        className="w-full"
                        alt="CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report article"
                        id="sr-img-010"
                      />
                    </figure>
                    <figcaption>
                      <div className="content lg:p-6 p-4">
                        <a
                          href=""
                          className="articleTitle lg:text-32 text-xl text-gtl-med text-mckblue pb-3 no-underline"
                          aria-labelledby="CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report"
                          id="sr-link-010"
                        >
                          CoverMyMeds Leaders Analyze 4 Key Trends from
                          Medication Access Report
                        </a>
                        <div className="pb-3 lg:pt-0 pt-3">
                          <span
                            className="text-mckblue text-sofia-reg font-normal lg:text-base text-sm pr-2 border-solid shade-grey-right-border"
                            id="sr-label-010-01"
                          >
                            February 18, 2022
                          </span>
                          <span
                            className="text-mckblue text-sofia-reg font-normal lg:text-base text-sm px-2 border-solid shade-grey-right-border"
                            id="sr-label-010-02"
                          >
                            65 min read
                          </span>
                          <span
                            className="text-mckblue text-sofia-reg font-normal lg:text-base text-sm pl-2"
                            id="sr-label-010-03"
                          >
                            15.5K views
                          </span>
                        </div>
                        <div className="flex">
                          <div
                            className="bg-preventiveyellow text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2"
                            id="sr-label-010-04"
                          >
                            Preventive Care
                          </div>
                          <div
                            className="categoryTag text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 ml-1 border-solid shade-blue-border"
                            id="sr-label-010-05"
                          >
                            Sample Tag 1
                          </div>
                          <div
                            className="categoryTag text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 ml-1 border-solid shade-blue-border"
                            id="sr-label-010-06"
                          >
                            Sample Tag 3
                          </div>
                        </div>
                      </div>
                    </figcaption>
                  </article>
                  <article
                    className="shadow-md rounded-lg lg:mb-12 mb-6"
                    id="sr-label-011"
                  >
                    <figure>
                      <img
                        src="images/blog-oldarticle4.png"
                        className="w-full"
                        alt="CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report article"
                        id="sr-img-011"
                      />
                    </figure>
                    <figcaption>
                      <div className="content lg:p-6 p-4">
                        <a
                          href=""
                          className="articleTitle lg:text-32 text-xl text-gtl-med text-mckblue pb-3 no-underline"
                          aria-labelledby="CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report"
                          id="sr-link-011"
                        >
                          CoverMyMeds Leaders Analyze 4 Key Trends from
                          Medication Access Report
                        </a>
                        <div className="pb-3 lg:pt-0 pt-3">
                          <span
                            className="text-mckblue text-sofia-reg font-normal lg:text-base text-xl pr-2 border-solid shade-grey-right-border"
                            id="sr-label-011-01"
                          >
                            February 18, 2022
                          </span>
                          <span
                            className="text-mckblue text-sofia-reg font-normal lg:text-base text-xl px-2 border-solid shade-grey-right-border"
                            id="sr-label-011-02"
                          >
                            65 min read
                          </span>
                          <span
                            className="text-mckblue text-sofia-reg font-normal lg:text-base text-xl pl-2"
                            id="sr-label-011-03"
                          >
                            223K views
                          </span>
                        </div>
                        <div className="flex">
                          <div
                            className="bg-everydayblue text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2"
                            id="sr-label-011-04"
                          >
                            Everyday Care
                          </div>
                          <div
                            className="categoryTag text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 ml-1 border-solid shade-blue-border"
                            id="sr-label-011-05"
                          >
                            Sample Tag 1
                          </div>
                          <div
                            className="categoryTag text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 ml-1 border-solid shade-blue-border"
                            id="sr-label-011-06"
                          >
                            Sample Tag 3
                          </div>
                        </div>
                      </div>
                    </figcaption>
                  </article>
                </div>
              </div>
            ) : (
              <div className="lg:col-span-2 col-start-1 col-end-7">
                <div className="w-full lg:pb-11 pb-5">
                  <h1
                    className="lg:text-54 text-32 text-gtl-med text-mckblue font-medium lg:pb-12 pb-1"
                    id="srnf-label-001"
                  >
                    No Matches Found for “CoverMyMeds”
                  </h1>
                  <div
                    className="text-lg text-sofia-reg text-mckback font-normal lg:pb-px pb-1"
                    id="srnf-label-002"
                  >
                    Showing results for{" "}
                    <strong className="text-mckblue">
                      <i>CoverMyMeds</i>
                    </strong>
                  </div>
                  <div
                    className="text-base text-sofia-reg text-mckback font-normal lg:pb-px pb-3"
                    id="srnf-label-001"
                  >
                    Search for{" "}
                    <strong className="text-mckred">
                      <i>CoverMyMeds</i>
                    </strong>
                  </div>
                  <div
                    className="text-lg text-sofia-reg text-mcknormalgrey font-normal"
                    id="srnf-label-003"
                  >
                    Showing 12 results
                  </div>
                </div>
              </div>
            )}

            <div className="lg:col-span-1 col-start-1 col-end-7">
              <div className="tab text-mckblue w-full overflow-hidden lg:border-none border-none">
                <SearchComponent
                  placeholder={
                    BlogListingContent?.data[0].blogSearchPlaceholderText.value
                  }
                  handleClick={(e, searchstring) =>
                    HandelSearch(e, searchstring)
                  }
                />
              </div>
              <CatogaryComponent
                CatogaryListing={
                  BlogListingContent?.data[0].categoryFilter.expandedValue
                }
                Catogarytitle={
                  BlogListingContent?.data[0].categoryHeadingText.value
                }
                OnCatogarySelcete={(e) => console.log(e)}
              />
              <div className="category-card shade-blue-border rounded-lg overflow-hidden mb-6">
                <div
                  className="text-mckblue shade-blue-bg py-3 px-4 text-sofia-bold font-extrabold text-lg"
                  id="blog-label-009"
                >
                  {BlogListingContent?.data[0].trendingBlogHeadingText.value}
                </div>
                <ResentBlogListComponent />
              </div>
              <RelatedProducts
                OnRelatedProductClick={(e) => console.log(e)}
                title={
                  BlogListingContent?.data[0].relatedProductHeadingText.value
                }
                BlogListingContent={
                  ArticleContent?.data[0].relatedProducts.expandedValue
                }
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default BlogSearchComponent;
