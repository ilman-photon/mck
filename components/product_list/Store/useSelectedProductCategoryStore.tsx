import axiosInstance from "@/utils/axiosInstance";
import { create } from "zustand";
import { ActiveFiltersDataResponse, ProductFilter } from "../Model/ProdutAPI";

interface Controller{
    fetchProductFilterList: () => Promise<void>
    fetchRecommendedProductData: (productItemName:string,routeFiltered:string) => Promise<void>
    activeFiltersData:ActiveFiltersDataResponse | null
    productName:string
    recommendProductData:any
    productCategoryDataList:ProductFilter.ExpandedValue[] | null
    selectedFilterItems:any
    onSelectCheckBox:(selectedCategory:ProductFilter.MainCategory) => void
    onViewAll:() => void
    viewAllData:any
    onClearAll:() => void
    onDeleteEachFilterItem:(onEachSelected:ProductFilter.MainCategory) => void
    onSelectMainCategory:(mainCategory:ProductFilter.MainCategory) => void
    selectedMainCategory:any
    productQueriedData:any
    onProductQueried:(data:any,productTotalMatching:number) => void
    productSum:number
    fetchAllProductList:() => Promise<void>
    isLoading:boolean
    setLoader:(isLoading:boolean) => void
    bucket:ProductFilter.QueryBucketType | never[] | any
    setBucket:(bucket:any,subCat:any,isBusinessVerticalCategory:boolean,childrenLength:number,filterType:string,subCatViewAllFlag?:boolean,isPlp?:boolean) => void
    onDeselectRemoveBucket:(selectedCatIndex:number,selectedSubCatIndex:number) => void
    onRemoveEachOfViewAllSelected:(selected:ProductFilter.QueryBucketType) => void
}

