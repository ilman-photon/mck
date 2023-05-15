import { render, screen, act } from '@testing-library/react';
import ProductDetail from "@/pages/product_detail";
import axios from "axios";
import { footerData } from '../components/__mocks__/footer';
jest.mock("axios");

jest.mock("next/router", () => {
    return {
      useRouter: jest.fn(),
    };
});

beforeAll(() => {
    axios.get.mockResolvedValue({ data: footerData });
})

describe('ProductDetail page - Display values from CMS', () => {
    test('Render product detail page', async () => {
        await act(async () => {
            render(<ProductDetail />);
        });
    });
});
