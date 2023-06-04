export const GetTime = (time: any) => {
    const date = new Date(time);

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    const formattedDate = `${month} ${day},${year}`;
    if (time) {
        return formattedDate
    } else {
        return ''
    }

}
export const handleTagBackgroudColor = (index: number, MixedStyle: any) => {
    const array = MixedStyle.split(',');
    return array[index] === undefined ? array : array[index]
}
export const handlecategoryColorCode = (id: number, data: any) => {
    if (data === undefined) {
        return '#FFFFF'
    }
    else {
        let obj = data.find((o: any) => o.categoryType.value[0].id === id);
        return obj.categoryColorCode.value
    }
}

export function deleteMultipleElements(arr: any[], elementsToDelete: any[]) {
    arr = arr.reduce((acc, value, index) =>
        elementsToDelete?.indexOf(value) == -1 ? [...acc ,value] : acc, [])
    return arr;
}


export const selectedProductType = (productCategoryData: any, mainCategoryId: any) => {
    const a = productCategoryData?.find((a: any) => a.mainCategory?.value[0].id === mainCategoryId);
    const v = a?.subCategory?.value ?? [];
    const c = v?.length ?? ""
    const name = a?.name
    return [v, c, name]
}
export const selectedProductType_ = (productCategoryData: any, mainCategoryId: any) => {
    const a = productCategoryData?.find((a: any) => a.mainCategory?.value[0].id === mainCategoryId);
    const v = a?.subCategory?.value ?? [];
    return v
}

const allSelectedCheck = (subCategoryValues: any, selectedtItems: any) => subCategoryValues?.every((val: any)=> selectedtItems.includes(val.name))
const selectedItems = (selectedFilterItems: any, mainCategoryId: any) => selectedFilterItems[mainCategoryId]?.items ?? "";
let storeMainCateIds: any[] = [];
let displayFilterList: any[] = [];
const coolStore: any[] = []

// export function handleCateFilter(productCategoryData: any, selectedFilterItems:any, mainCatId: any, activeFilter: any){
//     console.log("&&&& ->", coolStore)
//     if(storeMainCateIds.includes(mainCatId)){
//         const [v, c, name] = selectedProductType(productCategoryData, mainCatId)
//         const asc = allSelectedCheck(v, selectedFilterItems);
//         if(asc){
//             // if(!(activeFilter?.includes(name))){}
//             if(!displayFilterList.includes(name)){
//                 console.log("*****8888")
//                 displayFilterList.push(name);
//                 const d = deleteMultipleElements(activeFilter, selectedItems(selectedFilterItems, mainCatId));
//                 displayFilterList.push(d);
//                 return displayFilterList;
//             }
//         }else{
//             customAdd(mainCatId, activeFilter)
//             return [...displayFilterList, activeFilter, "b", mainCatId]
//         }
//     }else{
//         storeMainCateIds.push(mainCatId)
//         customAdd(mainCatId, activeFilter)
//         return [...displayFilterList, activeFilter, "c", mainCatId]
//     }


// }

export function customAdd(mainCatId: any, filter: any, productCategoryData: any = [], viewAllCheck=false){
    const [a, v, g] = selectedProductType(productCategoryData, mainCatId);
    const findIndex = coolStore?.findIndex((a:any) => a.mainCatId === mainCatId)
    if(viewAllCheck && (findIndex === -1) ){
        const subCateIds = a?.map((data: any) => data?.name)
        coolStore.push({mainCatId, subCateIds})
        console.log("coolstore -view all-->", coolStore)
        return coolStore;
    }else if(viewAllCheck && findIndex > -1){
        coolStore[findIndex] =  {...coolStore[findIndex], subCateIds: a?.map((data: any) => data?.name)}
        return coolStore;
    }else{
        if((coolStore?.findIndex((a:any) => a.mainCatId === mainCatId) === -1)){
            coolStore.push({mainCatId, subCateIds: [filter]})
            return coolStore;
        }else{
            const idx = coolStore?.map((c: any) => c.mainCatId).indexOf(mainCatId);
            coolStore[idx].subCateIds = [...coolStore[idx]?.subCateIds, filter]
            return coolStore
        }
    }
}

export function customUniqueElementArray(arr: any) {
    const a = arr && arr.filter(Boolean).filter((item: any) => !Array.isArray(item))
    return Array.from(new Set(a));
} 

export const extractMainCategoryName = (productCategoryData: any) => productCategoryData?.map((cate: any) => cate?.name) 
export const extractMainCategoryId = (productCategoryData: any, mainCatName: any) => {
    let requiredId = ''
    productCategoryData?.forEach((ele: any) => {
        if(ele?.name === mainCatName){
            requiredId = ele?.mainCategory?.value[0]?.id
        }
    });
    return requiredId;
}  