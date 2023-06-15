import { fetchBlogSetting } from "@/components/blog/BlogAPI";
import { create } from "zustand";

interface Controller {
    getBlogSetting:() => Promise<void>
    blogSettings:any
    isLoading:boolean
    setIsLoading:(isLoading:boolean) => void
}

export const useBlogStore = create<Controller>((set) => ({
    getBlogSetting:async() => {
        set({isLoading:true})
        await fetchBlogSetting()
        .then((res) => {
            set({blogSettings:res, isLoading:false })
        })
        .catch(() => {
            set({isLoading:false})
        })
    },
    blogSettings:null,
    isLoading:true,
    setIsLoading:(loaderStart) => set({isLoading:loaderStart}) 
}))