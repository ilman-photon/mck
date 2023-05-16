import { render, screen, act } from '@testing-library/react';
import ContactUsComponent from "@/components/contactus/ContactUsComponent";
import axios from "axios";
import { contactUsData } from './__mocks__/contact_us';
jest.mock("axios");


describe('ContactUsComponent - Display values from CMS', () => {
  beforeEach(() => {
    axios.get.mockResolvedValue( {data: contactUsData} );
  });

  test('Display values from CMS', async () => {
    await act(async () => {
      render(<ContactUsComponent />);
    });
    expect(screen.getByText('We are here to help!')).toBeInTheDocument();
    expect(screen.getByText('Contact Information')).toBeInTheDocument();
    expect(screen.getByText('For medical inquiries, to report an adverse event, or a product complaint:')).toBeInTheDocument();
    expect(screen.getByText('833-358-6431')).toBeInTheDocument();
    expect(screen.getByText('Strategic Sourcing Services LLC')).toBeInTheDocument();
    expect(screen.getByText('Hours of Operation')).toBeInTheDocument();
    expect(screen.getByText('9:00am to 7:00pm ET (6:00am to 4:00pm PT) Monday - Friday')).toBeInTheDocument();
    expect(screen.getByText('Email Support')).toBeInTheDocument();
    expect(screen.getByText('Company Address')).toBeInTheDocument();
    expect(screen.getByText('4835 Crumpler Rd. Suite C, Memphis, TN 38141')).toBeInTheDocument();
    expect(screen.getByText('Here’s What You Can Do')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Where to Buy')).toBeInTheDocument();
    expect(screen.getByText('FAQ')).toBeInTheDocument();
    expect(screen.getByText('Privacy Notice')).toBeInTheDocument();
    //expect(screen.getByText('Disclaimer: his phone number or email is NOT for emergency use. Please call 911 or your healthcare provider if you need emergency assistance.')).toBeInTheDocument();
  });
});
