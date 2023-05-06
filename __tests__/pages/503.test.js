import { render, screen, act } from '@testing-library/react';
import ServiceUnavailableCoumponent from "@/components/503/503";
import axios from "axios";
jest.mock("axios");


describe('ServiceUnavailableCoumponent - Display values from CMS', () => {
  beforeEach(() => {
    axios.get.mockResolvedValue( {data: serviceUnavailableCoumponentData} );
  });

  test('Display values from CMS', async () => {
    await act(async () => {
      render(<ServiceUnavailableCoumponent />);
    });
    // expect(screen.getByText('Hmmm!')).toBeInTheDocument();
  });
});

const serviceUnavailableCoumponentData = [
    {
        "contentLink": {
            "id": 346,
            "workId": 0,
            "guidValue": "b9505a8a-7c01-4bcf-8e2a-df2dd16a2d17",
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/generic/server-error/",
            "expanded": null
        },
        "name": "Server Error",
        "language": {
            "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/generic/server-error/",
            "displayName": "English",
            "name": "en"
        },
        "existingLanguages": [
            {
                "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/generic/server-error/",
                "displayName": "English",
                "name": "en"
            }
        ],
        "masterLanguage": {
            "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/generic/server-error/",
            "displayName": "English",
            "name": "en"
        },
        "contentType": [
            "Page",
            "GenericPage"
        ],
        "parentLink": {
            "id": 334,
            "workId": 0,
            "guidValue": "0d9d5eb4-f432-4fa4-a958-0fc54ae51bc0",
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/generic/",
            "expanded": null
        },
        "routeSegment": "server-error",
        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/generic/server-error/",
        "changed": "2023-04-26T12:40:53Z",
        "created": "2023-04-26T12:38:51Z",
        "startPublish": "2023-04-26T12:40:53Z",
        "stopPublish": null,
        "saved": "2023-05-04T11:00:26Z",
        "status": "Published",
        "category": {
            "value": [],
            "propertyDataType": "PropertyCategory"
        },
        "title": {
            "value": "Hmmm!",
            "propertyDataType": "PropertyLongString"
        },
        "description": {
            "value": "<p>It looks like the service is&nbsp;</p>\n<p>temporarily unavailable.</p>\n<p>&nbsp;</p>\n<p><a href=\"https://mcco02mstrub73kinte.dxcloud.episerver.net/en/\">please try again later.</a></p>",
            "propertyDataType": "PropertyXhtmlString"
        },
        "contentArea": {
            "value": null,
            "propertyDataType": "PropertyContentArea"
        },
        "backgroundImage": {
            "expandedValue": {
                "contentLink": {
                    "id": 480,
                    "workId": 0,
                    "guidValue": "7a27a2c7-7027-4644-b27d-4b0e128b546c",
                    "providerName": null,
                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/1382ea96fbda4d5c8998a3c599217c85/background_image.png",
                    "expanded": null
                },
                "name": "background_image.png",
                "language": {
                    "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/1382ea96fbda4d5c8998a3c599217c85/background_image.png",
                    "displayName": "Invariant Language (Invariant Country)",
                    "name": ""
                },
                "existingLanguages": [],
                "masterLanguage": null,
                "contentType": [
                    "Image",
                    "Media",
                    "ImageFile"
                ],
                "parentLink": {
                    "id": 478,
                    "workId": 0,
                    "guidValue": "1382ea96-fbda-4d5c-8998-a3c599217c85",
                    "providerName": null,
                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/1382ea96fbda4d5c8998a3c599217c85/",
                    "expanded": null
                },
                "routeSegment": "background_image.png",
                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/1382ea96fbda4d5c8998a3c599217c85/background_image.png",
                "changed": "2023-04-28T19:44:39Z",
                "created": "2023-04-28T19:44:39Z",
                "startPublish": "2023-04-28T19:44:39Z",
                "stopPublish": null,
                "saved": "2023-04-28T19:44:39Z",
                "status": "Published",
                "category": {
                    "value": [],
                    "propertyDataType": "PropertyCategory"
                },
                "thumbnail": {
                    "value": {
                        "id": "epi.fx.blob://default/7a27a2c770274644b27d4b0e128b546c/cfa2dba782b84a16a343f768b0009d66_Thumbnail.png",
                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/1382ea96fbda4d5c8998a3c599217c85/background_image.png/Thumbnail"
                    },
                    "propertyDataType": "PropertyBlob"
                },
                "mimeType": {
                    "value": "image/png",
                    "propertyDataType": "PropertyString"
                },
                "altText": {
                    "value": "",
                    "propertyDataType": "PropertyLongString"
                }
            },
            "value": {
                "id": 480,
                "workId": 0,
                "guidValue": "7a27a2c7-7027-4644-b27d-4b0e128b546c",
                "providerName": null,
                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/1382ea96fbda4d5c8998a3c599217c85/background_image.png",
                "expanded": null
            },
            "propertyDataType": "PropertyContentReference"
        },
        "seoSection": {
            "value": null,
            "propertyDataType": "PropertyContentArea"
        }
    }
]