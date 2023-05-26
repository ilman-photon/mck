import Link from "next/link";
import Image from "next/image";
import SignUpComponent from "../signup";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function FooterComponent() {
  const router = useRouter();
  const [footerData, setFooterData] = useState<any>();
  const [footerSecondData, setFooterSecondData] = useState<any>();
  const [footerMobileNav, setFooterMobileNav] = useState<any>();

  const [activeButton, setActiveButton] = useState<string>("home");

  const handleClick = (buttonName: string, url: string) => {
    setActiveButton(buttonName);
    router.push({
      pathname: url,
    });
  };

  const getData = async () => {
    const response = await axios.get(
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
    setFooterMobileNav(
      response?.data[0]?.mobileMenuNavigation?.expandedValue[0]
        ?.contentBlockArea?.expandedValue
    );
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
                        aria-label={sociallink?.socialMediaUrl?.value}
                      >
                        <img
                          src={
                            sociallink?.socialMediaImage?.expandedValue
                              ?.thumbnail?.value?.url
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
          </div>
        </div>
      </footer>
      <div className="fixed bottom-0 left-0 z-50 w-full border-t-0.5 border-mckblue lg:hidden xl:hidden">
        <ul className="grid h-full max-w-lg grid-cols-4 mx-auto bg-beige-50">
          {footerMobileNav &&
            footerMobileNav.map((item: any) => {
              return (
                <li>
                  <button
                    type="button"
                    className={`inline-flex flex-col items-center justify-center pt-4 pb-3 w-full h-full border-t-4 border-transparent hover:border-t-4 hover:border-mckblue hover ${
                      activeButton === item?.menuItemName?.value
                        ? "border-t-4 border-mckblue bg-white"
                        : ""
                    }`}
                    onClick={() =>
                      handleClick(
                        item?.menuItemName?.value,
                        item?.menuItemUrl?.value
                      )
                    }
                  >
                    <div className="w-5 h-5 mb-2">
                      <Image
                        src={item?.menuIcon?.expandedValue?.url}
                        width="21"
                        height="18"
                        alt=""
                      />
                    </div>
                    <span
                      className={`text-xs text-mckblue ${
                        activeButton === item?.menuItemName?.value
                          ? "text-sofia-bold font-extrabold"
                          : "text-sofia-reg font-normal"
                      }`}
                    >
                      {item?.menuItemName?.value}
                    </span>
                  </button>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
}
