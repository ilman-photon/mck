import { render, screen, act } from '@testing-library/react';
import CategoryComponent from "@/components/category/index1.js";
import axios from "axios";
jest.mock("axios");

jest.mock("axios",()=>{
  return {
    all:jest.fn().mockResolvedValueOnce([
      {
        "data": {
          "contentLink": {
            "id": "528"
          },
          "name": "Explore Acute Care",
          "productCategoryDescription": {
            "value": "<p> Products to care for your specific symptoms.</p>"
          },
          "backgroundColor": {
            "value": "#ccc"
          },
          "productCategoryImage": {
            "value": {
              "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/everyday_care_200x200_new.png"
            }
          }
        }
      }
    ]),
    get:jest.fn(() => Promise.resolve({ data: {} }))
  }
});

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
    expect(screen.getByText('Explore Acute Care')).toBeInTheDocument();
    expect(screen.getByText('Products to care for your specific symptoms.')).toBeInTheDocument();
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
