import { render, screen, act } from '@testing-library/react';
import FaqComponent from "@/components/faq/FaqComponent";
import axios from "axios";
jest.mock("axios");


describe('FaqComponent - Display values from CMS', () => {
  beforeEach(() => {
    axios.get.mockResolvedValue( {data: faqData} );
  });

  test('Display values from CMS', async () => {
    await act(async () => {
      render(<FaqComponent />);
    });
    expect(screen.getByText('FAQ')).toBeInTheDocument();
    expect(screen.getByText('Have questions? We here to help.')).toBeInTheDocument();

    });
});


const faqData = [
    {
      "contentLink": {
        "id": 453,
        "workId": 0,
        "guidValue": "1350d516-fcf8-47df-954e-a08463077131",
        "providerName": null,
        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/generic/faq/",
        "expanded": null
      },
      "name": "FAQ",
      "language": {
        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/generic/faq/",
        "displayName": "English",
        "name": "en"
      },
      "existingLanguages": [
        {
          "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/generic/faq/",
          "displayName": "English",
          "name": "en"
        }
      ],
      "masterLanguage": {
        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/generic/faq/",
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
      "routeSegment": "faq",
      "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/generic/faq/",
      "changed": "2023-04-27T11:29:58Z",
      "created": "2023-04-27T11:29:16Z",
      "startPublish": "2023-04-27T11:29:58Z",
      "stopPublish": null,
      "saved": "2023-04-27T19:03:03Z",
      "status": "Published",
      "category": {
        "value": [],
        "propertyDataType": "PropertyCategory"
      },
      "title": {
        "value": "",
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
              "id": 466,
              "workId": 0,
              "guidValue": "3b992311-abd6-437b-b0fd-d28da3a5f65f",
              "providerName": null,
              "url": null,
              "expanded": null
            },
            "name": "FAQ",
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
              "FaqBlock"
            ],
            "parentLink": {
              "id": 458,
              "workId": 0,
              "guidValue": "c2e8896a-8877-417f-b651-cb1633e3bdf8",
              "providerName": null,
              "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/c2e8896a8877417fb651cb1633e3bdf8/",
              "expanded": null
            },
            "routeSegment": null,
            "url": null,
            "changed": "2023-04-27T18:47:22Z",
            "created": "2023-04-27T18:47:22Z",
            "startPublish": "2023-04-27T18:47:22Z",
            "stopPublish": null,
            "saved": "2023-04-27T19:00:47Z",
            "status": "Published",
            "category": {
              "value": [],
              "propertyDataType": "PropertyCategory"
            },
            "internalTitle": {
              "value": "",
              "propertyDataType": "PropertyLongString"
            },
            "title": {
              "value": "FAQ",
              "propertyDataType": "PropertyLongString"
            },
            "description": {
              "value": "<p>Have questions? We here to help.</p>",
              "propertyDataType": "PropertyXhtmlString"
            },
            "differentQuestionHeading": {
              "value": "Have a different question? ",
              "propertyDataType": "PropertyLongString"
            },
            "differentQuestionDetails": {
              "value": "Not finding the answers to your questions?",
              "propertyDataType": "PropertyLongString"
            },
            "differentQuestionCTAText": {
              "value": "contact us",
              "propertyDataType": "PropertyLongString"
            },
            "differentQuestionCTALink": {
              "value": "https://www.mckesson.com/",
              "propertyDataType": "PropertyLongString"
            },
            "whatYouCanDoHeading": {
              "value": "Here’s what you can do.",
              "propertyDataType": "PropertyLongString"
            },
            "whatYouCanDoDeatils": {
              "value": "Home, Where to Buy, Privacy Notice",
              "propertyDataType": "PropertyXhtmlString"
            },
            "speaktoAPharmacistHeading": {
              "value": "Speak to a pharmacist",
              "propertyDataType": "PropertyLongString"
            },
            "speaktoAPharmacistDetail": {
              "value": "Find a store",
              "propertyDataType": "PropertyLongString"
            },
            "sendFeedBackHeading": {
              "value": "Send Feedback",
              "propertyDataType": "PropertyLongString"
            },
            "sendFeedBackDetails": {
              "value": "Help us make our search better Send feedback",
              "propertyDataType": "PropertyLongString"
            },
            "blockArea": {
              "expandedValue": [
                {
                  "contentLink": {
                    "id": 475,
                    "workId": 0,
                    "guidValue": "2f487222-f94b-4c07-9936-9d154200752b",
                    "providerName": null,
                    "url": null,
                    "expanded": null
                  },
                  "name": "What types of events are eligible for grants?",
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
                    "FaqItemsBlock"
                  ],
                  "parentLink": {
                    "id": 467,
                    "workId": 0,
                    "guidValue": "90d30ae8-dec9-48d3-97ed-709609de42d8",
                    "providerName": null,
                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/90d30ae8dec948d397ed709609de42d8/",
                    "expanded": null
                  },
                  "routeSegment": null,
                  "url": null,
                  "changed": "2023-04-27T18:56:36Z",
                  "created": "2023-04-27T18:56:36Z",
                  "startPublish": "2023-04-27T18:56:36Z",
                  "stopPublish": null,
                  "saved": "2023-04-30T16:15:42Z",
                  "status": "Published",
                  "category": {
                    "value": [],
                    "propertyDataType": "PropertyCategory"
                  },
                  "internalTitle": {
                    "value": "",
                    "propertyDataType": "PropertyLongString"
                  },
                  "question": {
                    "value": "What types of events are eligible for grants?",
                    "propertyDataType": "PropertyLongString"
                  },
                  "answer": {
                    "value": "<ul>\n<li>Natural or man-made disasters</li>\n<li>Epidemics</li>\n<li>Accidents</li>\n<li>Illness or injury</li>\n<li>Medical expenses not covered by insurance</li>\n<li>Violent crimes</li>\n<li>Domestic abuse</li>\n<li>Death of employee or their immediate family member</li>\n</ul>",
                    "propertyDataType": "PropertyXhtmlString"
                  }
                },
                {
                  "contentLink": {
                    "id": 469,
                    "workId": 0,
                    "guidValue": "0c696396-a224-4406-88a4-eaedac01d2c6",
                    "providerName": null,
                    "url": null,
                    "expanded": null
                  },
                  "name": "How do I apply for a We Care Grant?",
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
                    "FaqItemsBlock"
                  ],
                  "parentLink": {
                    "id": 467,
                    "workId": 0,
                    "guidValue": "90d30ae8-dec9-48d3-97ed-709609de42d8",
                    "providerName": null,
                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/90d30ae8dec948d397ed709609de42d8/",
                    "expanded": null
                  },
                  "routeSegment": null,
                  "url": null,
                  "changed": "2023-04-27T18:50:25Z",
                  "created": "2023-04-27T18:50:25Z",
                  "startPublish": "2023-04-27T18:50:25Z",
                  "stopPublish": null,
                  "saved": "2023-04-27T18:50:25Z",
                  "status": "Published",
                  "category": {
                    "value": [],
                    "propertyDataType": "PropertyCategory"
                  },
                  "internalTitle": {
                    "value": "",
                    "propertyDataType": "PropertyLongString"
                  },
                  "question": {
                    "value": "How do I apply for a We Care Grant?",
                    "propertyDataType": "PropertyLongString"
                  },
                  "answer": {
                    "value": "• Natural or man-made disasters \n• Epidemics \n• Accidents \n• Illness or injury \n• Medical expenses not covered by insurance \n• Violent crimes \n• Domestic abuse \n• Death of employee or their immediate family member ",
                    "propertyDataType": "PropertyXhtmlString"
                  }
                },
                {
                  "contentLink": {
                    "id": 470,
                    "workId": 0,
                    "guidValue": "39533231-668f-4970-af08-95960ca4cb75",
                    "providerName": null,
                    "url": null,
                    "expanded": null
                  },
                  "name": "What kinds of expenses are not eligible for grants?",
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
                    "FaqItemsBlock"
                  ],
                  "parentLink": {
                    "id": 467,
                    "workId": 0,
                    "guidValue": "90d30ae8-dec9-48d3-97ed-709609de42d8",
                    "providerName": null,
                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/90d30ae8dec948d397ed709609de42d8/",
                    "expanded": null
                  },
                  "routeSegment": null,
                  "url": null,
                  "changed": "2023-04-27T18:51:40Z",
                  "created": "2023-04-27T18:51:40Z",
                  "startPublish": "2023-04-27T18:51:40Z",
                  "stopPublish": null,
                  "saved": "2023-04-27T18:51:40Z",
                  "status": "Published",
                  "category": {
                    "value": [],
                    "propertyDataType": "PropertyCategory"
                  },
                  "internalTitle": {
                    "value": "",
                    "propertyDataType": "PropertyLongString"
                  },
                  "question": {
                    "value": "What kinds of expenses are not eligible for grants?",
                    "propertyDataType": "PropertyLongString"
                  },
                  "answer": {
                    "value": "• Natural or man-made disasters \n• Epidemics \n• Accidents \n• Illness or injury \n• Medical expenses not covered by insurance \n• Violent crimes \n• Domestic abuse \n• Death of employee or their immediate family member ",
                    "propertyDataType": "PropertyXhtmlString"
                  }
                },
                {
                  "contentLink": {
                    "id": 471,
                    "workId": 0,
                    "guidValue": "952d0f60-fecd-4374-8a14-22a27d4d17e2",
                    "providerName": null,
                    "url": null,
                    "expanded": null
                  },
                  "name": "Epidemic: What do I need to know to apply?",
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
                    "FaqItemsBlock"
                  ],
                  "parentLink": {
                    "id": 467,
                    "workId": 0,
                    "guidValue": "90d30ae8-dec9-48d3-97ed-709609de42d8",
                    "providerName": null,
                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/90d30ae8dec948d397ed709609de42d8/",
                    "expanded": null
                  },
                  "routeSegment": null,
                  "url": null,
                  "changed": "2023-04-27T18:52:15Z",
                  "created": "2023-04-27T18:52:15Z",
                  "startPublish": "2023-04-27T18:52:15Z",
                  "stopPublish": null,
                  "saved": "2023-04-27T18:52:15Z",
                  "status": "Published",
                  "category": {
                    "value": [],
                    "propertyDataType": "PropertyCategory"
                  },
                  "internalTitle": {
                    "value": "",
                    "propertyDataType": "PropertyLongString"
                  },
                  "question": {
                    "value": "Epidemic: What do I need to know to apply?",
                    "propertyDataType": "PropertyLongString"
                  },
                  "answer": {
                    "value": "• Natural or man-made disasters \n• Epidemics \n• Accidents \n• Illness or injury \n• Medical expenses not covered by insurance \n• Violent crimes \n• Domestic abuse \n• Death of employee or their immediate family member ",
                    "propertyDataType": "PropertyXhtmlString"
                  }
                },
                {
                  "contentLink": {
                    "id": 472,
                    "workId": 0,
                    "guidValue": "b66b21ee-0118-4b6a-94ad-ba7f25bc9d65",
                    "providerName": null,
                    "url": null,
                    "expanded": null
                  },
                  "name": "Is counseling an eligible expense for a We Care Grant?",
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
                    "FaqItemsBlock"
                  ],
                  "parentLink": {
                    "id": 467,
                    "workId": 0,
                    "guidValue": "90d30ae8-dec9-48d3-97ed-709609de42d8",
                    "providerName": null,
                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/90d30ae8dec948d397ed709609de42d8/",
                    "expanded": null
                  },
                  "routeSegment": null,
                  "url": null,
                  "changed": "2023-04-27T18:52:48Z",
                  "created": "2023-04-27T18:52:48Z",
                  "startPublish": "2023-04-27T18:52:48Z",
                  "stopPublish": null,
                  "saved": "2023-04-27T18:52:48Z",
                  "status": "Published",
                  "category": {
                    "value": [],
                    "propertyDataType": "PropertyCategory"
                  },
                  "internalTitle": {
                    "value": "",
                    "propertyDataType": "PropertyLongString"
                  },
                  "question": {
                    "value": "Is counseling an eligible expense for a We Care Grant?",
                    "propertyDataType": "PropertyLongString"
                  },
                  "answer": {
                    "value": "• Natural or man-made disasters \n• Epidemics \n• Accidents \n• Illness or injury \n• Medical expenses not covered by insurance \n• Violent crimes \n• Domestic abuse \n• Death of employee or their immediate family member ",
                    "propertyDataType": "PropertyXhtmlString"
                  }
                },
                {
                  "contentLink": {
                    "id": 473,
                    "workId": 0,
                    "guidValue": "2f54210d-f487-4228-80d6-b4b595a4a5d0",
                    "providerName": null,
                    "url": null,
                    "expanded": null
                  },
                  "name": "What does “Unable to work due to the event” mean?",
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
                    "FaqItemsBlock"
                  ],
                  "parentLink": {
                    "id": 467,
                    "workId": 0,
                    "guidValue": "90d30ae8-dec9-48d3-97ed-709609de42d8",
                    "providerName": null,
                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/90d30ae8dec948d397ed709609de42d8/",
                    "expanded": null
                  },
                  "routeSegment": null,
                  "url": null,
                  "changed": "2023-04-27T18:53:17Z",
                  "created": "2023-04-27T18:53:17Z",
                  "startPublish": "2023-04-27T18:53:17Z",
                  "stopPublish": null,
                  "saved": "2023-04-27T18:53:17Z",
                  "status": "Published",
                  "category": {
                    "value": [],
                    "propertyDataType": "PropertyCategory"
                  },
                  "internalTitle": {
                    "value": "",
                    "propertyDataType": "PropertyLongString"
                  },
                  "question": {
                    "value": "What does “Unable to work due to the event” mean?",
                    "propertyDataType": "PropertyLongString"
                  },
                  "answer": {
                    "value": "• Natural or man-made disasters \n• Epidemics \n• Accidents \n• Illness or injury \n• Medical expenses not covered by insurance \n• Violent crimes \n• Domestic abuse \n• Death of employee or their immediate family member ",
                    "propertyDataType": "PropertyXhtmlString"
                  }
                },
                {
                  "contentLink": {
                    "id": 476,
                    "workId": 0,
                    "guidValue": "a01201fb-78bf-47e0-b1cf-1e707f70c96c",
                    "providerName": null,
                    "url": null,
                    "expanded": null
                  },
                  "name": "What if I have financial difficulties but don’t meet the requirements for the Taking Care of Our Own Fund?",
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
                    "FaqItemsBlock"
                  ],
                  "parentLink": {
                    "id": 467,
                    "workId": 0,
                    "guidValue": "90d30ae8-dec9-48d3-97ed-709609de42d8",
                    "providerName": null,
                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/90d30ae8dec948d397ed709609de42d8/",
                    "expanded": null
                  },
                  "routeSegment": null,
                  "url": null,
                  "changed": "2023-04-27T18:57:33Z",
                  "created": "2023-04-27T18:57:33Z",
                  "startPublish": "2023-04-27T18:57:33Z",
                  "stopPublish": null,
                  "saved": "2023-04-27T18:57:33Z",
                  "status": "Published",
                  "category": {
                    "value": [],
                    "propertyDataType": "PropertyCategory"
                  },
                  "internalTitle": {
                    "value": "",
                    "propertyDataType": "PropertyLongString"
                  },
                  "question": {
                    "value": "What if I have financial difficulties but don’t meet the requirements for the Taking Care of Our Own Fund?",
                    "propertyDataType": "PropertyLongString"
                  },
                  "answer": {
                    "value": "• Natural or man-made disasters \n• Epidemics \n• Accidents \n• Illness or injury \n• Medical expenses not covered by insurance \n• Violent crimes \n• Domestic abuse \n• Death of employee or their immediate family member ",
                    "propertyDataType": "PropertyXhtmlString"
                  }
                }
              ],
              "value": [
                {
                  "displayOption": "",
                  "tag": null,
                  "contentLink": {
                    "id": 475,
                    "workId": 0,
                    "guidValue": "2f487222-f94b-4c07-9936-9d154200752b",
                    "providerName": null,
                    "url": null,
                    "expanded": null
                  }
                },
                {
                  "displayOption": "",
                  "tag": null,
                  "contentLink": {
                    "id": 469,
                    "workId": 0,
                    "guidValue": "0c696396-a224-4406-88a4-eaedac01d2c6",
                    "providerName": null,
                    "url": null,
                    "expanded": null
                  }
                },
                {
                  "displayOption": "",
                  "tag": null,
                  "contentLink": {
                    "id": 470,
                    "workId": 0,
                    "guidValue": "39533231-668f-4970-af08-95960ca4cb75",
                    "providerName": null,
                    "url": null,
                    "expanded": null
                  }
                },
                {
                  "displayOption": "",
                  "tag": null,
                  "contentLink": {
                    "id": 471,
                    "workId": 0,
                    "guidValue": "952d0f60-fecd-4374-8a14-22a27d4d17e2",
                    "providerName": null,
                    "url": null,
                    "expanded": null
                  }
                },
                {
                  "displayOption": "",
                  "tag": null,
                  "contentLink": {
                    "id": 472,
                    "workId": 0,
                    "guidValue": "b66b21ee-0118-4b6a-94ad-ba7f25bc9d65",
                    "providerName": null,
                    "url": null,
                    "expanded": null
                  }
                },
                {
                  "displayOption": "",
                  "tag": null,
                  "contentLink": {
                    "id": 473,
                    "workId": 0,
                    "guidValue": "2f54210d-f487-4228-80d6-b4b595a4a5d0",
                    "providerName": null,
                    "url": null,
                    "expanded": null
                  }
                },
                {
                  "displayOption": "",
                  "tag": null,
                  "contentLink": {
                    "id": 476,
                    "workId": 0,
                    "guidValue": "a01201fb-78bf-47e0-b1cf-1e707f70c96c",
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
              "id": 466,
              "workId": 0,
              "guidValue": "3b992311-abd6-437b-b0fd-d28da3a5f65f",
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