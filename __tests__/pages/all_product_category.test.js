import { render, screen, act } from '@testing-library/react';
import AllProductCategoryPage from "@/pages/all_product_category";
import axios from "axios";
jest.mock("axios");

jest.mock('next/router', () => {
  return {
    useRouter:jest.fn()
  }
});

describe('AllProductCategory - Display values from CMS', () => {
  beforeEach(() => {
    axios.get.mockResolvedValue( {data: acuteCareData} );
    axios.get.mockResolvedValue( {data: preventiveCareData} );
    axios.get.mockResolvedValue( {data: everyDayCareData} );
    axios.get.mockResolvedValue( {data: diagnosticCareData} );
    axios.get.mockResolvedValue( {data: productFilter} );
  });

  test('Render All Product Category', async () => {
    await act(async () => {
      render(<AllProductCategoryPage />);
    });
    expect(screen.getByText('Acute Care')).toBeInTheDocument();
    expect(screen.getByText('Preventive Care')).toBeInTheDocument();
    expect(screen.getByText('Every Day Care')).toBeInTheDocument();
    expect(screen.getByText('Diagnostic Care')).toBeInTheDocument();
  });
});

const acuteCareData = {
  "totalMatching": 11,
  "results": [
    {
      "contentLink": {
        "id": 241,
        "workId": 0,
        "guidValue": "0076f5fb-2853-45a7-a3c5-ae64f158f113",
        "providerName": null,
        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp222223/",
        "expanded": null
      },
      "name": "Ear Care Product Type - 3",
      "language": {
        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp222223/",
        "displayName": "English",
        "name": "en"
      },
      "existingLanguages": [
        {
          "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp222223/",
          "displayName": "English",
          "name": "en"
        }
      ],
      "masterLanguage": {
        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp222223/",
        "displayName": "English",
        "name": "en"
      },
      "contentType": [
        "Page",
        "ProductDetailsPage"
      ],
      "parentLink": {
        "id": 112,
        "workId": 0,
        "guidValue": "5c0bd45c-faa2-4223-b688-a0d63097b80d",
        "providerName": null,
        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/",
        "expanded": null
      },
      "routeSegment": "pdp222223",
      "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp222223/",
      "changed": "2023-04-21T16:00:16Z",
      "created": "2023-04-19T16:21:33Z",
      "startPublish": "2023-04-19T16:21:38Z",
      "stopPublish": null,
      "saved": "2023-05-05T08:56:26Z",
      "status": "Published",
      "seoSection": {
        "value": null,
        "propertyDataType": "PropertyContentArea"
      },
      "gender": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "recommendedProductButtonText": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "description": {
        "value": "<p>IMMUNE SUPPORT (1): Vitamin D3 is an essential nutrient for immune support. (1) Each serving contains 2000 IU of Vitamin D for immune benefits and may assist the immune system by helping to regulate T and B-lymphocytes (1)<br />SUPPORTS STRONG BONES (1): In addition to immune support, getting a sufficient amount of Vitamin D is critical to building and maintaining strong bones in adults. (1) It is essential for calcium absorption to help support healthy bones (1)<br />YEAR-ROUND SUPPORT: Vitamin D3 supplements contain the same form of Vitamin D that is naturally formed in the body through exposure to sunshine. Nature&rsquo;s Bounty Vitamin D3 helps support the production of Vitamin D all year long (1)<br />NON-GMO FORMULA: Nature&rsquo;s Bounty Vitamin D3 Softgels are non-GMO, gluten- and sugar-free, and contain no artificial colors or sweeteners<br />UNSURPASSED QUALITY AND VALUE: Using the latest breakthroughs in nutritional science and the finest ingredients, Nature&rsquo;s Bounty provides supplements of unsurpassed quality and valueA</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "availability": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "title": {
        "value": "<p>Foster &amp; Thrive&nbsp;<br />Vitamin D3<br />50 mcg (2000 IU)<br />Strong Bones &amp; Immune Support* Ear care 3</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "categortyBackgroundColorCode": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "disclaimers": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProduct": {
        "value": false,
        "propertyDataType": "PropertyBoolean"
      },
      "subTitle": {
        "value": "<p>Liquid Filled | Rapid Release<br />Gluten Free</p>\n<p>Dietary supplement</p>\n<p>100 SOFTGELS Ear care 3</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductBackgroundColorCode": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "ingredients": {
        "value": "<p>Vitamin D3, Soybean Oil, Gelatin, Glycerin, Water, Corn Oil.</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "highlightDescription": {
        "value": "<p>Antihistamine Loratadine oral solution USP, 5 mg/5 ml product 17</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductButtonColor": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "productType": {
        "value": [
          {
            "name": "Acute Care",
            "description": "Acute Care",
            "id": 19
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "recommendedProductButtonUrl": {
        "value": null,
        "propertyDataType": "PropertyUrl"
      },
      "image": {
        "value": {
          "expanded": null,
          "id": 310,
          "guidValue": "99c7dad3-2157-4674-9c93-4e5063b72d62",
          "workId": 0,
          "providerName": null,
          "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/acute-care-4.png"
        },
        "propertyDataType": "PropertyContentReference"
      },
      "recommendedProductLogoImage": {
        "value": null,
        "propertyDataType": "PropertyContentReference"
      },
      "warnings": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductBackgroundImage": {
        "value": null,
        "propertyDataType": "PropertyContentReference"
      },
      "recommendedProductDescription": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "volume": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "productImages": {
        "value": [
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          }
        ],
        "propertyDataType": "PropertyContentReferenceList"
      },
      "directions": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "form": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "healthNeeds": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "category": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "age": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      }
    },
    {
      "contentLink": {
        "id": 251,
        "workId": 0,
        "guidValue": "d765d66c-d77b-483b-8830-9309653d87a5",
        "providerName": null,
        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22222322/",
        "expanded": null
      },
      "name": "Ear Care Product Type - 05",
      "language": {
        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22222322/",
        "displayName": "English",
        "name": "en"
      },
      "existingLanguages": [
        {
          "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22222322/",
          "displayName": "English",
          "name": "en"
        }
      ],
      "masterLanguage": {
        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22222322/",
        "displayName": "English",
        "name": "en"
      },
      "contentType": [
        "Page",
        "ProductDetailsPage"
      ],
      "parentLink": {
        "id": 112,
        "workId": 0,
        "guidValue": "5c0bd45c-faa2-4223-b688-a0d63097b80d",
        "providerName": null,
        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/",
        "expanded": null
      },
      "routeSegment": "pdp22222322",
      "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22222322/",
      "changed": "2023-04-21T16:20:08Z",
      "created": "2023-04-19T16:21:33Z",
      "startPublish": "2023-04-19T16:21:38Z",
      "stopPublish": null,
      "saved": "2023-05-05T09:06:49Z",
      "status": "Published",
      "seoSection": {
        "value": null,
        "propertyDataType": "PropertyContentArea"
      },
      "gender": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "recommendedProductButtonText": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "description": {
        "value": "<p>IMMUNE SUPPORT (1): Vitamin D3 is an essential nutrient for immune support. (1) Each serving contains 2000 IU of Vitamin D for immune benefits and may assist the immune system by helping to regulate T and B-lymphocytes (1)<br />SUPPORTS STRONG BONES (1): In addition to immune support, getting a sufficient amount of Vitamin D is critical to building and maintaining strong bones in adults. (1) It is essential for calcium absorption to help support healthy bones (1)<br />YEAR-ROUND SUPPORT: Vitamin D3 supplements contain the same form of Vitamin D that is naturally formed in the body through exposure to sunshine. Nature&rsquo;s Bounty Vitamin D3 helps support the production of Vitamin D all year long (1)<br />NON-GMO FORMULA: Nature&rsquo;s Bounty Vitamin D3 Softgels are non-GMO, gluten- and sugar-free, and contain no artificial colors or sweeteners<br />UNSURPASSED QUALITY AND VALUE: Using the latest breakthroughs in nutritional science and the finest ingredients, Nature&rsquo;s Bounty provides supplements of unsurpassed quality and valueA</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "availability": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "title": {
        "value": "<p>Foster &amp; Thrive&nbsp;<br />Vitamin D3<br />50 mcg (2000 IU)<br />Strong Bones &amp; Immune Support* Ear care 5</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "categortyBackgroundColorCode": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "disclaimers": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProduct": {
        "value": false,
        "propertyDataType": "PropertyBoolean"
      },
      "subTitle": {
        "value": "<p>Liquid Filled | Rapid Release<br />Gluten Free</p>\n<p>Dietary supplement</p>\n<p>100 SOFTGELS Ear care 5</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductBackgroundColorCode": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "ingredients": {
        "value": "<p>Vitamin D3, Soybean Oil, Gelatin, Glycerin, Water, Corn Oil.</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "highlightDescription": {
        "value": "<p>Antihistamine Loratadine oral solution USP, 5 mg/5 ml product 9</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductButtonColor": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "productType": {
        "value": [
          {
            "name": "Acute Care",
            "description": "Acute Care",
            "id": 19
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "recommendedProductButtonUrl": {
        "value": null,
        "propertyDataType": "PropertyUrl"
      },
      "image": {
        "value": {
          "expanded": null,
          "id": 309,
          "guidValue": "e1ea7c67-f5cf-4070-9913-3964e3352e95",
          "workId": 0,
          "providerName": null,
          "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/acute-care-3.png"
        },
        "propertyDataType": "PropertyContentReference"
      },
      "recommendedProductLogoImage": {
        "value": null,
        "propertyDataType": "PropertyContentReference"
      },
      "warnings": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductBackgroundImage": {
        "value": null,
        "propertyDataType": "PropertyContentReference"
      },
      "recommendedProductDescription": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "volume": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "productImages": {
        "value": [
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          }
        ],
        "propertyDataType": "PropertyContentReferenceList"
      },
      "directions": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "form": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "healthNeeds": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "category": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "age": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      }
    },
    {
      "contentLink": {
        "id": 247,
        "workId": 0,
        "guidValue": "a1657a20-661d-4196-a81d-b125cbce460a",
        "providerName": null,
        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2222232/",
        "expanded": null
      },
      "name": "Ear Care Product Type - 4",
      "language": {
        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2222232/",
        "displayName": "English",
        "name": "en"
      },
      "existingLanguages": [
        {
          "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2222232/",
          "displayName": "English",
          "name": "en"
        }
      ],
      "masterLanguage": {
        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2222232/",
        "displayName": "English",
        "name": "en"
      },
      "contentType": [
        "Page",
        "ProductDetailsPage"
      ],
      "parentLink": {
        "id": 112,
        "workId": 0,
        "guidValue": "5c0bd45c-faa2-4223-b688-a0d63097b80d",
        "providerName": null,
        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/",
        "expanded": null
      },
      "routeSegment": "pdp2222232",
      "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2222232/",
      "changed": "2023-04-21T16:09:54Z",
      "created": "2023-04-19T16:21:33Z",
      "startPublish": "2023-04-19T16:21:38Z",
      "stopPublish": null,
      "saved": "2023-04-24T14:11:47Z",
      "status": "Published",
      "seoSection": {
        "value": null,
        "propertyDataType": "PropertyContentArea"
      },
      "gender": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "recommendedProductButtonText": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "description": {
        "value": "<p>IMMUNE SUPPORT (1): Vitamin D3 is an essential nutrient for immune support. (1) Each serving contains 2000 IU of Vitamin D for immune benefits and may assist the immune system by helping to regulate T and B-lymphocytes (1)<br />SUPPORTS STRONG BONES (1): In addition to immune support, getting a sufficient amount of Vitamin D is critical to building and maintaining strong bones in adults. (1) It is essential for calcium absorption to help support healthy bones (1)<br />YEAR-ROUND SUPPORT: Vitamin D3 supplements contain the same form of Vitamin D that is naturally formed in the body through exposure to sunshine. Nature&rsquo;s Bounty Vitamin D3 helps support the production of Vitamin D all year long (1)<br />NON-GMO FORMULA: Nature&rsquo;s Bounty Vitamin D3 Softgels are non-GMO, gluten- and sugar-free, and contain no artificial colors or sweeteners<br />UNSURPASSED QUALITY AND VALUE: Using the latest breakthroughs in nutritional science and the finest ingredients, Nature&rsquo;s Bounty provides supplements of unsurpassed quality and valueA</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "availability": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "title": {
        "value": "<p>Foster &amp; Thrive&nbsp;<br />Vitamin D3<br />50 mcg (2000 IU)<br />Strong Bones &amp; Immune Support* Ear care 4</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "categortyBackgroundColorCode": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "disclaimers": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProduct": {
        "value": false,
        "propertyDataType": "PropertyBoolean"
      },
      "subTitle": {
        "value": "<p>Liquid Filled | Rapid Release<br />Gluten Free</p>\n<p>Dietary supplement</p>\n<p>100 SOFTGELS Ear care 4</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductBackgroundColorCode": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "ingredients": {
        "value": "<p>Vitamin D3, Soybean Oil, Gelatin, Glycerin, Water, Corn Oil.</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "highlightDescription": {
        "value": "<p>Antihistamine Loratadine oral solution USP, 5 mg/5 ml product 13</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductButtonColor": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "productType": {
        "value": [
          {
            "name": "Acute Care",
            "description": "Acute Care",
            "id": 19
          },
          {
            "name": "Ear Care",
            "description": "Ear Care",
            "id": 25
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "recommendedProductButtonUrl": {
        "value": null,
        "propertyDataType": "PropertyUrl"
      },
      "image": {
        "value": {
          "expanded": null,
          "id": 309,
          "guidValue": "e1ea7c67-f5cf-4070-9913-3964e3352e95",
          "workId": 0,
          "providerName": null,
          "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/acute-care-3.png"
        },
        "propertyDataType": "PropertyContentReference"
      },
      "recommendedProductLogoImage": {
        "value": null,
        "propertyDataType": "PropertyContentReference"
      },
      "warnings": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductBackgroundImage": {
        "value": null,
        "propertyDataType": "PropertyContentReference"
      },
      "recommendedProductDescription": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "volume": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "productImages": {
        "value": [
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          }
        ],
        "propertyDataType": "PropertyContentReferenceList"
      },
      "directions": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "form": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "healthNeeds": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "category": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "age": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      }
    },
    {
      "contentLink": {
        "id": 254,
        "workId": 0,
        "guidValue": "317f2d1b-58d7-4e0e-9139-5159006924e8",
        "providerName": null,
        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2232222/",
        "expanded": null
      },
      "name": "Pain Relief Product Type - 7",
      "language": {
        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2232222/",
        "displayName": "English",
        "name": "en"
      },
      "existingLanguages": [
        {
          "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2232222/",
          "displayName": "English",
          "name": "en"
        }
      ],
      "masterLanguage": {
        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2232222/",
        "displayName": "English",
        "name": "en"
      },
      "contentType": [
        "Page",
        "ProductDetailsPage"
      ],
      "parentLink": {
        "id": 112,
        "workId": 0,
        "guidValue": "5c0bd45c-faa2-4223-b688-a0d63097b80d",
        "providerName": null,
        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/",
        "expanded": null
      },
      "routeSegment": "pdp2232222",
      "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2232222/",
      "changed": "2023-04-21T16:22:54Z",
      "created": "2023-04-19T16:21:33Z",
      "startPublish": "2023-04-19T16:21:38Z",
      "stopPublish": null,
      "saved": "2023-05-08T12:45:48Z",
      "status": "Published",
      "seoSection": {
        "value": null,
        "propertyDataType": "PropertyContentArea"
      },
      "gender": {
        "value": [
          {
            "name": "Gender",
            "description": "Gender",
            "id": 2
          },
          {
            "name": "Male",
            "description": "Male",
            "id": 3
          },
          {
            "name": "Female",
            "description": "Female",
            "id": 4
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "recommendedProductButtonText": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "description": {
        "value": "<p>IMMUNE SUPPORT (1): Vitamin D3 is an essential nutrient for immune support. (1) Each serving contains 2000 IU of Vitamin D for immune benefits and may assist the immune system by helping to regulate T and B-lymphocytes (1)<br />SUPPORTS STRONG BONES (1): In addition to immune support, getting a sufficient amount of Vitamin D is critical to building and maintaining strong bones in adults. (1) It is essential for calcium absorption to help support healthy bones (1)<br />YEAR-ROUND SUPPORT: Vitamin D3 supplements contain the same form of Vitamin D that is naturally formed in the body through exposure to sunshine. Nature&rsquo;s Bounty Vitamin D3 helps support the production of Vitamin D all year long (1)<br />NON-GMO FORMULA: Nature&rsquo;s Bounty Vitamin D3 Softgels are non-GMO, gluten- and sugar-free, and contain no artificial colors or sweeteners<br />UNSURPASSED QUALITY AND VALUE: Using the latest breakthroughs in nutritional science and the finest ingredients, Nature&rsquo;s Bounty provides supplements of unsurpassed quality and valueA</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "availability": {
        "value": [
          {
            "name": "Availability",
            "description": "Availability",
            "id": 16
          },
          {
            "name": "Available Now",
            "description": "Available Now",
            "id": 17
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "title": {
        "value": "<p>Foster &amp; Thrive&nbsp;<br />Vitamin D3<br />50 mcg (2000 IU)<br />Strong Bones &amp; Immune Support* Pain Relief 7</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "categortyBackgroundColorCode": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "disclaimers": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProduct": {
        "value": false,
        "propertyDataType": "PropertyBoolean"
      },
      "subTitle": {
        "value": "<p>Liquid Filled | Rapid Release<br />Gluten Free</p>\n<p>Dietary supplement</p>\n<p>100 SOFTGELS Pain Relief 7</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductBackgroundColorCode": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "ingredients": {
        "value": "<p>Vitamin D3, Soybean Oil, Gelatin, Glycerin, Water, Corn Oil.</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "highlightDescription": {
        "value": "<p>Antihistamine Loratadine oral solution USP, 5 mg/5 ml product 6</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductButtonColor": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "productType": {
        "value": [
          {
            "name": "Acute Care",
            "description": "Acute Care",
            "id": 19
          },
          {
            "name": "Allergy Relief",
            "description": "Allergy Relief",
            "id": 20
          },
          {
            "name": "Cough, Cold & Flu Relief",
            "description": "Cough, Cold & Flu Relief",
            "id": 22
          },
          {
            "name": "Oral Care",
            "description": "Oral Care",
            "id": 27
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "recommendedProductButtonUrl": {
        "value": null,
        "propertyDataType": "PropertyUrl"
      },
      "image": {
        "value": {
          "expanded": null,
          "id": 310,
          "guidValue": "99c7dad3-2157-4674-9c93-4e5063b72d62",
          "workId": 0,
          "providerName": null,
          "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/acute-care-4.png"
        },
        "propertyDataType": "PropertyContentReference"
      },
      "recommendedProductLogoImage": {
        "value": null,
        "propertyDataType": "PropertyContentReference"
      },
      "warnings": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductBackgroundImage": {
        "value": null,
        "propertyDataType": "PropertyContentReference"
      },
      "recommendedProductDescription": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "volume": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "productImages": {
        "value": [
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          }
        ],
        "propertyDataType": "PropertyContentReferenceList"
      },
      "directions": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "form": {
        "value": [
          {
            "name": "Form",
            "description": "Form",
            "id": 8
          },
          {
            "name": "Bandage",
            "description": "Bandage",
            "id": 9
          },
          {
            "name": "Capsule",
            "description": "Capsule",
            "id": 10
          },
          {
            "name": "Nasal Spray",
            "description": "Nasal Spray",
            "id": 13
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "healthNeeds": {
        "value": [
          {
            "name": "Health Needs",
            "description": "Health Needs",
            "id": 52
          },
          {
            "name": "Digestion",
            "description": "Digestion",
            "id": 55
          },
          {
            "name": "Energy",
            "description": "Energy",
            "id": 56
          },
          {
            "name": "Mood",
            "description": "Mood",
            "id": 64
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "category": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "age": {
        "value": [
          {
            "name": "Age",
            "description": "Age",
            "id": 5
          },
          {
            "name": "Adults",
            "description": "Adults",
            "id": 6
          },
          {
            "name": "Children",
            "description": "Children",
            "id": 7
          }
        ],
        "propertyDataType": "PropertyCategory"
      }
    },
    {
      "contentLink": {
        "id": 257,
        "workId": 0,
        "guidValue": "400bc0be-eba6-4701-98bd-4b8facb24605",
        "providerName": null,
        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2222232222/",
        "expanded": null
      },
      "name": "Ear Care  Product Type-7",
      "language": {
        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2222232222/",
        "displayName": "English",
        "name": "en"
      },
      "existingLanguages": [
        {
          "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2222232222/",
          "displayName": "English",
          "name": "en"
        }
      ],
      "masterLanguage": {
        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2222232222/",
        "displayName": "English",
        "name": "en"
      },
      "contentType": [
        "Page",
        "ProductDetailsPage"
      ],
      "parentLink": {
        "id": 112,
        "workId": 0,
        "guidValue": "5c0bd45c-faa2-4223-b688-a0d63097b80d",
        "providerName": null,
        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/",
        "expanded": null
      },
      "routeSegment": "pdp2222232222",
      "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2222232222/",
      "changed": "2023-04-21T16:25:35Z",
      "created": "2023-04-19T16:21:33Z",
      "startPublish": "2023-04-19T16:21:38Z",
      "stopPublish": null,
      "saved": "2023-05-05T08:53:33Z",
      "status": "Published",
      "seoSection": {
        "value": null,
        "propertyDataType": "PropertyContentArea"
      },
      "gender": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "recommendedProductButtonText": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "description": {
        "value": "<p>IMMUNE SUPPORT (1): Vitamin D3 is an essential nutrient for immune support. (1) Each serving contains 2000 IU of Vitamin D for immune benefits and may assist the immune system by helping to regulate T and B-lymphocytes (1)<br />SUPPORTS STRONG BONES (1): In addition to immune support, getting a sufficient amount of Vitamin D is critical to building and maintaining strong bones in adults. (1) It is essential for calcium absorption to help support healthy bones (1)<br />YEAR-ROUND SUPPORT: Vitamin D3 supplements contain the same form of Vitamin D that is naturally formed in the body through exposure to sunshine. Nature&rsquo;s Bounty Vitamin D3 helps support the production of Vitamin D all year long (1)<br />NON-GMO FORMULA: Nature&rsquo;s Bounty Vitamin D3 Softgels are non-GMO, gluten- and sugar-free, and contain no artificial colors or sweeteners<br />UNSURPASSED QUALITY AND VALUE: Using the latest breakthroughs in nutritional science and the finest ingredients, Nature&rsquo;s Bounty provides supplements of unsurpassed quality and valueA</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "availability": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "title": {
        "value": "<p>Foster &amp; Thrive&nbsp;<br />Vitamin D3<br />50 mcg (2000 IU)<br />Strong Bones &amp; Immune Support* Ear care 7</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "categortyBackgroundColorCode": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "disclaimers": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProduct": {
        "value": null,
        "propertyDataType": "PropertyBoolean"
      },
      "subTitle": {
        "value": "<p>Liquid Filled | Rapid Release<br />Gluten Free</p>\n<p>Dietary supplement</p>\n<p>100 SOFTGELS Ear care 7</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductBackgroundColorCode": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "ingredients": {
        "value": "<p>Vitamin D3, Soybean Oil, Gelatin, Glycerin, Water, Corn Oil.</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "highlightDescription": {
        "value": "<p>Antihistamine Loratadine oral solution USP, 5 mg/5 ml product 3</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductButtonColor": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "productType": {
        "value": [
          {
            "name": "Acute Care",
            "description": "Acute Care",
            "id": 19
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "recommendedProductButtonUrl": {
        "value": null,
        "propertyDataType": "PropertyUrl"
      },
      "image": {
        "value": {
          "expanded": null,
          "id": 310,
          "guidValue": "99c7dad3-2157-4674-9c93-4e5063b72d62",
          "workId": 0,
          "providerName": null,
          "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/acute-care-4.png"
        },
        "propertyDataType": "PropertyContentReference"
      },
      "recommendedProductLogoImage": {
        "value": null,
        "propertyDataType": "PropertyContentReference"
      },
      "warnings": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductBackgroundImage": {
        "value": null,
        "propertyDataType": "PropertyContentReference"
      },
      "recommendedProductDescription": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "volume": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "productImages": {
        "value": [
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          }
        ],
        "propertyDataType": "PropertyContentReferenceList"
      },
      "directions": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "form": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "healthNeeds": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "category": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "age": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      }
    },
    {
      "contentLink": {
        "id": 259,
        "workId": 0,
        "guidValue": "c74edf72-ee34-4c3c-9f65-993d5f003059",
        "providerName": null,
        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22222322222/",
        "expanded": null
      },
      "name": "Ear Care Product Type-08",
      "language": {
        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22222322222/",
        "displayName": "English",
        "name": "en"
      },
      "existingLanguages": [
        {
          "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22222322222/",
          "displayName": "English",
          "name": "en"
        }
      ],
      "masterLanguage": {
        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22222322222/",
        "displayName": "English",
        "name": "en"
      },
      "contentType": [
        "Page",
        "ProductDetailsPage"
      ],
      "parentLink": {
        "id": 112,
        "workId": 0,
        "guidValue": "5c0bd45c-faa2-4223-b688-a0d63097b80d",
        "providerName": null,
        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/",
        "expanded": null
      },
      "routeSegment": "pdp22222322222",
      "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22222322222/",
      "changed": "2023-04-21T16:27:19Z",
      "created": "2023-04-19T16:21:33Z",
      "startPublish": "2023-04-19T16:21:38Z",
      "stopPublish": null,
      "saved": "2023-05-08T12:21:24Z",
      "status": "Published",
      "seoSection": {
        "value": null,
        "propertyDataType": "PropertyContentArea"
      },
      "gender": {
        "value": [
          {
            "name": "Gender",
            "description": "Gender",
            "id": 2
          },
          {
            "name": "Male",
            "description": "Male",
            "id": 3
          },
          {
            "name": "Female",
            "description": "Female",
            "id": 4
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "recommendedProductButtonText": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "description": {
        "value": "<p>IMMUNE SUPPORT (1): Vitamin D3 is an essential nutrient for immune support. (1) Each serving contains 2000 IU of Vitamin D for immune benefits and may assist the immune system by helping to regulate T and B-lymphocytes (1)<br />SUPPORTS STRONG BONES (1): In addition to immune support, getting a sufficient amount of Vitamin D is critical to building and maintaining strong bones in adults. (1) It is essential for calcium absorption to help support healthy bones (1)<br />YEAR-ROUND SUPPORT: Vitamin D3 supplements contain the same form of Vitamin D that is naturally formed in the body through exposure to sunshine. Nature&rsquo;s Bounty Vitamin D3 helps support the production of Vitamin D all year long (1)<br />NON-GMO FORMULA: Nature&rsquo;s Bounty Vitamin D3 Softgels are non-GMO, gluten- and sugar-free, and contain no artificial colors or sweeteners<br />UNSURPASSED QUALITY AND VALUE: Using the latest breakthroughs in nutritional science and the finest ingredients, Nature&rsquo;s Bounty provides supplements of unsurpassed quality and valueA</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "availability": {
        "value": [
          {
            "name": "Availability",
            "description": "Availability",
            "id": 16
          },
          {
            "name": "Available Now",
            "description": "Available Now",
            "id": 17
          },
          {
            "name": "Coming Soon",
            "description": "Coming Soon",
            "id": 18
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "title": {
        "value": "<p>Foster &amp; Thrive&nbsp;<br />Vitamin D3<br />50 mcg (2000 IU)<br />Strong Bones &amp; Immune Support* Ear care 8</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "categortyBackgroundColorCode": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "disclaimers": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProduct": {
        "value": true,
        "propertyDataType": "PropertyBoolean"
      },
      "subTitle": {
        "value": "<p>Liquid Filled | Rapid Release<br />Gluten Free</p>\n<p>Dietary supplement</p>\n<p>100 SOFTGELS Ear care 8</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductBackgroundColorCode": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "ingredients": {
        "value": "<p>Vitamin D3, Soybean Oil, Gelatin, Glycerin, Water, Corn Oil.</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "highlightDescription": {
        "value": "<div>\n<div>\n<div>Antihistamine Loratadine oral solution USP, 5 mg/5 ml product 1</div>\n</div>\n</div>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductButtonColor": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "productType": {
        "value": [
          {
            "name": "Acute Care",
            "description": "Acute Care",
            "id": 19
          },
          {
            "name": "Allergy Relief",
            "description": "Allergy Relief",
            "id": 20
          },
          {
            "name": "Pain Relief",
            "description": "Pain Relief",
            "id": 21
          },
          {
            "name": "Cough, Cold & Flu Relief",
            "description": "Cough, Cold & Flu Relief",
            "id": 22
          },
          {
            "name": "Digestion Health",
            "description": "Digestion Health",
            "id": 23
          },
          {
            "name": "Smoking Cessation",
            "description": "Smoking Cessation",
            "id": 24
          },
          {
            "name": "Ear Care",
            "description": "Ear Care",
            "id": 25
          },
          {
            "name": "Sinus Care",
            "description": "Sinus Care",
            "id": 26
          },
          {
            "name": "Oral Care",
            "description": "Oral Care",
            "id": 27
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "recommendedProductButtonUrl": {
        "value": null,
        "propertyDataType": "PropertyUrl"
      },
      "image": {
        "value": {
          "expanded": null,
          "id": 310,
          "guidValue": "99c7dad3-2157-4674-9c93-4e5063b72d62",
          "workId": 0,
          "providerName": null,
          "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/acute-care-4.png"
        },
        "propertyDataType": "PropertyContentReference"
      },
      "recommendedProductLogoImage": {
        "value": null,
        "propertyDataType": "PropertyContentReference"
      },
      "warnings": {
        "value": "<p>NA</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductBackgroundImage": {
        "value": null,
        "propertyDataType": "PropertyContentReference"
      },
      "recommendedProductDescription": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "volume": {
        "value": "<p>100 SOFTGELS</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "productImages": {
        "value": [
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          }
        ],
        "propertyDataType": "PropertyContentReferenceList"
      },
      "directions": {
        "value": "<p>NA</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "form": {
        "value": [
          {
            "name": "Form",
            "description": "Form",
            "id": 8
          },
          {
            "name": "Bandage",
            "description": "Bandage",
            "id": 9
          },
          {
            "name": "Capsule",
            "description": "Capsule",
            "id": 10
          },
          {
            "name": "Chewable",
            "description": "Chewable",
            "id": 11
          },
          {
            "name": "Liquid Gel",
            "description": "Liquid Gel",
            "id": 12
          },
          {
            "name": "Nasal Spray",
            "description": "Nasal Spray",
            "id": 13
          },
          {
            "name": "Tablet",
            "description": "Tablet",
            "id": 14
          },
          {
            "name": "Topical",
            "description": "Topical",
            "id": 15
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "healthNeeds": {
        "value": [
          {
            "name": "Health Needs",
            "description": "Health Needs",
            "id": 52
          },
          {
            "name": "Beauty",
            "description": "Beauty",
            "id": 53
          },
          {
            "name": "Bone",
            "description": "Bone",
            "id": 54
          },
          {
            "name": "Digestion",
            "description": "Digestion",
            "id": 55
          },
          {
            "name": "Energy",
            "description": "Energy",
            "id": 56
          },
          {
            "name": "Eye Health",
            "description": "Eye Health",
            "id": 57
          },
          {
            "name": "General Wellness",
            "description": "General Wellness",
            "id": 58
          },
          {
            "name": "Heart",
            "description": "Heart",
            "id": 59
          },
          {
            "name": "Immune Health",
            "description": "Immune Health",
            "id": 60
          },
          {
            "name": "Joints",
            "description": "Joints",
            "id": 61
          },
          {
            "name": "Kids",
            "description": "Kids",
            "id": 62
          },
          {
            "name": "Men's Health",
            "description": "Men's Health",
            "id": 63
          },
          {
            "name": "Mood",
            "description": "Mood",
            "id": 64
          },
          {
            "name": "Prenatal & Postnatal",
            "description": "Prenatal & Postnatal",
            "id": 65
          },
          {
            "name": "Sleep",
            "description": "Sleep",
            "id": 66
          },
          {
            "name": "Stress",
            "description": "Stress",
            "id": 67
          },
          {
            "name": "Women's Health",
            "description": "Women's Health",
            "id": 68
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "category": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "age": {
        "value": [
          {
            "name": "Age",
            "description": "Age",
            "id": 5
          },
          {
            "name": "Adults",
            "description": "Adults",
            "id": 6
          },
          {
            "name": "Children",
            "description": "Children",
            "id": 7
          }
        ],
        "propertyDataType": "PropertyCategory"
      }
    },
    {
      "contentLink": {
        "id": 201,
        "workId": 0,
        "guidValue": "5963e98c-0e4d-4a74-9e34-32907b09ef67",
        "providerName": null,
        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp/",
        "expanded": null
      },
      "name": "Allergy Relief Product Type-1",
      "language": {
        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp/",
        "displayName": "English",
        "name": "en"
      },
      "existingLanguages": [
        {
          "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp/",
          "displayName": "English",
          "name": "en"
        }
      ],
      "masterLanguage": {
        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp/",
        "displayName": "English",
        "name": "en"
      },
      "contentType": [
        "Page",
        "ProductDetailsPage"
      ],
      "parentLink": {
        "id": 112,
        "workId": 0,
        "guidValue": "5c0bd45c-faa2-4223-b688-a0d63097b80d",
        "providerName": null,
        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/",
        "expanded": null
      },
      "routeSegment": "pdp",
      "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp/",
      "changed": "2023-04-21T09:36:33Z",
      "created": "2023-04-19T16:21:33Z",
      "startPublish": "2023-04-19T16:21:38Z",
      "stopPublish": null,
      "saved": "2023-05-08T14:19:50Z",
      "status": "Published",
      "seoSection": {
        "value": null,
        "propertyDataType": "PropertyContentArea"
      },
      "gender": {
        "value": [
          {
            "name": "Gender",
            "description": "Gender",
            "id": 2
          },
          {
            "name": "Male",
            "description": "Male",
            "id": 3
          },
          {
            "name": "Female",
            "description": "Female",
            "id": 4
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "recommendedProductButtonText": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "description": {
        "value": "<p>IMMUNE SUPPORT (1): Vitamin D3 is an essential nutrient for immune support. (1) Each serving contains 2000 IU of Vitamin D for immune benefits and may assist the immune system by helping to regulate T and B-lymphocytes (1)<br />SUPPORTS STRONG BONES (1): In addition to immune support, getting a sufficient amount of Vitamin D is critical to building and maintaining strong bones in adults. (1) It is essential for calcium absorption to help support healthy bones (1)<br />YEAR-ROUND SUPPORT: Vitamin D3 supplements contain the same form of Vitamin D that is naturally formed in the body through exposure to sunshine. Nature&rsquo;s Bounty Vitamin D3 helps support the production of Vitamin D all year long (1)<br />NON-GMO FORMULA: Nature&rsquo;s Bounty Vitamin D3 Softgels are non-GMO, gluten- and sugar-free, and contain no artificial colors or sweeteners<br />UNSURPASSED QUALITY AND VALUE: Using the latest breakthroughs in nutritional science and the finest ingredients, Nature&rsquo;s Bounty provides supplements of unsurpassed quality and valueA</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "availability": {
        "value": [
          {
            "name": "Availability",
            "description": "Availability",
            "id": 16
          },
          {
            "name": "Available Now",
            "description": "Available Now",
            "id": 17
          },
          {
            "name": "Coming Soon",
            "description": "Coming Soon",
            "id": 18
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "title": {
        "value": "<p>Foster &amp; Thrive&nbsp;<br />Vitamin D3<br />50 mcg (2000 IU)<br />Strong Bones &amp; Immune Support* Allergy Relief1</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "categortyBackgroundColorCode": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "disclaimers": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProduct": {
        "value": true,
        "propertyDataType": "PropertyBoolean"
      },
      "subTitle": {
        "value": "<p>Liquid Filled | Rapid Release<br />Gluten Free</p>\n<p>Dietary supplement</p>\n<p>100 SOFTGELS Allergy Relief1</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductBackgroundColorCode": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "ingredients": {
        "value": "<p>Vitamin D3, Soybean Oil, Gelatin, Glycerin, Water, Corn Oil.</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "highlightDescription": {
        "value": "<p>Antihistamine Loratadine oral solution USP, 5 mg/5 ml product 29</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductButtonColor": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "productType": {
        "value": [
          {
            "name": "Acute Care",
            "description": "Acute Care",
            "id": 19
          },
          {
            "name": "Allergy Relief",
            "description": "Allergy Relief",
            "id": 20
          },
          {
            "name": "Pain Relief",
            "description": "Pain Relief",
            "id": 21
          },
          {
            "name": "Cough, Cold & Flu Relief",
            "description": "Cough, Cold & Flu Relief",
            "id": 22
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "recommendedProductButtonUrl": {
        "value": null,
        "propertyDataType": "PropertyUrl"
      },
      "image": {
        "value": {
          "expanded": null,
          "id": 309,
          "guidValue": "e1ea7c67-f5cf-4070-9913-3964e3352e95",
          "workId": 0,
          "providerName": null,
          "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/acute-care-3.png"
        },
        "propertyDataType": "PropertyContentReference"
      },
      "recommendedProductLogoImage": {
        "value": null,
        "propertyDataType": "PropertyContentReference"
      },
      "warnings": {
        "value": "<p>NA</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductBackgroundImage": {
        "value": null,
        "propertyDataType": "PropertyContentReference"
      },
      "recommendedProductDescription": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "volume": {
        "value": "<p>100 SOFTGELS</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "productImages": {
        "value": [
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          }
        ],
        "propertyDataType": "PropertyContentReferenceList"
      },
      "directions": {
        "value": "<p>NA</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "form": {
        "value": [
          {
            "name": "Form",
            "description": "Form",
            "id": 8
          },
          {
            "name": "Bandage",
            "description": "Bandage",
            "id": 9
          },
          {
            "name": "Tablet",
            "description": "Tablet",
            "id": 14
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "healthNeeds": {
        "value": [
          {
            "name": "Health Needs",
            "description": "Health Needs",
            "id": 52
          },
          {
            "name": "Beauty",
            "description": "Beauty",
            "id": 53
          },
          {
            "name": "Bone",
            "description": "Bone",
            "id": 54
          },
          {
            "name": "Joints",
            "description": "Joints",
            "id": 61
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "category": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "age": {
        "value": [
          {
            "name": "Age",
            "description": "Age",
            "id": 5
          },
          {
            "name": "Adults",
            "description": "Adults",
            "id": 6
          },
          {
            "name": "Children",
            "description": "Children",
            "id": 7
          }
        ],
        "propertyDataType": "PropertyCategory"
      }
    },
    {
      "contentLink": {
        "id": 402,
        "workId": 0,
        "guidValue": "4bc298ce-44df-49b3-9be6-89ab9b74bb24",
        "providerName": null,
        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/vitamin-d3-50-mcg-2000/",
        "expanded": null
      },
      "name": "Foster & Thrive Vitamin D3 50 mcg (2000 IU) Strong Bones & Immune Support*",
      "language": {
        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/vitamin-d3-50-mcg-2000/",
        "displayName": "English",
        "name": "en"
      },
      "existingLanguages": [
        {
          "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/vitamin-d3-50-mcg-2000/",
          "displayName": "English",
          "name": "en"
        }
      ],
      "masterLanguage": {
        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/vitamin-d3-50-mcg-2000/",
        "displayName": "English",
        "name": "en"
      },
      "contentType": [
        "Page",
        "ProductDetailsPage"
      ],
      "parentLink": {
        "id": 112,
        "workId": 0,
        "guidValue": "5c0bd45c-faa2-4223-b688-a0d63097b80d",
        "providerName": null,
        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/",
        "expanded": null
      },
      "routeSegment": "vitamin-d3-50-mcg-2000",
      "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/vitamin-d3-50-mcg-2000/",
      "changed": "2023-04-26T18:34:54Z",
      "created": "2023-04-26T18:32:30Z",
      "startPublish": "2023-04-26T18:34:54Z",
      "stopPublish": null,
      "saved": "2023-05-13T11:05:07Z",
      "status": "Published",
      "noFollow": {
        "value": null,
        "propertyDataType": "PropertyBoolean"
      },
      "pageTitle": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "metaDescription": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "recommendedProduct": {
        "value": true,
        "propertyDataType": "PropertyBoolean"
      },
      "uom": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "subTitle": {
        "value": "<p>Liquid Filled | Rapid Release<br />Gluten Free</p>\n<p>Dietary supplement</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "image": {
        "value": {
          "expanded": null,
          "id": 405,
          "guidValue": "238fcddf-17d1-4cac-affb-07700e86c2a9",
          "workId": 0,
          "providerName": null,
          "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/d05b4e76368a4b1983d6a1ac7c0b9e8e/details_page_ffoster_thrive_vitamin_d3.png"
        },
        "propertyDataType": "PropertyContentReference"
      },
      "recommendedProductDescription": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "upc": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "volume": {
        "value": "<p>100 SOFTGELS</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "directions": {
        "value": "<p>Vitamin D3, Soybean Oil, Gelatin, Glycerin, Water, Corn Oil.</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "healthNeeds": {
        "value": [
          {
            "name": "Health Needs",
            "description": "Health Needs",
            "id": 52
          },
          {
            "name": "Beauty",
            "description": "Beauty",
            "id": 53
          },
          {
            "name": "Bone",
            "description": "Bone",
            "id": 54
          },
          {
            "name": "Digestion",
            "description": "Digestion",
            "id": 55
          },
          {
            "name": "Energy",
            "description": "Energy",
            "id": 56
          },
          {
            "name": "Eye Health",
            "description": "Eye Health",
            "id": 57
          },
          {
            "name": "General Wellness",
            "description": "General Wellness",
            "id": 58
          },
          {
            "name": "Heart",
            "description": "Heart",
            "id": 59
          },
          {
            "name": "Immune Health",
            "description": "Immune Health",
            "id": 60
          },
          {
            "name": "Joints",
            "description": "Joints",
            "id": 61
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "gender": {
        "value": [
          {
            "name": "Gender",
            "description": "Gender",
            "id": 2
          },
          {
            "name": "Male",
            "description": "Male",
            "id": 3
          },
          {
            "name": "Female",
            "description": "Female",
            "id": 4
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "recommendedProductButtonText": {
        "value": "where to buy",
        "propertyDataType": "PropertyLongString"
      },
      "description": {
        "value": "<ul>\n<li>IMMUNE SUPPORT (1): Vitamin D3 is an essential nutrient for immune support. (1) Each serving contains 2000 IU of Vitamin D for immune benefits and may assist the immune system by helping to regulate T and B-lymphocytes (1)</li>\n<li>SUPPORTS STRONG BONES (1): In addition to immune support, getting a sufficient amount of Vitamin D is critical to building and maintaining strong bones in adults. (1) It is essential for calcium absorption to help support healthy bones (1)</li>\n<li>YEAR-ROUND SUPPORT: Vitamin D3 supplements contain the same form of Vitamin D that is naturally formed in the body through exposure to sunshine. Nature&rsquo;s Bounty Vitamin D3 helps support the production of Vitamin D all year long (1)</li>\n<li>NON-GMO FORMULA: Nature&rsquo;s Bounty Vitamin D3 Softgels are non-GMO, gluten- and sugar-free, and contain no artificial colors or sweeteners</li>\n<li>UNSURPASSED QUALITY AND VALUE: Using the latest breakthroughs in nutritional science and the finest ingredients, Nature&rsquo;s Bounty provides supplements of unsurpassed quality and valueA</li>\n</ul>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "availability": {
        "value": [
          {
            "name": "Availability",
            "description": "Availability",
            "id": 16
          },
          {
            "name": "Available Now",
            "description": "Available Now",
            "id": 17
          },
          {
            "name": "Coming Soon",
            "description": "Coming Soon",
            "id": 18
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "packageSize": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "title": {
        "value": "<h1><span class=\"ui-provider gr b c d e f g h i j k l m n o p q r s t u v w x y z ab ac ae af ag ah ai aj ak\" dir=\"ltr\">Foster &amp; Thrive</span></h1>\n<h1><span class=\"ui-provider gr b c d e f g h i j k l m n o p q r s t u v w x y z ab ac ae af ag ah ai aj ak\" dir=\"ltr\">Vitamin D3</span></h1>\n<h2><span class=\"ui-provider gr b c d e f g h i j k l m n o p q r s t u v w x y z ab ac ae af ag ah ai aj ak\" dir=\"ltr\">50 mcg (2000 IU)</span></h2>\n<h2><span class=\"ui-provider gr b c d e f g h i j k l m n o p q r s t u v w x y z ab ac ae af ag ah ai aj ak\" dir=\"ltr\">Strong Bones &amp; Immune Support*</span></h2>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "categortyBackgroundColorCode": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "disclaimers": {
        "value": "<p>Disclaimer: Products are subject to availability</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductBackgroundColorCode": {
        "value": "#DBDFEB",
        "propertyDataType": "PropertyLongString"
      },
      "ingredients": {
        "value": "<p>Vitamin D3, Soybean Oil, Gelatin, Glycerin, Water, Corn Oil.</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "highlightDescription": {
        "value": "<p>UNSURPASSED QUALITY AND VALUE: Using the latest breakthroughs in nutritional science and the finest ingredients, Nature&rsquo;s Bounty provides supplements of unsurpassed quality and valueA</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "canoicalUrl": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "recommendedProductButtonColor": {
        "value": "#4F31BB",
        "propertyDataType": "PropertyLongString"
      },
      "productType": {
        "value": [
          {
            "name": "Acute Care",
            "description": "Acute Care",
            "id": 19
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "recommendedProductButtonUrl": {
        "value": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/vitamin-d3-50-mcg-2000/",
        "propertyDataType": "PropertyUrl"
      },
      "recommendedProductLogoImage": {
        "value": null,
        "propertyDataType": "PropertyContentReference"
      },
      "warnings": {
        "value": "<p>Vitamin D3, Soybean Oil, Gelatin, Glycerin, Water, Corn Oil.</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductBackgroundImage": {
        "value": null,
        "propertyDataType": "PropertyContentReference"
      },
      "productImages": {
        "value": [
          {
            "expanded": null,
            "id": 406,
            "guidValue": "2cbc43f2-584f-4eec-a08c-8b5ee89d00f4",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/d05b4e76368a4b1983d6a1ac7c0b9e8e/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 406,
            "guidValue": "2cbc43f2-584f-4eec-a08c-8b5ee89d00f4",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/d05b4e76368a4b1983d6a1ac7c0b9e8e/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 319,
            "guidValue": "d8584e15-c4bc-4900-ad03-22029628d512",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/every-day-care--3.png"
          },
          {
            "expanded": null,
            "id": 406,
            "guidValue": "2cbc43f2-584f-4eec-a08c-8b5ee89d00f4",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/d05b4e76368a4b1983d6a1ac7c0b9e8e/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 406,
            "guidValue": "2cbc43f2-584f-4eec-a08c-8b5ee89d00f4",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/d05b4e76368a4b1983d6a1ac7c0b9e8e/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 406,
            "guidValue": "2cbc43f2-584f-4eec-a08c-8b5ee89d00f4",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/d05b4e76368a4b1983d6a1ac7c0b9e8e/vitamin_d3.png"
          }
        ],
        "propertyDataType": "PropertyContentReferenceList"
      },
      "form": {
        "value": [
          {
            "name": "Form",
            "description": "Form",
            "id": 8
          },
          {
            "name": "Bandage",
            "description": "Bandage",
            "id": 9
          },
          {
            "name": "Capsule",
            "description": "Capsule",
            "id": 10
          },
          {
            "name": "Chewable",
            "description": "Chewable",
            "id": 11
          },
          {
            "name": "Liquid Gel",
            "description": "Liquid Gel",
            "id": 12
          },
          {
            "name": "Nasal Spray",
            "description": "Nasal Spray",
            "id": 13
          },
          {
            "name": "Tablet",
            "description": "Tablet",
            "id": 14
          },
          {
            "name": "Topical",
            "description": "Topical",
            "id": 15
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "pageIndex": {
        "value": null,
        "propertyDataType": "PropertyBoolean"
      },
      "category": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "age": {
        "value": [
          {
            "name": "Age",
            "description": "Age",
            "id": 5
          },
          {
            "name": "Adults",
            "description": "Adults",
            "id": 6
          },
          {
            "name": "Children",
            "description": "Children",
            "id": 7
          }
        ],
        "propertyDataType": "PropertyCategory"
      }
    },
    {
      "contentLink": {
        "id": 250,
        "workId": 0,
        "guidValue": "5b3136ae-4989-4a81-becd-f3a864230eed",
        "providerName": null,
        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp223222/",
        "expanded": null
      },
      "name": "Pain Relief Product Type - 6",
      "language": {
        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp223222/",
        "displayName": "English",
        "name": "en"
      },
      "existingLanguages": [
        {
          "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp223222/",
          "displayName": "English",
          "name": "en"
        }
      ],
      "masterLanguage": {
        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp223222/",
        "displayName": "English",
        "name": "en"
      },
      "contentType": [
        "Page",
        "ProductDetailsPage"
      ],
      "parentLink": {
        "id": 112,
        "workId": 0,
        "guidValue": "5c0bd45c-faa2-4223-b688-a0d63097b80d",
        "providerName": null,
        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/",
        "expanded": null
      },
      "routeSegment": "pdp223222",
      "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp223222/",
      "changed": "2023-04-21T16:18:18Z",
      "created": "2023-04-19T16:21:33Z",
      "startPublish": "2023-04-19T16:21:38Z",
      "stopPublish": null,
      "saved": "2023-05-05T10:00:20Z",
      "status": "Published",
      "seoSection": {
        "value": null,
        "propertyDataType": "PropertyContentArea"
      },
      "gender": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "recommendedProductButtonText": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "description": {
        "value": "<p>IMMUNE SUPPORT (1): Vitamin D3 is an essential nutrient for immune support. (1) Each serving contains 2000 IU of Vitamin D for immune benefits and may assist the immune system by helping to regulate T and B-lymphocytes (1)<br />SUPPORTS STRONG BONES (1): In addition to immune support, getting a sufficient amount of Vitamin D is critical to building and maintaining strong bones in adults. (1) It is essential for calcium absorption to help support healthy bones (1)<br />YEAR-ROUND SUPPORT: Vitamin D3 supplements contain the same form of Vitamin D that is naturally formed in the body through exposure to sunshine. Nature&rsquo;s Bounty Vitamin D3 helps support the production of Vitamin D all year long (1)<br />NON-GMO FORMULA: Nature&rsquo;s Bounty Vitamin D3 Softgels are non-GMO, gluten- and sugar-free, and contain no artificial colors or sweeteners<br />UNSURPASSED QUALITY AND VALUE: Using the latest breakthroughs in nutritional science and the finest ingredients, Nature&rsquo;s Bounty provides supplements of unsurpassed quality and valueA</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "availability": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "title": {
        "value": "<p>Foster &amp; Thrive&nbsp;<br />Vitamin D3<br />50 mcg (2000 IU)<br />Strong Bones &amp; Immune Support* Pain Relief6</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "categortyBackgroundColorCode": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "disclaimers": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProduct": {
        "value": false,
        "propertyDataType": "PropertyBoolean"
      },
      "subTitle": {
        "value": "<p>Liquid Filled | Rapid Release<br />Gluten Free</p>\n<p>Dietary supplement</p>\n<p>100 SOFTGELS Pain Relief6</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductBackgroundColorCode": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "ingredients": {
        "value": "<p>Vitamin D3, Soybean Oil, Gelatin, Glycerin, Water, Corn Oil.</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "highlightDescription": {
        "value": "<p>Antihistamine Loratadine oral solution USP, 5 mg/5 ml product 10</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductButtonColor": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "productType": {
        "value": [
          {
            "name": "Acute Care",
            "description": "Acute Care",
            "id": 19
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "recommendedProductButtonUrl": {
        "value": null,
        "propertyDataType": "PropertyUrl"
      },
      "image": {
        "value": {
          "expanded": null,
          "id": 309,
          "guidValue": "e1ea7c67-f5cf-4070-9913-3964e3352e95",
          "workId": 0,
          "providerName": null,
          "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/acute-care-3.png"
        },
        "propertyDataType": "PropertyContentReference"
      },
      "recommendedProductLogoImage": {
        "value": null,
        "propertyDataType": "PropertyContentReference"
      },
      "warnings": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductBackgroundImage": {
        "value": null,
        "propertyDataType": "PropertyContentReference"
      },
      "recommendedProductDescription": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "volume": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "productImages": {
        "value": [
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          }
        ],
        "propertyDataType": "PropertyContentReferenceList"
      },
      "directions": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "form": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "healthNeeds": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "category": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "age": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      }
    },
    {
      "contentLink": {
        "id": 256,
        "workId": 0,
        "guidValue": "dad2ef33-5a71-457c-90f9-cff8636fdf5a",
        "providerName": null,
        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22322222/",
        "expanded": null
      },
      "name": "Pain Relief Product Type - 8",
      "language": {
        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22322222/",
        "displayName": "English",
        "name": "en"
      },
      "existingLanguages": [
        {
          "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22322222/",
          "displayName": "English",
          "name": "en"
        }
      ],
      "masterLanguage": {
        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22322222/",
        "displayName": "English",
        "name": "en"
      },
      "contentType": [
        "Page",
        "ProductDetailsPage"
      ],
      "parentLink": {
        "id": 112,
        "workId": 0,
        "guidValue": "5c0bd45c-faa2-4223-b688-a0d63097b80d",
        "providerName": null,
        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/",
        "expanded": null
      },
      "routeSegment": "pdp22322222",
      "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22322222/",
      "changed": "2023-04-21T16:24:34Z",
      "created": "2023-04-19T16:21:33Z",
      "startPublish": "2023-04-19T16:21:38Z",
      "stopPublish": null,
      "saved": "2023-05-08T12:24:36Z",
      "status": "Published",
      "seoSection": {
        "value": null,
        "propertyDataType": "PropertyContentArea"
      },
      "gender": {
        "value": [
          {
            "name": "Gender",
            "description": "Gender",
            "id": 2
          },
          {
            "name": "Male",
            "description": "Male",
            "id": 3
          },
          {
            "name": "Female",
            "description": "Female",
            "id": 4
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "recommendedProductButtonText": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "description": {
        "value": "<p>IMMUNE SUPPORT (1): Vitamin D3 is an essential nutrient for immune support. (1) Each serving contains 2000 IU of Vitamin D for immune benefits and may assist the immune system by helping to regulate T and B-lymphocytes (1)<br />SUPPORTS STRONG BONES (1): In addition to immune support, getting a sufficient amount of Vitamin D is critical to building and maintaining strong bones in adults. (1) It is essential for calcium absorption to help support healthy bones (1)<br />YEAR-ROUND SUPPORT: Vitamin D3 supplements contain the same form of Vitamin D that is naturally formed in the body through exposure to sunshine. Nature&rsquo;s Bounty Vitamin D3 helps support the production of Vitamin D all year long (1)<br />NON-GMO FORMULA: Nature&rsquo;s Bounty Vitamin D3 Softgels are non-GMO, gluten- and sugar-free, and contain no artificial colors or sweeteners<br />UNSURPASSED QUALITY AND VALUE: Using the latest breakthroughs in nutritional science and the finest ingredients, Nature&rsquo;s Bounty provides supplements of unsurpassed quality and valueA</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "availability": {
        "value": [
          {
            "name": "Availability",
            "description": "Availability",
            "id": 16
          },
          {
            "name": "Coming Soon",
            "description": "Coming Soon",
            "id": 18
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "title": {
        "value": "<p>Foster &amp; Thrive&nbsp;<br />Vitamin D3<br />50 mcg (2000 IU)<br />Strong Bones &amp; Immune Support* Pain Relief 8</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "categortyBackgroundColorCode": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "disclaimers": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProduct": {
        "value": false,
        "propertyDataType": "PropertyBoolean"
      },
      "subTitle": {
        "value": "<p>Liquid Filled | Rapid Release<br />Gluten Free</p>\n<p>Dietary supplement</p>\n<p>100 SOFTGELS Pain Relief 8</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductBackgroundColorCode": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "ingredients": {
        "value": "<p>Vitamin D3, Soybean Oil, Gelatin, Glycerin, Water, Corn Oil.</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "highlightDescription": {
        "value": "<p>Antihistamine Loratadine oral solution USP, 5 mg/5 ml product 4</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductButtonColor": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "productType": {
        "value": [
          {
            "name": "Acute Care",
            "description": "Acute Care",
            "id": 19
          },
          {
            "name": "Allergy Relief",
            "description": "Allergy Relief",
            "id": 20
          },
          {
            "name": "Pain Relief",
            "description": "Pain Relief",
            "id": 21
          },
          {
            "name": "Cough, Cold & Flu Relief",
            "description": "Cough, Cold & Flu Relief",
            "id": 22
          },
          {
            "name": "Digestion Health",
            "description": "Digestion Health",
            "id": 23
          },
          {
            "name": "Sinus Care",
            "description": "Sinus Care",
            "id": 26
          },
          {
            "name": "Oral Care",
            "description": "Oral Care",
            "id": 27
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "recommendedProductButtonUrl": {
        "value": null,
        "propertyDataType": "PropertyUrl"
      },
      "image": {
        "value": {
          "expanded": null,
          "id": 327,
          "guidValue": "ec9ba120-01d3-47f4-a80a-ce2338757452",
          "workId": 0,
          "providerName": null,
          "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/product_sample_3.png"
        },
        "propertyDataType": "PropertyContentReference"
      },
      "recommendedProductLogoImage": {
        "value": null,
        "propertyDataType": "PropertyContentReference"
      },
      "warnings": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductBackgroundImage": {
        "value": null,
        "propertyDataType": "PropertyContentReference"
      },
      "recommendedProductDescription": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "volume": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "productImages": {
        "value": [
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          }
        ],
        "propertyDataType": "PropertyContentReferenceList"
      },
      "directions": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "form": {
        "value": [
          {
            "name": "Form",
            "description": "Form",
            "id": 8
          },
          {
            "name": "Bandage",
            "description": "Bandage",
            "id": 9
          },
          {
            "name": "Capsule",
            "description": "Capsule",
            "id": 10
          },
          {
            "name": "Tablet",
            "description": "Tablet",
            "id": 14
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "healthNeeds": {
        "value": [
          {
            "name": "Health Needs",
            "description": "Health Needs",
            "id": 52
          },
          {
            "name": "Bone",
            "description": "Bone",
            "id": 54
          },
          {
            "name": "Digestion",
            "description": "Digestion",
            "id": 55
          },
          {
            "name": "Energy",
            "description": "Energy",
            "id": 56
          },
          {
            "name": "Kids",
            "description": "Kids",
            "id": 62
          },
          {
            "name": "Men's Health",
            "description": "Men's Health",
            "id": 63
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "category": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "age": {
        "value": [
          {
            "name": "Age",
            "description": "Age",
            "id": 5
          },
          {
            "name": "Children",
            "description": "Children",
            "id": 7
          }
        ],
        "propertyDataType": "PropertyCategory"
      }
    },
    {
      "contentLink": {
        "id": 255,
        "workId": 0,
        "guidValue": "2cb4de3a-a16a-4f75-87b5-f0eec3562ecc",
        "providerName": null,
        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp222223222/",
        "expanded": null
      },
      "name": "Ear Care Product Type - 6",
      "language": {
        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp222223222/",
        "displayName": "English",
        "name": "en"
      },
      "existingLanguages": [
        {
          "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp222223222/",
          "displayName": "English",
          "name": "en"
        }
      ],
      "masterLanguage": {
        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp222223222/",
        "displayName": "English",
        "name": "en"
      },
      "contentType": [
        "Page",
        "ProductDetailsPage"
      ],
      "parentLink": {
        "id": 112,
        "workId": 0,
        "guidValue": "5c0bd45c-faa2-4223-b688-a0d63097b80d",
        "providerName": null,
        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/",
        "expanded": null
      },
      "routeSegment": "pdp222223222",
      "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp222223222/",
      "changed": "2023-04-21T16:23:44Z",
      "created": "2023-04-19T16:21:33Z",
      "startPublish": "2023-04-19T16:21:38Z",
      "stopPublish": null,
      "saved": "2023-05-08T12:42:42Z",
      "status": "Published",
      "seoSection": {
        "value": null,
        "propertyDataType": "PropertyContentArea"
      },
      "gender": {
        "value": [
          {
            "name": "Gender",
            "description": "Gender",
            "id": 2
          },
          {
            "name": "Male",
            "description": "Male",
            "id": 3
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "recommendedProductButtonText": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "description": {
        "value": "<p>IMMUNE SUPPORT (1): Vitamin D3 is an essential nutrient for immune support. (1) Each serving contains 2000 IU of Vitamin D for immune benefits and may assist the immune system by helping to regulate T and B-lymphocytes (1)<br />SUPPORTS STRONG BONES (1): In addition to immune support, getting a sufficient amount of Vitamin D is critical to building and maintaining strong bones in adults. (1) It is essential for calcium absorption to help support healthy bones (1)<br />YEAR-ROUND SUPPORT: Vitamin D3 supplements contain the same form of Vitamin D that is naturally formed in the body through exposure to sunshine. Nature&rsquo;s Bounty Vitamin D3 helps support the production of Vitamin D all year long (1)<br />NON-GMO FORMULA: Nature&rsquo;s Bounty Vitamin D3 Softgels are non-GMO, gluten- and sugar-free, and contain no artificial colors or sweeteners<br />UNSURPASSED QUALITY AND VALUE: Using the latest breakthroughs in nutritional science and the finest ingredients, Nature&rsquo;s Bounty provides supplements of unsurpassed quality and valueA</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "availability": {
        "value": [
          {
            "name": "Availability",
            "description": "Availability",
            "id": 16
          },
          {
            "name": "Available Now",
            "description": "Available Now",
            "id": 17
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "title": {
        "value": "<p>Foster &amp; Thrive&nbsp;<br />Vitamin D3<br />50 mcg (2000 IU)<br />Strong Bones &amp; Immune Support* Ear care 6</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "categortyBackgroundColorCode": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "disclaimers": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProduct": {
        "value": false,
        "propertyDataType": "PropertyBoolean"
      },
      "subTitle": {
        "value": "<p>Liquid Filled | Rapid Release<br />Gluten Free</p>\n<p>Dietary supplement</p>\n<p>100 SOFTGELS Ear care 6</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductBackgroundColorCode": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "ingredients": {
        "value": "<p>Vitamin D3, Soybean Oil, Gelatin, Glycerin, Water, Corn Oil.</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "highlightDescription": {
        "value": "<p>Antihistamine Loratadine oral solution USP, 5 mg/5 ml product 5</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductButtonColor": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "productType": {
        "value": [
          {
            "name": "Acute Care",
            "description": "Acute Care",
            "id": 19
          },
          {
            "name": "Pain Relief",
            "description": "Pain Relief",
            "id": 21
          },
          {
            "name": "Cough, Cold & Flu Relief",
            "description": "Cough, Cold & Flu Relief",
            "id": 22
          },
          {
            "name": "Ear Care",
            "description": "Ear Care",
            "id": 25
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "recommendedProductButtonUrl": {
        "value": null,
        "propertyDataType": "PropertyUrl"
      },
      "image": {
        "value": {
          "expanded": null,
          "id": 329,
          "guidValue": "ea5c6516-9281-42f4-baf3-823f37e76be2",
          "workId": 0,
          "providerName": null,
          "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/product_sample_5.png"
        },
        "propertyDataType": "PropertyContentReference"
      },
      "recommendedProductLogoImage": {
        "value": null,
        "propertyDataType": "PropertyContentReference"
      },
      "warnings": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductBackgroundImage": {
        "value": null,
        "propertyDataType": "PropertyContentReference"
      },
      "recommendedProductDescription": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "volume": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "productImages": {
        "value": [
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          }
        ],
        "propertyDataType": "PropertyContentReferenceList"
      },
      "directions": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "form": {
        "value": [
          {
            "name": "Form",
            "description": "Form",
            "id": 8
          },
          {
            "name": "Liquid Gel",
            "description": "Liquid Gel",
            "id": 12
          },
          {
            "name": "Nasal Spray",
            "description": "Nasal Spray",
            "id": 13
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "healthNeeds": {
        "value": [
          {
            "name": "Health Needs",
            "description": "Health Needs",
            "id": 52
          },
          {
            "name": "Beauty",
            "description": "Beauty",
            "id": 53
          },
          {
            "name": "Eye Health",
            "description": "Eye Health",
            "id": 57
          },
          {
            "name": "Prenatal & Postnatal",
            "description": "Prenatal & Postnatal",
            "id": 65
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "category": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "age": {
        "value": [
          {
            "name": "Age",
            "description": "Age",
            "id": 5
          },
          {
            "name": "Adults",
            "description": "Adults",
            "id": 6
          }
        ],
        "propertyDataType": "PropertyCategory"
      }
    }
  ]
};

const preventiveCareData = {
  "totalMatching": 8,
  "results": [
    {
      "contentLink": {
        "id": 243,
        "workId": 0,
        "guidValue": "0e0885bd-816e-4478-9d0a-06e59bd0ca29",
        "providerName": null,
        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp222222222/",
        "expanded": null
      },
      "name": "Nutrition Product Type - 2",
      "language": {
        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp222222222/",
        "displayName": "English",
        "name": "en"
      },
      "existingLanguages": [
        {
          "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp222222222/",
          "displayName": "English",
          "name": "en"
        }
      ],
      "masterLanguage": {
        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp222222222/",
        "displayName": "English",
        "name": "en"
      },
      "contentType": [
        "Page",
        "ProductDetailsPage"
      ],
      "parentLink": {
        "id": 112,
        "workId": 0,
        "guidValue": "5c0bd45c-faa2-4223-b688-a0d63097b80d",
        "providerName": null,
        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/",
        "expanded": null
      },
      "routeSegment": "pdp222222222",
      "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp222222222/",
      "changed": "2023-04-21T16:02:42Z",
      "created": "2023-04-19T16:21:33Z",
      "startPublish": "2023-04-19T16:21:38Z",
      "stopPublish": null,
      "saved": "2023-04-24T14:12:53Z",
      "status": "Published",
      "seoSection": {
        "value": null,
        "propertyDataType": "PropertyContentArea"
      },
      "gender": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "recommendedProductButtonText": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "description": {
        "value": "<p>IMMUNE SUPPORT (1): Vitamin D3 is an essential nutrient for immune support. (1) Each serving contains 2000 IU of Vitamin D for immune benefits and may assist the immune system by helping to regulate T and B-lymphocytes (1)<br />SUPPORTS STRONG BONES (1): In addition to immune support, getting a sufficient amount of Vitamin D is critical to building and maintaining strong bones in adults. (1) It is essential for calcium absorption to help support healthy bones (1)<br />YEAR-ROUND SUPPORT: Vitamin D3 supplements contain the same form of Vitamin D that is naturally formed in the body through exposure to sunshine. Nature&rsquo;s Bounty Vitamin D3 helps support the production of Vitamin D all year long (1)<br />NON-GMO FORMULA: Nature&rsquo;s Bounty Vitamin D3 Softgels are non-GMO, gluten- and sugar-free, and contain no artificial colors or sweeteners<br />UNSURPASSED QUALITY AND VALUE: Using the latest breakthroughs in nutritional science and the finest ingredients, Nature&rsquo;s Bounty provides supplements of unsurpassed quality and valueA</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "availability": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "title": {
        "value": "<p>Foster &amp; Thrive&nbsp;<br />Vitamin D3<br />50 mcg (2000 IU)<br />Strong Bones &amp; Immune Support* Nutrition 2</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "categortyBackgroundColorCode": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "disclaimers": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProduct": {
        "value": false,
        "propertyDataType": "PropertyBoolean"
      },
      "subTitle": {
        "value": "<p>Liquid Filled | Rapid Release<br />Gluten Free</p>\n<p>Dietary supplement</p>\n<p>100 SOFTGELS Nutrition 2</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductBackgroundColorCode": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "ingredients": {
        "value": "<p>Vitamin D3, Soybean Oil, Gelatin, Glycerin, Water, Corn Oil.</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "highlightDescription": {
        "value": "<p>Antihistamine Loratadine oral solution USP, 5 mg/5 ml product 15</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductButtonColor": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "productType": {
        "value": [
          {
            "name": "Preventative Care",
            "description": "Preventative Care",
            "id": 28
          },
          {
            "name": "Nutrition",
            "description": "Nutrition",
            "id": 30
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "recommendedProductButtonUrl": {
        "value": null,
        "propertyDataType": "PropertyUrl"
      },
      "image": {
        "value": {
          "expanded": null,
          "id": 311,
          "guidValue": "37a31757-4795-49d2-a971-dfcb40a1f2c1",
          "workId": 0,
          "providerName": null,
          "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/preventive-care--2.png"
        },
        "propertyDataType": "PropertyContentReference"
      },
      "recommendedProductLogoImage": {
        "value": null,
        "propertyDataType": "PropertyContentReference"
      },
      "warnings": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductBackgroundImage": {
        "value": null,
        "propertyDataType": "PropertyContentReference"
      },
      "recommendedProductDescription": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "volume": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "productImages": {
        "value": [
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          }
        ],
        "propertyDataType": "PropertyContentReferenceList"
      },
      "directions": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "form": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "healthNeeds": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "category": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "age": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      }
    },
    {
      "contentLink": {
        "id": 248,
        "workId": 0,
        "guidValue": "32d81f0b-6b3c-4bf0-8723-2121591f09a0",
        "providerName": null,
        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp222222232/",
        "expanded": null
      },
      "name": "Immunity Product Type - 4",
      "language": {
        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp222222232/",
        "displayName": "English",
        "name": "en"
      },
      "existingLanguages": [
        {
          "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp222222232/",
          "displayName": "English",
          "name": "en"
        }
      ],
      "masterLanguage": {
        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp222222232/",
        "displayName": "English",
        "name": "en"
      },
      "contentType": [
        "Page",
        "ProductDetailsPage"
      ],
      "parentLink": {
        "id": 112,
        "workId": 0,
        "guidValue": "5c0bd45c-faa2-4223-b688-a0d63097b80d",
        "providerName": null,
        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/",
        "expanded": null
      },
      "routeSegment": "pdp222222232",
      "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp222222232/",
      "changed": "2023-04-21T16:12:18Z",
      "created": "2023-04-19T16:21:33Z",
      "startPublish": "2023-04-19T16:21:38Z",
      "stopPublish": null,
      "saved": "2023-04-24T14:11:26Z",
      "status": "Published",
      "seoSection": {
        "value": null,
        "propertyDataType": "PropertyContentArea"
      },
      "gender": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "recommendedProductButtonText": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "description": {
        "value": "<p>IMMUNE SUPPORT (1): Vitamin D3 is an essential nutrient for immune support. (1) Each serving contains 2000 IU of Vitamin D for immune benefits and may assist the immune system by helping to regulate T and B-lymphocytes (1)<br />SUPPORTS STRONG BONES (1): In addition to immune support, getting a sufficient amount of Vitamin D is critical to building and maintaining strong bones in adults. (1) It is essential for calcium absorption to help support healthy bones (1)<br />YEAR-ROUND SUPPORT: Vitamin D3 supplements contain the same form of Vitamin D that is naturally formed in the body through exposure to sunshine. Nature&rsquo;s Bounty Vitamin D3 helps support the production of Vitamin D all year long (1)<br />NON-GMO FORMULA: Nature&rsquo;s Bounty Vitamin D3 Softgels are non-GMO, gluten- and sugar-free, and contain no artificial colors or sweeteners<br />UNSURPASSED QUALITY AND VALUE: Using the latest breakthroughs in nutritional science and the finest ingredients, Nature&rsquo;s Bounty provides supplements of unsurpassed quality and valueA</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "availability": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "title": {
        "value": "<p>Foster &amp; Thrive&nbsp;<br />Vitamin D3<br />50 mcg (2000 IU)<br />Strong Bones &amp; Immune Support* Immunity 4</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "categortyBackgroundColorCode": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "disclaimers": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProduct": {
        "value": false,
        "propertyDataType": "PropertyBoolean"
      },
      "subTitle": {
        "value": "<p>Liquid Filled | Rapid Release<br />Gluten Free</p>\n<p>Dietary supplement</p>\n<p>100 SOFTGELS Immunity 4</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductBackgroundColorCode": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "ingredients": {
        "value": "<p>Vitamin D3, Soybean Oil, Gelatin, Glycerin, Water, Corn Oil.</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "highlightDescription": {
        "value": "<p>Antihistamine Loratadine oral solution USP, 5 mg/5 ml product 12</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductButtonColor": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "productType": {
        "value": [
          {
            "name": "Preventative Care",
            "description": "Preventative Care",
            "id": 28
          },
          {
            "name": "Immunity",
            "description": "Immunity",
            "id": 29
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "recommendedProductButtonUrl": {
        "value": null,
        "propertyDataType": "PropertyUrl"
      },
      "image": {
        "value": {
          "expanded": null,
          "id": 313,
          "guidValue": "14a7d2f6-a19b-4801-b7d6-25b2349a12f0",
          "workId": 0,
          "providerName": null,
          "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/preventive-care--4.png"
        },
        "propertyDataType": "PropertyContentReference"
      },
      "recommendedProductLogoImage": {
        "value": null,
        "propertyDataType": "PropertyContentReference"
      },
      "warnings": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductBackgroundImage": {
        "value": null,
        "propertyDataType": "PropertyContentReference"
      },
      "recommendedProductDescription": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "volume": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "productImages": {
        "value": [
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          }
        ],
        "propertyDataType": "PropertyContentReferenceList"
      },
      "directions": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "form": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "healthNeeds": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "category": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "age": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      }
    },
    {
      "contentLink": {
        "id": 236,
        "workId": 0,
        "guidValue": "f69dfac7-73be-4ab4-ae1f-788ae41d0c6b",
        "providerName": null,
        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp222222/",
        "expanded": null
      },
      "name": "Immunity Product Type  - 1",
      "language": {
        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp222222/",
        "displayName": "English",
        "name": "en"
      },
      "existingLanguages": [
        {
          "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp222222/",
          "displayName": "English",
          "name": "en"
        }
      ],
      "masterLanguage": {
        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp222222/",
        "displayName": "English",
        "name": "en"
      },
      "contentType": [
        "Page",
        "ProductDetailsPage"
      ],
      "parentLink": {
        "id": 112,
        "workId": 0,
        "guidValue": "5c0bd45c-faa2-4223-b688-a0d63097b80d",
        "providerName": null,
        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/",
        "expanded": null
      },
      "routeSegment": "pdp222222",
      "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp222222/",
      "changed": "2023-04-21T15:48:33Z",
      "created": "2023-04-19T16:21:33Z",
      "startPublish": "2023-04-19T16:21:38Z",
      "stopPublish": null,
      "saved": "2023-04-24T14:15:15Z",
      "status": "Published",
      "seoSection": {
        "value": null,
        "propertyDataType": "PropertyContentArea"
      },
      "gender": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "recommendedProductButtonText": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "description": {
        "value": "<p>IMMUNE SUPPORT (1): Vitamin D3 is an essential nutrient for immune support. (1) Each serving contains 2000 IU of Vitamin D for immune benefits and may assist the immune system by helping to regulate T and B-lymphocytes (1)<br />SUPPORTS STRONG BONES (1): In addition to immune support, getting a sufficient amount of Vitamin D is critical to building and maintaining strong bones in adults. (1) It is essential for calcium absorption to help support healthy bones (1)<br />YEAR-ROUND SUPPORT: Vitamin D3 supplements contain the same form of Vitamin D that is naturally formed in the body through exposure to sunshine. Nature&rsquo;s Bounty Vitamin D3 helps support the production of Vitamin D all year long (1)<br />NON-GMO FORMULA: Nature&rsquo;s Bounty Vitamin D3 Softgels are non-GMO, gluten- and sugar-free, and contain no artificial colors or sweeteners<br />UNSURPASSED QUALITY AND VALUE: Using the latest breakthroughs in nutritional science and the finest ingredients, Nature&rsquo;s Bounty provides supplements of unsurpassed quality and valueA</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "availability": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "title": {
        "value": "<p>Foster &amp; Thrive&nbsp;<br />Vitamin D3<br />50 mcg (2000 IU)<br />Strong Bones &amp; Immune Support* Immunity 1</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "categortyBackgroundColorCode": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "disclaimers": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProduct": {
        "value": false,
        "propertyDataType": "PropertyBoolean"
      },
      "subTitle": {
        "value": "<p>Liquid Filled | Rapid Release<br />Gluten Free</p>\n<p>Dietary supplement</p>\n<p>100 SOFTGELS Immunity 1</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductBackgroundColorCode": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "ingredients": {
        "value": "<p>Vitamin D3, Soybean Oil, Gelatin, Glycerin, Water, Corn Oil.</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "highlightDescription": {
        "value": "<p>Antihistamine Loratadine oral solution USP, 5 mg/5 ml product 21</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductButtonColor": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "productType": {
        "value": [
          {
            "name": "Preventative Care",
            "description": "Preventative Care",
            "id": 28
          },
          {
            "name": "Immunity",
            "description": "Immunity",
            "id": 29
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "recommendedProductButtonUrl": {
        "value": null,
        "propertyDataType": "PropertyUrl"
      },
      "image": {
        "value": {
          "expanded": null,
          "id": 312,
          "guidValue": "3dda5172-0740-4acc-a059-7a149743db24",
          "workId": 0,
          "providerName": null,
          "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/preventive-care--3.png"
        },
        "propertyDataType": "PropertyContentReference"
      },
      "recommendedProductLogoImage": {
        "value": null,
        "propertyDataType": "PropertyContentReference"
      },
      "warnings": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductBackgroundImage": {
        "value": null,
        "propertyDataType": "PropertyContentReference"
      },
      "recommendedProductDescription": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "volume": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "productImages": {
        "value": [
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          }
        ],
        "propertyDataType": "PropertyContentReferenceList"
      },
      "directions": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "form": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "healthNeeds": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "category": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "age": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      }
    },
    {
      "contentLink": {
        "id": 249,
        "workId": 0,
        "guidValue": "0fe07ba0-6a14-462f-9955-64bd619263f1",
        "providerName": null,
        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2222222222/",
        "expanded": null
      },
      "name": "Nutrition Product Type - 3",
      "language": {
        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2222222222/",
        "displayName": "English",
        "name": "en"
      },
      "existingLanguages": [
        {
          "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2222222222/",
          "displayName": "English",
          "name": "en"
        }
      ],
      "masterLanguage": {
        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2222222222/",
        "displayName": "English",
        "name": "en"
      },
      "contentType": [
        "Page",
        "ProductDetailsPage"
      ],
      "parentLink": {
        "id": 112,
        "workId": 0,
        "guidValue": "5c0bd45c-faa2-4223-b688-a0d63097b80d",
        "providerName": null,
        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/",
        "expanded": null
      },
      "routeSegment": "pdp2222222222",
      "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2222222222/",
      "changed": "2023-04-21T16:13:11Z",
      "created": "2023-04-19T16:21:33Z",
      "startPublish": "2023-04-19T16:21:38Z",
      "stopPublish": null,
      "saved": "2023-05-05T10:01:06Z",
      "status": "Published",
      "seoSection": {
        "value": null,
        "propertyDataType": "PropertyContentArea"
      },
      "gender": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "recommendedProductButtonText": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "description": {
        "value": "<p>IMMUNE SUPPORT (1): Vitamin D3 is an essential nutrient for immune support. (1) Each serving contains 2000 IU of Vitamin D for immune benefits and may assist the immune system by helping to regulate T and B-lymphocytes (1)<br />SUPPORTS STRONG BONES (1): In addition to immune support, getting a sufficient amount of Vitamin D is critical to building and maintaining strong bones in adults. (1) It is essential for calcium absorption to help support healthy bones (1)<br />YEAR-ROUND SUPPORT: Vitamin D3 supplements contain the same form of Vitamin D that is naturally formed in the body through exposure to sunshine. Nature&rsquo;s Bounty Vitamin D3 helps support the production of Vitamin D all year long (1)<br />NON-GMO FORMULA: Nature&rsquo;s Bounty Vitamin D3 Softgels are non-GMO, gluten- and sugar-free, and contain no artificial colors or sweeteners<br />UNSURPASSED QUALITY AND VALUE: Using the latest breakthroughs in nutritional science and the finest ingredients, Nature&rsquo;s Bounty provides supplements of unsurpassed quality and valueA</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "availability": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "title": {
        "value": "<p>Foster &amp; Thrive&nbsp;<br />Vitamin D3<br />50 mcg (2000 IU)<br />Strong Bones &amp; Immune Support* Nutrition 3</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "categortyBackgroundColorCode": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "disclaimers": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProduct": {
        "value": false,
        "propertyDataType": "PropertyBoolean"
      },
      "subTitle": {
        "value": "<p>Liquid Filled | Rapid Release<br />Gluten Free</p>\n<p>Dietary supplement</p>\n<p>100 SOFTGELS Nutrition 3</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductBackgroundColorCode": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "ingredients": {
        "value": "<p>Vitamin D3, Soybean Oil, Gelatin, Glycerin, Water, Corn Oil.</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "highlightDescription": {
        "value": "<p>Antihistamine Loratadine oral solution USP, 5 mg/5 ml product 11</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductButtonColor": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "productType": {
        "value": [
          {
            "name": "Preventative Care",
            "description": "Preventative Care",
            "id": 28
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "recommendedProductButtonUrl": {
        "value": null,
        "propertyDataType": "PropertyUrl"
      },
      "image": {
        "value": {
          "expanded": null,
          "id": 312,
          "guidValue": "3dda5172-0740-4acc-a059-7a149743db24",
          "workId": 0,
          "providerName": null,
          "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/preventive-care--3.png"
        },
        "propertyDataType": "PropertyContentReference"
      },
      "recommendedProductLogoImage": {
        "value": null,
        "propertyDataType": "PropertyContentReference"
      },
      "warnings": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductBackgroundImage": {
        "value": null,
        "propertyDataType": "PropertyContentReference"
      },
      "recommendedProductDescription": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "volume": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "productImages": {
        "value": [
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          }
        ],
        "propertyDataType": "PropertyContentReferenceList"
      },
      "directions": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "form": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "healthNeeds": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "category": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "age": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      }
    },
    {
      "contentLink": {
        "id": 242,
        "workId": 0,
        "guidValue": "10ae81cc-70f0-4ca0-a8d8-f925d0be6c44",
        "providerName": null,
        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22222223/",
        "expanded": null
      },
      "name": "Immunity Product Type - 3",
      "language": {
        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22222223/",
        "displayName": "English",
        "name": "en"
      },
      "existingLanguages": [
        {
          "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22222223/",
          "displayName": "English",
          "name": "en"
        }
      ],
      "masterLanguage": {
        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22222223/",
        "displayName": "English",
        "name": "en"
      },
      "contentType": [
        "Page",
        "ProductDetailsPage"
      ],
      "parentLink": {
        "id": 112,
        "workId": 0,
        "guidValue": "5c0bd45c-faa2-4223-b688-a0d63097b80d",
        "providerName": null,
        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/",
        "expanded": null
      },
      "routeSegment": "pdp22222223",
      "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22222223/",
      "changed": "2023-04-21T16:01:33Z",
      "created": "2023-04-19T16:21:33Z",
      "startPublish": "2023-04-19T16:21:38Z",
      "stopPublish": null,
      "saved": "2023-04-24T14:13:23Z",
      "status": "Published",
      "seoSection": {
        "value": null,
        "propertyDataType": "PropertyContentArea"
      },
      "gender": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "recommendedProductButtonText": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "description": {
        "value": "<p>IMMUNE SUPPORT (1): Vitamin D3 is an essential nutrient for immune support. (1) Each serving contains 2000 IU of Vitamin D for immune benefits and may assist the immune system by helping to regulate T and B-lymphocytes (1)<br />SUPPORTS STRONG BONES (1): In addition to immune support, getting a sufficient amount of Vitamin D is critical to building and maintaining strong bones in adults. (1) It is essential for calcium absorption to help support healthy bones (1)<br />YEAR-ROUND SUPPORT: Vitamin D3 supplements contain the same form of Vitamin D that is naturally formed in the body through exposure to sunshine. Nature&rsquo;s Bounty Vitamin D3 helps support the production of Vitamin D all year long (1)<br />NON-GMO FORMULA: Nature&rsquo;s Bounty Vitamin D3 Softgels are non-GMO, gluten- and sugar-free, and contain no artificial colors or sweeteners<br />UNSURPASSED QUALITY AND VALUE: Using the latest breakthroughs in nutritional science and the finest ingredients, Nature&rsquo;s Bounty provides supplements of unsurpassed quality and valueA</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "availability": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "title": {
        "value": "<p>Foster &amp; Thrive&nbsp;<br />Vitamin D3<br />50 mcg (2000 IU)<br />Strong Bones &amp; Immune Support* Immunity 3</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "categortyBackgroundColorCode": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "disclaimers": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProduct": {
        "value": false,
        "propertyDataType": "PropertyBoolean"
      },
      "subTitle": {
        "value": "<p>Liquid Filled | Rapid Release<br />Gluten Free</p>\n<p>Dietary supplement</p>\n<p>100 SOFTGELS Immunity 3</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductBackgroundColorCode": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "ingredients": {
        "value": "<p>Vitamin D3, Soybean Oil, Gelatin, Glycerin, Water, Corn Oil.</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "highlightDescription": {
        "value": "<p>Antihistamine Loratadine oral solution USP, 5 mg/5 ml product 16</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductButtonColor": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "productType": {
        "value": [
          {
            "name": "Preventative Care",
            "description": "Preventative Care",
            "id": 28
          },
          {
            "name": "Immunity",
            "description": "Immunity",
            "id": 29
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "recommendedProductButtonUrl": {
        "value": null,
        "propertyDataType": "PropertyUrl"
      },
      "image": {
        "value": {
          "expanded": null,
          "id": 313,
          "guidValue": "14a7d2f6-a19b-4801-b7d6-25b2349a12f0",
          "workId": 0,
          "providerName": null,
          "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/preventive-care--4.png"
        },
        "propertyDataType": "PropertyContentReference"
      },
      "recommendedProductLogoImage": {
        "value": null,
        "propertyDataType": "PropertyContentReference"
      },
      "warnings": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductBackgroundImage": {
        "value": null,
        "propertyDataType": "PropertyContentReference"
      },
      "recommendedProductDescription": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "volume": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "productImages": {
        "value": [
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          }
        ],
        "propertyDataType": "PropertyContentReferenceList"
      },
      "directions": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "form": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "healthNeeds": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "category": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "age": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      }
    },
    {
      "contentLink": {
        "id": 238,
        "workId": 0,
        "guidValue": "d8b47d41-1f8d-4fd2-aaa5-afd9bf4d99a5",
        "providerName": null,
        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2222222/",
        "expanded": null
      },
      "name": "Immunity Product Type - 2",
      "language": {
        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2222222/",
        "displayName": "English",
        "name": "en"
      },
      "existingLanguages": [
        {
          "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2222222/",
          "displayName": "English",
          "name": "en"
        }
      ],
      "masterLanguage": {
        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2222222/",
        "displayName": "English",
        "name": "en"
      },
      "contentType": [
        "Page",
        "ProductDetailsPage"
      ],
      "parentLink": {
        "id": 112,
        "workId": 0,
        "guidValue": "5c0bd45c-faa2-4223-b688-a0d63097b80d",
        "providerName": null,
        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/",
        "expanded": null
      },
      "routeSegment": "pdp2222222",
      "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2222222/",
      "changed": "2023-04-21T15:53:16Z",
      "created": "2023-04-19T16:21:33Z",
      "startPublish": "2023-04-19T16:21:38Z",
      "stopPublish": null,
      "saved": "2023-05-05T08:57:46Z",
      "status": "Published",
      "seoSection": {
        "value": null,
        "propertyDataType": "PropertyContentArea"
      },
      "gender": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "recommendedProductButtonText": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "description": {
        "value": "<p>IMMUNE SUPPORT (1): Vitamin D3 is an essential nutrient for immune support. (1) Each serving contains 2000 IU of Vitamin D for immune benefits and may assist the immune system by helping to regulate T and B-lymphocytes (1)<br />SUPPORTS STRONG BONES (1): In addition to immune support, getting a sufficient amount of Vitamin D is critical to building and maintaining strong bones in adults. (1) It is essential for calcium absorption to help support healthy bones (1)<br />YEAR-ROUND SUPPORT: Vitamin D3 supplements contain the same form of Vitamin D that is naturally formed in the body through exposure to sunshine. Nature&rsquo;s Bounty Vitamin D3 helps support the production of Vitamin D all year long (1)<br />NON-GMO FORMULA: Nature&rsquo;s Bounty Vitamin D3 Softgels are non-GMO, gluten- and sugar-free, and contain no artificial colors or sweeteners<br />UNSURPASSED QUALITY AND VALUE: Using the latest breakthroughs in nutritional science and the finest ingredients, Nature&rsquo;s Bounty provides supplements of unsurpassed quality and valueA</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "availability": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "title": {
        "value": "<p>Foster &amp; Thrive&nbsp;<br />Vitamin D3<br />50 mcg (2000 IU)<br />Strong Bones &amp; Immune Support* Immunity 2</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "categortyBackgroundColorCode": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "disclaimers": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProduct": {
        "value": false,
        "propertyDataType": "PropertyBoolean"
      },
      "subTitle": {
        "value": "<p>Liquid Filled | Rapid Release<br />Gluten Free</p>\n<p>Dietary supplement</p>\n<p>100 SOFTGELS Immunity 2</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductBackgroundColorCode": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "ingredients": {
        "value": "<p>Vitamin D3, Soybean Oil, Gelatin, Glycerin, Water, Corn Oil.</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "highlightDescription": {
        "value": "<p>Antihistamine Loratadine oral solution USP, 5 mg/5 ml product 20</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductButtonColor": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "productType": {
        "value": [
          {
            "name": "Preventative Care",
            "description": "Preventative Care",
            "id": 28
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "recommendedProductButtonUrl": {
        "value": null,
        "propertyDataType": "PropertyUrl"
      },
      "image": {
        "value": {
          "expanded": null,
          "id": 313,
          "guidValue": "14a7d2f6-a19b-4801-b7d6-25b2349a12f0",
          "workId": 0,
          "providerName": null,
          "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/preventive-care--4.png"
        },
        "propertyDataType": "PropertyContentReference"
      },
      "recommendedProductLogoImage": {
        "value": null,
        "propertyDataType": "PropertyContentReference"
      },
      "warnings": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductBackgroundImage": {
        "value": null,
        "propertyDataType": "PropertyContentReference"
      },
      "recommendedProductDescription": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "volume": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "productImages": {
        "value": [
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          }
        ],
        "propertyDataType": "PropertyContentReferenceList"
      },
      "directions": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "form": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "healthNeeds": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "category": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "age": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      }
    },
    {
      "contentLink": {
        "id": 252,
        "workId": 0,
        "guidValue": "397e7f7b-4223-4811-b2d9-463eec198ec0",
        "providerName": null,
        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2222222322/",
        "expanded": null
      },
      "name": "Immunity Product Type - 5",
      "language": {
        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2222222322/",
        "displayName": "English",
        "name": "en"
      },
      "existingLanguages": [
        {
          "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2222222322/",
          "displayName": "English",
          "name": "en"
        }
      ],
      "masterLanguage": {
        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2222222322/",
        "displayName": "English",
        "name": "en"
      },
      "contentType": [
        "Page",
        "ProductDetailsPage"
      ],
      "parentLink": {
        "id": 112,
        "workId": 0,
        "guidValue": "5c0bd45c-faa2-4223-b688-a0d63097b80d",
        "providerName": null,
        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/",
        "expanded": null
      },
      "routeSegment": "pdp2222222322",
      "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2222222322/",
      "changed": "2023-04-21T16:21:02Z",
      "created": "2023-04-19T16:21:33Z",
      "startPublish": "2023-04-19T16:21:38Z",
      "stopPublish": null,
      "saved": "2023-05-08T12:50:37Z",
      "status": "Published",
      "seoSection": {
        "value": null,
        "propertyDataType": "PropertyContentArea"
      },
      "gender": {
        "value": [
          {
            "name": "Gender",
            "description": "Gender",
            "id": 2
          },
          {
            "name": "Male",
            "description": "Male",
            "id": 3
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "recommendedProductButtonText": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "description": {
        "value": "<p>IMMUNE SUPPORT (1): Vitamin D3 is an essential nutrient for immune support. (1) Each serving contains 2000 IU of Vitamin D for immune benefits and may assist the immune system by helping to regulate T and B-lymphocytes (1)<br />SUPPORTS STRONG BONES (1): In addition to immune support, getting a sufficient amount of Vitamin D is critical to building and maintaining strong bones in adults. (1) It is essential for calcium absorption to help support healthy bones (1)<br />YEAR-ROUND SUPPORT: Vitamin D3 supplements contain the same form of Vitamin D that is naturally formed in the body through exposure to sunshine. Nature&rsquo;s Bounty Vitamin D3 helps support the production of Vitamin D all year long (1)<br />NON-GMO FORMULA: Nature&rsquo;s Bounty Vitamin D3 Softgels are non-GMO, gluten- and sugar-free, and contain no artificial colors or sweeteners<br />UNSURPASSED QUALITY AND VALUE: Using the latest breakthroughs in nutritional science and the finest ingredients, Nature&rsquo;s Bounty provides supplements of unsurpassed quality and valueA</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "availability": {
        "value": [
          {
            "name": "Availability",
            "description": "Availability",
            "id": 16
          },
          {
            "name": "Coming Soon",
            "description": "Coming Soon",
            "id": 18
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "title": {
        "value": "<p>Foster &amp; Thrive&nbsp;<br />Vitamin D3<br />50 mcg (2000 IU)<br />Strong Bones &amp; Immune Support* Immunity 5</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "categortyBackgroundColorCode": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "disclaimers": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProduct": {
        "value": false,
        "propertyDataType": "PropertyBoolean"
      },
      "subTitle": {
        "value": "<p>Liquid Filled | Rapid Release<br />Gluten Free</p>\n<p>Dietary supplement</p>\n<p>100 SOFTGELS Immunity 5</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductBackgroundColorCode": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "ingredients": {
        "value": "<p>Vitamin D3, Soybean Oil, Gelatin, Glycerin, Water, Corn Oil.</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "highlightDescription": {
        "value": "<p>Antihistamine Loratadine oral solution USP, 5 mg/5 ml product 8</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductButtonColor": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "productType": {
        "value": [
          {
            "name": "Preventative Care",
            "description": "Preventative Care",
            "id": 28
          },
          {
            "name": "Vitamins",
            "description": "Vitamins",
            "id": 31
          },
          {
            "name": "Probiotics",
            "description": "Probiotics",
            "id": 33
          },
          {
            "name": "Prenatal Health",
            "description": "Prenatal Health",
            "id": 34
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "recommendedProductButtonUrl": {
        "value": null,
        "propertyDataType": "PropertyUrl"
      },
      "image": {
        "value": {
          "expanded": null,
          "id": 311,
          "guidValue": "37a31757-4795-49d2-a971-dfcb40a1f2c1",
          "workId": 0,
          "providerName": null,
          "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/preventive-care--2.png"
        },
        "propertyDataType": "PropertyContentReference"
      },
      "recommendedProductLogoImage": {
        "value": null,
        "propertyDataType": "PropertyContentReference"
      },
      "warnings": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductBackgroundImage": {
        "value": null,
        "propertyDataType": "PropertyContentReference"
      },
      "recommendedProductDescription": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "volume": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "productImages": {
        "value": [
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          }
        ],
        "propertyDataType": "PropertyContentReferenceList"
      },
      "directions": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "form": {
        "value": [
          {
            "name": "Form",
            "description": "Form",
            "id": 8
          },
          {
            "name": "Capsule",
            "description": "Capsule",
            "id": 10
          },
          {
            "name": "Topical",
            "description": "Topical",
            "id": 15
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "healthNeeds": {
        "value": [
          {
            "name": "Health Needs",
            "description": "Health Needs",
            "id": 52
          },
          {
            "name": "Beauty",
            "description": "Beauty",
            "id": 53
          },
          {
            "name": "Kids",
            "description": "Kids",
            "id": 62
          },
          {
            "name": "Women's Health",
            "description": "Women's Health",
            "id": 68
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "category": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "age": {
        "value": [
          {
            "name": "Age",
            "description": "Age",
            "id": 5
          },
          {
            "name": "Adults",
            "description": "Adults",
            "id": 6
          }
        ],
        "propertyDataType": "PropertyCategory"
      }
    },
    {
      "contentLink": {
        "id": 253,
        "workId": 0,
        "guidValue": "aa455e8f-f7b0-46e4-8121-44614405efdc",
        "providerName": null,
        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22222222222/",
        "expanded": null
      },
      "name": "Nutrition Product Type - 4",
      "language": {
        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22222222222/",
        "displayName": "English",
        "name": "en"
      },
      "existingLanguages": [
        {
          "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22222222222/",
          "displayName": "English",
          "name": "en"
        }
      ],
      "masterLanguage": {
        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22222222222/",
        "displayName": "English",
        "name": "en"
      },
      "contentType": [
        "Page",
        "ProductDetailsPage"
      ],
      "parentLink": {
        "id": 112,
        "workId": 0,
        "guidValue": "5c0bd45c-faa2-4223-b688-a0d63097b80d",
        "providerName": null,
        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/",
        "expanded": null
      },
      "routeSegment": "pdp22222222222",
      "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22222222222/",
      "changed": "2023-04-21T16:21:49Z",
      "created": "2023-04-19T16:21:33Z",
      "startPublish": "2023-04-19T16:21:38Z",
      "stopPublish": null,
      "saved": "2023-05-08T12:49:28Z",
      "status": "Published",
      "seoSection": {
        "value": null,
        "propertyDataType": "PropertyContentArea"
      },
      "gender": {
        "value": [
          {
            "name": "Gender",
            "description": "Gender",
            "id": 2
          },
          {
            "name": "Female",
            "description": "Female",
            "id": 4
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "recommendedProductButtonText": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "description": {
        "value": "<p>IMMUNE SUPPORT (1): Vitamin D3 is an essential nutrient for immune support. (1) Each serving contains 2000 IU of Vitamin D for immune benefits and may assist the immune system by helping to regulate T and B-lymphocytes (1)<br />SUPPORTS STRONG BONES (1): In addition to immune support, getting a sufficient amount of Vitamin D is critical to building and maintaining strong bones in adults. (1) It is essential for calcium absorption to help support healthy bones (1)<br />YEAR-ROUND SUPPORT: Vitamin D3 supplements contain the same form of Vitamin D that is naturally formed in the body through exposure to sunshine. Nature&rsquo;s Bounty Vitamin D3 helps support the production of Vitamin D all year long (1)<br />NON-GMO FORMULA: Nature&rsquo;s Bounty Vitamin D3 Softgels are non-GMO, gluten- and sugar-free, and contain no artificial colors or sweeteners<br />UNSURPASSED QUALITY AND VALUE: Using the latest breakthroughs in nutritional science and the finest ingredients, Nature&rsquo;s Bounty provides supplements of unsurpassed quality and valueA</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "availability": {
        "value": [
          {
            "name": "Availability",
            "description": "Availability",
            "id": 16
          },
          {
            "name": "Coming Soon",
            "description": "Coming Soon",
            "id": 18
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "title": {
        "value": "<p>Foster &amp; Thrive&nbsp;<br />Vitamin D3<br />50 mcg (2000 IU)<br />Strong Bones &amp; Immune Support* Nutrition 4</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "categortyBackgroundColorCode": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "disclaimers": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProduct": {
        "value": false,
        "propertyDataType": "PropertyBoolean"
      },
      "subTitle": {
        "value": "<p>Liquid Filled | Rapid Release<br />Gluten Free</p>\n<p>Dietary supplement</p>\n<p>100 SOFTGELS Nutrition 4</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductBackgroundColorCode": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "ingredients": {
        "value": "<p>Vitamin D3, Soybean Oil, Gelatin, Glycerin, Water, Corn Oil.</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "highlightDescription": {
        "value": "<p>Antihistamine Loratadine oral solution USP, 5 mg/5 ml product 7</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductButtonColor": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "productType": {
        "value": [
          {
            "name": "Preventative Care",
            "description": "Preventative Care",
            "id": 28
          },
          {
            "name": "Immunity",
            "description": "Immunity",
            "id": 29
          },
          {
            "name": "Nutrition",
            "description": "Nutrition",
            "id": 30
          },
          {
            "name": "Vitamins",
            "description": "Vitamins",
            "id": 31
          },
          {
            "name": "Probiotics",
            "description": "Probiotics",
            "id": 33
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "recommendedProductButtonUrl": {
        "value": null,
        "propertyDataType": "PropertyUrl"
      },
      "image": {
        "value": {
          "expanded": null,
          "id": 303,
          "guidValue": "82791ec7-ff94-4ae1-8928-01245d6cdc27",
          "workId": 0,
          "providerName": null,
          "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/preventive-care.png"
        },
        "propertyDataType": "PropertyContentReference"
      },
      "recommendedProductLogoImage": {
        "value": null,
        "propertyDataType": "PropertyContentReference"
      },
      "warnings": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductBackgroundImage": {
        "value": null,
        "propertyDataType": "PropertyContentReference"
      },
      "recommendedProductDescription": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "volume": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "productImages": {
        "value": [
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          }
        ],
        "propertyDataType": "PropertyContentReferenceList"
      },
      "directions": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "form": {
        "value": [
          {
            "name": "Form",
            "description": "Form",
            "id": 8
          },
          {
            "name": "Liquid Gel",
            "description": "Liquid Gel",
            "id": 12
          },
          {
            "name": "Tablet",
            "description": "Tablet",
            "id": 14
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "healthNeeds": {
        "value": [
          {
            "name": "Health Needs",
            "description": "Health Needs",
            "id": 52
          },
          {
            "name": "Eye Health",
            "description": "Eye Health",
            "id": 57
          },
          {
            "name": "General Wellness",
            "description": "General Wellness",
            "id": 58
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "category": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "age": {
        "value": [
          {
            "name": "Age",
            "description": "Age",
            "id": 5
          },
          {
            "name": "Children",
            "description": "Children",
            "id": 7
          }
        ],
        "propertyDataType": "PropertyCategory"
      }
    }
  ]
};

const everyDayCareData = {
  "totalMatching": 6,
  "results": [
    {
      "contentLink": {
        "id": 235,
        "workId": 0,
        "guidValue": "e94f6e14-a765-4426-b97a-6d83a96d911d",
        "providerName": null,
        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22222/",
        "expanded": null
      },
      "name": "Family Planning Product Type - 1",
      "language": {
        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22222/",
        "displayName": "English",
        "name": "en"
      },
      "existingLanguages": [
        {
          "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22222/",
          "displayName": "English",
          "name": "en"
        }
      ],
      "masterLanguage": {
        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22222/",
        "displayName": "English",
        "name": "en"
      },
      "contentType": [
        "Page",
        "ProductDetailsPage"
      ],
      "parentLink": {
        "id": 112,
        "workId": 0,
        "guidValue": "5c0bd45c-faa2-4223-b688-a0d63097b80d",
        "providerName": null,
        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/",
        "expanded": null
      },
      "routeSegment": "pdp22222",
      "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22222/",
      "changed": "2023-04-21T15:43:30Z",
      "created": "2023-04-19T16:21:33Z",
      "startPublish": "2023-04-19T16:21:38Z",
      "stopPublish": null,
      "saved": "2023-04-24T14:16:12Z",
      "status": "Published",
      "seoSection": {
        "value": null,
        "propertyDataType": "PropertyContentArea"
      },
      "gender": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "recommendedProductButtonText": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "description": {
        "value": "<p>IMMUNE SUPPORT (1): Vitamin D3 is an essential nutrient for immune support. (1) Each serving contains 2000 IU of Vitamin D for immune benefits and may assist the immune system by helping to regulate T and B-lymphocytes (1)<br />SUPPORTS STRONG BONES (1): In addition to immune support, getting a sufficient amount of Vitamin D is critical to building and maintaining strong bones in adults. (1) It is essential for calcium absorption to help support healthy bones (1)<br />YEAR-ROUND SUPPORT: Vitamin D3 supplements contain the same form of Vitamin D that is naturally formed in the body through exposure to sunshine. Nature&rsquo;s Bounty Vitamin D3 helps support the production of Vitamin D all year long (1)<br />NON-GMO FORMULA: Nature&rsquo;s Bounty Vitamin D3 Softgels are non-GMO, gluten- and sugar-free, and contain no artificial colors or sweeteners<br />UNSURPASSED QUALITY AND VALUE: Using the latest breakthroughs in nutritional science and the finest ingredients, Nature&rsquo;s Bounty provides supplements of unsurpassed quality and valueA</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "availability": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "title": {
        "value": "<p>Foster &amp; Thrive&nbsp;<br />Vitamin D3<br />50 mcg (2000 IU)<br />Strong Bones &amp; Immune Support* Ear care 4</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "categortyBackgroundColorCode": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "disclaimers": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProduct": {
        "value": false,
        "propertyDataType": "PropertyBoolean"
      },
      "subTitle": {
        "value": "<p>Liquid Filled | Rapid Release<br />Gluten Free</p>\n<p>Dietary supplement</p>\n<p>100 SOFTGELS Ear care 4</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductBackgroundColorCode": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "ingredients": {
        "value": "<p>Vitamin D3, Soybean Oil, Gelatin, Glycerin, Water, Corn Oil.</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "highlightDescription": {
        "value": "<p>Antihistamine Loratadine oral solution USP, 5 mg/5 ml product 22</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductButtonColor": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "productType": {
        "value": [
          {
            "name": "Every Day Care",
            "description": "Every Day Care",
            "id": 35
          },
          {
            "name": "Family Planning",
            "description": "Family Planning",
            "id": 39
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "recommendedProductButtonUrl": {
        "value": null,
        "propertyDataType": "PropertyUrl"
      },
      "image": {
        "value": {
          "expanded": null,
          "id": 319,
          "guidValue": "d8584e15-c4bc-4900-ad03-22029628d512",
          "workId": 0,
          "providerName": null,
          "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/every-day-care--3.png"
        },
        "propertyDataType": "PropertyContentReference"
      },
      "recommendedProductLogoImage": {
        "value": null,
        "propertyDataType": "PropertyContentReference"
      },
      "warnings": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductBackgroundImage": {
        "value": null,
        "propertyDataType": "PropertyContentReference"
      },
      "recommendedProductDescription": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "volume": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "productImages": {
        "value": [
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          }
        ],
        "propertyDataType": "PropertyContentReferenceList"
      },
      "directions": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "form": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "healthNeeds": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "category": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "age": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      }
    },
    {
      "contentLink": {
        "id": 258,
        "workId": 0,
        "guidValue": "28a7c308-cf92-49b9-a142-e85b727c5977",
        "providerName": null,
        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp223222222/",
        "expanded": null
      },
      "name": "First Aid Antibiotic Product Type -1",
      "language": {
        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp223222222/",
        "displayName": "English",
        "name": "en"
      },
      "existingLanguages": [
        {
          "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp223222222/",
          "displayName": "English",
          "name": "en"
        }
      ],
      "masterLanguage": {
        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp223222222/",
        "displayName": "English",
        "name": "en"
      },
      "contentType": [
        "Page",
        "ProductDetailsPage"
      ],
      "parentLink": {
        "id": 112,
        "workId": 0,
        "guidValue": "5c0bd45c-faa2-4223-b688-a0d63097b80d",
        "providerName": null,
        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/",
        "expanded": null
      },
      "routeSegment": "pdp223222222",
      "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp223222222/",
      "changed": "2023-04-21T16:26:31Z",
      "created": "2023-04-19T16:21:33Z",
      "startPublish": "2023-04-19T16:21:38Z",
      "stopPublish": null,
      "saved": "2023-05-08T12:23:07Z",
      "status": "Published",
      "seoSection": {
        "value": null,
        "propertyDataType": "PropertyContentArea"
      },
      "gender": {
        "value": [
          {
            "name": "Gender",
            "description": "Gender",
            "id": 2
          },
          {
            "name": "Male",
            "description": "Male",
            "id": 3
          },
          {
            "name": "Female",
            "description": "Female",
            "id": 4
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "recommendedProductButtonText": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "description": {
        "value": "<p>IMMUNE SUPPORT (1): Vitamin D3 is an essential nutrient for immune support. (1) Each serving contains 2000 IU of Vitamin D for immune benefits and may assist the immune system by helping to regulate T and B-lymphocytes (1)<br />SUPPORTS STRONG BONES (1): In addition to immune support, getting a sufficient amount of Vitamin D is critical to building and maintaining strong bones in adults. (1) It is essential for calcium absorption to help support healthy bones (1)<br />YEAR-ROUND SUPPORT: Vitamin D3 supplements contain the same form of Vitamin D that is naturally formed in the body through exposure to sunshine. Nature&rsquo;s Bounty Vitamin D3 helps support the production of Vitamin D all year long (1)<br />NON-GMO FORMULA: Nature&rsquo;s Bounty Vitamin D3 Softgels are non-GMO, gluten- and sugar-free, and contain no artificial colors or sweeteners<br />UNSURPASSED QUALITY AND VALUE: Using the latest breakthroughs in nutritional science and the finest ingredients, Nature&rsquo;s Bounty provides supplements of unsurpassed quality and valueA</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "availability": {
        "value": [
          {
            "name": "Availability",
            "description": "Availability",
            "id": 16
          },
          {
            "name": "Available Now",
            "description": "Available Now",
            "id": 17
          },
          {
            "name": "Coming Soon",
            "description": "Coming Soon",
            "id": 18
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "title": {
        "value": "<p>First Aid Antibiotic</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "categortyBackgroundColorCode": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "disclaimers": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProduct": {
        "value": true,
        "propertyDataType": "PropertyBoolean"
      },
      "subTitle": {
        "value": "<p>Antihistamine Loratadine oral solution USP, 5 mg/5 ml</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductBackgroundColorCode": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "ingredients": {
        "value": "<p>Vitamin D3, Soybean Oil, Gelatin, Glycerin, Water, Corn Oil.</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "highlightDescription": {
        "value": "<p>Antihistamine Loratadine oral solution USP, 5 mg/5 ml product 2</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductButtonColor": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "productType": {
        "value": [
          {
            "name": "Every Day Care",
            "description": "Every Day Care",
            "id": 35
          },
          {
            "name": "First Aid",
            "description": "First Aid",
            "id": 36
          },
          {
            "name": "Daily Living Support",
            "description": "Daily Living Support",
            "id": 37
          },
          {
            "name": "Cosmetics",
            "description": "Cosmetics",
            "id": 38
          },
          {
            "name": "Family Planning",
            "description": "Family Planning",
            "id": 39
          },
          {
            "name": "Skin Care",
            "description": "Skin Care",
            "id": 40
          },
          {
            "name": "Foot Care",
            "description": "Foot Care",
            "id": 41
          },
          {
            "name": "Ankle Braces",
            "description": "Ankle Braces",
            "id": 42
          },
          {
            "name": "Muscle Soreness",
            "description": "Muscle Soreness",
            "id": 43
          },
          {
            "name": "Foot insoles",
            "description": "Foot insoles",
            "id": 44
          },
          {
            "name": "Facial Cleaner",
            "description": "Facial Cleaner",
            "id": 45
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "recommendedProductButtonUrl": {
        "value": null,
        "propertyDataType": "PropertyUrl"
      },
      "image": {
        "value": {
          "expanded": null,
          "id": 39,
          "guidValue": "80f9c744-55f7-4769-aed9-3f8a22d37901",
          "workId": 0,
          "providerName": null,
          "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/every-day-care.png"
        },
        "propertyDataType": "PropertyContentReference"
      },
      "recommendedProductLogoImage": {
        "value": null,
        "propertyDataType": "PropertyContentReference"
      },
      "warnings": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductBackgroundImage": {
        "value": null,
        "propertyDataType": "PropertyContentReference"
      },
      "recommendedProductDescription": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "volume": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "productImages": {
        "value": [
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          }
        ],
        "propertyDataType": "PropertyContentReferenceList"
      },
      "directions": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "form": {
        "value": [
          {
            "name": "Form",
            "description": "Form",
            "id": 8
          },
          {
            "name": "Bandage",
            "description": "Bandage",
            "id": 9
          },
          {
            "name": "Capsule",
            "description": "Capsule",
            "id": 10
          },
          {
            "name": "Chewable",
            "description": "Chewable",
            "id": 11
          },
          {
            "name": "Liquid Gel",
            "description": "Liquid Gel",
            "id": 12
          },
          {
            "name": "Nasal Spray",
            "description": "Nasal Spray",
            "id": 13
          },
          {
            "name": "Tablet",
            "description": "Tablet",
            "id": 14
          },
          {
            "name": "Topical",
            "description": "Topical",
            "id": 15
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "healthNeeds": {
        "value": [
          {
            "name": "Health Needs",
            "description": "Health Needs",
            "id": 52
          },
          {
            "name": "Beauty",
            "description": "Beauty",
            "id": 53
          },
          {
            "name": "Bone",
            "description": "Bone",
            "id": 54
          },
          {
            "name": "Digestion",
            "description": "Digestion",
            "id": 55
          },
          {
            "name": "Energy",
            "description": "Energy",
            "id": 56
          },
          {
            "name": "Eye Health",
            "description": "Eye Health",
            "id": 57
          },
          {
            "name": "General Wellness",
            "description": "General Wellness",
            "id": 58
          },
          {
            "name": "Heart",
            "description": "Heart",
            "id": 59
          },
          {
            "name": "Immune Health",
            "description": "Immune Health",
            "id": 60
          },
          {
            "name": "Joints",
            "description": "Joints",
            "id": 61
          },
          {
            "name": "Kids",
            "description": "Kids",
            "id": 62
          },
          {
            "name": "Men's Health",
            "description": "Men's Health",
            "id": 63
          },
          {
            "name": "Mood",
            "description": "Mood",
            "id": 64
          },
          {
            "name": "Prenatal & Postnatal",
            "description": "Prenatal & Postnatal",
            "id": 65
          },
          {
            "name": "Sleep",
            "description": "Sleep",
            "id": 66
          },
          {
            "name": "Stress",
            "description": "Stress",
            "id": 67
          },
          {
            "name": "Women's Health",
            "description": "Women's Health",
            "id": 68
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "category": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "age": {
        "value": [
          {
            "name": "Age",
            "description": "Age",
            "id": 5
          },
          {
            "name": "Adults",
            "description": "Adults",
            "id": 6
          },
          {
            "name": "Children",
            "description": "Children",
            "id": 7
          }
        ],
        "propertyDataType": "PropertyCategory"
      }
    },
    {
      "contentLink": {
        "id": 234,
        "workId": 0,
        "guidValue": "c4a7d354-60ce-4a09-a905-feb2f8ef8cac",
        "providerName": null,
        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2232/",
        "expanded": null
      },
      "name": "Skin Care Product Type - 1",
      "language": {
        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2232/",
        "displayName": "English",
        "name": "en"
      },
      "existingLanguages": [
        {
          "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2232/",
          "displayName": "English",
          "name": "en"
        }
      ],
      "masterLanguage": {
        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2232/",
        "displayName": "English",
        "name": "en"
      },
      "contentType": [
        "Page",
        "ProductDetailsPage"
      ],
      "parentLink": {
        "id": 112,
        "workId": 0,
        "guidValue": "5c0bd45c-faa2-4223-b688-a0d63097b80d",
        "providerName": null,
        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/",
        "expanded": null
      },
      "routeSegment": "pdp2232",
      "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2232/",
      "changed": "2023-04-21T15:39:33Z",
      "created": "2023-04-19T16:21:33Z",
      "startPublish": "2023-04-19T16:21:38Z",
      "stopPublish": null,
      "saved": "2023-04-24T14:17:42Z",
      "status": "Published",
      "seoSection": {
        "value": null,
        "propertyDataType": "PropertyContentArea"
      },
      "gender": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "recommendedProductButtonText": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "description": {
        "value": "<p>IMMUNE SUPPORT (1): Vitamin D3 is an essential nutrient for immune support. (1) Each serving contains 2000 IU of Vitamin D for immune benefits and may assist the immune system by helping to regulate T and B-lymphocytes (1)<br />SUPPORTS STRONG BONES (1): In addition to immune support, getting a sufficient amount of Vitamin D is critical to building and maintaining strong bones in adults. (1) It is essential for calcium absorption to help support healthy bones (1)<br />YEAR-ROUND SUPPORT: Vitamin D3 supplements contain the same form of Vitamin D that is naturally formed in the body through exposure to sunshine. Nature&rsquo;s Bounty Vitamin D3 helps support the production of Vitamin D all year long (1)<br />NON-GMO FORMULA: Nature&rsquo;s Bounty Vitamin D3 Softgels are non-GMO, gluten- and sugar-free, and contain no artificial colors or sweeteners<br />UNSURPASSED QUALITY AND VALUE: Using the latest breakthroughs in nutritional science and the finest ingredients, Nature&rsquo;s Bounty provides supplements of unsurpassed quality and valueA</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "availability": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "title": {
        "value": "<p>Foster &amp; Thrive&nbsp;<br />Vitamin D3<br />50 mcg (2000 IU)<br />Strong Bones &amp; Immune Support* Pain Relief4</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "categortyBackgroundColorCode": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "disclaimers": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProduct": {
        "value": null,
        "propertyDataType": "PropertyBoolean"
      },
      "subTitle": {
        "value": "<p>Liquid Filled | Rapid Release<br />Gluten Free</p>\n<p>Dietary supplement</p>\n<p>100 SOFTGELS Pain Relief4</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductBackgroundColorCode": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "ingredients": {
        "value": "<p>Vitamin D3, Soybean Oil, Gelatin, Glycerin, Water, Corn Oil.</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "highlightDescription": {
        "value": "<p>Antihistamine Loratadine oral solution USP, 5 mg/5 ml product 23</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductButtonColor": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "productType": {
        "value": [
          {
            "name": "Every Day Care",
            "description": "Every Day Care",
            "id": 35
          },
          {
            "name": "Skin Care",
            "description": "Skin Care",
            "id": 40
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "recommendedProductButtonUrl": {
        "value": null,
        "propertyDataType": "PropertyUrl"
      },
      "image": {
        "value": {
          "expanded": null,
          "id": 319,
          "guidValue": "d8584e15-c4bc-4900-ad03-22029628d512",
          "workId": 0,
          "providerName": null,
          "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/every-day-care--3.png"
        },
        "propertyDataType": "PropertyContentReference"
      },
      "recommendedProductLogoImage": {
        "value": null,
        "propertyDataType": "PropertyContentReference"
      },
      "warnings": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductBackgroundImage": {
        "value": null,
        "propertyDataType": "PropertyContentReference"
      },
      "recommendedProductDescription": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "volume": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "productImages": {
        "value": [
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          }
        ],
        "propertyDataType": "PropertyContentReferenceList"
      },
      "directions": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "form": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "healthNeeds": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "category": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "age": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      }
    },
    {
      "contentLink": {
        "id": 239,
        "workId": 0,
        "guidValue": "87dc76c7-817d-42bf-9dda-b46feece31f5",
        "providerName": null,
        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22222222/",
        "expanded": null
      },
      "name": "Cosmetics product Type - 3",
      "language": {
        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22222222/",
        "displayName": "English",
        "name": "en"
      },
      "existingLanguages": [
        {
          "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22222222/",
          "displayName": "English",
          "name": "en"
        }
      ],
      "masterLanguage": {
        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22222222/",
        "displayName": "English",
        "name": "en"
      },
      "contentType": [
        "Page",
        "ProductDetailsPage"
      ],
      "parentLink": {
        "id": 112,
        "workId": 0,
        "guidValue": "5c0bd45c-faa2-4223-b688-a0d63097b80d",
        "providerName": null,
        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/",
        "expanded": null
      },
      "routeSegment": "pdp22222222",
      "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22222222/",
      "changed": "2023-04-21T15:54:44Z",
      "created": "2023-04-19T16:21:33Z",
      "startPublish": "2023-04-19T16:21:38Z",
      "stopPublish": null,
      "saved": "2023-05-05T09:08:33Z",
      "status": "Published",
      "seoSection": {
        "value": null,
        "propertyDataType": "PropertyContentArea"
      },
      "gender": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "recommendedProductButtonText": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "description": {
        "value": "<p>IMMUNE SUPPORT (1): Vitamin D3 is an essential nutrient for immune support. (1) Each serving contains 2000 IU of Vitamin D for immune benefits and may assist the immune system by helping to regulate T and B-lymphocytes (1)<br />SUPPORTS STRONG BONES (1): In addition to immune support, getting a sufficient amount of Vitamin D is critical to building and maintaining strong bones in adults. (1) It is essential for calcium absorption to help support healthy bones (1)<br />YEAR-ROUND SUPPORT: Vitamin D3 supplements contain the same form of Vitamin D that is naturally formed in the body through exposure to sunshine. Nature&rsquo;s Bounty Vitamin D3 helps support the production of Vitamin D all year long (1)<br />NON-GMO FORMULA: Nature&rsquo;s Bounty Vitamin D3 Softgels are non-GMO, gluten- and sugar-free, and contain no artificial colors or sweeteners<br />UNSURPASSED QUALITY AND VALUE: Using the latest breakthroughs in nutritional science and the finest ingredients, Nature&rsquo;s Bounty provides supplements of unsurpassed quality and valueA</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "availability": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "title": {
        "value": "<p>Foster &amp; Thrive&nbsp;<br />Vitamin D3<br />50 mcg (2000 IU)<br />Strong Bones &amp; Immune Support* Nutrition 1</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "categortyBackgroundColorCode": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "disclaimers": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProduct": {
        "value": false,
        "propertyDataType": "PropertyBoolean"
      },
      "subTitle": {
        "value": "<p>Liquid Filled | Rapid Release<br />Gluten Free</p>\n<p>Dietary supplement</p>\n<p>100 SOFTGELS Nutrition 1</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductBackgroundColorCode": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "ingredients": {
        "value": "<p>Vitamin D3, Soybean Oil, Gelatin, Glycerin, Water, Corn Oil.</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "highlightDescription": {
        "value": "<p>Antihistamine Loratadine oral solution USP, 5 mg/5 ml product 19</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductButtonColor": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "productType": {
        "value": [
          {
            "name": "Every Day Care",
            "description": "Every Day Care",
            "id": 35
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "recommendedProductButtonUrl": {
        "value": null,
        "propertyDataType": "PropertyUrl"
      },
      "image": {
        "value": {
          "expanded": null,
          "id": 319,
          "guidValue": "d8584e15-c4bc-4900-ad03-22029628d512",
          "workId": 0,
          "providerName": null,
          "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/every-day-care--3.png"
        },
        "propertyDataType": "PropertyContentReference"
      },
      "recommendedProductLogoImage": {
        "value": null,
        "propertyDataType": "PropertyContentReference"
      },
      "warnings": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductBackgroundImage": {
        "value": null,
        "propertyDataType": "PropertyContentReference"
      },
      "recommendedProductDescription": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "volume": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "productImages": {
        "value": [
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          }
        ],
        "propertyDataType": "PropertyContentReferenceList"
      },
      "directions": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "form": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "healthNeeds": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "category": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "age": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      }
    },
    {
      "contentLink": {
        "id": 240,
        "workId": 0,
        "guidValue": "9966a7a0-6882-4aba-9bd2-363efa8e1926",
        "providerName": null,
        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp23/",
        "expanded": null
      },
      "name": "Daily Living Support  Product Type - 11",
      "language": {
        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp23/",
        "displayName": "English",
        "name": "en"
      },
      "existingLanguages": [
        {
          "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp23/",
          "displayName": "English",
          "name": "en"
        }
      ],
      "masterLanguage": {
        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp23/",
        "displayName": "English",
        "name": "en"
      },
      "contentType": [
        "Page",
        "ProductDetailsPage"
      ],
      "parentLink": {
        "id": 112,
        "workId": 0,
        "guidValue": "5c0bd45c-faa2-4223-b688-a0d63097b80d",
        "providerName": null,
        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/",
        "expanded": null
      },
      "routeSegment": "pdp23",
      "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp23/",
      "changed": "2023-04-21T15:56:47Z",
      "created": "2023-04-19T16:21:33Z",
      "startPublish": "2023-04-19T16:21:38Z",
      "stopPublish": null,
      "saved": "2023-05-05T09:07:42Z",
      "status": "Published",
      "seoSection": {
        "value": null,
        "propertyDataType": "PropertyContentArea"
      },
      "gender": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "recommendedProductButtonText": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "description": {
        "value": "<p>IMMUNE SUPPORT (1): Vitamin D3 is an essential nutrient for immune support. (1) Each serving contains 2000 IU of Vitamin D for immune benefits and may assist the immune system by helping to regulate T and B-lymphocytes (1)<br />SUPPORTS STRONG BONES (1): In addition to immune support, getting a sufficient amount of Vitamin D is critical to building and maintaining strong bones in adults. (1) It is essential for calcium absorption to help support healthy bones (1)<br />YEAR-ROUND SUPPORT: Vitamin D3 supplements contain the same form of Vitamin D that is naturally formed in the body through exposure to sunshine. Nature&rsquo;s Bounty Vitamin D3 helps support the production of Vitamin D all year long (1)<br />NON-GMO FORMULA: Nature&rsquo;s Bounty Vitamin D3 Softgels are non-GMO, gluten- and sugar-free, and contain no artificial colors or sweeteners<br />UNSURPASSED QUALITY AND VALUE: Using the latest breakthroughs in nutritional science and the finest ingredients, Nature&rsquo;s Bounty provides supplements of unsurpassed quality and valueA</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "availability": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "title": {
        "value": "<p>Foster &amp; Thrive&nbsp;<br />Vitamin D3<br />50 mcg (2000 IU)<br />Strong Bones &amp; Immune Support* Pain Relief 4</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "categortyBackgroundColorCode": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "disclaimers": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProduct": {
        "value": false,
        "propertyDataType": "PropertyBoolean"
      },
      "subTitle": {
        "value": "<p>Liquid Filled | Rapid Release<br />Gluten Free</p>\n<p>Dietary supplement</p>\n<p>100 SOFTGELS Pain Relief 4</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductBackgroundColorCode": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "ingredients": {
        "value": "<p>Vitamin D3, Soybean Oil, Gelatin, Glycerin, Water, Corn Oil.</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "highlightDescription": {
        "value": "<p>#Antihistamine Loratadine oral solution USP, 5 mg/5 ml product 18</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductButtonColor": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "productType": {
        "value": [
          {
            "name": "Every Day Care",
            "description": "Every Day Care",
            "id": 35
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "recommendedProductButtonUrl": {
        "value": null,
        "propertyDataType": "PropertyUrl"
      },
      "image": {
        "value": {
          "expanded": null,
          "id": 319,
          "guidValue": "d8584e15-c4bc-4900-ad03-22029628d512",
          "workId": 0,
          "providerName": null,
          "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/every-day-care--3.png"
        },
        "propertyDataType": "PropertyContentReference"
      },
      "recommendedProductLogoImage": {
        "value": null,
        "propertyDataType": "PropertyContentReference"
      },
      "warnings": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductBackgroundImage": {
        "value": null,
        "propertyDataType": "PropertyContentReference"
      },
      "recommendedProductDescription": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "volume": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "productImages": {
        "value": [
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          }
        ],
        "propertyDataType": "PropertyContentReferenceList"
      },
      "directions": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "form": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "healthNeeds": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "category": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "age": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      }
    },
    {
      "contentLink": {
        "id": 246,
        "workId": 0,
        "guidValue": "bbcf5357-cd6f-4a73-9751-9be8d3a1c2e9",
        "providerName": null,
        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22322/",
        "expanded": null
      },
      "name": "First Aid  Product Type - 1",
      "language": {
        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22322/",
        "displayName": "English",
        "name": "en"
      },
      "existingLanguages": [
        {
          "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22322/",
          "displayName": "English",
          "name": "en"
        }
      ],
      "masterLanguage": {
        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22322/",
        "displayName": "English",
        "name": "en"
      },
      "contentType": [
        "Page",
        "ProductDetailsPage"
      ],
      "parentLink": {
        "id": 112,
        "workId": 0,
        "guidValue": "5c0bd45c-faa2-4223-b688-a0d63097b80d",
        "providerName": null,
        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/",
        "expanded": null
      },
      "routeSegment": "pdp22322",
      "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22322/",
      "changed": "2023-04-21T16:08:12Z",
      "created": "2023-04-19T16:21:33Z",
      "startPublish": "2023-04-19T16:21:38Z",
      "stopPublish": null,
      "saved": "2023-04-24T14:12:06Z",
      "status": "Published",
      "seoSection": {
        "value": null,
        "propertyDataType": "PropertyContentArea"
      },
      "gender": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "recommendedProductButtonText": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "description": {
        "value": "<p>IMMUNE SUPPORT (1): Vitamin D3 is an essential nutrient for immune support. (1) Each serving contains 2000 IU of Vitamin D for immune benefits and may assist the immune system by helping to regulate T and B-lymphocytes (1)<br />SUPPORTS STRONG BONES (1): In addition to immune support, getting a sufficient amount of Vitamin D is critical to building and maintaining strong bones in adults. (1) It is essential for calcium absorption to help support healthy bones (1)<br />YEAR-ROUND SUPPORT: Vitamin D3 supplements contain the same form of Vitamin D that is naturally formed in the body through exposure to sunshine. Nature&rsquo;s Bounty Vitamin D3 helps support the production of Vitamin D all year long (1)<br />NON-GMO FORMULA: Nature&rsquo;s Bounty Vitamin D3 Softgels are non-GMO, gluten- and sugar-free, and contain no artificial colors or sweeteners<br />UNSURPASSED QUALITY AND VALUE: Using the latest breakthroughs in nutritional science and the finest ingredients, Nature&rsquo;s Bounty provides supplements of unsurpassed quality and valueA</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "availability": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "title": {
        "value": "<p>Foster &amp; Thrive&nbsp;<br />Vitamin D3<br />50 mcg (2000 IU)<br />Strong Bones &amp; Immune Support* Pain Relief5</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "categortyBackgroundColorCode": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "disclaimers": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProduct": {
        "value": false,
        "propertyDataType": "PropertyBoolean"
      },
      "subTitle": {
        "value": "<p>Liquid Filled | Rapid Release<br />Gluten Free</p>\n<p>Dietary supplement</p>\n<p>100 SOFTGELS Pain Relief5</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductBackgroundColorCode": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "ingredients": {
        "value": "<p>Vitamin D3, Soybean Oil, Gelatin, Glycerin, Water, Corn Oil.</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "highlightDescription": {
        "value": "<p>Antihistamine Loratadine oral solution USP, 5 mg/5 ml product 14</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductButtonColor": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "productType": {
        "value": [
          {
            "name": "Every Day Care",
            "description": "Every Day Care",
            "id": 35
          },
          {
            "name": "First Aid",
            "description": "First Aid",
            "id": 36
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "recommendedProductButtonUrl": {
        "value": null,
        "propertyDataType": "PropertyUrl"
      },
      "image": {
        "value": {
          "expanded": null,
          "id": 39,
          "guidValue": "80f9c744-55f7-4769-aed9-3f8a22d37901",
          "workId": 0,
          "providerName": null,
          "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/every-day-care.png"
        },
        "propertyDataType": "PropertyContentReference"
      },
      "recommendedProductLogoImage": {
        "value": null,
        "propertyDataType": "PropertyContentReference"
      },
      "warnings": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductBackgroundImage": {
        "value": null,
        "propertyDataType": "PropertyContentReference"
      },
      "recommendedProductDescription": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "volume": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "productImages": {
        "value": [
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          }
        ],
        "propertyDataType": "PropertyContentReferenceList"
      },
      "directions": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "form": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "healthNeeds": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "category": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "age": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      }
    }
  ]
};

const diagnosticCareData = {
  "totalMatching": 5,
  "results": [
    {
      "contentLink": {
        "id": 226,
        "workId": 0,
        "guidValue": "752d6432-aaeb-41a5-bea5-66c3609ef70a",
        "providerName": null,
        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp222/",
        "expanded": null
      },
      "name": "Gloves and Masks Product Type - 1",
      "language": {
        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp222/",
        "displayName": "English",
        "name": "en"
      },
      "existingLanguages": [
        {
          "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp222/",
          "displayName": "English",
          "name": "en"
        }
      ],
      "masterLanguage": {
        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp222/",
        "displayName": "English",
        "name": "en"
      },
      "contentType": [
        "Page",
        "ProductDetailsPage"
      ],
      "parentLink": {
        "id": 112,
        "workId": 0,
        "guidValue": "5c0bd45c-faa2-4223-b688-a0d63097b80d",
        "providerName": null,
        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/",
        "expanded": null
      },
      "routeSegment": "pdp222",
      "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp222/",
      "changed": "2023-04-21T14:09:34Z",
      "created": "2023-04-19T16:21:33Z",
      "startPublish": "2023-04-19T16:21:38Z",
      "stopPublish": null,
      "saved": "2023-05-08T14:47:25Z",
      "status": "Published",
      "seoSection": {
        "value": null,
        "propertyDataType": "PropertyContentArea"
      },
      "gender": {
        "value": [
          {
            "name": "Gender",
            "description": "Gender",
            "id": 2
          },
          {
            "name": "Male",
            "description": "Male",
            "id": 3
          },
          {
            "name": "Female",
            "description": "Female",
            "id": 4
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "recommendedProductButtonText": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "description": {
        "value": "<p>IMMUNE SUPPORT (1): Vitamin D3 is an essential nutrient for immune support. (1) Each serving contains 2000 IU of Vitamin D for immune benefits and may assist the immune system by helping to regulate T and B-lymphocytes (1)<br />SUPPORTS STRONG BONES (1): In addition to immune support, getting a sufficient amount of Vitamin D is critical to building and maintaining strong bones in adults. (1) It is essential for calcium absorption to help support healthy bones (1)<br />YEAR-ROUND SUPPORT: Vitamin D3 supplements contain the same form of Vitamin D that is naturally formed in the body through exposure to sunshine. Nature&rsquo;s Bounty Vitamin D3 helps support the production of Vitamin D all year long (1)<br />NON-GMO FORMULA: Nature&rsquo;s Bounty Vitamin D3 Softgels are non-GMO, gluten- and sugar-free, and contain no artificial colors or sweeteners<br />UNSURPASSED QUALITY AND VALUE: Using the latest breakthroughs in nutritional science and the finest ingredients, Nature&rsquo;s Bounty provides supplements of unsurpassed quality and valueA</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "availability": {
        "value": [
          {
            "name": "Availability",
            "description": "Availability",
            "id": 16
          },
          {
            "name": "Available Now",
            "description": "Available Now",
            "id": 17
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "title": {
        "value": "<p>Foster &amp; Thrive&nbsp;<br />Vitamin D3<br />50 mcg (2000 IU)<br />Strong Bones &amp; Immune Support* Ear care&nbsp;</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "categortyBackgroundColorCode": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "disclaimers": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProduct": {
        "value": false,
        "propertyDataType": "PropertyBoolean"
      },
      "subTitle": {
        "value": "<p>Liquid Filled | Rapid Release<br />Gluten Free</p>\n<p>Dietary supplement</p>\n<p>100 SOFTGELS Ear care&nbsp;</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductBackgroundColorCode": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "ingredients": {
        "value": "<p>Vitamin D3, Soybean Oil, Gelatin, Glycerin, Water, Corn Oil.</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "highlightDescription": {
        "value": "<p>Antihistamine Loratadine oral solution USP, 5 mg/5 ml product 26</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductButtonColor": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "productType": {
        "value": [
          {
            "name": "Diagnostic Care",
            "description": "Diagnostic Care",
            "id": 46
          },
          {
            "name": "Family Planning",
            "description": "Family Planning",
            "id": 50
          },
          {
            "name": "Blood Testing",
            "description": "Blood Testing",
            "id": 51
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "recommendedProductButtonUrl": {
        "value": null,
        "propertyDataType": "PropertyUrl"
      },
      "image": {
        "value": {
          "expanded": null,
          "id": 322,
          "guidValue": "565101df-266e-4de2-82cd-31ca7df431fc",
          "workId": 0,
          "providerName": null,
          "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/diagonastic-care-3.png"
        },
        "propertyDataType": "PropertyContentReference"
      },
      "recommendedProductLogoImage": {
        "value": null,
        "propertyDataType": "PropertyContentReference"
      },
      "warnings": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductBackgroundImage": {
        "value": null,
        "propertyDataType": "PropertyContentReference"
      },
      "recommendedProductDescription": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "volume": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "productImages": {
        "value": [
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          }
        ],
        "propertyDataType": "PropertyContentReferenceList"
      },
      "directions": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "form": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "healthNeeds": {
        "value": [
          {
            "name": "Health Needs",
            "description": "Health Needs",
            "id": 52
          },
          {
            "name": "Beauty",
            "description": "Beauty",
            "id": 53
          },
          {
            "name": "Bone",
            "description": "Bone",
            "id": 54
          },
          {
            "name": "Digestion",
            "description": "Digestion",
            "id": 55
          },
          {
            "name": "Men's Health",
            "description": "Men's Health",
            "id": 63
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "category": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "age": {
        "value": [
          {
            "name": "Age",
            "description": "Age",
            "id": 5
          },
          {
            "name": "Children",
            "description": "Children",
            "id": 7
          }
        ],
        "propertyDataType": "PropertyCategory"
      }
    },
    {
      "contentLink": {
        "id": 232,
        "workId": 0,
        "guidValue": "7cb40110-1316-4d0f-bc5d-fecf49a43154",
        "providerName": null,
        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp223/",
        "expanded": null
      },
      "name": "Thermometer Product Type - 1",
      "language": {
        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp223/",
        "displayName": "English",
        "name": "en"
      },
      "existingLanguages": [
        {
          "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp223/",
          "displayName": "English",
          "name": "en"
        }
      ],
      "masterLanguage": {
        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp223/",
        "displayName": "English",
        "name": "en"
      },
      "contentType": [
        "Page",
        "ProductDetailsPage"
      ],
      "parentLink": {
        "id": 112,
        "workId": 0,
        "guidValue": "5c0bd45c-faa2-4223-b688-a0d63097b80d",
        "providerName": null,
        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/",
        "expanded": null
      },
      "routeSegment": "pdp223",
      "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp223/",
      "changed": "2023-04-21T15:32:49Z",
      "created": "2023-04-19T16:21:33Z",
      "startPublish": "2023-04-19T16:21:38Z",
      "stopPublish": null,
      "saved": "2023-05-05T09:03:26Z",
      "status": "Published",
      "seoSection": {
        "value": null,
        "propertyDataType": "PropertyContentArea"
      },
      "gender": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "recommendedProductButtonText": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "description": {
        "value": "<p>IMMUNE SUPPORT (1): Vitamin D3 is an essential nutrient for immune support. (1) Each serving contains 2000 IU of Vitamin D for immune benefits and may assist the immune system by helping to regulate T and B-lymphocytes (1)<br />SUPPORTS STRONG BONES (1): In addition to immune support, getting a sufficient amount of Vitamin D is critical to building and maintaining strong bones in adults. (1) It is essential for calcium absorption to help support healthy bones (1)<br />YEAR-ROUND SUPPORT: Vitamin D3 supplements contain the same form of Vitamin D that is naturally formed in the body through exposure to sunshine. Nature&rsquo;s Bounty Vitamin D3 helps support the production of Vitamin D all year long (1)<br />NON-GMO FORMULA: Nature&rsquo;s Bounty Vitamin D3 Softgels are non-GMO, gluten- and sugar-free, and contain no artificial colors or sweeteners<br />UNSURPASSED QUALITY AND VALUE: Using the latest breakthroughs in nutritional science and the finest ingredients, Nature&rsquo;s Bounty provides supplements of unsurpassed quality and valueA</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "availability": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "title": {
        "value": "<p>Foster &amp; Thrive&nbsp;<br />Vitamin D3<br />50 mcg (2000 IU)<br />Strong Bones &amp; Immune Support* Pain Relief3</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "categortyBackgroundColorCode": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "disclaimers": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProduct": {
        "value": null,
        "propertyDataType": "PropertyBoolean"
      },
      "subTitle": {
        "value": "<p>Liquid Filled | Rapid Release<br />Gluten Free</p>\n<p>Dietary supplement</p>\n<p>100 SOFTGELS Pain Relief3</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductBackgroundColorCode": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "ingredients": {
        "value": "<p>Vitamin D3, Soybean Oil, Gelatin, Glycerin, Water, Corn Oil.</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "highlightDescription": {
        "value": "<p>Antihistamine Loratadine oral solution USP, 5 mg/5 ml product 25</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductButtonColor": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "productType": {
        "value": [
          {
            "name": "Diagnostic Care",
            "description": "Diagnostic Care",
            "id": 46
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "recommendedProductButtonUrl": {
        "value": null,
        "propertyDataType": "PropertyUrl"
      },
      "image": {
        "value": {
          "expanded": null,
          "id": 321,
          "guidValue": "50995556-f30f-4f21-8926-6f250162cbe2",
          "workId": 0,
          "providerName": null,
          "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/diagonastic-care-2.png"
        },
        "propertyDataType": "PropertyContentReference"
      },
      "recommendedProductLogoImage": {
        "value": null,
        "propertyDataType": "PropertyContentReference"
      },
      "warnings": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductBackgroundImage": {
        "value": null,
        "propertyDataType": "PropertyContentReference"
      },
      "recommendedProductDescription": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "volume": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "productImages": {
        "value": [
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          }
        ],
        "propertyDataType": "PropertyContentReferenceList"
      },
      "directions": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "form": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "healthNeeds": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "category": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "age": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      }
    },
    {
      "contentLink": {
        "id": 233,
        "workId": 0,
        "guidValue": "ae8622c7-6894-4ed4-b68d-1664a3c60d70",
        "providerName": null,
        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2222/",
        "expanded": null
      },
      "name": "Diagonastic care Product Type - 1",
      "language": {
        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2222/",
        "displayName": "English",
        "name": "en"
      },
      "existingLanguages": [
        {
          "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2222/",
          "displayName": "English",
          "name": "en"
        }
      ],
      "masterLanguage": {
        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2222/",
        "displayName": "English",
        "name": "en"
      },
      "contentType": [
        "Page",
        "ProductDetailsPage"
      ],
      "parentLink": {
        "id": 112,
        "workId": 0,
        "guidValue": "5c0bd45c-faa2-4223-b688-a0d63097b80d",
        "providerName": null,
        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/",
        "expanded": null
      },
      "routeSegment": "pdp2222",
      "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2222/",
      "changed": "2023-04-21T15:37:34Z",
      "created": "2023-04-19T16:21:33Z",
      "startPublish": "2023-04-19T16:21:38Z",
      "stopPublish": null,
      "saved": "2023-05-05T09:02:33Z",
      "status": "Published",
      "seoSection": {
        "value": null,
        "propertyDataType": "PropertyContentArea"
      },
      "gender": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "recommendedProductButtonText": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "description": {
        "value": "<p>IMMUNE SUPPORT (1): Vitamin D3 is an essential nutrient for immune support. (1) Each serving contains 2000 IU of Vitamin D for immune benefits and may assist the immune system by helping to regulate T and B-lymphocytes (1)<br />SUPPORTS STRONG BONES (1): In addition to immune support, getting a sufficient amount of Vitamin D is critical to building and maintaining strong bones in adults. (1) It is essential for calcium absorption to help support healthy bones (1)<br />YEAR-ROUND SUPPORT: Vitamin D3 supplements contain the same form of Vitamin D that is naturally formed in the body through exposure to sunshine. Nature&rsquo;s Bounty Vitamin D3 helps support the production of Vitamin D all year long (1)<br />NON-GMO FORMULA: Nature&rsquo;s Bounty Vitamin D3 Softgels are non-GMO, gluten- and sugar-free, and contain no artificial colors or sweeteners<br />UNSURPASSED QUALITY AND VALUE: Using the latest breakthroughs in nutritional science and the finest ingredients, Nature&rsquo;s Bounty provides supplements of unsurpassed quality and valueA</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "availability": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "title": {
        "value": "<p>Foster &amp; Thrive&nbsp;<br />Vitamin D3<br />50 mcg (2000 IU)<br />Strong Bones &amp; Immune Support* Ear care 2</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "categortyBackgroundColorCode": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "disclaimers": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProduct": {
        "value": null,
        "propertyDataType": "PropertyBoolean"
      },
      "subTitle": {
        "value": "<p>Liquid Filled | Rapid Release<br />Gluten Free</p>\n<p>Dietary supplement</p>\n<p>100 SOFTGELS Ear care 2</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductBackgroundColorCode": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "ingredients": {
        "value": "<p>Vitamin D3, Soybean Oil, Gelatin, Glycerin, Water, Corn Oil.</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "highlightDescription": {
        "value": "<p>Antihistamine Loratadine oral solution USP, 5 mg/5 ml product 24</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductButtonColor": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "productType": {
        "value": [
          {
            "name": "Diagnostic Care",
            "description": "Diagnostic Care",
            "id": 46
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "recommendedProductButtonUrl": {
        "value": null,
        "propertyDataType": "PropertyUrl"
      },
      "image": {
        "value": {
          "expanded": null,
          "id": 320,
          "guidValue": "7c68471c-7bef-4e6f-a642-b512b235eeae",
          "workId": 0,
          "providerName": null,
          "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/diagonastic-care-1.png"
        },
        "propertyDataType": "PropertyContentReference"
      },
      "recommendedProductLogoImage": {
        "value": null,
        "propertyDataType": "PropertyContentReference"
      },
      "warnings": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductBackgroundImage": {
        "value": null,
        "propertyDataType": "PropertyContentReference"
      },
      "recommendedProductDescription": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "volume": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "productImages": {
        "value": [
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          }
        ],
        "propertyDataType": "PropertyContentReferenceList"
      },
      "directions": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "form": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "healthNeeds": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "category": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "age": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      }
    },
    {
      "contentLink": {
        "id": 203,
        "workId": 0,
        "guidValue": "05e73ba1-7de6-40c4-b59d-4b53b037d44a",
        "providerName": null,
        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2/",
        "expanded": null
      },
      "name": "Blood Testing Product type - 1",
      "language": {
        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2/",
        "displayName": "English",
        "name": "en"
      },
      "existingLanguages": [
        {
          "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2/",
          "displayName": "English",
          "name": "en"
        }
      ],
      "masterLanguage": {
        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2/",
        "displayName": "English",
        "name": "en"
      },
      "contentType": [
        "Page",
        "ProductDetailsPage"
      ],
      "parentLink": {
        "id": 112,
        "workId": 0,
        "guidValue": "5c0bd45c-faa2-4223-b688-a0d63097b80d",
        "providerName": null,
        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/",
        "expanded": null
      },
      "routeSegment": "pdp2",
      "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2/",
      "changed": "2023-04-21T09:46:18Z",
      "created": "2023-04-19T16:21:33Z",
      "startPublish": "2023-04-19T16:21:38Z",
      "stopPublish": null,
      "saved": "2023-05-08T14:43:12Z",
      "status": "Published",
      "seoSection": {
        "value": null,
        "propertyDataType": "PropertyContentArea"
      },
      "gender": {
        "value": [
          {
            "name": "Gender",
            "description": "Gender",
            "id": 2
          },
          {
            "name": "Male",
            "description": "Male",
            "id": 3
          },
          {
            "name": "Female",
            "description": "Female",
            "id": 4
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "recommendedProductButtonText": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "description": {
        "value": "<p>IMMUNE SUPPORT (1): Vitamin D3 is an essential nutrient for immune support. (1) Each serving contains 2000 IU of Vitamin D for immune benefits and may assist the immune system by helping to regulate T and B-lymphocytes (1)<br />SUPPORTS STRONG BONES (1): In addition to immune support, getting a sufficient amount of Vitamin D is critical to building and maintaining strong bones in adults. (1) It is essential for calcium absorption to help support healthy bones (1)<br />YEAR-ROUND SUPPORT: Vitamin D3 supplements contain the same form of Vitamin D that is naturally formed in the body through exposure to sunshine. Nature&rsquo;s Bounty Vitamin D3 helps support the production of Vitamin D all year long (1)<br />NON-GMO FORMULA: Nature&rsquo;s Bounty Vitamin D3 Softgels are non-GMO, gluten- and sugar-free, and contain no artificial colors or sweeteners<br />UNSURPASSED QUALITY AND VALUE: Using the latest breakthroughs in nutritional science and the finest ingredients, Nature&rsquo;s Bounty provides supplements of unsurpassed quality and valueA</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "availability": {
        "value": [
          {
            "name": "Availability",
            "description": "Availability",
            "id": 16
          },
          {
            "name": "Coming Soon",
            "description": "Coming Soon",
            "id": 18
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "title": {
        "value": "<p>Foster &amp; Thrive&nbsp;<br />Vitamin D3<br />50 mcg (2000 IU)<br />Strong Bones &amp; Immune Support* Allergy Relief2</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "categortyBackgroundColorCode": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "disclaimers": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProduct": {
        "value": null,
        "propertyDataType": "PropertyBoolean"
      },
      "subTitle": {
        "value": "<p>Liquid Filled | Rapid Release<br />Gluten Free</p>\n<p>Dietary supplement</p>\n<p>100 SOFTGELS Allergy Relief2</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductBackgroundColorCode": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "ingredients": {
        "value": "<p>Vitamin D3, Soybean Oil, Gelatin, Glycerin, Water, Corn Oil.</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "highlightDescription": {
        "value": "<p>Antihistamine Loratadine oral solution USP, 5 mg/5 ml product 28</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductButtonColor": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "productType": {
        "value": [
          {
            "name": "Diagnostic Care",
            "description": "Diagnostic Care",
            "id": 46
          },
          {
            "name": "Thermometer",
            "description": "Thermometer",
            "id": 48
          },
          {
            "name": "Blood Testing",
            "description": "Blood Testing",
            "id": 51
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "recommendedProductButtonUrl": {
        "value": null,
        "propertyDataType": "PropertyUrl"
      },
      "image": {
        "value": {
          "expanded": null,
          "id": 324,
          "guidValue": "d4e91af4-f749-44dc-8ed0-e2adc449f99c",
          "workId": 0,
          "providerName": null,
          "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/diagonastic-care-5.png"
        },
        "propertyDataType": "PropertyContentReference"
      },
      "recommendedProductLogoImage": {
        "value": null,
        "propertyDataType": "PropertyContentReference"
      },
      "warnings": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductBackgroundImage": {
        "value": null,
        "propertyDataType": "PropertyContentReference"
      },
      "recommendedProductDescription": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "volume": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "productImages": {
        "value": [
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          }
        ],
        "propertyDataType": "PropertyContentReferenceList"
      },
      "directions": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "form": {
        "value": [
          {
            "name": "Form",
            "description": "Form",
            "id": 8
          },
          {
            "name": "Chewable",
            "description": "Chewable",
            "id": 11
          },
          {
            "name": "Liquid Gel",
            "description": "Liquid Gel",
            "id": 12
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "healthNeeds": {
        "value": [
          {
            "name": "Health Needs",
            "description": "Health Needs",
            "id": 52
          },
          {
            "name": "Digestion",
            "description": "Digestion",
            "id": 55
          },
          {
            "name": "Energy",
            "description": "Energy",
            "id": 56
          },
          {
            "name": "Immune Health",
            "description": "Immune Health",
            "id": 60
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "category": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "age": {
        "value": [
          {
            "name": "Age",
            "description": "Age",
            "id": 5
          },
          {
            "name": "Children",
            "description": "Children",
            "id": 7
          }
        ],
        "propertyDataType": "PropertyCategory"
      }
    },
    {
      "contentLink": {
        "id": 204,
        "workId": 0,
        "guidValue": "25d104f3-d76b-49a4-bee3-67c1b049490f",
        "providerName": null,
        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22/",
        "expanded": null
      },
      "name": "Family Planning-Product Type - 1",
      "language": {
        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22/",
        "displayName": "English",
        "name": "en"
      },
      "existingLanguages": [
        {
          "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22/",
          "displayName": "English",
          "name": "en"
        }
      ],
      "masterLanguage": {
        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22/",
        "displayName": "English",
        "name": "en"
      },
      "contentType": [
        "Page",
        "ProductDetailsPage"
      ],
      "parentLink": {
        "id": 112,
        "workId": 0,
        "guidValue": "5c0bd45c-faa2-4223-b688-a0d63097b80d",
        "providerName": null,
        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/",
        "expanded": null
      },
      "routeSegment": "pdp22",
      "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22/",
      "changed": "2023-04-21T09:48:18Z",
      "created": "2023-04-19T16:21:33Z",
      "startPublish": "2023-04-19T16:21:38Z",
      "stopPublish": null,
      "saved": "2023-05-08T14:45:00Z",
      "status": "Published",
      "seoSection": {
        "value": null,
        "propertyDataType": "PropertyContentArea"
      },
      "gender": {
        "value": [
          {
            "name": "Male",
            "description": "Male",
            "id": 3
          },
          {
            "name": "Female",
            "description": "Female",
            "id": 4
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "recommendedProductButtonText": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "description": {
        "value": "<p>IMMUNE SUPPORT (1): Vitamin D3 is an essential nutrient for immune support. (1) Each serving contains 2000 IU of Vitamin D for immune benefits and may assist the immune system by helping to regulate T and B-lymphocytes (1)<br />SUPPORTS STRONG BONES (1): In addition to immune support, getting a sufficient amount of Vitamin D is critical to building and maintaining strong bones in adults. (1) It is essential for calcium absorption to help support healthy bones (1)<br />YEAR-ROUND SUPPORT: Vitamin D3 supplements contain the same form of Vitamin D that is naturally formed in the body through exposure to sunshine. Nature&rsquo;s Bounty Vitamin D3 helps support the production of Vitamin D all year long (1)<br />NON-GMO FORMULA: Nature&rsquo;s Bounty Vitamin D3 Softgels are non-GMO, gluten- and sugar-free, and contain no artificial colors or sweeteners<br />UNSURPASSED QUALITY AND VALUE: Using the latest breakthroughs in nutritional science and the finest ingredients, Nature&rsquo;s Bounty provides supplements of unsurpassed quality and valueA</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "availability": {
        "value": [
          {
            "name": "Availability",
            "description": "Availability",
            "id": 16
          },
          {
            "name": "Available Now",
            "description": "Available Now",
            "id": 17
          },
          {
            "name": "Coming Soon",
            "description": "Coming Soon",
            "id": 18
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "title": {
        "value": "<p>Foster &amp; Thrive&nbsp;<br />Vitamin D3<br />50 mcg (2000 IU)<br />Strong Bones &amp; Immune Support* Allergy Relief3</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "categortyBackgroundColorCode": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "disclaimers": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProduct": {
        "value": null,
        "propertyDataType": "PropertyBoolean"
      },
      "subTitle": {
        "value": "<p>Liquid Filled | Rapid Release<br />Gluten Free</p>\n<p>Dietary supplement</p>\n<p>100 SOFTGELS Allergy Relief3</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductBackgroundColorCode": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "ingredients": {
        "value": "<p>Vitamin D3, Soybean Oil, Gelatin, Glycerin, Water, Corn Oil.</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "highlightDescription": {
        "value": "<p>Antihistamine Loratadine oral solution USP, 5 mg/5 ml product 27</p>",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductButtonColor": {
        "value": "",
        "propertyDataType": "PropertyLongString"
      },
      "productType": {
        "value": [
          {
            "name": "Diagnostic Care",
            "description": "Diagnostic Care",
            "id": 46
          },
          {
            "name": "Family Planning",
            "description": "Family Planning",
            "id": 50
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "recommendedProductButtonUrl": {
        "value": null,
        "propertyDataType": "PropertyUrl"
      },
      "image": {
        "value": {
          "expanded": null,
          "id": 323,
          "guidValue": "17fd4bbb-8ce1-4ce8-909b-ab67aba235f8",
          "workId": 0,
          "providerName": null,
          "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/diagonastic-care-4.png"
        },
        "propertyDataType": "PropertyContentReference"
      },
      "recommendedProductLogoImage": {
        "value": null,
        "propertyDataType": "PropertyContentReference"
      },
      "warnings": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "recommendedProductBackgroundImage": {
        "value": null,
        "propertyDataType": "PropertyContentReference"
      },
      "recommendedProductDescription": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "volume": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "productImages": {
        "value": [
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          },
          {
            "expanded": null,
            "id": 200,
            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            "workId": 0,
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
          }
        ],
        "propertyDataType": "PropertyContentReferenceList"
      },
      "directions": {
        "value": "",
        "propertyDataType": "PropertyXhtmlString"
      },
      "form": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "healthNeeds": {
        "value": [
          {
            "name": "Health Needs",
            "description": "Health Needs",
            "id": 52
          },
          {
            "name": "Eye Health",
            "description": "Eye Health",
            "id": 57
          },
          {
            "name": "General Wellness",
            "description": "General Wellness",
            "id": 58
          }
        ],
        "propertyDataType": "PropertyCategory"
      },
      "category": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "age": {
        "value": [
          {
            "name": "Age",
            "description": "Age",
            "id": 5
          },
          {
            "name": "Children",
            "description": "Children",
            "id": 7
          }
        ],
        "propertyDataType": "PropertyCategory"
      }
    }
  ]
};

const productFilter = [
  {
      "contentLink": {
          "id": 260,
          "workId": 0,
          "guidValue": "f0f4c124-af4a-4631-845d-2759a87ec54e",
          "providerName": null,
          "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/product-category-setting/",
          "expanded": null
      },
      "name": "PLP Settings",
      "language": {
          "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/product-category-setting/",
          "displayName": "English",
          "name": "en"
      },
      "existingLanguages": [
          {
              "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/product-category-setting/",
              "displayName": "English",
              "name": "en"
          }
      ],
      "masterLanguage": {
          "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/product-category-setting/",
          "displayName": "English",
          "name": "en"
      },
      "contentType": [
          "Page",
          "PLPSettingsPage"
      ],
      "parentLink": {
          "id": 1,
          "workId": 0,
          "guidValue": "43f936c9-9b23-4ea3-97b2-61c538ad07c9",
          "providerName": null,
          "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/",
          "expanded": null
      },
      "routeSegment": "product-category-setting",
      "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/product-category-setting/",
      "changed": "2023-04-21T17:24:33Z",
      "created": "2023-04-21T17:22:41Z",
      "startPublish": "2023-04-21T17:24:33Z",
      "stopPublish": null,
      "saved": "2023-05-04T11:22:28Z",
      "status": "Published",
      "category": {
          "value": [],
          "propertyDataType": "PropertyCategory"
      },
      "searchTips": {
          "value": "",
          "propertyDataType": "PropertyLongString"
      },
      "pageTitle": {
          "value": "",
          "propertyDataType": "PropertyLongString"
      },
      "searchTipsHeadingText": {
          "value": "",
          "propertyDataType": "PropertyLongString"
      },
      "metaDescription": {
          "value": "",
          "propertyDataType": "PropertyLongString"
      },
      "speakToASpecialist": {
          "value": "",
          "propertyDataType": "PropertyLongString"
      },
      "pageIndex": {
          "value": null,
          "propertyDataType": "PropertyBoolean"
      },
      "specialistHeadingText": {
          "value": "",
          "propertyDataType": "PropertyLongString"
      },
      "noFollow": {
          "value": null,
          "propertyDataType": "PropertyBoolean"
      },
      "sendFeedback": {
          "value": "",
          "propertyDataType": "PropertyXhtmlString"
      },
      "canoicalUrl": {
          "value": "",
          "propertyDataType": "PropertyLongString"
      },
      "feedbackHeadingText": {
          "value": "",
          "propertyDataType": "PropertyLongString"
      },
      "noMatchFoundText": {
          "value": "",
          "propertyDataType": "PropertyLongString"
      },
      "showingResults": {
          "value": "",
          "propertyDataType": "PropertyLongString"
      },
      "searchForText": {
          "value": "",
          "propertyDataType": "PropertyLongString"
      },
      "showingResultsText": {
          "value": "",
          "propertyDataType": "PropertyLongString"
      },
      "activeFiltersText": {
          "value": "Active Filters",
          "propertyDataType": "PropertyLongString"
      },
      "activeFiltersImage": {
          "value": {
              "id": 455,
              "workId": 0,
              "guidValue": "674b8c9c-c3ea-421c-a520-16dbc15c8c05",
              "providerName": null,
              "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/filter_icon.png",
              "expanded": null
          },
          "propertyDataType": "PropertyContentReference"
      },
      "clearAllText": {
          "value": "Clear All",
          "propertyDataType": "PropertyLongString"
      },
      "clearAllImage": {
          "value": {
              "id": 456,
              "workId": 0,
              "guidValue": "79a017de-8877-4bad-af79-352a3a3caafd",
              "providerName": null,
              "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/x-lg.png",
              "expanded": null
          },
          "propertyDataType": "PropertyContentReference"
      },
      "showResultsText": {
          "value": "Showing # results",
          "propertyDataType": "PropertyLongString"
      }
  }
];
