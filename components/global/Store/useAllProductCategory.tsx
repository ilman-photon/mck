import axiosInstance from "@/utils/axiosInstance";
import { create } from "zustand";

interface Controller {
    getProductCategorySettings:() => Promise<void>
    healthNeedData:any
    activeFilterData:any
    productCategoryData:any
    createTempFilterArr:(results:any) => void
    setSelectedProduct:(product:any) => void
    selectedFilterItems:any
    carouselData:any
    allProductCategoryList:any
    productCategory:any
    recommendProduct:any
    categoryProduct:any
    selectedProduct:any
    productSum:any
    isLoading:boolean
    setIsLoadingTrue:() => void
    setIsLoadingFalse:() => void
    setProductSum:(sum:any) => void
    setSelectedFilterItems:(item:any) => void
    activeFilters:any
    setActiveFilters:(filter:any) => void 
    getPlpCategory:() => Promise<void>
    categoryPlp:any
}

export const useAllProductCategory = create<Controller>((set,get) => ({
    getProductCategorySettings:async() => {
        const healthNeedsCategories = await axiosInstance.get(
            `${process.env.API_URL}/api/episerver/v3.0/content?ContentUrl=${process.env.API_URL}/en/product-category/health-needs/&expand=*`
          );
        const healthNeedsCategoriesList =
          healthNeedsCategories?.data[0].contentArea?.expandedValue?.filter(
            (categoryList: any) => categoryList.name === "Health Need Highlights"
        );
        const healthNeedsCategoriesListData =
        healthNeedsCategoriesList.length > 0
          ? healthNeedsCategoriesList[0]?.healthNeedItem?.expandedValue
          : [];
        set({healthNeedData:healthNeedsCategoriesListData})

        const activeFiltersData = await axiosInstance(
            `${process.env.API_URL}/api/episerver/v3.0/content?ContentUrl=${process.env.API_URL}/en/product-category-setting/&expand=*`
          );
          const activeFiltersDataList = activeFiltersData?.data[0];
        set({activeFilterData:activeFiltersDataList});
        
        const {createTempFilterArr} = get()
        const productCategoryData = await axiosInstance(
        `${process.env.API_URL}/api/episerver/v3.0/content?ContentUrl=${process.env.API_URL}/en/product-category/landing-page/&expand=*`
        );

        const productCategoryDataList =
        productCategoryData?.data[0]?.categoryFilter?.expandedValue;
        set({productCategoryData:productCategoryDataList, carouselData:productCategoryData?.data[0]?.contentArea?.expandedValue, allProductCategoryList:productCategoryDataList})
        createTempFilterArr(productCategoryDataList);

        const productLandingPage = await axiosInstance(
            `${process.env.API_URL}/api/episerver/v3.0/content?ContentUrl=${process.env.API_URL}/en/product-category/landing-page/&expand=*`
          );

        const productCategoryList =
        productLandingPage?.data?.[0]?.contentArea?.expandedValue?.[1]?.contentBlockArea?.expandedValue;
        let productName: any = [];
        let tempObj = productLandingPage?.data[0].contentArea?.expandedValue[1];
        set({productCategory:productCategoryList,recommendProduct:productLandingPage?.data[0].contentArea,categoryProduct:[tempObj]})
        productCategoryList?.map((item: any) => {
            productName.push(item.productCategoryName?.value);
        });
        if(productName){
            productName?.map((item: any) => {
                axiosInstance
                  .get(
                    `${process.env.API_URL}/api/episerver/v3.0/search/content?filter=(ContentType/any(t:t eq 'ProductDetailsPage'))&expand=*&orderby=changed desc`
                  )
                  .then((res: any) => {
                    set({productSum:res.data.totalMatching})
                    let tempResults: any = [];
                    res.data.results.map((item: any) => {
                      let name = item?.productCategory?.value[0]?.name;
                      if (tempResults[name]) {
                        let tempArray = tempResults[name];
                        tempArray.push(item);
                        tempResults[name] = tempArray;
                      } else {
                        tempResults[name] = [item];
                      }
                    });
                    const transformedArray = Object.entries(tempResults).map(
                      ([key, value]) => {
                        return {
                          item: { name: key },
                          data: { results: value },
                        };
                      }
                    );
                    // setSelectedProduct(transformedArray);
                    set({selectedProduct:transformedArray})
                  })
                  .catch((e: Error) => console.log(e))
                  .finally(() => {
                    // setIsLoading(false);
                    set({isLoading:false})
                  });
              });

        }
    },
    healthNeedData:null,
    activeFilterData:null,
    productCategoryData:null,
    carouselData:null,
    allProductCategoryList:null,
    productCategory:null,
    recommendProduct:null,
    categoryProduct:null,
    selectedProduct:null,
    productSum:null,
    isLoading:true,
    createTempFilterArr:(results: any) => {
        let tempArr: any = [];
        results?.map((leftfiltermaindata: any) => {
          tempArr[leftfiltermaindata?.mainCategory?.value[0]?.id] = [];
          tempArr[leftfiltermaindata?.mainCategory?.value[0]?.id]["items"] = [];
          tempArr[leftfiltermaindata?.mainCategory?.value[0]?.id][
            leftfiltermaindata?.subCategory?.value[0]?.id
          ] = [];
          tempArr[leftfiltermaindata?.mainCategory?.value[0]?.id]["categoryName"] =
            leftfiltermaindata?.mainCategory?.value[0]?.name;
          tempArr[leftfiltermaindata?.mainCategory?.value[0]?.id][
            "isBusinessVerticalCategory"
          ] = leftfiltermaindata?.isBusinessVerticalCategory?.value;
          tempArr[leftfiltermaindata?.mainCategory?.value[0]?.id]["productType"] =
            leftfiltermaindata?.isBusinessVerticalCategory?.value
              ? "productType"
              : leftfiltermaindata?.name;
          tempArr[leftfiltermaindata?.mainCategory?.value[0]?.id][
            "isCategoryChecked"
          ] = false;
          leftfiltermaindata?.subCategory?.value.map((subItem: any) => {
            tempArr[leftfiltermaindata?.mainCategory?.value[0]?.id][subItem?.id] = [];
            tempArr[leftfiltermaindata?.mainCategory?.value[0]?.id][subItem?.id][
              "checked"
            ] = false;
            tempArr[leftfiltermaindata?.mainCategory?.value[0]?.id][subItem?.id][
              "name"
            ] = subItem.name;
          });
        });
        // setSelectedFilterItems(tempArr);
        set({selectedFilterItems:tempArr})
      },
      selectedFilterItems:[],
      activeFilters:[],
      setActiveFilters:(filter) => set({activeFilters:filter}),
      setSelectedProduct:(product) => set({selectedProduct:product}),
      setIsLoadingTrue:() => set({isLoading:true}),
      setIsLoadingFalse:() => set({isLoading:false}),
      setProductSum:(sum) => set({productSum:sum}),
      setSelectedFilterItems:(item) => set({selectedFilterItems:item}),
      getPlpCategory:async() => {
        const productLandingPage = await axiosInstance(
          `${process.env.API_URL}/api/episerver/v3.0/content?ContentUrl=${process.env.API_URL}/en/product-category/landing-page/&expand=*`
        ); 
        let tempObj = productLandingPage?.data[0].contentArea?.expandedValue[1];
          set({
            categoryPlp:[tempObj]
          })
      },
      categoryPlp:null
}))