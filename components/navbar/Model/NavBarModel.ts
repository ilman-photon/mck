
interface NavBarData {
    name:string
    menuItemName:{
        value:string,
        propertyDataType:string
     },
    menuItemUrl : {        
        value:string
        propertyDataType:string
    },
    subMenuContentBlockArea:SubMenuContentBlockArea
}

interface ExistingLanguagesModel {
    link:null | string,
    displayName:string,
    name:string
}

interface SubMenuContentBlockArea {
    expandedValue:ExpandedValueData[]
}


interface NavBarHeaderAndSubModel {
    title:string,
    subTitle:string,
    childTitle:string[]
}

interface ExpandedValueData {
    contentLink:{
        id:number,
        workId:number,
        guidValue:string,
        providerName:null | string,
        url:null | string,
        expanded:any
     },
     name:string,
     language:{
        link:null,
        displayName:string,
        name:string
     },
     existingLanguages:ExistingLanguagesModel[],
     masterLanguage:ExistingLanguagesModel,
     /**
      * @description
      * [
        "Block",
         "MenuNavigationItemsBlock"
        ]
      */
     contentType:string,
     parentLink:{
        id:number,
        workId:number,
        guidValue:string,
        providerName:null | string,
        url:string,
        expanded:string
     },
     routeSegment:null,
     url:null,
     changed:string,
     created:string,
     startPublish:string,
     stopPublish:null,
     saved:string,
     status:string,
     category:{
        value:any[],
        propertyDataType:string
     },
     menuItemName:{
        value:string,
        propertyDataType:string
     },
     menuItemUrl:{
        value:string,
        propertyDataType:string
     },
     subMenuContentBlockArea:{
        value:null | unknown[],
        propertyDataType:string
     },
     menuIcon:{
        value:null | unknown[],
        propertyDataType:string
     }
}

interface ValueKeyOfSubMenuContentBlockArea {
    displayOption:string,
    tag:null | string,
    contentLink:{
        id:number,
        workId:number,
        guidValue:string,
        providerName:null | string,
        url:null | string,
        expanded:null | string
        response:ExpandedValueData[]
    }
}

// interface ContentLinkResponse {
//     response:ExpandedValueData[]
// }
