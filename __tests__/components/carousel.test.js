import { render, screen, act } from "@testing-library/react";
import CarouselComponent from "../../components/carousel/index";

jest.mock("axios", () => {
  return {
    all: jest.fn().mockResolvedValueOnce([
      {
        data: {
          contentLink: {
            id: 128,
            workId: 0,
            guidValue: "ce527f9a-97d8-4ccf-be55-b1c0da77e198",
            providerName: null,
            url: null,
            expanded: null,
          },
          title: { value: "CarouselComponent" },
          request: {},
        },
      },
    ]),
    get: jest.fn(() => Promise.resolve({ data: {} })),
  };
});
jest.mock("next/router", () => {
  return {
    useRouter: jest.fn(),
  };
});

describe("CarouselComponent", () => {
  const sectionData = [
    {
      contentLink: {
        id: 33,
        workId: 0,
        guidValue: "e94c6c5c-2dab-4ac2-a3b0-381c8c0a5d9b",
        providerName: null,
        url: null,
        expanded: null,
      },
      name: "Product Categories",
      language: {
        link: null,
        displayName: "English",
        name: "en",
      },
      existingLanguages: [
        {
          link: null,
          displayName: "English",
          name: "en",
        },
      ],
      masterLanguage: {
        link: null,
        displayName: "English",
        name: "en",
      },
      contentType: ["Block", "FourColumnBlock"],
      parentLink: {
        id: 3,
        workId: 0,
        guidValue: "e56f85d0-e833-4e02-976a-2d11fe4d598c",
        providerName: null,
        url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
        expanded: null,
      },
      routeSegment: null,
      url: null,
      changed: "2023-04-18T09:09:15Z",
      created: "2023-04-18T09:09:08Z",
      startPublish: "2023-04-18T09:09:15Z",
      stopPublish: null,
      saved: "2023-04-28T02:57:32Z",
      status: "Published",
      category: {
        value: [],
        propertyDataType: "PropertyCategory",
      },
      contentBlockArea: {
        expandedValue: [
          {
            contentLink: {
              id: 128,
              workId: 0,
              guidValue: "ce527f9a-97d8-4ccf-be55-b1c0da77e198",
              providerName: null,
              url: null,
              expanded: null,
            },
            name: "Explore Acute Care",
            language: {
              link: null,
              displayName: "English",
              name: "en",
            },
            existingLanguages: [
              {
                link: null,
                displayName: "English",
                name: "en",
              },
            ],
            masterLanguage: {
              link: null,
              displayName: "English",
              name: "en",
            },
            contentType: ["Block", "CategoryGridItemBlock"],
            parentLink: {
              id: 3,
              workId: 0,
              guidValue: "e56f85d0-e833-4e02-976a-2d11fe4d598c",
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
              expanded: null,
            },
            routeSegment: null,
            url: null,
            changed: "2023-04-20T17:47:05Z",
            created: "2023-04-20T17:45:32Z",
            startPublish: "2023-04-20T17:47:05Z",
            stopPublish: null,
            saved: "2023-05-13T13:34:20Z",
            status: "Published",
            category: {
              value: [],
              propertyDataType: "PropertyCategory",
            },
            productCategoryImage: {
              expandedValue: {
                contentLink: {
                  id: 209,
                  workId: 0,
                  guidValue: "942efe69-4523-42b7-b012-17555a37eb8f",
                  providerName: null,
                  url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/everyday_care_200x200_new.png",
                  expanded: null,
                },
                name: "everyday_care_200x200_new.png",
                language: {
                  link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/everyday_care_200x200_new.png",
                  displayName: "Invariant Language (Invariant Country)",
                  name: "",
                },
                existingLanguages: [],
                masterLanguage: null,
                contentType: ["Image", "Media", "ImageFile"],
                parentLink: {
                  id: 3,
                  workId: 0,
                  guidValue: "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                  providerName: null,
                  url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                  expanded: null,
                },
                routeSegment: "everyday_care_200x200_new.png",
                url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/everyday_care_200x200_new.png",
                changed: "2023-04-21T10:51:31Z",
                created: "2023-04-21T10:51:16Z",
                startPublish: "2023-04-21T10:51:16Z",
                stopPublish: null,
                saved: "2023-05-06T04:36:04Z",
                status: "Published",
                category: {
                  value: [],
                  propertyDataType: "PropertyCategory",
                },
                thumbnail: {
                  value: {
                    id: "epi.fx.blob://default/942efe69452342b7b01217555a37eb8f/3c67f6d03ff44aff896500828bc0023d_Thumbnail.png",
                    url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/everyday_care_200x200_new.png/Thumbnail",
                  },
                  propertyDataType: "PropertyBlob",
                },
                mimeType: {
                  value: "image/png",
                  propertyDataType: "PropertyString",
                },
                altText: {
                  value: "",
                  propertyDataType: "PropertyLongString",
                },
              },
              value: {
                id: 209,
                workId: 0,
                guidValue: "942efe69-4523-42b7-b012-17555a37eb8f",
                providerName: null,
                url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/everyday_care_200x200_new.png",
                expanded: null,
              },
              propertyDataType: "PropertyContentReference",
            },
            productCategoryName: {
              value: "Acute ",
              propertyDataType: "PropertyLongString",
            },
            productCategoryDescription: {
              value:
                "<p>&nbsp;Products to care for your specific symptoms.</p>",
              propertyDataType: "PropertyXhtmlString",
            },
            productCategoryType: {
              value: [
                {
                  id: 19,
                  name: "Acute Care",
                  description: "Acute Care",
                },
              ],
              propertyDataType: "PropertyCategory",
            },
            productCategoryUrl: {
              value:
                "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/product-category/acute-care/?category=Acute+Care",
              propertyDataType: "PropertyUrl",
            },
          },
          {
            contentLink: {
              id: 129,
              workId: 0,
              guidValue: "d0999b38-a706-45bd-9a09-2a4844d5e4f9",
              providerName: null,
              url: null,
              expanded: null,
            },
            name: "Explore Preventative Care",
            language: {
              link: null,
              displayName: "English",
              name: "en",
            },
            existingLanguages: [
              {
                link: null,
                displayName: "English",
                name: "en",
              },
            ],
            masterLanguage: {
              link: null,
              displayName: "English",
              name: "en",
            },
            contentType: ["Block", "CategoryGridItemBlock"],
            parentLink: {
              id: 3,
              workId: 0,
              guidValue: "e56f85d0-e833-4e02-976a-2d11fe4d598c",
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
              expanded: null,
            },
            routeSegment: null,
            url: null,
            changed: "2023-04-20T17:48:57Z",
            created: "2023-04-20T17:48:01Z",
            startPublish: "2023-04-20T17:48:57Z",
            stopPublish: null,
            saved: "2023-05-13T13:34:50Z",
            status: "Published",
            category: {
              value: [],
              propertyDataType: "PropertyCategory",
            },
            productCategoryImage: {
              expandedValue: {
                contentLink: {
                  id: 208,
                  workId: 0,
                  guidValue: "ff8dba7c-9c79-477f-abbd-921f4bc6a0ff",
                  providerName: null,
                  url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/preventative_care_200x200.png",
                  expanded: null,
                },
                name: "preventative_care_200x200.png",
                language: {
                  link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/preventative_care_200x200.png",
                  displayName: "Invariant Language (Invariant Country)",
                  name: "",
                },
                existingLanguages: [],
                masterLanguage: null,
                contentType: ["Image", "Media", "ImageFile"],
                parentLink: {
                  id: 3,
                  workId: 0,
                  guidValue: "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                  providerName: null,
                  url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                  expanded: null,
                },
                routeSegment: "preventative_care_200x200.png",
                url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/preventative_care_200x200.png",
                changed: "2023-04-21T10:48:39Z",
                created: "2023-04-21T10:38:07Z",
                startPublish: "2023-04-21T10:38:07Z",
                stopPublish: null,
                saved: "2023-05-06T04:36:03Z",
                status: "Published",
                category: {
                  value: [],
                  propertyDataType: "PropertyCategory",
                },
                thumbnail: {
                  value: {
                    id: "epi.fx.blob://default/ff8dba7c9c79477fabbd921f4bc6a0ff/c440c1a8eece44379c99947c758ab3f0_Thumbnail.png",
                    url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/preventative_care_200x200.png/Thumbnail",
                  },
                  propertyDataType: "PropertyBlob",
                },
                mimeType: {
                  value: "image/png",
                  propertyDataType: "PropertyString",
                },
                altText: {
                  value: "",
                  propertyDataType: "PropertyLongString",
                },
              },
              value: {
                id: 208,
                workId: 0,
                guidValue: "ff8dba7c-9c79-477f-abbd-921f4bc6a0ff",
                providerName: null,
                url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/preventative_care_200x200.png",
                expanded: null,
              },
              propertyDataType: "PropertyContentReference",
            },
            productCategoryName: {
              value: "Preventative Care",
              propertyDataType: "PropertyLongString",
            },
            productCategoryDescription: {
              value: "<p>Products to help you prepare for anything.</p>",
              propertyDataType: "PropertyXhtmlString",
            },
            productCategoryType: {
              value: [
                {
                  id: 28,
                  name: "Preventative Care",
                  description: "Preventative Care",
                },
              ],
              propertyDataType: "PropertyCategory",
            },
            productCategoryUrl: {
              value:
                "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/product-category/preventative-care/?category=Preventative+Care",
              propertyDataType: "PropertyUrl",
            },
          },
          {
            contentLink: {
              id: 130,
              workId: 0,
              guidValue: "e8d5b77b-178f-441b-9e5f-61907fd1630d",
              providerName: null,
              url: null,
              expanded: null,
            },
            name: "Explore Everyday Care",
            language: {
              link: null,
              displayName: "English",
              name: "en",
            },
            existingLanguages: [
              {
                link: null,
                displayName: "English",
                name: "en",
              },
            ],
            masterLanguage: {
              link: null,
              displayName: "English",
              name: "en",
            },
            contentType: ["Block", "CategoryGridItemBlock"],
            parentLink: {
              id: 3,
              workId: 0,
              guidValue: "e56f85d0-e833-4e02-976a-2d11fe4d598c",
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
              expanded: null,
            },
            routeSegment: null,
            url: null,
            changed: "2023-04-20T17:50:16Z",
            created: "2023-04-20T17:49:28Z",
            startPublish: "2023-04-20T17:50:16Z",
            stopPublish: null,
            saved: "2023-05-13T13:35:19Z",
            status: "Published",
            category: {
              value: [],
              propertyDataType: "PropertyCategory",
            },
            productCategoryImage: {
              expandedValue: {
                contentLink: {
                  id: 220,
                  workId: 0,
                  guidValue: "c0be1f09-ac6e-4bb9-9828-9573fc33e423",
                  providerName: null,
                  url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/every_day_care_200x200.svg",
                  expanded: null,
                },
                name: "every_day_care_200x200.svg",
                language: {
                  link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/every_day_care_200x200.svg",
                  displayName: "Invariant Language (Invariant Country)",
                  name: "",
                },
                existingLanguages: [],
                masterLanguage: null,
                contentType: ["Image", "Media", "VectorImageFile"],
                parentLink: {
                  id: 3,
                  workId: 0,
                  guidValue: "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                  providerName: null,
                  url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                  expanded: null,
                },
                routeSegment: "every_day_care_200x200.svg",
                url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/every_day_care_200x200.svg",
                changed: "2023-04-21T12:05:46Z",
                created: "2023-04-21T12:05:46Z",
                startPublish: "2023-04-21T12:05:46Z",
                stopPublish: null,
                saved: "2023-05-06T04:36:05Z",
                status: "Published",
                category: {
                  value: [],
                  propertyDataType: "PropertyCategory",
                },
                thumbnail: {
                  value: {
                    id: "epi.fx.blob://default/c0be1f09ac6e4bb998289573fc33e423/931d227ee0924c0c9fc1ba4da82776d2.svg",
                    url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/every_day_care_200x200.svg/Thumbnail",
                  },
                  propertyDataType: "PropertyBlob",
                },
                mimeType: {
                  value: "image/svg+xml",
                  propertyDataType: "PropertyString",
                },
              },
              value: {
                id: 220,
                workId: 0,
                guidValue: "c0be1f09-ac6e-4bb9-9828-9573fc33e423",
                providerName: null,
                url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/every_day_care_200x200.svg",
                expanded: null,
              },
              propertyDataType: "PropertyContentReference",
            },
            productCategoryName: {
              value: "Every Day Care",
              propertyDataType: "PropertyLongString",
            },
            productCategoryDescription: {
              value: "<p>Products to support your daily routine.</p>",
              propertyDataType: "PropertyXhtmlString",
            },
            productCategoryType: {
              value: [
                {
                  id: 35,
                  name: "Every Day Care",
                  description: "Every Day Care",
                },
              ],
              propertyDataType: "PropertyCategory",
            },
            productCategoryUrl: {
              value:
                "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/product-category/every-day-care/?category=Every+Day+Care",
              propertyDataType: "PropertyUrl",
            },
          },
          {
            contentLink: {
              id: 131,
              workId: 0,
              guidValue: "de4ad721-b3ff-4c08-b29d-bc883a941f84",
              providerName: null,
              url: null,
              expanded: null,
            },
            name: "Explore Diganostic Care",
            language: {
              link: null,
              displayName: "English",
              name: "en",
            },
            existingLanguages: [
              {
                link: null,
                displayName: "English",
                name: "en",
              },
            ],
            masterLanguage: {
              link: null,
              displayName: "English",
              name: "en",
            },
            contentType: ["Block", "CategoryGridItemBlock"],
            parentLink: {
              id: 3,
              workId: 0,
              guidValue: "e56f85d0-e833-4e02-976a-2d11fe4d598c",
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
              expanded: null,
            },
            routeSegment: null,
            url: null,
            changed: "2023-04-20T17:51:19Z",
            created: "2023-04-20T17:50:39Z",
            startPublish: "2023-04-20T17:51:19Z",
            stopPublish: null,
            saved: "2023-05-13T13:35:49Z",
            status: "Published",
            category: {
              value: [],
              propertyDataType: "PropertyCategory",
            },
            productCategoryImage: {
              expandedValue: {
                contentLink: {
                  id: 210,
                  workId: 0,
                  guidValue: "011b202a-74a2-455c-8ac8-12bc2e042c71",
                  providerName: null,
                  url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/diagnostic_care_200x200.png",
                  expanded: null,
                },
                name: "diagnostic_care_200x200.png",
                language: {
                  link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/diagnostic_care_200x200.png",
                  displayName: "Invariant Language (Invariant Country)",
                  name: "",
                },
                existingLanguages: [],
                masterLanguage: null,
                contentType: ["Image", "Media", "ImageFile"],
                parentLink: {
                  id: 3,
                  workId: 0,
                  guidValue: "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                  providerName: null,
                  url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                  expanded: null,
                },
                routeSegment: "diagnostic_care_200x200.png",
                url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/diagnostic_care_200x200.png",
                changed: "2023-04-21T11:00:09Z",
                created: "2023-04-21T10:59:15Z",
                startPublish: "2023-04-21T10:59:15Z",
                stopPublish: null,
                saved: "2023-05-06T04:36:04Z",
                status: "Published",
                category: {
                  value: [],
                  propertyDataType: "PropertyCategory",
                },
                thumbnail: {
                  value: {
                    id: "epi.fx.blob://default/011b202a74a2455c8ac812bc2e042c71/57664db2a69b437796676a466ca7df9b_Thumbnail.png",
                    url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/diagnostic_care_200x200.png/Thumbnail",
                  },
                  propertyDataType: "PropertyBlob",
                },
                mimeType: {
                  value: "image/png",
                  propertyDataType: "PropertyString",
                },
                altText: {
                  value: "",
                  propertyDataType: "PropertyLongString",
                },
              },
              value: {
                id: 210,
                workId: 0,
                guidValue: "011b202a-74a2-455c-8ac8-12bc2e042c71",
                providerName: null,
                url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/diagnostic_care_200x200.png",
                expanded: null,
              },
              propertyDataType: "PropertyContentReference",
            },
            productCategoryName: {
              value: "Diagnostic Care",
              propertyDataType: "PropertyLongString",
            },
            productCategoryDescription: {
              value: "<p>Tools to monitor your health.</p>",
              propertyDataType: "PropertyXhtmlString",
            },
            productCategoryType: {
              value: [
                {
                  id: 46,
                  name: "Diagnostic Care",
                  description: "Diagnostic Care",
                },
              ],
              propertyDataType: "PropertyCategory",
            },
            productCategoryUrl: {
              value:
                "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/product-category/diagnostic-care/?category=Diagnostic+Care",
              propertyDataType: "PropertyUrl",
            },
          },
        ],
        value: [
          {
            displayOption: "",
            tag: null,
            contentLink: {
              id: 128,
              workId: 0,
              guidValue: "ce527f9a-97d8-4ccf-be55-b1c0da77e198",
              providerName: null,
              url: null,
              expanded: null,
            },
          },
        ],
        propertyDataType: "PropertyContentArea",
      },
    },
  ];

  it("renders loading message when data is being fetched", async () => {
    await act(async () => {
      render(<CarouselComponent sectionData={sectionData} />);
    });
    expect(screen.getByText("CarouselComponent")).toBeInTheDocument();
  });
});
