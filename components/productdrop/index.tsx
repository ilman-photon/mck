import { useState } from "react";
import Link from "next/link";
import { useHeaderStore } from "../navbar/Store/useNavBarStore";

function ProductDropComponent({ subMenuData }: Props) {
  const [active, setActive] = useState(null);

  /**
   * @description onClickEachCategory is a func to set the state selected to the selectedCategory
   */
  const selectCategory = useHeaderStore(state => state.onClickEachCategory)

  /**
   * @description selectedCategory is a state that received value from onClickEachCategory where you can use it anywhere else
   * 
   * @example `const selectedCategory = useHeaderStore(state => state.selectedCategory)`
   * 
   */
 
   
  function updateUrl(path: String, type: string) {
    let f = "?filter=";
    let splitPath = path !== null ? path?.split(f) : "";
    if (type === "1") {
      return splitPath?.[1];
    } else {
      return splitPath?.[0];
    }
  }

  return (
    <div className="w-full lg:flex xl:flex lg:mx-auto xl:mx-auto absolute bg-mcklightyellow z-10 left-0 pt-6 pb-12">
      <ul className="lg:w-11/12 xl:w-11/12 lg:container lg:flex lg:mx-auto xl:flex xl:mx-auto lg:justify-center">
        {subMenuData?.map(({response} :any) => {
          return (
            <li className="lg:w-1/5 xl:w-1/5" key={Math.random()}>
              <div className="lg:border-l lg:border-black xl:border-l xl:border-black">
                <Link
                  onClick={() =>{ 
                      selectCategory(response?.menuItemName?.value)
                  }}
                  href={{
                    // pathname: updateUrl(item?.data[0].menuItemUrl?.value, "0"),
                    pathname:updateUrl(response?.menuItemUrl?.value,'0'),
                    // query: {
                    //   filter: updateUrl(item?.data[0]?.menuItemUrl?.value, "1"),
                    // },
                    query:{
                      filter:updateUrl(response?.menuItemUrl?.value, "1"),
                    }
                  }}
                  className="text-gtl-med text-2xl blue-txt text-left pl-2 empty:hidden categoryname font-medium"
                >
                  {/* {item?.data[0]?.menuItemName?.value} */}
                  {response?.menuItemName?.value}
                </Link>
                <ul
                  className={`hidden submenu megamenu-submenu ${
                    // item?.data[0].subMenuContentBlockArea?.value === null
                    response?.subMenuContentBlockArea?.value === null
                      ? "hidden"
                      : "group-hover:block"
                  }`}
                >
                  {response?.subMenuContentBlockArea?.expandedValue?.map(
                    (ele: any) => {
                      return (
                        <li
                          className="blue-txt text-left text-sofia-reg pt-9 pb-9 pl-2 hover:bg-beige-50"
                          key={Math.random()}
                          onClick={() => {
                            /**
                             * @description refer to this as well because Health Needs doesn't have a `parent`
                             */
                            if(response?.menuItemName?.value){
                              selectCategory(response?.menuItemName?.value)
                            }else{
                              selectCategory(updateUrl(ele?.menuItemUrl?.value,'1'))
                            }
                          }}
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
                  onClick={() => setActive(response)}
                  className={`${
                    response?.subMenuContentBlockArea?.value == null
                      ? "lg:hidden xl:hidden"
                      : "icon-arrow lg:hidden xl:hidden"
                  } ${active == response ? "open" : ""}`}
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
  subMenuData: any
};

export default ProductDropComponent;
