import { render, screen, act } from '@testing-library/react';
import ProductListComponent from "@/components/product_list";
import axios from "axios";
import { productCategoryData, productFilter, productListData, recommendedProductListData } from './__mocks__/product_list';
jest.mock("axios");

jest.mock('next/router', () => {
    return {
      useRouter:jest.fn()
    }
  });

describe('ProductListComponent - Display values from CMS', () => {
  beforeEach(() => {
    axios.get.mockResolvedValue( {data: productFilter} );
    axios.get.mockResolvedValue( {data: recommendedProductListData} );
    axios.get.mockResolvedValue( {data: productCategoryData} );
    axios.get.mockResolvedValue( {data: productListData} );
  });

  test('Render product list component', async () => {
    await act(async () => {
      render(<ProductListComponent />);
    });
    expect(screen.getByText('Acute Care')).toBeInTheDocument();
  });
});
