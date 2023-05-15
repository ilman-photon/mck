import { render, act } from '@testing-library/react';
import WhyFT from "@/pages/why_FT";
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

describe('WhyFT page - Display values from CMS', () => {
    test('Render WhyFT page', async () => {
        await act(async () => {
            render(<WhyFT />);
        });
    });
});
