import { render, screen, act } from '@testing-library/react';
import WhereToBuy from "@/components/where_to_buy";
import axios from "axios";
jest.mock("axios");

describe('WhereToBuyComponent - Display values from CMS', () => {
  beforeEach(() => {
    axios.get.mockResolvedValue( {data: whereToBuyData} );
  });

  test('Render where to buy compontent', async () => {
    await act(async () => {
      render(<WhereToBuy />);
    });
    expect(screen.getByText('MEDMETRICS PHARMACY')).toBeInTheDocument();
  });
});

const whereToBuyData = [
    {
        "Address": "1075 W Queen Creek Rd Ste 2",
        "City": "CHANDLER",
        "Distance": "7.3512383314109",
        "Lat": 33.2331,
        "Lon": -111.864,
        "Phone": "480-883-3800",
        "SearchType": "gps",
        "ShowAmazonHubIcon": 0,
        "ShowCOVIDIcon": 0,
        "ShowCOVIDVaccineIcon": 0,
        "ShowHHSPrEPIcon": 1,
        "ShowHmdpBasic": 1,
        "ShowHmdpPremium": 0,
        "ShowVaccineIcon": 1,
        "ShowWebsite": 0,
        "State": "AZ",
        "StoreId": 7360,
        "StoreName": "MEDMETRICS PHARMACY",
        "StoreUrl": "2010130",
        "Zip": "85248"
    },
    {
        "Address": "1940 W CHANDLER BLVD #3",
        "City": "CHANDLER",
        "Distance": "9.62798604149379",
        "Lat": 33.3216,
        "Lon": -111.874,
        "Phone": "480-534-7537",
        "SearchType": "gps",
        "ShowAmazonHubIcon": 0,
        "ShowCOVIDIcon": 0,
        "ShowCOVIDVaccineIcon": 0,
        "ShowHHSPrEPIcon": 0,
        "ShowHmdpBasic": 1,
        "ShowHmdpPremium": 0,
        "ShowVaccineIcon": 1,
        "ShowWebsite": 0,
        "State": "AZ",
        "StoreId": 22265,
        "StoreName": "Hand in Hand Pharmacy",
        "StoreUrl": "",
        "Zip": "85224"
    },
    {
        "Address": "215 S POWER RD #251",
        "City": "MESA",
        "Distance": "11.9885998482404",
        "Lat": 33.4113576,
        "Lon": -111.681956,
        "Phone": "480-256-2522",
        "SearchType": "gps",
        "ShowAmazonHubIcon": 0,
        "ShowCOVIDIcon": 0,
        "ShowCOVIDVaccineIcon": 0,
        "ShowHHSPrEPIcon": 0,
        "ShowHmdpBasic": 1,
        "ShowHmdpPremium": 0,
        "ShowVaccineIcon": 1,
        "ShowWebsite": 0,
        "State": "AZ",
        "StoreId": 24206,
        "StoreName": "Doctor Pharmacy Rx",
        "StoreUrl": "",
        "Zip": "85206"
    },
    {
        "Address": "3511 E Indian School Road",
        "City": "Phoenix",
        "Distance": "22.5530943562941",
        "Lat": 33.4965,
        "Lon": -111.9907,
        "Phone": "602-899-6960",
        "SearchType": "gps",
        "ShowAmazonHubIcon": 0,
        "ShowCOVIDIcon": 0,
        "ShowCOVIDVaccineIcon": 0,
        "ShowHHSPrEPIcon": 1,
        "ShowHmdpBasic": 1,
        "ShowHmdpPremium": 0,
        "ShowVaccineIcon": 0,
        "ShowWebsite": 0,
        "State": "AZ",
        "StoreId": 8898,
        "StoreName": "Metier Pharmacy LLC",
        "StoreUrl": "",
        "Zip": "85018"
    },
    {
        "Address": "6590 N SCOTTSDALE RD, #140",
        "City": "SCOTTSDALE",
        "Distance": "24.3966734914296",
        "Lat": 33.5478,
        "Lon": -111.9538,
        "Phone": "480-400-0649",
        "SearchType": "gps",
        "ShowAmazonHubIcon": 0,
        "ShowCOVIDIcon": 0,
        "ShowCOVIDVaccineIcon": 0,
        "ShowHHSPrEPIcon": 1,
        "ShowHmdpBasic": 1,
        "ShowHmdpPremium": 0,
        "ShowVaccineIcon": 0,
        "ShowWebsite": 0,
        "State": "AZ",
        "StoreId": 19024,
        "StoreName": "Mixtures Pharmacy Scottsdale",
        "StoreUrl": "",
        "Zip": "85253"
    },
    {
        "Address": "1701 E Thomas Rd, Suite 105",
        "City": "Phoenix",
        "Distance": "24.399151329874",
        "Lat": 33.5048,
        "Lon": -112.0319,
        "Phone": "602-237-6677",
        "SearchType": "gps",
        "ShowAmazonHubIcon": 1,
        "ShowCOVIDIcon": 0,
        "ShowCOVIDVaccineIcon": 0,
        "ShowHHSPrEPIcon": 1,
        "ShowHmdpBasic": 1,
        "ShowHmdpPremium": 0,
        "ShowVaccineIcon": 1,
        "ShowWebsite": 0,
        "State": "AZ",
        "StoreId": 8940,
        "StoreName": "PHOENIX PHARMACY",
        "StoreUrl": "MNPN 8940",
        "Zip": "85016"
    }
];
