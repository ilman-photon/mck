import axiosInstance from "@/utils/axiosInstance";
import { create } from "zustand";

interface Controller {
    getData: (checkButtonName: any) => Promise<void>
    footerData: any
    footerSecondData: any
    footerMobileNav: any
    activeButton: string
    setActiveButton: (buttonName: string) => void
}

export const useFooterStore = create<Controller>((set, get) => ({
    footerData: null,
    footerSecondData: null,
    footerMobileNav: null,
    activeButton: 'Home',
    getData: async (checkButtonName) => {
        const response = await axiosInstance.get(
            `${process.env.API_URL}/api/episerver/v3.0/content/?ContentUrl=${process.env.API_URL}/en/application-settings/&expand=*`);

        const secondBlock = response.data[0].footer.expandedValue[0].contentLink.id;
        const responseid = await axiosInstance.get(
            `${process.env.API_URL}/api/episerver/v3.0/content/?References=${secondBlock}&expand=*`);

        const footerMobileNav =
            response?.data[0]?.mobileMenuNavigation?.expandedValue[0]
                ?.contentBlockArea?.expandedValue;

        let buttonActive: string = "Home";

        footerMobileNav.map((item: any) => {
            if (item?.menuItemUrl?.value == checkButtonName) {
                buttonActive = item?.menuItemName?.value;
            }
        });
        set({ footerData: response,footerSecondData:responseid,footerMobileNav,activeButton:buttonActive })
    },
    setActiveButton: (buttonName) => set({ activeButton: buttonName })
}))