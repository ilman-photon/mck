export interface ActiveFiltersDataResponse {
    contentLink:ContentLink
    name:string
    language:{
        link:string
        displayName:string
        name:string
    }
    existingLanguages:ExistingLangueages[]
    masterLanguage:null
    contentType:string[]
    parentLink:ContentLink
    routeSegment:string
    url:string
    changed:string
    created:string
    startPublish:string
    stopPublish:string
    saved:string
    status:string
    noMatchFoundText:ValueAndPropertyDataType
    showingResults:ValueAndPropertyDataType
    searchForText:ValueAndPropertyDataType
    showingResultsText:ValueAndPropertyDataType
    activeFiltersText:ValueAndPropertyDataType
    activeFiltersImage:{
        expandedValue:ExpandedValue
    }
    clearAllText:ValueAndPropertyDataType
    clearAllImage:{
        expandedValue:ExpandedValue
    }
    viewAllText:ValueAndPropertyDataType
    showResultsText:ValueAndPropertyDataType
}


interface ContentLink {
    id:number
    workId:number
    guidValue:string
    providerName:null,
    url:string
    expanded:null
}

interface ExistingLangueages {
        link:string
        displayName:string
        name:string
}

interface ValueAndPropertyDataType {
    value:string
    propertyDataType:string
}

interface ExpandedValue {
    contentLink:ContentLink
    name:string
    language:ExistingLangueages
    existingLanguages:ExistingLangueages[]
    masterLanguage:null
    contentType:string[]
    parentLink:ContentLink
    routeSegment:string
    url:string
    changed:string
    created:string
    startPublish:string
    stopPublish:string
    saved:string
    status:string
    thumbnail:{
        value:{
           id:string
           url:string
        },
        propertyDataType:string
     },
     mimeType:ValueAndPropertyDataType
     altText:ValueAndPropertyDataType
     value:ContentLink
     propertyDataType:string
}

export declare module ProductFilter {

    interface Response{
        expandedValue:ExpandedValue[]
    }

    interface RootModel {
        contentType:string[] //"ProductCategoryFilterBlock"
        categoryFilter:{
            expandedValue:ExpandedValue[]
        }
    }

    //Product Category Filter Block
    interface ExpandedValue {
        contentLink:ContentLink
        contentType:string[]
        status:string //Published or Unpublished
        categoryImage:{
            expandedValue:{
                contentLink:ContentLink
                url:string //"https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/filter_preventative-care.png"
                altText:{
                    value:string
                }
                thumbnail:{
                    id: string
                    url: string
                }
            }
        }
        mainCategory:{
            value:MainCategory[]
        }
        subCategory:{
            value:MainCategory[]
        }
        isBusinessVerticalCategory:{
            value:boolean
        }
    }

    interface MainCategory {
        id:number
        name:string
        description:string
    }

    interface QueryBucketType {
        id:number
        isBusinessVerticalCategory:boolean
        name:string
        subCategory:MainCategory[]
        isViewAll:boolean
        childrenLength:number
    }
}
