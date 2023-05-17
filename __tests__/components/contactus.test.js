import { render, screen, act } from '@testing-library/react';
import ContactUsComponent from "@/components/contactus/ContactUsComponent";
import axios from "axios";
jest.mock("axios");


describe('ContactUsComponent - Display values from CMS', () => {
  beforeEach(() => {
    axios.get.mockResolvedValue( {data: contactUsData} );
  });

  test('Display values from CMS', async () => {
    await act(async () => {
      render(<ContactUsComponent />);
    });
    expect(screen.getByText('We are here to help!')).toBeInTheDocument();
    expect(screen.getByText('Contact Information')).toBeInTheDocument();
    expect(screen.getByText('For medical inquiries, to report an adverse event, or a product complaint:')).toBeInTheDocument();
    expect(screen.getByText('833-358-6431')).toBeInTheDocument();
    expect(screen.getByText('Strategic Sourcing Services LLC')).toBeInTheDocument();
    expect(screen.getByText('Hours of Operation')).toBeInTheDocument();
    expect(screen.getByText('9:00am to 7:00pm ET (6:00am to 4:00pm PT) Monday - Friday')).toBeInTheDocument();
    expect(screen.getByText('Email Support')).toBeInTheDocument();
    expect(screen.getByText('Company Address')).toBeInTheDocument();
    expect(screen.getByText('4835 Crumpler Rd. Suite C, Memphis, TN 38141')).toBeInTheDocument();
    expect(screen.getByText('Here’s What You Can Do')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Where to Buy')).toBeInTheDocument();
    expect(screen.getByText('FAQ')).toBeInTheDocument();
    expect(screen.getByText('Privacy Notice')).toBeInTheDocument();
    //expect(screen.getByText('Disclaimer: his phone number or email is NOT for emergency use. Please call 911 or your healthcare provider if you need emergency assistance.')).toBeInTheDocument();
  });
});



const contactUsData = [
  {
    "contentLink": {
      "id": 481,
      "workId": 0,
      "guidValue": "bba85f3e-43b2-4cdf-8742-c913683ec92d",
      "providerName": null,
      "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/generic/contact-us/",
      "expanded": null
    },
    "name": "Contact Us",
    "language": {
      "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/generic/contact-us/",
      "displayName": "English",
      "name": "en"
    },
    "existingLanguages": [
      {
        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/generic/contact-us/",
        "displayName": "English",
        "name": "en"
      }
    ],
    "masterLanguage": {
      "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/generic/contact-us/",
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
    "routeSegment": "contact-us",
    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/generic/contact-us/",
    "changed": "2023-04-28T19:53:50Z",
    "created": "2023-04-28T19:46:33Z",
    "startPublish": "2023-04-28T19:53:50Z",
    "stopPublish": null,
    "saved": "2023-04-28T19:53:50Z",
    "status": "Published",
    "category": {
      "value": [],
      "propertyDataType": "PropertyCategory"
    },
    "title": {
      "value": "We are here to help!",
      "propertyDataType": "PropertyLongString"
    },
    "description": {
      "value": "",
      "propertyDataType": "PropertyXhtmlString"
    },
    "contentArea": {
      "expandedValue": [
        {
          "contentLink": {
            "id": 487,
            "workId": 0,
            "guidValue": "40796b64-4f7c-4531-b49c-b90fb2680cd7",
            "providerName": null,
            "url": null,
            "expanded": null
          },
          "name": "Contact Information Section",
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
            "ContactusBlock"
          ],
          "parentLink": {
            "id": 486,
            "workId": 0,
            "guidValue": "549fbe93-549e-4d92-b0e4-9d7ca6ac3e00",
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/549fbe93549e4d92b0e49d7ca6ac3e00/",
            "expanded": null
          },
          "routeSegment": null,
          "url": null,
          "changed": "2023-04-28T19:53:46Z",
          "created": "2023-04-28T19:53:46Z",
          "startPublish": "2023-04-28T19:53:46Z",
          "stopPublish": null,
          "saved": "2023-04-28T19:54:34Z",
          "status": "Published",
          "category": {
            "value": [],
            "propertyDataType": "PropertyCategory"
          },
          "internalTitle": {
            "value": "Internal Contact Information",
            "propertyDataType": "PropertyLongString"
          },
          "title": {
            "value": "Contact Information",
            "propertyDataType": "PropertyLongString"
          },
          "description": {
            "value": "",
            "propertyDataType": "PropertyXhtmlString"
          },
          "contactInformationHeading": {
            "value": "Contact Information",
            "propertyDataType": "PropertyLongString"
          },
          "contactInformationDetail": {
            "value": "<p><span style=\"white-space: pre-wrap;\">For medical inquiries, to report an adverse event, or a product complaint:</span></p>",
            "propertyDataType": "PropertyXhtmlString"
          },
          "phoneImage": {
            "expandedValue": {
              "contentLink": {
                "id": 482,
                "workId": 0,
                "guidValue": "b92f52c0-ea84-4739-9d3d-05d6ec3d6ab0",
                "providerName": null,
                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/phone.png",
                "expanded": null
              },
              "name": "phone.png",
              "language": {
                "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/phone.png",
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
              "routeSegment": "phone.png",
              "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/phone.png",
              "changed": "2023-04-28T19:48:42Z",
              "created": "2023-04-28T19:48:42Z",
              "startPublish": "2023-04-28T19:48:42Z",
              "stopPublish": null,
              "saved": "2023-04-28T19:48:42Z",
              "status": "Published",
              "category": {
                "value": [],
                "propertyDataType": "PropertyCategory"
              },
              "thumbnail": {
                "value": {
                  "id": "epi.fx.blob://default/b92f52c0ea8447399d3d05d6ec3d6ab0/12b9cc4bc71c491f977696ecf5f782d9_Thumbnail.png",
                  "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/phone.png/Thumbnail"
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
              "id": 482,
              "workId": 0,
              "guidValue": "b92f52c0-ea84-4739-9d3d-05d6ec3d6ab0",
              "providerName": null,
              "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/phone.png",
              "expanded": null
            },
            "propertyDataType": "PropertyContentReference"
          },
          "phoneNumber": {
            "value": "833-358-6431",
            "propertyDataType": "PropertyLongString"
          },
          "phoneTitle": {
            "value": "Strategic Sourcing Services LLC",
            "propertyDataType": "PropertyLongString"
          },
          "operationHourImage": {
            "expandedValue": {
              "contentLink": {
                "id": 483,
                "workId": 0,
                "guidValue": "c5fa2b63-48fc-456e-83d5-98334b15dc69",
                "providerName": null,
                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/operation_hour.png",
                "expanded": null
              },
              "name": "operation_hour.png",
              "language": {
                "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/operation_hour.png",
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
              "routeSegment": "operation_hour.png",
              "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/operation_hour.png",
              "changed": "2023-04-28T19:49:23Z",
              "created": "2023-04-28T19:49:23Z",
              "startPublish": "2023-04-28T19:49:23Z",
              "stopPublish": null,
              "saved": "2023-04-28T19:49:23Z",
              "status": "Published",
              "category": {
                "value": [],
                "propertyDataType": "PropertyCategory"
              },
              "thumbnail": {
                "value": {
                  "id": "epi.fx.blob://default/c5fa2b6348fc456e83d598334b15dc69/0180ec42852f4769973e6656a127d850_Thumbnail.png",
                  "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/operation_hour.png/Thumbnail"
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
              "id": 483,
              "workId": 0,
              "guidValue": "c5fa2b63-48fc-456e-83d5-98334b15dc69",
              "providerName": null,
              "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/operation_hour.png",
              "expanded": null
            },
            "propertyDataType": "PropertyContentReference"
          },
          "operationHourTitle": {
            "value": "Hours of Operation",
            "propertyDataType": "PropertyLongString"
          },
          "operationHourValue": {
            "value": "9:00am to 7:00pm ET (6:00am to 4:00pm PT) Monday - Friday",
            "propertyDataType": "PropertyLongString"
          },
          "emailImage": {
            "expandedValue": {
              "contentLink": {
                "id": 484,
                "workId": 0,
                "guidValue": "f7a111ae-5942-4564-b398-f9a7c17edd3c",
                "providerName": null,
                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/email.png",
                "expanded": null
              },
              "name": "email.png",
              "language": {
                "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/email.png",
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
              "routeSegment": "email.png",
              "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/email.png",
              "changed": "2023-04-28T19:50:29Z",
              "created": "2023-04-28T19:50:10Z",
              "startPublish": "2023-04-28T19:50:10Z",
              "stopPublish": null,
              "saved": "2023-04-28T19:50:29Z",
              "status": "Published",
              "category": {
                "value": [],
                "propertyDataType": "PropertyCategory"
              },
              "thumbnail": {
                "value": {
                  "id": "epi.fx.blob://default/f7a111ae59424564b398f9a7c17edd3c/6975827526104407a13e4164bd9da5fd_Thumbnail.png",
                  "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/email.png/Thumbnail"
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
              "id": 484,
              "workId": 0,
              "guidValue": "f7a111ae-5942-4564-b398-f9a7c17edd3c",
              "providerName": null,
              "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/email.png",
              "expanded": null
            },
            "propertyDataType": "PropertyContentReference"
          },
          "emailTitle": {
            "value": "Email Support",
            "propertyDataType": "PropertyLongString"
          },
          "email": {
            "value": "email@mckessonft.com",
            "propertyDataType": "PropertyLongString"
          },
          "locationIcon": {
            "expandedValue": {
              "contentLink": {
                "id": 485,
                "workId": 0,
                "guidValue": "4e0c9f9a-3218-4384-a22e-d764b0d7027b",
                "providerName": null,
                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/location.png",
                "expanded": null
              },
              "name": "location.png",
              "language": {
                "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/location.png",
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
              "routeSegment": "location.png",
              "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/location.png",
              "changed": "2023-04-28T19:51:26Z",
              "created": "2023-04-28T19:51:26Z",
              "startPublish": "2023-04-28T19:51:26Z",
              "stopPublish": null,
              "saved": "2023-04-28T19:51:26Z",
              "status": "Published",
              "category": {
                "value": [],
                "propertyDataType": "PropertyCategory"
              },
              "thumbnail": {
                "value": {
                  "id": "epi.fx.blob://default/4e0c9f9a32184384a22ed764b0d7027b/d567efcf909145feb57d7b9e3b721594_Thumbnail.png",
                  "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/location.png/Thumbnail"
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
              "id": 485,
              "workId": 0,
              "guidValue": "4e0c9f9a-3218-4384-a22e-d764b0d7027b",
              "providerName": null,
              "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/location.png",
              "expanded": null
            },
            "propertyDataType": "PropertyContentReference"
          },
          "locationTitle": {
            "value": "Company Address",
            "propertyDataType": "PropertyLongString"
          },
          "locationValue": {
            "value": "4835 Crumpler Rd. Suite C, Memphis, TN 38141",
            "propertyDataType": "PropertyLongString"
          },
          "whatWeCandoHeading": {
            "value": "Here’s What You Can Do",
            "propertyDataType": "PropertyLongString"
          },
          "whatWeCandoDetail": {
            "value": "<p><a href=\"https://mcco02mstrub73kinte.dxcloud.episerver.net/en/\"><span style=\"white-space: pre-wrap;\">Home</span></a></p>\n<p><a href=\"/shop\"><span style=\"white-space: pre-wrap;\">Where to Buy</span></a></p>\n<p><a href=\"/generic/faq/\"><span style=\"white-space: pre-wrap;\">FAQ</span></a></p>\n<p><a href=\"/generic/privacy/\"><span style=\"white-space: pre-wrap;\">Privacy Notice</span></a></p>",
            "propertyDataType": "PropertyXhtmlString"
          },
          "disclaimer": {
            "value": "Disclaimer: <br/> This phone number or email is NOT for emergency use. Please call 911 or your healthcare provider if you need emergency assistance.",
            "propertyDataType": "PropertyLongString"
          }
        }
      ],
      "value": [
        {
          "displayOption": "",
          "tag": null,
          "contentLink": {
            "id": 487,
            "workId": 0,
            "guidValue": "40796b64-4f7c-4531-b49c-b90fb2680cd7",
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