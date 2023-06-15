// function idRequests() {
//     return sectionData[0]?.contentBlockArea?.value?.map((item: any) => {
//       return axiosInstance.get(
//         `${process.env.API_URL}/api/episerver/v3.0/content/${item?.contentLink?.id}`);
//     });
//   }

import axiosInstance from "@/utils/axiosInstance"
import axios from "axios"
import { create } from "zustand"

//   useEffect(() => {
//     axios
//       .all(idRequests())
//       .then((responses) => {
//         setLoading(false);
//         setResponse(responses);
//       })
//       .catch((error) => {
//         console.log("error", error);
//         setLoading(true);
//       });
//   }, []);

interface Controller {
    getData:(data:any) => Promise<void>
    data:any
    isLoading:boolean
}

export const useCategoryStore = create<Controller>((set,get) => ({
    getData:async(data) => {
        const idRequests = () => {
            return data?.map((item:any) => {
                return axiosInstance.get(
                `${process.env.API_URL}/api/episerver/v3.0/content/${item?.contentLink?.id}`
                )
            })
        }
        await axios.all(idRequests())
        .then((responses) => {
            set({data:responses,isLoading:false})
        }) 
        .catch(() => {
            set({isLoading:false})
        })
    },
    data:null,
    isLoading:true
})) 