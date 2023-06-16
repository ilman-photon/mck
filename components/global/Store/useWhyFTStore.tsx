import axiosInstance from "@/utils/axiosInstance"
import { create } from "zustand"

interface Controller {
    getData:() => Promise<void>
    data:any
    isLoading:boolean
    setTimeoutLoader:() => void
}

export const useWhyFTStore = create<Controller>((set,get) => ({
    getData:async () => {
        const callApi =  axiosInstance.get(
            `${process.env.API_URL}/api/episerver/v3.0/content?ContentUrl=${process.env.API_URL}/en/generic/why-ft/&expand=*`
        );
        if((await callApi).data && (await callApi).status === 200){
            set({data:(await callApi).data?.[0],isLoading:false})
        }else{
            set({isLoading:false})
        }
    },
    data:null,
    isLoading:true,
    setTimeoutLoader:() => set({isLoading:false})
}))