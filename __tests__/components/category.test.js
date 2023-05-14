import { render, screen, act } from '@testing-library/react';
import CategoryComponent from "@/components/category/index1.js";
import axios from "axios";
jest.mock("axios");

jest.mock("axios",()=>{
  return {
    all:jest.fn().mockResolvedValueOnce([
      {
        "contentLink": {
          "id": 528,
          "workId": 0,
          "guidValue": "f07155aa-b6c7-4068-b173-bcb534b0ed52",
          "providerName": null,
          "url": null,
          "expanded": null
        },
        "name": "Acute Care",
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
          "ProductCategoryFilterBlock"
        ],
        "parentLink": {
          "id": 527,
          "workId": 0,
          "guidValue": "7a87a1fc-cbce-440e-b790-874a8b2f2928",
          "providerName": null,
          "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/7a87a1fccbce440eb790874a8b2f2928/",
          "expanded": null
        },
        "routeSegment": null,
        "url": null,
        "changed": "2023-05-03T12:25:02Z",
        "created": "2023-05-03T12:25:02Z",
        "startPublish": "2023-05-03T12:25:02Z",
        "stopPublish": null,
        "saved": "2023-05-03T20:23:54Z",
        "status": "Published",
        "category": {
          "value": [],
          "propertyDataType": "PropertyCategory"
        },
        "internalTitle": {
          "value": "",
          "propertyDataType": "PropertyLongString"
        },
        "categoryDisplayName": {
          "value": "Acute Care",
          "propertyDataType": "PropertyLongString"
        },
        "categoryImage": {
          "expandedValue": {
            "contentLink": {
              "id": 526,
              "workId": 0,
              "guidValue": "bd8946c3-c28a-4756-a24f-8cd9adfc510a",
              "providerName": null,
              "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/filter_acute_care.png",
              "expanded": null
            },
            "name": "filter_acute_care.png",
            "language": {
              "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/filter_acute_care.png",
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
            "routeSegment": "filter_acute_care.png",
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/filter_acute_care.png",
            "changed": "2023-05-03T12:24:08Z",
            "created": "2023-05-03T12:24:08Z",
            "startPublish": "2023-05-03T12:24:08Z",
            "stopPublish": null,
            "saved": "2023-05-06T04:36:19Z",
            "status": "Published",
            "category": {
              "value": [],
              "propertyDataType": "PropertyCategory"
            },
            "thumbnail": {
              "value": {
                "id": "epi.fx.blob://default/bd8946c3c28a4756a24f8cd9adfc510a/14cbf80e67604f8090c851649375a76f_Thumbnail.png",
                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/filter_acute_care.png/Thumbnail"
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
            "id": 526,
            "workId": 0,
            "guidValue": "bd8946c3-c28a-4756-a24f-8cd9adfc510a",
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/filter_acute_care.png",
            "expanded": null
          },
          "propertyDataType": "PropertyContentReference"
        },
        "mainCategory": {
          "value": [
            {
              "id": 19,
              "name": "Acute Care",
              "description": "Acute Care"
            }
          ],
          "propertyDataType": "PropertyCategory"
        },
        "subCategory": {
          "value": [
            {
              "id": 20,
              "name": "Allergy Relief",
              "description": "Allergy Relief"
            },
            {
              "id": 21,
              "name": "Pain Relief",
              "description": "Pain Relief"
            },
            {
              "id": 22,
              "name": "Cough, Cold & Flu Relief",
              "description": "Cough, Cold & Flu Relief"
            },
            {
              "id": 23,
              "name": "Digestion Health",
              "description": "Digestion Health"
            },
            {
              "id": 24,
              "name": "Smoking Cessation",
              "description": "Smoking Cessation"
            },
            {
              "id": 25,
              "name": "Ear Care",
              "description": "Ear Care"
            },
            {
              "id": 26,
              "name": "Sinus Care",
              "description": "Sinus Care"
            },
            {
              "id": 27,
              "name": "Oral Care",
              "description": "Oral Care"
            }
          ],
          "propertyDataType": "PropertyCategory"
        },
        "isBusinessVerticalCategory": {
          "value": true,
          "propertyDataType": "PropertyBoolean"
        }
      }
    ]),
    get:jest.fn(() => Promise.resolve({ data: {} }))
  }
})

jest.mock('next/router', () => {
  return {
    useRouter:jest.fn()
  }
});

describe('CategoryComponent - Display values from CMS', () => {
  test('Render category title', async () => {
    await act(async () => {
      render(<CategoryComponent sectionData={categoryProps}/>);
    });
    expect(screen.getByText('Acute Care')).toBeInTheDocument();
  });
});

const categoryProps = [
  {
    "contentBlockArea": {
      "value": [
        {"contentLink": {"id": 528}}, 
        {"contentLink": {"id": 532}},
        {"contentLink": {"id": 533}},
        {"contentLink": {"id": 534}}
      ]
    }
  }
]

const categoryData = [
  {
    "contentLink": {
      "id": 525,
      "workId": 0,
      "guidValue": "272f8b6a-ca3f-4a3d-8701-58405644abc9",
      "providerName": null,
      "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/product-category/landing-page/",
      "expanded": null
    },
    "name": "Landing Page",
    "language": {
      "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/product-category/landing-page/",
      "displayName": "English",
      "name": "en"
    },
    "existingLanguages": [
      {
        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/product-category/landing-page/",
        "displayName": "English",
        "name": "en"
      }
    ],
    "masterLanguage": {
      "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/product-category/landing-page/",
      "displayName": "English",
      "name": "en"
    },
    "contentType": [
      "Page",
      "ProductCategoryPage"
    ],
    "parentLink": {
      "id": 524,
      "workId": 0,
      "guidValue": "dcf91685-3edc-47a5-a2f7-7456e44fd519",
      "providerName": null,
      "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/product-category/",
      "expanded": null
    },
    "routeSegment": "landing-page",
    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/product-category/landing-page/",
    "changed": "2023-05-03T12:20:06Z",
    "created": "2023-05-03T12:20:00Z",
    "startPublish": "2023-05-03T12:20:06Z",
    "stopPublish": null,
    "saved": "2023-05-04T12:37:44Z",
    "status": "Published",
    "category": {
      "value": [],
      "propertyDataType": "PropertyCategory"
    },
    "contentArea": {
      "expandedValue": [
        {
          "contentLink": {
            "id": 535,
            "workId": 0,
            "guidValue": "5b92475b-1d68-4672-88e6-fc27a488d4a7",
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
            "id": 527,
            "workId": 0,
            "guidValue": "7a87a1fc-cbce-440e-b790-874a8b2f2928",
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/7a87a1fccbce440eb790874a8b2f2928/",
            "expanded": null
          },
          "routeSegment": null,
          "url": null,
          "changed": "2023-05-03T12:29:06Z",
          "created": "2023-05-03T12:29:06Z",
          "startPublish": "2023-05-03T12:29:06Z",
          "stopPublish": null,
          "saved": "2023-05-03T12:36:37Z",
          "status": "Published",
          "category": {
            "value": [],
            "propertyDataType": "PropertyCategory"
          },
          "contentBlockArea": {
            "expandedValue": [
              {
                "contentLink": {
                  "id": 537,
                  "workId": 0,
                  "guidValue": "1a3e9952-5837-4a61-9fba-7c163b6f8f0c",
                  "providerName": null,
                  "url": null,
                  "expanded": null
                },
                "name": "Carousel1-Acute Care",
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
                  "id": 536,
                  "workId": 0,
                  "guidValue": "1106ff84-8c51-41e2-8d37-af6696680016",
                  "providerName": null,
                  "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/1106ff848c5141e28d37af6696680016/",
                  "expanded": null
                },
                "routeSegment": null,
                "url": null,
                "changed": "2023-05-03T12:32:33Z",
                "created": "2023-05-03T12:32:33Z",
                "startPublish": "2023-05-03T12:32:33Z",
                "stopPublish": null,
                "saved": "2023-05-06T16:37:03Z",
                "status": "Published",
                "category": {
                  "value": [],
                  "propertyDataType": "PropertyCategory"
                },
                "title": {
                  "value": "Thrive on the Journey.",
                  "propertyDataType": "PropertyLongString"
                },
                "description": {
                  "value": "<p>Health is a journey. Sometimes on track and always moving.</p>",
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
                  "value": "#001A71",
                  "propertyDataType": "PropertyLongString"
                }
              },
              {
                "contentLink": {
                  "id": 538,
                  "workId": 0,
                  "guidValue": "9fecc713-ee1a-44b4-8f20-d135561052a6",
                  "providerName": null,
                  "url": null,
                  "expanded": null
                },
                "name": "Carousel2-Acute Care",
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
                  "id": 536,
                  "workId": 0,
                  "guidValue": "1106ff84-8c51-41e2-8d37-af6696680016",
                  "providerName": null,
                  "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/1106ff848c5141e28d37af6696680016/",
                  "expanded": null
                },
                "routeSegment": null,
                "url": null,
                "changed": "2023-05-03T12:34:49Z",
                "created": "2023-05-03T12:34:49Z",
                "startPublish": "2023-05-03T12:34:49Z",
                "stopPublish": null,
                "saved": "2023-05-06T16:37:22Z",
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
                  "value": "#001A71",
                  "propertyDataType": "PropertyLongString"
                }
              },
              {
                "contentLink": {
                  "id": 539,
                  "workId": 0,
                  "guidValue": "a3edc575-0121-404f-a453-8e0972ae4723",
                  "providerName": null,
                  "url": null,
                  "expanded": null
                },
                "name": "Carousel3-Acute Care",
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
                  "id": 536,
                  "workId": 0,
                  "guidValue": "1106ff84-8c51-41e2-8d37-af6696680016",
                  "providerName": null,
                  "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/1106ff848c5141e28d37af6696680016/",
                  "expanded": null
                },
                "routeSegment": null,
                "url": null,
                "changed": "2023-05-03T12:36:32Z",
                "created": "2023-05-03T12:36:32Z",
                "startPublish": "2023-05-03T12:36:32Z",
                "stopPublish": null,
                "saved": "2023-05-06T16:37:47Z",
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
                  "value": "#001A71",
                  "propertyDataType": "PropertyLongString"
                }
              }
            ],
            "value": [
              {
                "displayOption": "",
                "tag": null,
                "contentLink": {
                  "id": 537,
                  "workId": 0,
                  "guidValue": "1a3e9952-5837-4a61-9fba-7c163b6f8f0c",
                  "providerName": null,
                  "url": null,
                  "expanded": null
                }
              },
              {
                "displayOption": "",
                "tag": null,
                "contentLink": {
                  "id": 538,
                  "workId": 0,
                  "guidValue": "9fecc713-ee1a-44b4-8f20-d135561052a6",
                  "providerName": null,
                  "url": null,
                  "expanded": null
                }
              },
              {
                "displayOption": "",
                "tag": null,
                "contentLink": {
                  "id": 539,
                  "workId": 0,
                  "guidValue": "a3edc575-0121-404f-a453-8e0972ae4723",
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
          },
          "autoRotate": {
            "value": null,
            "propertyDataType": "PropertyBoolean"
          }
        },
        {
          "contentLink": {
            "id": 540,
            "workId": 0,
            "guidValue": "3baf5fc6-c946-4f70-86f5-303d4a6cce3c",
            "providerName": null,
            "url": null,
            "expanded": null
          },
          "name": "Product Category",
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
            "id": 527,
            "workId": 0,
            "guidValue": "7a87a1fc-cbce-440e-b790-874a8b2f2928",
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/7a87a1fccbce440eb790874a8b2f2928/",
            "expanded": null
          },
          "routeSegment": null,
          "url": null,
          "changed": "2023-05-03T12:37:34Z",
          "created": "2023-05-03T12:37:34Z",
          "startPublish": "2023-05-03T12:37:34Z",
          "stopPublish": null,
          "saved": "2023-05-03T12:51:45Z",
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
        }
      ],
      "value": [
        {
          "displayOption": "",
          "tag": null,
          "contentLink": {
            "id": 535,
            "workId": 0,
            "guidValue": "5b92475b-1d68-4672-88e6-fc27a488d4a7",
            "providerName": null,
            "url": null,
            "expanded": null
          }
        },
        {
          "displayOption": "",
          "tag": null,
          "contentLink": {
            "id": 540,
            "workId": 0,
            "guidValue": "3baf5fc6-c946-4f70-86f5-303d4a6cce3c",
            "providerName": null,
            "url": null,
            "expanded": null
          }
        }
      ],
      "propertyDataType": "PropertyContentArea"
    },
    "pageTitle": {
      "value": "",
      "propertyDataType": "PropertyLongString"
    },
    "categoryFilter": {
      "expandedValue": [
        {
          "contentLink": {
            "id": 528,
            "workId": 0,
            "guidValue": "f07155aa-b6c7-4068-b173-bcb534b0ed52",
            "providerName": null,
            "url": null,
            "expanded": null
          },
          "name": "Acute Care",
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
            "ProductCategoryFilterBlock"
          ],
          "parentLink": {
            "id": 527,
            "workId": 0,
            "guidValue": "7a87a1fc-cbce-440e-b790-874a8b2f2928",
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/7a87a1fccbce440eb790874a8b2f2928/",
            "expanded": null
          },
          "routeSegment": null,
          "url": null,
          "changed": "2023-05-03T12:25:02Z",
          "created": "2023-05-03T12:25:02Z",
          "startPublish": "2023-05-03T12:25:02Z",
          "stopPublish": null,
          "saved": "2023-05-03T20:23:54Z",
          "status": "Published",
          "category": {
            "value": [],
            "propertyDataType": "PropertyCategory"
          },
          "internalTitle": {
            "value": "",
            "propertyDataType": "PropertyLongString"
          },
          "categoryDisplayName": {
            "value": "Acute Care",
            "propertyDataType": "PropertyLongString"
          },
          "categoryImage": {
            "expandedValue": {
              "contentLink": {
                "id": 526,
                "workId": 0,
                "guidValue": "bd8946c3-c28a-4756-a24f-8cd9adfc510a",
                "providerName": null,
                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/filter_acute_care.png",
                "expanded": null
              },
              "name": "filter_acute_care.png",
              "language": {
                "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/filter_acute_care.png",
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
              "routeSegment": "filter_acute_care.png",
              "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/filter_acute_care.png",
              "changed": "2023-05-03T12:24:08Z",
              "created": "2023-05-03T12:24:08Z",
              "startPublish": "2023-05-03T12:24:08Z",
              "stopPublish": null,
              "saved": "2023-05-06T04:36:19Z",
              "status": "Published",
              "category": {
                "value": [],
                "propertyDataType": "PropertyCategory"
              },
              "thumbnail": {
                "value": {
                  "id": "epi.fx.blob://default/bd8946c3c28a4756a24f8cd9adfc510a/14cbf80e67604f8090c851649375a76f_Thumbnail.png",
                  "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/filter_acute_care.png/Thumbnail"
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
              "id": 526,
              "workId": 0,
              "guidValue": "bd8946c3-c28a-4756-a24f-8cd9adfc510a",
              "providerName": null,
              "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/filter_acute_care.png",
              "expanded": null
            },
            "propertyDataType": "PropertyContentReference"
          },
          "mainCategory": {
            "value": [
              {
                "id": 19,
                "name": "Acute Care",
                "description": "Acute Care"
              }
            ],
            "propertyDataType": "PropertyCategory"
          },
          "subCategory": {
            "value": [
              {
                "id": 20,
                "name": "Allergy Relief",
                "description": "Allergy Relief"
              },
              {
                "id": 21,
                "name": "Pain Relief",
                "description": "Pain Relief"
              },
              {
                "id": 22,
                "name": "Cough, Cold & Flu Relief",
                "description": "Cough, Cold & Flu Relief"
              },
              {
                "id": 23,
                "name": "Digestion Health",
                "description": "Digestion Health"
              },
              {
                "id": 24,
                "name": "Smoking Cessation",
                "description": "Smoking Cessation"
              },
              {
                "id": 25,
                "name": "Ear Care",
                "description": "Ear Care"
              },
              {
                "id": 26,
                "name": "Sinus Care",
                "description": "Sinus Care"
              },
              {
                "id": 27,
                "name": "Oral Care",
                "description": "Oral Care"
              }
            ],
            "propertyDataType": "PropertyCategory"
          },
          "isBusinessVerticalCategory": {
            "value": true,
            "propertyDataType": "PropertyBoolean"
          }
        },
        {
          "contentLink": {
            "id": 532,
            "workId": 0,
            "guidValue": "05d86d73-653c-4753-afcb-2e014c4eb9ef",
            "providerName": null,
            "url": null,
            "expanded": null
          },
          "name": "Preventative Care",
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
            "ProductCategoryFilterBlock"
          ],
          "parentLink": {
            "id": 527,
            "workId": 0,
            "guidValue": "7a87a1fc-cbce-440e-b790-874a8b2f2928",
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/7a87a1fccbce440eb790874a8b2f2928/",
            "expanded": null
          },
          "routeSegment": null,
          "url": null,
          "changed": "2023-05-03T12:26:33Z",
          "created": "2023-05-03T12:26:33Z",
          "startPublish": "2023-05-03T12:26:33Z",
          "stopPublish": null,
          "saved": "2023-05-04T11:49:20Z",
          "status": "Published",
          "category": {
            "value": [],
            "propertyDataType": "PropertyCategory"
          },
          "internalTitle": {
            "value": "",
            "propertyDataType": "PropertyLongString"
          },
          "categoryDisplayName": {
            "value": "Preventative Care",
            "propertyDataType": "PropertyLongString"
          },
          "categoryImage": {
            "expandedValue": {
              "contentLink": {
                "id": 531,
                "workId": 0,
                "guidValue": "46e48f42-9792-4911-9928-cf3ceaa8b893",
                "providerName": null,
                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/filter_preventative-care.png",
                "expanded": null
              },
              "name": "filter_preventative Care.png",
              "language": {
                "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/filter_preventative-care.png",
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
              "routeSegment": "filter_preventative-care.png",
              "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/filter_preventative-care.png",
              "changed": "2023-05-03T12:25:53Z",
              "created": "2023-05-03T12:25:53Z",
              "startPublish": "2023-05-03T12:25:53Z",
              "stopPublish": null,
              "saved": "2023-05-06T04:36:20Z",
              "status": "Published",
              "category": {
                "value": [],
                "propertyDataType": "PropertyCategory"
              },
              "thumbnail": {
                "value": {
                  "id": "epi.fx.blob://default/46e48f42979249119928cf3ceaa8b893/b776e57de0494c8c8e9a3d7c5005ab55_Thumbnail.png",
                  "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/filter_preventative-care.png/Thumbnail"
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
              "id": 531,
              "workId": 0,
              "guidValue": "46e48f42-9792-4911-9928-cf3ceaa8b893",
              "providerName": null,
              "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/filter_preventative-care.png",
              "expanded": null
            },
            "propertyDataType": "PropertyContentReference"
          },
          "mainCategory": {
            "value": [
              {
                "id": 28,
                "name": "Preventative Care",
                "description": "Preventative Care"
              }
            ],
            "propertyDataType": "PropertyCategory"
          },
          "subCategory": {
            "value": [
              {
                "id": 29,
                "name": "Immunity",
                "description": "Immunity"
              },
              {
                "id": 30,
                "name": "Nutrition",
                "description": "Nutrition"
              },
              {
                "id": 31,
                "name": "Vitamins",
                "description": "Vitamins"
              },
              {
                "id": 32,
                "name": "Heart Health",
                "description": "Heart Health"
              },
              {
                "id": 33,
                "name": "Probiotics",
                "description": "Probiotics"
              },
              {
                "id": 34,
                "name": "Prenatal Health",
                "description": "Prenatal Health"
              }
            ],
            "propertyDataType": "PropertyCategory"
          },
          "isBusinessVerticalCategory": {
            "value": true,
            "propertyDataType": "PropertyBoolean"
          }
        },
        {
          "contentLink": {
            "id": 533,
            "workId": 0,
            "guidValue": "0ea96436-3d2a-482f-83b3-9974a523a401",
            "providerName": null,
            "url": null,
            "expanded": null
          },
          "name": "Every Day Care",
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
            "ProductCategoryFilterBlock"
          ],
          "parentLink": {
            "id": 527,
            "workId": 0,
            "guidValue": "7a87a1fc-cbce-440e-b790-874a8b2f2928",
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/7a87a1fccbce440eb790874a8b2f2928/",
            "expanded": null
          },
          "routeSegment": null,
          "url": null,
          "changed": "2023-05-03T12:27:27Z",
          "created": "2023-05-03T12:27:27Z",
          "startPublish": "2023-05-03T12:27:27Z",
          "stopPublish": null,
          "saved": "2023-05-04T11:49:56Z",
          "status": "Published",
          "category": {
            "value": [],
            "propertyDataType": "PropertyCategory"
          },
          "internalTitle": {
            "value": "",
            "propertyDataType": "PropertyLongString"
          },
          "categoryDisplayName": {
            "value": "Every Day Care",
            "propertyDataType": "PropertyLongString"
          },
          "categoryImage": {
            "expandedValue": {
              "contentLink": {
                "id": 530,
                "workId": 0,
                "guidValue": "9a042a83-f977-450d-86ea-ab95d697528c",
                "providerName": null,
                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/filter_every_day_care.png",
                "expanded": null
              },
              "name": "filter_every_day_care.png",
              "language": {
                "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/filter_every_day_care.png",
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
              "routeSegment": "filter_every_day_care.png",
              "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/filter_every_day_care.png",
              "changed": "2023-05-03T12:25:52Z",
              "created": "2023-05-03T12:25:52Z",
              "startPublish": "2023-05-03T12:25:52Z",
              "stopPublish": null,
              "saved": "2023-05-06T04:36:19Z",
              "status": "Published",
              "category": {
                "value": [],
                "propertyDataType": "PropertyCategory"
              },
              "thumbnail": {
                "value": {
                  "id": "epi.fx.blob://default/9a042a83f977450d86eaab95d697528c/0630ed8ef7094864aa34c4450885c7fa_Thumbnail.png",
                  "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/filter_every_day_care.png/Thumbnail"
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
              "id": 530,
              "workId": 0,
              "guidValue": "9a042a83-f977-450d-86ea-ab95d697528c",
              "providerName": null,
              "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/filter_every_day_care.png",
              "expanded": null
            },
            "propertyDataType": "PropertyContentReference"
          },
          "mainCategory": {
            "value": [
              {
                "id": 35,
                "name": "Every Day Care",
                "description": "Every Day Care"
              }
            ],
            "propertyDataType": "PropertyCategory"
          },
          "subCategory": {
            "value": [
              {
                "id": 36,
                "name": "First Aid",
                "description": "First Aid"
              },
              {
                "id": 37,
                "name": "Daily Living Support",
                "description": "Daily Living Support"
              },
              {
                "id": 38,
                "name": "Cosmetics",
                "description": "Cosmetics"
              },
              {
                "id": 39,
                "name": "Family Planning",
                "description": "Family Planning"
              },
              {
                "id": 40,
                "name": "Skin Care",
                "description": "Skin Care"
              },
              {
                "id": 41,
                "name": "Foot Care",
                "description": "Foot Care"
              },
              {
                "id": 42,
                "name": "Ankle Braces",
                "description": "Ankle Braces"
              },
              {
                "id": 43,
                "name": "Muscle Soreness",
                "description": "Muscle Soreness"
              },
              {
                "id": 44,
                "name": "Foot insoles",
                "description": "Foot insoles"
              },
              {
                "id": 45,
                "name": "Facial Cleaner",
                "description": "Facial Cleaner"
              }
            ],
            "propertyDataType": "PropertyCategory"
          },
          "isBusinessVerticalCategory": {
            "value": true,
            "propertyDataType": "PropertyBoolean"
          }
        },
        {
          "contentLink": {
            "id": 534,
            "workId": 0,
            "guidValue": "503ed348-eb3a-4b42-adc2-48a51d7fd45a",
            "providerName": null,
            "url": null,
            "expanded": null
          },
          "name": "Diagnostic Care",
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
            "ProductCategoryFilterBlock"
          ],
          "parentLink": {
            "id": 527,
            "workId": 0,
            "guidValue": "7a87a1fc-cbce-440e-b790-874a8b2f2928",
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/7a87a1fccbce440eb790874a8b2f2928/",
            "expanded": null
          },
          "routeSegment": null,
          "url": null,
          "changed": "2023-05-03T12:28:16Z",
          "created": "2023-05-03T12:28:16Z",
          "startPublish": "2023-05-03T12:28:16Z",
          "stopPublish": null,
          "saved": "2023-05-04T11:50:34Z",
          "status": "Published",
          "category": {
            "value": [],
            "propertyDataType": "PropertyCategory"
          },
          "internalTitle": {
            "value": "",
            "propertyDataType": "PropertyLongString"
          },
          "categoryDisplayName": {
            "value": "Diagnostic Care",
            "propertyDataType": "PropertyLongString"
          },
          "categoryImage": {
            "expandedValue": {
              "contentLink": {
                "id": 529,
                "workId": 0,
                "guidValue": "2709601b-87b8-48dd-8eed-0cb7bb29b458",
                "providerName": null,
                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/filter_diagnostic_care.png",
                "expanded": null
              },
              "name": "filter_diagnostic_care.png",
              "language": {
                "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/filter_diagnostic_care.png",
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
              "routeSegment": "filter_diagnostic_care.png",
              "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/filter_diagnostic_care.png",
              "changed": "2023-05-03T12:25:52Z",
              "created": "2023-05-03T12:25:52Z",
              "startPublish": "2023-05-03T12:25:52Z",
              "stopPublish": null,
              "saved": "2023-05-06T04:36:19Z",
              "status": "Published",
              "category": {
                "value": [],
                "propertyDataType": "PropertyCategory"
              },
              "thumbnail": {
                "value": {
                  "id": "epi.fx.blob://default/2709601b87b848dd8eed0cb7bb29b458/647300966f84473f916b219feed00b60_Thumbnail.png",
                  "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/filter_diagnostic_care.png/Thumbnail"
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
              "id": 529,
              "workId": 0,
              "guidValue": "2709601b-87b8-48dd-8eed-0cb7bb29b458",
              "providerName": null,
              "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/filter_diagnostic_care.png",
              "expanded": null
            },
            "propertyDataType": "PropertyContentReference"
          },
          "mainCategory": {
            "value": [
              {
                "id": 46,
                "name": "Diagnostic Care",
                "description": "Diagnostic Care"
              }
            ],
            "propertyDataType": "PropertyCategory"
          },
          "subCategory": {
            "value": [
              {
                "id": 47,
                "name": "Diagnostic Care",
                "description": "Diagnostic Care"
              },
              {
                "id": 48,
                "name": "Thermometer",
                "description": "Thermometer"
              },
              {
                "id": 49,
                "name": "Gloves & Masks",
                "description": "Gloves & Masks"
              },
              {
                "id": 50,
                "name": "Family Planning",
                "description": "Family Planning"
              },
              {
                "id": 51,
                "name": "Blood Testing",
                "description": "Blood Testing"
              }
            ],
            "propertyDataType": "PropertyCategory"
          },
          "isBusinessVerticalCategory": {
            "value": true,
            "propertyDataType": "PropertyBoolean"
          }
        },
        {
          "contentLink": {
            "id": 610,
            "workId": 0,
            "guidValue": "bab7159a-7585-42db-a017-9b08a1d0d2b8",
            "providerName": null,
            "url": null,
            "expanded": null
          },
          "name": "HealthNeeds",
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
            "ProductCategoryFilterBlock"
          ],
          "parentLink": {
            "id": 527,
            "workId": 0,
            "guidValue": "7a87a1fc-cbce-440e-b790-874a8b2f2928",
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/7a87a1fccbce440eb790874a8b2f2928/",
            "expanded": null
          },
          "routeSegment": null,
          "url": null,
          "changed": "2023-05-04T12:35:11Z",
          "created": "2023-05-04T12:35:11Z",
          "startPublish": "2023-05-04T12:35:11Z",
          "stopPublish": null,
          "saved": "2023-05-08T13:06:34Z",
          "status": "Published",
          "category": {
            "value": [],
            "propertyDataType": "PropertyCategory"
          },
          "internalTitle": {
            "value": "",
            "propertyDataType": "PropertyLongString"
          },
          "categoryDisplayName": {
            "value": "Health Needs",
            "propertyDataType": "PropertyLongString"
          },
          "categoryImage": {
            "value": null,
            "propertyDataType": "PropertyContentReference"
          },
          "mainCategory": {
            "value": [
              {
                "id": 52,
                "name": "Health Needs",
                "description": "Health Needs"
              }
            ],
            "propertyDataType": "PropertyCategory"
          },
          "subCategory": {
            "value": [
              {
                "id": 53,
                "name": "Beauty",
                "description": "Beauty"
              },
              {
                "id": 54,
                "name": "Bone",
                "description": "Bone"
              },
              {
                "id": 55,
                "name": "Digestion",
                "description": "Digestion"
              },
              {
                "id": 56,
                "name": "Energy",
                "description": "Energy"
              },
              {
                "id": 57,
                "name": "Eye Health",
                "description": "Eye Health"
              },
              {
                "id": 58,
                "name": "General Wellness",
                "description": "General Wellness"
              },
              {
                "id": 59,
                "name": "Heart",
                "description": "Heart"
              },
              {
                "id": 60,
                "name": "Immune Health",
                "description": "Immune Health"
              },
              {
                "id": 61,
                "name": "Joints",
                "description": "Joints"
              },
              {
                "id": 62,
                "name": "Kids",
                "description": "Kids"
              },
              {
                "id": 63,
                "name": "Men's Health",
                "description": "Men's Health"
              },
              {
                "id": 64,
                "name": "Mood",
                "description": "Mood"
              },
              {
                "id": 65,
                "name": "Prenatal & Postnatal",
                "description": "Prenatal & Postnatal"
              },
              {
                "id": 66,
                "name": "Sleep",
                "description": "Sleep"
              },
              {
                "id": 67,
                "name": "Stress",
                "description": "Stress"
              },
              {
                "id": 68,
                "name": "Women's Health",
                "description": "Women's Health"
              }
            ],
            "propertyDataType": "PropertyCategory"
          },
          "isBusinessVerticalCategory": {
            "value": false,
            "propertyDataType": "PropertyBoolean"
          }
        },
        {
          "contentLink": {
            "id": 611,
            "workId": 0,
            "guidValue": "171b5045-5a2b-4707-97d0-6b2d97327126",
            "providerName": null,
            "url": null,
            "expanded": null
          },
          "name": "Gender",
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
            "ProductCategoryFilterBlock"
          ],
          "parentLink": {
            "id": 527,
            "workId": 0,
            "guidValue": "7a87a1fc-cbce-440e-b790-874a8b2f2928",
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/7a87a1fccbce440eb790874a8b2f2928/",
            "expanded": null
          },
          "routeSegment": null,
          "url": null,
          "changed": "2023-05-04T12:35:47Z",
          "created": "2023-05-04T12:35:47Z",
          "startPublish": "2023-05-04T12:35:47Z",
          "stopPublish": null,
          "saved": "2023-05-04T12:35:47Z",
          "status": "Published",
          "category": {
            "value": [],
            "propertyDataType": "PropertyCategory"
          },
          "internalTitle": {
            "value": "",
            "propertyDataType": "PropertyLongString"
          },
          "categoryDisplayName": {
            "value": "Gender",
            "propertyDataType": "PropertyLongString"
          },
          "categoryImage": {
            "value": null,
            "propertyDataType": "PropertyContentReference"
          },
          "mainCategory": {
            "value": [
              {
                "id": 2,
                "name": "Gender",
                "description": "Gender"
              }
            ],
            "propertyDataType": "PropertyCategory"
          },
          "subCategory": {
            "value": [
              {
                "id": 3,
                "name": "Male",
                "description": "Male"
              },
              {
                "id": 4,
                "name": "Female",
                "description": "Female"
              }
            ],
            "propertyDataType": "PropertyCategory"
          },
          "isBusinessVerticalCategory": {
            "value": false,
            "propertyDataType": "PropertyBoolean"
          }
        },
        {
          "contentLink": {
            "id": 612,
            "workId": 0,
            "guidValue": "2f788671-cf16-4931-9720-c65ba622e982",
            "providerName": null,
            "url": null,
            "expanded": null
          },
          "name": "Age",
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
            "ProductCategoryFilterBlock"
          ],
          "parentLink": {
            "id": 527,
            "workId": 0,
            "guidValue": "7a87a1fc-cbce-440e-b790-874a8b2f2928",
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/7a87a1fccbce440eb790874a8b2f2928/",
            "expanded": null
          },
          "routeSegment": null,
          "url": null,
          "changed": "2023-05-04T12:36:24Z",
          "created": "2023-05-04T12:36:24Z",
          "startPublish": "2023-05-04T12:36:24Z",
          "stopPublish": null,
          "saved": "2023-05-04T12:36:24Z",
          "status": "Published",
          "category": {
            "value": [],
            "propertyDataType": "PropertyCategory"
          },
          "internalTitle": {
            "value": "",
            "propertyDataType": "PropertyLongString"
          },
          "categoryDisplayName": {
            "value": "Age",
            "propertyDataType": "PropertyLongString"
          },
          "categoryImage": {
            "value": null,
            "propertyDataType": "PropertyContentReference"
          },
          "mainCategory": {
            "value": [
              {
                "id": 5,
                "name": "Age",
                "description": "Age"
              }
            ],
            "propertyDataType": "PropertyCategory"
          },
          "subCategory": {
            "value": [
              {
                "id": 6,
                "name": "Adults",
                "description": "Adults"
              },
              {
                "id": 7,
                "name": "Children",
                "description": "Children"
              }
            ],
            "propertyDataType": "PropertyCategory"
          },
          "isBusinessVerticalCategory": {
            "value": false,
            "propertyDataType": "PropertyBoolean"
          }
        },
        {
          "contentLink": {
            "id": 613,
            "workId": 0,
            "guidValue": "3e7b9109-c45d-44e0-ac17-05ee9144b0ea",
            "providerName": null,
            "url": null,
            "expanded": null
          },
          "name": "Form",
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
            "ProductCategoryFilterBlock"
          ],
          "parentLink": {
            "id": 527,
            "workId": 0,
            "guidValue": "7a87a1fc-cbce-440e-b790-874a8b2f2928",
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/7a87a1fccbce440eb790874a8b2f2928/",
            "expanded": null
          },
          "routeSegment": null,
          "url": null,
          "changed": "2023-05-04T12:37:04Z",
          "created": "2023-05-04T12:37:04Z",
          "startPublish": "2023-05-04T12:37:04Z",
          "stopPublish": null,
          "saved": "2023-05-04T12:37:04Z",
          "status": "Published",
          "category": {
            "value": [],
            "propertyDataType": "PropertyCategory"
          },
          "internalTitle": {
            "value": "",
            "propertyDataType": "PropertyLongString"
          },
          "categoryDisplayName": {
            "value": "Form",
            "propertyDataType": "PropertyLongString"
          },
          "categoryImage": {
            "value": null,
            "propertyDataType": "PropertyContentReference"
          },
          "mainCategory": {
            "value": [
              {
                "id": 8,
                "name": "Form",
                "description": "Form"
              }
            ],
            "propertyDataType": "PropertyCategory"
          },
          "subCategory": {
            "value": [
              {
                "id": 9,
                "name": "Bandage",
                "description": "Bandage"
              },
              {
                "id": 10,
                "name": "Capsule",
                "description": "Capsule"
              },
              {
                "id": 11,
                "name": "Chewable",
                "description": "Chewable"
              },
              {
                "id": 12,
                "name": "Liquid Gel",
                "description": "Liquid Gel"
              },
              {
                "id": 13,
                "name": "Nasal Spray",
                "description": "Nasal Spray"
              },
              {
                "id": 14,
                "name": "Tablet",
                "description": "Tablet"
              },
              {
                "id": 15,
                "name": "Topical",
                "description": "Topical"
              }
            ],
            "propertyDataType": "PropertyCategory"
          },
          "isBusinessVerticalCategory": {
            "value": false,
            "propertyDataType": "PropertyBoolean"
          }
        },
        {
          "contentLink": {
            "id": 614,
            "workId": 0,
            "guidValue": "59f40f55-99fc-4e86-9636-b43e0cbdc8f3",
            "providerName": null,
            "url": null,
            "expanded": null
          },
          "name": "Availability",
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
            "ProductCategoryFilterBlock"
          ],
          "parentLink": {
            "id": 527,
            "workId": 0,
            "guidValue": "7a87a1fc-cbce-440e-b790-874a8b2f2928",
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/7a87a1fccbce440eb790874a8b2f2928/",
            "expanded": null
          },
          "routeSegment": null,
          "url": null,
          "changed": "2023-05-04T12:37:40Z",
          "created": "2023-05-04T12:37:40Z",
          "startPublish": "2023-05-04T12:37:40Z",
          "stopPublish": null,
          "saved": "2023-05-04T12:37:40Z",
          "status": "Published",
          "category": {
            "value": [],
            "propertyDataType": "PropertyCategory"
          },
          "internalTitle": {
            "value": "",
            "propertyDataType": "PropertyLongString"
          },
          "categoryDisplayName": {
            "value": "Availability",
            "propertyDataType": "PropertyLongString"
          },
          "categoryImage": {
            "value": null,
            "propertyDataType": "PropertyContentReference"
          },
          "mainCategory": {
            "value": [
              {
                "id": 16,
                "name": "Availability",
                "description": "Availability"
              }
            ],
            "propertyDataType": "PropertyCategory"
          },
          "subCategory": {
            "value": [
              {
                "id": 17,
                "name": "Available Now",
                "description": "Available Now"
              },
              {
                "id": 18,
                "name": "Coming Soon",
                "description": "Coming Soon"
              }
            ],
            "propertyDataType": "PropertyCategory"
          },
          "isBusinessVerticalCategory": {
            "value": false,
            "propertyDataType": "PropertyBoolean"
          }
        }
      ],
      "value": [
        {
          "displayOption": "",
          "tag": null,
          "contentLink": {
            "id": 528,
            "workId": 0,
            "guidValue": "f07155aa-b6c7-4068-b173-bcb534b0ed52",
            "providerName": null,
            "url": null,
            "expanded": null
          }
        },
        {
          "displayOption": "",
          "tag": null,
          "contentLink": {
            "id": 532,
            "workId": 0,
            "guidValue": "05d86d73-653c-4753-afcb-2e014c4eb9ef",
            "providerName": null,
            "url": null,
            "expanded": null
          }
        },
        {
          "displayOption": "",
          "tag": null,
          "contentLink": {
            "id": 533,
            "workId": 0,
            "guidValue": "0ea96436-3d2a-482f-83b3-9974a523a401",
            "providerName": null,
            "url": null,
            "expanded": null
          }
        },
        {
          "displayOption": "",
          "tag": null,
          "contentLink": {
            "id": 534,
            "workId": 0,
            "guidValue": "503ed348-eb3a-4b42-adc2-48a51d7fd45a",
            "providerName": null,
            "url": null,
            "expanded": null
          }
        },
        {
          "displayOption": "",
          "tag": null,
          "contentLink": {
            "id": 610,
            "workId": 0,
            "guidValue": "bab7159a-7585-42db-a017-9b08a1d0d2b8",
            "providerName": null,
            "url": null,
            "expanded": null
          }
        },
        {
          "displayOption": "",
          "tag": null,
          "contentLink": {
            "id": 611,
            "workId": 0,
            "guidValue": "171b5045-5a2b-4707-97d0-6b2d97327126",
            "providerName": null,
            "url": null,
            "expanded": null
          }
        },
        {
          "displayOption": "",
          "tag": null,
          "contentLink": {
            "id": 612,
            "workId": 0,
            "guidValue": "2f788671-cf16-4931-9720-c65ba622e982",
            "providerName": null,
            "url": null,
            "expanded": null
          }
        },
        {
          "displayOption": "",
          "tag": null,
          "contentLink": {
            "id": 613,
            "workId": 0,
            "guidValue": "3e7b9109-c45d-44e0-ac17-05ee9144b0ea",
            "providerName": null,
            "url": null,
            "expanded": null
          }
        },
        {
          "displayOption": "",
          "tag": null,
          "contentLink": {
            "id": 614,
            "workId": 0,
            "guidValue": "59f40f55-99fc-4e86-9636-b43e0cbdc8f3",
            "providerName": null,
            "url": null,
            "expanded": null
          }
        }
      ],
      "propertyDataType": "PropertyContentArea"
    },
    "metaDescription": {
      "value": "",
      "propertyDataType": "PropertyLongString"
    },
    "recommendedProductDisplayType": {
      "value": "Two column display",
      "propertyDataType": "PropertyLongString"
    },
    "pageIndex": {
      "value": null,
      "propertyDataType": "PropertyBoolean"
    },
    "noFollow": {
      "value": null,
      "propertyDataType": "PropertyBoolean"
    },
    "canoicalUrl": {
      "value": "",
      "propertyDataType": "PropertyLongString"
    }
  }
];
