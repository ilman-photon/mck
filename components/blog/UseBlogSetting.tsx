import { callAPI } from "@/utils/Fetchers"
import { create } from "zustand"

interface ControllerNavBar {
    getData:() => void
    BlogSettingMaping?:any
}
  
export const useBlogSettingStore = create<ControllerNavBar>((set) => ({
    getData:() => {
      const callApiHeader = callAPI<any, any>(`${process.env.API_URL}/api/episerver/v3.0/content/?ContentUrl=${process.env.API_URL}/en/application-settings/&expand=*`,null,{
        method:'GET'
      }).then(async res => {
        set({BlogSettingMaping:res})
      })
    },
}))