import { render, screen, act, fireEvent } from '@testing-library/react';
import RecommendationalProduct from "@/components/recommendational_product";
import axios from "axios";
jest.mock("axios");

jest.mock("axios",()=>{
    return {
      all:jest.fn().mockResolvedValueOnce([
        {
            "data": {
                "contentLink": {
                    "id": 133
                },
                "name": "Foster & Thrive1",
                "url": null,
                "description": {
                    "value": "<p>You&rsquo;re in touch with your health, able to pinpoint what you need. With Foster &amp; Thrive, you can easily target and treat your precise needs.</p>",
                },
                "image": {
                    "value": {
                      "id": 214,
                      "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/allergy_relief-.png",
                      "expanded": null
                    }
                },
                "imageTitle": {
                    "value": {
                      "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/ft_logo_acute.png",
                    }
                },
                "buttonText": {
                    "value": "SEE PRODUCTS"
                },
                "buttonUrl": {
                    "value": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/product-category/landing-page/",
                },
                "backgroundColor": {
                    "value": "#CCD1E3",
                    "propertyDataType": "PropertyLongString"
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

describe('RecommendationalProduct - Display values from CMS', () => {
  test('Render recommendational product compontent', async () => {
    await act(async () => {
      render(<RecommendationalProduct sectionData={categoryProps} />);
    });
    expect(screen.getByText('You’re in touch with your health, able to pinpoint what you need. With Foster & Thrive, you can easily target and treat your precise needs.')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button'));
  });
});

const categoryProps = [
    {
      "contentBlockArea": {
        "value": [
          {"contentLink": {"id": 133}}, 
          {"contentLink": {"id": 134}}
        ]
      }
    }
];
