import { render, screen, act } from '@testing-library/react';
import HealthCareProfessional from "@/pages/health_care_professional";
import axios from "axios";
jest.mock("axios");

jest.mock('next/router', () => {
    return {
      useRouter:jest.fn()
    }
});

describe('HealthCareProfessional - Display values from CMS', () => {

    test('Render Health Care Professional Page', async () => {
        await act(async () => {
        render(<HealthCareProfessional />);
        });
        
        expect(screen.getByText('What people are saying:')).toBeInTheDocument();
        expect(screen.getByText(`We consider every aspect of your customers' journey, in and out of the store, so we've thoughtfully crafted four product categories to help your patients find the items they need:`)).toBeInTheDocument();
    });
});
