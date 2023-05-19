import { useEffect, useState } from "react";
import SignUpComponent from "../signup";
import axios from "axios";
import Link from "next/link";

function ProductDropComponent({ subMenuData }: Props) {
  const [subMenu, setSubMenu] = useState<any>();
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (subMenuData) {
      getSubMenuData();
    }
  }, []);

  const getIds = subMenuData?.map((item: any) => {
    return item?.contentLink?.id;
  });

  function getSubMenuData() {
    axios
      .get(
        `${
          process.env.API_URL
        }/api/episerver/v3.0/content/?References=${getIds?.join(",")}&expand=*`,
        {
          headers: {
            "Accept-Language": "en",
          },
        }
      )
      .then((res) => {
        setSubMenu(res?.data);
      });
  }

  function updateUrl(path: String, type: string) {
    let f = "?filter=";
    let splitPath = path !== null ? path?.split(f) : "";
    if (type === "1") {
      return splitPath[1];
    } else {
      return splitPath[0];
    }
  }

  return (
    <div className="w-full lg:flex xl:flex lg:mx-auto xl:mx-auto absolute bg-mcklightyellow z-10 left-0 pt-3">
      <ul className="lg:w-11/12 xl:w-11/12 lg:flex lg:mx-auto xl:flex xl:mx-auto ">
        {subMenu?.map((item: any) => {
          return (
            <li className="lg:w-1/5 xl:w-1/5" key={Math.random()}>
              <div className="lg:border-l lg:border-black xl:border-l xl:border-black">
                <Link
                  href={{
                    pathname: updateUrl(item?.menuItemUrl?.value, "0"),
                    query: {
                      filter: updateUrl(item?.menuItemUrl?.value, "1"),
                    },
                  }}
                  className="text-gtl-med text-2xl blue-txt text-left pl-2"
                >
                  {item?.menuItemName?.value}
                </Link>
                <ul
                  className={`hidden submenu ${
                    item?.subMenuContentBlockArea?.value === null
                      ? "hidden"
                      : "group-hover:block"
                  }`}
                >
                  {item?.subMenuContentBlockArea?.expandedValue?.map(
                    (ele: any) => {
                      return (
                        <li
                          className="blue-txt text-left text-sofia-reg py-2 pl-2 hover:bg-beige-50"
                          key={Math.random()}
                        >
                          <Link
                            href={{
                              pathname: updateUrl(ele?.menuItemUrl?.value, "0"),
                              query: {
                                filter: updateUrl(ele?.menuItemUrl?.value, "1"),
                              },
                            }}
                            className="cursor-pointer"
                          >
                            {ele?.menuItemName?.value}
                          </Link>
                        </li>
                      );
                    }
                  )}
                </ul>
                <span
                  onClick={() => setActive(item)}
                  className={`${
                    item?.subMenuContentBlockArea?.value == null
                      ? "lg:hidden xl:hidden"
                      : "icon-arrow lg:hidden xl:hidden"
                  } ${active == item ? "open" : ""}`}
                >
                  {" "}
                </span>
              </div>
            </li>
          );
        })}
        {/* <li className="w-1/5 signup-form">
                    <div className="px-0 py-0 whitespace-normal mb-5">
                        <div className="px-3 py-3 lg:px-3 bg-white rounded-lg border-mcknormalgrey border-solid border">
                            <h5 className="m-0 pb-6 px-0 text-2xl text-sofia-reg text-mckblue">Email Signup & Rewards</h5>
                            <div className="px-0 text-lg text-mckblue text-sofia-reg">
                                Want to receive tips, personalized content and exclusive offers
                                from Foster & Thrive?
                            </div>
                            <div className="text-mckblue py-6 px-0 text-lg text-sofia-reg">Sign up today!</div>
                            <SignUpComponent />
                        </div>
                    </div>
                </li> */}
      </ul>
    </div>
  );
}

type Props = {
  subMenuData: any;
};

export default ProductDropComponent;
