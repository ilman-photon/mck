import { render, screen, act } from '@testing-library/react';
import AllProductCategoryPage from "@/pages/all_product_category";
import axios from "axios";
import { acuteCareData, diagnosticCareData, everyDayCareData, preventiveCareData, productFilter } from '../components/__mocks__/all_product_category';
jest.mock("axios");

jest.mock('next/router', () => {
  return {
    useRouter:jest.fn()
  }
});

describe('AllProductCategory - Display values from CMS', () => {
  beforeEach(() => {
    axios.get.mockResolvedValue( {data: acuteCareData} );
    axios.get.mockResolvedValue( {data: preventiveCareData} );
    axios.get.mockResolvedValue( {data: everyDayCareData} );
    axios.get.mockResolvedValue( {data: diagnosticCareData} );
    axios.get.mockResolvedValue( {data: productFilter} );
  });

  test('Render All Product Category', async () => {
    await act(async () => {
      render(<AllProductCategoryPage />);
    });
    expect(screen.getByText('Acute Care')).toBeInTheDocument();
    expect(screen.getByText('Preventive Care')).toBeInTheDocument();
    expect(screen.getByText('Every Day Care')).toBeInTheDocument();
    expect(screen.getByText('Diagnostic Care')).toBeInTheDocument();
  });
});
