import Link from "next/link";
import SignUpComponent from "../signup";
import axios from "axios";
import { useState, useEffect } from "react";

export default function FooterComponent() {
  const [footerData, setFooterData] = useState<any>();
  const [footerSecondData, setFooterSecondData] = useState<any>();

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
    <footer id="footer" className="container mx-auto bg-mcklightyellow">
      <div className="mt-0 lg:py-9 lg:px-[72px] py-8 px-5">
        <div className="grid md:grid-cols-2 lg:grid-cols-2">
          <div className="lg:my-0 text-gtl-med lg:border-r lg:border-b-0 border-b-2 lg:pb-0 pb-1 lg:mb-0 mb-6">
            <ul className="mb-0 list-none lg:py-0 px-0">
              <li className="lg:my-0 grid">
                {footerData?.data[0]?.footer?.expandedValue[0]?.menuItemsColumn1?.expandedValue.map(
                  (link: any) => (
                    <Link
                      className="text-sofia-reg text-lg text-mcknormalgrey lg:my-2 mb-3"
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
                      className="text-sofia-reg text-lg text-mcknormalgrey"
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
                      className="text-sofia-reg text-lg text-mcknormalgrey lg:py-2 mb-3"
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
  );
}
