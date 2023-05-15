import { render, screen, act } from '@testing-library/react';
import PdpDetails from "@/components/pdp_details";
import axios from "axios";
jest.mock("axios");

describe('PDP compontent - Display values from CMS', () => {
    beforeEach(() => {
        axios.get.mockResolvedValue({
            "responceValue": {
                "title": {
                    "value": "<h1><span class=\"ui-provider gr b c d e f g h i j k l m n o p q r s t u v w x y z ab ac ae af ag ah ai aj ak\" dir=\"ltr\">Foster &amp; Thrive</span></h1>\n<h1><span class=\"ui-provider gr b c d e f g h i j k l m n o p q r s t u v w x y z ab ac ae af ag ah ai aj ak\" dir=\"ltr\">Vitamin D3</span></h1>\n<h2><span class=\"ui-provider gr b c d e f g h i j k l m n o p q r s t u v w x y z ab ac ae af ag ah ai aj ak\" dir=\"ltr\">50 mcg (2000 IU)</span></h2>\n<h2><span class=\"ui-provider gr b c d e f g h i j k l m n o p q r s t u v w x y z ab ac ae af ag ah ai aj ak\" dir=\"ltr\">Strong Bones &amp; Immune Support*</span></h2>",
                },
                "subTitle": {
                    "value": "<p>Liquid Filled | Rapid Release<br />Gluten Free</p>\n<p>Dietary supplement</p>",
                },
                "volume": {
                    "value": "<p>100 SOFTGELS</p>",
                },
                "description": {
                    "value": "<ul>\n<li>IMMUNE SUPPORT (1): Vitamin D3 is an essential nutrient for immune support. (1) Each serving contains 2000 IU of Vitamin D for immune benefits and may assist the immune system by helping to regulate T and B-lymphocytes (1)</li>\n<li>SUPPORTS STRONG BONES (1): In addition to immune support, getting a sufficient amount of Vitamin D is critical to building and maintaining strong bones in adults. (1) It is essential for calcium absorption to help support healthy bones (1)</li>\n<li>YEAR-ROUND SUPPORT: Vitamin D3 supplements contain the same form of Vitamin D that is naturally formed in the body through exposure to sunshine. Nature&rsquo;s Bounty Vitamin D3 helps support the production of Vitamin D all year long (1)</li>\n<li>NON-GMO FORMULA: Nature&rsquo;s Bounty Vitamin D3 Softgels are non-GMO, gluten- and sugar-free, and contain no artificial colors or sweeteners</li>\n<li>UNSURPASSED QUALITY AND VALUE: Using the latest breakthroughs in nutritional science and the finest ingredients, Nature&rsquo;s Bounty provides supplements of unsurpassed quality and valueA</li>\n</ul>",
                },
                "ingredients": {
                    "value": "<p>Vitamin D3, Soybean Oil, Gelatin, Glycerin, Water, Corn Oil.</p>",
                },
                "warnings": {
                    "value": "<p>Vitamin D3, Soybean Oil, Gelatin, Glycerin, Water, Corn Oil.</p>",
                },
            }
        });
    });

    test('Render PDP compontent', async () => {
        await act(async () => {
            render(<PdpDetails />);
        });
    });
});
