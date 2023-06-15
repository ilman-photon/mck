import axiosInstance from "@/utils/axiosInstance";
import { create } from "zustand";

interface Controller {
    getData:() => Promise<void>
    response:any
    isLoading:boolean
    setIsLoading:(loader:boolean) => void
}

export const useHealthCareProfessionalStore = create<Controller>((set) => ({
    getData:async() => {
        try {
            const callApi = axiosInstance.get(`${process.env.API_URL}/api/episerver/v3.0/content?ContentUrl=${process.env.API_URL}/en/generic/health-care-professionals/&expand=*`,{
                headers: { "Accept-Language": "en" },
            })
            if (Object.keys((await callApi).data).length > 0) {
              set({response:(await callApi).data?.[0]});
            } else {
              set({response:null})
            }
          } catch (error) {
            return
          } finally {
            set({isLoading:false})
          }
    },
    response:null,
    isLoading:true,
    setIsLoading:(loading) => set({isLoading:loading})
}))