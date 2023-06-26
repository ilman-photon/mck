import { create } from "zustand";
import { NavBarData } from "../Model/NavBarModel";
import axiosInstance from "@/utils/axiosInstance";

interface FilterMegaMenu{
  isClicked:boolean
  clickedMenuName:string
}

interface ControllerNavBar {
  getData: (checkButtonName: any) => void;
  headerData: any;
  categoryMapping?: any;
  subHeaderData: NavBarData[] | null;
  onClickEachCategory: (parentCat: any) => void;
  selectedCategory: string;
  logoSrc1: string;
  logoSrc2: string;
  setLogoSrc?: () => void;
  onMouseEnter?: () => void;
  currentusedLogo: string;
  footerData:any,
  footerSecondData: any
  footerMobileNav: any
  activeButton: string
  setActiveButton: (buttonName: string) => void
  selectedFilter:FilterMegaMenu | null
  onSelectedSetFilter:(state:FilterMegaMenu|null) => void
}


export const useHeaderStore = create<ControllerNavBar>((set, get) => ({
  getData: (checkButtonName) => {
    const callApiHeader = axiosInstance.get(
      `${process.env.API_URL}/api/episerver/v3.0/content/?ContentUrl=${process.env.API_URL}/en/application-settings/&expand=*`,
      {
        method: "GET",
      }
    ).then(async (res) => {
      const secondBlock = res?.data?.[0]?.footer?.expandedValue?.[0]?.contentLink?.id;
      const responseid = await axiosInstance.get(
        `${process.env.API_URL}/api/episerver/v3.0/content/?References=${secondBlock}&expand=*`);
      const footerMobileNav =
        res?.data[0]?.mobileMenuNavigation?.expandedValue[0]
          ?.contentBlockArea?.expandedValue;
      let buttonActive: string = "Home";
      footerMobileNav.map((item: any) => {
        if (item?.menuItemUrl?.value == checkButtonName) {
          buttonActive = item?.menuItemName?.value;
        }
      });
      set({
        headerData:
          res?.data?.[0]?.headerMegaMenu?.expandedValue[0]?.contentBlockArea
            ?.expandedValue,
        footerData: res,
        footerSecondData:responseid,
        footerMobileNav,
        activeButton:buttonActive ,
        logoSrc1: res?.data?.[0]?.logoImage?.expandedValue?.url,
        logoSrc2: res?.data?.[0]?.secondLogoImage?.expandedValue?.url,
        categoryMapping: res?.data?.[0]?.categoryMapping?.expandedValue
      });
      const headerData = get().headerData
      if (headerData) {
        const dataSet = headerData;
        const listRequest: any = dataSet
          ?.map((item: any) => item?.subMenuContentBlockArea?.value)
          ?.flat()
          ?.filter((megaMenu: any) => megaMenu !== null)
          ?.map(async (megaMenuFiltered: any) => {
            return axiosInstance.get(
              `${process.env.API_URL}/api/episerver/v3.0/content/?References=${megaMenuFiltered?.contentLink?.id}&expand=*`,
              {
                method: "GET",
              }
            ).then((res) => {
              megaMenuFiltered.response = res.data[0];
            });
          });
        await Promise.all(listRequest);
      }
      set({ headerData: headerData });
    });
  },
  headerData: null,
  subHeaderData: null,
  onClickEachCategory: (parentCat) => {
    set({ selectedCategory: parentCat });
  },
  selectedCategory: "",
  setLogoSrc: () => {
    const { logoSrc1 } = get();
    if (logoSrc1) {
      set({
        currentusedLogo: logoSrc1,
      });
    }
  },
  logoSrc1: "",
  logoSrc2: "",
  currentusedLogo: "",
  onMouseEnter: () => {
    const { logoSrc2 } = get();
    set({
      currentusedLogo: logoSrc2,
    });
  },
  footerData:null,
  footerSecondData:null,
  footerMobileNav: null,
  activeButton: 'Home',
  setActiveButton: (buttonName) => set({ activeButton: buttonName }),
  selectedFilter:null,
  onSelectedSetFilter:(state) => set({selectedFilter:state}),
}));
