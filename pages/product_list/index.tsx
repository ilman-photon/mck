import useAxios from "@/hooks/useApi";
import FooterComponent from "@/components/footer";
import HeaderComponent from "@/components/header";
import CarouselComponent from "@/components/carousel";
import { useEffect } from "react";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/router";

function ProductListPage() {
  const dataJson = {
    totalMatching: 21,
    results: [
      {
        contentLink: {
          id: 226,
          workId: 0,
          guidValue: "752d6432-aaeb-41a5-bea5-66c3609ef70a",
          providerName: null,
          url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp222/",
          expanded: null,
        },
        name: "Ear Care",
        language: {
          link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp222/",
          displayName: "English",
          name: "en",
        },
        existingLanguages: [
          {
            link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp222/",
            displayName: "English",
            name: "en",
          },
        ],
        masterLanguage: {
          link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp222/",
          displayName: "English",
          name: "en",
        },
        contentType: ["Page", "ProductDetailsPage"],
        parentLink: {
          id: 112,
          workId: 0,
          guidValue: "5c0bd45c-faa2-4223-b688-a0d63097b80d",
          providerName: null,
          url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/",
          expanded: null,
        },
        routeSegment: "pdp222",
        url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp222/",
        changed: "2023-04-21T14:09:34Z",
        created: "2023-04-19T16:21:33Z",
        startPublish: "2023-04-19T16:21:38Z",
        stopPublish: null,
        saved: "2023-04-21T15:31:39Z",
        status: "Published",
        seoSection: {
          value: null,
          propertyDataType: "PropertyContentArea",
        },
        contentBlockArea: {
          value: null,
          propertyDataType: "PropertyContentArea",
        },
        formCategory: {
          value: [
            {
              name: "Liquid Gel",
              description: "Liquid Gel",
              id: 12,
            },
            {
              name: "Nasal Spray",
              description: "Nasal Spray",
              id: 13,
            },
            {
              name: "Tablet",
              description: "Tablet",
              id: 14,
            },
            {
              name: "Topical",
              description: "Topical",
              id: 15,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        healthNeedsCategory: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
        ageTitle: {
          value: "Age",
          propertyDataType: "PropertyLongString",
        },
        description: {
          value:
            "<p>IMMUNE SUPPORT (1): Vitamin D3 is an essential nutrient for immune support. (1) Each serving contains 2000 IU of Vitamin D for immune benefits and may assist the immune system by helping to regulate T and B-lymphocytes (1)<br />SUPPORTS STRONG BONES (1): In addition to immune support, getting a sufficient amount of Vitamin D is critical to building and maintaining strong bones in adults. (1) It is essential for calcium absorption to help support healthy bones (1)<br />YEAR-ROUND SUPPORT: Vitamin D3 supplements contain the same form of Vitamin D that is naturally formed in the body through exposure to sunshine. Nature&rsquo;s Bounty Vitamin D3 helps support the production of Vitamin D all year long (1)<br />NON-GMO FORMULA: Nature&rsquo;s Bounty Vitamin D3 Softgels are non-GMO, gluten- and sugar-free, and contain no artificial colors or sweeteners<br />UNSURPASSED QUALITY AND VALUE: Using the latest breakthroughs in nutritional science and the finest ingredients, Nature&rsquo;s Bounty provides supplements of unsurpassed quality and valueA</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        formTitle: {
          value: "Form",
          propertyDataType: "PropertyLongString",
        },
        title: {
          value:
            "<p>Foster &amp; Thrive&nbsp;<br />Vitamin D3<br />50 mcg (2000 IU)<br />Strong Bones &amp; Immune Support* Ear care&nbsp;</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        ageCategory: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
        recommendedProduct: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        subTitle: {
          value:
            "<p>Liquid Filled | Rapid Release<br />Gluten Free</p>\n<p>Dietary supplement</p>\n<p>100 SOFTGELS Ear care&nbsp;</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        ingredients: {
          value:
            "<p>Vitamin D3, Soybean Oil, Gelatin, Glycerin, Water, Corn Oil.</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        disclaimerText: {
          value: "Disclaimer: Products are subject to availability",
          propertyDataType: "PropertyLongString",
        },
        productType: {
          value: [
            {
              name: "Acute Care",
              description: "Acute Care",
              id: 19,
            },
            {
              name: "Ear Care",
              description: "Ear Care",
              id: 25,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        genderTitle: {
          value: "Gender",
          propertyDataType: "PropertyLongString",
        },
        image: {
          value: {
            expanded: null,
            id: 231,
            guidValue: "5a9fc65e-fa4b-4be7-bf20-f9c319e19196",
            workId: 0,
            providerName: null,
            url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/ear-care.png",
          },
          propertyDataType: "PropertyContentReference",
        },
        availabilityCategory: {
          value: [
            {
              name: "Available Now",
              description: "Available Now",
              id: 17,
            },
            {
              name: "Coming Soon",
              description: "Coming Soon",
              id: 18,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        warnings: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        availabilityTitle: {
          value: "Availability",
          propertyDataType: "PropertyLongString",
        },
        productImages: {
          value: [
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
          ],
          propertyDataType: "PropertyContentReferenceList",
        },
        directions: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        genderCategory: {
          value: [
            {
              name: "Male",
              description: "Male",
              id: 3,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        category: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
      },
      {
        contentLink: {
          id: 235,
          workId: 0,
          guidValue: "e94f6e14-a765-4426-b97a-6d83a96d911d",
          providerName: null,
          url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22222/",
          expanded: null,
        },
        name: "Ear Care 4",
        language: {
          link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22222/",
          displayName: "English",
          name: "en",
        },
        existingLanguages: [
          {
            link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22222/",
            displayName: "English",
            name: "en",
          },
        ],
        masterLanguage: {
          link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22222/",
          displayName: "English",
          name: "en",
        },
        contentType: ["Page", "ProductDetailsPage"],
        parentLink: {
          id: 112,
          workId: 0,
          guidValue: "5c0bd45c-faa2-4223-b688-a0d63097b80d",
          providerName: null,
          url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/",
          expanded: null,
        },
        routeSegment: "pdp22222",
        url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22222/",
        changed: "2023-04-21T15:43:30Z",
        created: "2023-04-19T16:21:33Z",
        startPublish: "2023-04-19T16:21:38Z",
        stopPublish: null,
        saved: "2023-04-21T16:00:52Z",
        status: "Published",
        seoSection: {
          value: null,
          propertyDataType: "PropertyContentArea",
        },
        contentBlockArea: {
          value: null,
          propertyDataType: "PropertyContentArea",
        },
        formCategory: {
          value: [
            {
              name: "Liquid Gel",
              description: "Liquid Gel",
              id: 12,
            },
            {
              name: "Nasal Spray",
              description: "Nasal Spray",
              id: 13,
            },
            {
              name: "Tablet",
              description: "Tablet",
              id: 14,
            },
            {
              name: "Topical",
              description: "Topical",
              id: 15,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        healthNeedsCategory: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
        ageTitle: {
          value: "Age",
          propertyDataType: "PropertyLongString",
        },
        description: {
          value:
            "<p>IMMUNE SUPPORT (1): Vitamin D3 is an essential nutrient for immune support. (1) Each serving contains 2000 IU of Vitamin D for immune benefits and may assist the immune system by helping to regulate T and B-lymphocytes (1)<br />SUPPORTS STRONG BONES (1): In addition to immune support, getting a sufficient amount of Vitamin D is critical to building and maintaining strong bones in adults. (1) It is essential for calcium absorption to help support healthy bones (1)<br />YEAR-ROUND SUPPORT: Vitamin D3 supplements contain the same form of Vitamin D that is naturally formed in the body through exposure to sunshine. Nature&rsquo;s Bounty Vitamin D3 helps support the production of Vitamin D all year long (1)<br />NON-GMO FORMULA: Nature&rsquo;s Bounty Vitamin D3 Softgels are non-GMO, gluten- and sugar-free, and contain no artificial colors or sweeteners<br />UNSURPASSED QUALITY AND VALUE: Using the latest breakthroughs in nutritional science and the finest ingredients, Nature&rsquo;s Bounty provides supplements of unsurpassed quality and valueA</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        formTitle: {
          value: "Form",
          propertyDataType: "PropertyLongString",
        },
        title: {
          value:
            "<p>Foster &amp; Thrive&nbsp;<br />Vitamin D3<br />50 mcg (2000 IU)<br />Strong Bones &amp; Immune Support* Ear care 4</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        ageCategory: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
        recommendedProduct: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        subTitle: {
          value:
            "<p>Liquid Filled | Rapid Release<br />Gluten Free</p>\n<p>Dietary supplement</p>\n<p>100 SOFTGELS Ear care 4</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        ingredients: {
          value:
            "<p>Vitamin D3, Soybean Oil, Gelatin, Glycerin, Water, Corn Oil.</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        disclaimerText: {
          value: "Disclaimer: Products are subject to availability",
          propertyDataType: "PropertyLongString",
        },
        productType: {
          value: [
            {
              name: "Acute Care",
              description: "Acute Care",
              id: 19,
            },
            {
              name: "Ear Care",
              description: "Ear Care",
              id: 25,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        genderTitle: {
          value: "Gender",
          propertyDataType: "PropertyLongString",
        },
        image: {
          value: {
            expanded: null,
            id: 231,
            guidValue: "5a9fc65e-fa4b-4be7-bf20-f9c319e19196",
            workId: 0,
            providerName: null,
            url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/ear-care.png",
          },
          propertyDataType: "PropertyContentReference",
        },
        availabilityCategory: {
          value: [
            {
              name: "Available Now",
              description: "Available Now",
              id: 17,
            },
            {
              name: "Coming Soon",
              description: "Coming Soon",
              id: 18,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        warnings: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        availabilityTitle: {
          value: "Availability",
          propertyDataType: "PropertyLongString",
        },
        productImages: {
          value: [
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
          ],
          propertyDataType: "PropertyContentReferenceList",
        },
        directions: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        genderCategory: {
          value: [
            {
              name: "Male",
              description: "Male",
              id: 3,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        category: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
      },
      {
        contentLink: {
          id: 241,
          workId: 0,
          guidValue: "0076f5fb-2853-45a7-a3c5-ae64f158f113",
          providerName: null,
          url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp222223/",
          expanded: null,
        },
        name: "Ear Care 3",
        language: {
          link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp222223/",
          displayName: "English",
          name: "en",
        },
        existingLanguages: [
          {
            link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp222223/",
            displayName: "English",
            name: "en",
          },
        ],
        masterLanguage: {
          link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp222223/",
          displayName: "English",
          name: "en",
        },
        contentType: ["Page", "ProductDetailsPage"],
        parentLink: {
          id: 112,
          workId: 0,
          guidValue: "5c0bd45c-faa2-4223-b688-a0d63097b80d",
          providerName: null,
          url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/",
          expanded: null,
        },
        routeSegment: "pdp222223",
        url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp222223/",
        changed: "2023-04-21T16:00:16Z",
        created: "2023-04-19T16:21:33Z",
        startPublish: "2023-04-19T16:21:38Z",
        stopPublish: null,
        saved: "2023-04-21T16:30:26Z",
        status: "Published",
        seoSection: {
          value: null,
          propertyDataType: "PropertyContentArea",
        },
        contentBlockArea: {
          value: null,
          propertyDataType: "PropertyContentArea",
        },
        formCategory: {
          value: [
            {
              name: "Liquid Gel",
              description: "Liquid Gel",
              id: 12,
            },
            {
              name: "Nasal Spray",
              description: "Nasal Spray",
              id: 13,
            },
            {
              name: "Tablet",
              description: "Tablet",
              id: 14,
            },
            {
              name: "Topical",
              description: "Topical",
              id: 15,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        healthNeedsCategory: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
        ageTitle: {
          value: "Age",
          propertyDataType: "PropertyLongString",
        },
        description: {
          value:
            "<p>IMMUNE SUPPORT (1): Vitamin D3 is an essential nutrient for immune support. (1) Each serving contains 2000 IU of Vitamin D for immune benefits and may assist the immune system by helping to regulate T and B-lymphocytes (1)<br />SUPPORTS STRONG BONES (1): In addition to immune support, getting a sufficient amount of Vitamin D is critical to building and maintaining strong bones in adults. (1) It is essential for calcium absorption to help support healthy bones (1)<br />YEAR-ROUND SUPPORT: Vitamin D3 supplements contain the same form of Vitamin D that is naturally formed in the body through exposure to sunshine. Nature&rsquo;s Bounty Vitamin D3 helps support the production of Vitamin D all year long (1)<br />NON-GMO FORMULA: Nature&rsquo;s Bounty Vitamin D3 Softgels are non-GMO, gluten- and sugar-free, and contain no artificial colors or sweeteners<br />UNSURPASSED QUALITY AND VALUE: Using the latest breakthroughs in nutritional science and the finest ingredients, Nature&rsquo;s Bounty provides supplements of unsurpassed quality and valueA</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        formTitle: {
          value: "Form",
          propertyDataType: "PropertyLongString",
        },
        title: {
          value:
            "<p>Foster &amp; Thrive&nbsp;<br />Vitamin D3<br />50 mcg (2000 IU)<br />Strong Bones &amp; Immune Support* Ear care 3</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        ageCategory: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
        recommendedProduct: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        subTitle: {
          value:
            "<p>Liquid Filled | Rapid Release<br />Gluten Free</p>\n<p>Dietary supplement</p>\n<p>100 SOFTGELS Ear care 3</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        ingredients: {
          value:
            "<p>Vitamin D3, Soybean Oil, Gelatin, Glycerin, Water, Corn Oil.</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        disclaimerText: {
          value: "Disclaimer: Products are subject to availability",
          propertyDataType: "PropertyLongString",
        },
        productType: {
          value: [
            {
              name: "Acute Care",
              description: "Acute Care",
              id: 19,
            },
            {
              name: "Ear Care",
              description: "Ear Care",
              id: 25,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        genderTitle: {
          value: "Gender",
          propertyDataType: "PropertyLongString",
        },
        image: {
          value: {
            expanded: null,
            id: 231,
            guidValue: "5a9fc65e-fa4b-4be7-bf20-f9c319e19196",
            workId: 0,
            providerName: null,
            url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/ear-care.png",
          },
          propertyDataType: "PropertyContentReference",
        },
        availabilityCategory: {
          value: [
            {
              name: "Available Now",
              description: "Available Now",
              id: 17,
            },
            {
              name: "Coming Soon",
              description: "Coming Soon",
              id: 18,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        warnings: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        availabilityTitle: {
          value: "Availability",
          propertyDataType: "PropertyLongString",
        },
        productImages: {
          value: [
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
          ],
          propertyDataType: "PropertyContentReferenceList",
        },
        directions: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        genderCategory: {
          value: [
            {
              name: "Male",
              description: "Male",
              id: 3,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        category: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
      },
      {
        contentLink: {
          id: 258,
          workId: 0,
          guidValue: "28a7c308-cf92-49b9-a142-e85b727c5977",
          providerName: null,
          url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp223222222/",
          expanded: null,
        },
        name: "Pain Relief Product 9",
        language: {
          link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp223222222/",
          displayName: "English",
          name: "en",
        },
        existingLanguages: [
          {
            link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp223222222/",
            displayName: "English",
            name: "en",
          },
        ],
        masterLanguage: {
          link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp223222222/",
          displayName: "English",
          name: "en",
        },
        contentType: ["Page", "ProductDetailsPage"],
        parentLink: {
          id: 112,
          workId: 0,
          guidValue: "5c0bd45c-faa2-4223-b688-a0d63097b80d",
          providerName: null,
          url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/",
          expanded: null,
        },
        routeSegment: "pdp223222222",
        url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp223222222/",
        changed: "2023-04-21T16:26:31Z",
        created: "2023-04-19T16:21:33Z",
        startPublish: "2023-04-19T16:21:38Z",
        stopPublish: null,
        saved: "2023-04-21T16:27:07Z",
        status: "Published",
        seoSection: {
          value: null,
          propertyDataType: "PropertyContentArea",
        },
        contentBlockArea: {
          value: null,
          propertyDataType: "PropertyContentArea",
        },
        formCategory: {
          value: [
            {
              name: "Liquid Gel",
              description: "Liquid Gel",
              id: 12,
            },
            {
              name: "Nasal Spray",
              description: "Nasal Spray",
              id: 13,
            },
            {
              name: "Tablet",
              description: "Tablet",
              id: 14,
            },
            {
              name: "Topical",
              description: "Topical",
              id: 15,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        healthNeedsCategory: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
        ageTitle: {
          value: "Age",
          propertyDataType: "PropertyLongString",
        },
        description: {
          value:
            "<p>IMMUNE SUPPORT (1): Vitamin D3 is an essential nutrient for immune support. (1) Each serving contains 2000 IU of Vitamin D for immune benefits and may assist the immune system by helping to regulate T and B-lymphocytes (1)<br />SUPPORTS STRONG BONES (1): In addition to immune support, getting a sufficient amount of Vitamin D is critical to building and maintaining strong bones in adults. (1) It is essential for calcium absorption to help support healthy bones (1)<br />YEAR-ROUND SUPPORT: Vitamin D3 supplements contain the same form of Vitamin D that is naturally formed in the body through exposure to sunshine. Nature&rsquo;s Bounty Vitamin D3 helps support the production of Vitamin D all year long (1)<br />NON-GMO FORMULA: Nature&rsquo;s Bounty Vitamin D3 Softgels are non-GMO, gluten- and sugar-free, and contain no artificial colors or sweeteners<br />UNSURPASSED QUALITY AND VALUE: Using the latest breakthroughs in nutritional science and the finest ingredients, Nature&rsquo;s Bounty provides supplements of unsurpassed quality and valueA</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        formTitle: {
          value: "Form",
          propertyDataType: "PropertyLongString",
        },
        title: {
          value:
            "<p>Foster &amp; Thrive&nbsp;<br />Vitamin D3<br />50 mcg (2000 IU)<br />Strong Bones &amp; Immune Support* Pain Relief 9</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        ageCategory: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
        recommendedProduct: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        subTitle: {
          value:
            "<p>Liquid Filled | Rapid Release<br />Gluten Free</p>\n<p>Dietary supplement</p>\n<p>100 SOFTGELS Pain Relief 9</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        ingredients: {
          value:
            "<p>Vitamin D3, Soybean Oil, Gelatin, Glycerin, Water, Corn Oil.</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        disclaimerText: {
          value: "Disclaimer: Products are subject to availability",
          propertyDataType: "PropertyLongString",
        },
        productType: {
          value: [
            {
              name: "Acute Care",
              description: "Acute Care",
              id: 19,
            },
            {
              name: "Pain Relief",
              description: "Pain Relief",
              id: 21,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        genderTitle: {
          value: "Gender",
          propertyDataType: "PropertyLongString",
        },
        image: {
          value: {
            expanded: null,
            id: 228,
            guidValue: "8cd4f4bd-726a-4094-a605-147b5e2016b4",
            workId: 0,
            providerName: null,
            url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pain-relief.png",
          },
          propertyDataType: "PropertyContentReference",
        },
        availabilityCategory: {
          value: [
            {
              name: "Available Now",
              description: "Available Now",
              id: 17,
            },
            {
              name: "Coming Soon",
              description: "Coming Soon",
              id: 18,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        warnings: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        availabilityTitle: {
          value: "Availability",
          propertyDataType: "PropertyLongString",
        },
        productImages: {
          value: [
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
          ],
          propertyDataType: "PropertyContentReferenceList",
        },
        directions: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        genderCategory: {
          value: [
            {
              name: "Male",
              description: "Male",
              id: 3,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        category: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
      },
      {
        contentLink: {
          id: 251,
          workId: 0,
          guidValue: "d765d66c-d77b-483b-8830-9309653d87a5",
          providerName: null,
          url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22222322/",
          expanded: null,
        },
        name: "Ear Care 5",
        language: {
          link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22222322/",
          displayName: "English",
          name: "en",
        },
        existingLanguages: [
          {
            link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22222322/",
            displayName: "English",
            name: "en",
          },
        ],
        masterLanguage: {
          link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22222322/",
          displayName: "English",
          name: "en",
        },
        contentType: ["Page", "ProductDetailsPage"],
        parentLink: {
          id: 112,
          workId: 0,
          guidValue: "5c0bd45c-faa2-4223-b688-a0d63097b80d",
          providerName: null,
          url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/",
          expanded: null,
        },
        routeSegment: "pdp22222322",
        url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22222322/",
        changed: "2023-04-21T16:20:08Z",
        created: "2023-04-19T16:21:33Z",
        startPublish: "2023-04-19T16:21:38Z",
        stopPublish: null,
        saved: "2023-04-21T17:19:36Z",
        status: "Published",
        seoSection: {
          value: null,
          propertyDataType: "PropertyContentArea",
        },
        contentBlockArea: {
          value: null,
          propertyDataType: "PropertyContentArea",
        },
        formCategory: {
          value: [
            {
              name: "Bandage",
              description: "Bandage",
              id: 9,
            },
            {
              name: "Liquid Gel",
              description: "Liquid Gel",
              id: 12,
            },
            {
              name: "Nasal Spray",
              description: "Nasal Spray",
              id: 13,
            },
            {
              name: "Tablet",
              description: "Tablet",
              id: 14,
            },
            {
              name: "Topical",
              description: "Topical",
              id: 15,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        healthNeedsCategory: {
          value: [
            {
              name: "Immune Health",
              description: "Immune Health",
              id: 60,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        ageTitle: {
          value: "Age",
          propertyDataType: "PropertyLongString",
        },
        description: {
          value:
            "<p>IMMUNE SUPPORT (1): Vitamin D3 is an essential nutrient for immune support. (1) Each serving contains 2000 IU of Vitamin D for immune benefits and may assist the immune system by helping to regulate T and B-lymphocytes (1)<br />SUPPORTS STRONG BONES (1): In addition to immune support, getting a sufficient amount of Vitamin D is critical to building and maintaining strong bones in adults. (1) It is essential for calcium absorption to help support healthy bones (1)<br />YEAR-ROUND SUPPORT: Vitamin D3 supplements contain the same form of Vitamin D that is naturally formed in the body through exposure to sunshine. Nature&rsquo;s Bounty Vitamin D3 helps support the production of Vitamin D all year long (1)<br />NON-GMO FORMULA: Nature&rsquo;s Bounty Vitamin D3 Softgels are non-GMO, gluten- and sugar-free, and contain no artificial colors or sweeteners<br />UNSURPASSED QUALITY AND VALUE: Using the latest breakthroughs in nutritional science and the finest ingredients, Nature&rsquo;s Bounty provides supplements of unsurpassed quality and valueA</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        formTitle: {
          value: "Form",
          propertyDataType: "PropertyLongString",
        },
        title: {
          value:
            "<p>Foster &amp; Thrive&nbsp;<br />Vitamin D3<br />50 mcg (2000 IU)<br />Strong Bones &amp; Immune Support* Ear care 5</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        ageCategory: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
        recommendedProduct: {
          value: null,
          propertyDataType: "PropertyBoolean",
        },
        subTitle: {
          value:
            "<p>Liquid Filled | Rapid Release<br />Gluten Free</p>\n<p>Dietary supplement</p>\n<p>100 SOFTGELS Ear care 5</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        ingredients: {
          value:
            "<p>Vitamin D3, Soybean Oil, Gelatin, Glycerin, Water, Corn Oil.</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        disclaimerText: {
          value: "Disclaimer: Products are subject to availability",
          propertyDataType: "PropertyLongString",
        },
        productType: {
          value: [
            {
              name: "Acute Care",
              description: "Acute Care",
              id: 19,
            },
            {
              name: "Ear Care",
              description: "Ear Care",
              id: 25,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        genderTitle: {
          value: "Gender",
          propertyDataType: "PropertyLongString",
        },
        image: {
          value: {
            expanded: null,
            id: 231,
            guidValue: "5a9fc65e-fa4b-4be7-bf20-f9c319e19196",
            workId: 0,
            providerName: null,
            url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/ear-care.png",
          },
          propertyDataType: "PropertyContentReference",
        },
        availabilityCategory: {
          value: [
            {
              name: "Available Now",
              description: "Available Now",
              id: 17,
            },
            {
              name: "Coming Soon",
              description: "Coming Soon",
              id: 18,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        warnings: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        productImages: {
          value: [
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
          ],
          propertyDataType: "PropertyContentReferenceList",
        },
        availabilityTitle: {
          value: "Availability",
          propertyDataType: "PropertyLongString",
        },
        directions: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        genderCategory: {
          value: [
            {
              name: "Male",
              description: "Male",
              id: 3,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        category: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
      },
      {
        contentLink: {
          id: 232,
          workId: 0,
          guidValue: "7cb40110-1316-4d0f-bc5d-fecf49a43154",
          providerName: null,
          url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp223/",
          expanded: null,
        },
        name: "Pain Relief Product(3)",
        language: {
          link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp223/",
          displayName: "English",
          name: "en",
        },
        existingLanguages: [
          {
            link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp223/",
            displayName: "English",
            name: "en",
          },
        ],
        masterLanguage: {
          link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp223/",
          displayName: "English",
          name: "en",
        },
        contentType: ["Page", "ProductDetailsPage"],
        parentLink: {
          id: 112,
          workId: 0,
          guidValue: "5c0bd45c-faa2-4223-b688-a0d63097b80d",
          providerName: null,
          url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/",
          expanded: null,
        },
        routeSegment: "pdp223",
        url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp223/",
        changed: "2023-04-21T15:32:49Z",
        created: "2023-04-19T16:21:33Z",
        startPublish: "2023-04-19T16:21:38Z",
        stopPublish: null,
        saved: "2023-04-21T15:36:39Z",
        status: "Published",
        seoSection: {
          value: null,
          propertyDataType: "PropertyContentArea",
        },
        contentBlockArea: {
          value: null,
          propertyDataType: "PropertyContentArea",
        },
        formCategory: {
          value: [
            {
              name: "Liquid Gel",
              description: "Liquid Gel",
              id: 12,
            },
            {
              name: "Nasal Spray",
              description: "Nasal Spray",
              id: 13,
            },
            {
              name: "Tablet",
              description: "Tablet",
              id: 14,
            },
            {
              name: "Topical",
              description: "Topical",
              id: 15,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        healthNeedsCategory: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
        ageTitle: {
          value: "Age",
          propertyDataType: "PropertyLongString",
        },
        description: {
          value:
            "<p>IMMUNE SUPPORT (1): Vitamin D3 is an essential nutrient for immune support. (1) Each serving contains 2000 IU of Vitamin D for immune benefits and may assist the immune system by helping to regulate T and B-lymphocytes (1)<br />SUPPORTS STRONG BONES (1): In addition to immune support, getting a sufficient amount of Vitamin D is critical to building and maintaining strong bones in adults. (1) It is essential for calcium absorption to help support healthy bones (1)<br />YEAR-ROUND SUPPORT: Vitamin D3 supplements contain the same form of Vitamin D that is naturally formed in the body through exposure to sunshine. Nature&rsquo;s Bounty Vitamin D3 helps support the production of Vitamin D all year long (1)<br />NON-GMO FORMULA: Nature&rsquo;s Bounty Vitamin D3 Softgels are non-GMO, gluten- and sugar-free, and contain no artificial colors or sweeteners<br />UNSURPASSED QUALITY AND VALUE: Using the latest breakthroughs in nutritional science and the finest ingredients, Nature&rsquo;s Bounty provides supplements of unsurpassed quality and valueA</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        formTitle: {
          value: "Form",
          propertyDataType: "PropertyLongString",
        },
        title: {
          value:
            "<p>Foster &amp; Thrive&nbsp;<br />Vitamin D3<br />50 mcg (2000 IU)<br />Strong Bones &amp; Immune Support* Pain Relief3</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        ageCategory: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
        recommendedProduct: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        subTitle: {
          value:
            "<p>Liquid Filled | Rapid Release<br />Gluten Free</p>\n<p>Dietary supplement</p>\n<p>100 SOFTGELS Pain Relief3</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        ingredients: {
          value:
            "<p>Vitamin D3, Soybean Oil, Gelatin, Glycerin, Water, Corn Oil.</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        disclaimerText: {
          value: "Disclaimer: Products are subject to availability",
          propertyDataType: "PropertyLongString",
        },
        productType: {
          value: [
            {
              name: "Acute Care",
              description: "Acute Care",
              id: 19,
            },
            {
              name: "Pain Relief",
              description: "Pain Relief",
              id: 21,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        genderTitle: {
          value: "Gender",
          propertyDataType: "PropertyLongString",
        },
        image: {
          value: {
            expanded: null,
            id: 228,
            guidValue: "8cd4f4bd-726a-4094-a605-147b5e2016b4",
            workId: 0,
            providerName: null,
            url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pain-relief.png",
          },
          propertyDataType: "PropertyContentReference",
        },
        availabilityCategory: {
          value: [
            {
              name: "Available Now",
              description: "Available Now",
              id: 17,
            },
            {
              name: "Coming Soon",
              description: "Coming Soon",
              id: 18,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        warnings: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        availabilityTitle: {
          value: "Availability",
          propertyDataType: "PropertyLongString",
        },
        productImages: {
          value: [
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
          ],
          propertyDataType: "PropertyContentReferenceList",
        },
        directions: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        genderCategory: {
          value: [
            {
              name: "Male",
              description: "Male",
              id: 3,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        category: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
      },
      {
        contentLink: {
          id: 247,
          workId: 0,
          guidValue: "a1657a20-661d-4196-a81d-b125cbce460a",
          providerName: null,
          url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2222232/",
          expanded: null,
        },
        name: "Ear Care 4",
        language: {
          link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2222232/",
          displayName: "English",
          name: "en",
        },
        existingLanguages: [
          {
            link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2222232/",
            displayName: "English",
            name: "en",
          },
        ],
        masterLanguage: {
          link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2222232/",
          displayName: "English",
          name: "en",
        },
        contentType: ["Page", "ProductDetailsPage"],
        parentLink: {
          id: 112,
          workId: 0,
          guidValue: "5c0bd45c-faa2-4223-b688-a0d63097b80d",
          providerName: null,
          url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/",
          expanded: null,
        },
        routeSegment: "pdp2222232",
        url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2222232/",
        changed: "2023-04-21T16:09:54Z",
        created: "2023-04-19T16:21:33Z",
        startPublish: "2023-04-19T16:21:38Z",
        stopPublish: null,
        saved: "2023-04-21T16:10:48Z",
        status: "Published",
        seoSection: {
          value: null,
          propertyDataType: "PropertyContentArea",
        },
        contentBlockArea: {
          value: null,
          propertyDataType: "PropertyContentArea",
        },
        formCategory: {
          value: [
            {
              name: "Liquid Gel",
              description: "Liquid Gel",
              id: 12,
            },
            {
              name: "Nasal Spray",
              description: "Nasal Spray",
              id: 13,
            },
            {
              name: "Tablet",
              description: "Tablet",
              id: 14,
            },
            {
              name: "Topical",
              description: "Topical",
              id: 15,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        healthNeedsCategory: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
        ageTitle: {
          value: "Age",
          propertyDataType: "PropertyLongString",
        },
        description: {
          value:
            "<p>IMMUNE SUPPORT (1): Vitamin D3 is an essential nutrient for immune support. (1) Each serving contains 2000 IU of Vitamin D for immune benefits and may assist the immune system by helping to regulate T and B-lymphocytes (1)<br />SUPPORTS STRONG BONES (1): In addition to immune support, getting a sufficient amount of Vitamin D is critical to building and maintaining strong bones in adults. (1) It is essential for calcium absorption to help support healthy bones (1)<br />YEAR-ROUND SUPPORT: Vitamin D3 supplements contain the same form of Vitamin D that is naturally formed in the body through exposure to sunshine. Nature&rsquo;s Bounty Vitamin D3 helps support the production of Vitamin D all year long (1)<br />NON-GMO FORMULA: Nature&rsquo;s Bounty Vitamin D3 Softgels are non-GMO, gluten- and sugar-free, and contain no artificial colors or sweeteners<br />UNSURPASSED QUALITY AND VALUE: Using the latest breakthroughs in nutritional science and the finest ingredients, Nature&rsquo;s Bounty provides supplements of unsurpassed quality and valueA</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        formTitle: {
          value: "Form",
          propertyDataType: "PropertyLongString",
        },
        title: {
          value:
            "<p>Foster &amp; Thrive&nbsp;<br />Vitamin D3<br />50 mcg (2000 IU)<br />Strong Bones &amp; Immune Support* Ear care 4</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        ageCategory: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
        recommendedProduct: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        subTitle: {
          value:
            "<p>Liquid Filled | Rapid Release<br />Gluten Free</p>\n<p>Dietary supplement</p>\n<p>100 SOFTGELS Ear care 4</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        ingredients: {
          value:
            "<p>Vitamin D3, Soybean Oil, Gelatin, Glycerin, Water, Corn Oil.</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        disclaimerText: {
          value: "Disclaimer: Products are subject to availability",
          propertyDataType: "PropertyLongString",
        },
        productType: {
          value: [
            {
              name: "Acute Care",
              description: "Acute Care",
              id: 19,
            },
            {
              name: "Ear Care",
              description: "Ear Care",
              id: 25,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        genderTitle: {
          value: "Gender",
          propertyDataType: "PropertyLongString",
        },
        image: {
          value: {
            expanded: null,
            id: 231,
            guidValue: "5a9fc65e-fa4b-4be7-bf20-f9c319e19196",
            workId: 0,
            providerName: null,
            url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/ear-care.png",
          },
          propertyDataType: "PropertyContentReference",
        },
        availabilityCategory: {
          value: [
            {
              name: "Available Now",
              description: "Available Now",
              id: 17,
            },
            {
              name: "Coming Soon",
              description: "Coming Soon",
              id: 18,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        warnings: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        availabilityTitle: {
          value: "Availability",
          propertyDataType: "PropertyLongString",
        },
        productImages: {
          value: [
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
          ],
          propertyDataType: "PropertyContentReferenceList",
        },
        directions: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        genderCategory: {
          value: [
            {
              name: "Male",
              description: "Male",
              id: 3,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        category: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
      },
      {
        contentLink: {
          id: 254,
          workId: 0,
          guidValue: "317f2d1b-58d7-4e0e-9139-5159006924e8",
          providerName: null,
          url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2232222/",
          expanded: null,
        },
        name: "Pain Relief Product 7",
        language: {
          link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2232222/",
          displayName: "English",
          name: "en",
        },
        existingLanguages: [
          {
            link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2232222/",
            displayName: "English",
            name: "en",
          },
        ],
        masterLanguage: {
          link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2232222/",
          displayName: "English",
          name: "en",
        },
        contentType: ["Page", "ProductDetailsPage"],
        parentLink: {
          id: 112,
          workId: 0,
          guidValue: "5c0bd45c-faa2-4223-b688-a0d63097b80d",
          providerName: null,
          url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/",
          expanded: null,
        },
        routeSegment: "pdp2232222",
        url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2232222/",
        changed: "2023-04-21T16:22:54Z",
        created: "2023-04-19T16:21:33Z",
        startPublish: "2023-04-19T16:21:38Z",
        stopPublish: null,
        saved: "2023-04-21T16:23:30Z",
        status: "Published",
        seoSection: {
          value: null,
          propertyDataType: "PropertyContentArea",
        },
        contentBlockArea: {
          value: null,
          propertyDataType: "PropertyContentArea",
        },
        formCategory: {
          value: [
            {
              name: "Liquid Gel",
              description: "Liquid Gel",
              id: 12,
            },
            {
              name: "Nasal Spray",
              description: "Nasal Spray",
              id: 13,
            },
            {
              name: "Tablet",
              description: "Tablet",
              id: 14,
            },
            {
              name: "Topical",
              description: "Topical",
              id: 15,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        healthNeedsCategory: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
        ageTitle: {
          value: "Age",
          propertyDataType: "PropertyLongString",
        },
        description: {
          value:
            "<p>IMMUNE SUPPORT (1): Vitamin D3 is an essential nutrient for immune support. (1) Each serving contains 2000 IU of Vitamin D for immune benefits and may assist the immune system by helping to regulate T and B-lymphocytes (1)<br />SUPPORTS STRONG BONES (1): In addition to immune support, getting a sufficient amount of Vitamin D is critical to building and maintaining strong bones in adults. (1) It is essential for calcium absorption to help support healthy bones (1)<br />YEAR-ROUND SUPPORT: Vitamin D3 supplements contain the same form of Vitamin D that is naturally formed in the body through exposure to sunshine. Nature&rsquo;s Bounty Vitamin D3 helps support the production of Vitamin D all year long (1)<br />NON-GMO FORMULA: Nature&rsquo;s Bounty Vitamin D3 Softgels are non-GMO, gluten- and sugar-free, and contain no artificial colors or sweeteners<br />UNSURPASSED QUALITY AND VALUE: Using the latest breakthroughs in nutritional science and the finest ingredients, Nature&rsquo;s Bounty provides supplements of unsurpassed quality and valueA</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        formTitle: {
          value: "Form",
          propertyDataType: "PropertyLongString",
        },
        title: {
          value:
            "<p>Foster &amp; Thrive&nbsp;<br />Vitamin D3<br />50 mcg (2000 IU)<br />Strong Bones &amp; Immune Support* Pain Relief 7</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        ageCategory: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
        recommendedProduct: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        subTitle: {
          value:
            "<p>Liquid Filled | Rapid Release<br />Gluten Free</p>\n<p>Dietary supplement</p>\n<p>100 SOFTGELS Pain Relief 7</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        ingredients: {
          value:
            "<p>Vitamin D3, Soybean Oil, Gelatin, Glycerin, Water, Corn Oil.</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        disclaimerText: {
          value: "Disclaimer: Products are subject to availability",
          propertyDataType: "PropertyLongString",
        },
        productType: {
          value: [
            {
              name: "Acute Care",
              description: "Acute Care",
              id: 19,
            },
            {
              name: "Pain Relief",
              description: "Pain Relief",
              id: 21,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        genderTitle: {
          value: "Gender",
          propertyDataType: "PropertyLongString",
        },
        image: {
          value: {
            expanded: null,
            id: 228,
            guidValue: "8cd4f4bd-726a-4094-a605-147b5e2016b4",
            workId: 0,
            providerName: null,
            url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pain-relief.png",
          },
          propertyDataType: "PropertyContentReference",
        },
        availabilityCategory: {
          value: [
            {
              name: "Available Now",
              description: "Available Now",
              id: 17,
            },
            {
              name: "Coming Soon",
              description: "Coming Soon",
              id: 18,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        warnings: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        availabilityTitle: {
          value: "Availability",
          propertyDataType: "PropertyLongString",
        },
        productImages: {
          value: [
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
          ],
          propertyDataType: "PropertyContentReferenceList",
        },
        directions: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        genderCategory: {
          value: [
            {
              name: "Male",
              description: "Male",
              id: 3,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        category: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
      },
      {
        contentLink: {
          id: 257,
          workId: 0,
          guidValue: "400bc0be-eba6-4701-98bd-4b8facb24605",
          providerName: null,
          url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2222232222/",
          expanded: null,
        },
        name: "Ear Care 7",
        language: {
          link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2222232222/",
          displayName: "English",
          name: "en",
        },
        existingLanguages: [
          {
            link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2222232222/",
            displayName: "English",
            name: "en",
          },
        ],
        masterLanguage: {
          link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2222232222/",
          displayName: "English",
          name: "en",
        },
        contentType: ["Page", "ProductDetailsPage"],
        parentLink: {
          id: 112,
          workId: 0,
          guidValue: "5c0bd45c-faa2-4223-b688-a0d63097b80d",
          providerName: null,
          url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/",
          expanded: null,
        },
        routeSegment: "pdp2222232222",
        url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2222232222/",
        changed: "2023-04-21T16:25:35Z",
        created: "2023-04-19T16:21:33Z",
        startPublish: "2023-04-19T16:21:38Z",
        stopPublish: null,
        saved: "2023-04-21T16:26:11Z",
        status: "Published",
        seoSection: {
          value: null,
          propertyDataType: "PropertyContentArea",
        },
        contentBlockArea: {
          value: null,
          propertyDataType: "PropertyContentArea",
        },
        formCategory: {
          value: [
            {
              name: "Liquid Gel",
              description: "Liquid Gel",
              id: 12,
            },
            {
              name: "Nasal Spray",
              description: "Nasal Spray",
              id: 13,
            },
            {
              name: "Tablet",
              description: "Tablet",
              id: 14,
            },
            {
              name: "Topical",
              description: "Topical",
              id: 15,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        healthNeedsCategory: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
        ageTitle: {
          value: "Age",
          propertyDataType: "PropertyLongString",
        },
        description: {
          value:
            "<p>IMMUNE SUPPORT (1): Vitamin D3 is an essential nutrient for immune support. (1) Each serving contains 2000 IU of Vitamin D for immune benefits and may assist the immune system by helping to regulate T and B-lymphocytes (1)<br />SUPPORTS STRONG BONES (1): In addition to immune support, getting a sufficient amount of Vitamin D is critical to building and maintaining strong bones in adults. (1) It is essential for calcium absorption to help support healthy bones (1)<br />YEAR-ROUND SUPPORT: Vitamin D3 supplements contain the same form of Vitamin D that is naturally formed in the body through exposure to sunshine. Nature&rsquo;s Bounty Vitamin D3 helps support the production of Vitamin D all year long (1)<br />NON-GMO FORMULA: Nature&rsquo;s Bounty Vitamin D3 Softgels are non-GMO, gluten- and sugar-free, and contain no artificial colors or sweeteners<br />UNSURPASSED QUALITY AND VALUE: Using the latest breakthroughs in nutritional science and the finest ingredients, Nature&rsquo;s Bounty provides supplements of unsurpassed quality and valueA</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        formTitle: {
          value: "Form",
          propertyDataType: "PropertyLongString",
        },
        title: {
          value:
            "<p>Foster &amp; Thrive&nbsp;<br />Vitamin D3<br />50 mcg (2000 IU)<br />Strong Bones &amp; Immune Support* Ear care 7</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        ageCategory: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
        recommendedProduct: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        subTitle: {
          value:
            "<p>Liquid Filled | Rapid Release<br />Gluten Free</p>\n<p>Dietary supplement</p>\n<p>100 SOFTGELS Ear care 7</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        ingredients: {
          value:
            "<p>Vitamin D3, Soybean Oil, Gelatin, Glycerin, Water, Corn Oil.</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        disclaimerText: {
          value: "Disclaimer: Products are subject to availability",
          propertyDataType: "PropertyLongString",
        },
        productType: {
          value: [
            {
              name: "Acute Care",
              description: "Acute Care",
              id: 19,
            },
            {
              name: "Ear Care",
              description: "Ear Care",
              id: 25,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        genderTitle: {
          value: "Gender",
          propertyDataType: "PropertyLongString",
        },
        image: {
          value: {
            expanded: null,
            id: 231,
            guidValue: "5a9fc65e-fa4b-4be7-bf20-f9c319e19196",
            workId: 0,
            providerName: null,
            url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/ear-care.png",
          },
          propertyDataType: "PropertyContentReference",
        },
        availabilityCategory: {
          value: [
            {
              name: "Available Now",
              description: "Available Now",
              id: 17,
            },
            {
              name: "Coming Soon",
              description: "Coming Soon",
              id: 18,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        warnings: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        availabilityTitle: {
          value: "Availability",
          propertyDataType: "PropertyLongString",
        },
        productImages: {
          value: [
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
          ],
          propertyDataType: "PropertyContentReferenceList",
        },
        directions: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        genderCategory: {
          value: [
            {
              name: "Male",
              description: "Male",
              id: 3,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        category: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
      },
      {
        contentLink: {
          id: 112,
          workId: 0,
          guidValue: "5c0bd45c-faa2-4223-b688-a0d63097b80d",
          providerName: null,
          url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/",
          expanded: null,
        },
        name: "PDP",
        language: {
          link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/",
          displayName: "English",
          name: "en",
        },
        existingLanguages: [
          {
            link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/",
            displayName: "English",
            name: "en",
          },
        ],
        masterLanguage: {
          link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/",
          displayName: "English",
          name: "en",
        },
        contentType: ["Page", "ProductDetailsPage"],
        parentLink: {
          id: 1,
          workId: 0,
          guidValue: "43f936c9-9b23-4ea3-97b2-61c538ad07c9",
          providerName: null,
          url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/",
          expanded: null,
        },
        routeSegment: "pdp",
        url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/",
        changed: "2023-04-19T16:21:38Z",
        created: "2023-04-19T16:21:33Z",
        startPublish: "2023-04-19T16:21:38Z",
        stopPublish: null,
        saved: "2023-04-21T09:23:32Z",
        status: "Published",
        seoSection: {
          value: null,
          propertyDataType: "PropertyContentArea",
        },
        contentBlockArea: {
          value: null,
          propertyDataType: "PropertyContentArea",
        },
        formCategory: {
          value: [
            {
              name: "Bandage",
              description: "Bandage",
              id: 9,
            },
            {
              name: "Capsule",
              description: "Capsule",
              id: 10,
            },
            {
              name: "Chewable",
              description: "Chewable",
              id: 11,
            },
            {
              name: "Liquid Gel",
              description: "Liquid Gel",
              id: 12,
            },
            {
              name: "Nasal Spray",
              description: "Nasal Spray",
              id: 13,
            },
            {
              name: "Tablet",
              description: "Tablet",
              id: 14,
            },
            {
              name: "Topical",
              description: "Topical",
              id: 15,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        healthNeedsCategory: {
          value: [
            {
              name: "Beauty",
              description: "Beauty",
              id: 53,
            },
            {
              name: "Bone",
              description: "Bone",
              id: 54,
            },
            {
              name: "Digestion",
              description: "Digestion",
              id: 55,
            },
            {
              name: "Energy",
              description: "Energy",
              id: 56,
            },
            {
              name: "Eye Health",
              description: "Eye Health",
              id: 57,
            },
            {
              name: "General Wellness",
              description: "General Wellness",
              id: 58,
            },
            {
              name: "Heart",
              description: "Heart",
              id: 59,
            },
            {
              name: "Immune Health",
              description: "Immune Health",
              id: 60,
            },
            {
              name: "Joints",
              description: "Joints",
              id: 61,
            },
            {
              name: "Kids",
              description: "Kids",
              id: 62,
            },
            {
              name: "Men's Health",
              description: "Men's Health",
              id: 63,
            },
            {
              name: "Mood",
              description: "Mood",
              id: 64,
            },
            {
              name: "Prenatal & Postnatal",
              description: "Prenatal & Postnatal",
              id: 65,
            },
            {
              name: "Sleep",
              description: "Sleep",
              id: 66,
            },
            {
              name: "Stress",
              description: "Stress",
              id: 67,
            },
            {
              name: "Women's Health",
              description: "Women's Health",
              id: 68,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        ageTitle: {
          value: "Age",
          propertyDataType: "PropertyLongString",
        },
        description: {
          value:
            "<p>IMMUNE SUPPORT (1): Vitamin D3 is an essential nutrient for immune support. (1) Each serving contains 2000 IU of Vitamin D for immune benefits and may assist the immune system by helping to regulate T and B-lymphocytes (1)<br />SUPPORTS STRONG BONES (1): In addition to immune support, getting a sufficient amount of Vitamin D is critical to building and maintaining strong bones in adults. (1) It is essential for calcium absorption to help support healthy bones (1)<br />YEAR-ROUND SUPPORT: Vitamin D3 supplements contain the same form of Vitamin D that is naturally formed in the body through exposure to sunshine. Nature&rsquo;s Bounty Vitamin D3 helps support the production of Vitamin D all year long (1)<br />NON-GMO FORMULA: Nature&rsquo;s Bounty Vitamin D3 Softgels are non-GMO, gluten- and sugar-free, and contain no artificial colors or sweeteners<br />UNSURPASSED QUALITY AND VALUE: Using the latest breakthroughs in nutritional science and the finest ingredients, Nature&rsquo;s Bounty provides supplements of unsurpassed quality and valueA</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        formTitle: {
          value: "Form",
          propertyDataType: "PropertyLongString",
        },
        title: {
          value:
            "<p>Foster &amp; Thrive&nbsp;<br />Vitamin D3<br />50 mcg (2000 IU)<br />Strong Bones &amp; Immune Support*</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        ageCategory: {
          value: [
            {
              name: "Adults",
              description: "Adults",
              id: 6,
            },
            {
              name: "Children",
              description: "Children",
              id: 7,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        recommendedProduct: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        subTitle: {
          value:
            "<p>Liquid Filled | Rapid Release<br />Gluten Free</p>\n<p>Dietary supplement</p>\n<p>100 SOFTGELS</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        ingredients: {
          value:
            "<p>Vitamin D3, Soybean Oil, Gelatin, Glycerin, Water, Corn Oil.</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        disclaimerText: {
          value: "Disclaimer: Products are subject to availability",
          propertyDataType: "PropertyLongString",
        },
        productType: {
          value: [
            {
              name: "Acute Care",
              description: "Acute Care",
              id: 19,
            },
            {
              name: "Allergy Relief",
              description: "Allergy Relief",
              id: 20,
            },
            {
              name: "Pain Relief",
              description: "Pain Relief",
              id: 21,
            },
            {
              name: "Cough, Cold & Flu Relief",
              description: "Cough, Cold & Flu Relief",
              id: 22,
            },
            {
              name: "Digestion Health",
              description: "Digestion Health",
              id: 23,
            },
            {
              name: "Smoking Cessation",
              description: "Smoking Cessation",
              id: 24,
            },
            {
              name: "Ear Care",
              description: "Ear Care",
              id: 25,
            },
            {
              name: "Sinus Care",
              description: "Sinus Care",
              id: 26,
            },
            {
              name: "Oral Care",
              description: "Oral Care",
              id: 27,
            },
            {
              name: "Preventative Care",
              description: "Preventative Care",
              id: 28,
            },
            {
              name: "Immunity",
              description: "Immunity",
              id: 29,
            },
            {
              name: "Nutrition",
              description: "Nutrition",
              id: 30,
            },
            {
              name: "Vitamins",
              description: "Vitamins",
              id: 31,
            },
            {
              name: "Heart Health",
              description: "Heart Health",
              id: 32,
            },
            {
              name: "Probiotics",
              description: "Probiotics",
              id: 33,
            },
            {
              name: "Prenatal Health",
              description: "Prenatal Health",
              id: 34,
            },
            {
              name: "Every Day Care",
              description: "Every Day Care",
              id: 35,
            },
            {
              name: "First Aid",
              description: "First Aid",
              id: 36,
            },
            {
              name: "Daily Living Support",
              description: "Daily Living Support",
              id: 37,
            },
            {
              name: "Cosmetics",
              description: "Cosmetics",
              id: 38,
            },
            {
              name: "Family Planning",
              description: "Family Planning",
              id: 39,
            },
            {
              name: "Skin Care",
              description: "Skin Care",
              id: 40,
            },
            {
              name: "Foot Care",
              description: "Foot Care",
              id: 41,
            },
            {
              name: "Ankle Braces",
              description: "Ankle Braces",
              id: 42,
            },
            {
              name: "Muscle Soreness",
              description: "Muscle Soreness",
              id: 43,
            },
            {
              name: "Foot insoles",
              description: "Foot insoles",
              id: 44,
            },
            {
              name: "Facial Cleaner",
              description: "Facial Cleaner",
              id: 45,
            },
            {
              name: "Diagnostic Care",
              description: "Diagnostic Care",
              id: 46,
            },
            {
              name: "Diagnostic Care",
              description: "Diagnostic Care",
              id: 47,
            },
            {
              name: "Thermometer",
              description: "Thermometer",
              id: 48,
            },
            {
              name: "Gloves & Masks",
              description: "Gloves & Masks",
              id: 49,
            },
            {
              name: "Family Planning",
              description: "Family Planning",
              id: 50,
            },
            {
              name: "Blood Testing",
              description: "Blood Testing",
              id: 51,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        genderTitle: {
          value: "Gender",
          propertyDataType: "PropertyLongString",
        },
        image: {
          value: {
            expanded: null,
            id: 199,
            guidValue: "d9706483-a1a4-453a-a5b5-c8a015703686",
            workId: 0,
            providerName: null,
            url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/details_page_ffoster_thrive_vitamin_d3.png",
          },
          propertyDataType: "PropertyContentReference",
        },
        availabilityCategory: {
          value: [
            {
              name: "Available Now",
              description: "Available Now",
              id: 17,
            },
            {
              name: "Coming Soon",
              description: "Coming Soon",
              id: 18,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        warnings: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        availabilityTitle: {
          value: "Availability",
          propertyDataType: "PropertyLongString",
        },
        productImages: {
          value: [
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
          ],
          propertyDataType: "PropertyContentReferenceList",
        },
        directions: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        genderCategory: {
          value: [
            {
              name: "Male",
              description: "Male",
              id: 3,
            },
            {
              name: "Female",
              description: "Female",
              id: 4,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        category: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
      },
      {
        contentLink: {
          id: 234,
          workId: 0,
          guidValue: "c4a7d354-60ce-4a09-a905-feb2f8ef8cac",
          providerName: null,
          url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2232/",
          expanded: null,
        },
        name: "Pain Relief Product(4)",
        language: {
          link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2232/",
          displayName: "English",
          name: "en",
        },
        existingLanguages: [
          {
            link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2232/",
            displayName: "English",
            name: "en",
          },
        ],
        masterLanguage: {
          link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2232/",
          displayName: "English",
          name: "en",
        },
        contentType: ["Page", "ProductDetailsPage"],
        parentLink: {
          id: 112,
          workId: 0,
          guidValue: "5c0bd45c-faa2-4223-b688-a0d63097b80d",
          providerName: null,
          url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/",
          expanded: null,
        },
        routeSegment: "pdp2232",
        url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2232/",
        changed: "2023-04-21T15:39:33Z",
        created: "2023-04-19T16:21:33Z",
        startPublish: "2023-04-19T16:21:38Z",
        stopPublish: null,
        saved: "2023-04-21T15:40:35Z",
        status: "Published",
        seoSection: {
          value: null,
          propertyDataType: "PropertyContentArea",
        },
        contentBlockArea: {
          value: null,
          propertyDataType: "PropertyContentArea",
        },
        formCategory: {
          value: [
            {
              name: "Liquid Gel",
              description: "Liquid Gel",
              id: 12,
            },
            {
              name: "Nasal Spray",
              description: "Nasal Spray",
              id: 13,
            },
            {
              name: "Tablet",
              description: "Tablet",
              id: 14,
            },
            {
              name: "Topical",
              description: "Topical",
              id: 15,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        healthNeedsCategory: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
        ageTitle: {
          value: "Age",
          propertyDataType: "PropertyLongString",
        },
        description: {
          value:
            "<p>IMMUNE SUPPORT (1): Vitamin D3 is an essential nutrient for immune support. (1) Each serving contains 2000 IU of Vitamin D for immune benefits and may assist the immune system by helping to regulate T and B-lymphocytes (1)<br />SUPPORTS STRONG BONES (1): In addition to immune support, getting a sufficient amount of Vitamin D is critical to building and maintaining strong bones in adults. (1) It is essential for calcium absorption to help support healthy bones (1)<br />YEAR-ROUND SUPPORT: Vitamin D3 supplements contain the same form of Vitamin D that is naturally formed in the body through exposure to sunshine. Nature&rsquo;s Bounty Vitamin D3 helps support the production of Vitamin D all year long (1)<br />NON-GMO FORMULA: Nature&rsquo;s Bounty Vitamin D3 Softgels are non-GMO, gluten- and sugar-free, and contain no artificial colors or sweeteners<br />UNSURPASSED QUALITY AND VALUE: Using the latest breakthroughs in nutritional science and the finest ingredients, Nature&rsquo;s Bounty provides supplements of unsurpassed quality and valueA</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        formTitle: {
          value: "Form",
          propertyDataType: "PropertyLongString",
        },
        title: {
          value:
            "<p>Foster &amp; Thrive&nbsp;<br />Vitamin D3<br />50 mcg (2000 IU)<br />Strong Bones &amp; Immune Support* Pain Relief4</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        ageCategory: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
        recommendedProduct: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        subTitle: {
          value:
            "<p>Liquid Filled | Rapid Release<br />Gluten Free</p>\n<p>Dietary supplement</p>\n<p>100 SOFTGELS Pain Relief4</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        ingredients: {
          value:
            "<p>Vitamin D3, Soybean Oil, Gelatin, Glycerin, Water, Corn Oil.</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        disclaimerText: {
          value: "Disclaimer: Products are subject to availability",
          propertyDataType: "PropertyLongString",
        },
        productType: {
          value: [
            {
              name: "Acute Care",
              description: "Acute Care",
              id: 19,
            },
            {
              name: "Pain Relief",
              description: "Pain Relief",
              id: 21,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        genderTitle: {
          value: "Gender",
          propertyDataType: "PropertyLongString",
        },
        image: {
          value: {
            expanded: null,
            id: 228,
            guidValue: "8cd4f4bd-726a-4094-a605-147b5e2016b4",
            workId: 0,
            providerName: null,
            url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pain-relief.png",
          },
          propertyDataType: "PropertyContentReference",
        },
        availabilityCategory: {
          value: [
            {
              name: "Available Now",
              description: "Available Now",
              id: 17,
            },
            {
              name: "Coming Soon",
              description: "Coming Soon",
              id: 18,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        warnings: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        availabilityTitle: {
          value: "Availability",
          propertyDataType: "PropertyLongString",
        },
        productImages: {
          value: [
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
          ],
          propertyDataType: "PropertyContentReferenceList",
        },
        directions: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        genderCategory: {
          value: [
            {
              name: "Male",
              description: "Male",
              id: 3,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        category: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
      },
      {
        contentLink: {
          id: 259,
          workId: 0,
          guidValue: "c74edf72-ee34-4c3c-9f65-993d5f003059",
          providerName: null,
          url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22222322222/",
          expanded: null,
        },
        name: "Ear Care 8",
        language: {
          link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22222322222/",
          displayName: "English",
          name: "en",
        },
        existingLanguages: [
          {
            link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22222322222/",
            displayName: "English",
            name: "en",
          },
        ],
        masterLanguage: {
          link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22222322222/",
          displayName: "English",
          name: "en",
        },
        contentType: ["Page", "ProductDetailsPage"],
        parentLink: {
          id: 112,
          workId: 0,
          guidValue: "5c0bd45c-faa2-4223-b688-a0d63097b80d",
          providerName: null,
          url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/",
          expanded: null,
        },
        routeSegment: "pdp22222322222",
        url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22222322222/",
        changed: "2023-04-21T16:27:19Z",
        created: "2023-04-19T16:21:33Z",
        startPublish: "2023-04-19T16:21:38Z",
        stopPublish: null,
        saved: "2023-04-21T16:27:57Z",
        status: "Published",
        seoSection: {
          value: null,
          propertyDataType: "PropertyContentArea",
        },
        contentBlockArea: {
          value: null,
          propertyDataType: "PropertyContentArea",
        },
        formCategory: {
          value: [
            {
              name: "Liquid Gel",
              description: "Liquid Gel",
              id: 12,
            },
            {
              name: "Nasal Spray",
              description: "Nasal Spray",
              id: 13,
            },
            {
              name: "Tablet",
              description: "Tablet",
              id: 14,
            },
            {
              name: "Topical",
              description: "Topical",
              id: 15,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        healthNeedsCategory: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
        ageTitle: {
          value: "Age",
          propertyDataType: "PropertyLongString",
        },
        description: {
          value:
            "<p>IMMUNE SUPPORT (1): Vitamin D3 is an essential nutrient for immune support. (1) Each serving contains 2000 IU of Vitamin D for immune benefits and may assist the immune system by helping to regulate T and B-lymphocytes (1)<br />SUPPORTS STRONG BONES (1): In addition to immune support, getting a sufficient amount of Vitamin D is critical to building and maintaining strong bones in adults. (1) It is essential for calcium absorption to help support healthy bones (1)<br />YEAR-ROUND SUPPORT: Vitamin D3 supplements contain the same form of Vitamin D that is naturally formed in the body through exposure to sunshine. Nature&rsquo;s Bounty Vitamin D3 helps support the production of Vitamin D all year long (1)<br />NON-GMO FORMULA: Nature&rsquo;s Bounty Vitamin D3 Softgels are non-GMO, gluten- and sugar-free, and contain no artificial colors or sweeteners<br />UNSURPASSED QUALITY AND VALUE: Using the latest breakthroughs in nutritional science and the finest ingredients, Nature&rsquo;s Bounty provides supplements of unsurpassed quality and valueA</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        formTitle: {
          value: "Form",
          propertyDataType: "PropertyLongString",
        },
        title: {
          value:
            "<p>Foster &amp; Thrive&nbsp;<br />Vitamin D3<br />50 mcg (2000 IU)<br />Strong Bones &amp; Immune Support* Ear care 8</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        ageCategory: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
        recommendedProduct: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        subTitle: {
          value:
            "<p>Liquid Filled | Rapid Release<br />Gluten Free</p>\n<p>Dietary supplement</p>\n<p>100 SOFTGELS Ear care 8</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        ingredients: {
          value:
            "<p>Vitamin D3, Soybean Oil, Gelatin, Glycerin, Water, Corn Oil.</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        disclaimerText: {
          value: "Disclaimer: Products are subject to availability",
          propertyDataType: "PropertyLongString",
        },
        productType: {
          value: [
            {
              name: "Acute Care",
              description: "Acute Care",
              id: 19,
            },
            {
              name: "Ear Care",
              description: "Ear Care",
              id: 25,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        genderTitle: {
          value: "Gender",
          propertyDataType: "PropertyLongString",
        },
        image: {
          value: {
            expanded: null,
            id: 231,
            guidValue: "5a9fc65e-fa4b-4be7-bf20-f9c319e19196",
            workId: 0,
            providerName: null,
            url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/ear-care.png",
          },
          propertyDataType: "PropertyContentReference",
        },
        availabilityCategory: {
          value: [
            {
              name: "Available Now",
              description: "Available Now",
              id: 17,
            },
            {
              name: "Coming Soon",
              description: "Coming Soon",
              id: 18,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        warnings: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        availabilityTitle: {
          value: "Availability",
          propertyDataType: "PropertyLongString",
        },
        productImages: {
          value: [
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
          ],
          propertyDataType: "PropertyContentReferenceList",
        },
        directions: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        genderCategory: {
          value: [
            {
              name: "Male",
              description: "Male",
              id: 3,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        category: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
      },
      {
        contentLink: {
          id: 201,
          workId: 0,
          guidValue: "5963e98c-0e4d-4a74-9e34-32907b09ef67",
          providerName: null,
          url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp/",
          expanded: null,
        },
        name: "Allergy Relief",
        language: {
          link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp/",
          displayName: "English",
          name: "en",
        },
        existingLanguages: [
          {
            link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp/",
            displayName: "English",
            name: "en",
          },
        ],
        masterLanguage: {
          link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp/",
          displayName: "English",
          name: "en",
        },
        contentType: ["Page", "ProductDetailsPage"],
        parentLink: {
          id: 112,
          workId: 0,
          guidValue: "5c0bd45c-faa2-4223-b688-a0d63097b80d",
          providerName: null,
          url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/",
          expanded: null,
        },
        routeSegment: "pdp",
        url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp/",
        changed: "2023-04-21T09:36:33Z",
        created: "2023-04-19T16:21:33Z",
        startPublish: "2023-04-19T16:21:38Z",
        stopPublish: null,
        saved: "2023-04-21T09:45:59Z",
        status: "Published",
        seoSection: {
          value: null,
          propertyDataType: "PropertyContentArea",
        },
        contentBlockArea: {
          value: null,
          propertyDataType: "PropertyContentArea",
        },
        formCategory: {
          value: [
            {
              name: "Liquid Gel",
              description: "Liquid Gel",
              id: 12,
            },
            {
              name: "Nasal Spray",
              description: "Nasal Spray",
              id: 13,
            },
            {
              name: "Tablet",
              description: "Tablet",
              id: 14,
            },
            {
              name: "Topical",
              description: "Topical",
              id: 15,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        healthNeedsCategory: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
        ageTitle: {
          value: "Age",
          propertyDataType: "PropertyLongString",
        },
        description: {
          value:
            "<p>IMMUNE SUPPORT (1): Vitamin D3 is an essential nutrient for immune support. (1) Each serving contains 2000 IU of Vitamin D for immune benefits and may assist the immune system by helping to regulate T and B-lymphocytes (1)<br />SUPPORTS STRONG BONES (1): In addition to immune support, getting a sufficient amount of Vitamin D is critical to building and maintaining strong bones in adults. (1) It is essential for calcium absorption to help support healthy bones (1)<br />YEAR-ROUND SUPPORT: Vitamin D3 supplements contain the same form of Vitamin D that is naturally formed in the body through exposure to sunshine. Nature&rsquo;s Bounty Vitamin D3 helps support the production of Vitamin D all year long (1)<br />NON-GMO FORMULA: Nature&rsquo;s Bounty Vitamin D3 Softgels are non-GMO, gluten- and sugar-free, and contain no artificial colors or sweeteners<br />UNSURPASSED QUALITY AND VALUE: Using the latest breakthroughs in nutritional science and the finest ingredients, Nature&rsquo;s Bounty provides supplements of unsurpassed quality and valueA</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        formTitle: {
          value: "Form",
          propertyDataType: "PropertyLongString",
        },
        title: {
          value:
            "<p>Foster &amp; Thrive&nbsp;<br />Vitamin D3<br />50 mcg (2000 IU)<br />Strong Bones &amp; Immune Support* Allergy Relief1</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        ageCategory: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
        recommendedProduct: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        subTitle: {
          value:
            "<p>Liquid Filled | Rapid Release<br />Gluten Free</p>\n<p>Dietary supplement</p>\n<p>100 SOFTGELS Allergy Relief1</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        ingredients: {
          value:
            "<p>Vitamin D3, Soybean Oil, Gelatin, Glycerin, Water, Corn Oil.</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        disclaimerText: {
          value: "Disclaimer: Products are subject to availability",
          propertyDataType: "PropertyLongString",
        },
        productType: {
          value: [
            {
              name: "Acute Care",
              description: "Acute Care",
              id: 19,
            },
            {
              name: "Allergy Relief",
              description: "Allergy Relief",
              id: 20,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        genderTitle: {
          value: "Gender",
          propertyDataType: "PropertyLongString",
        },
        image: {
          value: {
            expanded: null,
            id: 202,
            guidValue: "ae709dcb-c167-4938-92c7-36a69a392ac5",
            workId: 0,
            providerName: null,
            url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/allergy-relief.png",
          },
          propertyDataType: "PropertyContentReference",
        },
        availabilityCategory: {
          value: [
            {
              name: "Available Now",
              description: "Available Now",
              id: 17,
            },
            {
              name: "Coming Soon",
              description: "Coming Soon",
              id: 18,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        warnings: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        availabilityTitle: {
          value: "Availability",
          propertyDataType: "PropertyLongString",
        },
        productImages: {
          value: [
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
          ],
          propertyDataType: "PropertyContentReferenceList",
        },
        directions: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        genderCategory: {
          value: [
            {
              name: "Male",
              description: "Male",
              id: 3,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        category: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
      },
      {
        contentLink: {
          id: 233,
          workId: 0,
          guidValue: "ae8622c7-6894-4ed4-b68d-1664a3c60d70",
          providerName: null,
          url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2222/",
          expanded: null,
        },
        name: "Ear Care(2)",
        language: {
          link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2222/",
          displayName: "English",
          name: "en",
        },
        existingLanguages: [
          {
            link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2222/",
            displayName: "English",
            name: "en",
          },
        ],
        masterLanguage: {
          link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2222/",
          displayName: "English",
          name: "en",
        },
        contentType: ["Page", "ProductDetailsPage"],
        parentLink: {
          id: 112,
          workId: 0,
          guidValue: "5c0bd45c-faa2-4223-b688-a0d63097b80d",
          providerName: null,
          url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/",
          expanded: null,
        },
        routeSegment: "pdp2222",
        url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2222/",
        changed: "2023-04-21T15:37:34Z",
        created: "2023-04-19T16:21:33Z",
        startPublish: "2023-04-19T16:21:38Z",
        stopPublish: null,
        saved: "2023-04-21T15:38:23Z",
        status: "Published",
        seoSection: {
          value: null,
          propertyDataType: "PropertyContentArea",
        },
        contentBlockArea: {
          value: null,
          propertyDataType: "PropertyContentArea",
        },
        formCategory: {
          value: [
            {
              name: "Liquid Gel",
              description: "Liquid Gel",
              id: 12,
            },
            {
              name: "Nasal Spray",
              description: "Nasal Spray",
              id: 13,
            },
            {
              name: "Tablet",
              description: "Tablet",
              id: 14,
            },
            {
              name: "Topical",
              description: "Topical",
              id: 15,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        healthNeedsCategory: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
        ageTitle: {
          value: "Age",
          propertyDataType: "PropertyLongString",
        },
        description: {
          value:
            "<p>IMMUNE SUPPORT (1): Vitamin D3 is an essential nutrient for immune support. (1) Each serving contains 2000 IU of Vitamin D for immune benefits and may assist the immune system by helping to regulate T and B-lymphocytes (1)<br />SUPPORTS STRONG BONES (1): In addition to immune support, getting a sufficient amount of Vitamin D is critical to building and maintaining strong bones in adults. (1) It is essential for calcium absorption to help support healthy bones (1)<br />YEAR-ROUND SUPPORT: Vitamin D3 supplements contain the same form of Vitamin D that is naturally formed in the body through exposure to sunshine. Nature&rsquo;s Bounty Vitamin D3 helps support the production of Vitamin D all year long (1)<br />NON-GMO FORMULA: Nature&rsquo;s Bounty Vitamin D3 Softgels are non-GMO, gluten- and sugar-free, and contain no artificial colors or sweeteners<br />UNSURPASSED QUALITY AND VALUE: Using the latest breakthroughs in nutritional science and the finest ingredients, Nature&rsquo;s Bounty provides supplements of unsurpassed quality and valueA</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        formTitle: {
          value: "Form",
          propertyDataType: "PropertyLongString",
        },
        title: {
          value:
            "<p>Foster &amp; Thrive&nbsp;<br />Vitamin D3<br />50 mcg (2000 IU)<br />Strong Bones &amp; Immune Support* Ear care 2</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        ageCategory: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
        recommendedProduct: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        subTitle: {
          value:
            "<p>Liquid Filled | Rapid Release<br />Gluten Free</p>\n<p>Dietary supplement</p>\n<p>100 SOFTGELS Ear care 2</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        ingredients: {
          value:
            "<p>Vitamin D3, Soybean Oil, Gelatin, Glycerin, Water, Corn Oil.</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        disclaimerText: {
          value: "Disclaimer: Products are subject to availability",
          propertyDataType: "PropertyLongString",
        },
        productType: {
          value: [
            {
              name: "Acute Care",
              description: "Acute Care",
              id: 19,
            },
            {
              name: "Ear Care",
              description: "Ear Care",
              id: 25,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        genderTitle: {
          value: "Gender",
          propertyDataType: "PropertyLongString",
        },
        image: {
          value: {
            expanded: null,
            id: 231,
            guidValue: "5a9fc65e-fa4b-4be7-bf20-f9c319e19196",
            workId: 0,
            providerName: null,
            url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/ear-care.png",
          },
          propertyDataType: "PropertyContentReference",
        },
        availabilityCategory: {
          value: [
            {
              name: "Available Now",
              description: "Available Now",
              id: 17,
            },
            {
              name: "Coming Soon",
              description: "Coming Soon",
              id: 18,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        warnings: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        availabilityTitle: {
          value: "Availability",
          propertyDataType: "PropertyLongString",
        },
        productImages: {
          value: [
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
          ],
          propertyDataType: "PropertyContentReferenceList",
        },
        directions: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        genderCategory: {
          value: [
            {
              name: "Male",
              description: "Male",
              id: 3,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        category: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
      },
      {
        contentLink: {
          id: 255,
          workId: 0,
          guidValue: "2cb4de3a-a16a-4f75-87b5-f0eec3562ecc",
          providerName: null,
          url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp222223222/",
          expanded: null,
        },
        name: "Ear Care 6",
        language: {
          link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp222223222/",
          displayName: "English",
          name: "en",
        },
        existingLanguages: [
          {
            link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp222223222/",
            displayName: "English",
            name: "en",
          },
        ],
        masterLanguage: {
          link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp222223222/",
          displayName: "English",
          name: "en",
        },
        contentType: ["Page", "ProductDetailsPage"],
        parentLink: {
          id: 112,
          workId: 0,
          guidValue: "5c0bd45c-faa2-4223-b688-a0d63097b80d",
          providerName: null,
          url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/",
          expanded: null,
        },
        routeSegment: "pdp222223222",
        url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp222223222/",
        changed: "2023-04-21T16:23:44Z",
        created: "2023-04-19T16:21:33Z",
        startPublish: "2023-04-19T16:21:38Z",
        stopPublish: null,
        saved: "2023-04-21T16:24:15Z",
        status: "Published",
        seoSection: {
          value: null,
          propertyDataType: "PropertyContentArea",
        },
        contentBlockArea: {
          value: null,
          propertyDataType: "PropertyContentArea",
        },
        formCategory: {
          value: [
            {
              name: "Liquid Gel",
              description: "Liquid Gel",
              id: 12,
            },
            {
              name: "Nasal Spray",
              description: "Nasal Spray",
              id: 13,
            },
            {
              name: "Tablet",
              description: "Tablet",
              id: 14,
            },
            {
              name: "Topical",
              description: "Topical",
              id: 15,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        healthNeedsCategory: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
        ageTitle: {
          value: "Age",
          propertyDataType: "PropertyLongString",
        },
        description: {
          value:
            "<p>IMMUNE SUPPORT (1): Vitamin D3 is an essential nutrient for immune support. (1) Each serving contains 2000 IU of Vitamin D for immune benefits and may assist the immune system by helping to regulate T and B-lymphocytes (1)<br />SUPPORTS STRONG BONES (1): In addition to immune support, getting a sufficient amount of Vitamin D is critical to building and maintaining strong bones in adults. (1) It is essential for calcium absorption to help support healthy bones (1)<br />YEAR-ROUND SUPPORT: Vitamin D3 supplements contain the same form of Vitamin D that is naturally formed in the body through exposure to sunshine. Nature&rsquo;s Bounty Vitamin D3 helps support the production of Vitamin D all year long (1)<br />NON-GMO FORMULA: Nature&rsquo;s Bounty Vitamin D3 Softgels are non-GMO, gluten- and sugar-free, and contain no artificial colors or sweeteners<br />UNSURPASSED QUALITY AND VALUE: Using the latest breakthroughs in nutritional science and the finest ingredients, Nature&rsquo;s Bounty provides supplements of unsurpassed quality and valueA</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        formTitle: {
          value: "Form",
          propertyDataType: "PropertyLongString",
        },
        title: {
          value:
            "<p>Foster &amp; Thrive&nbsp;<br />Vitamin D3<br />50 mcg (2000 IU)<br />Strong Bones &amp; Immune Support* Ear care 6</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        ageCategory: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
        recommendedProduct: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        subTitle: {
          value:
            "<p>Liquid Filled | Rapid Release<br />Gluten Free</p>\n<p>Dietary supplement</p>\n<p>100 SOFTGELS Ear care 6</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        ingredients: {
          value:
            "<p>Vitamin D3, Soybean Oil, Gelatin, Glycerin, Water, Corn Oil.</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        disclaimerText: {
          value: "Disclaimer: Products are subject to availability",
          propertyDataType: "PropertyLongString",
        },
        productType: {
          value: [
            {
              name: "Acute Care",
              description: "Acute Care",
              id: 19,
            },
            {
              name: "Ear Care",
              description: "Ear Care",
              id: 25,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        genderTitle: {
          value: "Gender",
          propertyDataType: "PropertyLongString",
        },
        image: {
          value: {
            expanded: null,
            id: 231,
            guidValue: "5a9fc65e-fa4b-4be7-bf20-f9c319e19196",
            workId: 0,
            providerName: null,
            url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/ear-care.png",
          },
          propertyDataType: "PropertyContentReference",
        },
        availabilityCategory: {
          value: [
            {
              name: "Available Now",
              description: "Available Now",
              id: 17,
            },
            {
              name: "Coming Soon",
              description: "Coming Soon",
              id: 18,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        warnings: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        availabilityTitle: {
          value: "Availability",
          propertyDataType: "PropertyLongString",
        },
        productImages: {
          value: [
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
          ],
          propertyDataType: "PropertyContentReferenceList",
        },
        directions: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        genderCategory: {
          value: [
            {
              name: "Male",
              description: "Male",
              id: 3,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        category: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
      },
      {
        contentLink: {
          id: 256,
          workId: 0,
          guidValue: "dad2ef33-5a71-457c-90f9-cff8636fdf5a",
          providerName: null,
          url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22322222/",
          expanded: null,
        },
        name: "Pain Relief Product 8",
        language: {
          link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22322222/",
          displayName: "English",
          name: "en",
        },
        existingLanguages: [
          {
            link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22322222/",
            displayName: "English",
            name: "en",
          },
        ],
        masterLanguage: {
          link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22322222/",
          displayName: "English",
          name: "en",
        },
        contentType: ["Page", "ProductDetailsPage"],
        parentLink: {
          id: 112,
          workId: 0,
          guidValue: "5c0bd45c-faa2-4223-b688-a0d63097b80d",
          providerName: null,
          url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/",
          expanded: null,
        },
        routeSegment: "pdp22322222",
        url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22322222/",
        changed: "2023-04-21T16:24:34Z",
        created: "2023-04-19T16:21:33Z",
        startPublish: "2023-04-19T16:21:38Z",
        stopPublish: null,
        saved: "2023-04-21T16:25:22Z",
        status: "Published",
        seoSection: {
          value: null,
          propertyDataType: "PropertyContentArea",
        },
        contentBlockArea: {
          value: null,
          propertyDataType: "PropertyContentArea",
        },
        formCategory: {
          value: [
            {
              name: "Liquid Gel",
              description: "Liquid Gel",
              id: 12,
            },
            {
              name: "Nasal Spray",
              description: "Nasal Spray",
              id: 13,
            },
            {
              name: "Tablet",
              description: "Tablet",
              id: 14,
            },
            {
              name: "Topical",
              description: "Topical",
              id: 15,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        healthNeedsCategory: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
        ageTitle: {
          value: "Age",
          propertyDataType: "PropertyLongString",
        },
        description: {
          value:
            "<p>IMMUNE SUPPORT (1): Vitamin D3 is an essential nutrient for immune support. (1) Each serving contains 2000 IU of Vitamin D for immune benefits and may assist the immune system by helping to regulate T and B-lymphocytes (1)<br />SUPPORTS STRONG BONES (1): In addition to immune support, getting a sufficient amount of Vitamin D is critical to building and maintaining strong bones in adults. (1) It is essential for calcium absorption to help support healthy bones (1)<br />YEAR-ROUND SUPPORT: Vitamin D3 supplements contain the same form of Vitamin D that is naturally formed in the body through exposure to sunshine. Nature&rsquo;s Bounty Vitamin D3 helps support the production of Vitamin D all year long (1)<br />NON-GMO FORMULA: Nature&rsquo;s Bounty Vitamin D3 Softgels are non-GMO, gluten- and sugar-free, and contain no artificial colors or sweeteners<br />UNSURPASSED QUALITY AND VALUE: Using the latest breakthroughs in nutritional science and the finest ingredients, Nature&rsquo;s Bounty provides supplements of unsurpassed quality and valueA</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        formTitle: {
          value: "Form",
          propertyDataType: "PropertyLongString",
        },
        title: {
          value:
            "<p>Foster &amp; Thrive&nbsp;<br />Vitamin D3<br />50 mcg (2000 IU)<br />Strong Bones &amp; Immune Support* Pain Relief 8</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        ageCategory: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
        recommendedProduct: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        subTitle: {
          value:
            "<p>Liquid Filled | Rapid Release<br />Gluten Free</p>\n<p>Dietary supplement</p>\n<p>100 SOFTGELS Pain Relief 8</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        ingredients: {
          value:
            "<p>Vitamin D3, Soybean Oil, Gelatin, Glycerin, Water, Corn Oil.</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        disclaimerText: {
          value: "Disclaimer: Products are subject to availability",
          propertyDataType: "PropertyLongString",
        },
        productType: {
          value: [
            {
              name: "Acute Care",
              description: "Acute Care",
              id: 19,
            },
            {
              name: "Pain Relief",
              description: "Pain Relief",
              id: 21,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        genderTitle: {
          value: "Gender",
          propertyDataType: "PropertyLongString",
        },
        image: {
          value: {
            expanded: null,
            id: 228,
            guidValue: "8cd4f4bd-726a-4094-a605-147b5e2016b4",
            workId: 0,
            providerName: null,
            url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pain-relief.png",
          },
          propertyDataType: "PropertyContentReference",
        },
        availabilityCategory: {
          value: [
            {
              name: "Available Now",
              description: "Available Now",
              id: 17,
            },
            {
              name: "Coming Soon",
              description: "Coming Soon",
              id: 18,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        warnings: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        availabilityTitle: {
          value: "Availability",
          propertyDataType: "PropertyLongString",
        },
        productImages: {
          value: [
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
          ],
          propertyDataType: "PropertyContentReferenceList",
        },
        directions: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        genderCategory: {
          value: [
            {
              name: "Male",
              description: "Male",
              id: 3,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        category: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
      },
      {
        contentLink: {
          id: 250,
          workId: 0,
          guidValue: "5b3136ae-4989-4a81-becd-f3a864230eed",
          providerName: null,
          url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp223222/",
          expanded: null,
        },
        name: "Pain Relief Product(6)",
        language: {
          link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp223222/",
          displayName: "English",
          name: "en",
        },
        existingLanguages: [
          {
            link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp223222/",
            displayName: "English",
            name: "en",
          },
        ],
        masterLanguage: {
          link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp223222/",
          displayName: "English",
          name: "en",
        },
        contentType: ["Page", "ProductDetailsPage"],
        parentLink: {
          id: 112,
          workId: 0,
          guidValue: "5c0bd45c-faa2-4223-b688-a0d63097b80d",
          providerName: null,
          url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/",
          expanded: null,
        },
        routeSegment: "pdp223222",
        url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp223222/",
        changed: "2023-04-21T16:18:18Z",
        created: "2023-04-19T16:21:33Z",
        startPublish: "2023-04-19T16:21:38Z",
        stopPublish: null,
        saved: "2023-04-21T17:18:07Z",
        status: "Published",
        seoSection: {
          value: null,
          propertyDataType: "PropertyContentArea",
        },
        contentBlockArea: {
          value: null,
          propertyDataType: "PropertyContentArea",
        },
        formCategory: {
          value: [
            {
              name: "Bandage",
              description: "Bandage",
              id: 9,
            },
            {
              name: "Liquid Gel",
              description: "Liquid Gel",
              id: 12,
            },
            {
              name: "Nasal Spray",
              description: "Nasal Spray",
              id: 13,
            },
            {
              name: "Tablet",
              description: "Tablet",
              id: 14,
            },
            {
              name: "Topical",
              description: "Topical",
              id: 15,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        healthNeedsCategory: {
          value: [
            {
              name: "Immune Health",
              description: "Immune Health",
              id: 60,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        ageTitle: {
          value: "Age",
          propertyDataType: "PropertyLongString",
        },
        description: {
          value:
            "<p>IMMUNE SUPPORT (1): Vitamin D3 is an essential nutrient for immune support. (1) Each serving contains 2000 IU of Vitamin D for immune benefits and may assist the immune system by helping to regulate T and B-lymphocytes (1)<br />SUPPORTS STRONG BONES (1): In addition to immune support, getting a sufficient amount of Vitamin D is critical to building and maintaining strong bones in adults. (1) It is essential for calcium absorption to help support healthy bones (1)<br />YEAR-ROUND SUPPORT: Vitamin D3 supplements contain the same form of Vitamin D that is naturally formed in the body through exposure to sunshine. Nature&rsquo;s Bounty Vitamin D3 helps support the production of Vitamin D all year long (1)<br />NON-GMO FORMULA: Nature&rsquo;s Bounty Vitamin D3 Softgels are non-GMO, gluten- and sugar-free, and contain no artificial colors or sweeteners<br />UNSURPASSED QUALITY AND VALUE: Using the latest breakthroughs in nutritional science and the finest ingredients, Nature&rsquo;s Bounty provides supplements of unsurpassed quality and valueA</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        formTitle: {
          value: "Form",
          propertyDataType: "PropertyLongString",
        },
        title: {
          value:
            "<p>Foster &amp; Thrive&nbsp;<br />Vitamin D3<br />50 mcg (2000 IU)<br />Strong Bones &amp; Immune Support* Pain Relief6</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        ageCategory: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
        recommendedProduct: {
          value: null,
          propertyDataType: "PropertyBoolean",
        },
        subTitle: {
          value:
            "<p>Liquid Filled | Rapid Release<br />Gluten Free</p>\n<p>Dietary supplement</p>\n<p>100 SOFTGELS Pain Relief6</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        ingredients: {
          value:
            "<p>Vitamin D3, Soybean Oil, Gelatin, Glycerin, Water, Corn Oil.</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        disclaimerText: {
          value: "Disclaimer: Products are subject to availability",
          propertyDataType: "PropertyLongString",
        },
        productType: {
          value: [
            {
              name: "Acute Care",
              description: "Acute Care",
              id: 19,
            },
            {
              name: "Pain Relief",
              description: "Pain Relief",
              id: 21,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        genderTitle: {
          value: "Gender",
          propertyDataType: "PropertyLongString",
        },
        image: {
          value: {
            expanded: null,
            id: 228,
            guidValue: "8cd4f4bd-726a-4094-a605-147b5e2016b4",
            workId: 0,
            providerName: null,
            url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pain-relief.png",
          },
          propertyDataType: "PropertyContentReference",
        },
        availabilityCategory: {
          value: [
            {
              name: "Available Now",
              description: "Available Now",
              id: 17,
            },
            {
              name: "Coming Soon",
              description: "Coming Soon",
              id: 18,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        warnings: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        productImages: {
          value: [
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
          ],
          propertyDataType: "PropertyContentReferenceList",
        },
        availabilityTitle: {
          value: "Availability",
          propertyDataType: "PropertyLongString",
        },
        directions: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        genderCategory: {
          value: [
            {
              name: "Male",
              description: "Male",
              id: 3,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        category: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
      },
      {
        contentLink: {
          id: 204,
          workId: 0,
          guidValue: "25d104f3-d76b-49a4-bee3-67c1b049490f",
          providerName: null,
          url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22/",
          expanded: null,
        },
        name: "Pain Relief Product(2)",
        language: {
          link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22/",
          displayName: "English",
          name: "en",
        },
        existingLanguages: [
          {
            link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22/",
            displayName: "English",
            name: "en",
          },
        ],
        masterLanguage: {
          link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22/",
          displayName: "English",
          name: "en",
        },
        contentType: ["Page", "ProductDetailsPage"],
        parentLink: {
          id: 112,
          workId: 0,
          guidValue: "5c0bd45c-faa2-4223-b688-a0d63097b80d",
          providerName: null,
          url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/",
          expanded: null,
        },
        routeSegment: "pdp22",
        url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22/",
        changed: "2023-04-21T09:48:18Z",
        created: "2023-04-19T16:21:33Z",
        startPublish: "2023-04-19T16:21:38Z",
        stopPublish: null,
        saved: "2023-04-21T14:19:57Z",
        status: "Published",
        seoSection: {
          value: null,
          propertyDataType: "PropertyContentArea",
        },
        contentBlockArea: {
          value: null,
          propertyDataType: "PropertyContentArea",
        },
        formCategory: {
          value: [
            {
              name: "Liquid Gel",
              description: "Liquid Gel",
              id: 12,
            },
            {
              name: "Nasal Spray",
              description: "Nasal Spray",
              id: 13,
            },
            {
              name: "Tablet",
              description: "Tablet",
              id: 14,
            },
            {
              name: "Topical",
              description: "Topical",
              id: 15,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        healthNeedsCategory: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
        ageTitle: {
          value: "Age",
          propertyDataType: "PropertyLongString",
        },
        description: {
          value:
            "<p>IMMUNE SUPPORT (1): Vitamin D3 is an essential nutrient for immune support. (1) Each serving contains 2000 IU of Vitamin D for immune benefits and may assist the immune system by helping to regulate T and B-lymphocytes (1)<br />SUPPORTS STRONG BONES (1): In addition to immune support, getting a sufficient amount of Vitamin D is critical to building and maintaining strong bones in adults. (1) It is essential for calcium absorption to help support healthy bones (1)<br />YEAR-ROUND SUPPORT: Vitamin D3 supplements contain the same form of Vitamin D that is naturally formed in the body through exposure to sunshine. Nature&rsquo;s Bounty Vitamin D3 helps support the production of Vitamin D all year long (1)<br />NON-GMO FORMULA: Nature&rsquo;s Bounty Vitamin D3 Softgels are non-GMO, gluten- and sugar-free, and contain no artificial colors or sweeteners<br />UNSURPASSED QUALITY AND VALUE: Using the latest breakthroughs in nutritional science and the finest ingredients, Nature&rsquo;s Bounty provides supplements of unsurpassed quality and valueA</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        formTitle: {
          value: "Form",
          propertyDataType: "PropertyLongString",
        },
        title: {
          value:
            "<p>Foster &amp; Thrive&nbsp;<br />Vitamin D3<br />50 mcg (2000 IU)<br />Strong Bones &amp; Immune Support* Allergy Relief3</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        ageCategory: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
        recommendedProduct: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        subTitle: {
          value:
            "<p>Liquid Filled | Rapid Release<br />Gluten Free</p>\n<p>Dietary supplement</p>\n<p>100 SOFTGELS Allergy Relief3</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        ingredients: {
          value:
            "<p>Vitamin D3, Soybean Oil, Gelatin, Glycerin, Water, Corn Oil.</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        disclaimerText: {
          value: "Disclaimer: Products are subject to availability",
          propertyDataType: "PropertyLongString",
        },
        productType: {
          value: [
            {
              name: "Acute Care",
              description: "Acute Care",
              id: 19,
            },
            {
              name: "Pain Relief",
              description: "Pain Relief",
              id: 21,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        genderTitle: {
          value: "Gender",
          propertyDataType: "PropertyLongString",
        },
        image: {
          value: {
            expanded: null,
            id: 202,
            guidValue: "ae709dcb-c167-4938-92c7-36a69a392ac5",
            workId: 0,
            providerName: null,
            url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/allergy-relief.png",
          },
          propertyDataType: "PropertyContentReference",
        },
        availabilityCategory: {
          value: [
            {
              name: "Available Now",
              description: "Available Now",
              id: 17,
            },
            {
              name: "Coming Soon",
              description: "Coming Soon",
              id: 18,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        warnings: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        availabilityTitle: {
          value: "Availability",
          propertyDataType: "PropertyLongString",
        },
        productImages: {
          value: [
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
          ],
          propertyDataType: "PropertyContentReferenceList",
        },
        directions: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        genderCategory: {
          value: [
            {
              name: "Male",
              description: "Male",
              id: 3,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        category: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
      },
      {
        contentLink: {
          id: 203,
          workId: 0,
          guidValue: "05e73ba1-7de6-40c4-b59d-4b53b037d44a",
          providerName: null,
          url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2/",
          expanded: null,
        },
        name: "Pain Relief Product",
        language: {
          link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2/",
          displayName: "English",
          name: "en",
        },
        existingLanguages: [
          {
            link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2/",
            displayName: "English",
            name: "en",
          },
        ],
        masterLanguage: {
          link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2/",
          displayName: "English",
          name: "en",
        },
        contentType: ["Page", "ProductDetailsPage"],
        parentLink: {
          id: 112,
          workId: 0,
          guidValue: "5c0bd45c-faa2-4223-b688-a0d63097b80d",
          providerName: null,
          url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/",
          expanded: null,
        },
        routeSegment: "pdp2",
        url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp2/",
        changed: "2023-04-21T09:46:18Z",
        created: "2023-04-19T16:21:33Z",
        startPublish: "2023-04-19T16:21:38Z",
        stopPublish: null,
        saved: "2023-04-21T15:19:02Z",
        status: "Published",
        seoSection: {
          value: null,
          propertyDataType: "PropertyContentArea",
        },
        contentBlockArea: {
          value: null,
          propertyDataType: "PropertyContentArea",
        },
        formCategory: {
          value: [
            {
              name: "Liquid Gel",
              description: "Liquid Gel",
              id: 12,
            },
            {
              name: "Nasal Spray",
              description: "Nasal Spray",
              id: 13,
            },
            {
              name: "Tablet",
              description: "Tablet",
              id: 14,
            },
            {
              name: "Topical",
              description: "Topical",
              id: 15,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        healthNeedsCategory: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
        ageTitle: {
          value: "Age",
          propertyDataType: "PropertyLongString",
        },
        description: {
          value:
            "<p>IMMUNE SUPPORT (1): Vitamin D3 is an essential nutrient for immune support. (1) Each serving contains 2000 IU of Vitamin D for immune benefits and may assist the immune system by helping to regulate T and B-lymphocytes (1)<br />SUPPORTS STRONG BONES (1): In addition to immune support, getting a sufficient amount of Vitamin D is critical to building and maintaining strong bones in adults. (1) It is essential for calcium absorption to help support healthy bones (1)<br />YEAR-ROUND SUPPORT: Vitamin D3 supplements contain the same form of Vitamin D that is naturally formed in the body through exposure to sunshine. Nature&rsquo;s Bounty Vitamin D3 helps support the production of Vitamin D all year long (1)<br />NON-GMO FORMULA: Nature&rsquo;s Bounty Vitamin D3 Softgels are non-GMO, gluten- and sugar-free, and contain no artificial colors or sweeteners<br />UNSURPASSED QUALITY AND VALUE: Using the latest breakthroughs in nutritional science and the finest ingredients, Nature&rsquo;s Bounty provides supplements of unsurpassed quality and valueA</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        formTitle: {
          value: "Form",
          propertyDataType: "PropertyLongString",
        },
        title: {
          value:
            "<p>Foster &amp; Thrive&nbsp;<br />Vitamin D3<br />50 mcg (2000 IU)<br />Strong Bones &amp; Immune Support* Allergy Relief2</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        ageCategory: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
        recommendedProduct: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        subTitle: {
          value:
            "<p>Liquid Filled | Rapid Release<br />Gluten Free</p>\n<p>Dietary supplement</p>\n<p>100 SOFTGELS Allergy Relief2</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        ingredients: {
          value:
            "<p>Vitamin D3, Soybean Oil, Gelatin, Glycerin, Water, Corn Oil.</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        disclaimerText: {
          value: "Disclaimer: Products are subject to availability",
          propertyDataType: "PropertyLongString",
        },
        productType: {
          value: [
            {
              name: "Acute Care",
              description: "Acute Care",
              id: 19,
            },
            {
              name: "Pain Relief",
              description: "Pain Relief",
              id: 21,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        genderTitle: {
          value: "Gender",
          propertyDataType: "PropertyLongString",
        },
        image: {
          value: {
            expanded: null,
            id: 228,
            guidValue: "8cd4f4bd-726a-4094-a605-147b5e2016b4",
            workId: 0,
            providerName: null,
            url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pain-relief.png",
          },
          propertyDataType: "PropertyContentReference",
        },
        availabilityCategory: {
          value: [
            {
              name: "Available Now",
              description: "Available Now",
              id: 17,
            },
            {
              name: "Coming Soon",
              description: "Coming Soon",
              id: 18,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        warnings: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        availabilityTitle: {
          value: "Availability",
          propertyDataType: "PropertyLongString",
        },
        productImages: {
          value: [
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
          ],
          propertyDataType: "PropertyContentReferenceList",
        },
        directions: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        genderCategory: {
          value: [
            {
              name: "Male",
              description: "Male",
              id: 3,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        category: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
      },
      {
        contentLink: {
          id: 240,
          workId: 0,
          guidValue: "9966a7a0-6882-4aba-9bd2-363efa8e1926",
          providerName: null,
          url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22222222/pdp2/",
          expanded: null,
        },
        name: "Pain Relief Product 4",
        language: {
          link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22222222/pdp2/",
          displayName: "English",
          name: "en",
        },
        existingLanguages: [
          {
            link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22222222/pdp2/",
            displayName: "English",
            name: "en",
          },
        ],
        masterLanguage: {
          link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22222222/pdp2/",
          displayName: "English",
          name: "en",
        },
        contentType: ["Page", "ProductDetailsPage"],
        parentLink: {
          id: 112,
          workId: 0,
          guidValue: "5c0bd45c-faa2-4223-b688-a0d63097b80d",
          providerName: null,
          url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/",
          expanded: null,
        },
        routeSegment: "pdp23",
        url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22222222/pdp2/",
        changed: "2023-04-21T15:56:47Z",
        created: "2023-04-19T16:21:33Z",
        startPublish: "2023-04-19T16:21:38Z",
        stopPublish: null,
        saved: "2023-04-21T15:59:41Z",
        status: "Published",
        seoSection: {
          value: null,
          propertyDataType: "PropertyContentArea",
        },
        contentBlockArea: {
          value: null,
          propertyDataType: "PropertyContentArea",
        },
        formCategory: {
          value: [
            {
              name: "Liquid Gel",
              description: "Liquid Gel",
              id: 12,
            },
            {
              name: "Nasal Spray",
              description: "Nasal Spray",
              id: 13,
            },
            {
              name: "Tablet",
              description: "Tablet",
              id: 14,
            },
            {
              name: "Topical",
              description: "Topical",
              id: 15,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        healthNeedsCategory: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
        ageTitle: {
          value: "Age",
          propertyDataType: "PropertyLongString",
        },
        description: {
          value:
            "<p>IMMUNE SUPPORT (1): Vitamin D3 is an essential nutrient for immune support. (1) Each serving contains 2000 IU of Vitamin D for immune benefits and may assist the immune system by helping to regulate T and B-lymphocytes (1)<br />SUPPORTS STRONG BONES (1): In addition to immune support, getting a sufficient amount of Vitamin D is critical to building and maintaining strong bones in adults. (1) It is essential for calcium absorption to help support healthy bones (1)<br />YEAR-ROUND SUPPORT: Vitamin D3 supplements contain the same form of Vitamin D that is naturally formed in the body through exposure to sunshine. Nature&rsquo;s Bounty Vitamin D3 helps support the production of Vitamin D all year long (1)<br />NON-GMO FORMULA: Nature&rsquo;s Bounty Vitamin D3 Softgels are non-GMO, gluten- and sugar-free, and contain no artificial colors or sweeteners<br />UNSURPASSED QUALITY AND VALUE: Using the latest breakthroughs in nutritional science and the finest ingredients, Nature&rsquo;s Bounty provides supplements of unsurpassed quality and valueA</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        formTitle: {
          value: "Form",
          propertyDataType: "PropertyLongString",
        },
        title: {
          value:
            "<p>Foster &amp; Thrive&nbsp;<br />Vitamin D3<br />50 mcg (2000 IU)<br />Strong Bones &amp; Immune Support* Pain Relief 4</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        ageCategory: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
        recommendedProduct: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        subTitle: {
          value:
            "<p>Liquid Filled | Rapid Release<br />Gluten Free</p>\n<p>Dietary supplement</p>\n<p>100 SOFTGELS Pain Relief 4</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        ingredients: {
          value:
            "<p>Vitamin D3, Soybean Oil, Gelatin, Glycerin, Water, Corn Oil.</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        disclaimerText: {
          value: "Disclaimer: Products are subject to availability",
          propertyDataType: "PropertyLongString",
        },
        productType: {
          value: [
            {
              name: "Acute Care",
              description: "Acute Care",
              id: 19,
            },
            {
              name: "Pain Relief",
              description: "Pain Relief",
              id: 21,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        genderTitle: {
          value: "Gender",
          propertyDataType: "PropertyLongString",
        },
        image: {
          value: {
            expanded: null,
            id: 228,
            guidValue: "8cd4f4bd-726a-4094-a605-147b5e2016b4",
            workId: 0,
            providerName: null,
            url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pain-relief.png",
          },
          propertyDataType: "PropertyContentReference",
        },
        availabilityCategory: {
          value: [
            {
              name: "Available Now",
              description: "Available Now",
              id: 17,
            },
            {
              name: "Coming Soon",
              description: "Coming Soon",
              id: 18,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        warnings: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        availabilityTitle: {
          value: "Availability",
          propertyDataType: "PropertyLongString",
        },
        productImages: {
          value: [
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
          ],
          propertyDataType: "PropertyContentReferenceList",
        },
        directions: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        genderCategory: {
          value: [
            {
              name: "Male",
              description: "Male",
              id: 3,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        category: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
      },
      {
        contentLink: {
          id: 246,
          workId: 0,
          guidValue: "bbcf5357-cd6f-4a73-9751-9be8d3a1c2e9",
          providerName: null,
          url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22322/",
          expanded: null,
        },
        name: "Pain Relief Product(5)",
        language: {
          link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22322/",
          displayName: "English",
          name: "en",
        },
        existingLanguages: [
          {
            link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22322/",
            displayName: "English",
            name: "en",
          },
        ],
        masterLanguage: {
          link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22322/",
          displayName: "English",
          name: "en",
        },
        contentType: ["Page", "ProductDetailsPage"],
        parentLink: {
          id: 112,
          workId: 0,
          guidValue: "5c0bd45c-faa2-4223-b688-a0d63097b80d",
          providerName: null,
          url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/",
          expanded: null,
        },
        routeSegment: "pdp22322",
        url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22322/",
        changed: "2023-04-21T16:08:12Z",
        created: "2023-04-19T16:21:33Z",
        startPublish: "2023-04-19T16:21:38Z",
        stopPublish: null,
        saved: "2023-04-21T16:09:26Z",
        status: "Published",
        seoSection: {
          value: null,
          propertyDataType: "PropertyContentArea",
        },
        contentBlockArea: {
          value: null,
          propertyDataType: "PropertyContentArea",
        },
        formCategory: {
          value: [
            {
              name: "Liquid Gel",
              description: "Liquid Gel",
              id: 12,
            },
            {
              name: "Nasal Spray",
              description: "Nasal Spray",
              id: 13,
            },
            {
              name: "Tablet",
              description: "Tablet",
              id: 14,
            },
            {
              name: "Topical",
              description: "Topical",
              id: 15,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        healthNeedsCategory: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
        ageTitle: {
          value: "Age",
          propertyDataType: "PropertyLongString",
        },
        description: {
          value:
            "<p>IMMUNE SUPPORT (1): Vitamin D3 is an essential nutrient for immune support. (1) Each serving contains 2000 IU of Vitamin D for immune benefits and may assist the immune system by helping to regulate T and B-lymphocytes (1)<br />SUPPORTS STRONG BONES (1): In addition to immune support, getting a sufficient amount of Vitamin D is critical to building and maintaining strong bones in adults. (1) It is essential for calcium absorption to help support healthy bones (1)<br />YEAR-ROUND SUPPORT: Vitamin D3 supplements contain the same form of Vitamin D that is naturally formed in the body through exposure to sunshine. Nature&rsquo;s Bounty Vitamin D3 helps support the production of Vitamin D all year long (1)<br />NON-GMO FORMULA: Nature&rsquo;s Bounty Vitamin D3 Softgels are non-GMO, gluten- and sugar-free, and contain no artificial colors or sweeteners<br />UNSURPASSED QUALITY AND VALUE: Using the latest breakthroughs in nutritional science and the finest ingredients, Nature&rsquo;s Bounty provides supplements of unsurpassed quality and valueA</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        formTitle: {
          value: "Form",
          propertyDataType: "PropertyLongString",
        },
        title: {
          value:
            "<p>Foster &amp; Thrive&nbsp;<br />Vitamin D3<br />50 mcg (2000 IU)<br />Strong Bones &amp; Immune Support* Pain Relief5</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        ageCategory: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
        recommendedProduct: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        subTitle: {
          value:
            "<p>Liquid Filled | Rapid Release<br />Gluten Free</p>\n<p>Dietary supplement</p>\n<p>100 SOFTGELS Pain Relief5</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        ingredients: {
          value:
            "<p>Vitamin D3, Soybean Oil, Gelatin, Glycerin, Water, Corn Oil.</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        disclaimerText: {
          value: "Disclaimer: Products are subject to availability",
          propertyDataType: "PropertyLongString",
        },
        productType: {
          value: [
            {
              name: "Acute Care",
              description: "Acute Care",
              id: 19,
            },
            {
              name: "Pain Relief",
              description: "Pain Relief",
              id: 21,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        genderTitle: {
          value: "Gender",
          propertyDataType: "PropertyLongString",
        },
        image: {
          value: {
            expanded: null,
            id: 228,
            guidValue: "8cd4f4bd-726a-4094-a605-147b5e2016b4",
            workId: 0,
            providerName: null,
            url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/pain-relief.png",
          },
          propertyDataType: "PropertyContentReference",
        },
        availabilityCategory: {
          value: [
            {
              name: "Available Now",
              description: "Available Now",
              id: 17,
            },
            {
              name: "Coming Soon",
              description: "Coming Soon",
              id: 18,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        warnings: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        availabilityTitle: {
          value: "Availability",
          propertyDataType: "PropertyLongString",
        },
        productImages: {
          value: [
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
          ],
          propertyDataType: "PropertyContentReferenceList",
        },
        directions: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        genderCategory: {
          value: [
            {
              name: "Male",
              description: "Male",
              id: 3,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        category: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
      },
    ],
  };

  const recommendedProductResponse = {
    totalMatching: 4,
    results: [
      {
        contentLink: {
          id: 248,
          workId: 0,
          guidValue: "32d81f0b-6b3c-4bf0-8723-2121591f09a0",
          providerName: null,
          url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp222222232/",
          expanded: null,
        },
        name: "Immunity 4",
        language: {
          link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp222222232/",
          displayName: "English",
          name: "en",
        },
        existingLanguages: [
          {
            link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp222222232/",
            displayName: "English",
            name: "en",
          },
        ],
        masterLanguage: {
          link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp222222232/",
          displayName: "English",
          name: "en",
        },
        contentType: ["Page", "ProductDetailsPage"],
        parentLink: {
          id: 112,
          workId: 0,
          guidValue: "5c0bd45c-faa2-4223-b688-a0d63097b80d",
          providerName: null,
          url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/",
          expanded: null,
        },
        routeSegment: "pdp222222232",
        url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp222222232/",
        changed: "2023-04-21T16:12:18Z",
        created: "2023-04-19T16:21:33Z",
        startPublish: "2023-04-19T16:21:38Z",
        stopPublish: null,
        saved: "2023-04-22T12:20:44Z",
        status: "Published",
        seoSection: {
          value: null,
          propertyDataType: "PropertyContentArea",
        },
        contentBlockArea: {
          value: null,
          propertyDataType: "PropertyContentArea",
        },
        formCategory: {
          value: [
            {
              name: "Bandage",
              description: "Bandage",
              id: 9,
            },
            {
              name: "Liquid Gel",
              description: "Liquid Gel",
              id: 12,
            },
            {
              name: "Nasal Spray",
              description: "Nasal Spray",
              id: 13,
            },
            {
              name: "Tablet",
              description: "Tablet",
              id: 14,
            },
            {
              name: "Topical",
              description: "Topical",
              id: 15,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        healthNeedsCategory: {
          value: [
            {
              name: "Immune Health",
              description: "Immune Health",
              id: 60,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        ageTitle: {
          value: "Age",
          propertyDataType: "PropertyLongString",
        },
        description: {
          value:
            "<p>IMMUNE SUPPORT (1): Vitamin D3 is an essential nutrient for immune support. (1) Each serving contains 2000 IU of Vitamin D for immune benefits and may assist the immune system by helping to regulate T and B-lymphocytes (1)<br />SUPPORTS STRONG BONES (1): In addition to immune support, getting a sufficient amount of Vitamin D is critical to building and maintaining strong bones in adults. (1) It is essential for calcium absorption to help support healthy bones (1)<br />YEAR-ROUND SUPPORT: Vitamin D3 supplements contain the same form of Vitamin D that is naturally formed in the body through exposure to sunshine. Nature&rsquo;s Bounty Vitamin D3 helps support the production of Vitamin D all year long (1)<br />NON-GMO FORMULA: Nature&rsquo;s Bounty Vitamin D3 Softgels are non-GMO, gluten- and sugar-free, and contain no artificial colors or sweeteners<br />UNSURPASSED QUALITY AND VALUE: Using the latest breakthroughs in nutritional science and the finest ingredients, Nature&rsquo;s Bounty provides supplements of unsurpassed quality and valueA</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        formTitle: {
          value: "Form",
          propertyDataType: "PropertyLongString",
        },
        title: {
          value:
            "<p>Foster &amp; Thrive&nbsp;<br />Vitamin D3<br />50 mcg (2000 IU)<br />Strong Bones &amp; Immune Support* Immunity 4</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        ageCategory: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
        recommendedProduct: {
          value: true,
          propertyDataType: "PropertyBoolean",
        },
        subTitle: {
          value:
            "<p>Liquid Filled | Rapid Release<br />Gluten Free</p>\n<p>Dietary supplement</p>\n<p>100 SOFTGELS Immunity 4</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        ingredients: {
          value:
            "<p>Vitamin D3, Soybean Oil, Gelatin, Glycerin, Water, Corn Oil.</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        disclaimerText: {
          value: "Disclaimer: Products are subject to availability",
          propertyDataType: "PropertyLongString",
        },
        productType: {
          value: [
            {
              name: "Preventative Care",
              description: "Preventative Care",
              id: 28,
            },
            {
              name: "Immunity",
              description: "Immunity",
              id: 29,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        genderTitle: {
          value: "Gender",
          propertyDataType: "PropertyLongString",
        },
        image: {
          value: {
            expanded: null,
            id: 237,
            guidValue: "19cd24b6-0e66-406a-9bd7-e230cff49fcf",
            workId: 0,
            providerName: null,
            url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/immunity.png",
          },
          propertyDataType: "PropertyContentReference",
        },
        availabilityCategory: {
          value: [
            {
              name: "Available Now",
              description: "Available Now",
              id: 17,
            },
            {
              name: "Coming Soon",
              description: "Coming Soon",
              id: 18,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        warnings: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        productImages: {
          value: [
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
          ],
          propertyDataType: "PropertyContentReferenceList",
        },
        availabilityTitle: {
          value: "Availability",
          propertyDataType: "PropertyLongString",
        },
        directions: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        genderCategory: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
        category: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
      },
      {
        contentLink: {
          id: 236,
          workId: 0,
          guidValue: "f69dfac7-73be-4ab4-ae1f-788ae41d0c6b",
          providerName: null,
          url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp222222/",
          expanded: null,
        },
        name: "Immunity",
        language: {
          link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp222222/",
          displayName: "English",
          name: "en",
        },
        existingLanguages: [
          {
            link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp222222/",
            displayName: "English",
            name: "en",
          },
        ],
        masterLanguage: {
          link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp222222/",
          displayName: "English",
          name: "en",
        },
        contentType: ["Page", "ProductDetailsPage"],
        parentLink: {
          id: 112,
          workId: 0,
          guidValue: "5c0bd45c-faa2-4223-b688-a0d63097b80d",
          providerName: null,
          url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/",
          expanded: null,
        },
        routeSegment: "pdp222222",
        url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp222222/",
        changed: "2023-04-21T15:48:33Z",
        created: "2023-04-19T16:21:33Z",
        startPublish: "2023-04-19T16:21:38Z",
        stopPublish: null,
        saved: "2023-04-22T11:59:23Z",
        status: "Published",
        seoSection: {
          value: null,
          propertyDataType: "PropertyContentArea",
        },
        contentBlockArea: {
          value: null,
          propertyDataType: "PropertyContentArea",
        },
        formCategory: {
          value: [
            {
              name: "Liquid Gel",
              description: "Liquid Gel",
              id: 12,
            },
            {
              name: "Nasal Spray",
              description: "Nasal Spray",
              id: 13,
            },
            {
              name: "Tablet",
              description: "Tablet",
              id: 14,
            },
            {
              name: "Topical",
              description: "Topical",
              id: 15,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        healthNeedsCategory: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
        ageTitle: {
          value: "Age",
          propertyDataType: "PropertyLongString",
        },
        description: {
          value:
            "<p>IMMUNE SUPPORT (1): Vitamin D3 is an essential nutrient for immune support. (1) Each serving contains 2000 IU of Vitamin D for immune benefits and may assist the immune system by helping to regulate T and B-lymphocytes (1)<br />SUPPORTS STRONG BONES (1): In addition to immune support, getting a sufficient amount of Vitamin D is critical to building and maintaining strong bones in adults. (1) It is essential for calcium absorption to help support healthy bones (1)<br />YEAR-ROUND SUPPORT: Vitamin D3 supplements contain the same form of Vitamin D that is naturally formed in the body through exposure to sunshine. Nature&rsquo;s Bounty Vitamin D3 helps support the production of Vitamin D all year long (1)<br />NON-GMO FORMULA: Nature&rsquo;s Bounty Vitamin D3 Softgels are non-GMO, gluten- and sugar-free, and contain no artificial colors or sweeteners<br />UNSURPASSED QUALITY AND VALUE: Using the latest breakthroughs in nutritional science and the finest ingredients, Nature&rsquo;s Bounty provides supplements of unsurpassed quality and valueA</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        formTitle: {
          value: "Form",
          propertyDataType: "PropertyLongString",
        },
        title: {
          value:
            "<p>Foster &amp; Thrive&nbsp;<br />Vitamin D3<br />50 mcg (2000 IU)<br />Strong Bones &amp; Immune Support* Immunity 1</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        ageCategory: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
        recommendedProduct: {
          value: true,
          propertyDataType: "PropertyBoolean",
        },
        subTitle: {
          value:
            "<p>Liquid Filled | Rapid Release<br />Gluten Free</p>\n<p>Dietary supplement</p>\n<p>100 SOFTGELS Immunity 1</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        ingredients: {
          value:
            "<p>Vitamin D3, Soybean Oil, Gelatin, Glycerin, Water, Corn Oil.</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        disclaimerText: {
          value: "Disclaimer: Products are subject to availability",
          propertyDataType: "PropertyLongString",
        },
        productType: {
          value: [
            {
              name: "Preventative Care",
              description: "Preventative Care",
              id: 28,
            },
            {
              name: "Immunity",
              description: "Immunity",
              id: 29,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        genderTitle: {
          value: "Gender",
          propertyDataType: "PropertyLongString",
        },
        image: {
          value: {
            expanded: null,
            id: 237,
            guidValue: "19cd24b6-0e66-406a-9bd7-e230cff49fcf",
            workId: 0,
            providerName: null,
            url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/immunity.png",
          },
          propertyDataType: "PropertyContentReference",
        },
        availabilityCategory: {
          value: [
            {
              name: "Available Now",
              description: "Available Now",
              id: 17,
            },
            {
              name: "Coming Soon",
              description: "Coming Soon",
              id: 18,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        warnings: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        productImages: {
          value: [
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
          ],
          propertyDataType: "PropertyContentReferenceList",
        },
        availabilityTitle: {
          value: "Availability",
          propertyDataType: "PropertyLongString",
        },
        directions: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        genderCategory: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
        category: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
      },
      {
        contentLink: {
          id: 112,
          workId: 0,
          guidValue: "5c0bd45c-faa2-4223-b688-a0d63097b80d",
          providerName: null,
          url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/",
          expanded: null,
        },
        name: "PDP",
        language: {
          link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/",
          displayName: "English",
          name: "en",
        },
        existingLanguages: [
          {
            link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/",
            displayName: "English",
            name: "en",
          },
        ],
        masterLanguage: {
          link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/",
          displayName: "English",
          name: "en",
        },
        contentType: ["Page", "ProductDetailsPage"],
        parentLink: {
          id: 1,
          workId: 0,
          guidValue: "43f936c9-9b23-4ea3-97b2-61c538ad07c9",
          providerName: null,
          url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/",
          expanded: null,
        },
        routeSegment: "pdp",
        url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/",
        changed: "2023-04-19T16:21:38Z",
        created: "2023-04-19T16:21:33Z",
        startPublish: "2023-04-19T16:21:38Z",
        stopPublish: null,
        saved: "2023-04-22T11:57:16Z",
        status: "Published",
        seoSection: {
          value: null,
          propertyDataType: "PropertyContentArea",
        },
        contentBlockArea: {
          value: null,
          propertyDataType: "PropertyContentArea",
        },
        formCategory: {
          value: [
            {
              name: "Bandage",
              description: "Bandage",
              id: 9,
            },
            {
              name: "Capsule",
              description: "Capsule",
              id: 10,
            },
            {
              name: "Chewable",
              description: "Chewable",
              id: 11,
            },
            {
              name: "Liquid Gel",
              description: "Liquid Gel",
              id: 12,
            },
            {
              name: "Nasal Spray",
              description: "Nasal Spray",
              id: 13,
            },
            {
              name: "Tablet",
              description: "Tablet",
              id: 14,
            },
            {
              name: "Topical",
              description: "Topical",
              id: 15,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        healthNeedsCategory: {
          value: [
            {
              name: "Beauty",
              description: "Beauty",
              id: 53,
            },
            {
              name: "Bone",
              description: "Bone",
              id: 54,
            },
            {
              name: "Digestion",
              description: "Digestion",
              id: 55,
            },
            {
              name: "Energy",
              description: "Energy",
              id: 56,
            },
            {
              name: "Eye Health",
              description: "Eye Health",
              id: 57,
            },
            {
              name: "General Wellness",
              description: "General Wellness",
              id: 58,
            },
            {
              name: "Heart",
              description: "Heart",
              id: 59,
            },
            {
              name: "Immune Health",
              description: "Immune Health",
              id: 60,
            },
            {
              name: "Joints",
              description: "Joints",
              id: 61,
            },
            {
              name: "Kids",
              description: "Kids",
              id: 62,
            },
            {
              name: "Men's Health",
              description: "Men's Health",
              id: 63,
            },
            {
              name: "Mood",
              description: "Mood",
              id: 64,
            },
            {
              name: "Prenatal & Postnatal",
              description: "Prenatal & Postnatal",
              id: 65,
            },
            {
              name: "Sleep",
              description: "Sleep",
              id: 66,
            },
            {
              name: "Stress",
              description: "Stress",
              id: 67,
            },
            {
              name: "Women's Health",
              description: "Women's Health",
              id: 68,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        ageTitle: {
          value: "Age",
          propertyDataType: "PropertyLongString",
        },
        description: {
          value:
            "<p>IMMUNE SUPPORT (1): Vitamin D3 is an essential nutrient for immune support. (1) Each serving contains 2000 IU of Vitamin D for immune benefits and may assist the immune system by helping to regulate T and B-lymphocytes (1)<br />SUPPORTS STRONG BONES (1): In addition to immune support, getting a sufficient amount of Vitamin D is critical to building and maintaining strong bones in adults. (1) It is essential for calcium absorption to help support healthy bones (1)<br />YEAR-ROUND SUPPORT: Vitamin D3 supplements contain the same form of Vitamin D that is naturally formed in the body through exposure to sunshine. Nature&rsquo;s Bounty Vitamin D3 helps support the production of Vitamin D all year long (1)<br />NON-GMO FORMULA: Nature&rsquo;s Bounty Vitamin D3 Softgels are non-GMO, gluten- and sugar-free, and contain no artificial colors or sweeteners<br />UNSURPASSED QUALITY AND VALUE: Using the latest breakthroughs in nutritional science and the finest ingredients, Nature&rsquo;s Bounty provides supplements of unsurpassed quality and valueA</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        formTitle: {
          value: "Form",
          propertyDataType: "PropertyLongString",
        },
        title: {
          value:
            "<p>Foster &amp; Thrive&nbsp;<br />Vitamin D3<br />50 mcg (2000 IU)<br />Strong Bones &amp; Immune Support*</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        ageCategory: {
          value: [
            {
              name: "Adults",
              description: "Adults",
              id: 6,
            },
            {
              name: "Children",
              description: "Children",
              id: 7,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        recommendedProduct: {
          value: true,
          propertyDataType: "PropertyBoolean",
        },
        subTitle: {
          value:
            "<p>Liquid Filled | Rapid Release<br />Gluten Free</p>\n<p>Dietary supplement</p>\n<p>100 SOFTGELS</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        ingredients: {
          value:
            "<p>Vitamin D3, Soybean Oil, Gelatin, Glycerin, Water, Corn Oil.</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        disclaimerText: {
          value: "Disclaimer: Products are subject to availability",
          propertyDataType: "PropertyLongString",
        },
        productType: {
          value: [
            {
              name: "Acute Care",
              description: "Acute Care",
              id: 19,
            },
            {
              name: "Allergy Relief",
              description: "Allergy Relief",
              id: 20,
            },
            {
              name: "Pain Relief",
              description: "Pain Relief",
              id: 21,
            },
            {
              name: "Cough, Cold & Flu Relief",
              description: "Cough, Cold & Flu Relief",
              id: 22,
            },
            {
              name: "Digestion Health",
              description: "Digestion Health",
              id: 23,
            },
            {
              name: "Smoking Cessation",
              description: "Smoking Cessation",
              id: 24,
            },
            {
              name: "Ear Care",
              description: "Ear Care",
              id: 25,
            },
            {
              name: "Sinus Care",
              description: "Sinus Care",
              id: 26,
            },
            {
              name: "Oral Care",
              description: "Oral Care",
              id: 27,
            },
            {
              name: "Preventative Care",
              description: "Preventative Care",
              id: 28,
            },
            {
              name: "Immunity",
              description: "Immunity",
              id: 29,
            },
            {
              name: "Nutrition",
              description: "Nutrition",
              id: 30,
            },
            {
              name: "Vitamins",
              description: "Vitamins",
              id: 31,
            },
            {
              name: "Heart Health",
              description: "Heart Health",
              id: 32,
            },
            {
              name: "Probiotics",
              description: "Probiotics",
              id: 33,
            },
            {
              name: "Prenatal Health",
              description: "Prenatal Health",
              id: 34,
            },
            {
              name: "Every Day Care",
              description: "Every Day Care",
              id: 35,
            },
            {
              name: "First Aid",
              description: "First Aid",
              id: 36,
            },
            {
              name: "Daily Living Support",
              description: "Daily Living Support",
              id: 37,
            },
            {
              name: "Cosmetics",
              description: "Cosmetics",
              id: 38,
            },
            {
              name: "Family Planning",
              description: "Family Planning",
              id: 39,
            },
            {
              name: "Skin Care",
              description: "Skin Care",
              id: 40,
            },
            {
              name: "Foot Care",
              description: "Foot Care",
              id: 41,
            },
            {
              name: "Ankle Braces",
              description: "Ankle Braces",
              id: 42,
            },
            {
              name: "Muscle Soreness",
              description: "Muscle Soreness",
              id: 43,
            },
            {
              name: "Foot insoles",
              description: "Foot insoles",
              id: 44,
            },
            {
              name: "Facial Cleaner",
              description: "Facial Cleaner",
              id: 45,
            },
            {
              name: "Diagnostic Care",
              description: "Diagnostic Care",
              id: 46,
            },
            {
              name: "Diagnostic Care",
              description: "Diagnostic Care",
              id: 47,
            },
            {
              name: "Thermometer",
              description: "Thermometer",
              id: 48,
            },
            {
              name: "Gloves & Masks",
              description: "Gloves & Masks",
              id: 49,
            },
            {
              name: "Family Planning",
              description: "Family Planning",
              id: 50,
            },
            {
              name: "Blood Testing",
              description: "Blood Testing",
              id: 51,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        genderTitle: {
          value: "Gender",
          propertyDataType: "PropertyLongString",
        },
        image: {
          value: {
            expanded: null,
            id: 199,
            guidValue: "d9706483-a1a4-453a-a5b5-c8a015703686",
            workId: 0,
            providerName: null,
            url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/details_page_ffoster_thrive_vitamin_d3.png",
          },
          propertyDataType: "PropertyContentReference",
        },
        availabilityCategory: {
          value: [
            {
              name: "Available Now",
              description: "Available Now",
              id: 17,
            },
            {
              name: "Coming Soon",
              description: "Coming Soon",
              id: 18,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        warnings: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        productImages: {
          value: [
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
          ],
          propertyDataType: "PropertyContentReferenceList",
        },
        availabilityTitle: {
          value: "Availability",
          propertyDataType: "PropertyLongString",
        },
        directions: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        genderCategory: {
          value: [
            {
              name: "Male",
              description: "Male",
              id: 3,
            },
            {
              name: "Female",
              description: "Female",
              id: 4,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        category: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
      },
      {
        contentLink: {
          id: 239,
          workId: 0,
          guidValue: "87dc76c7-817d-42bf-9dda-b46feece31f5",
          providerName: null,
          url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22222222/",
          expanded: null,
        },
        name: "Nutrition",
        language: {
          link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22222222/",
          displayName: "English",
          name: "en",
        },
        existingLanguages: [
          {
            link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22222222/",
            displayName: "English",
            name: "en",
          },
        ],
        masterLanguage: {
          link: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22222222/",
          displayName: "English",
          name: "en",
        },
        contentType: ["Page", "ProductDetailsPage"],
        parentLink: {
          id: 112,
          workId: 0,
          guidValue: "5c0bd45c-faa2-4223-b688-a0d63097b80d",
          providerName: null,
          url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/",
          expanded: null,
        },
        routeSegment: "pdp22222222",
        url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22222222/",
        changed: "2023-04-21T15:54:44Z",
        created: "2023-04-19T16:21:33Z",
        startPublish: "2023-04-19T16:21:38Z",
        stopPublish: null,
        saved: "2023-04-22T11:59:57Z",
        status: "Published",
        seoSection: {
          value: null,
          propertyDataType: "PropertyContentArea",
        },
        contentBlockArea: {
          value: null,
          propertyDataType: "PropertyContentArea",
        },
        formCategory: {
          value: [
            {
              name: "Liquid Gel",
              description: "Liquid Gel",
              id: 12,
            },
            {
              name: "Nasal Spray",
              description: "Nasal Spray",
              id: 13,
            },
            {
              name: "Tablet",
              description: "Tablet",
              id: 14,
            },
            {
              name: "Topical",
              description: "Topical",
              id: 15,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        healthNeedsCategory: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
        ageTitle: {
          value: "Age",
          propertyDataType: "PropertyLongString",
        },
        description: {
          value:
            "<p>IMMUNE SUPPORT (1): Vitamin D3 is an essential nutrient for immune support. (1) Each serving contains 2000 IU of Vitamin D for immune benefits and may assist the immune system by helping to regulate T and B-lymphocytes (1)<br />SUPPORTS STRONG BONES (1): In addition to immune support, getting a sufficient amount of Vitamin D is critical to building and maintaining strong bones in adults. (1) It is essential for calcium absorption to help support healthy bones (1)<br />YEAR-ROUND SUPPORT: Vitamin D3 supplements contain the same form of Vitamin D that is naturally formed in the body through exposure to sunshine. Nature&rsquo;s Bounty Vitamin D3 helps support the production of Vitamin D all year long (1)<br />NON-GMO FORMULA: Nature&rsquo;s Bounty Vitamin D3 Softgels are non-GMO, gluten- and sugar-free, and contain no artificial colors or sweeteners<br />UNSURPASSED QUALITY AND VALUE: Using the latest breakthroughs in nutritional science and the finest ingredients, Nature&rsquo;s Bounty provides supplements of unsurpassed quality and valueA</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        formTitle: {
          value: "Form",
          propertyDataType: "PropertyLongString",
        },
        title: {
          value:
            "<p>Foster &amp; Thrive&nbsp;<br />Vitamin D3<br />50 mcg (2000 IU)<br />Strong Bones &amp; Immune Support* Nutrition 1</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        ageCategory: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
        recommendedProduct: {
          value: true,
          propertyDataType: "PropertyBoolean",
        },
        subTitle: {
          value:
            "<p>Liquid Filled | Rapid Release<br />Gluten Free</p>\n<p>Dietary supplement</p>\n<p>100 SOFTGELS Nutrition 1</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        ingredients: {
          value:
            "<p>Vitamin D3, Soybean Oil, Gelatin, Glycerin, Water, Corn Oil.</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        disclaimerText: {
          value: "Disclaimer: Products are subject to availability",
          propertyDataType: "PropertyLongString",
        },
        productType: {
          value: [
            {
              name: "Preventative Care",
              description: "Preventative Care",
              id: 28,
            },
            {
              name: "Nutrition",
              description: "Nutrition",
              id: 30,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        genderTitle: {
          value: "Gender",
          propertyDataType: "PropertyLongString",
        },
        image: {
          value: {
            expanded: null,
            id: 244,
            guidValue: "c2579056-8ee8-4659-a648-5372515e557e",
            workId: 0,
            providerName: null,
            url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/nutrition.png",
          },
          propertyDataType: "PropertyContentReference",
        },
        availabilityCategory: {
          value: [
            {
              name: "Available Now",
              description: "Available Now",
              id: 17,
            },
            {
              name: "Coming Soon",
              description: "Coming Soon",
              id: 18,
            },
          ],
          propertyDataType: "PropertyCategory",
        },
        warnings: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        productImages: {
          value: [
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
            {
              expanded: null,
              id: 200,
              guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
              workId: 0,
              providerName: null,
              url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            },
          ],
          propertyDataType: "PropertyContentReferenceList",
        },
        availabilityTitle: {
          value: "Availability",
          propertyDataType: "PropertyLongString",
        },
        directions: {
          value: "",
          propertyDataType: "PropertyXhtmlString",
        },
        genderCategory: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
        category: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
      },
    ],
  };

  const router = useRouter();

  const { response, error, loading } = useAxios({
    method: "GET",
    url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/api/episerver/v3.0/content/?ContentUrl=https://mcco02mstrub73kinte.dxcloud.episerver.net/en/home/&expand=*&Select=blockArea",
    headers: {
      "Accept-Language": "en",
    },
  });

  function filteredData(valueType: string) {
    return response?.data[0]?.blockArea?.expandedValue?.filter((ele: any) => {
      return ele.contentType.some((arrEle: string) => {
        return arrEle == valueType;
      });
    });
  }

  function fetchRecommandedProduct() {
    return axios.get(
      `https://mcco02mstrub73kinte.dxcloud.episerver.net/api/episerver/v3.0/search/content?filter=((productType/value/name eq 'Acute care' or  productType/value/name eq 'Preventative Care') and ContentType/any(t:t eq 'ProductDetailsPage') and (recommendedProduct/value eq true))`,
      {
        headers: {
          "Accept-Language": "en",
        },
      }
    );
  }

  function FetchProducts() {
    const res = axios.get(
      `https://mcco02mstrub73kinte.dxcloud.episerver.net/api/episerver/v3.0/search/content?filter=genderCategory/value/name eq 'Male'`,
      {
        headers: {
          "Accept-Language": "en",
        },
      }
    );

    return res;
  }

  useEffect(() => {
    console.log("dataJson", dataJson, recommendedProductResponse);
    fetchRecommandedProduct()
      .then((response) => {
        console.log("fetch", response);
      })
      .catch((e: Error | AxiosError) => console.log(e));

    FetchProducts()
      .then((res) => {
        // console.log("fetch", res);
      })
      .catch((e: Error | AxiosError) => console.log(e));
  }, []);

  const handleCTABtn = (url: string) => {
    router.push({
      pathname: "",
    });
  };

  return (
    <>
      <HeaderComponent />
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {!loading && !error && response && (
        <CarouselComponent sectionData={filteredData("CarouselBlock")} />
      )}
      <div className="container lg:p-18">
        <div>Active Filter</div>
        <div>Showing 65 results</div>
        <div className="flex">
          <div className="flex-none h-max pr-8 mr-6 border-r-2 border-b-2">
            <div>Gender</div>
            <div className="flex items-center my-px">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4"
              />
              <label htmlFor="default-checkbox" className="ml-2">
                View All
              </label>
            </div>
            <div>
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4"
              />
              <label htmlFor="default-checkbox" className="ml-2">
                Male
              </label>
            </div>
            <div>
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4"
              />
              <label htmlFor="default-checkbox" className="ml-2">
                Female
              </label>
            </div>
          </div>
          <div className="flex-auto">
            <div className="">
              <div className="container mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-2">
                  {recommendedProductResponse.results.map((item: any) => {
                    return (
                      <div
                        className="bg-color m-3 p-9"
                        key={item?.contentLink?.id}
                      >
                        <style jsx>{`
                          .bg-color {
                            background-color: ${item?.backgroundColor?.value};
                          }
                        `}</style>
                        <div className="logo-img mb-3">
                          <img
                            className="h-auto max-w-full"
                            src={item?.imageTitle?.value?.url}
                            alt={item?.title?.value}
                          />
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-2">
                          <div className="pr-3 my-auto">
                            <img
                              className="h-auto w-auto"
                              src={item?.image?.value.url}
                            />
                          </div>
                          <div className="text-justify">
                            <div
                              dangerouslySetInnerHTML={{
                                __html: item?.description?.value,
                              }}
                            ></div>
                            <div
                              className="w-36 text-center blue-bg rounded text-white align-middle py-3 mt-5 font-bold"
                              onClick={() =>
                                handleCTABtn(item?.buttonUrl?.value)
                              }
                            >
                              {item?.buttonText?.value || "No Name"}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="flex gap-0.5 flex-wrap border-2">
              {dataJson.results.map((item: any) => {
                return (
                  <div
                    className="w-52 h-96 border-2"
                    key={item?.contentLink?.id}
                  >
                    <img src={item?.image?.value?.url} alt="" />
                    <div className="w-max rounded-xl px-2 py-0.5 bg-mckthingrey">
                      What ?
                    </div>
                    <div className="mckblue">{item?.name}</div>
                    <div
                      className="mcknormalgrey"
                      dangerouslySetInnerHTML={{
                        __html: item?.ingredients?.value,
                      }}
                    ></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
}

export default ProductListPage;
