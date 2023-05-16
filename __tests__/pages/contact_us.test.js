import { render, screen, act } from '@testing-library/react';
import ContactUs from "@/pages/contact_us";
import axios from "axios";
import { footerData } from '../components/__mocks__/footer';
import { contactUsData } from '../components/__mocks__/contact_us';
jest.mock("axios");

jest.mock("next/router", () => {
    return {
      useRouter: jest.fn(),
    };
});

beforeAll(() => {
    axios.get.mockResolvedValue({ data: footerData });
})

describe('ContactUs page - Display values from CMS', () => {
    beforeEach(() => {
        axios.get.mockResolvedValue( {data: contactUsData} );
    });

    test('Render contact us page', async () => {
        await act(async () => {
            render(<ContactUs />);
        });
    });
});
