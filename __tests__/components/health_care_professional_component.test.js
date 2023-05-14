import { render, screen, act } from '@testing-library/react';
import HealthCareProfessional from "@/components/health_care_professional";

describe('HealthCareProfessional Component', () => {
  test('Render Health Care Professional Component', async () => {
    await act(async () => {
      render(<HealthCareProfessional />);
    });
    expect(screen.getByText('What people are saying:')).toBeInTheDocument();
    expect(screen.getByText(`We consider every aspect of your customers' journey, in and out of the store, so we've thoughtfully crafted four product categories to help your patients find the items they need:`)).toBeInTheDocument();
  });
});
