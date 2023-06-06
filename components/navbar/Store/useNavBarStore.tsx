import { callAPI } from "@/utils/Fetchers"
import { create } from "zustand"



interface ControllerNavBar {
    getData:() => void
    headerData:any
    subHeaderData:NavBarData[] | null
}
  
export const useHeaderStore = create<ControllerNavBar>((set,get) => ({
    getData:() => {
      const callApiHeader = callAPI<any, any>(`${process.env.API_URL}/api/episerver/v3.0/content/?ContentUrl=${process.env.API_URL}/en/application-settings/&expand=*`,null,{
        method:'GET'
      }).then(async res => {
        set({headerData:res?.data[0]?.headerMegaMenu?.expandedValue[0]?.contentBlockArea?.expandedValue})
  
        const {headerData} = get()
        if(headerData){
          const dataSet = headerData
          const listRequest:any = dataSet?.map((item:any) => item?.subMenuContentBlockArea?.value)
          ?.flat()
          ?.filter((megaMenu:any) => megaMenu !== null)
          ?.map(async (megaMenuFiltered:any) => {
            return  callAPI<any,any>(`${process.env.API_URL}/api/episerver/v3.0/content/?References=${megaMenuFiltered.contentLink.id}&expand=*`,null,{
              method:'GET',
            }).then((res)=>{
              megaMenuFiltered.response = res.data[0]
            })
          })
          await Promise.all(listRequest)
        }
        set({headerData:headerData})
      })
    },
    headerData:null,
    subHeaderData:null,
}))