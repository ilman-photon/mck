import { useEffect, useState } from "react";
import SignUpComponent from "../signup";
import axios from "axios";

function ProductDropComponent({ subMenuData }: Props) {
  const [subMenu, setSubMenu] = useState<any>();

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
        `https://mcco02mstrub73kinte.dxcloud.episerver.net/api/episerver/v3.0/content/?References=${getIds?.join(
          ","
        )}&expand=*`,
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

  return (
    <div className="w-full flex mx-auto absolute bg-mcklightyellow z-10 left-0 pt-3">
      <ul className="w-11/12 flex mx-auto ">
        {subMenu?.map((item: any) => {
          return (
            <li className="w-1/5" key={Math.random()}>
              <div className="border-l border-black">
                <a
                  href={item?.menuItemUrl?.value}
                  className="text-gtl-med text-2xl blue-txt text-left pl-2"
                >
                  {item?.menuItemName?.value}
                </a>
                <ul>
                  {item?.subMenuContentBlockArea?.expandedValue?.map(
                    (ele: any) => {
                      return (
                        <li
                          className="blue-txt text-left text-sofia-reg py-2 pl-2 hover:bg-beige-50"
                          key={Math.random()}
                        >
                          <a
                            href={ele?.menuItemUrl?.value}
                            className="cursor-pointer"
                          >
                            {ele?.menuItemName?.value}
                          </a>
                        </li>
                      );
                    }
                  )}
                </ul>
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
