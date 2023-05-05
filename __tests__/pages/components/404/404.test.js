import { render, screen, act } from '@testing-library/react';
import FourOhFourCoumponent from "@/components/404/404";
import axios from "axios";
jest.mock("axios");


describe('FourOhFourCoumponent - Display values from CMS', () => {
  beforeEach(() => {
    axios.get.mockResolvedValue( {data: notFoundData} );
  });

  test('Display values from CMS', async () => {
    await act(async () => {
      render(<FourOhFourCoumponent />);
    });
    expect(screen.getByText('Oops! Oops!')).toBeInTheDocument();
    expect(screen.getByText("We can't find the page")).toBeInTheDocument();
    expect(screen.getByText("you are looking for.")).toBeInTheDocument();
    expect(screen.getByText("Not to worry")).toBeInTheDocument();
    expect(screen.getByText("Here’s what you can do.")).toBeInTheDocument();
  });
});

const notFoundData = [
    {
        "contentLink": {
            "id": 345,
            "workId": 0,
            "guidValue": "20857c5d-f62c-4d63-a267-6c467dc61120",
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/generic/page-not-found/",
            "expanded": null
        },
        "name": "Page not found.",
        "language": {
            "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/generic/page-not-found/",
            "displayName": "English",
            "name": "en"
        },
        "existingLanguages": [
            {
                "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/generic/page-not-found/",
                "displayName": "English",
                "name": "en"
            }
        ],
        "masterLanguage": {
            "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/generic/page-not-found/",
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
        "routeSegment": "page-not-found",
        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/generic/page-not-found/",
        "changed": "2023-04-26T12:24:37Z",
        "created": "2023-04-26T12:18:37Z",
        "startPublish": "2023-04-26T12:24:37Z",
        "stopPublish": null,
        "saved": "2023-05-04T10:59:36Z",
        "status": "Published",
        "category": {
            "value": [],
            "propertyDataType": "PropertyCategory"
        },
        "title": {
            "value": "Oops! Oops!",
            "propertyDataType": "PropertyLongString"
        },
        "description": {
            "value": "<p>We can't find the page</p>\n<p>you are looking for.</p>\n<p>Not to worry</p>\n<p>&nbsp;</p>",
            "propertyDataType": "PropertyXhtmlString"
        },
        "contentArea": {
            "expandedValue": [
                {
                    "contentLink": {
                        "id": 479,
                        "workId": 0,
                        "guidValue": "dd463ec2-646e-4575-88d5-95b2986ce547",
                        "providerName": null,
                        "url": null,
                        "expanded": null
                    },
                    "name": "Info section",
                    "language": {
                        "link": null,
                        "displayName": "English",
                        "name": "en"
                    },
                    "existingLanguages": [
                        {
                            "link": null,
                            "displayName": "English",
                            "name": "en"
                        }
                    ],
                    "masterLanguage": {
                        "link": null,
                        "displayName": "English",
                        "name": "en"
                    },
                    "contentType": [
                        "Block",
                        "InfoBlock"
                    ],
                    "parentLink": {
                        "id": 478,
                        "workId": 0,
                        "guidValue": "1382ea96-fbda-4d5c-8998-a3c599217c85",
                        "providerName": null,
                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/1382ea96fbda4d5c8998a3c599217c85/",
                        "expanded": null
                    },
                    "routeSegment": null,
                    "url": null,
                    "changed": "2023-04-28T19:43:41Z",
                    "created": "2023-04-28T19:43:41Z",
                    "startPublish": "2023-04-28T19:43:41Z",
                    "stopPublish": null,
                    "saved": "2023-04-28T19:43:41Z",
                    "status": "Published",
                    "category": {
                        "value": [],
                        "propertyDataType": "PropertyCategory"
                    },
                    "internalTitle": {
                        "value": "Internal Ref",
                        "propertyDataType": "PropertyLongString"
                    },
                    "title": {
                        "value": "Here’s what you can do.",
                        "propertyDataType": "PropertyLongString"
                    },
                    "description": {
                        "value": "<p><span style=\"white-space: pre-wrap;\">Retype the URL</span></p>\n<p><a href=\"https://mcco02mstrub73kinte.dxcloud.episerver.net/en/\"><span style=\"white-space: pre-wrap;\">Home</span></a></p>\n<p><a href=\"/generic/faq/\"><span style=\"white-space: pre-wrap;\">FAQ</span></a></p>\n<p><a href=\"/generic/contact-us/\"><span style=\"white-space: pre-wrap;\">Send Feedback</span></a></p>",
                        "propertyDataType": "PropertyXhtmlString"
                    }
                }
            ],
            "value": [
                {
                    "displayOption": "",
                    "tag": null,
                    "contentLink": {
                        "id": 479,
                        "workId": 0,
                        "guidValue": "dd463ec2-646e-4575-88d5-95b2986ce547",
                        "providerName": null,
                        "url": null,
                        "expanded": null
                    }
                }
            ],
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