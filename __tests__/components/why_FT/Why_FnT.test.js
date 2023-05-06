import { render, screen, act } from '@testing-library/react';
import WhyFTComponent from "@/components/why_FT/WhyFTComponent";
import axios from "axios";
jest.mock("axios");

describe('WhyFTComponent - Display values from CMS', () => {
    beforeEach(() => {
        axios.get.mockResolvedValue( {data: fTData} );
    });

    test('Display values from CMS', async () => {
        await act(async () => {
        render(<WhyFTComponent />);
        });
        expect(screen.getByAltText(/Carousel/i));
        expect(screen.getByText('Quality Ingredients. Better Value.')).toBeInTheDocument();
        expect(screen.getByAltText(/We can help in your health journey./i));
        expect(screen.getByText('We can help in your health journey.')).toBeInTheDocument();
        expect(screen.getByText('We combine the quality of marketing-leading products and the legacy of a health leader. Our expertise lends to and unwavering confidence of knowing what to do and how to do it, with reason, clarity, and consistency.')).toBeInTheDocument();
        expect(screen.getByAltText(/Image Collection Block/i));
        expect(screen.getByText('You need products you can trust to heal and thrive.')).toBeInTheDocument();
        expect(screen.getByText('Our products are designed to meet you at every turn of your health care journey, wherever that may lead.')).toBeInTheDocument();
        expect(screen.getByText('Professional help at every turn.')).toBeInTheDocument();
        expect(screen.getByAltText(/Professional help at every turn./i));
        expect(screen.getByAltText(/My headaches were horrible!/i));
        expect(screen.getByText('VIEW BLOG')).toBeInTheDocument();
    });
});

