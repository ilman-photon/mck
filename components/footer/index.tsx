import Link from "next/link";
import SignUpComponent from "../signup";
import axios from "axios";
import { useState, useEffect } from "react";

export default function FooterComponent() {
  const [footerData, setFooterData] = useState<any>();
  const [footerSecondData, setFooterSecondData] = useState<any>();
  
  const [activeButton, setActiveButton] = useState<string>('home');

  const handleClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  const getData = async () => {
    const response = await axios.get(
      //`https://mcco02mstrub73kinte.dxcloud.episerver.net/api/episerver/v3.0/content/?References=268&expand=*`,{headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json', 'Accept-Language': 'en'}},
      `${process.env.API_URL}/api/episerver/v3.0/content/?ContentUrl=${process.env.API_URL}/en/application-settings/&expand=*`,
      { headers: { "Accept-Language": "en" } }
    );

    const secondBlock = response.data[0].footer.expandedValue[0].contentLink.id;
    const responseid = await axios.get(
      `${process.env.API_URL}/api/episerver/v3.0/content/?References=${secondBlock}&expand=*`,
      { headers: { "Accept-Language": "en" } }
    );
    setFooterData(response);
    setFooterSecondData(responseid);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    <footer id="footer" className="bg-mcklightyellow lg:mb-0 mb-16">
      <div className="container mx-auto mt-0 lg:py-9 lg:px-[72px] py-8 px-5">
        <div className="grid md:grid-cols-2 lg:grid-cols-2">
          <div className="lg:my-0 text-gtl-med lg:border-r lg:border-b-0 border-b-2 lg:pb-0 pb-1 lg:mb-0 mb-6">
            <ul className="mb-0 list-none lg:py-0 px-0">
              <li className="lg:my-0 grid">
                {footerData?.data[0]?.footer?.expandedValue[0]?.menuItemsColumn1?.expandedValue.map(
                  (link: any) => (
                    <Link
                    className="text-sofia-reg text-lg text-mcknormalgrey lg:my-2 mb-3 w-fit"
                    rel="stylesheet"
                    id={link?.contentLink?.id}
                    key={link?.contentLink?.id}
                    href={link?.menuUrl?.value}
                    >
                      {link?.menuTitle?.value}
                    </Link>
                  )
                  )}
              </li>
              <li className="lg:my-2 flex">
                {footerSecondData?.data[0]?.socialMediaLinkBlock?.expandedValue.map(
                  (sociallink: any) => (
                    <Link
                    className="text-sofia-reg text-lg text-mcknormalgrey w-6 h-6 mr-3"
                    rel="stylesheet"
                    href={sociallink?.socialMediaUrl?.value}
                    key={sociallink?.contentLink?.id}
                    id={sociallink?.contentLink?.id}
                    aria-label = {sociallink?.socialMediaUrl?.value}
                    >
                      <img
                        src={
                          sociallink?.socialMediaImage?.expandedValue?.thumbnail
                          ?.value?.url
                        }
                        className="mx-auto"
                        alt={
                          sociallink?.socialMediaImage?.expandedValue?.altText
                          ?.value
                        }
                        ></img>
                    </Link>
                  )
                  )}
              </li>
            </ul>
          </div>

          <div className="lg:py-0 lg:pl-6 pl-0">
            <ul className="mb-0 list-none">
              <li className="lg:my-0 grid">
                {footerSecondData?.data[0]?.menuItemsColumn2?.expandedValue.map(
                  (slink: any) => (
                    <Link
                    className="text-sofia-reg text-lg text-mcknormalgrey lg:py-2 mb-3 w-fit"
                    rel="stylesheet"
                    href={slink?.menuUrl?.value}
                    key={slink?.contentLink?.id}
                    id={slink?.contentLink?.id}
                    >
                      {slink?.menuTitle?.value}
                    </Link>
                  )
                  )}
              </li>
            </ul>
          </div>

          {/* <div id="footer-sign-up" className="px-0 py-0 pl-0 lg:pl-6">
            <div className="px-3 py-3 lg:px-3 bg-white rounded-lg border-mcknormalgrey border-solid border mt-5 lg:mt-0">
            <h5 className="m-0 pb-3 px-0 text-2xl text-gtl-med text-mckblue">
            {footerSecondData?.data[0]?.subscription?.expandedValue[0]?.name}
            </h5>
            <div className="px-0 text-lg text-sofia-reg text-mcknormalgrey" 
            dangerouslySetInnerHTML={{
              __html: footerSecondData?.data[0]?.subscription?.expandedValue[0]?.description.value,
            }}
            >
            </div>
            <div className="py-3 px-0 text-lg text-sofia-reg text-mcknormalgrey">
            {footerSecondData?.data[0]?.subscription?.expandedValue[0]?.subTitle?.value}
            </div>
            <SignUpComponent />
            </div>
          </div> */}
        </div>
      </div>
    </footer>
    
        
    <div className="fixed bottom-0 left-0 z-50 w-full border-t-0.5 border-mckblue lg:hidden xl:hidden">
      <ul className="grid h-full max-w-lg grid-cols-4 mx-auto bg-beige-50">
        <li>
          <button
            type="button"
            className={`inline-flex flex-col items-center justify-center pt-4 pb-3 w-full h-full border-t-4 border-transparent hover:border-t-4 hover:border-mckblue hover ${
              activeButton === 'home' ? 'border-t-4 border-mckblue bg-white' : ''
            }`}
            onClick={() => handleClick('home')}
          > 
            <div className="w-5 h-5 mb-2">
              <svg
                className="mx-auto"
                width="21"
                height="18"
                viewBox="0 0 21 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.75 3.19L15.75 7.69V15.5H13.75V9.5H7.75V15.5H5.75V7.69L10.75 3.19ZM10.75 0.5L0.75 9.5H3.75V17.5H9.75V11.5H11.75V17.5H17.75V9.5H20.75L10.75 0.5Z"
                  fill="#001A71"
                />
              </svg>
            </div>
            <span className={`text-xs text-mckblue ${
            activeButton === 'home' ? 'text-sofia-bold font-extrabold' : 'text-sofia-reg font-normal'
            }`}
            onClick={() => handleClick('home')}
            >Home</span>
          </button>
        </li>
        <li>
          <button
            type="button"
            className={`inline-flex flex-col items-center justify-center pt-4 pb-3 w-full h-full border-t-4 border-transparent hover:border-t-4 hover:border-mckblue hover ${
              activeButton === 'products' ? 'border-t-4 border-mckblue bg-white' : ''
            }`}
            onClick={() => handleClick('products')}
          >
            <div className="w-5 h-5 mb-2">
              <svg
                className="mx-auto"
                width="15"
                height="18"
                viewBox="0 0 15 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.75 12H3.25V9H5.75V6.5H8.75V9H11.25V12H8.75V14.5H5.75V12ZM14.25 5V16C14.25 17.1 13.35 18 12.25 18H2.25C1.15 18 0.25 17.1 0.25 16V5C0.25 3.9 1.15 3 2.25 3H12.25C13.35 3 14.25 3.9 14.25 5ZM12.25 5H2.25V16H12.25V5ZM13.25 0H1.25V2H13.25V0Z"
                  fill="#001A71"
                />
              </svg>
            </div>
            <span className={`text-xs text-mckblue ${
            activeButton === 'products' ? 'text-sofia-bold font-extrabold' : 'text-sofia-reg font-normal'
            }`}
            onClick={() => handleClick('products')}
            >Products</span>
          </button>
        </li>
        <li>
            <button
              type="button"
              className={`inline-flex flex-col items-center justify-center pt-4 pb-3 w-full h-full border-t-4 border-transparent hover:border-t-4 hover:border-mckblue hover ${
                activeButton === 'Health Needs' ? 'border-t-4 border-mckblue bg-white' : ''
              }`}
              onClick={() => handleClick('Health Needs')}
            >
              <div className="w-5 h-5 mb-2">
                <svg 
                  className="mx-auto" 
                  width="21" 
                  height="20" 
                  viewBox="0 0 21 20" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.75 4H14.75V2C14.75 0.9 13.85 0 12.75 0H8.75C7.65 0 6.75 0.9 6.75 2V4H2.75C1.65 4 0.75 4.9 0.75 6V18C0.75 19.1 1.65 20 2.75 20H18.75C19.85 20 20.75 19.1 20.75 18V6C20.75 4.9 19.85 4 18.75 4ZM8.75 2H12.75V4H8.75V2ZM18.75 18H2.75V6H18.75V18Z" fill="#001A71"/>
                  <path d="M11.75 8H9.75V11H6.75V13H9.75V16H11.75V13H14.75V11H11.75V8Z" fill="#001A71"/>
                </svg>
              </div>
              <span className={`text-xs text-mckblue ${
              activeButton === 'Health Needs' ? 'text-sofia-bold font-extrabold' : 'text-sofia-reg font-normal'
              }`}
              onClick={() => handleClick('Health Needs')}
              >Health Needs</span>
            </button>
          </li>

            
          <li>
            <button
              type="button"
              className={`inline-flex flex-col items-center justify-center pt-4 pb-3 w-full h-full border-t-4 border-transparent hover:border-t-4 hover:border-mckblue hover ${
                activeButton === 'Where to Buy' ? 'border-t-4 border-mckblue bg-white' : ''
              }`}
              onClick={() => handleClick('Where to Buy')}
            >
                <div className="w-5 h-5 mb-2">
                  <svg 
                    className="mx-auto" 
                    width="19" 
                    height="18" 
                    viewBox="0 0 19 18" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14.25 8V0H4.25V4H0.25V18H8.25V14H10.25V18H18.25V8H14.25ZM4.25 16H2.25V14H4.25V16ZM4.25 12H2.25V10H4.25V12ZM4.25 8H2.25V6H4.25V8ZM8.25 12H6.25V10H8.25V12ZM8.25 8H6.25V6H8.25V8ZM8.25 4H6.25V2H8.25V4ZM12.25 12H10.25V10H12.25V12ZM12.25 8H10.25V6H12.25V8ZM12.25 4H10.25V2H12.25V4ZM16.25 16H14.25V14H16.25V16ZM16.25 12H14.25V10H16.25V12Z" fill="#001A71"/>
                  </svg>
                </div>
                <span className={`text-xs text-mckblue ${
                activeButton === 'Where to Buy' ? 'text-sofia-bold font-extrabold' : 'text-sofia-reg font-normal'
                }`}
                onClick={() => handleClick('Where to Buy')}
                >Where to Buy</span>
            </button>
          </li>
      </ul>
    </div>

    </>
  );
}
