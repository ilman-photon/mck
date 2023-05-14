import { render, screen, act } from '@testing-library/react';
import PromotionalTextComponent from "@/components/promotional_text";
import axios from "axios";
jest.mock("axios");

describe('PromotionalTextComponent - Display values from CMS', () => {
  beforeEach(() => {
    axios.get.mockResolvedValue( {data: sectionData} );
  });

  test('Render promotional text compontent', async () => {
    await act(async () => {
      render(<PromotionalTextComponent sectionData={sectionData} />);
    });
    expect(screen.getByText('Products worthy of you and yours')).toBeInTheDocument();
    expect(screen.getByText('When it comes to caring for those you love, you need products that you can trust to help heal and thrive. At Foster & Thrive, consistent quality and efficiency is our top priority.')).toBeInTheDocument();
  });
});

const sectionData = [
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
    }
  ]
