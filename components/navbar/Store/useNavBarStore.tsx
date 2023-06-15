import { callAPI } from "@/utils/Fetchers";
import { create } from "zustand";
import { NavBarData } from "../Model/NavBarModel";

interface ControllerNavBar {
  getData: () => void;
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
}

export const useHeaderStore = create<ControllerNavBar>((set, get) => ({
  getData: () => {
    const callApiHeader = callAPI<any, any>(
      `${process.env.API_URL}/api/episerver/v3.0/content/?ContentUrl=${process.env.API_URL}/en/application-settings/&expand=*`,
      null,
      {
        method: "GET",
      }
    ).then(async (res) => {
      set({
        logoSrc1: res?.data?.[0]?.logoImage?.expandedValue?.url,
        logoSrc2: res?.data?.[0]?.secondLogoImage?.expandedValue?.url,
      });
      set({
        headerData:
          res?.data?.[0]?.headerMegaMenu?.expandedValue[0]?.contentBlockArea
            ?.expandedValue,
      });
      set({ categoryMapping: res?.data?.[0]?.categoryMapping?.expandedValue });

      const { headerData } = get();
      if (headerData) {
        const dataSet = headerData;
        const listRequest: any = dataSet
          ?.map((item: any) => item?.subMenuContentBlockArea?.value)
          ?.flat()
          ?.filter((megaMenu: any) => megaMenu !== null)
          ?.map(async (megaMenuFiltered: any) => {
            return callAPI<any, any>(
              `${process.env.API_URL}/api/episerver/v3.0/content/?References=${megaMenuFiltered?.contentLink?.id}&expand=*`,
              null,
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
}));
