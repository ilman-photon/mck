import { render, screen, act } from '@testing-library/react';
import SelectedProductCategory from "@/pages/selected_product_category";
import axios from "axios";
jest.mock("axios");

jest.mock('next/router', () => {
    return {
      useRouter:jest.fn()
    }
  });

describe('SelectedProductCategory - Display values from CMS', () => {
  beforeEach(() => {
    axios.get.mockResolvedValue( {data: selectedProductData} );
  });

  test('Render Selected Product Category', async () => {
    await act(async () => {
      render(<SelectedProductCategory />);
    });
    expect(screen.getByText('Acute Care')).toBeInTheDocument();
  });
});

const selectedProductData = [
    {
        "contentLink": {
            "id": 24,
            "workId": 0,
            "guidValue": "d610cd82-a74d-4264-99dd-64aa064cbf8c",
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/",
            "expanded": null
        },
        "name": "Home",
        "language": {
            "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/",
            "displayName": "English",
            "name": "en"
        },
        "blockArea": {
            "expandedValue": [
                {
                    "contentLink": {
                        "id": 27,
                        "workId": 0,
                        "guidValue": "6f02cc7d-15ea-474e-a554-471eb3395b69",
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
                        "id": 3,
                        "workId": 0,
                        "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                        "providerName": null,
                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                        "expanded": null
                    },
                    "routeSegment": null,
                    "url": null,
                    "changed": "2023-04-18T09:02:24Z",
                    "created": "2023-04-18T09:02:06Z",
                    "startPublish": "2023-04-18T09:02:24Z",
                    "stopPublish": null,
                    "saved": "2023-05-04T08:39:35Z",
                    "status": "Published",
                    "category": {
                        "value": [],
                        "propertyDataType": "PropertyCategory"
                    },
                    "contentBlockArea": {
                        "expandedValue": [
                            {
                                "contentLink": {
                                    "id": 339,
                                    "workId": 0,
                                    "guidValue": "63b2c740-d1e4-4370-9a2f-0544a7ccf604",
                                    "providerName": null,
                                    "url": null,
                                    "expanded": null
                                },
                                "name": "Carousel 1 - Thrive on the Journey.",
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
                                    "id": 29,
                                    "workId": 0,
                                    "guidValue": "dd580df3-604f-4589-8628-dafb6708e49f",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/dd580df3604f45898628dafb6708e49f/",
                                    "expanded": null
                                },
                                "routeSegment": null,
                                "url": null,
                                "changed": "2023-04-26T10:47:17Z",
                                "created": "2023-04-26T10:47:17Z",
                                "startPublish": "2023-04-26T10:47:17Z",
                                "stopPublish": null,
                                "saved": "2023-05-13T15:26:05Z",
                                "status": "Published",
                                "category": {
                                    "value": [],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "title": {
                                    "value": "Thrive on the Journey",
                                    "propertyDataType": "PropertyLongString"
                                },
                                "description": {
                                    "value": "<p>Health is a journey. Sometimes on track and always moving.&nbsp;</p>",
                                    "propertyDataType": "PropertyXhtmlString"
                                },
                                "image": {
                                    "expandedValue": {
                                        "contentLink": {
                                            "id": 338,
                                            "workId": 0,
                                            "guidValue": "26c183df-50d6-401e-a764-b13dcbddc09a",
                                            "providerName": null,
                                            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/banner_6.png",
                                            "expanded": null
                                        },
                                        "name": "banner_6.png",
                                        "language": {
                                            "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/banner_6.png",
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
                                        "routeSegment": "banner_6.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/banner_6.png",
                                        "changed": "2023-04-26T10:43:49Z",
                                        "created": "2023-04-26T10:43:49Z",
                                        "startPublish": "2023-04-26T10:43:49Z",
                                        "stopPublish": null,
                                        "saved": "2023-05-06T04:36:11Z",
                                        "status": "Published",
                                        "category": {
                                            "value": [],
                                            "propertyDataType": "PropertyCategory"
                                        },
                                        "thumbnail": {
                                            "value": {
                                                "id": "epi.fx.blob://default/26c183df50d6401ea764b13dcbddc09a/a389b65e9d8847b0a0e98ca9bc1b4ca8_Thumbnail.png",
                                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/banner_6.png/Thumbnail"
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
                                        "id": 338,
                                        "workId": 0,
                                        "guidValue": "26c183df-50d6-401e-a764-b13dcbddc09a",
                                        "providerName": null,
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/banner_6.png",
                                        "expanded": null
                                    },
                                    "propertyDataType": "PropertyContentReference"
                                },
                                "buttonText": {
                                    "value": "LEARN MORE",
                                    "propertyDataType": "PropertyLongString"
                                },
                                "buttonUrl": {
                                    "value": "https://mckesson.com/",
                                    "propertyDataType": "PropertyUrl"
                                },
                                "ctaButtonColor": {
                                    "value": "#2CCFAD",
                                    "propertyDataType": "PropertyLongString"
                                }
                            },
                            {
                                "contentLink": {
                                    "id": 341,
                                    "workId": 0,
                                    "guidValue": "502ffd8c-3ff9-4935-9d69-8c8b9c1c329f",
                                    "providerName": null,
                                    "url": null,
                                    "expanded": null
                                },
                                "name": "Carousel 2 - Thrive Onward.",
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
                                    "id": 29,
                                    "workId": 0,
                                    "guidValue": "dd580df3-604f-4589-8628-dafb6708e49f",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/dd580df3604f45898628dafb6708e49f/",
                                    "expanded": null
                                },
                                "routeSegment": null,
                                "url": null,
                                "changed": "2023-04-26T10:50:05Z",
                                "created": "2023-04-26T10:50:05Z",
                                "startPublish": "2023-04-26T10:50:05Z",
                                "stopPublish": null,
                                "saved": "2023-05-08T14:52:44Z",
                                "status": "Published",
                                "category": {
                                    "value": [],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "title": {
                                    "value": "Thrive Onward.",
                                    "propertyDataType": "PropertyLongString"
                                },
                                "description": {
                                    "value": "<p>Good care is about more than getting better. It&rsquo;s about feeling your best.</p>",
                                    "propertyDataType": "PropertyXhtmlString"
                                },
                                "image": {
                                    "expandedValue": {
                                        "contentLink": {
                                            "id": 340,
                                            "workId": 0,
                                            "guidValue": "c3d78ebc-cca8-4093-83ea-34d91267e4d5",
                                            "providerName": null,
                                            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/banner_7.png",
                                            "expanded": null
                                        },
                                        "name": "banner_7.png",
                                        "language": {
                                            "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/banner_7.png",
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
                                        "routeSegment": "banner_7.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/banner_7.png",
                                        "changed": "2023-04-26T10:49:47Z",
                                        "created": "2023-04-26T10:49:47Z",
                                        "startPublish": "2023-04-26T10:49:47Z",
                                        "stopPublish": null,
                                        "saved": "2023-05-06T04:36:11Z",
                                        "status": "Published",
                                        "category": {
                                            "value": [],
                                            "propertyDataType": "PropertyCategory"
                                        },
                                        "thumbnail": {
                                            "value": {
                                                "id": "epi.fx.blob://default/c3d78ebccca8409383ea34d91267e4d5/2442b391812645b681f2515a4779320d_Thumbnail.png",
                                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/banner_7.png/Thumbnail"
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
                                        "id": 340,
                                        "workId": 0,
                                        "guidValue": "c3d78ebc-cca8-4093-83ea-34d91267e4d5",
                                        "providerName": null,
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/banner_7.png",
                                        "expanded": null
                                    },
                                    "propertyDataType": "PropertyContentReference"
                                },
                                "buttonText": {
                                    "value": "LEARN MORE",
                                    "propertyDataType": "PropertyLongString"
                                },
                                "buttonUrl": {
                                    "value": "https://mckesson.com/",
                                    "propertyDataType": "PropertyUrl"
                                },
                                "ctaButtonColor": {
                                    "value": "#2CCFAD",
                                    "propertyDataType": "PropertyLongString"
                                }
                            },
                            {
                                "contentLink": {
                                    "id": 343,
                                    "workId": 0,
                                    "guidValue": "e162c32e-2df8-4b7d-94b1-ac3c57c97de3",
                                    "providerName": null,
                                    "url": null,
                                    "expanded": null
                                },
                                "name": "Carousel 3 - Thrive, every day.",
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
                                    "id": 29,
                                    "workId": 0,
                                    "guidValue": "dd580df3-604f-4589-8628-dafb6708e49f",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/dd580df3604f45898628dafb6708e49f/",
                                    "expanded": null
                                },
                                "routeSegment": null,
                                "url": null,
                                "changed": "2023-04-26T10:51:48Z",
                                "created": "2023-04-26T10:51:48Z",
                                "startPublish": "2023-04-26T10:51:48Z",
                                "stopPublish": null,
                                "saved": "2023-05-08T14:53:12Z",
                                "status": "Published",
                                "category": {
                                    "value": [],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "title": {
                                    "value": "Thrive, every day.",
                                    "propertyDataType": "PropertyLongString"
                                },
                                "description": {
                                    "value": "<p>Even an ordinary day is a new opportunity to treat yourself well.</p>",
                                    "propertyDataType": "PropertyXhtmlString"
                                },
                                "image": {
                                    "expandedValue": {
                                        "contentLink": {
                                            "id": 342,
                                            "workId": 0,
                                            "guidValue": "f2a6329e-df3d-4475-b3f3-0d7d5fccd16e",
                                            "providerName": null,
                                            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/banner_8.png",
                                            "expanded": null
                                        },
                                        "name": "banner_8.png",
                                        "language": {
                                            "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/banner_8.png",
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
                                        "routeSegment": "banner_8.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/banner_8.png",
                                        "changed": "2023-04-26T10:51:20Z",
                                        "created": "2023-04-26T10:51:20Z",
                                        "startPublish": "2023-04-26T10:51:20Z",
                                        "stopPublish": null,
                                        "saved": "2023-05-06T04:36:11Z",
                                        "status": "Published",
                                        "category": {
                                            "value": [],
                                            "propertyDataType": "PropertyCategory"
                                        },
                                        "thumbnail": {
                                            "value": {
                                                "id": "epi.fx.blob://default/f2a6329edf3d4475b3f30d7d5fccd16e/65266cf9d2c64840ae0e88cff114e4a0_Thumbnail.png",
                                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/banner_8.png/Thumbnail"
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
                                        "id": 342,
                                        "workId": 0,
                                        "guidValue": "f2a6329e-df3d-4475-b3f3-0d7d5fccd16e",
                                        "providerName": null,
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/banner_8.png",
                                        "expanded": null
                                    },
                                    "propertyDataType": "PropertyContentReference"
                                },
                                "buttonText": {
                                    "value": "LEARN MORE",
                                    "propertyDataType": "PropertyLongString"
                                },
                                "buttonUrl": {
                                    "value": "https://mckesson.com/",
                                    "propertyDataType": "PropertyUrl"
                                },
                                "ctaButtonColor": {
                                    "value": "#2CCFAD",
                                    "propertyDataType": "PropertyLongString"
                                }
                            }
                        ],
                        "value": [
                            {
                                "displayOption": "",
                                "tag": null,
                                "contentLink": {
                                    "id": 339,
                                    "workId": 0,
                                    "guidValue": "63b2c740-d1e4-4370-9a2f-0544a7ccf604",
                                    "providerName": null,
                                    "url": null,
                                    "expanded": null
                                }
                            },
                            {
                                "displayOption": "",
                                "tag": null,
                                "contentLink": {
                                    "id": 341,
                                    "workId": 0,
                                    "guidValue": "502ffd8c-3ff9-4935-9d69-8c8b9c1c329f",
                                    "providerName": null,
                                    "url": null,
                                    "expanded": null
                                }
                            },
                            {
                                "displayOption": "",
                                "tag": null,
                                "contentLink": {
                                    "id": 343,
                                    "workId": 0,
                                    "guidValue": "e162c32e-2df8-4b7d-94b1-ac3c57c97de3",
                                    "providerName": null,
                                    "url": null,
                                    "expanded": null
                                }
                            }
                        ],
                        "propertyDataType": "PropertyContentArea"
                    },
                    "timeInterval": {
                        "value": "600",
                        "propertyDataType": "PropertyLongString"
                    },
                    "autoRotate": {
                        "value": null,
                        "propertyDataType": "PropertyBoolean"
                    }
                },
                {
                    "contentLink": {
                        "id": 33,
                        "workId": 0,
                        "guidValue": "e94c6c5c-2dab-4ac2-a3b0-381c8c0a5d9b",
                        "providerName": null,
                        "url": null,
                        "expanded": null
                    },
                    "name": "Product Categories",
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
                        "FourColumnBlock"
                    ],
                    "parentLink": {
                        "id": 3,
                        "workId": 0,
                        "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                        "providerName": null,
                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                        "expanded": null
                    },
                    "routeSegment": null,
                    "url": null,
                    "changed": "2023-04-18T09:09:15Z",
                    "created": "2023-04-18T09:09:08Z",
                    "startPublish": "2023-04-18T09:09:15Z",
                    "stopPublish": null,
                    "saved": "2023-04-28T02:57:32Z",
                    "status": "Published",
                    "category": {
                        "value": [],
                        "propertyDataType": "PropertyCategory"
                    },
                    "contentBlockArea": {
                        "expandedValue": [
                            {
                                "contentLink": {
                                    "id": 128,
                                    "workId": 0,
                                    "guidValue": "ce527f9a-97d8-4ccf-be55-b1c0da77e198",
                                    "providerName": null,
                                    "url": null,
                                    "expanded": null
                                },
                                "name": "Explore Acute Care",
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
                                    "CategoryGridItemBlock"
                                ],
                                "parentLink": {
                                    "id": 3,
                                    "workId": 0,
                                    "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                                    "expanded": null
                                },
                                "routeSegment": null,
                                "url": null,
                                "changed": "2023-04-20T17:47:05Z",
                                "created": "2023-04-20T17:45:32Z",
                                "startPublish": "2023-04-20T17:47:05Z",
                                "stopPublish": null,
                                "saved": "2023-05-13T13:34:20Z",
                                "status": "Published",
                                "category": {
                                    "value": [],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "productCategoryImage": {
                                    "expandedValue": {
                                        "contentLink": {
                                            "id": 209,
                                            "workId": 0,
                                            "guidValue": "942efe69-4523-42b7-b012-17555a37eb8f",
                                            "providerName": null,
                                            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/everyday_care_200x200_new.png",
                                            "expanded": null
                                        },
                                        "name": "everyday_care_200x200_new.png",
                                        "language": {
                                            "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/everyday_care_200x200_new.png",
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
                                        "routeSegment": "everyday_care_200x200_new.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/everyday_care_200x200_new.png",
                                        "changed": "2023-04-21T10:51:31Z",
                                        "created": "2023-04-21T10:51:16Z",
                                        "startPublish": "2023-04-21T10:51:16Z",
                                        "stopPublish": null,
                                        "saved": "2023-05-06T04:36:04Z",
                                        "status": "Published",
                                        "category": {
                                            "value": [],
                                            "propertyDataType": "PropertyCategory"
                                        },
                                        "thumbnail": {
                                            "value": {
                                                "id": "epi.fx.blob://default/942efe69452342b7b01217555a37eb8f/3c67f6d03ff44aff896500828bc0023d_Thumbnail.png",
                                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/everyday_care_200x200_new.png/Thumbnail"
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
                                        "id": 209,
                                        "workId": 0,
                                        "guidValue": "942efe69-4523-42b7-b012-17555a37eb8f",
                                        "providerName": null,
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/everyday_care_200x200_new.png",
                                        "expanded": null
                                    },
                                    "propertyDataType": "PropertyContentReference"
                                },
                                "productCategoryName": {
                                    "value": "Acute ",
                                    "propertyDataType": "PropertyLongString"
                                },
                                "productCategoryDescription": {
                                    "value": "<p>&nbsp;Products to care for your specific symptoms.</p>",
                                    "propertyDataType": "PropertyXhtmlString"
                                },
                                "productCategoryType": {
                                    "value": [
                                        {
                                            "id": 19,
                                            "name": "Acute Care",
                                            "description": "Acute Care"
                                        }
                                    ],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "productCategoryUrl": {
                                    "value": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/product-category/acute-care/?category=Acute+Care",
                                    "propertyDataType": "PropertyUrl"
                                }
                            },
                            {
                                "contentLink": {
                                    "id": 129,
                                    "workId": 0,
                                    "guidValue": "d0999b38-a706-45bd-9a09-2a4844d5e4f9",
                                    "providerName": null,
                                    "url": null,
                                    "expanded": null
                                },
                                "name": "Explore Preventative Care",
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
                                    "CategoryGridItemBlock"
                                ],
                                "parentLink": {
                                    "id": 3,
                                    "workId": 0,
                                    "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                                    "expanded": null
                                },
                                "routeSegment": null,
                                "url": null,
                                "changed": "2023-04-20T17:48:57Z",
                                "created": "2023-04-20T17:48:01Z",
                                "startPublish": "2023-04-20T17:48:57Z",
                                "stopPublish": null,
                                "saved": "2023-05-13T13:34:50Z",
                                "status": "Published",
                                "category": {
                                    "value": [],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "productCategoryImage": {
                                    "expandedValue": {
                                        "contentLink": {
                                            "id": 208,
                                            "workId": 0,
                                            "guidValue": "ff8dba7c-9c79-477f-abbd-921f4bc6a0ff",
                                            "providerName": null,
                                            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/preventative_care_200x200.png",
                                            "expanded": null
                                        },
                                        "name": "preventative_care_200x200.png",
                                        "language": {
                                            "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/preventative_care_200x200.png",
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
                                        "routeSegment": "preventative_care_200x200.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/preventative_care_200x200.png",
                                        "changed": "2023-04-21T10:48:39Z",
                                        "created": "2023-04-21T10:38:07Z",
                                        "startPublish": "2023-04-21T10:38:07Z",
                                        "stopPublish": null,
                                        "saved": "2023-05-06T04:36:03Z",
                                        "status": "Published",
                                        "category": {
                                            "value": [],
                                            "propertyDataType": "PropertyCategory"
                                        },
                                        "thumbnail": {
                                            "value": {
                                                "id": "epi.fx.blob://default/ff8dba7c9c79477fabbd921f4bc6a0ff/c440c1a8eece44379c99947c758ab3f0_Thumbnail.png",
                                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/preventative_care_200x200.png/Thumbnail"
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
                                        "id": 208,
                                        "workId": 0,
                                        "guidValue": "ff8dba7c-9c79-477f-abbd-921f4bc6a0ff",
                                        "providerName": null,
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/preventative_care_200x200.png",
                                        "expanded": null
                                    },
                                    "propertyDataType": "PropertyContentReference"
                                },
                                "productCategoryName": {
                                    "value": "Preventative Care",
                                    "propertyDataType": "PropertyLongString"
                                },
                                "productCategoryDescription": {
                                    "value": "<p>Products to help you prepare for anything.</p>",
                                    "propertyDataType": "PropertyXhtmlString"
                                },
                                "productCategoryType": {
                                    "value": [
                                        {
                                            "id": 28,
                                            "name": "Preventative Care",
                                            "description": "Preventative Care"
                                        }
                                    ],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "productCategoryUrl": {
                                    "value": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/product-category/preventative-care/?category=Preventative+Care",
                                    "propertyDataType": "PropertyUrl"
                                }
                            },
                            {
                                "contentLink": {
                                    "id": 130,
                                    "workId": 0,
                                    "guidValue": "e8d5b77b-178f-441b-9e5f-61907fd1630d",
                                    "providerName": null,
                                    "url": null,
                                    "expanded": null
                                },
                                "name": "Explore Everyday Care",
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
                                    "CategoryGridItemBlock"
                                ],
                                "parentLink": {
                                    "id": 3,
                                    "workId": 0,
                                    "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                                    "expanded": null
                                },
                                "routeSegment": null,
                                "url": null,
                                "changed": "2023-04-20T17:50:16Z",
                                "created": "2023-04-20T17:49:28Z",
                                "startPublish": "2023-04-20T17:50:16Z",
                                "stopPublish": null,
                                "saved": "2023-05-13T13:35:19Z",
                                "status": "Published",
                                "category": {
                                    "value": [],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "productCategoryImage": {
                                    "expandedValue": {
                                        "contentLink": {
                                            "id": 220,
                                            "workId": 0,
                                            "guidValue": "c0be1f09-ac6e-4bb9-9828-9573fc33e423",
                                            "providerName": null,
                                            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/every_day_care_200x200.svg",
                                            "expanded": null
                                        },
                                        "name": "every_day_care_200x200.svg",
                                        "language": {
                                            "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/every_day_care_200x200.svg",
                                            "displayName": "Invariant Language (Invariant Country)",
                                            "name": ""
                                        },
                                        "existingLanguages": [],
                                        "masterLanguage": null,
                                        "contentType": [
                                            "Image",
                                            "Media",
                                            "VectorImageFile"
                                        ],
                                        "parentLink": {
                                            "id": 3,
                                            "workId": 0,
                                            "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                                            "providerName": null,
                                            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                                            "expanded": null
                                        },
                                        "routeSegment": "every_day_care_200x200.svg",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/every_day_care_200x200.svg",
                                        "changed": "2023-04-21T12:05:46Z",
                                        "created": "2023-04-21T12:05:46Z",
                                        "startPublish": "2023-04-21T12:05:46Z",
                                        "stopPublish": null,
                                        "saved": "2023-05-06T04:36:05Z",
                                        "status": "Published",
                                        "category": {
                                            "value": [],
                                            "propertyDataType": "PropertyCategory"
                                        },
                                        "thumbnail": {
                                            "value": {
                                                "id": "epi.fx.blob://default/c0be1f09ac6e4bb998289573fc33e423/931d227ee0924c0c9fc1ba4da82776d2.svg",
                                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/every_day_care_200x200.svg/Thumbnail"
                                            },
                                            "propertyDataType": "PropertyBlob"
                                        },
                                        "mimeType": {
                                            "value": "image/svg+xml",
                                            "propertyDataType": "PropertyString"
                                        }
                                    },
                                    "value": {
                                        "id": 220,
                                        "workId": 0,
                                        "guidValue": "c0be1f09-ac6e-4bb9-9828-9573fc33e423",
                                        "providerName": null,
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/every_day_care_200x200.svg",
                                        "expanded": null
                                    },
                                    "propertyDataType": "PropertyContentReference"
                                },
                                "productCategoryName": {
                                    "value": "Every Day Care",
                                    "propertyDataType": "PropertyLongString"
                                },
                                "productCategoryDescription": {
                                    "value": "<p>Products to support your daily routine.</p>",
                                    "propertyDataType": "PropertyXhtmlString"
                                },
                                "productCategoryType": {
                                    "value": [
                                        {
                                            "id": 35,
                                            "name": "Every Day Care",
                                            "description": "Every Day Care"
                                        }
                                    ],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "productCategoryUrl": {
                                    "value": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/product-category/every-day-care/?category=Every+Day+Care",
                                    "propertyDataType": "PropertyUrl"
                                }
                            },
                            {
                                "contentLink": {
                                    "id": 131,
                                    "workId": 0,
                                    "guidValue": "de4ad721-b3ff-4c08-b29d-bc883a941f84",
                                    "providerName": null,
                                    "url": null,
                                    "expanded": null
                                },
                                "name": "Explore Diganostic Care",
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
                                    "CategoryGridItemBlock"
                                ],
                                "parentLink": {
                                    "id": 3,
                                    "workId": 0,
                                    "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                                    "expanded": null
                                },
                                "routeSegment": null,
                                "url": null,
                                "changed": "2023-04-20T17:51:19Z",
                                "created": "2023-04-20T17:50:39Z",
                                "startPublish": "2023-04-20T17:51:19Z",
                                "stopPublish": null,
                                "saved": "2023-05-13T13:35:49Z",
                                "status": "Published",
                                "category": {
                                    "value": [],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "productCategoryImage": {
                                    "expandedValue": {
                                        "contentLink": {
                                            "id": 210,
                                            "workId": 0,
                                            "guidValue": "011b202a-74a2-455c-8ac8-12bc2e042c71",
                                            "providerName": null,
                                            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/diagnostic_care_200x200.png",
                                            "expanded": null
                                        },
                                        "name": "diagnostic_care_200x200.png",
                                        "language": {
                                            "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/diagnostic_care_200x200.png",
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
                                        "routeSegment": "diagnostic_care_200x200.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/diagnostic_care_200x200.png",
                                        "changed": "2023-04-21T11:00:09Z",
                                        "created": "2023-04-21T10:59:15Z",
                                        "startPublish": "2023-04-21T10:59:15Z",
                                        "stopPublish": null,
                                        "saved": "2023-05-06T04:36:04Z",
                                        "status": "Published",
                                        "category": {
                                            "value": [],
                                            "propertyDataType": "PropertyCategory"
                                        },
                                        "thumbnail": {
                                            "value": {
                                                "id": "epi.fx.blob://default/011b202a74a2455c8ac812bc2e042c71/57664db2a69b437796676a466ca7df9b_Thumbnail.png",
                                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/diagnostic_care_200x200.png/Thumbnail"
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
                                        "id": 210,
                                        "workId": 0,
                                        "guidValue": "011b202a-74a2-455c-8ac8-12bc2e042c71",
                                        "providerName": null,
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/diagnostic_care_200x200.png",
                                        "expanded": null
                                    },
                                    "propertyDataType": "PropertyContentReference"
                                },
                                "productCategoryName": {
                                    "value": "Diagnostic Care",
                                    "propertyDataType": "PropertyLongString"
                                },
                                "productCategoryDescription": {
                                    "value": "<p>Tools to monitor your health.</p>",
                                    "propertyDataType": "PropertyXhtmlString"
                                },
                                "productCategoryType": {
                                    "value": [
                                        {
                                            "id": 46,
                                            "name": "Diagnostic Care",
                                            "description": "Diagnostic Care"
                                        }
                                    ],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "productCategoryUrl": {
                                    "value": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/product-category/diagnostic-care/?category=Diagnostic+Care",
                                    "propertyDataType": "PropertyUrl"
                                }
                            }
                        ],
                        "value": [
                            {
                                "displayOption": "",
                                "tag": null,
                                "contentLink": {
                                    "id": 128,
                                    "workId": 0,
                                    "guidValue": "ce527f9a-97d8-4ccf-be55-b1c0da77e198",
                                    "providerName": null,
                                    "url": null,
                                    "expanded": null
                                }
                            },
                            {
                                "displayOption": "",
                                "tag": null,
                                "contentLink": {
                                    "id": 129,
                                    "workId": 0,
                                    "guidValue": "d0999b38-a706-45bd-9a09-2a4844d5e4f9",
                                    "providerName": null,
                                    "url": null,
                                    "expanded": null
                                }
                            },
                            {
                                "displayOption": "",
                                "tag": null,
                                "contentLink": {
                                    "id": 130,
                                    "workId": 0,
                                    "guidValue": "e8d5b77b-178f-441b-9e5f-61907fd1630d",
                                    "providerName": null,
                                    "url": null,
                                    "expanded": null
                                }
                            },
                            {
                                "displayOption": "",
                                "tag": null,
                                "contentLink": {
                                    "id": 131,
                                    "workId": 0,
                                    "guidValue": "de4ad721-b3ff-4c08-b29d-bc883a941f84",
                                    "providerName": null,
                                    "url": null,
                                    "expanded": null
                                }
                            }
                        ],
                        "propertyDataType": "PropertyContentArea"
                    }
                },
                {
                    "contentLink": {
                        "id": 46,
                        "workId": 0,
                        "guidValue": "8b69b1ff-d047-4ebc-abdf-8701f49c1915",
                        "providerName": null,
                        "url": null,
                        "expanded": null
                    },
                    "name": "Where to Buy",
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
                        "id": 25,
                        "workId": 0,
                        "guidValue": "792927be-e92f-4987-8065-30f243bccdea",
                        "providerName": null,
                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/792927bee92f4987806530f243bccdea/",
                        "expanded": null
                    },
                    "routeSegment": null,
                    "url": null,
                    "changed": "2023-04-18T09:22:40Z",
                    "created": "2023-04-18T09:22:40Z",
                    "startPublish": "2023-04-18T09:22:40Z",
                    "stopPublish": null,
                    "saved": "2023-05-09T17:28:16Z",
                    "status": "Published",
                    "category": {
                        "value": [],
                        "propertyDataType": "PropertyCategory"
                    },
                    "title": {
                        "value": "On Shelves Near You",
                        "propertyDataType": "PropertyLongString"
                    },
                    "description": {
                        "value": "<p>You can find us at your local independently owned Health Mart pharmacies. Check back often to find out where you can find us next!</p>",
                        "propertyDataType": "PropertyXhtmlString"
                    },
                    "image": {
                        "expandedValue": {
                            "contentLink": {
                                "id": 211,
                                "workId": 0,
                                "guidValue": "de014fb6-4aa1-4e49-9c9f-0a11d45ca1e6",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/desktop_where_to_buy.png",
                                "expanded": null
                            },
                            "name": "desktop_where_to_buy.png",
                            "language": {
                                "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/desktop_where_to_buy.png",
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
                            "routeSegment": "desktop_where_to_buy.png",
                            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/desktop_where_to_buy.png",
                            "changed": "2023-04-21T11:15:31Z",
                            "created": "2023-04-21T11:15:31Z",
                            "startPublish": "2023-04-21T11:15:31Z",
                            "stopPublish": null,
                            "saved": "2023-05-06T04:36:04Z",
                            "status": "Published",
                            "category": {
                                "value": [],
                                "propertyDataType": "PropertyCategory"
                            },
                            "thumbnail": {
                                "value": {
                                    "id": "epi.fx.blob://default/de014fb64aa14e499c9f0a11d45ca1e6/c45359328e704b16bcca5c0f95f40345_Thumbnail.png",
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/desktop_where_to_buy.png/Thumbnail"
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
                            "id": 211,
                            "workId": 0,
                            "guidValue": "de014fb6-4aa1-4e49-9c9f-0a11d45ca1e6",
                            "providerName": null,
                            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/desktop_where_to_buy.png",
                            "expanded": null
                        },
                        "propertyDataType": "PropertyContentReference"
                    },
                    "contentBlockArea": {
                        "value": null,
                        "propertyDataType": "PropertyContentArea"
                    },
                    "buttonText": {
                        "value": "WHERE TO BUY",
                        "propertyDataType": "PropertyLongString"
                    },
                    "buttonUrl": {
                        "value": "/where-to-buy/",
                        "propertyDataType": "PropertyUrl"
                    },
                    "buttonColorCode": {
                        "value": "#2CCFAD",
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
                        "value": "#E0EAE8",
                        "propertyDataType": "PropertyLongString"
                    },
                    "videoUrl": {
                        "value": null,
                        "propertyDataType": "PropertyUrl"
                    },
                    "backgroundImage": {
                        "value": null,
                        "propertyDataType": "PropertyContentReference"
                    }
                },
                {
                    "contentLink": {
                        "id": 44,
                        "workId": 0,
                        "guidValue": "ccc5f40f-415e-4949-a69c-9848d2f36b48",
                        "providerName": null,
                        "url": null,
                        "expanded": null
                    },
                    "name": "Why Foster & Thrive",
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
                        "id": 25,
                        "workId": 0,
                        "guidValue": "792927be-e92f-4987-8065-30f243bccdea",
                        "providerName": null,
                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/792927bee92f4987806530f243bccdea/",
                        "expanded": null
                    },
                    "routeSegment": null,
                    "url": null,
                    "changed": "2023-04-18T09:21:07Z",
                    "created": "2023-04-18T09:21:07Z",
                    "startPublish": "2023-04-18T09:21:07Z",
                    "stopPublish": null,
                    "saved": "2023-05-09T17:23:47Z",
                    "status": "Published",
                    "category": {
                        "value": [],
                        "propertyDataType": "PropertyCategory"
                    },
                    "title": {
                        "value": "Care beyond the box",
                        "propertyDataType": "PropertyLongString"
                    },
                    "description": {
                        "value": "<p>We offer product and a promise: quality products you can trust, and the guidance and care of a healthcare leader.</p>",
                        "propertyDataType": "PropertyXhtmlString"
                    },
                    "image": {
                        "expandedValue": {
                            "contentLink": {
                                "id": 754,
                                "workId": 0,
                                "guidValue": "f9da162b-9e4d-4a2f-93e3-d65c0c21b2c8",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/desktop_why_foster_thrives.png",
                                "expanded": null
                            },
                            "name": "desktop_why_foster_thrives.png",
                            "language": {
                                "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/desktop_why_foster_thrives.png",
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
                            "routeSegment": "desktop_why_foster_thrives.png",
                            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/desktop_why_foster_thrives.png",
                            "changed": "2023-05-09T11:19:25Z",
                            "created": "2023-05-09T11:19:25Z",
                            "startPublish": "2023-05-09T11:19:25Z",
                            "stopPublish": null,
                            "saved": "2023-05-09T11:19:25Z",
                            "status": "Published",
                            "category": {
                                "value": [],
                                "propertyDataType": "PropertyCategory"
                            },
                            "thumbnail": {
                                "value": {
                                    "id": "epi.fx.blob://default/f9da162b9e4d4a2f93e3d65c0c21b2c8/9c0266c0b6a54f74b3a3e38011e03267_Thumbnail.png",
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/desktop_why_foster_thrives.png/Thumbnail"
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
                            "id": 754,
                            "workId": 0,
                            "guidValue": "f9da162b-9e4d-4a2f-93e3-d65c0c21b2c8",
                            "providerName": null,
                            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/desktop_why_foster_thrives.png",
                            "expanded": null
                        },
                        "propertyDataType": "PropertyContentReference"
                    },
                    "contentBlockArea": {
                        "value": null,
                        "propertyDataType": "PropertyContentArea"
                    },
                    "buttonText": {
                        "value": "learn more",
                        "propertyDataType": "PropertyLongString"
                    },
                    "buttonUrl": {
                        "value": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/generic/why-ft/",
                        "propertyDataType": "PropertyUrl"
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
                        "value": "#ffffff",
                        "propertyDataType": "PropertyLongString"
                    },
                    "videoUrl": {
                        "value": null,
                        "propertyDataType": "PropertyUrl"
                    },
                    "backgroundImage": {
                        "value": null,
                        "propertyDataType": "PropertyContentReference"
                    }
                },
                {
                    "contentLink": {
                        "id": 49,
                        "workId": 0,
                        "guidValue": "49a1269c-175e-4e83-9e12-5971dd96e09a",
                        "providerName": null,
                        "url": null,
                        "expanded": null
                    },
                    "name": "Quality that Matters",
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
                        "id": 25,
                        "workId": 0,
                        "guidValue": "792927be-e92f-4987-8065-30f243bccdea",
                        "providerName": null,
                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/792927bee92f4987806530f243bccdea/",
                        "expanded": null
                    },
                    "routeSegment": null,
                    "url": null,
                    "changed": "2023-04-18T09:24:34Z",
                    "created": "2023-04-18T09:24:34Z",
                    "startPublish": "2023-04-18T09:24:34Z",
                    "stopPublish": null,
                    "saved": "2023-05-09T17:30:23Z",
                    "status": "Published",
                    "category": {
                        "value": [],
                        "propertyDataType": "PropertyCategory"
                    },
                    "title": {
                        "value": "Quality worthy of you and yours",
                        "propertyDataType": "PropertyLongString"
                    },
                    "description": {
                        "value": "<p>We make our products with high quality ingredients. Because when you start with what&rsquo;s good, you begin to get better.</p>",
                        "propertyDataType": "PropertyXhtmlString"
                    },
                    "image": {
                        "expandedValue": {
                            "contentLink": {
                                "id": 225,
                                "workId": 0,
                                "guidValue": "5e3ad297-35ce-477a-ac45-a57f56c282b4",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/video_bg.png",
                                "expanded": null
                            },
                            "name": "video_bg.png",
                            "language": {
                                "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/video_bg.png",
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
                            "routeSegment": "video_bg.png",
                            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/video_bg.png",
                            "changed": "2023-04-21T12:55:50Z",
                            "created": "2023-04-21T12:55:50Z",
                            "startPublish": "2023-04-21T12:55:50Z",
                            "stopPublish": null,
                            "saved": "2023-05-06T04:36:06Z",
                            "status": "Published",
                            "category": {
                                "value": [],
                                "propertyDataType": "PropertyCategory"
                            },
                            "thumbnail": {
                                "value": {
                                    "id": "epi.fx.blob://default/5e3ad29735ce477aac45a57f56c282b4/59e98cd2241e41b7be66c4f5445d53af_Thumbnail.png",
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/video_bg.png/Thumbnail"
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
                            "id": 225,
                            "workId": 0,
                            "guidValue": "5e3ad297-35ce-477a-ac45-a57f56c282b4",
                            "providerName": null,
                            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/video_bg.png",
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
                        "value": "https://mckesson.com/",
                        "propertyDataType": "PropertyUrl"
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
                                "id": 91,
                                "workId": 0,
                                "guidValue": "c69ab509-e4b8-4ca8-bc07-4db578cade4f",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/d198d3b39d3b4dd6bf3c42a02410825e/quality-that-matters.mp4",
                                "expanded": null
                            },
                            "name": "Quality-That-Matters.mp4",
                            "language": {
                                "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/d198d3b39d3b4dd6bf3c42a02410825e/quality-that-matters.mp4",
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
                                "id": 89,
                                "workId": 0,
                                "guidValue": "d198d3b3-9d3b-4dd6-bf3c-42a02410825e",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/d198d3b39d3b4dd6bf3c42a02410825e/",
                                "expanded": null
                            },
                            "routeSegment": "quality-that-matters.mp4",
                            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/d198d3b39d3b4dd6bf3c42a02410825e/quality-that-matters.mp4",
                            "changed": "2023-04-19T18:20:25Z",
                            "created": "2023-04-19T09:34:55Z",
                            "startPublish": "2023-04-19T09:34:55Z",
                            "stopPublish": null,
                            "saved": "2023-05-06T04:36:21Z",
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
                            "id": 91,
                            "workId": 0,
                            "guidValue": "c69ab509-e4b8-4ca8-bc07-4db578cade4f",
                            "providerName": null,
                            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/d198d3b39d3b4dd6bf3c42a02410825e/quality-that-matters.mp4",
                            "expanded": null
                        },
                        "propertyDataType": "PropertyContentReference"
                    },
                    "backgroundColor": {
                        "value": "#ffffff",
                        "propertyDataType": "PropertyLongString"
                    },
                    "videoUrl": {
                        "value": null,
                        "propertyDataType": "PropertyUrl"
                    },
                    "backgroundImage": {
                        "value": null,
                        "propertyDataType": "PropertyContentReference"
                    }
                },
                {
                    "contentLink": {
                        "id": 54,
                        "workId": 0,
                        "guidValue": "77cc67b1-85eb-4f25-8f35-50995625dda1",
                        "providerName": null,
                        "url": null,
                        "expanded": null
                    },
                    "name": "Care that’s uniquely you",
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
                        "id": 25,
                        "workId": 0,
                        "guidValue": "792927be-e92f-4987-8065-30f243bccdea",
                        "providerName": null,
                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/792927bee92f4987806530f243bccdea/",
                        "expanded": null
                    },
                    "routeSegment": null,
                    "url": null,
                    "changed": "2023-04-18T09:42:02Z",
                    "created": "2023-04-18T09:42:02Z",
                    "startPublish": "2023-04-18T09:42:02Z",
                    "stopPublish": null,
                    "saved": "2023-05-08T14:56:20Z",
                    "status": "Published",
                    "category": {
                        "value": [],
                        "propertyDataType": "PropertyCategory"
                    },
                    "title": {
                        "value": "Unique to you care",
                        "propertyDataType": "PropertyLongString"
                    },
                    "description": {
                        "value": "<p>We know that care can take many forms. We&rsquo;ve considered care from all angles, so that you can make sure you care for yourself in the best possible way. Your health is your business, and helping you be your best is ours.</p>",
                        "propertyDataType": "PropertyXhtmlString"
                    },
                    "image": {
                        "expandedValue": {
                            "contentLink": {
                                "id": 213,
                                "workId": 0,
                                "guidValue": "b9debd62-0f6f-45d6-9813-cba05bf6206e",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/desktop_care_image.png",
                                "expanded": null
                            },
                            "name": "desktop_care_image.png",
                            "language": {
                                "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/desktop_care_image.png",
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
                            "routeSegment": "desktop_care_image.png",
                            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/desktop_care_image.png",
                            "changed": "2023-04-21T11:32:03Z",
                            "created": "2023-04-21T11:32:03Z",
                            "startPublish": "2023-04-21T11:32:03Z",
                            "stopPublish": null,
                            "saved": "2023-05-06T04:36:04Z",
                            "status": "Published",
                            "category": {
                                "value": [],
                                "propertyDataType": "PropertyCategory"
                            },
                            "thumbnail": {
                                "value": {
                                    "id": "epi.fx.blob://default/b9debd620f6f45d69813cba05bf6206e/9e602c623aae4a218d5efe55d578d98f_Thumbnail.png",
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/desktop_care_image.png/Thumbnail"
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
                            "id": 213,
                            "workId": 0,
                            "guidValue": "b9debd62-0f6f-45d6-9813-cba05bf6206e",
                            "providerName": null,
                            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/desktop_care_image.png",
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
                        "value": "https://mckesson.com/",
                        "propertyDataType": "PropertyUrl"
                    },
                    "buttonColorCode": {
                        "value": "#2CCFAD",
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
                        "value": "#FFEABC",
                        "propertyDataType": "PropertyLongString"
                    },
                    "videoUrl": {
                        "value": null,
                        "propertyDataType": "PropertyUrl"
                    },
                    "backgroundImage": {
                        "value": null,
                        "propertyDataType": "PropertyContentReference"
                    }
                },
                {
                    "contentLink": {
                        "id": 55,
                        "workId": 0,
                        "guidValue": "b72963a0-ed27-4db8-8ff2-b0016789f6ff",
                        "providerName": null,
                        "url": null,
                        "expanded": null
                    },
                    "name": "Products worthy of you and yours",
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
                        "id": 25,
                        "workId": 0,
                        "guidValue": "792927be-e92f-4987-8065-30f243bccdea",
                        "providerName": null,
                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/792927bee92f4987806530f243bccdea/",
                        "expanded": null
                    },
                    "routeSegment": null,
                    "url": null,
                    "changed": "2023-04-18T09:42:55Z",
                    "created": "2023-04-18T09:42:55Z",
                    "startPublish": "2023-04-18T09:42:55Z",
                    "stopPublish": null,
                    "saved": "2023-05-05T10:36:51Z",
                    "status": "Published",
                    "category": {
                        "value": [],
                        "propertyDataType": "PropertyCategory"
                    },
                    "title": {
                        "value": "Products worthy of you and yours",
                        "propertyDataType": "PropertyLongString"
                    },
                    "description": {
                        "value": "<p>When it comes to caring for those you love, you need products that you can trust to help heal and thrive. At Foster &amp; Thrive, consistent quality and efficiency is our top priority.</p>",
                        "propertyDataType": "PropertyXhtmlString"
                    },
                    "backgroundColor": {
                        "value": "",
                        "propertyDataType": "PropertyLongString"
                    }
                },
                {
                    "contentLink": {
                        "id": 132,
                        "workId": 0,
                        "guidValue": "0d0d0f03-c854-436b-bd89-71a9ae7dc554",
                        "providerName": null,
                        "url": null,
                        "expanded": null
                    },
                    "name": "Foster & Thrive",
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
                        "RecommendedProductBlock"
                    ],
                    "parentLink": {
                        "id": 3,
                        "workId": 0,
                        "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                        "providerName": null,
                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                        "expanded": null
                    },
                    "routeSegment": null,
                    "url": null,
                    "changed": "2023-04-20T17:59:30Z",
                    "created": "2023-04-20T17:59:23Z",
                    "startPublish": "2023-04-20T17:59:30Z",
                    "stopPublish": null,
                    "saved": "2023-04-20T18:09:04Z",
                    "status": "Published",
                    "category": {
                        "value": [],
                        "propertyDataType": "PropertyCategory"
                    },
                    "contentBlockArea": {
                        "expandedValue": [
                            {
                                "contentLink": {
                                    "id": 133,
                                    "workId": 0,
                                    "guidValue": "1ab653f8-f0d8-47b8-9485-1348150e55c2",
                                    "providerName": null,
                                    "url": null,
                                    "expanded": null
                                },
                                "name": "Foster & Thrive1",
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
                                    "RecommendedProductItemsBlock"
                                ],
                                "parentLink": {
                                    "id": 3,
                                    "workId": 0,
                                    "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                                    "expanded": null
                                },
                                "routeSegment": null,
                                "url": null,
                                "changed": "2023-04-20T18:02:34Z",
                                "created": "2023-04-20T18:01:23Z",
                                "startPublish": "2023-04-20T18:02:34Z",
                                "stopPublish": null,
                                "saved": "2023-05-09T17:32:44Z",
                                "status": "Published",
                                "category": {
                                    "value": [],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "internalTitle": {
                                    "value": "<p>You partner in care.</p>",
                                    "propertyDataType": "PropertyXhtmlString"
                                },
                                "description": {
                                    "value": "<p>You&rsquo;re in touch with your health, able to pinpoint what you need. With Foster &amp; Thrive, you can easily target and treat your precise needs.</p>",
                                    "propertyDataType": "PropertyXhtmlString"
                                },
                                "image": {
                                    "expandedValue": {
                                        "contentLink": {
                                            "id": 214,
                                            "workId": 0,
                                            "guidValue": "0dee127f-3e91-45d4-9599-973257e134f0",
                                            "providerName": null,
                                            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/allergy_relief-.png",
                                            "expanded": null
                                        },
                                        "name": "allergy_relief .png",
                                        "language": {
                                            "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/allergy_relief-.png",
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
                                        "routeSegment": "allergy_relief-.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/allergy_relief-.png",
                                        "changed": "2023-04-21T11:36:50Z",
                                        "created": "2023-04-21T11:36:50Z",
                                        "startPublish": "2023-04-21T11:36:50Z",
                                        "stopPublish": null,
                                        "saved": "2023-05-06T04:36:04Z",
                                        "status": "Published",
                                        "category": {
                                            "value": [],
                                            "propertyDataType": "PropertyCategory"
                                        },
                                        "thumbnail": {
                                            "value": {
                                                "id": "epi.fx.blob://default/0dee127f3e9145d49599973257e134f0/e8209febdd5c476eb7e91500bed88516_Thumbnail.png",
                                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/allergy_relief-.png/Thumbnail"
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
                                        "id": 214,
                                        "workId": 0,
                                        "guidValue": "0dee127f-3e91-45d4-9599-973257e134f0",
                                        "providerName": null,
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/allergy_relief-.png",
                                        "expanded": null
                                    },
                                    "propertyDataType": "PropertyContentReference"
                                },
                                "imageTitle": {
                                    "expandedValue": {
                                        "contentLink": {
                                            "id": 262,
                                            "workId": 0,
                                            "guidValue": "7c0e3992-570f-455c-8ebf-803357bc620f",
                                            "providerName": null,
                                            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/ft_logo_acute.png",
                                            "expanded": null
                                        },
                                        "name": "F&T_logo_acute.png",
                                        "language": {
                                            "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/ft_logo_acute.png",
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
                                        "routeSegment": "ft_logo_acute.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/ft_logo_acute.png",
                                        "changed": "2023-04-23T09:57:24Z",
                                        "created": "2023-04-21T19:33:51Z",
                                        "startPublish": "2023-04-21T19:33:51Z",
                                        "stopPublish": null,
                                        "saved": "2023-05-06T04:36:06Z",
                                        "status": "Published",
                                        "category": {
                                            "value": [],
                                            "propertyDataType": "PropertyCategory"
                                        },
                                        "thumbnail": {
                                            "value": {
                                                "id": "epi.fx.blob://default/7c0e3992570f455c8ebf803357bc620f/f912db62772d4cae8c9ddac98900d757_Thumbnail.png",
                                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/ft_logo_acute.png/Thumbnail"
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
                                        "id": 262,
                                        "workId": 0,
                                        "guidValue": "7c0e3992-570f-455c-8ebf-803357bc620f",
                                        "providerName": null,
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/ft_logo_acute.png",
                                        "expanded": null
                                    },
                                    "propertyDataType": "PropertyContentReference"
                                },
                                "buttonText": {
                                    "value": "SEE PRODUCTS",
                                    "propertyDataType": "PropertyLongString"
                                },
                                "buttonUrl": {
                                    "value": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/product-category/landing-page/",
                                    "propertyDataType": "PropertyUrl"
                                },
                                "backgroundColor": {
                                    "value": "#CCD1E3",
                                    "propertyDataType": "PropertyLongString"
                                }
                            },
                            {
                                "contentLink": {
                                    "id": 134,
                                    "workId": 0,
                                    "guidValue": "648f2bac-4508-49c0-80f4-2863e30953f5",
                                    "providerName": null,
                                    "url": null,
                                    "expanded": null
                                },
                                "name": "Foster & Thrive2",
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
                                    "RecommendedProductItemsBlock"
                                ],
                                "parentLink": {
                                    "id": 3,
                                    "workId": 0,
                                    "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                                    "expanded": null
                                },
                                "routeSegment": null,
                                "url": null,
                                "changed": "2023-04-20T18:04:41Z",
                                "created": "2023-04-20T18:03:32Z",
                                "startPublish": "2023-04-20T18:04:41Z",
                                "stopPublish": null,
                                "saved": "2023-05-09T17:33:26Z",
                                "status": "Published",
                                "category": {
                                    "value": [],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "internalTitle": {
                                    "value": "<p>Prepared for what&rsquo;s next.</p>",
                                    "propertyDataType": "PropertyXhtmlString"
                                },
                                "description": {
                                    "value": "<p>Everybody deserves optimal health, and nobody is immune to everything. With Foster &amp; Thrive, you can be prepared for almost anything.</p>",
                                    "propertyDataType": "PropertyXhtmlString"
                                },
                                "image": {
                                    "expandedValue": {
                                        "contentLink": {
                                            "id": 200,
                                            "workId": 0,
                                            "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
                                            "providerName": null,
                                            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
                                            "expanded": null
                                        },
                                        "name": "vitamin_D3.png",
                                        "language": {
                                            "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
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
                                        "routeSegment": "vitamin_d3.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
                                        "changed": "2023-04-26T18:38:59Z",
                                        "created": "2023-04-21T09:21:38Z",
                                        "startPublish": "2023-04-21T09:21:38Z",
                                        "stopPublish": null,
                                        "saved": "2023-05-06T04:36:02Z",
                                        "status": "Published",
                                        "category": {
                                            "value": [],
                                            "propertyDataType": "PropertyCategory"
                                        },
                                        "thumbnail": {
                                            "value": {
                                                "id": "epi.fx.blob://default/86b7383a4b4a427eb87cd1ce8aa6404c/a739a747a1a34769bf63b7cc90ffbc06_Thumbnail.png",
                                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png/Thumbnail"
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
                                        "id": 200,
                                        "workId": 0,
                                        "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
                                        "providerName": null,
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
                                        "expanded": null
                                    },
                                    "propertyDataType": "PropertyContentReference"
                                },
                                "imageTitle": {
                                    "expandedValue": {
                                        "contentLink": {
                                            "id": 262,
                                            "workId": 0,
                                            "guidValue": "7c0e3992-570f-455c-8ebf-803357bc620f",
                                            "providerName": null,
                                            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/ft_logo_acute.png",
                                            "expanded": null
                                        },
                                        "name": "F&T_logo_acute.png",
                                        "language": {
                                            "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/ft_logo_acute.png",
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
                                        "routeSegment": "ft_logo_acute.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/ft_logo_acute.png",
                                        "changed": "2023-04-23T09:57:24Z",
                                        "created": "2023-04-21T19:33:51Z",
                                        "startPublish": "2023-04-21T19:33:51Z",
                                        "stopPublish": null,
                                        "saved": "2023-05-06T04:36:06Z",
                                        "status": "Published",
                                        "category": {
                                            "value": [],
                                            "propertyDataType": "PropertyCategory"
                                        },
                                        "thumbnail": {
                                            "value": {
                                                "id": "epi.fx.blob://default/7c0e3992570f455c8ebf803357bc620f/f912db62772d4cae8c9ddac98900d757_Thumbnail.png",
                                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/ft_logo_acute.png/Thumbnail"
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
                                        "id": 262,
                                        "workId": 0,
                                        "guidValue": "7c0e3992-570f-455c-8ebf-803357bc620f",
                                        "providerName": null,
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/ft_logo_acute.png",
                                        "expanded": null
                                    },
                                    "propertyDataType": "PropertyContentReference"
                                },
                                "buttonText": {
                                    "value": "SEE PRODUCTS",
                                    "propertyDataType": "PropertyLongString"
                                },
                                "buttonUrl": {
                                    "value": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/product-category/landing-page/",
                                    "propertyDataType": "PropertyUrl"
                                },
                                "backgroundColor": {
                                    "value": "#FFEABC",
                                    "propertyDataType": "PropertyLongString"
                                }
                            },
                            {
                                "contentLink": {
                                    "id": 135,
                                    "workId": 0,
                                    "guidValue": "1ea549f2-f87b-4558-b2df-c41562fcb761",
                                    "providerName": null,
                                    "url": null,
                                    "expanded": null
                                },
                                "name": "Foster & Thrive3",
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
                                    "RecommendedProductItemsBlock"
                                ],
                                "parentLink": {
                                    "id": 3,
                                    "workId": 0,
                                    "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                                    "expanded": null
                                },
                                "routeSegment": null,
                                "url": null,
                                "changed": "2023-04-20T18:06:10Z",
                                "created": "2023-04-20T18:05:30Z",
                                "startPublish": "2023-04-20T18:06:10Z",
                                "stopPublish": null,
                                "saved": "2023-05-09T17:34:44Z",
                                "status": "Published",
                                "category": {
                                    "value": [],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "internalTitle": {
                                    "value": "<p>On the Move. Always there.</p>",
                                    "propertyDataType": "PropertyXhtmlString"
                                },
                                "description": {
                                    "value": "<p>You need products that support you as you move throughout your day, not slow you down. Foster &amp; Thrive products give you precisely what you need.</p>",
                                    "propertyDataType": "PropertyXhtmlString"
                                },
                                "image": {
                                    "expandedValue": {
                                        "contentLink": {
                                            "id": 215,
                                            "workId": 0,
                                            "guidValue": "2bf80566-d325-4f2a-86a5-6e7a991bfe09",
                                            "providerName": null,
                                            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/adhesive_bandages.png",
                                            "expanded": null
                                        },
                                        "name": "adhesive_bandages.png",
                                        "language": {
                                            "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/adhesive_bandages.png",
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
                                        "routeSegment": "adhesive_bandages.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/adhesive_bandages.png",
                                        "changed": "2023-04-21T11:42:39Z",
                                        "created": "2023-04-21T11:42:39Z",
                                        "startPublish": "2023-04-21T11:42:39Z",
                                        "stopPublish": null,
                                        "saved": "2023-05-06T04:36:04Z",
                                        "status": "Published",
                                        "category": {
                                            "value": [],
                                            "propertyDataType": "PropertyCategory"
                                        },
                                        "thumbnail": {
                                            "value": {
                                                "id": "epi.fx.blob://default/2bf80566d3254f2a86a56e7a991bfe09/f992920249f2412598ecc308ade1767e_Thumbnail.png",
                                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/adhesive_bandages.png/Thumbnail"
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
                                        "id": 215,
                                        "workId": 0,
                                        "guidValue": "2bf80566-d325-4f2a-86a5-6e7a991bfe09",
                                        "providerName": null,
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/adhesive_bandages.png",
                                        "expanded": null
                                    },
                                    "propertyDataType": "PropertyContentReference"
                                },
                                "imageTitle": {
                                    "expandedValue": {
                                        "contentLink": {
                                            "id": 262,
                                            "workId": 0,
                                            "guidValue": "7c0e3992-570f-455c-8ebf-803357bc620f",
                                            "providerName": null,
                                            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/ft_logo_acute.png",
                                            "expanded": null
                                        },
                                        "name": "F&T_logo_acute.png",
                                        "language": {
                                            "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/ft_logo_acute.png",
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
                                        "routeSegment": "ft_logo_acute.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/ft_logo_acute.png",
                                        "changed": "2023-04-23T09:57:24Z",
                                        "created": "2023-04-21T19:33:51Z",
                                        "startPublish": "2023-04-21T19:33:51Z",
                                        "stopPublish": null,
                                        "saved": "2023-05-06T04:36:06Z",
                                        "status": "Published",
                                        "category": {
                                            "value": [],
                                            "propertyDataType": "PropertyCategory"
                                        },
                                        "thumbnail": {
                                            "value": {
                                                "id": "epi.fx.blob://default/7c0e3992570f455c8ebf803357bc620f/f912db62772d4cae8c9ddac98900d757_Thumbnail.png",
                                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/ft_logo_acute.png/Thumbnail"
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
                                        "id": 262,
                                        "workId": 0,
                                        "guidValue": "7c0e3992-570f-455c-8ebf-803357bc620f",
                                        "providerName": null,
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/ft_logo_acute.png",
                                        "expanded": null
                                    },
                                    "propertyDataType": "PropertyContentReference"
                                },
                                "buttonText": {
                                    "value": "SEE PRODUCTS",
                                    "propertyDataType": "PropertyLongString"
                                },
                                "buttonUrl": {
                                    "value": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/product-category/landing-page/",
                                    "propertyDataType": "PropertyUrl"
                                },
                                "backgroundColor": {
                                    "value": "#EAF1F8",
                                    "propertyDataType": "PropertyLongString"
                                }
                            },
                            {
                                "contentLink": {
                                    "id": 136,
                                    "workId": 0,
                                    "guidValue": "98ff65e4-3b5b-4ca4-90bc-c662de199bac",
                                    "providerName": null,
                                    "url": null,
                                    "expanded": null
                                },
                                "name": "Foster & Thrive4",
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
                                    "RecommendedProductItemsBlock"
                                ],
                                "parentLink": {
                                    "id": 3,
                                    "workId": 0,
                                    "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                                    "expanded": null
                                },
                                "routeSegment": null,
                                "url": null,
                                "changed": "2023-04-20T18:07:19Z",
                                "created": "2023-04-20T18:06:42Z",
                                "startPublish": "2023-04-20T18:07:19Z",
                                "stopPublish": null,
                                "saved": "2023-05-09T17:35:15Z",
                                "status": "Published",
                                "category": {
                                    "value": [],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "internalTitle": {
                                    "value": "<p>Made to move. Standing by.</p>",
                                    "propertyDataType": "PropertyXhtmlString"
                                },
                                "description": {
                                    "value": "<p>Health is a journey-sometimes on track, always moving. With Foster &amp; Thrive, you get the guidance and tools to tell you where to turn next.</p>",
                                    "propertyDataType": "PropertyXhtmlString"
                                },
                                "image": {
                                    "expandedValue": {
                                        "contentLink": {
                                            "id": 216,
                                            "workId": 0,
                                            "guidValue": "d8482f38-79c0-49a2-9ff3-416fcbac4e5d",
                                            "providerName": null,
                                            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/blood_pressure_monitor.png",
                                            "expanded": null
                                        },
                                        "name": "blood_pressure_monitor.png",
                                        "language": {
                                            "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/blood_pressure_monitor.png",
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
                                        "routeSegment": "blood_pressure_monitor.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/blood_pressure_monitor.png",
                                        "changed": "2023-04-21T11:44:20Z",
                                        "created": "2023-04-21T11:44:03Z",
                                        "startPublish": "2023-04-21T11:44:03Z",
                                        "stopPublish": null,
                                        "saved": "2023-05-06T04:36:05Z",
                                        "status": "Published",
                                        "category": {
                                            "value": [],
                                            "propertyDataType": "PropertyCategory"
                                        },
                                        "thumbnail": {
                                            "value": {
                                                "id": "epi.fx.blob://default/d8482f3879c049a29ff3416fcbac4e5d/161ca5472d234c67bc44085683a8b02e_Thumbnail.png",
                                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/blood_pressure_monitor.png/Thumbnail"
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
                                        "id": 216,
                                        "workId": 0,
                                        "guidValue": "d8482f38-79c0-49a2-9ff3-416fcbac4e5d",
                                        "providerName": null,
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/blood_pressure_monitor.png",
                                        "expanded": null
                                    },
                                    "propertyDataType": "PropertyContentReference"
                                },
                                "imageTitle": {
                                    "expandedValue": {
                                        "contentLink": {
                                            "id": 262,
                                            "workId": 0,
                                            "guidValue": "7c0e3992-570f-455c-8ebf-803357bc620f",
                                            "providerName": null,
                                            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/ft_logo_acute.png",
                                            "expanded": null
                                        },
                                        "name": "F&T_logo_acute.png",
                                        "language": {
                                            "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/ft_logo_acute.png",
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
                                        "routeSegment": "ft_logo_acute.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/ft_logo_acute.png",
                                        "changed": "2023-04-23T09:57:24Z",
                                        "created": "2023-04-21T19:33:51Z",
                                        "startPublish": "2023-04-21T19:33:51Z",
                                        "stopPublish": null,
                                        "saved": "2023-05-06T04:36:06Z",
                                        "status": "Published",
                                        "category": {
                                            "value": [],
                                            "propertyDataType": "PropertyCategory"
                                        },
                                        "thumbnail": {
                                            "value": {
                                                "id": "epi.fx.blob://default/7c0e3992570f455c8ebf803357bc620f/f912db62772d4cae8c9ddac98900d757_Thumbnail.png",
                                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/ft_logo_acute.png/Thumbnail"
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
                                        "id": 262,
                                        "workId": 0,
                                        "guidValue": "7c0e3992-570f-455c-8ebf-803357bc620f",
                                        "providerName": null,
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/ft_logo_acute.png",
                                        "expanded": null
                                    },
                                    "propertyDataType": "PropertyContentReference"
                                },
                                "buttonText": {
                                    "value": "SEE PRODUCTS",
                                    "propertyDataType": "PropertyLongString"
                                },
                                "buttonUrl": {
                                    "value": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/product-category/landing-page/",
                                    "propertyDataType": "PropertyUrl"
                                },
                                "backgroundColor": {
                                    "value": "#E0EAE8",
                                    "propertyDataType": "PropertyLongString"
                                }
                            }
                        ],
                        "value": [
                            {
                                "displayOption": "",
                                "tag": null,
                                "contentLink": {
                                    "id": 133,
                                    "workId": 0,
                                    "guidValue": "1ab653f8-f0d8-47b8-9485-1348150e55c2",
                                    "providerName": null,
                                    "url": null,
                                    "expanded": null
                                }
                            },
                            {
                                "displayOption": "",
                                "tag": null,
                                "contentLink": {
                                    "id": 134,
                                    "workId": 0,
                                    "guidValue": "648f2bac-4508-49c0-80f4-2863e30953f5",
                                    "providerName": null,
                                    "url": null,
                                    "expanded": null
                                }
                            },
                            {
                                "displayOption": "",
                                "tag": null,
                                "contentLink": {
                                    "id": 135,
                                    "workId": 0,
                                    "guidValue": "1ea549f2-f87b-4558-b2df-c41562fcb761",
                                    "providerName": null,
                                    "url": null,
                                    "expanded": null
                                }
                            },
                            {
                                "displayOption": "",
                                "tag": null,
                                "contentLink": {
                                    "id": 136,
                                    "workId": 0,
                                    "guidValue": "98ff65e4-3b5b-4ca4-90bc-c662de199bac",
                                    "providerName": null,
                                    "url": null,
                                    "expanded": null
                                }
                            }
                        ],
                        "propertyDataType": "PropertyContentArea"
                    }
                }
            ],
            "value": [
                {
                    "displayOption": "",
                    "tag": null,
                    "contentLink": {
                        "id": 27,
                        "workId": 0,
                        "guidValue": "6f02cc7d-15ea-474e-a554-471eb3395b69",
                        "providerName": null,
                        "url": null,
                        "expanded": null
                    }
                },
                {
                    "displayOption": "",
                    "tag": null,
                    "contentLink": {
                        "id": 33,
                        "workId": 0,
                        "guidValue": "e94c6c5c-2dab-4ac2-a3b0-381c8c0a5d9b",
                        "providerName": null,
                        "url": null,
                        "expanded": null
                    }
                },
                {
                    "displayOption": "",
                    "tag": null,
                    "contentLink": {
                        "id": 46,
                        "workId": 0,
                        "guidValue": "8b69b1ff-d047-4ebc-abdf-8701f49c1915",
                        "providerName": null,
                        "url": null,
                        "expanded": null
                    }
                },
                {
                    "displayOption": "",
                    "tag": null,
                    "contentLink": {
                        "id": 44,
                        "workId": 0,
                        "guidValue": "ccc5f40f-415e-4949-a69c-9848d2f36b48",
                        "providerName": null,
                        "url": null,
                        "expanded": null
                    }
                },
                {
                    "displayOption": "",
                    "tag": null,
                    "contentLink": {
                        "id": 49,
                        "workId": 0,
                        "guidValue": "49a1269c-175e-4e83-9e12-5971dd96e09a",
                        "providerName": null,
                        "url": null,
                        "expanded": null
                    }
                },
                {
                    "displayOption": "",
                    "tag": null,
                    "contentLink": {
                        "id": 54,
                        "workId": 0,
                        "guidValue": "77cc67b1-85eb-4f25-8f35-50995625dda1",
                        "providerName": null,
                        "url": null,
                        "expanded": null
                    }
                },
                {
                    "displayOption": "",
                    "tag": null,
                    "contentLink": {
                        "id": 55,
                        "workId": 0,
                        "guidValue": "b72963a0-ed27-4db8-8ff2-b0016789f6ff",
                        "providerName": null,
                        "url": null,
                        "expanded": null
                    }
                },
                {
                    "displayOption": "",
                    "tag": null,
                    "contentLink": {
                        "id": 132,
                        "workId": 0,
                        "guidValue": "0d0d0f03-c854-436b-bd89-71a9ae7dc554",
                        "providerName": null,
                        "url": null,
                        "expanded": null
                    }
                }
            ],
            "propertyDataType": "PropertyContentArea"
        },
        "contentType": [
            "Page",
            "HomePage"
        ]
    }
];
