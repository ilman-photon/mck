import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ImageComponent } from "../global/ImageComponent";
import { LinkComponent } from "../global/LinkComponent";
import { useFooterStore } from "./Store/useFooterStore";
import DOMPurify from 'isomorphic-dompurify';

export default function FooterComponent() {
  const router = useRouter();

  const checkEnableButton = () => {
    return router.pathname;
  };

  const handleClick = (buttonName: string, url: string) => {
    setActiveButton(buttonName);
    router.push({
      pathname: url,
    });
  };

  const footerData = useFooterStore(state => state.footerData)
  const footerSecondData = useFooterStore(state => state.footerSecondData)
  const footerMobileNav = useFooterStore(state => state.footerMobileNav)
  const activeButton = useFooterStore(state => state.activeButton)
  const setActiveButton = useFooterStore(state => state.setActiveButton)
  const getData = useFooterStore(state => state.getData)

  useEffect(() => {
    if(footerData === null){
      getData(checkEnableButton())
    }
  },[footerData])


  return (
    <>
      <footer
        id="footer"
        role="contentinfo"
        className="bg-mcklightyellow lg:mb-0 mb-16"
      >
        <div className="container mx-auto mt-0 lg:py-9 lg:px-[72px] py-8 px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="lg:my-0 text-gtl-med lg:border-r lg:border-b-0 border-b-2 lg:pb-0 pb-6 lg:mb-0 mb-6 border-mcknormalgrey">
              <ul className="mb-0 list-none lg:py-0 px-0">
                <li className="lg:my-0 grid">
                  {footerData?.data[0]?.footer?.expandedValue[0]?.menuItemsColumn1?.expandedValue.map(
                    (link: any) => (
                      <Link
                        className="text-sofia-reg text-lg text-mcknormalgrey lg:my-2 mb-3 w-fit"
                        rel="stylesheet"
                        id={link?.contentLink?.id}
                        key={link?.contentLink?.id}
                        href={link?.menuUrl?.value ? link?.menuUrl?.value : ""}
                      >
                        {link?.menuTitle?.value}
                      </Link>
                    )
                  )}
                </li>
                <li className="lg:my-2 flex">
                {footerSecondData?.data[0]?.socialMediaLinkBlock?.expandedValue.map(
                    (sociallink: any, index: number) => (
                      <>
                        {sociallink?.socialMediaUrl?.value && <LinkComponent
                          className="text-sofia-reg text-lg text-mcknormalgrey w-6 h-6 mr-3"
                          rel="stylesheet"
                          href={sociallink?.socialMediaUrl?.value}
                          key={sociallink?.contentLink?.id}
                          id={`sl-00${index}`}
                          aria-label={sociallink?.socialMediaUrl?.value}
                        >
                          <ImageComponent
                            id={sociallink?.socialMediaImage?.expandedValue?.altText
                              ?.value}
                            src={
                              DOMPurify.sanitize(sociallink?.socialMediaImage?.expandedValue
                                ?.thumbnail?.value?.url)
                            }
                            className="mx-auto"
                            alt={
                              sociallink?.socialMediaImage?.expandedValue?.altText
                                ?.value
                            }
                          />
                        </LinkComponent>}
                      </>
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
                        href={slink?.menuUrl && slink?.menuUrl?.value}
                        key={slink?.contentLink?.id}
                        id={slink?.contentLink?.id}
                      >
                        {DOMPurify.sanitize(slink?.menuTitle?.value)}
                      </Link>
                    )
                  )}
                  
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="fixed bottom-0 left-0 z-50 w-full border-t-0.5 border-mckblue bg-beige50 lg:hidden xl:hidden">
        <ul className="grid h-full grid-cols-4 mx-auto bg-beige-50">
          {footerMobileNav &&
            footerMobileNav.map((item: any) => {
              return (
                <li key={item?.contentLink?.guidValue}>
                  <button
                    type="button"
                    className={`inline-flex flex-col items-center justify-center pt-4 pb-3 w-full h-full border-t-4 border-transparent hover:border-t-4 hover:border-mckblue hover ${activeButton === item?.menuItemName?.value
                      ? "bg-white"
                      : ""
                      }`}
                    style={{
                      borderTop:
                        activeButton === item?.menuItemName?.value
                          ? "solid 4px #001a71"
                          : "",
                    }}
                    onClick={() =>
                      handleClick(
                        item?.menuItemName?.value,
                        item?.menuItemUrl?.value
                      )
                    }
                  >
                    <div className="w-5 h-5 mb-2">
                      <ImageComponent
                        id={item?.contentLink?.guidValue}
                        src={DOMPurify.sanitize(item?.menuIcon?.expandedValue?.url)}
                        width="21px"
                        height="18px"
                        alt={DOMPurify.sanitize(item?.menuIcon?.expandedValue?.name)}
                      />
                    </div>
                    <span
                      className={`text-xs text-mckblue ${activeButton === item?.menuItemName?.value
                        ? "text-sofia-bold font-extrabold"
                        : "text-sofia-reg font-normal"
                        }`}
                    >
                      {DOMPurify.sanitize(item?.menuItemName?.value)}
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