export const useSelectedProductCategoryStore = create<Controller>((set,get) => ({
    fetchProductFilterList: async () => {
        /**
         *  @description Product Category setting - Filters data
         * */ 
        const activeFiltersData = await axiosInstance.get(
          `${process.env.API_URL}/api/episerver/v3.0/content?ContentUrl=${process.env.API_URL}/en/product-category-setting/&expand=*`
        );
        const activeFiltersDataList:ActiveFiltersDataResponse = activeFiltersData?.data?.[0];
        if(activeFiltersDataList){
            set({activeFiltersData:activeFiltersDataList})
        }
      },    
      activeFiltersData:null,
      fetchAllProductList:async () => {
        set({isLoading:true})
         await axiosInstance.get(
          `${process.env.API_URL}/api/episerver/v3.0/search/content?filter=( ContentType/any(t:t eq 'ProductDetailsPage'))`
        ).then((res) => {
          set({
            productName:res?.data?.results[0]?.productType?.value[0]?.name,
            productSum:res?.data?.totalMatching,
            productQueriedData:[
              {item: {name: res.data?.[0]?.productType?.value[0].name }},
              {data: {results: res.data.results}},
            ],
            isLoading:false
          })
        }).catch(() => set({isLoading:false}))
      },
      fetchRecommendedProductData: async (product,routeFiltered) => {
        set({isLoading:true})
        const productState = get().productName
        const tempName = product.length > 0 ? product : productState || routeFiltered
        const correctedName = tempName?.replace(/ /g, "-")
        const callApiRecommendCategoryData = await axiosInstance.get(
         `${process.env.API_URL}/api/episerver/v3.0/content?ContentUrl=${process.env.API_URL}/en/product-category/${correctedName}/&expand=*`
        )
        if(callApiRecommendCategoryData.data && callApiRecommendCategoryData.status === 200){
            const response = callApiRecommendCategoryData?.data[0]?.contentArea
            const productCategoryDataList = callApiRecommendCategoryData?.data?.[0]?.categoryFilter?.expandedValue;
            set({ recommendProductData:response,productCategoryDataList:productCategoryDataList,isLoading:false})
        }
      },
      productSum:0,
      productName:'',
      recommendProductData:null,
      productCategoryDataList:null,
      selectedFilterItems:[],
      onSelectCheckBox:(selectedCatOrSubCat) => {
        // Check if the selected category/subcategory already exists in the array
        const isSelected = get().selectedFilterItems.includes(selectedCatOrSubCat);
    
        if (isSelected) {
          // If already selected, remove it from the array
          set((state) => ({
            selectedFilterItems: state.selectedFilterItems.filter((item:ProductFilter.MainCategory) => item !== selectedCatOrSubCat),
          }));
        } else {
          // If not selected, add it to the array
          set((state) => ({
            selectedFilterItems: [...state.selectedFilterItems, selectedCatOrSubCat],
          }));
        }
      },
      onSelectMainCategory:(mainCategory) => {
        const isSelected = get().selectedMainCategory.includes(mainCategory)

        if(isSelected){
          set((state) => ({
            selectedMainCategory:state.selectedMainCategory.filter((item:ProductFilter.MainCategory) => item !== mainCategory)
          }))
        } else {
          set((state) => ({
            selectedMainCategory:[...state.selectedMainCategory,mainCategory]
          }))
        }
      } ,
      selectedMainCategory:[],
      onViewAll:() => set({selectedMainCategory:[]}),
      viewAllData:[],
      onClearAll:() => {
        set({selectedFilterItems:[],selectedMainCategory:[],bucket:[]})
      },
      onDeleteEachFilterItem: (selectedItem: ProductFilter.MainCategory | ProductFilter.QueryBucketType[]) => {
        set((state) => ({
          selectedFilterItems: state.selectedFilterItems.filter(
            (item: ProductFilter.MainCategory) => item !== selectedItem
          ),
          // bucket:state?.bucket?.map((item:ProductFilter.QueryBucketType) => item?.subCategory?.filter((data:ProductFilter.MainCategory) => data !== selectedItem))
        }));
      },
      // onDeselectRemoveBucket:(selectedItem:ProductFilter.QueryBucketType[]) => {
      //   set((state) => ({
      //     buc
      //   }))
      // },
      productQueriedData:[],
      onProductQueried:(data,productTotalMatching) => set({productQueriedData:data,productSum:productTotalMatching}),
      isLoading:false,
      setLoader:(loader) => set({isLoading:loader}),
      bucket:[],
      setBucket: (bucket, subCategories,isBusinessVerticalCategory,childrenLength,filterType,subCatViewAllFlag,isPlp) => {
        const currentBucket = get().bucket;
      
        // Check if the subcategory already exists in the bucket
        const existingCategoryIndex = currentBucket?.findIndex((category:ProductFilter.QueryBucketType) => category?.id === bucket?.id);
      
        if (existingCategoryIndex !== -1) {
          const existingSubCategories = currentBucket[existingCategoryIndex].subCategory;
          
          // Check if the clicked subcategory already exists in the bucket
          const existingSubCategoryIndex = existingSubCategories?.findIndex((subCat:ProductFilter.QueryBucketType) => subCat?.id === subCategories?.id);
      
          if (existingSubCategoryIndex !== -1) {
            // If already selected, remove it from the bucket
            if(subCatViewAllFlag){
              existingSubCategories?.splice(existingSubCategoryIndex, 1);
            }
            
            // Check if there are no more selected subcategories within the category
            if (existingSubCategories.length === 0) {
              // Remove the entire category from the bucket
              currentBucket?.splice(existingCategoryIndex, 1);
            }
          } else {
            // If not selected, add it to the bucket
            
            existingSubCategories?.push(subCategories);
            // console.log(existingSubCategories)
          }
        } else {
          // If the category doesn't exist in the bucket, add it with the clicked subcategory
          const newCategory = {
            id: bucket?.id,
            name: bucket?.name,
            isBusinessVerticalCategory: isBusinessVerticalCategory,
            subCategory: [subCategories],
            isViewAll: [subCategories]?.length === childrenLength,
            childrenLength:childrenLength,
            filterType:filterType,
            isPlp:isPlp ? isPlp : false
          };
          currentBucket.push(newCategory);
        }
        currentBucket?.forEach((category: ProductFilter.QueryBucketType) => {
          category.isViewAll = category?.subCategory?.length === category?.childrenLength;
        });
      
         // Set `isViewAll` to `true` if the number of checked subcategories is equal to the total number of subcategories
        
        // Reset the bucket to an empty array if no subcategories are selected
        if (currentBucket.length === 0) {
          set({ bucket: [] });
        } else {
          set({ bucket: [...currentBucket] });
        }
      },
      onDeselectRemoveBucket:(mainCat,subCat) => {
        const currentBucket = get().bucket;
        currentBucket[mainCat].subCategory.splice(subCat,1)

        if(currentBucket[mainCat].subCategory.length === 0){
          currentBucket.splice(mainCat, 1)
        }
        set({ bucket: [...currentBucket] });
      },
      onRemoveEachOfViewAllSelected:(selectedItem:ProductFilter.QueryBucketType) => {
        const currentBucket = get().bucket;

        // Find the index of the selected item in the bucket
        const selectedIndex = currentBucket.findIndex(
          (item: ProductFilter.QueryBucketType) => item.id === selectedItem.id
        );
      
        if (selectedIndex !== -1) {
          // Remove the selected item from the bucket
          currentBucket.splice(selectedIndex, 1);
          set({ bucket: [...currentBucket] });
        }
      }
}))