const fTData = [
    {
        "contentLink": {
            "id": 349,
            "workId": 0,
            "guidValue": "6de86563-d5cf-4743-a3d6-8891729523a0",
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/generic/why-ft/",
            "expanded": null
        },
        "name": "Why F&T",
        "language": {
            "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/generic/why-ft/",
            "displayName": "English",
            "name": "en"
        },
        "existingLanguages": [
            {
                "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/generic/why-ft/",
                "displayName": "English",
                "name": "en"
            }
        ],
        "masterLanguage": {
            "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/generic/why-ft/",
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
        "routeSegment": "why-ft",
        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/generic/why-ft/",
        "changed": "2023-04-26T15:10:38Z",
        "created": "2023-04-26T15:10:04Z",
        "startPublish": "2023-04-26T15:10:38Z",
        "stopPublish": null,
        "saved": "2023-04-26T15:53:02Z",
        "status": "Published",
        "category": {
            "value": [],
            "propertyDataType": "PropertyCategory"
        },
        "title": {
            "value": "Why F&T",
            "propertyDataType": "PropertyLongString"
        },
        "description": {
            "value": "<p>This is Why F&amp;T page.</p>",
            "propertyDataType": "PropertyXhtmlString"
        },
        "contentArea": {
            "expandedValue": [
                {
                    "contentLink": {
                        "id": 392,
                        "workId": 0,
                        "guidValue": "d62ffcd6-c1ee-4a4b-9b22-754c8ba33b55",
                        "providerName": null,
                        "url": null,
                        "expanded": null
                    },
                    "name": "Carousel",
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
                        "CarouselBlock"
                    ],
                    "parentLink": {
                        "id": 350,
                        "workId": 0,
                        "guidValue": "00137857-27f5-47bc-b34e-ec3e69f4734a",
                        "providerName": null,
                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/0013785727f547bcb34eec3e69f4734a/",
                        "expanded": null
                    },
                    "routeSegment": null,
                    "url": null,
                    "changed": "2023-04-26T15:52:41Z",
                    "created": "2023-04-26T15:52:41Z",
                    "startPublish": "2023-04-26T15:52:41Z",
                    "stopPublish": null,
                    "saved": "2023-04-26T18:00:56Z",
                    "status": "Published",
                    "category": {
                        "value": [],
                        "propertyDataType": "PropertyCategory"
                    },
                    "contentBlockArea": {
                        "expandedValue": [
                            {
                                "contentLink": {
                                    "id": 395,
                                    "workId": 0,
                                    "guidValue": "7c69835e-6849-4414-a436-9db24ae6bb41",
                                    "providerName": null,
                                    "url": null,
                                    "expanded": null
                                },
                                "name": "Carousel1-Why F&T",
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
                                    "CarouselItemBlock"
                                ],
                                "parentLink": {
                                    "id": 394,
                                    "workId": 0,
                                    "guidValue": "785b99f8-0bf0-4d88-8320-9f4db2c61ea4",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/785b99f80bf04d8883209f4db2c61ea4/",
                                    "expanded": null
                                },
                                "routeSegment": null,
                                "url": null,
                                "changed": "2023-04-26T15:56:34Z",
                                "created": "2023-04-26T15:56:34Z",
                                "startPublish": "2023-04-26T15:56:34Z",
                                "stopPublish": null,
                                "saved": "2023-04-26T15:57:42Z",
                                "status": "Published",
                                "category": {
                                    "value": [],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "title": {
                                    "value": "Why F&T",
                                    "propertyDataType": "PropertyLongString"
                                },
                                "description": {
                                    "value": "<p>Why F&amp;T</p>",
                                    "propertyDataType": "PropertyXhtmlString"
                                },
                                "image": {
                                    "expandedValue": {
                                        "contentLink": {
                                            "id": 393,
                                            "workId": 0,
                                            "guidValue": "0991f0ec-5584-4f2d-bd94-dc4c7da1cbae",
                                            "providerName": null,
                                            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/whyft-carousebanner1.png",
                                            "expanded": null
                                        },
                                        "name": "WhyF&T-CarouseBanner1.png",
                                        "language": {
                                            "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/whyft-carousebanner1.png",
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
                                            "id": 3,
                                            "workId": 0,
                                            "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                                            "providerName": null,
                                            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                                            "expanded": null
                                        },
                                        "routeSegment": "whyft-carousebanner1.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/whyft-carousebanner1.png",
                                        "changed": "2023-04-26T15:56:09Z",
                                        "created": "2023-04-26T15:56:09Z",
                                        "startPublish": "2023-04-26T15:56:09Z",
                                        "stopPublish": null,
                                        "saved": "2023-04-26T15:56:09Z",
                                        "status": "Published",
                                        "category": {
                                            "value": [],
                                            "propertyDataType": "PropertyCategory"
                                        },
                                        "thumbnail": {
                                            "value": {
                                                "id": "epi.fx.blob://default/0991f0ec55844f2dbd94dc4c7da1cbae/c0d5a575879e45619b49f319c070abe5_Thumbnail.png",
                                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/whyft-carousebanner1.png/Thumbnail"
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
                                        "id": 393,
                                        "workId": 0,
                                        "guidValue": "0991f0ec-5584-4f2d-bd94-dc4c7da1cbae",
                                        "providerName": null,
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/whyft-carousebanner1.png",
                                        "expanded": null
                                    },
                                    "propertyDataType": "PropertyContentReference"
                                },
                                "buttonText": {
                                    "value": "Learn more",
                                    "propertyDataType": "PropertyLongString"
                                },
                                "buttonUrl": {
                                    "value": "https://www.mckesson.com/",
                                    "propertyDataType": "PropertyLongString"
                                },
                                "ctaButtonColor": {
                                    "value": "",
                                    "propertyDataType": "PropertyLongString"
                                }
                            },
                            {
                                "contentLink": {
                                    "id": 396,
                                    "workId": 0,
                                    "guidValue": "057a4768-e0d7-41b6-a3eb-0e1f39693eeb",
                                    "providerName": null,
                                    "url": null,
                                    "expanded": null
                                },
                                "name": "Carousel2-Why F&T",
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
                                    "CarouselItemBlock"
                                ],
                                "parentLink": {
                                    "id": 394,
                                    "workId": 0,
                                    "guidValue": "785b99f8-0bf0-4d88-8320-9f4db2c61ea4",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/785b99f80bf04d8883209f4db2c61ea4/",
                                    "expanded": null
                                },
                                "routeSegment": null,
                                "url": null,
                                "changed": "2023-04-26T15:59:43Z",
                                "created": "2023-04-26T15:59:43Z",
                                "startPublish": "2023-04-26T15:59:43Z",
                                "stopPublish": null,
                                "saved": "2023-04-26T15:59:43Z",
                                "status": "Published",
                                "category": {
                                    "value": [],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "title": {
                                    "value": "Why F&T",
                                    "propertyDataType": "PropertyLongString"
                                },
                                "description": {
                                    "value": "<p>Why F&amp;T</p>",
                                    "propertyDataType": "PropertyXhtmlString"
                                },
                                "image": {
                                    "expandedValue": {
                                        "contentLink": {
                                            "id": 205,
                                            "workId": 0,
                                            "guidValue": "543b6e04-3ee0-4512-a98a-b2d99ba02b60",
                                            "providerName": null,
                                            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/banner_1.png",
                                            "expanded": null
                                        },
                                        "name": "banner_1.png",
                                        "language": {
                                            "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/banner_1.png",
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
                                            "id": 3,
                                            "workId": 0,
                                            "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                                            "providerName": null,
                                            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                                            "expanded": null
                                        },
                                        "routeSegment": "banner_1.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/banner_1.png",
                                        "changed": "2023-04-22T15:41:13Z",
                                        "created": "2023-04-21T10:18:54Z",
                                        "startPublish": "2023-04-21T10:18:54Z",
                                        "stopPublish": null,
                                        "saved": "2023-04-22T15:41:13Z",
                                        "status": "Published",
                                        "category": {
                                            "value": [],
                                            "propertyDataType": "PropertyCategory"
                                        },
                                        "thumbnail": {
                                            "value": {
                                                "id": "epi.fx.blob://default/543b6e043ee04512a98ab2d99ba02b60/a0904feeefd24428b3b816b94ef9cb20_Thumbnail.png",
                                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/banner_1.png/Thumbnail"
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
                                        "id": 205,
                                        "workId": 0,
                                        "guidValue": "543b6e04-3ee0-4512-a98a-b2d99ba02b60",
                                        "providerName": null,
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/banner_1.png",
                                        "expanded": null
                                    },
                                    "propertyDataType": "PropertyContentReference"
                                },
                                "buttonText": {
                                    "value": "Learn more",
                                    "propertyDataType": "PropertyLongString"
                                },
                                "buttonUrl": {
                                    "value": "https://www.mckesson.com/",
                                    "propertyDataType": "PropertyLongString"
                                },
                                "ctaButtonColor": {
                                    "value": "",
                                    "propertyDataType": "PropertyLongString"
                                }
                            },
                            {
                                "contentLink": {
                                    "id": 397,
                                    "workId": 0,
                                    "guidValue": "7da21e95-3f72-4183-8235-52fe45598f66",
                                    "providerName": null,
                                    "url": null,
                                    "expanded": null
                                },
                                "name": "Carousel3-Why F&T",
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
                                    "CarouselItemBlock"
                                ],
                                "parentLink": {
                                    "id": 394,
                                    "workId": 0,
                                    "guidValue": "785b99f8-0bf0-4d88-8320-9f4db2c61ea4",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/785b99f80bf04d8883209f4db2c61ea4/",
                                    "expanded": null
                                },
                                "routeSegment": null,
                                "url": null,
                                "changed": "2023-04-26T16:00:41Z",
                                "created": "2023-04-26T16:00:41Z",
                                "startPublish": "2023-04-26T16:00:41Z",
                                "stopPublish": null,
                                "saved": "2023-04-26T16:00:41Z",
                                "status": "Published",
                                "category": {
                                    "value": [],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "title": {
                                    "value": "Why F&T",
                                    "propertyDataType": "PropertyLongString"
                                },
                                "description": {
                                    "value": "<p>Why F&amp;T</p>",
                                    "propertyDataType": "PropertyXhtmlString"
                                },
                                "image": {
                                    "expandedValue": {
                                        "contentLink": {
                                            "id": 206,
                                            "workId": 0,
                                            "guidValue": "6c64ce59-e2d0-4f1d-b158-06c83c6ba4f8",
                                            "providerName": null,
                                            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/banner_2.png",
                                            "expanded": null
                                        },
                                        "name": "banner_2.png",
                                        "language": {
                                            "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/banner_2.png",
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
                                            "id": 3,
                                            "workId": 0,
                                            "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                                            "providerName": null,
                                            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                                            "expanded": null
                                        },
                                        "routeSegment": "banner_2.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/banner_2.png",
                                        "changed": "2023-04-21T10:31:38Z",
                                        "created": "2023-04-21T10:31:38Z",
                                        "startPublish": "2023-04-21T10:31:38Z",
                                        "stopPublish": null,
                                        "saved": "2023-04-21T10:31:38Z",
                                        "status": "Published",
                                        "category": {
                                            "value": [],
                                            "propertyDataType": "PropertyCategory"
                                        },
                                        "thumbnail": {
                                            "value": {
                                                "id": "epi.fx.blob://default/6c64ce59e2d04f1db15806c83c6ba4f8/341e39e8a7ff437fa9132e637842a6fe_Thumbnail.png",
                                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/banner_2.png/Thumbnail"
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
                                        "id": 206,
                                        "workId": 0,
                                        "guidValue": "6c64ce59-e2d0-4f1d-b158-06c83c6ba4f8",
                                        "providerName": null,
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/banner_2.png",
                                        "expanded": null
                                    },
                                    "propertyDataType": "PropertyContentReference"
                                },
                                "buttonText": {
                                    "value": "Learn more",
                                    "propertyDataType": "PropertyLongString"
                                },
                                "buttonUrl": {
                                    "value": "https://www.mckesson.com/",
                                    "propertyDataType": "PropertyLongString"
                                },
                                "ctaButtonColor": {
                                    "value": "",
                                    "propertyDataType": "PropertyLongString"
                                }
                            }
                        ],
                        "value": [
                            {
                                "displayOption": "",
                                "tag": null,
                                "contentLink": {
                                    "id": 395,
                                    "workId": 0,
                                    "guidValue": "7c69835e-6849-4414-a436-9db24ae6bb41",
                                    "providerName": null,
                                    "url": null,
                                    "expanded": null
                                }
                            },
                            {
                                "displayOption": "",
                                "tag": null,
                                "contentLink": {
                                    "id": 396,
                                    "workId": 0,
                                    "guidValue": "057a4768-e0d7-41b6-a3eb-0e1f39693eeb",
                                    "providerName": null,
                                    "url": null,
                                    "expanded": null
                                }
                            },
                            {
                                "displayOption": "",
                                "tag": null,
                                "contentLink": {
                                    "id": 397,
                                    "workId": 0,
                                    "guidValue": "7da21e95-3f72-4183-8235-52fe45598f66",
                                    "providerName": null,
                                    "url": null,
                                    "expanded": null
                                }
                            }
                        ],
                        "propertyDataType": "PropertyContentArea"
                    },
                    "timeInterval": {
                        "value": "10000",
                        "propertyDataType": "PropertyLongString"
                    }
                },
                {
                    "contentLink": {
                        "id": 351,
                        "workId": 0,
                        "guidValue": "661c5ee3-a5c1-4d6f-933b-dea11a858c62",
                        "providerName": null,
                        "url": null,
                        "expanded": null
                    },
                    "name": "Quality Ingredients. Better Value.",
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
                        "OneColumnBlock"
                    ],
                    "parentLink": {
                        "id": 350,
                        "workId": 0,
                        "guidValue": "00137857-27f5-47bc-b34e-ec3e69f4734a",
                        "providerName": null,
                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/0013785727f547bcb34eec3e69f4734a/",
                        "expanded": null
                    },
                    "routeSegment": null,
                    "url": null,
                    "changed": "2023-04-26T15:14:43Z",
                    "created": "2023-04-26T15:14:43Z",
                    "startPublish": "2023-04-26T15:14:43Z",
                    "stopPublish": null,
                    "saved": "2023-04-26T15:14:43Z",
                    "status": "Published",
                    "category": {
                        "value": [],
                        "propertyDataType": "PropertyCategory"
                    },
                    "title": {
                        "value": "Quality Ingredients. Better Value.",
                        "propertyDataType": "PropertyLongString"
                    },
                    "description": {
                        "value": "<p>You hold your health in high regard, and you know that being well starts with being good to yourself. But with confusing treatments, expensive products, and options overload, managing your health can sometimes be a headache. Good news is around the corner.</p>\n<p>We&rsquo;re Foster &amp; Thrive, and we&rsquo;re bringing a new take to your health journey. We combine clarity and care, so you can find what you need more easily, and with greater confidence.</p>\n<p>At Foster &amp; Thrive, we believe the over-the-counter products should go beyond the box. And that wellness and being well go hand in hand. So we make our own products with high quality ingredients. We make it easy to find the products that meet your precise needs, and we stand behind you with intelligence and compassion at every turn of your health journey. At Foster &amp; Thrive our goal is to help you beyond sickness and health, to the place where you prosper and thrive.&nbsp;</p>",
                        "propertyDataType": "PropertyXhtmlString"
                    },
                    "backgroundColor": {
                        "value": "",
                        "propertyDataType": "PropertyLongString"
                    }
                },
                {
                    "contentLink": {
                        "id": 352,
                        "workId": 0,
                        "guidValue": "0b79d258-53bc-4941-95a8-d93427385763",
                        "providerName": null,
                        "url": null,
                        "expanded": null
                    },
                    "name": "We can help in your health journey.",
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
                        "TwoCloumnBlock"
                    ],
                    "parentLink": {
                        "id": 350,
                        "workId": 0,
                        "guidValue": "00137857-27f5-47bc-b34e-ec3e69f4734a",
                        "providerName": null,
                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/0013785727f547bcb34eec3e69f4734a/",
                        "expanded": null
                    },
                    "routeSegment": null,
                    "url": null,
                    "changed": "2023-04-26T15:19:05Z",
                    "created": "2023-04-26T15:19:05Z",
                    "startPublish": "2023-04-26T15:19:05Z",
                    "stopPublish": null,
                    "saved": "2023-04-26T17:58:28Z",
                    "status": "Published",
                    "category": {
                        "value": [],
                        "propertyDataType": "PropertyCategory"
                    },
                    "title": {
                        "value": "We can help in your health journey.",
                        "propertyDataType": "PropertyLongString"
                    },
                    "description": {
                        "value": "<p>We combine the quality of marketing-leading products and the legacy of a health leader. Our expertise lends to and unwavering confidence of knowing what to do and how to do it, with reason, clarity, and consistency.&nbsp;</p>",
                        "propertyDataType": "PropertyXhtmlString"
                    },
                    "image": {
                        "value": null,
                        "propertyDataType": "PropertyContentReference"
                    },
                    "contentBlockArea": {
                        "value": null,
                        "propertyDataType": "PropertyContentArea"
                    },
                    "buttonText": {
                        "value": "View Products",
                        "propertyDataType": "PropertyLongString"
                    },
                    "buttonUrl": {
                        "value": "https://www.mckesson.com/",
                        "propertyDataType": "PropertyLongString"
                    },
                    "buttonColorCode": {
                        "value": "",
                        "propertyDataType": "PropertyLongString"
                    },
                    "assetPosition": {
                        "value": "Right",
                        "propertyDataType": "PropertyLongString"
                    },
                    "video": {
                        "value": null,
                        "propertyDataType": "PropertyContentReference"
                    },
                    "backgroundColor": {
                        "value": "",
                        "propertyDataType": "PropertyLongString"
                    },
                    "videoUrl": {
                        "value": "",
                        "propertyDataType": "PropertyLongString"
                    },
                    "backgroundImage": {
                        "expandedValue": {
                            "contentLink": {
                                "id": 399,
                                "workId": 0,
                                "guidValue": "682cfb50-2f2c-4737-a9db-2dd6e09a2ba1",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/07bc98374abb4f429c921cab16154f57/frame-4075656.png",
                                "expanded": null
                            },
                            "name": "Frame 4075656.png",
                            "language": {
                                "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/07bc98374abb4f429c921cab16154f57/frame-4075656.png",
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
                                "id": 398,
                                "workId": 0,
                                "guidValue": "07bc9837-4abb-4f42-9c92-1cab16154f57",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/07bc98374abb4f429c921cab16154f57/",
                                "expanded": null
                            },
                            "routeSegment": "frame-4075656.png",
                            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/07bc98374abb4f429c921cab16154f57/frame-4075656.png",
                            "changed": "2023-04-26T17:58:15Z",
                            "created": "2023-04-26T17:58:15Z",
                            "startPublish": "2023-04-26T17:58:15Z",
                            "stopPublish": null,
                            "saved": "2023-04-26T17:58:15Z",
                            "status": "Published",
                            "category": {
                                "value": [],
                                "propertyDataType": "PropertyCategory"
                            },
                            "thumbnail": {
                                "value": {
                                    "id": "epi.fx.blob://default/682cfb502f2c4737a9db2dd6e09a2ba1/9e2bd5d422f54d8e8995ecf161f82074_Thumbnail.png",
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/07bc98374abb4f429c921cab16154f57/frame-4075656.png/Thumbnail"
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
                            "id": 399,
                            "workId": 0,
                            "guidValue": "682cfb50-2f2c-4737-a9db-2dd6e09a2ba1",
                            "providerName": null,
                            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/07bc98374abb4f429c921cab16154f57/frame-4075656.png",
                            "expanded": null
                        },
                        "propertyDataType": "PropertyContentReference"
                    }
                },
                {
                    "contentLink": {
                        "id": 353,
                        "workId": 0,
                        "guidValue": "3a7e8242-481c-453c-90c2-4ac1bcac6a60",
                        "providerName": null,
                        "url": null,
                        "expanded": null
                    },
                    "name": "Image Collection Block",
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
                        "ImageCollectionBlock"
                    ],
                    "parentLink": {
                        "id": 350,
                        "workId": 0,
                        "guidValue": "00137857-27f5-47bc-b34e-ec3e69f4734a",
                        "providerName": null,
                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/0013785727f547bcb34eec3e69f4734a/",
                        "expanded": null
                    },
                    "routeSegment": null,
                    "url": null,
                    "changed": "2023-04-26T15:27:28Z",
                    "created": "2023-04-26T15:27:28Z",
                    "startPublish": "2023-04-26T15:27:28Z",
                    "stopPublish": null,
                    "saved": "2023-04-26T15:42:34Z",
                    "status": "Published",
                    "category": {
                        "value": [],
                        "propertyDataType": "PropertyCategory"
                    },
                    "internalTitle": {
                        "value": "",
                        "propertyDataType": "PropertyLongString"
                    },
                    "logoImage": {
                        "expandedValue": {
                            "contentLink": {
                                "id": 354,
                                "workId": 0,
                                "guidValue": "ea986e49-f62f-4bf2-9a85-912747546f33",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/ftlogo.png",
                                "expanded": null
                            },
                            "name": "F&TLogo.PNG",
                            "language": {
                                "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/ftlogo.png",
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
                                "id": 3,
                                "workId": 0,
                                "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                                "expanded": null
                            },
                            "routeSegment": "ftlogo.png",
                            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/ftlogo.png",
                            "changed": "2023-04-26T15:28:36Z",
                            "created": "2023-04-26T15:28:36Z",
                            "startPublish": "2023-04-26T15:28:36Z",
                            "stopPublish": null,
                            "saved": "2023-04-26T15:28:36Z",
                            "status": "Published",
                            "category": {
                                "value": [],
                                "propertyDataType": "PropertyCategory"
                            },
                            "thumbnail": {
                                "value": {
                                    "id": "epi.fx.blob://default/ea986e49f62f4bf29a85912747546f33/e3558ca7710b46d391e6dbb3df06bc63_Thumbnail.png",
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/ftlogo.png/Thumbnail"
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
                            "id": 354,
                            "workId": 0,
                            "guidValue": "ea986e49-f62f-4bf2-9a85-912747546f33",
                            "providerName": null,
                            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/ftlogo.png",
                            "expanded": null
                        },
                        "propertyDataType": "PropertyContentReference"
                    },
                    "title": {
                        "value": "With you for life",
                        "propertyDataType": "PropertyLongString"
                    },
                    "backgroundColorCode": {
                        "value": "#001A71",
                        "propertyDataType": "PropertyLongString"
                    },
                    "imageList": {
                        "expandedValue": [
                            {
                                "contentLink": {
                                    "id": 359,
                                    "workId": 0,
                                    "guidValue": "18e30022-4142-4df4-a9e2-e4352b67f69a",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-andrea-piacquadio-3755514-1.png",
                                    "expanded": null
                                },
                                "name": "pexels-andrea-piacquadio-3755514 1.png",
                                "language": {
                                    "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-andrea-piacquadio-3755514-1.png",
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
                                    "id": 3,
                                    "workId": 0,
                                    "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                                    "expanded": null
                                },
                                "routeSegment": "pexels-andrea-piacquadio-3755514-1.png",
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-andrea-piacquadio-3755514-1.png",
                                "changed": "2023-04-26T15:29:58Z",
                                "created": "2023-04-26T15:29:58Z",
                                "startPublish": "2023-04-26T15:29:58Z",
                                "stopPublish": null,
                                "saved": "2023-04-26T15:29:58Z",
                                "status": "Published",
                                "category": {
                                    "value": [],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "thumbnail": {
                                    "value": {
                                        "id": "epi.fx.blob://default/18e3002241424df4a9e2e4352b67f69a/924196b1d8544f4bab5ab18602f1e027_Thumbnail.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-andrea-piacquadio-3755514-1.png/Thumbnail"
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
                            {
                                "contentLink": {
                                    "id": 360,
                                    "workId": 0,
                                    "guidValue": "7e73989a-4398-4814-8cb0-15e0348165a6",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-andrea-piacquadio-3758112-2.png",
                                    "expanded": null
                                },
                                "name": "pexels-andrea-piacquadio-3758112 2.png",
                                "language": {
                                    "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-andrea-piacquadio-3758112-2.png",
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
                                    "id": 3,
                                    "workId": 0,
                                    "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                                    "expanded": null
                                },
                                "routeSegment": "pexels-andrea-piacquadio-3758112-2.png",
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-andrea-piacquadio-3758112-2.png",
                                "changed": "2023-04-26T15:29:59Z",
                                "created": "2023-04-26T15:29:59Z",
                                "startPublish": "2023-04-26T15:29:59Z",
                                "stopPublish": null,
                                "saved": "2023-04-26T15:29:59Z",
                                "status": "Published",
                                "category": {
                                    "value": [],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "thumbnail": {
                                    "value": {
                                        "id": "epi.fx.blob://default/7e73989a439848148cb015e0348165a6/12ba674cbf1b4374899b65b4e0003879_Thumbnail.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-andrea-piacquadio-3758112-2.png/Thumbnail"
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
                            {
                                "contentLink": {
                                    "id": 355,
                                    "workId": 0,
                                    "guidValue": "74e25ef7-90be-4346-b594-8e3fdabd04a5",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-andrea-piacquadio-785667-1.png",
                                    "expanded": null
                                },
                                "name": "pexels-andrea-piacquadio-785667 1.png",
                                "language": {
                                    "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-andrea-piacquadio-785667-1.png",
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
                                    "id": 3,
                                    "workId": 0,
                                    "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                                    "expanded": null
                                },
                                "routeSegment": "pexels-andrea-piacquadio-785667-1.png",
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-andrea-piacquadio-785667-1.png",
                                "changed": "2023-04-26T15:29:58Z",
                                "created": "2023-04-26T15:29:58Z",
                                "startPublish": "2023-04-26T15:29:58Z",
                                "stopPublish": null,
                                "saved": "2023-04-26T15:29:58Z",
                                "status": "Published",
                                "category": {
                                    "value": [],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "thumbnail": {
                                    "value": {
                                        "id": "epi.fx.blob://default/74e25ef790be4346b5948e3fdabd04a5/a1296bcfd32240138890f919754f9a33_Thumbnail.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-andrea-piacquadio-785667-1.png/Thumbnail"
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
                            {
                                "contentLink": {
                                    "id": 356,
                                    "workId": 0,
                                    "guidValue": "a6bb55d4-d513-45c9-9899-6844291b955d",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-andrea-piacquadio-837140-2.png",
                                    "expanded": null
                                },
                                "name": "pexels-andrea-piacquadio-837140 2.png",
                                "language": {
                                    "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-andrea-piacquadio-837140-2.png",
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
                                    "id": 3,
                                    "workId": 0,
                                    "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                                    "expanded": null
                                },
                                "routeSegment": "pexels-andrea-piacquadio-837140-2.png",
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-andrea-piacquadio-837140-2.png",
                                "changed": "2023-04-26T15:29:58Z",
                                "created": "2023-04-26T15:29:58Z",
                                "startPublish": "2023-04-26T15:29:58Z",
                                "stopPublish": null,
                                "saved": "2023-04-26T15:29:58Z",
                                "status": "Published",
                                "category": {
                                    "value": [],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "thumbnail": {
                                    "value": {
                                        "id": "epi.fx.blob://default/a6bb55d4d51345c998996844291b955d/f9bbf773024346ada578d34c1774b374_Thumbnail.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-andrea-piacquadio-837140-2.png/Thumbnail"
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
                            {
                                "contentLink": {
                                    "id": 362,
                                    "workId": 0,
                                    "guidValue": "7db6c903-8a58-411e-a912-56acfc926803",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-august-de-richelieu-4428041-1.png",
                                    "expanded": null
                                },
                                "name": "pexels-august-de-richelieu-4428041 1.png",
                                "language": {
                                    "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-august-de-richelieu-4428041-1.png",
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
                                    "id": 3,
                                    "workId": 0,
                                    "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                                    "expanded": null
                                },
                                "routeSegment": "pexels-august-de-richelieu-4428041-1.png",
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-august-de-richelieu-4428041-1.png",
                                "changed": "2023-04-26T15:29:59Z",
                                "created": "2023-04-26T15:29:59Z",
                                "startPublish": "2023-04-26T15:29:59Z",
                                "stopPublish": null,
                                "saved": "2023-04-26T15:29:59Z",
                                "status": "Published",
                                "category": {
                                    "value": [],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "thumbnail": {
                                    "value": {
                                        "id": "epi.fx.blob://default/7db6c9038a58411ea91256acfc926803/d3983a450439460a919182432021c3ae_Thumbnail.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-august-de-richelieu-4428041-1.png/Thumbnail"
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
                            {
                                "contentLink": {
                                    "id": 357,
                                    "workId": 0,
                                    "guidValue": "f22a5f1b-04ad-44ed-b7e3-0c87a984d1eb",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-andrea-piacquadio-927022-1.png",
                                    "expanded": null
                                },
                                "name": "pexels-andrea-piacquadio-927022 1.png",
                                "language": {
                                    "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-andrea-piacquadio-927022-1.png",
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
                                    "id": 3,
                                    "workId": 0,
                                    "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                                    "expanded": null
                                },
                                "routeSegment": "pexels-andrea-piacquadio-927022-1.png",
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-andrea-piacquadio-927022-1.png",
                                "changed": "2023-04-26T15:29:58Z",
                                "created": "2023-04-26T15:29:58Z",
                                "startPublish": "2023-04-26T15:29:58Z",
                                "stopPublish": null,
                                "saved": "2023-04-26T15:29:58Z",
                                "status": "Published",
                                "category": {
                                    "value": [],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "thumbnail": {
                                    "value": {
                                        "id": "epi.fx.blob://default/f22a5f1b04ad44edb7e30c87a984d1eb/3dae58ce3376450ba1f4e6b29882247e_Thumbnail.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-andrea-piacquadio-927022-1.png/Thumbnail"
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
                            {
                                "contentLink": {
                                    "id": 358,
                                    "workId": 0,
                                    "guidValue": "e2ea348c-48d0-4257-8fb2-3b0812e560b1",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-andrea-piacquadio-974911-1.png",
                                    "expanded": null
                                },
                                "name": "pexels-andrea-piacquadio-974911 1.png",
                                "language": {
                                    "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-andrea-piacquadio-974911-1.png",
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
                                    "id": 3,
                                    "workId": 0,
                                    "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                                    "expanded": null
                                },
                                "routeSegment": "pexels-andrea-piacquadio-974911-1.png",
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-andrea-piacquadio-974911-1.png",
                                "changed": "2023-04-26T15:29:58Z",
                                "created": "2023-04-26T15:29:58Z",
                                "startPublish": "2023-04-26T15:29:58Z",
                                "stopPublish": null,
                                "saved": "2023-04-26T15:29:58Z",
                                "status": "Published",
                                "category": {
                                    "value": [],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "thumbnail": {
                                    "value": {
                                        "id": "epi.fx.blob://default/e2ea348c48d042578fb23b0812e560b1/c4219877e0994de5a61a049a0df30f10_Thumbnail.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-andrea-piacquadio-974911-1.png/Thumbnail"
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
                            {
                                "contentLink": {
                                    "id": 361,
                                    "workId": 0,
                                    "guidValue": "439a1f2c-f697-43ed-9653-65417a026539",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-august-de-richelieu-4259140-1.png",
                                    "expanded": null
                                },
                                "name": "pexels-august-de-richelieu-4259140 1.png",
                                "language": {
                                    "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-august-de-richelieu-4259140-1.png",
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
                                    "id": 3,
                                    "workId": 0,
                                    "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                                    "expanded": null
                                },
                                "routeSegment": "pexels-august-de-richelieu-4259140-1.png",
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-august-de-richelieu-4259140-1.png",
                                "changed": "2023-04-26T15:29:59Z",
                                "created": "2023-04-26T15:29:59Z",
                                "startPublish": "2023-04-26T15:29:59Z",
                                "stopPublish": null,
                                "saved": "2023-04-26T15:29:59Z",
                                "status": "Published",
                                "category": {
                                    "value": [],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "thumbnail": {
                                    "value": {
                                        "id": "epi.fx.blob://default/439a1f2cf69743ed965365417a026539/75a4ff77fc1143a1b31d4e54970ff1e7_Thumbnail.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-august-de-richelieu-4259140-1.png/Thumbnail"
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
                            {
                                "contentLink": {
                                    "id": 363,
                                    "workId": 0,
                                    "guidValue": "019960f6-bc51-4b75-b8ef-7386c3eeb77b",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-cottonbro-studio-3171204-3.png",
                                    "expanded": null
                                },
                                "name": "pexels-cottonbro-studio-3171204 3.png",
                                "language": {
                                    "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-cottonbro-studio-3171204-3.png",
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
                                    "id": 3,
                                    "workId": 0,
                                    "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                                    "expanded": null
                                },
                                "routeSegment": "pexels-cottonbro-studio-3171204-3.png",
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-cottonbro-studio-3171204-3.png",
                                "changed": "2023-04-26T15:29:59Z",
                                "created": "2023-04-26T15:29:59Z",
                                "startPublish": "2023-04-26T15:29:59Z",
                                "stopPublish": null,
                                "saved": "2023-04-26T15:29:59Z",
                                "status": "Published",
                                "category": {
                                    "value": [],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "thumbnail": {
                                    "value": {
                                        "id": "epi.fx.blob://default/019960f6bc514b75b8ef7386c3eeb77b/0e7646c1500740d586d0bd3c5c9e1c18_Thumbnail.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-cottonbro-studio-3171204-3.png/Thumbnail"
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
                            {
                                "contentLink": {
                                    "id": 364,
                                    "workId": 0,
                                    "guidValue": "024cb725-f7a4-41fa-afcd-a291541078a1",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-cottonbro-studio-5858740-2.png",
                                    "expanded": null
                                },
                                "name": "pexels-cottonbro-studio-5858740 2.png",
                                "language": {
                                    "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-cottonbro-studio-5858740-2.png",
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
                                    "id": 3,
                                    "workId": 0,
                                    "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                                    "expanded": null
                                },
                                "routeSegment": "pexels-cottonbro-studio-5858740-2.png",
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-cottonbro-studio-5858740-2.png",
                                "changed": "2023-04-26T15:30:00Z",
                                "created": "2023-04-26T15:30:00Z",
                                "startPublish": "2023-04-26T15:30:00Z",
                                "stopPublish": null,
                                "saved": "2023-04-26T15:30:00Z",
                                "status": "Published",
                                "category": {
                                    "value": [],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "thumbnail": {
                                    "value": {
                                        "id": "epi.fx.blob://default/024cb725f7a441faafcda291541078a1/6664777d70c8401ab40400aea29020ea_Thumbnail.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-cottonbro-studio-5858740-2.png/Thumbnail"
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
                            {
                                "contentLink": {
                                    "id": 365,
                                    "workId": 0,
                                    "guidValue": "d738f3f8-54be-4ebf-8b16-c61c84d0467e",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-eren-li-7188804-1.png",
                                    "expanded": null
                                },
                                "name": "pexels-eren-li-7188804 1.png",
                                "language": {
                                    "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-eren-li-7188804-1.png",
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
                                    "id": 3,
                                    "workId": 0,
                                    "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                                    "expanded": null
                                },
                                "routeSegment": "pexels-eren-li-7188804-1.png",
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-eren-li-7188804-1.png",
                                "changed": "2023-04-26T15:30:00Z",
                                "created": "2023-04-26T15:30:00Z",
                                "startPublish": "2023-04-26T15:30:00Z",
                                "stopPublish": null,
                                "saved": "2023-04-26T15:30:00Z",
                                "status": "Published",
                                "category": {
                                    "value": [],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "thumbnail": {
                                    "value": {
                                        "id": "epi.fx.blob://default/d738f3f854be4ebf8b16c61c84d0467e/29aebfb6104444af94e8828c6d2779b7_Thumbnail.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-eren-li-7188804-1.png/Thumbnail"
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
                            {
                                "contentLink": {
                                    "id": 366,
                                    "workId": 0,
                                    "guidValue": "74e90861-ab83-433f-ae8d-4b761713438e",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-gustavo-fring-4971287-2.png",
                                    "expanded": null
                                },
                                "name": "pexels-gustavo-fring-4971287 2.png",
                                "language": {
                                    "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-gustavo-fring-4971287-2.png",
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
                                    "id": 3,
                                    "workId": 0,
                                    "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                                    "expanded": null
                                },
                                "routeSegment": "pexels-gustavo-fring-4971287-2.png",
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-gustavo-fring-4971287-2.png",
                                "changed": "2023-04-26T15:30:00Z",
                                "created": "2023-04-26T15:30:00Z",
                                "startPublish": "2023-04-26T15:30:00Z",
                                "stopPublish": null,
                                "saved": "2023-04-26T15:30:00Z",
                                "status": "Published",
                                "category": {
                                    "value": [],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "thumbnail": {
                                    "value": {
                                        "id": "epi.fx.blob://default/74e90861ab83433fae8d4b761713438e/1800f2751fe849f69b3a023df300041e_Thumbnail.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-gustavo-fring-4971287-2.png/Thumbnail"
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
                            {
                                "contentLink": {
                                    "id": 367,
                                    "workId": 0,
                                    "guidValue": "e3af99ec-507a-4d31-863b-01fd3f1fc6af",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-gustavo-fring-6285397-2.png",
                                    "expanded": null
                                },
                                "name": "pexels-gustavo-fring-6285397 2.png",
                                "language": {
                                    "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-gustavo-fring-6285397-2.png",
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
                                    "id": 3,
                                    "workId": 0,
                                    "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                                    "expanded": null
                                },
                                "routeSegment": "pexels-gustavo-fring-6285397-2.png",
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-gustavo-fring-6285397-2.png",
                                "changed": "2023-04-26T15:30:00Z",
                                "created": "2023-04-26T15:30:00Z",
                                "startPublish": "2023-04-26T15:30:00Z",
                                "stopPublish": null,
                                "saved": "2023-04-26T15:30:00Z",
                                "status": "Published",
                                "category": {
                                    "value": [],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "thumbnail": {
                                    "value": {
                                        "id": "epi.fx.blob://default/e3af99ec507a4d31863b01fd3f1fc6af/3e20f643cdc34b188eb1536317b5f7cd_Thumbnail.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-gustavo-fring-6285397-2.png/Thumbnail"
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
                            {
                                "contentLink": {
                                    "id": 368,
                                    "workId": 0,
                                    "guidValue": "de9b0610-53c5-4215-9b7f-abcf259c0282",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-ivan-samkov-8127503-1.png",
                                    "expanded": null
                                },
                                "name": "pexels-ivan-samkov-8127503 1.png",
                                "language": {
                                    "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-ivan-samkov-8127503-1.png",
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
                                    "id": 3,
                                    "workId": 0,
                                    "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                                    "expanded": null
                                },
                                "routeSegment": "pexels-ivan-samkov-8127503-1.png",
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-ivan-samkov-8127503-1.png",
                                "changed": "2023-04-26T15:30:00Z",
                                "created": "2023-04-26T15:30:00Z",
                                "startPublish": "2023-04-26T15:30:00Z",
                                "stopPublish": null,
                                "saved": "2023-04-26T15:30:00Z",
                                "status": "Published",
                                "category": {
                                    "value": [],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "thumbnail": {
                                    "value": {
                                        "id": "epi.fx.blob://default/de9b061053c542159b7fabcf259c0282/574a2cda66ed40a4aae2dfbdf9ca064f_Thumbnail.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-ivan-samkov-8127503-1.png/Thumbnail"
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
                            {
                                "contentLink": {
                                    "id": 369,
                                    "workId": 0,
                                    "guidValue": "c1606951-3ae3-437d-b89d-bdddbcb1f629",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-jack-sparrow-4198222-1.png",
                                    "expanded": null
                                },
                                "name": "pexels-jack-sparrow-4198222 1.png",
                                "language": {
                                    "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-jack-sparrow-4198222-1.png",
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
                                    "id": 3,
                                    "workId": 0,
                                    "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                                    "expanded": null
                                },
                                "routeSegment": "pexels-jack-sparrow-4198222-1.png",
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-jack-sparrow-4198222-1.png",
                                "changed": "2023-04-26T15:30:01Z",
                                "created": "2023-04-26T15:30:01Z",
                                "startPublish": "2023-04-26T15:30:01Z",
                                "stopPublish": null,
                                "saved": "2023-04-26T15:30:01Z",
                                "status": "Published",
                                "category": {
                                    "value": [],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "thumbnail": {
                                    "value": {
                                        "id": "epi.fx.blob://default/c16069513ae3437db89dbdddbcb1f629/a0f5cdf4750b4e14a25a571c53753792_Thumbnail.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-jack-sparrow-4198222-1.png/Thumbnail"
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
                            {
                                "contentLink": {
                                    "id": 370,
                                    "workId": 0,
                                    "guidValue": "35e5a34d-7d50-477a-b9b6-25e7e9eab259",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-j-carter-254069-1.png",
                                    "expanded": null
                                },
                                "name": "pexels-j-carter-254069 1.png",
                                "language": {
                                    "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-j-carter-254069-1.png",
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
                                    "id": 3,
                                    "workId": 0,
                                    "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                                    "expanded": null
                                },
                                "routeSegment": "pexels-j-carter-254069-1.png",
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-j-carter-254069-1.png",
                                "changed": "2023-04-26T15:30:01Z",
                                "created": "2023-04-26T15:30:01Z",
                                "startPublish": "2023-04-26T15:30:01Z",
                                "stopPublish": null,
                                "saved": "2023-04-26T15:30:01Z",
                                "status": "Published",
                                "category": {
                                    "value": [],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "thumbnail": {
                                    "value": {
                                        "id": "epi.fx.blob://default/35e5a34d7d50477ab9b625e7e9eab259/7598232213504eaca964304f11176234_Thumbnail.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-j-carter-254069-1.png/Thumbnail"
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
                            {
                                "contentLink": {
                                    "id": 371,
                                    "workId": 0,
                                    "guidValue": "c1849e32-b9c4-429a-b237-a643bb9b81f9",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-jeshootscom-576831-2.png",
                                    "expanded": null
                                },
                                "name": "pexels-jeshootscom-576831 2.png",
                                "language": {
                                    "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-jeshootscom-576831-2.png",
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
                                    "id": 3,
                                    "workId": 0,
                                    "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                                    "expanded": null
                                },
                                "routeSegment": "pexels-jeshootscom-576831-2.png",
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-jeshootscom-576831-2.png",
                                "changed": "2023-04-26T15:30:01Z",
                                "created": "2023-04-26T15:30:01Z",
                                "startPublish": "2023-04-26T15:30:01Z",
                                "stopPublish": null,
                                "saved": "2023-04-26T15:30:01Z",
                                "status": "Published",
                                "category": {
                                    "value": [],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "thumbnail": {
                                    "value": {
                                        "id": "epi.fx.blob://default/c1849e32b9c4429ab237a643bb9b81f9/2f0619519bc54e7cb11a3013effbe3bc_Thumbnail.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-jeshootscom-576831-2.png/Thumbnail"
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
                            {
                                "contentLink": {
                                    "id": 372,
                                    "workId": 0,
                                    "guidValue": "d0d84c87-8b36-44dc-89c7-d7afef68ad7f",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-josh-willink-853406-1.png",
                                    "expanded": null
                                },
                                "name": "pexels-josh-willink-853406 1.png",
                                "language": {
                                    "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-josh-willink-853406-1.png",
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
                                    "id": 3,
                                    "workId": 0,
                                    "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                                    "expanded": null
                                },
                                "routeSegment": "pexels-josh-willink-853406-1.png",
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-josh-willink-853406-1.png",
                                "changed": "2023-04-26T15:30:01Z",
                                "created": "2023-04-26T15:30:01Z",
                                "startPublish": "2023-04-26T15:30:01Z",
                                "stopPublish": null,
                                "saved": "2023-04-26T15:30:01Z",
                                "status": "Published",
                                "category": {
                                    "value": [],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "thumbnail": {
                                    "value": {
                                        "id": "epi.fx.blob://default/d0d84c878b3644dc89c7d7afef68ad7f/762b801ea06047a69bf3a080034139c0_Thumbnail.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-josh-willink-853406-1.png/Thumbnail"
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
                            {
                                "contentLink": {
                                    "id": 373,
                                    "workId": 0,
                                    "guidValue": "930fa9ac-e5c6-456d-b1bc-e086f605d66e",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-kampus-production-6297576-3.png",
                                    "expanded": null
                                },
                                "name": "pexels-kampus-production-6297576 3.png",
                                "language": {
                                    "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-kampus-production-6297576-3.png",
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
                                    "id": 3,
                                    "workId": 0,
                                    "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                                    "expanded": null
                                },
                                "routeSegment": "pexels-kampus-production-6297576-3.png",
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-kampus-production-6297576-3.png",
                                "changed": "2023-04-26T15:30:01Z",
                                "created": "2023-04-26T15:30:01Z",
                                "startPublish": "2023-04-26T15:30:01Z",
                                "stopPublish": null,
                                "saved": "2023-04-26T15:30:01Z",
                                "status": "Published",
                                "category": {
                                    "value": [],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "thumbnail": {
                                    "value": {
                                        "id": "epi.fx.blob://default/930fa9ace5c6456db1bce086f605d66e/74103fecb3f34b80bb33848dc3de07f1_Thumbnail.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-kampus-production-6297576-3.png/Thumbnail"
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
                            {
                                "contentLink": {
                                    "id": 374,
                                    "workId": 0,
                                    "guidValue": "c0f81439-b982-44b7-8622-19a39f025892",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-karolina-grabowska-4021808-3.png",
                                    "expanded": null
                                },
                                "name": "pexels-karolina-grabowska-4021808 3.png",
                                "language": {
                                    "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-karolina-grabowska-4021808-3.png",
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
                                    "id": 3,
                                    "workId": 0,
                                    "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                                    "expanded": null
                                },
                                "routeSegment": "pexels-karolina-grabowska-4021808-3.png",
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-karolina-grabowska-4021808-3.png",
                                "changed": "2023-04-26T15:30:01Z",
                                "created": "2023-04-26T15:30:01Z",
                                "startPublish": "2023-04-26T15:30:01Z",
                                "stopPublish": null,
                                "saved": "2023-04-26T15:30:01Z",
                                "status": "Published",
                                "category": {
                                    "value": [],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "thumbnail": {
                                    "value": {
                                        "id": "epi.fx.blob://default/c0f81439b98244b7862219a39f025892/43bdc3ddcff445f590b90f5f4a2a917b_Thumbnail.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-karolina-grabowska-4021808-3.png/Thumbnail"
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
                            {
                                "contentLink": {
                                    "id": 375,
                                    "workId": 0,
                                    "guidValue": "5d338dbe-a481-4868-a375-54769ccd89d9",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-ketut-subiyanto-4814864-4.png",
                                    "expanded": null
                                },
                                "name": "pexels-ketut-subiyanto-4814864 4.png",
                                "language": {
                                    "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-ketut-subiyanto-4814864-4.png",
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
                                    "id": 3,
                                    "workId": 0,
                                    "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                                    "expanded": null
                                },
                                "routeSegment": "pexels-ketut-subiyanto-4814864-4.png",
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-ketut-subiyanto-4814864-4.png",
                                "changed": "2023-04-26T15:30:02Z",
                                "created": "2023-04-26T15:30:02Z",
                                "startPublish": "2023-04-26T15:30:02Z",
                                "stopPublish": null,
                                "saved": "2023-04-26T15:30:02Z",
                                "status": "Published",
                                "category": {
                                    "value": [],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "thumbnail": {
                                    "value": {
                                        "id": "epi.fx.blob://default/5d338dbea4814868a37554769ccd89d9/ce18ae7c8ce641689b76e8319e590671_Thumbnail.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-ketut-subiyanto-4814864-4.png/Thumbnail"
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
                            {
                                "contentLink": {
                                    "id": 376,
                                    "workId": 0,
                                    "guidValue": "3e1be16d-31c6-43bc-bb74-5d71ac2be3d8",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-ksenia-chernaya-4740566-3.png",
                                    "expanded": null
                                },
                                "name": "pexels-ksenia-chernaya-4740566 3.png",
                                "language": {
                                    "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-ksenia-chernaya-4740566-3.png",
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
                                    "id": 3,
                                    "workId": 0,
                                    "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                                    "expanded": null
                                },
                                "routeSegment": "pexels-ksenia-chernaya-4740566-3.png",
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-ksenia-chernaya-4740566-3.png",
                                "changed": "2023-04-26T15:30:02Z",
                                "created": "2023-04-26T15:30:02Z",
                                "startPublish": "2023-04-26T15:30:02Z",
                                "stopPublish": null,
                                "saved": "2023-04-26T15:30:02Z",
                                "status": "Published",
                                "category": {
                                    "value": [],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "thumbnail": {
                                    "value": {
                                        "id": "epi.fx.blob://default/3e1be16d31c643bcbb745d71ac2be3d8/4a77aab34fad41519da127e52311c7b3_Thumbnail.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-ksenia-chernaya-4740566-3.png/Thumbnail"
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
                            {
                                "contentLink": {
                                    "id": 377,
                                    "workId": 0,
                                    "guidValue": "1725e0f1-e6a6-404d-afc4-11139ca3087a",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-matthias-zomer-339620-2.png",
                                    "expanded": null
                                },
                                "name": "pexels-matthias-zomer-339620 2.png",
                                "language": {
                                    "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-matthias-zomer-339620-2.png",
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
                                    "id": 3,
                                    "workId": 0,
                                    "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                                    "expanded": null
                                },
                                "routeSegment": "pexels-matthias-zomer-339620-2.png",
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-matthias-zomer-339620-2.png",
                                "changed": "2023-04-26T15:30:02Z",
                                "created": "2023-04-26T15:30:02Z",
                                "startPublish": "2023-04-26T15:30:02Z",
                                "stopPublish": null,
                                "saved": "2023-04-26T15:30:02Z",
                                "status": "Published",
                                "category": {
                                    "value": [],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "thumbnail": {
                                    "value": {
                                        "id": "epi.fx.blob://default/1725e0f1e6a6404dafc411139ca3087a/892964891a6a4ad1a363272aff09ecd3_Thumbnail.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-matthias-zomer-339620-2.png/Thumbnail"
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
                            {
                                "contentLink": {
                                    "id": 378,
                                    "workId": 0,
                                    "guidValue": "dc99027a-513a-4fe4-809c-8736e4f44047",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-michelle-leman-6798899-2.png",
                                    "expanded": null
                                },
                                "name": "pexels-michelle-leman-6798899 2.png",
                                "language": {
                                    "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-michelle-leman-6798899-2.png",
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
                                    "id": 3,
                                    "workId": 0,
                                    "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                                    "expanded": null
                                },
                                "routeSegment": "pexels-michelle-leman-6798899-2.png",
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-michelle-leman-6798899-2.png",
                                "changed": "2023-04-26T15:30:02Z",
                                "created": "2023-04-26T15:30:02Z",
                                "startPublish": "2023-04-26T15:30:02Z",
                                "stopPublish": null,
                                "saved": "2023-04-26T15:30:02Z",
                                "status": "Published",
                                "category": {
                                    "value": [],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "thumbnail": {
                                    "value": {
                                        "id": "epi.fx.blob://default/dc99027a513a4fe4809c8736e4f44047/5d7179f375034da9a75f89e7b3ebc8b1_Thumbnail.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-michelle-leman-6798899-2.png/Thumbnail"
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
                            {
                                "contentLink": {
                                    "id": 379,
                                    "workId": 0,
                                    "guidValue": "8b256418-6e05-424d-b944-4359260e0188",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-nathan-cowley-1153369-3.png",
                                    "expanded": null
                                },
                                "name": "pexels-nathan-cowley-1153369 3.png",
                                "language": {
                                    "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-nathan-cowley-1153369-3.png",
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
                                    "id": 3,
                                    "workId": 0,
                                    "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                                    "expanded": null
                                },
                                "routeSegment": "pexels-nathan-cowley-1153369-3.png",
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-nathan-cowley-1153369-3.png",
                                "changed": "2023-04-26T15:30:02Z",
                                "created": "2023-04-26T15:30:02Z",
                                "startPublish": "2023-04-26T15:30:02Z",
                                "stopPublish": null,
                                "saved": "2023-04-26T15:30:02Z",
                                "status": "Published",
                                "category": {
                                    "value": [],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "thumbnail": {
                                    "value": {
                                        "id": "epi.fx.blob://default/8b2564186e05424db9444359260e0188/668d92a2b8704953bfc7019069ec15f1_Thumbnail.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-nathan-cowley-1153369-3.png/Thumbnail"
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
                            {
                                "contentLink": {
                                    "id": 380,
                                    "workId": 0,
                                    "guidValue": "e7b5ffcf-0f9e-49e2-a9ac-db233e70c971",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-pavel-danilyuk-8763215-1.png",
                                    "expanded": null
                                },
                                "name": "pexels-pavel-danilyuk-8763215 1.png",
                                "language": {
                                    "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-pavel-danilyuk-8763215-1.png",
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
                                    "id": 3,
                                    "workId": 0,
                                    "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                                    "expanded": null
                                },
                                "routeSegment": "pexels-pavel-danilyuk-8763215-1.png",
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-pavel-danilyuk-8763215-1.png",
                                "changed": "2023-04-26T15:30:02Z",
                                "created": "2023-04-26T15:30:02Z",
                                "startPublish": "2023-04-26T15:30:02Z",
                                "stopPublish": null,
                                "saved": "2023-04-26T15:30:02Z",
                                "status": "Published",
                                "category": {
                                    "value": [],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "thumbnail": {
                                    "value": {
                                        "id": "epi.fx.blob://default/e7b5ffcf0f9e49e2a9acdb233e70c971/c52595c0d1a2415f853f8f169c6e662c_Thumbnail.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-pavel-danilyuk-8763215-1.png/Thumbnail"
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
                            {
                                "contentLink": {
                                    "id": 381,
                                    "workId": 0,
                                    "guidValue": "5c44e415-2dce-4700-8f3e-32189ccc7ea5",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-rfstudio-3621182-2.png",
                                    "expanded": null
                                },
                                "name": "pexels-rfstudio-3621182 2.png",
                                "language": {
                                    "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-rfstudio-3621182-2.png",
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
                                    "id": 3,
                                    "workId": 0,
                                    "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                                    "expanded": null
                                },
                                "routeSegment": "pexels-rfstudio-3621182-2.png",
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-rfstudio-3621182-2.png",
                                "changed": "2023-04-26T15:30:02Z",
                                "created": "2023-04-26T15:30:02Z",
                                "startPublish": "2023-04-26T15:30:02Z",
                                "stopPublish": null,
                                "saved": "2023-04-26T15:30:02Z",
                                "status": "Published",
                                "category": {
                                    "value": [],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "thumbnail": {
                                    "value": {
                                        "id": "epi.fx.blob://default/5c44e4152dce47008f3e32189ccc7ea5/b993f300f47c4c7887ea6fba84870cfe_Thumbnail.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-rfstudio-3621182-2.png/Thumbnail"
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
                            {
                                "contentLink": {
                                    "id": 382,
                                    "workId": 0,
                                    "guidValue": "36c7126d-3688-45ea-bef3-1343cd0b37f9",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-vera-arsic-984923-1.png",
                                    "expanded": null
                                },
                                "name": "pexels-vera-arsic-984923 1.png",
                                "language": {
                                    "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-vera-arsic-984923-1.png",
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
                                    "id": 3,
                                    "workId": 0,
                                    "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                                    "expanded": null
                                },
                                "routeSegment": "pexels-vera-arsic-984923-1.png",
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-vera-arsic-984923-1.png",
                                "changed": "2023-04-26T15:30:03Z",
                                "created": "2023-04-26T15:30:03Z",
                                "startPublish": "2023-04-26T15:30:03Z",
                                "stopPublish": null,
                                "saved": "2023-04-26T15:30:03Z",
                                "status": "Published",
                                "category": {
                                    "value": [],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "thumbnail": {
                                    "value": {
                                        "id": "epi.fx.blob://default/36c7126d368845eabef31343cd0b37f9/5b148ba53d7346a4b0780803df332443_Thumbnail.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-vera-arsic-984923-1.png/Thumbnail"
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
                            {
                                "contentLink": {
                                    "id": 383,
                                    "workId": 0,
                                    "guidValue": "4966b4cc-8a23-4988-bb1b-e366540dfd65",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-vlada-karpovich-4609049-2.png",
                                    "expanded": null
                                },
                                "name": "pexels-vlada-karpovich-4609049 2.png",
                                "language": {
                                    "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-vlada-karpovich-4609049-2.png",
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
                                    "id": 3,
                                    "workId": 0,
                                    "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                                    "expanded": null
                                },
                                "routeSegment": "pexels-vlada-karpovich-4609049-2.png",
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-vlada-karpovich-4609049-2.png",
                                "changed": "2023-04-26T15:30:03Z",
                                "created": "2023-04-26T15:30:03Z",
                                "startPublish": "2023-04-26T15:30:03Z",
                                "stopPublish": null,
                                "saved": "2023-04-26T15:30:03Z",
                                "status": "Published",
                                "category": {
                                    "value": [],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "thumbnail": {
                                    "value": {
                                        "id": "epi.fx.blob://default/4966b4cc8a234988bb1be366540dfd65/c1d6d69935254bc1b6dbf99974913937_Thumbnail.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-vlada-karpovich-4609049-2.png/Thumbnail"
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
                            {
                                "contentLink": {
                                    "id": 384,
                                    "workId": 0,
                                    "guidValue": "b27c7315-e5c6-4ef6-a07c-030e5c8abfc6",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-vlada-karpovich-5790838-2.png",
                                    "expanded": null
                                },
                                "name": "pexels-vlada-karpovich-5790838 2.png",
                                "language": {
                                    "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-vlada-karpovich-5790838-2.png",
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
                                    "id": 3,
                                    "workId": 0,
                                    "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                                    "expanded": null
                                },
                                "routeSegment": "pexels-vlada-karpovich-5790838-2.png",
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-vlada-karpovich-5790838-2.png",
                                "changed": "2023-04-26T15:30:03Z",
                                "created": "2023-04-26T15:30:03Z",
                                "startPublish": "2023-04-26T15:30:03Z",
                                "stopPublish": null,
                                "saved": "2023-04-26T15:30:03Z",
                                "status": "Published",
                                "category": {
                                    "value": [],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "thumbnail": {
                                    "value": {
                                        "id": "epi.fx.blob://default/b27c7315e5c64ef6a07c030e5c8abfc6/05388fe1a9844ffea7a9ef86bef85e4d_Thumbnail.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-vlada-karpovich-5790838-2.png/Thumbnail"
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
                            {
                                "contentLink": {
                                    "id": 385,
                                    "workId": 0,
                                    "guidValue": "69eb54c5-9b8f-40b9-a311-4313c3078843",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-yan-krukau-5793687-2.png",
                                    "expanded": null
                                },
                                "name": "pexels-yan-krukau-5793687 2.png",
                                "language": {
                                    "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-yan-krukau-5793687-2.png",
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
                                    "id": 3,
                                    "workId": 0,
                                    "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                                    "expanded": null
                                },
                                "routeSegment": "pexels-yan-krukau-5793687-2.png",
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-yan-krukau-5793687-2.png",
                                "changed": "2023-04-26T15:30:03Z",
                                "created": "2023-04-26T15:30:03Z",
                                "startPublish": "2023-04-26T15:30:03Z",
                                "stopPublish": null,
                                "saved": "2023-04-26T15:30:03Z",
                                "status": "Published",
                                "category": {
                                    "value": [],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "thumbnail": {
                                    "value": {
                                        "id": "epi.fx.blob://default/69eb54c59b8f40b9a3114313c3078843/5fe63278fcfa40e795bb425e8a3a255a_Thumbnail.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-yan-krukau-5793687-2.png/Thumbnail"
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
                            {
                                "contentLink": {
                                    "id": 386,
                                    "workId": 0,
                                    "guidValue": "e2a2bfc9-2469-458b-b309-80da0e325581",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-yan-krukau-6209820-1.png",
                                    "expanded": null
                                },
                                "name": "pexels-yan-krukau-6209820 1.png",
                                "language": {
                                    "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-yan-krukau-6209820-1.png",
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
                                    "id": 3,
                                    "workId": 0,
                                    "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                                    "expanded": null
                                },
                                "routeSegment": "pexels-yan-krukau-6209820-1.png",
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-yan-krukau-6209820-1.png",
                                "changed": "2023-04-26T15:30:03Z",
                                "created": "2023-04-26T15:30:03Z",
                                "startPublish": "2023-04-26T15:30:03Z",
                                "stopPublish": null,
                                "saved": "2023-04-26T15:30:03Z",
                                "status": "Published",
                                "category": {
                                    "value": [],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "thumbnail": {
                                    "value": {
                                        "id": "epi.fx.blob://default/e2a2bfc92469458bb30980da0e325581/33404f253b0f49e5965a75b2f07c7e48_Thumbnail.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-yan-krukau-6209820-1.png/Thumbnail"
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
                            }
                        ],
                        "value": [
                            {
                                "id": 359,
                                "workId": 0,
                                "guidValue": "18e30022-4142-4df4-a9e2-e4352b67f69a",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-andrea-piacquadio-3755514-1.png",
                                "expanded": null
                            },
                            {
                                "id": 360,
                                "workId": 0,
                                "guidValue": "7e73989a-4398-4814-8cb0-15e0348165a6",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-andrea-piacquadio-3758112-2.png",
                                "expanded": null
                            },
                            {
                                "id": 355,
                                "workId": 0,
                                "guidValue": "74e25ef7-90be-4346-b594-8e3fdabd04a5",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-andrea-piacquadio-785667-1.png",
                                "expanded": null
                            },
                            {
                                "id": 356,
                                "workId": 0,
                                "guidValue": "a6bb55d4-d513-45c9-9899-6844291b955d",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-andrea-piacquadio-837140-2.png",
                                "expanded": null
                            },
                            {
                                "id": 362,
                                "workId": 0,
                                "guidValue": "7db6c903-8a58-411e-a912-56acfc926803",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-august-de-richelieu-4428041-1.png",
                                "expanded": null
                            },
                            {
                                "id": 357,
                                "workId": 0,
                                "guidValue": "f22a5f1b-04ad-44ed-b7e3-0c87a984d1eb",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-andrea-piacquadio-927022-1.png",
                                "expanded": null
                            },
                            {
                                "id": 358,
                                "workId": 0,
                                "guidValue": "e2ea348c-48d0-4257-8fb2-3b0812e560b1",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-andrea-piacquadio-974911-1.png",
                                "expanded": null
                            },
                            {
                                "id": 361,
                                "workId": 0,
                                "guidValue": "439a1f2c-f697-43ed-9653-65417a026539",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-august-de-richelieu-4259140-1.png",
                                "expanded": null
                            },
                            {
                                "id": 363,
                                "workId": 0,
                                "guidValue": "019960f6-bc51-4b75-b8ef-7386c3eeb77b",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-cottonbro-studio-3171204-3.png",
                                "expanded": null
                            },
                            {
                                "id": 364,
                                "workId": 0,
                                "guidValue": "024cb725-f7a4-41fa-afcd-a291541078a1",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-cottonbro-studio-5858740-2.png",
                                "expanded": null
                            },
                            {
                                "id": 365,
                                "workId": 0,
                                "guidValue": "d738f3f8-54be-4ebf-8b16-c61c84d0467e",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-eren-li-7188804-1.png",
                                "expanded": null
                            },
                            {
                                "id": 366,
                                "workId": 0,
                                "guidValue": "74e90861-ab83-433f-ae8d-4b761713438e",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-gustavo-fring-4971287-2.png",
                                "expanded": null
                            },
                            {
                                "id": 367,
                                "workId": 0,
                                "guidValue": "e3af99ec-507a-4d31-863b-01fd3f1fc6af",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-gustavo-fring-6285397-2.png",
                                "expanded": null
                            },
                            {
                                "id": 368,
                                "workId": 0,
                                "guidValue": "de9b0610-53c5-4215-9b7f-abcf259c0282",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-ivan-samkov-8127503-1.png",
                                "expanded": null
                            },
                            {
                                "id": 369,
                                "workId": 0,
                                "guidValue": "c1606951-3ae3-437d-b89d-bdddbcb1f629",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-jack-sparrow-4198222-1.png",
                                "expanded": null
                            },
                            {
                                "id": 370,
                                "workId": 0,
                                "guidValue": "35e5a34d-7d50-477a-b9b6-25e7e9eab259",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-j-carter-254069-1.png",
                                "expanded": null
                            },
                            {
                                "id": 371,
                                "workId": 0,
                                "guidValue": "c1849e32-b9c4-429a-b237-a643bb9b81f9",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-jeshootscom-576831-2.png",
                                "expanded": null
                            },
                            {
                                "id": 372,
                                "workId": 0,
                                "guidValue": "d0d84c87-8b36-44dc-89c7-d7afef68ad7f",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-josh-willink-853406-1.png",
                                "expanded": null
                            },
                            {
                                "id": 373,
                                "workId": 0,
                                "guidValue": "930fa9ac-e5c6-456d-b1bc-e086f605d66e",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-kampus-production-6297576-3.png",
                                "expanded": null
                            },
                            {
                                "id": 374,
                                "workId": 0,
                                "guidValue": "c0f81439-b982-44b7-8622-19a39f025892",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-karolina-grabowska-4021808-3.png",
                                "expanded": null
                            },
                            {
                                "id": 375,
                                "workId": 0,
                                "guidValue": "5d338dbe-a481-4868-a375-54769ccd89d9",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-ketut-subiyanto-4814864-4.png",
                                "expanded": null
                            },
                            {
                                "id": 376,
                                "workId": 0,
                                "guidValue": "3e1be16d-31c6-43bc-bb74-5d71ac2be3d8",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-ksenia-chernaya-4740566-3.png",
                                "expanded": null
                            },
                            {
                                "id": 377,
                                "workId": 0,
                                "guidValue": "1725e0f1-e6a6-404d-afc4-11139ca3087a",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-matthias-zomer-339620-2.png",
                                "expanded": null
                            },
                            {
                                "id": 378,
                                "workId": 0,
                                "guidValue": "dc99027a-513a-4fe4-809c-8736e4f44047",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-michelle-leman-6798899-2.png",
                                "expanded": null
                            },
                            {
                                "id": 379,
                                "workId": 0,
                                "guidValue": "8b256418-6e05-424d-b944-4359260e0188",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-nathan-cowley-1153369-3.png",
                                "expanded": null
                            },
                            {
                                "id": 380,
                                "workId": 0,
                                "guidValue": "e7b5ffcf-0f9e-49e2-a9ac-db233e70c971",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-pavel-danilyuk-8763215-1.png",
                                "expanded": null
                            },
                            {
                                "id": 381,
                                "workId": 0,
                                "guidValue": "5c44e415-2dce-4700-8f3e-32189ccc7ea5",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-rfstudio-3621182-2.png",
                                "expanded": null
                            },
                            {
                                "id": 382,
                                "workId": 0,
                                "guidValue": "36c7126d-3688-45ea-bef3-1343cd0b37f9",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-vera-arsic-984923-1.png",
                                "expanded": null
                            },
                            {
                                "id": 383,
                                "workId": 0,
                                "guidValue": "4966b4cc-8a23-4988-bb1b-e366540dfd65",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-vlada-karpovich-4609049-2.png",
                                "expanded": null
                            },
                            {
                                "id": 384,
                                "workId": 0,
                                "guidValue": "b27c7315-e5c6-4ef6-a07c-030e5c8abfc6",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-vlada-karpovich-5790838-2.png",
                                "expanded": null
                            },
                            {
                                "id": 385,
                                "workId": 0,
                                "guidValue": "69eb54c5-9b8f-40b9-a311-4313c3078843",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-yan-krukau-5793687-2.png",
                                "expanded": null
                            },
                            {
                                "id": 386,
                                "workId": 0,
                                "guidValue": "e2a2bfc9-2469-458b-b309-80da0e325581",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pexels-yan-krukau-6209820-1.png",
                                "expanded": null
                            }
                        ],
                        "propertyDataType": "PropertyContentReferenceList"
                    }
                },
                {
                    "contentLink": {
                        "id": 387,
                        "workId": 0,
                        "guidValue": "fa443cb9-67ab-40ad-ac92-1ba9c09638f8",
                        "providerName": null,
                        "url": null,
                        "expanded": null
                    },
                    "name": "You need products you can trust to heal and thrive.",
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
                        "TwoCloumnBlock"
                    ],
                    "parentLink": {
                        "id": 350,
                        "workId": 0,
                        "guidValue": "00137857-27f5-47bc-b34e-ec3e69f4734a",
                        "providerName": null,
                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/0013785727f547bcb34eec3e69f4734a/",
                        "expanded": null
                    },
                    "routeSegment": null,
                    "url": null,
                    "changed": "2023-04-26T15:43:49Z",
                    "created": "2023-04-26T15:43:49Z",
                    "startPublish": "2023-04-26T15:43:49Z",
                    "stopPublish": null,
                    "saved": "2023-04-26T17:59:59Z",
                    "status": "Published",
                    "category": {
                        "value": [],
                        "propertyDataType": "PropertyCategory"
                    },
                    "title": {
                        "value": "You need products you can trust to heal and thrive.",
                        "propertyDataType": "PropertyLongString"
                    },
                    "description": {
                        "value": "<p>Our products are designed to meet you at every turn of your health care journey, wherever that may lead.</p>",
                        "propertyDataType": "PropertyXhtmlString"
                    },
                    "image": {
                        "value": null,
                        "propertyDataType": "PropertyContentReference"
                    },
                    "contentBlockArea": {
                        "value": null,
                        "propertyDataType": "PropertyContentArea"
                    },
                    "buttonText": {
                        "value": "View Products",
                        "propertyDataType": "PropertyLongString"
                    },
                    "buttonUrl": {
                        "value": "https://www.mckesson.com/",
                        "propertyDataType": "PropertyLongString"
                    },
                    "buttonColorCode": {
                        "value": "",
                        "propertyDataType": "PropertyLongString"
                    },
                    "assetPosition": {
                        "value": "Left",
                        "propertyDataType": "PropertyLongString"
                    },
                    "video": {
                        "value": null,
                        "propertyDataType": "PropertyContentReference"
                    },
                    "backgroundColor": {
                        "value": "",
                        "propertyDataType": "PropertyLongString"
                    },
                    "videoUrl": {
                        "value": "",
                        "propertyDataType": "PropertyLongString"
                    },
                    "backgroundImage": {
                        "expandedValue": {
                            "contentLink": {
                                "id": 401,
                                "workId": 0,
                                "guidValue": "41fb1df0-f038-45bd-9021-33d2975765a4",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/d518b5dcfe2b49349dfeb87faaae2c71/frame-4075657.png",
                                "expanded": null
                            },
                            "name": "Frame 4075657.png",
                            "language": {
                                "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/d518b5dcfe2b49349dfeb87faaae2c71/frame-4075657.png",
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
                                "id": 400,
                                "workId": 0,
                                "guidValue": "d518b5dc-fe2b-4934-9dfe-b87faaae2c71",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/d518b5dcfe2b49349dfeb87faaae2c71/",
                                "expanded": null
                            },
                            "routeSegment": "frame-4075657.png",
                            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/d518b5dcfe2b49349dfeb87faaae2c71/frame-4075657.png",
                            "changed": "2023-04-26T17:59:50Z",
                            "created": "2023-04-26T17:59:50Z",
                            "startPublish": "2023-04-26T17:59:50Z",
                            "stopPublish": null,
                            "saved": "2023-04-26T17:59:50Z",
                            "status": "Published",
                            "category": {
                                "value": [],
                                "propertyDataType": "PropertyCategory"
                            },
                            "thumbnail": {
                                "value": {
                                    "id": "epi.fx.blob://default/41fb1df0f03845bd902133d2975765a4/c4f6ae7292264c2a985ab989430508ff_Thumbnail.png",
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/d518b5dcfe2b49349dfeb87faaae2c71/frame-4075657.png/Thumbnail"
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
                            "id": 401,
                            "workId": 0,
                            "guidValue": "41fb1df0-f038-45bd-9021-33d2975765a4",
                            "providerName": null,
                            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/d518b5dcfe2b49349dfeb87faaae2c71/frame-4075657.png",
                            "expanded": null
                        },
                        "propertyDataType": "PropertyContentReference"
                    }
                },
                {
                    "contentLink": {
                        "id": 389,
                        "workId": 0,
                        "guidValue": "2d1a70a4-6b20-4dd2-a5d4-cfd24e1ebc71",
                        "providerName": null,
                        "url": null,
                        "expanded": null
                    },
                    "name": "Professional help at every turn.",
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
                        "TwoCloumnBlock"
                    ],
                    "parentLink": {
                        "id": 350,
                        "workId": 0,
                        "guidValue": "00137857-27f5-47bc-b34e-ec3e69f4734a",
                        "providerName": null,
                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/0013785727f547bcb34eec3e69f4734a/",
                        "expanded": null
                    },
                    "routeSegment": null,
                    "url": null,
                    "changed": "2023-04-26T15:46:53Z",
                    "created": "2023-04-26T15:46:53Z",
                    "startPublish": "2023-04-26T15:46:53Z",
                    "stopPublish": null,
                    "saved": "2023-04-26T15:49:04Z",
                    "status": "Published",
                    "category": {
                        "value": [],
                        "propertyDataType": "PropertyCategory"
                    },
                    "title": {
                        "value": "Professional help at every turn.",
                        "propertyDataType": "PropertyLongString"
                    },
                    "description": {
                        "value": "<p>Your pharmacists bring important insight to the table. At Foster &amp; Thrive we aim to reflect those insights with the products on your shelves. We are committed to helping you know exactly what you need, and easily find it.</p>",
                        "propertyDataType": "PropertyXhtmlString"
                    },
                    "image": {
                        "expandedValue": {
                            "contentLink": {
                                "id": 388,
                                "workId": 0,
                                "guidValue": "8c3296a6-3e74-4026-86c6-e20246841bad",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/professional-help-at-every-turn..png",
                                "expanded": null
                            },
                            "name": "Professional help at every turn..png",
                            "language": {
                                "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/professional-help-at-every-turn..png",
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
                                "id": 3,
                                "workId": 0,
                                "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                                "expanded": null
                            },
                            "routeSegment": "professional-help-at-every-turn..png",
                            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/professional-help-at-every-turn..png",
                            "changed": "2023-04-26T15:46:17Z",
                            "created": "2023-04-26T15:46:17Z",
                            "startPublish": "2023-04-26T15:46:17Z",
                            "stopPublish": null,
                            "saved": "2023-04-26T15:46:17Z",
                            "status": "Published",
                            "category": {
                                "value": [],
                                "propertyDataType": "PropertyCategory"
                            },
                            "thumbnail": {
                                "value": {
                                    "id": "epi.fx.blob://default/8c3296a63e74402686c6e20246841bad/0c1ff0cd38b3469297781c0ab4b192ef_Thumbnail.png",
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/professional-help-at-every-turn..png/Thumbnail"
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
                            "id": 388,
                            "workId": 0,
                            "guidValue": "8c3296a6-3e74-4026-86c6-e20246841bad",
                            "providerName": null,
                            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/professional-help-at-every-turn..png",
                            "expanded": null
                        },
                        "propertyDataType": "PropertyContentReference"
                    },
                    "contentBlockArea": {
                        "value": null,
                        "propertyDataType": "PropertyContentArea"
                    },
                    "buttonText": {
                        "value": "",
                        "propertyDataType": "PropertyLongString"
                    },
                    "buttonUrl": {
                        "value": "",
                        "propertyDataType": "PropertyLongString"
                    },
                    "buttonColorCode": {
                        "value": "",
                        "propertyDataType": "PropertyLongString"
                    },
                    "assetPosition": {
                        "value": "Right",
                        "propertyDataType": "PropertyLongString"
                    },
                    "video": {
                        "expandedValue": {
                            "contentLink": {
                                "id": 48,
                                "workId": 0,
                                "guidValue": "8d174aef-eaf3-4c63-a370-ccf1f74eb7f7",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/quality-that-matters.mp4",
                                "expanded": null
                            },
                            "name": "Quality-That-Matters.mp4",
                            "language": {
                                "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/quality-that-matters.mp4",
                                "displayName": "Invariant Language (Invariant Country)",
                                "name": ""
                            },
                            "existingLanguages": [],
                            "masterLanguage": null,
                            "contentType": [
                                "Video",
                                "Media",
                                "VideoFile"
                            ],
                            "parentLink": {
                                "id": 3,
                                "workId": 0,
                                "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                                "expanded": null
                            },
                            "routeSegment": "quality-that-matters.mp4",
                            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/quality-that-matters.mp4",
                            "changed": "2023-04-19T08:05:47Z",
                            "created": "2023-04-18T09:24:14Z",
                            "startPublish": "2023-04-18T09:24:14Z",
                            "stopPublish": null,
                            "saved": "2023-04-19T08:05:47Z",
                            "status": "Published",
                            "category": {
                                "value": [],
                                "propertyDataType": "PropertyCategory"
                            },
                            "thumbnail": {
                                "value": null,
                                "propertyDataType": "PropertyBlob"
                            },
                            "mimeType": {
                                "value": "video/mp4",
                                "propertyDataType": "PropertyString"
                            },
                            "copyright": {
                                "value": "",
                                "propertyDataType": "PropertyLongString"
                            },
                            "previewImage": {
                                "value": null,
                                "propertyDataType": "PropertyContentReference"
                            }
                        },
                        "value": {
                            "id": 48,
                            "workId": 0,
                            "guidValue": "8d174aef-eaf3-4c63-a370-ccf1f74eb7f7",
                            "providerName": null,
                            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/quality-that-matters.mp4",
                            "expanded": null
                        },
                        "propertyDataType": "PropertyContentReference"
                    },
                    "backgroundColor": {
                        "value": "",
                        "propertyDataType": "PropertyLongString"
                    },
                    "videoUrl": {
                        "value": "",
                        "propertyDataType": "PropertyLongString"
                    },
                    "backgroundImage": {
                        "value": null,
                        "propertyDataType": "PropertyContentReference"
                    }
                },
                {
                    "contentLink": {
                        "id": 391,
                        "workId": 0,
                        "guidValue": "a511bfab-c0e6-497d-8886-44f58d535478",
                        "providerName": null,
                        "url": null,
                        "expanded": null
                    },
                    "name": "My headaches were horrible!",
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
                        "TwoCloumnBlock"
                    ],
                    "parentLink": {
                        "id": 350,
                        "workId": 0,
                        "guidValue": "00137857-27f5-47bc-b34e-ec3e69f4734a",
                        "providerName": null,
                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/0013785727f547bcb34eec3e69f4734a/",
                        "expanded": null
                    },
                    "routeSegment": null,
                    "url": null,
                    "changed": "2023-04-26T15:48:32Z",
                    "created": "2023-04-26T15:48:32Z",
                    "startPublish": "2023-04-26T15:48:32Z",
                    "stopPublish": null,
                    "saved": "2023-04-26T15:48:32Z",
                    "status": "Published",
                    "category": {
                        "value": [],
                        "propertyDataType": "PropertyCategory"
                    },
                    "title": {
                        "value": "My headaches were horrible! ",
                        "propertyDataType": "PropertyLongString"
                    },
                    "description": {
                        "value": "<p>After 13 years of constant migraines, I finally found relief. Thank you Foster &amp; Thrive! I finally have my life back.</p>",
                        "propertyDataType": "PropertyXhtmlString"
                    },
                    "image": {
                        "expandedValue": {
                            "contentLink": {
                                "id": 390,
                                "workId": 0,
                                "guidValue": "e8b85c4a-95d8-44ae-8c71-d99bba2d9bcb",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/my-headaches-were-horrible.png",
                                "expanded": null
                            },
                            "name": "My headaches were horrible!.png",
                            "language": {
                                "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/my-headaches-were-horrible.png",
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
                                "id": 3,
                                "workId": 0,
                                "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                                "expanded": null
                            },
                            "routeSegment": "my-headaches-were-horrible.png",
                            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/my-headaches-were-horrible.png",
                            "changed": "2023-04-26T15:47:40Z",
                            "created": "2023-04-26T15:47:40Z",
                            "startPublish": "2023-04-26T15:47:40Z",
                            "stopPublish": null,
                            "saved": "2023-04-26T15:47:40Z",
                            "status": "Published",
                            "category": {
                                "value": [],
                                "propertyDataType": "PropertyCategory"
                            },
                            "thumbnail": {
                                "value": {
                                    "id": "epi.fx.blob://default/e8b85c4a95d844ae8c71d99bba2d9bcb/84cc01f3a80b41459c3898a404da7447_Thumbnail.png",
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/my-headaches-were-horrible.png/Thumbnail"
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
                            "id": 390,
                            "workId": 0,
                            "guidValue": "e8b85c4a-95d8-44ae-8c71-d99bba2d9bcb",
                            "providerName": null,
                            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/my-headaches-were-horrible.png",
                            "expanded": null
                        },
                        "propertyDataType": "PropertyContentReference"
                    },
                    "contentBlockArea": {
                        "value": null,
                        "propertyDataType": "PropertyContentArea"
                    },
                    "buttonText": {
                        "value": "VIEW BLOG",
                        "propertyDataType": "PropertyLongString"
                    },
                    "buttonUrl": {
                        "value": "https://www.mckesson.com/",
                        "propertyDataType": "PropertyLongString"
                    },
                    "buttonColorCode": {
                        "value": "",
                        "propertyDataType": "PropertyLongString"
                    },
                    "assetPosition": {
                        "value": "Left",
                        "propertyDataType": "PropertyLongString"
                    },
                    "video": {
                        "value": null,
                        "propertyDataType": "PropertyContentReference"
                    },
                    "backgroundColor": {
                        "value": "",
                        "propertyDataType": "PropertyLongString"
                    },
                    "videoUrl": {
                        "value": "",
                        "propertyDataType": "PropertyLongString"
                    },
                    "backgroundImage": {
                        "value": null,
                        "propertyDataType": "PropertyContentReference"
                    }
                }
            ],
            "value": [
                {
                    "displayOption": "",
                    "tag": null,
                    "contentLink": {
                        "id": 392,
                        "workId": 0,
                        "guidValue": "d62ffcd6-c1ee-4a4b-9b22-754c8ba33b55",
                        "providerName": null,
                        "url": null,
                        "expanded": null
                    }
                },
                {
                    "displayOption": "",
                    "tag": null,
                    "contentLink": {
                        "id": 351,
                        "workId": 0,
                        "guidValue": "661c5ee3-a5c1-4d6f-933b-dea11a858c62",
                        "providerName": null,
                        "url": null,
                        "expanded": null
                    }
                },
                {
                    "displayOption": "",
                    "tag": null,
                    "contentLink": {
                        "id": 352,
                        "workId": 0,
                        "guidValue": "0b79d258-53bc-4941-95a8-d93427385763",
                        "providerName": null,
                        "url": null,
                        "expanded": null
                    }
                },
                {
                    "displayOption": "",
                    "tag": null,
                    "contentLink": {
                        "id": 353,
                        "workId": 0,
                        "guidValue": "3a7e8242-481c-453c-90c2-4ac1bcac6a60",
                        "providerName": null,
                        "url": null,
                        "expanded": null
                    }
                },
                {
                    "displayOption": "",
                    "tag": null,
                    "contentLink": {
                        "id": 387,
                        "workId": 0,
                        "guidValue": "fa443cb9-67ab-40ad-ac92-1ba9c09638f8",
                        "providerName": null,
                        "url": null,
                        "expanded": null
                    }
                },
                {
                    "displayOption": "",
                    "tag": null,
                    "contentLink": {
                        "id": 389,
                        "workId": 0,
                        "guidValue": "2d1a70a4-6b20-4dd2-a5d4-cfd24e1ebc71",
                        "providerName": null,
                        "url": null,
                        "expanded": null
                    }
                },
                {
                    "displayOption": "",
                    "tag": null,
                    "contentLink": {
                        "id": 391,
                        "workId": 0,
                        "guidValue": "a511bfab-c0e6-497d-8886-44f58d535478",
                        "providerName": null,
                        "url": null,
                        "expanded": null
                    }
                }
            ],
            "propertyDataType": "PropertyContentArea"
        },
        "backgroundImage": {
            "value": null,
            "propertyDataType": "PropertyContentReference"
        },
        "seoSection": {
            "value": null,
            "propertyDataType": "PropertyContentArea"
        }
    }
]