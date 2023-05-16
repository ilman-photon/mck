import { render, screen, act } from '@testing-library/react';
import SearchResults from "@/pages/search_results";
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

describe('SearchResults page - Display values from CMS', () => {
    test('Render search results page', async () => {
        await act(async () => {
            render(<SearchResults />);
        });
    });
});
