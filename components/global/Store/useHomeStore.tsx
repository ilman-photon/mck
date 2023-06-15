import axiosInstance from "@/utils/axiosInstance";
import { create } from "zustand";

interface Controller {
    getData:() => Promise<void>
    data:any
    isLoading:boolean
}

export const useHomeStore = create<Controller>((set,get) => ({
    getData:async() => {
        set({isLoading:true})
        const callApi = axiosInstance.get(`${process.env.API_URL}/api/episerver/v3.0/content/?ContentUrl=${process.env.API_URL}/en/home/&expand=*&Select=blockArea`,{
            headers: {
                "Accept-Language": "en"
              },
            method:'GET'
        })
        set({data:(await callApi).data?.[0]?.blockArea,isLoading:false})
    },
    data: null,
    isLoading:true,
}))
