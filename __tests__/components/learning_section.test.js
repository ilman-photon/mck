import { render, screen, act } from '@testing-library/react';
import CategoryComponent from "@/components/learning_section/index1.js";
import axios from "axios";
jest.mock("axios");

describe('CategoryComponent - Display values from CMS', () => {
  beforeEach(() => {
    axios.get.mockResolvedValue( {data: sectionData} );
  });

  test('Render learning compontent', async () => {
    await act(async () => {
      render(<CategoryComponent sectionData={sectionData} />);
    });
    expect(screen.getByText('WHERE TO BUY')).toBeInTheDocument();
    expect(screen.getByText('On Shelves Near You')).toBeInTheDocument();
    expect(screen.getByText('You can find us at your local independently owned Health Mart pharmacies. Check back often to find out where you can find us next!')).toBeInTheDocument();
  });
});

const sectionData = [
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
  }
];