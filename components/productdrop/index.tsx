import { useState } from "react";
import Link from "next/link";
import { useHeaderStore } from "../navbar/Store/useNavBarStore";
import { useSelectedProductCategoryStore } from "../product_list/Store/useSelectedProductCategoryStore";
import { ProductFilter } from "../product_list/Model/ProdutAPI";

function ProductDropComponent({ subMenuData ,handleClick}: Props) {
  const [active, setActive] = useState(null);

  /**
   * @description onClickEachCategory is a func to set the state selected to the selectedCategory
   */
  const selectCategory = useHeaderStore((state) => state.onClickEachCategory);
  const onSelectedSetFilter = useHeaderStore((state) => state.onSelectedSetFilter);
  const selectedFilter = useHeaderStore((state) => state.selectedFilter)
  const setBucket = useSelectedProductCategoryStore(state => state.setBucket)
  const ini = useSelectedProductCategoryStore(state => state.selectedFilterItems)
  const onSelectCheckBox = useSelectedProductCategoryStore(state => state.onSelectCheckBox)
  // console.log(ini)
  /**
   * @description selectedCategory is a state that received value from onClickEachCategory where you can use it anywhere else
   *
   * @example `const selectedCategory = useHeaderStore(state => state.selectedCategory)`
   *
   */
  // console.log(subMenuData)

  function updateUrl(path: string, type: string) {
    let f = "?filter=";
    let splitPath = path !== null ? path?.split(f) : "";
    if (type === "1") {
      if(splitPath?.[1]?.includes('&')){
        const replacement = ""
        let result:string = String(splitPath?.[1])?.replace(/&\s*/g,replacement)
        return result?.replace(/\s+/g," ")?.replace(',','')
      }
      return splitPath?.[1]
    } else {
      return splitPath?.[0];
    }
  }

  return (
    <div className="w-full lg:flex xl:flex lg:mx-auto xl:mx-auto absolute bg-mcklightyellow z-10 left-0 pt-6 pb-12">
      <ul className="lg:w-11/12 xl:w-11/12 lg:container lg:flex lg:mx-auto xl:flex xl:mx-auto lg:justify-center">
        {subMenuData?.map(({ response }: any, index:any) => {
          return (
            <li className="lg:w-1/5 xl:w-1/5" key={`submenukey${index}`}>
              <div className="lg:border-l lg:border-black xl:border-l xl:border-black">
                <Link
                id={`header-mainmenu-${index+1}`}
                  onClick={() => {
                    const subCategoryData = response?.subMenuContentBlockArea?.expandedValue?.map((subData:any,index:number) => {
                        subData.categoryItem?.value?.map((data:ProductFilter.MainCategory) => {
                          onSelectCheckBox(data)
                          setBucket(response?.categoryItem?.value?.[0],data,true,[subData?.categoryItem?.value]?.length,'')
                        })
                    })
                    // setBucket()

                    selectCategory(response?.menuItemName?.value);
                    onSelectedSetFilter({
                      isClicked:true,
                      clickedMenuName:response?.menuItemName?.value
                    })
                  }}
                  href={{
                    // pathname: updateUrl(item?.data[0].menuItemUrl?.value, "0"),
                    pathname: updateUrl(response?.menuItemUrl?.value, "0"),
                    // query: {
                    //   filter: updateUrl(item?.data[0]?.menuItemUrl?.value, "1"),
                    // },
                    query: {
                      filter: updateUrl(response?.menuItemUrl?.value, "1"),
                    },
                  }}
                  className="text-gtl-med text-2xl text-mckblue text-left pl-2 empty:hidden categoryname font-medium"
                >
                  {/* {item?.data[0]?.menuItemName?.value} */}
                  {response?.menuItemName?.value}
                </Link>
                <ul
                  className={` submenu megamenu-submenu ${
                    // item?.data[0].subMenuContentBlockArea?.value === null
                    response?.subMenuContentBlockArea?.value === null
                      ? "hidden"
                      : "group-active:block hover-active:block"
                    // : "block"
                  }`}
                >
                  {response?.subMenuContentBlockArea?.expandedValue?.map(
                    (ele: any,index:any) => {
                      // console.log(ele)
                      // console.log(ele?.menuItemUrl?.value)
                      return (
                        <li
                        id={`header-submenu-${index+1}`}
                          className="text-mckblue text-left text-sofia-reg pt-9 smalldekstop:pt-0.5 smalldekstop:pb-0.5 pt pb-9 pl-2 hover:bg-beige-50"
                          key={`sbmenu${index}`}
                          onClick={() => {
                            // console.log(ele)
                            /**
                             * @description refer to this as well because Health Needs doesn't have a `parent`
                             */
                            handleClick(false)
                            if (response?.menuItemName?.value) {
                              selectCategory(response?.menuItemName?.value);
                            } else {
                              selectCategory(
                                updateUrl(ele?.menuItemUrl?.value, "1")
                              );
                            }
                            if(selectedFilter === null){
                              onSelectedSetFilter({
                                isClicked:true,
                                clickedMenuName:updateUrl(ele?.menuItemUrl?.value,"1")
                              })
                            } 
                          }}
                        >
                          <Link
                          onClick={() => {
                            if(selectedFilter === null){
                              onSelectedSetFilter({
                                isClicked:true,
                                clickedMenuName:updateUrl(ele?.menuItemUrl?.value,"1")
                              })
                            } 
                          }}
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
                  // className={`${
                  //   response?.subMenuContentBlockArea?.value == null
                  //     ? "lg:hidden xl:hidden"
                  //     : "icon-arrow lg:hidden xl:hidden"
                  // } ${active == response ? "open" : ""}`}
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
  handleClick: (value: any) => void;
};

export default ProductDropComponent;
