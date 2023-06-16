import axiosInstance from "@/utils/axiosInstance";
import axios, { AxiosError } from "axios";
import { useState, useEffect } from "react";
import DOMPurify from "isomorphic-dompurify";

const ItemExpandeble = ({ bdata }: any) => {
  const [selectedValue, setSelectedValue] = useState<boolean>(false);
  const handleOnClick = (e: string) => {
    if (e == "Enter" || e === "click") {
      setSelectedValue(!selectedValue);
    }
  };

  return (
    <div
      className="tab text-mckblue w-full overflow-hidden rounded-lg lg:mb-6 mb-4 "
      id={"faq_label_003" + bdata?.contentLink?.id}
      key={bdata?.contentLink?.id}
    >
      <input
        type="checkbox"
        id={bdata?.contentLink?.id}
        checked={selectedValue}
      />
      <label
        role="button"
        tabIndex={0}
        onClick={(e) => handleOnClick("click")}
        onKeyUp={(e) => handleOnClick(e.key)}
        className="tab-label shade-blue-bg py-3 px-4 flex justify-between cursor-pointer text-sofia-bold font-extrabold lg:text-lg text-base"
        htmlFor={bdata?.contentLink?.id}
      >
        <span>{bdata?.question?.value}</span>
      </label>
      <div
        className={` tab-content text-sofia-reg font-normal text-base text-mcknormalgrey`}
      >
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(bdata?.answer?.value),
          }}
          id="faq_label_004"
        ></div>
      </div>
    </div>
  );
};

function FaqComponent() {
  const [faqData, SetFaqData] = useState<any>();
  const [ApiRespond, setApiRespond] = useState<any>();
  const [ctaBgClr, setCtaBgClr] = useState<any>();

  function fetchFAQDetails() {
    return axiosInstance.get(
      `${process.env.API_URL}/api/episerver/v3.0/content?ContentUrl=${process.env.API_URL}/en/generic/faq/&expand=*`
    );
  }

  useEffect(() => {
    fetchFAQDetails()
      .then((res) => {
        let ctaBGClr =
          res.data[0]?.contentArea.expandedValue[0]
            ?.differentQuestionCTAColorCode?.value ?? "#001a71";
        setCtaBgClr(ctaBGClr);
        SetFaqData(res.data[0]?.contentArea.expandedValue[0]);
      })
      .catch((e: Error | AxiosError) => console.log(e));
  }, []);

  useEffect(() => {
    document.documentElement.lang = "en";
  }, []);

  useEffect(() => {
    document.title = ApiRespond?.data[0]?.title.value || "Faq";
  }, [ApiRespond]);

  return (
    <>
      {faqData && (
        <div
          role="main"
          className="faq-container container flex pt-6 lg:pt-72 flex-col mx-auto px-0  mb-6 lg:mb-18 desktop:px-6 smalldekstop:px-6 desktop:pt-[50px] smalldekstop:pt-[50px] desktop:mb-[50px] smalldekstop:mb-[50px]"
        >
          <h1
            className="text-mckblue text-54 heading pb-3 text-center"
            id="faq_label_001"
          >
            {DOMPurify.sanitize(faqData?.name)}
          </h1>
          <div
            className="text-center text-mckblue text-gtl-med pb-6 lg:text-27 text-xl"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(faqData?.description?.value),
            }}
            id="faq_label_002"
          ></div>
          {faqData?.blockArea?.expandedValue?.map((bdata: any) => {
            return (
              <ItemExpandeble key={bdata?.contentLink?.id} bdata={bdata} />
            );
          })}

          <div className="shade-blue-border w-full lg:mt-6 mt-4 rounded-lg overflow-hidden">
            <h3
              className="shade-blue-bg text-mckblue text-sofia-bold font-extrabold lg:text-lg text-base py-3 px-4"
              id="faq_label_005"
            >
              {DOMPurify.sanitize(faqData?.differentQuestionHeading?.value)}
            </h3>
            <div className="shade-blue-border-top lg:p-6 p-4">
              <p
                className="lg:pb-4 pb-2 lg:text-27 text-base text-mckblue text-gtl-med font-medium"
                id="faq_label_006"
              >
                {DOMPurify.sanitize(faqData?.differentQuestionDetails?.value)}
              </p>
              <a
                style={{
                  background: ctaBgClr,
                }}
                href={DOMPurify.sanitize(
                  faqData?.differentQuestionCTALink?.value
                )}
                className="text-center inline-block min-w-[121px] rounded-lg blue-bg text-white p-3 text-sofia-bold font-extrabold lg:text-base text-sm uppercase"
                id="faq_btn_007"
              >
                {DOMPurify.sanitize(faqData?.differentQuestionCTAText?.value)}
              </a>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 lg:gap-4 mt-6">
            <div className="rounded-lg shade-blue-border overflow-hidden faq-box">
              <h3
                className="shade-blue-bg text-mckblue text-sofia-bold font-extrabold lg:text-lg text-base py-3 px-4"
                id="faq_label_008"
              >
                {DOMPurify.sanitize(faqData?.whatYouCanDoHeading?.value)}
              </h3>
              <div
                className="lg:p-5 p-4 text-mckblue shade-blue-border-top lg:text-lg text-base text-sofia-reg"
                id="faq_label_009"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    faqData?.whatYouCanDoDeatils?.value
                  ),
                }}
              ></div>
            </div>
            <div className="mt-6 lg:mt-0">
              <div className="rounded-lg shade-blue-border overflow-hidden faq-box">
                <h3
                  className="shade-blue-bg text-mckblue text-sofia-bold font-extrabold lg:text-lg text-base py-3 px-4"
                  id="faq_label_010"
                >
                  {DOMPurify.sanitize(
                    faqData?.speaktoAPharmacistHeading?.value
                  )}
                </h3>
                <div
                  className="lg:p-5 p-4 text-mckblue shade-blue-border-top lg:text-lg text-base text-sofia-reg"
                  id="faq_label_011"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                      faqData?.speaktoAPharmacistDetail?.value
                    ),
                  }}
                ></div>
              </div>
              <div
                className={`rounded-lg shade-blue-border overflow-hidden mt-6 faq-box hidden`}
              >
                <h3
                  className="shade-blue-bg text-mckblue text-sofia-bold font-extrabold lg:text-lg text-base py-3 px-4"
                  id="faq_label_012"
                >
                  {DOMPurify.sanitize(faqData?.sendFeedBackHeading?.value)}
                </h3>
                <div
                  className="lg:pt-5 lg:pl-5 lg:pr-5 pt-4 pr-4 pl-4 pb-0 text-mckblue shade-blue-border-top lg:text-lg text-base text-sofia-reg"
                  id="faq_label_013"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                      faqData?.sendFeedBackDetails?.value
                    ),
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default FaqComponent;
