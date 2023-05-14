import { render, screen, act } from "@testing-library/react";
import FooterComponent from "@/components/footer";
import axios from "axios";
jest.mock("axios");

describe("FooterComponent - Display values from CMS", () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({ data: footerData });
  });

  test("Display values from CMS", async () => {
    await act(async () => {
      render(<FooterComponent />);
    });
    expect(screen.getByText("Contact Us")).toBeInTheDocument();
    expect(screen.getByText("FAQ")).toBeInTheDocument();
  });
});

const footerData = [
  {
    contentLink: {
      id: 123,
      workId: 0,
      guidValue: "fd0bde2f-10ac-4193-82ff-6db745d85445",
      providerName: null,
      url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/application-settings/",
      expanded: null,
    },
    name: "Application Settings",
    language: {
      link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/application-settings/",
      displayName: "English",
      name: "en",
    },
    existingLanguages: [
      {
        link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/application-settings/",
        displayName: "English",
        name: "en",
      },
    ],
    masterLanguage: {
      link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/application-settings/",
      displayName: "English",
      name: "en",
    },
    contentType: ["Page", "ApplicationSettings"],
    parentLink: {
      id: 1,
      workId: 0,
      guidValue: "43f936c9-9b23-4ea3-97b2-61c538ad07c9",
      providerName: null,
      url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/",
      expanded: null,
    },
    routeSegment: "application-settings",
    url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/application-settings/",
    changed: "2023-04-20T17:20:40Z",
    created: "2023-04-20T17:20:16Z",
    startPublish: "2023-04-20T17:20:40Z",
    stopPublish: null,
    saved: "2023-05-04T11:22:39Z",
    status: "Published",
    category: {
      value: [],
      propertyDataType: "PropertyCategory",
    },
    logoImage: {
      expandedValue: {
        contentLink: {
          id: 122,
          workId: 0,
          guidValue: "d296c445-2746-47b5-a4a1-c50df346903c",
          providerName: null,
          url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/desktop_logo_color.svg",
          expanded: null,
        },
        name: "Foster & Thrive Logo",
        language: {
          link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/desktop_logo_color.svg",
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
        routeSegment: "desktop_logo_color.svg",
        url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/desktop_logo_color.svg",
        changed: "2023-04-20T10:32:50Z",
        created: "2023-04-20T10:32:50Z",
        startPublish: "2023-04-20T10:32:50Z",
        stopPublish: null,
        saved: "2023-05-06T04:36:02Z",
        status: "Published",
        category: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
        thumbnail: {
          value: {
            id: "epi.fx.blob://default/d296c445274647b5a4a1c50df346903c/8b7b3c84d243423c8833b3b18e720287.svg",
            url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/desktop_logo_color.svg/Thumbnail",
          },
          propertyDataType: "PropertyBlob",
        },
        mimeType: {
          value: "image/svg+xml",
          propertyDataType: "PropertyString",
        },
      },
      value: {
        id: 122,
        workId: 0,
        guidValue: "d296c445-2746-47b5-a4a1-c50df346903c",
        providerName: null,
        url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/desktop_logo_color.svg",
        expanded: null,
      },
      propertyDataType: "PropertyContentReference",
    },
    headerMegaMenu: {
      expandedValue: [
        {
          contentLink: {
            id: 139,
            workId: 0,
            guidValue: "26e01789-aa3d-4283-8d92-d7cfe5852eae",
            providerName: null,
            url: null,
            expanded: null,
          },
          name: "Main Menu Navigation",
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
          contentType: ["Block", "MenuNavigationBlock"],
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
          changed: "2023-04-20T18:16:24Z",
          created: "2023-04-20T18:16:18Z",
          startPublish: "2023-04-20T18:16:24Z",
          stopPublish: null,
          saved: "2023-05-06T16:36:29Z",
          status: "Published",
          category: {
            value: [],
            propertyDataType: "PropertyCategory",
          },
          contentBlockArea: {
            expandedValue: [
              {
                contentLink: {
                  id: 138,
                  workId: 0,
                  guidValue: "0c4d10d3-9483-4ffa-9710-a02e04aad259",
                  providerName: null,
                  url: null,
                  expanded: null,
                },
                name: "Products",
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
                contentType: ["Block", "MenuNavigationItemsBlock"],
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
                changed: "2023-04-20T18:14:37Z",
                created: "2023-04-20T18:13:58Z",
                startPublish: "2023-04-20T18:14:37Z",
                stopPublish: null,
                saved: "2023-05-09T11:09:43Z",
                status: "Published",
                category: {
                  value: [],
                  propertyDataType: "PropertyCategory",
                },
                menuItemName: {
                  value: "Products",
                  propertyDataType: "PropertyLongString",
                },
                subMenuContentBlockArea: {
                  expandedValue: [],
                  value: [
                    {
                      displayOption: "",
                      tag: null,
                      contentLink: {
                        id: 147,
                        workId: 0,
                        guidValue: "36e583da-8e2c-406b-a8e6-da969c408f57",
                        providerName: null,
                        url: null,
                        expanded: null,
                      },
                    },
                    {
                      displayOption: "",
                      tag: null,
                      contentLink: {
                        id: 148,
                        workId: 0,
                        guidValue: "6935886d-bb7c-4d73-b4cc-5da410a097c7",
                        providerName: null,
                        url: null,
                        expanded: null,
                      },
                    },
                    {
                      displayOption: "",
                      tag: null,
                      contentLink: {
                        id: 149,
                        workId: 0,
                        guidValue: "7bf2d1b9-4e16-4f5f-ada0-a7e693934cd2",
                        providerName: null,
                        url: null,
                        expanded: null,
                      },
                    },
                    {
                      displayOption: "",
                      tag: null,
                      contentLink: {
                        id: 150,
                        workId: 0,
                        guidValue: "b777071f-9f02-4b85-a1db-2c7e502ada7a",
                        providerName: null,
                        url: null,
                        expanded: null,
                      },
                    },
                  ],
                  propertyDataType: "PropertyContentArea",
                },
                menuItemUrl: {
                  value:
                    "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/product-category/landing-page/",
                  propertyDataType: "PropertyUrl",
                },
              },
              {
                contentLink: {
                  id: 142,
                  workId: 0,
                  guidValue: "69eccaed-8f63-47f2-9be4-abeedf3903d9",
                  providerName: null,
                  url: null,
                  expanded: null,
                },
                name: "Health Needs",
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
                contentType: ["Block", "MenuNavigationItemsBlock"],
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
                changed: "2023-04-20T18:20:59Z",
                created: "2023-04-20T18:20:47Z",
                startPublish: "2023-04-20T18:20:59Z",
                stopPublish: null,
                saved: "2023-05-08T08:47:31Z",
                status: "Published",
                category: {
                  value: [],
                  propertyDataType: "PropertyCategory",
                },
                menuItemName: {
                  value: "Health Needs ",
                  propertyDataType: "PropertyLongString",
                },
                subMenuContentBlockArea: {
                  expandedValue: [],
                  value: [
                    {
                      displayOption: "",
                      tag: null,
                      contentLink: {
                        id: 181,
                        workId: 0,
                        guidValue: "4890d26a-486b-41b3-bb25-854dc2746775",
                        providerName: null,
                        url: null,
                        expanded: null,
                      },
                    },
                    {
                      displayOption: "",
                      tag: null,
                      contentLink: {
                        id: 182,
                        workId: 0,
                        guidValue: "4fc16fb9-d50a-454a-89ad-4ff6e9a96cc5",
                        providerName: null,
                        url: null,
                        expanded: null,
                      },
                    },
                    {
                      displayOption: "",
                      tag: null,
                      contentLink: {
                        id: 183,
                        workId: 0,
                        guidValue: "bd852048-74ce-49ba-a575-a0045899015e",
                        providerName: null,
                        url: null,
                        expanded: null,
                      },
                    },
                    {
                      displayOption: "",
                      tag: null,
                      contentLink: {
                        id: 184,
                        workId: 0,
                        guidValue: "addd4af7-cc27-4018-b8c0-e15140a94564",
                        providerName: null,
                        url: null,
                        expanded: null,
                      },
                    },
                    {
                      displayOption: "",
                      tag: null,
                      contentLink: {
                        id: 185,
                        workId: 0,
                        guidValue: "d71dd0fe-be33-4037-80b6-b4bec307519a",
                        providerName: null,
                        url: null,
                        expanded: null,
                      },
                    },
                    {
                      displayOption: "",
                      tag: null,
                      contentLink: {
                        id: 186,
                        workId: 0,
                        guidValue: "228551f7-4020-409c-bdd3-19d7ab45359e",
                        providerName: null,
                        url: null,
                        expanded: null,
                      },
                    },
                    {
                      displayOption: "",
                      tag: null,
                      contentLink: {
                        id: 187,
                        workId: 0,
                        guidValue: "ca7f7fe0-660b-4875-b16c-d54959e222ad",
                        providerName: null,
                        url: null,
                        expanded: null,
                      },
                    },
                    {
                      displayOption: "",
                      tag: null,
                      contentLink: {
                        id: 188,
                        workId: 0,
                        guidValue: "1f338c7f-bdaf-48ae-a7fb-bda02fe51eea",
                        providerName: null,
                        url: null,
                        expanded: null,
                      },
                    },
                    {
                      displayOption: "",
                      tag: null,
                      contentLink: {
                        id: 189,
                        workId: 0,
                        guidValue: "ed9111c4-9122-4db8-9131-a6ace01d4216",
                        providerName: null,
                        url: null,
                        expanded: null,
                      },
                    },
                    {
                      displayOption: "",
                      tag: null,
                      contentLink: {
                        id: 190,
                        workId: 0,
                        guidValue: "af87de20-2f0c-4f72-b3cd-f5c7b88b6766",
                        providerName: null,
                        url: null,
                        expanded: null,
                      },
                    },
                    {
                      displayOption: "",
                      tag: null,
                      contentLink: {
                        id: 191,
                        workId: 0,
                        guidValue: "0c51c141-023a-46e2-a159-e92d55e0e97d",
                        providerName: null,
                        url: null,
                        expanded: null,
                      },
                    },
                    {
                      displayOption: "",
                      tag: null,
                      contentLink: {
                        id: 192,
                        workId: 0,
                        guidValue: "64cb4919-4370-4a66-b67a-4ee75b925ee8",
                        providerName: null,
                        url: null,
                        expanded: null,
                      },
                    },
                    {
                      displayOption: "",
                      tag: null,
                      contentLink: {
                        id: 193,
                        workId: 0,
                        guidValue: "ee0efea6-681c-49e7-9bd3-fbf933558312",
                        providerName: null,
                        url: null,
                        expanded: null,
                      },
                    },
                    {
                      displayOption: "",
                      tag: null,
                      contentLink: {
                        id: 194,
                        workId: 0,
                        guidValue: "00a8b195-0a55-4d5d-9656-620054dd80d2",
                        providerName: null,
                        url: null,
                        expanded: null,
                      },
                    },
                    {
                      displayOption: "",
                      tag: null,
                      contentLink: {
                        id: 195,
                        workId: 0,
                        guidValue: "428ec0f5-965d-44b2-9e8e-67131b39c36b",
                        providerName: null,
                        url: null,
                        expanded: null,
                      },
                    },
                    {
                      displayOption: "",
                      tag: null,
                      contentLink: {
                        id: 196,
                        workId: 0,
                        guidValue: "ec089d6c-2269-49e6-b4ce-a0c219526524",
                        providerName: null,
                        url: null,
                        expanded: null,
                      },
                    },
                  ],
                  propertyDataType: "PropertyContentArea",
                },
                menuItemUrl: {
                  value:
                    "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/product-category/health-needs/",
                  propertyDataType: "PropertyUrl",
                },
              },
              {
                contentLink: {
                  id: 143,
                  workId: 0,
                  guidValue: "363b0b04-3241-4a7a-a98f-3a1d26937eca",
                  providerName: null,
                  url: null,
                  expanded: null,
                },
                name: "Why F&T",
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
                contentType: ["Block", "MenuNavigationItemsBlock"],
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
                changed: "2023-04-20T18:21:40Z",
                created: "2023-04-20T18:21:24Z",
                startPublish: "2023-04-20T18:21:40Z",
                stopPublish: null,
                saved: "2023-05-08T08:48:18Z",
                status: "Published",
                category: {
                  value: [],
                  propertyDataType: "PropertyCategory",
                },
                menuItemName: {
                  value: "Why F&T ",
                  propertyDataType: "PropertyLongString",
                },
                subMenuContentBlockArea: {
                  value: null,
                  propertyDataType: "PropertyContentArea",
                },
                menuItemUrl: {
                  value:
                    "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/generic/why-ft/",
                  propertyDataType: "PropertyUrl",
                },
              },
              {
                contentLink: {
                  id: 144,
                  workId: 0,
                  guidValue: "4b31e941-3f8a-4cbb-98ad-64dd1a98e900",
                  providerName: null,
                  url: null,
                  expanded: null,
                },
                name: "Where to Buy",
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
                contentType: ["Block", "MenuNavigationItemsBlock"],
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
                changed: "2023-04-20T18:22:17Z",
                created: "2023-04-20T18:22:05Z",
                startPublish: "2023-04-20T18:22:17Z",
                stopPublish: null,
                saved: "2023-05-09T11:20:11Z",
                status: "Published",
                category: {
                  value: [],
                  propertyDataType: "PropertyCategory",
                },
                menuItemName: {
                  value: "Where to Buy ",
                  propertyDataType: "PropertyLongString",
                },
                subMenuContentBlockArea: {
                  value: null,
                  propertyDataType: "PropertyContentArea",
                },
                menuItemUrl: {
                  value: "/shop/",
                  propertyDataType: "PropertyUrl",
                },
              },
              {
                contentLink: {
                  id: 145,
                  workId: 0,
                  guidValue: "b0c81ac8-4957-4c16-8bc4-8e6d6234222a",
                  providerName: null,
                  url: null,
                  expanded: null,
                },
                name: "Blog",
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
                contentType: ["Block", "MenuNavigationItemsBlock"],
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
                changed: "2023-04-20T18:23:15Z",
                created: "2023-04-20T18:23:02Z",
                startPublish: "2023-04-20T18:23:15Z",
                stopPublish: null,
                saved: "2023-05-08T08:50:07Z",
                status: "Published",
                category: {
                  value: [],
                  propertyDataType: "PropertyCategory",
                },
                menuItemName: {
                  value: "Blog",
                  propertyDataType: "PropertyLongString",
                },
                subMenuContentBlockArea: {
                  value: null,
                  propertyDataType: "PropertyContentArea",
                },
                menuItemUrl: {
                  value: "/blog",
                  propertyDataType: "PropertyUrl",
                },
              },
              {
                contentLink: {
                  id: 146,
                  workId: 0,
                  guidValue: "b9f57f77-0ad7-443b-b7c0-081f77d6728d",
                  providerName: null,
                  url: null,
                  expanded: null,
                },
                name: "Health Care Professionals",
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
                contentType: ["Block", "MenuNavigationItemsBlock"],
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
                changed: "2023-04-20T18:23:51Z",
                created: "2023-04-20T18:23:38Z",
                startPublish: "2023-04-20T18:23:51Z",
                stopPublish: null,
                saved: "2023-05-08T08:50:39Z",
                status: "Published",
                category: {
                  value: [],
                  propertyDataType: "PropertyCategory",
                },
                menuItemName: {
                  value: "Health Care Professionals",
                  propertyDataType: "PropertyLongString",
                },
                subMenuContentBlockArea: {
                  value: null,
                  propertyDataType: "PropertyContentArea",
                },
                menuItemUrl: {
                  value:
                    "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/generic/health-care-professionals/",
                  propertyDataType: "PropertyUrl",
                },
              },
            ],
            value: [
              {
                displayOption: "",
                tag: null,
                contentLink: {
                  id: 138,
                  workId: 0,
                  guidValue: "0c4d10d3-9483-4ffa-9710-a02e04aad259",
                  providerName: null,
                  url: null,
                  expanded: null,
                },
              },
              {
                displayOption: "",
                tag: null,
                contentLink: {
                  id: 142,
                  workId: 0,
                  guidValue: "69eccaed-8f63-47f2-9be4-abeedf3903d9",
                  providerName: null,
                  url: null,
                  expanded: null,
                },
              },
              {
                displayOption: "",
                tag: null,
                contentLink: {
                  id: 143,
                  workId: 0,
                  guidValue: "363b0b04-3241-4a7a-a98f-3a1d26937eca",
                  providerName: null,
                  url: null,
                  expanded: null,
                },
              },
              {
                displayOption: "",
                tag: null,
                contentLink: {
                  id: 144,
                  workId: 0,
                  guidValue: "4b31e941-3f8a-4cbb-98ad-64dd1a98e900",
                  providerName: null,
                  url: null,
                  expanded: null,
                },
              },
              {
                displayOption: "",
                tag: null,
                contentLink: {
                  id: 145,
                  workId: 0,
                  guidValue: "b0c81ac8-4957-4c16-8bc4-8e6d6234222a",
                  providerName: null,
                  url: null,
                  expanded: null,
                },
              },
              {
                displayOption: "",
                tag: null,
                contentLink: {
                  id: 146,
                  workId: 0,
                  guidValue: "b9f57f77-0ad7-443b-b7c0-081f77d6728d",
                  providerName: null,
                  url: null,
                  expanded: null,
                },
              },
            ],
            propertyDataType: "PropertyContentArea",
          },
        },
      ],
      value: [
        {
          displayOption: "",
          tag: null,
          contentLink: {
            id: 139,
            workId: 0,
            guidValue: "26e01789-aa3d-4283-8d92-d7cfe5852eae",
            providerName: null,
            url: null,
            expanded: null,
          },
        },
      ],
      propertyDataType: "PropertyContentArea",
    },
    footer: {
      expandedValue: [
        {
          contentLink: {
            id: 268,
            workId: 0,
            guidValue: "5e2680c7-5b89-449a-9dab-ac31ec934d9d",
            providerName: null,
            url: null,
            expanded: null,
          },
          name: "Footer",
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
          contentType: ["Block", "FooterBlock"],
          parentLink: {
            id: 267,
            workId: 0,
            guidValue: "45453801-71d5-469d-9fd8-8fe09a6ba588",
            providerName: null,
            url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/4545380171d5469d9fd88fe09a6ba588/",
            expanded: null,
          },
          routeSegment: null,
          url: null,
          changed: "2023-04-22T15:05:37Z",
          created: "2023-04-22T15:05:37Z",
          startPublish: "2023-04-22T15:05:37Z",
          stopPublish: null,
          saved: "2023-05-06T17:06:06Z",
          status: "Published",
          category: {
            value: [],
            propertyDataType: "PropertyCategory",
          },
          internalTitle: {
            value: "",
            propertyDataType: "PropertyLongString",
          },
          menuItemsColumn1: {
            expandedValue: [
              {
                contentLink: {
                  id: 270,
                  workId: 0,
                  guidValue: "7bd287fa-8e91-47b4-85c4-eaa59908a9e2",
                  providerName: null,
                  url: null,
                  expanded: null,
                },
                name: "Contact Us",
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
                contentType: ["Block", "FooterMenuItemsBlock"],
                parentLink: {
                  id: 269,
                  workId: 0,
                  guidValue: "16b5ad2e-8c11-4a3c-afe6-11eb83dbdd1c",
                  providerName: null,
                  url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/16b5ad2e8c114a3cafe611eb83dbdd1c/",
                  expanded: null,
                },
                routeSegment: null,
                url: null,
                changed: "2023-04-22T15:13:39Z",
                created: "2023-04-22T15:13:39Z",
                startPublish: "2023-04-22T15:13:39Z",
                stopPublish: null,
                saved: "2023-05-06T16:55:12Z",
                status: "Published",
                category: {
                  value: [],
                  propertyDataType: "PropertyCategory",
                },
                internalTitle: {
                  value: "",
                  propertyDataType: "PropertyLongString",
                },
                subMenuItems: {
                  value: null,
                  propertyDataType: "PropertyContentArea",
                },
                menuTitle: {
                  value: "Contact Us",
                  propertyDataType: "PropertyLongString",
                },
                menuUrl: {
                  value: "/contact_us",
                  propertyDataType: "PropertyUrl",
                },
              },
              {
                contentLink: {
                  id: 271,
                  workId: 0,
                  guidValue: "abd5ce90-b2fd-4796-ab27-1fcc9441aa02",
                  providerName: null,
                  url: null,
                  expanded: null,
                },
                name: "FAQ",
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
                contentType: ["Block", "FooterMenuItemsBlock"],
                parentLink: {
                  id: 269,
                  workId: 0,
                  guidValue: "16b5ad2e-8c11-4a3c-afe6-11eb83dbdd1c",
                  providerName: null,
                  url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/16b5ad2e8c114a3cafe611eb83dbdd1c/",
                  expanded: null,
                },
                routeSegment: null,
                url: null,
                changed: "2023-04-22T15:14:13Z",
                created: "2023-04-22T15:14:13Z",
                startPublish: "2023-04-22T15:14:13Z",
                stopPublish: null,
                saved: "2023-05-06T16:48:41Z",
                status: "Published",
                category: {
                  value: [],
                  propertyDataType: "PropertyCategory",
                },
                internalTitle: {
                  value: "",
                  propertyDataType: "PropertyLongString",
                },
                subMenuItems: {
                  value: null,
                  propertyDataType: "PropertyContentArea",
                },
                menuTitle: {
                  value: "FAQ",
                  propertyDataType: "PropertyLongString",
                },
                menuUrl: {
                  value: "/faq",
                  propertyDataType: "PropertyUrl",
                },
              },
            ],
            value: [
              {
                displayOption: "",
                tag: null,
                contentLink: {
                  id: 270,
                  workId: 0,
                  guidValue: "7bd287fa-8e91-47b4-85c4-eaa59908a9e2",
                  providerName: null,
                  url: null,
                  expanded: null,
                },
              },
              {
                displayOption: "",
                tag: null,
                contentLink: {
                  id: 271,
                  workId: 0,
                  guidValue: "abd5ce90-b2fd-4796-ab27-1fcc9441aa02",
                  providerName: null,
                  url: null,
                  expanded: null,
                },
              },
            ],
            propertyDataType: "PropertyContentArea",
          },
          menuItemsColumn2: {
            expandedValue: [],
            value: [
              {
                displayOption: "",
                tag: null,
                contentLink: {
                  id: 272,
                  workId: 0,
                  guidValue: "5b77fc25-34f0-4d40-939d-849eb67e7e10",
                  providerName: null,
                  url: null,
                  expanded: null,
                },
              },
              {
                displayOption: "",
                tag: null,
                contentLink: {
                  id: 273,
                  workId: 0,
                  guidValue: "d81753a8-f287-4111-baf3-1996af0ff0b9",
                  providerName: null,
                  url: null,
                  expanded: null,
                },
              },
              {
                displayOption: "",
                tag: null,
                contentLink: {
                  id: 274,
                  workId: 0,
                  guidValue: "fbcf2e2e-6023-4c12-b3c5-c41ba140c047",
                  providerName: null,
                  url: null,
                  expanded: null,
                },
              },
              {
                displayOption: "",
                tag: null,
                contentLink: {
                  id: 275,
                  workId: 0,
                  guidValue: "17572a8f-71ba-425c-a4fc-3e6079d27f26",
                  providerName: null,
                  url: null,
                  expanded: null,
                },
              },
            ],
            propertyDataType: "PropertyContentArea",
          },
          menuItemsColumn3: {
            value: null,
            propertyDataType: "PropertyContentArea",
          },
          socialMediaLinkBlock: {
            expandedValue: [],
            value: [
              {
                displayOption: "",
                tag: null,
                contentLink: {
                  id: 276,
                  workId: 0,
                  guidValue: "23502a8c-c585-4139-95a8-80a92582f704",
                  providerName: null,
                  url: null,
                  expanded: null,
                },
              },
              {
                displayOption: "",
                tag: null,
                contentLink: {
                  id: 278,
                  workId: 0,
                  guidValue: "84cf03c1-9ec0-4ab3-986a-7156ee894ec9",
                  providerName: null,
                  url: null,
                  expanded: null,
                },
              },
            ],
            propertyDataType: "PropertyContentArea",
          },
          subscription: {
            expandedValue: [],
            value: [
              {
                displayOption: "",
                tag: null,
                contentLink: {
                  id: 76,
                  workId: 0,
                  guidValue: "c0a5c791-fde9-4f60-a138-efd7806ab69a",
                  providerName: null,
                  url: null,
                  expanded: null,
                },
              },
            ],
            propertyDataType: "PropertyContentArea",
          },
        },
      ],
      value: [
        {
          displayOption: "",
          tag: null,
          contentLink: {
            id: 268,
            workId: 0,
            guidValue: "5e2680c7-5b89-449a-9dab-ac31ec934d9d",
            providerName: null,
            url: null,
            expanded: null,
          },
        },
      ],
      propertyDataType: "PropertyContentArea",
    },
    headerSignUp: {
      expandedValue: [
        {
          contentLink: {
            id: 76,
            workId: 0,
            guidValue: "c0a5c791-fde9-4f60-a138-efd7806ab69a",
            providerName: null,
            url: null,
            expanded: null,
          },
          name: "Join our mailing list",
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
          contentType: ["Block", "SignUpBlock"],
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
          changed: "2023-04-19T05:52:05Z",
          created: "2023-04-19T05:52:02Z",
          startPublish: "2023-04-19T05:52:05Z",
          stopPublish: null,
          saved: "2023-05-06T16:47:59Z",
          status: "Published",
          category: {
            value: [],
            propertyDataType: "PropertyCategory",
          },
          title: {
            value: "Email Signup & Rewards",
            propertyDataType: "PropertyLongString",
          },
          description: {
            value:
              "<p>Want to receive tips, latest product launches and exclusive offers from Foster &amp; Thrive?</p>",
            propertyDataType: "PropertyXhtmlString",
          },
          subTitle: {
            value: "Sign up today!",
            propertyDataType: "PropertyLongString",
          },
          firstName: {
            value: "First Name",
            propertyDataType: "PropertyLongString",
          },
          lastName: {
            value: "Last Name",
            propertyDataType: "PropertyLongString",
          },
          email: {
            value: "Email",
            propertyDataType: "PropertyLongString",
          },
          buttonText: {
            value: "Submit",
            propertyDataType: "PropertyLongString",
          },
          buttonUrl: {
            value: "/external",
            propertyDataType: "PropertyUrl",
          },
          backgroundColor: {
            value: "",
            propertyDataType: "PropertyLongString",
          },
          displayType: {
            value: "",
            propertyDataType: "PropertyLongString",
          },
          firstNamePlaceHolder: {
            value: "",
            propertyDataType: "PropertyLongString",
          },
          lastNamePlaceHolder: {
            value: "",
            propertyDataType: "PropertyLongString",
          },
          emailPlaceHolder: {
            value: "",
            propertyDataType: "PropertyLongString",
          },
        },
      ],
      value: [
        {
          displayOption: "",
          tag: null,
          contentLink: {
            id: 76,
            workId: 0,
            guidValue: "c0a5c791-fde9-4f60-a138-efd7806ab69a",
            providerName: null,
            url: null,
            expanded: null,
          },
        },
      ],
      propertyDataType: "PropertyContentArea",
    },
    pageTitle: {
      value: "",
      propertyDataType: "PropertyLongString",
    },
    metaDescription: {
      value: "",
      propertyDataType: "PropertyLongString",
    },
    pageIndex: {
      value: null,
      propertyDataType: "PropertyBoolean",
    },
    noFollow: {
      value: null,
      propertyDataType: "PropertyBoolean",
    },
    canoicalUrl: {
      value: "",
      propertyDataType: "PropertyLongString",
    },
  },
];
