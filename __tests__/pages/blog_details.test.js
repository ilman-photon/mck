import { render, screen, act } from '@testing-library/react';
import BlogDetailsComponent from "@/components/blog_details/BlogDetailsComponent";
import axios from "axios";
jest.mock("axios");


describe('BlogDetailsComponent - Display values from CMS', () => {
    beforeEach(() => {
        axios.get.mockResolvedValue({ data: contactUsData });
    });

    test('Display values from CMS', async () => {
        await act(async () => {
            render(<BlogDetailsComponent />);
        });
        expect(screen.getByText('Are your medications causing you to lose nutrients?')).toBeInTheDocument();
    });
});



const contactUsData =[
    {
        "contentLink": {
            "id": 408,
            "workId": 0,
            "guidValue": "622fe0a9-cdb9-48a3-a8d2-1aedb66ec1b4",
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/blog/blog-page-are-your-medications-causing-you-to-lose-nutrients/",
            "expanded": null
        },
        "name": "Are your medications causing you to lose nutrients 3?",
        "language": {
            "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/blog/blog-page-are-your-medications-causing-you-to-lose-nutrients/",
            "displayName": "English",
            "name": "en"
        },
        "existingLanguages": [
            {
                "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/blog/blog-page-are-your-medications-causing-you-to-lose-nutrients/",
                "displayName": "English",
                "name": "en"
            }
        ],
        "masterLanguage": {
            "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/blog/blog-page-are-your-medications-causing-you-to-lose-nutrients/",
            "displayName": "English",
            "name": "en"
        },
        "contentType": [
            "Page",
            "BlogPage"
        ],
        "parentLink": {
            "id": 407,
            "workId": 0,
            "guidValue": "27e1173d-fad0-485a-bc68-13bc9e9a2acc",
            "providerName": null,
            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/blog/",
            "expanded": null
        },
        "routeSegment": "blog-page-are-your-medications-causing-you-to-lose-nutrients",
        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/blog/blog-page-are-your-medications-causing-you-to-lose-nutrients/",
        "changed": "2023-04-27T08:44:26Z",
        "created": "2023-04-27T08:42:03Z",
        "startPublish": "2023-04-27T08:44:26Z",
        "stopPublish": null,
        "saved": "2023-05-12T15:49:31Z",
        "status": "Published",
        "category": {
            "value": [],
            "propertyDataType": "PropertyCategory"
        },
        "title": {
            "value": "Are your medications causing you to lose nutrients 3?",
            "propertyDataType": "PropertyLongString"
        },
        "pageTitle": {
            "value": "",
            "propertyDataType": "PropertyLongString"
        },
        "description": {
            "value": "<p><span style=\"white-space: pre-wrap;\">Central Fill as a Service can help retail and mail-order pharmacies save time, minimize mistakes, cut costs and improve adherence rates, with little to no upfront costs. This article explores Central Fill as a Service benefits and explains how CoverMyMeds can help pharmacies improve medication access, adherence and, ultimately, patient care.<br /><br />The COVID-19 pandemic transformed the way patients interact with pharmacists. As stay-at-home orders led telehealth&rsquo;s popularity to skyrocket, pharmacists had to take on increased patient care roles while also supporting government initiatives to control the pandemic and ensuring patients continued to receive their prescriptions.[1]<br /><br />According to a recent study, nearly 9 in 10 pharmacists were found to be at high risk for burnout due to the pandemic &mdash; feelings attributed to staffing and scheduling issues, precepting requirements and rising patient needs.[2]<br /><br />Central Fill as a Service can help alleviate some pressure while improving efficiencies. Instead of relying on the traditional central fill model that requires significant upfront investment, Central Fill as a Service is available to pharmacies through a per-prescription fee that can dramatically reduce the pharmacy&rsquo;s per-prescription cost.<br /><br />Overall, Central Fill as a Service can help pharmacies and pharmacists save time, minimize mistakes, cut costs and improve adherence rates. Let&rsquo;s explore each benefit in more depth.</span></p>\n<p><span style=\"white-space: pre-wrap;\"><video style=\"width: 694px; height: 347px;\" controls=\"controls\" width=\"660\" height=\"330\"> <source src=\"https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/samplevideo_1280x720_1mb.mp4\"></source></video></span></p>\n<h2><span style=\"white-space: pre-wrap;\"><a id=\"Section1\"></a>Benefit 1: Save time to focus on other priorities</span></h2>\n<p><span style=\"white-space: pre-wrap;\">Pharmacists&rsquo; <a href=\"https://www.google.com\">to-do lists are increasingly long</a>, growing beyond traditionally associated tasks like preparing and packaging prescription medications for patients. Now, they may also be expected to conduct health and wellness screenings, give immunizations and offer advice on healthy lifestyles.[3]<br /><br />If pharmacists can reduce or even eliminate the time it takes to count and dispense pills, they can instead focus on population health and experience of care.<br /><br />Central Fill as a Service connects pharmacies to central fill facilities where medicine is dispensed through automation technology and intelligent pharmacy control software to enable efficient prescription fulfillment.<br /><br />Once filled, the prescriptions are quickly verified and shipped directly to patients&rsquo; homes or their local pharmacies through advanced routing algorithms. With Central Fill as a Service on their side, pharmacists can save time on their traditional responsibilities and help more patients at the pharmacy counter &mdash; a benefit for both parties.</span></p>\n<blockquote>\n<p><span style=\"white-space: pre-wrap;\">&ldquo;Central Fill as a Service systems boast accuracy thanks to robotic filling&rdquo;.</span></p>\n</blockquote>\n<h3><span style=\"white-space: pre-wrap;\">Benefit 2: Minimize mistakes like medication errors</span></h3>\n<p><span style=\"white-space: pre-wrap;\">The three most common manual dispensing errors include:</span></p>\n<ul>\n<li><span style=\"white-space: pre-wrap;\">Dispensing an incorrect medication, dosage strength or dosage form</span></li>\n<li><span style=\"white-space: pre-wrap;\">Miscalculating a dose, and</span></li>\n<li><span style=\"white-space: pre-wrap;\">Failing to identify drug interactions or contraindications[4]</span></li>\n</ul>\n<p><span style=\"white-space: pre-wrap;\"> Each year 7,000 to 9,000 people die due to prescribing and/or dispensing errors in the U.S. Additionally, the total cost of looking after patients affected by those medication<img style=\"float: left;\" src=\"https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/acute-care-1.png\" alt=\"\" width=\"113\" height=\"150\" />associated errors exceeds $40 billion each year, with over 7 million patients affected.[5]<br />Central Fill as a Service, by design, focuses on safety and accuracy </span></p>\n<p>&nbsp;</p>\n<p>&nbsp;</p>\n<p><span style=\"white-space: pre-wrap;\">through robotic filling. Additionally, several safety measures are in place such as vision technology, scales, barcodes and RFID technology to ensure accuracy. The goal result is always right patient, right medication, and right dosage &mdash; with zero mistakes.</span></p>\n<h3><span style=\"white-space: pre-wrap;\">Benefit 3: Cut costs by paying a per-prescription fee</span></h3>\n<p><span style=\"white-space: pre-wrap;\">Central Fill as a Service doesn&rsquo;t only help save time and minimize mistakes, it can also provide cost savings for the pharmacy.<br />While automated dispensing is nothing new, pharmacies using traditional central fill models must pay upfront capital costs and ongoing fees for equipment, staffing and medication inventory, which prevents many retail and mail-order pharmacies from benefiting from these services. But now, pharmacies that might otherwise deem central fill unaffordable can also enjoy its rewards.<br /><br />By using Central Fill as a Service capabilities, pharmacies simply pay per prescription so they can decide which prescriptions to fill in-store and which to outsource to the central facility &mdash; a process that can save money and reduce inventory.<br />Convenient access through central fill can translate to better medication adherence.</span></p>\n<h3><span style=\"white-space: pre-wrap;\">Benefit 4: Improve adherence to enhance patient outcomes</span></h3>\n<table style=\"border-collapse: collapse; width: 100%;\" border=\"1\"><colgroup><col style=\"width: 50.0741%;\" /><col style=\"width: 50.0741%;\" /></colgroup>\n<tbody>\n<tr>\n<td><img src=\"https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/adhesive-bandages.png\" alt=\"\" width=\"250\" height=\"379\" /></td>\n<td><span style=\"white-space: pre-wrap;\">Medication adherence rates are low &mdash; only about 50% of U.S. patients take drugs exactly as prescribed. Additionally, nonadherence can account for up to 50% of treatment failures, around 125,000 deaths and up to 25% of hospitalizations each year in the U.S.[6]<br /><br />Since Central Fill as a Service helps free pharmacists to focus on other tasks, they can spend more time counseling patients on the importance of medication adherence and educating them on best practices for taking their prescription medications.<br />With an aging population on the rise, medication adherence is more important than ever. Nearly 95% percent of people over 65 have at least one chronic condition, and nearly 80% of have two or more.[7]<br />Many treatments for those chronic conditions overlap, which makes medication side effects and interactions even more likely. Fortunately, convenient access through central fill can translate to better medication adherence and, in turn, </span></td>\n</tr>\n</tbody>\n</table>\n<p><span style=\"white-space: pre-wrap;\">improved patient outcomes by enabling more patient counseling and education at the pharmacy counter.</span></p>\n<h3><span style=\"white-space: pre-wrap;\">Central Fill as a Service can propel retail and mail-order pharmacies into the future</span></h3>\n<p><span style=\"white-space: pre-wrap;\">CoverMyMeds&rsquo; mission is to help people get the medicine they need to live healthier lives. One of the ways we do that is through solutions that enable a variety of central fill opportunities. Central Fill as a Service is a CoverMyMeds-operated, centralized solution that allows retail and mail-order pharmacies to benefit from central fill automation and industry expertise without a major upfront investment.<br /><br />Our central fill offerings, including Central Fill as a Service, are helping provide better medication access, adherence and convenience for patients &mdash; wherever they are, whenever they need it.<br /><br />These offerings, which are managed by Sanitas pharmacy control software, support the entire pharmacy ecosystem. They provide a flexible model that brings value to pharmacies and their patients, and does so safely, more quickly and more reliably.<br />We&rsquo;ve spent 35 years innovating and providing a variety of solutions to pharmacies that allow them to leverage our scale and industry-specific expertise. Our customers can rely on us to set up their Central Fill as a Service pay-per-script systems in a way that helps them not only grow, but also meet the ever changing needs of today&rsquo;s patients.<br />To learn more about CoverMyMeds&rsquo; Central Fill as a Service solution, contact <a href=\"mailto:automation-info@covermymeds.com\">automation-info@covermymeds.com</a>.</span></p>\n<p><strong><span style=\"white-space: pre-wrap;\">Sources</span></strong></p>\n<ol>\n<li><a href=\"https://www.google.com\"><span style=\"white-space: pre-wrap;\">How COVID-19 has impacted the role of pharmacists around the world, National Library of Medicine, Feb. 22, 2021</span></a></li>\n<li><span style=\"white-space: pre-wrap;\">The Striking, Startling Realities of Pharmacist Burnout, University of Illinois Chicago, Dec. 6, 2022</span></li>\n</ol>",
            "propertyDataType": "PropertyXhtmlString"
        },
        "metaDescription": {
            "value": "",
            "propertyDataType": "PropertyLongString"
        },
        "relatedArticle": {
            "expandedValue": [
                {
                    "contentLink": {
                        "id": 408,
                        "workId": 0,
                        "guidValue": "622fe0a9-cdb9-48a3-a8d2-1aedb66ec1b4",
                        "providerName": null,
                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/blog/blog-page-are-your-medications-causing-you-to-lose-nutrients/",
                        "expanded": null
                    },
                    "name": "Are your medications causing you to lose nutrients 3?",
                    "language": {
                        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/blog/blog-page-are-your-medications-causing-you-to-lose-nutrients/",
                        "displayName": "English",
                        "name": "en"
                    },
                    "existingLanguages": [
                        {
                            "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/blog/blog-page-are-your-medications-causing-you-to-lose-nutrients/",
                            "displayName": "English",
                            "name": "en"
                        }
                    ],
                    "masterLanguage": {
                        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/blog/blog-page-are-your-medications-causing-you-to-lose-nutrients/",
                        "displayName": "English",
                        "name": "en"
                    },
                    "contentType": [
                        "Page",
                        "BlogPage"
                    ],
                    "parentLink": {
                        "id": 407,
                        "workId": 0,
                        "guidValue": "27e1173d-fad0-485a-bc68-13bc9e9a2acc",
                        "providerName": null,
                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/blog/",
                        "expanded": null
                    },
                    "routeSegment": "blog-page-are-your-medications-causing-you-to-lose-nutrients",
                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/blog/blog-page-are-your-medications-causing-you-to-lose-nutrients/",
                    "changed": "2023-04-27T08:44:26Z",
                    "created": "2023-04-27T08:42:03Z",
                    "startPublish": "2023-04-27T08:44:26Z",
                    "stopPublish": null,
                    "saved": "2023-05-12T15:49:31Z",
                    "status": "Published",
                    "category": {
                        "value": [],
                        "propertyDataType": "PropertyCategory"
                    },
                    "title": {
                        "value": "Are your medications causing you to lose nutrients 3?",
                        "propertyDataType": "PropertyLongString"
                    },
                    "pageTitle": {
                        "value": "",
                        "propertyDataType": "PropertyLongString"
                    },
                    "description": {
                        "value": "<p><span style=\"white-space: pre-wrap;\">Central Fill as a Service can help retail and mail-order pharmacies save time, minimize mistakes, cut costs and improve adherence rates, with little to no upfront costs. This article explores Central Fill as a Service benefits and explains how CoverMyMeds can help pharmacies improve medication access, adherence and, ultimately, patient care.<br /><br />The COVID-19 pandemic transformed the way patients interact with pharmacists. As stay-at-home orders led telehealth&rsquo;s popularity to skyrocket, pharmacists had to take on increased patient care roles while also supporting government initiatives to control the pandemic and ensuring patients continued to receive their prescriptions.[1]<br /><br />According to a recent study, nearly 9 in 10 pharmacists were found to be at high risk for burnout due to the pandemic &mdash; feelings attributed to staffing and scheduling issues, precepting requirements and rising patient needs.[2]<br /><br />Central Fill as a Service can help alleviate some pressure while improving efficiencies. Instead of relying on the traditional central fill model that requires significant upfront investment, Central Fill as a Service is available to pharmacies through a per-prescription fee that can dramatically reduce the pharmacy&rsquo;s per-prescription cost.<br /><br />Overall, Central Fill as a Service can help pharmacies and pharmacists save time, minimize mistakes, cut costs and improve adherence rates. Let&rsquo;s explore each benefit in more depth.</span></p>\n<p><span style=\"white-space: pre-wrap;\"><video style=\"width: 694px; height: 347px;\" controls=\"controls\" width=\"660\" height=\"330\"> <source src=\"https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/samplevideo_1280x720_1mb.mp4\"></source></video></span></p>\n<h2><span style=\"white-space: pre-wrap;\"><a id=\"Section1\"></a>Benefit 1: Save time to focus on other priorities</span></h2>\n<p><span style=\"white-space: pre-wrap;\">Pharmacists&rsquo; <a href=\"https://www.google.com\">to-do lists are increasingly long</a>, growing beyond traditionally associated tasks like preparing and packaging prescription medications for patients. Now, they may also be expected to conduct health and wellness screenings, give immunizations and offer advice on healthy lifestyles.[3]<br /><br />If pharmacists can reduce or even eliminate the time it takes to count and dispense pills, they can instead focus on population health and experience of care.<br /><br />Central Fill as a Service connects pharmacies to central fill facilities where medicine is dispensed through automation technology and intelligent pharmacy control software to enable efficient prescription fulfillment.<br /><br />Once filled, the prescriptions are quickly verified and shipped directly to patients&rsquo; homes or their local pharmacies through advanced routing algorithms. With Central Fill as a Service on their side, pharmacists can save time on their traditional responsibilities and help more patients at the pharmacy counter &mdash; a benefit for both parties.</span></p>\n<blockquote>\n<p><span style=\"white-space: pre-wrap;\">&ldquo;Central Fill as a Service systems boast accuracy thanks to robotic filling&rdquo;.</span></p>\n</blockquote>\n<h3><span style=\"white-space: pre-wrap;\">Benefit 2: Minimize mistakes like medication errors</span></h3>\n<p><span style=\"white-space: pre-wrap;\">The three most common manual dispensing errors include:</span></p>\n<ul>\n<li><span style=\"white-space: pre-wrap;\">Dispensing an incorrect medication, dosage strength or dosage form</span></li>\n<li><span style=\"white-space: pre-wrap;\">Miscalculating a dose, and</span></li>\n<li><span style=\"white-space: pre-wrap;\">Failing to identify drug interactions or contraindications[4]</span></li>\n</ul>\n<p><span style=\"white-space: pre-wrap;\"> Each year 7,000 to 9,000 people die due to prescribing and/or dispensing errors in the U.S. Additionally, the total cost of looking after patients affected by those medication<img style=\"float: left;\" src=\"https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/acute-care-1.png\" alt=\"\" width=\"113\" height=\"150\" />associated errors exceeds $40 billion each year, with over 7 million patients affected.[5]<br />Central Fill as a Service, by design, focuses on safety and accuracy </span></p>\n<p>&nbsp;</p>\n<p>&nbsp;</p>\n<p><span style=\"white-space: pre-wrap;\">through robotic filling. Additionally, several safety measures are in place such as vision technology, scales, barcodes and RFID technology to ensure accuracy. The goal result is always right patient, right medication, and right dosage &mdash; with zero mistakes.</span></p>\n<h3><span style=\"white-space: pre-wrap;\">Benefit 3: Cut costs by paying a per-prescription fee</span></h3>\n<p><span style=\"white-space: pre-wrap;\">Central Fill as a Service doesn&rsquo;t only help save time and minimize mistakes, it can also provide cost savings for the pharmacy.<br />While automated dispensing is nothing new, pharmacies using traditional central fill models must pay upfront capital costs and ongoing fees for equipment, staffing and medication inventory, which prevents many retail and mail-order pharmacies from benefiting from these services. But now, pharmacies that might otherwise deem central fill unaffordable can also enjoy its rewards.<br /><br />By using Central Fill as a Service capabilities, pharmacies simply pay per prescription so they can decide which prescriptions to fill in-store and which to outsource to the central facility &mdash; a process that can save money and reduce inventory.<br />Convenient access through central fill can translate to better medication adherence.</span></p>\n<h3><span style=\"white-space: pre-wrap;\">Benefit 4: Improve adherence to enhance patient outcomes</span></h3>\n<table style=\"border-collapse: collapse; width: 100%;\" border=\"1\"><colgroup><col style=\"width: 50.0741%;\" /><col style=\"width: 50.0741%;\" /></colgroup>\n<tbody>\n<tr>\n<td><img src=\"https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/adhesive-bandages.png\" alt=\"\" width=\"250\" height=\"379\" /></td>\n<td><span style=\"white-space: pre-wrap;\">Medication adherence rates are low &mdash; only about 50% of U.S. patients take drugs exactly as prescribed. Additionally, nonadherence can account for up to 50% of treatment failures, around 125,000 deaths and up to 25% of hospitalizations each year in the U.S.[6]<br /><br />Since Central Fill as a Service helps free pharmacists to focus on other tasks, they can spend more time counseling patients on the importance of medication adherence and educating them on best practices for taking their prescription medications.<br />With an aging population on the rise, medication adherence is more important than ever. Nearly 95% percent of people over 65 have at least one chronic condition, and nearly 80% of have two or more.[7]<br />Many treatments for those chronic conditions overlap, which makes medication side effects and interactions even more likely. Fortunately, convenient access through central fill can translate to better medication adherence and, in turn, </span></td>\n</tr>\n</tbody>\n</table>\n<p><span style=\"white-space: pre-wrap;\">improved patient outcomes by enabling more patient counseling and education at the pharmacy counter.</span></p>\n<h3><span style=\"white-space: pre-wrap;\">Central Fill as a Service can propel retail and mail-order pharmacies into the future</span></h3>\n<p><span style=\"white-space: pre-wrap;\">CoverMyMeds&rsquo; mission is to help people get the medicine they need to live healthier lives. One of the ways we do that is through solutions that enable a variety of central fill opportunities. Central Fill as a Service is a CoverMyMeds-operated, centralized solution that allows retail and mail-order pharmacies to benefit from central fill automation and industry expertise without a major upfront investment.<br /><br />Our central fill offerings, including Central Fill as a Service, are helping provide better medication access, adherence and convenience for patients &mdash; wherever they are, whenever they need it.<br /><br />These offerings, which are managed by Sanitas pharmacy control software, support the entire pharmacy ecosystem. They provide a flexible model that brings value to pharmacies and their patients, and does so safely, more quickly and more reliably.<br />We&rsquo;ve spent 35 years innovating and providing a variety of solutions to pharmacies that allow them to leverage our scale and industry-specific expertise. Our customers can rely on us to set up their Central Fill as a Service pay-per-script systems in a way that helps them not only grow, but also meet the ever changing needs of today&rsquo;s patients.<br />To learn more about CoverMyMeds&rsquo; Central Fill as a Service solution, contact <a href=\"mailto:automation-info@covermymeds.com\">automation-info@covermymeds.com</a>.</span></p>\n<p><strong><span style=\"white-space: pre-wrap;\">Sources</span></strong></p>\n<ol>\n<li><a href=\"https://www.google.com\"><span style=\"white-space: pre-wrap;\">How COVID-19 has impacted the role of pharmacists around the world, National Library of Medicine, Feb. 22, 2021</span></a></li>\n<li><span style=\"white-space: pre-wrap;\">The Striking, Startling Realities of Pharmacist Burnout, University of Illinois Chicago, Dec. 6, 2022</span></li>\n</ol>",
                        "propertyDataType": "PropertyXhtmlString"
                    },
                    "metaDescription": {
                        "value": "",
                        "propertyDataType": "PropertyLongString"
                    },
                    "relatedArticle": {
                        "expandedValue": [
                            {
                                "contentLink": {
                                    "id": 408,
                                    "workId": 0,
                                    "guidValue": "622fe0a9-cdb9-48a3-a8d2-1aedb66ec1b4",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/blog/blog-page-are-your-medications-causing-you-to-lose-nutrients/",
                                    "expanded": null
                                },
                                "name": "Are your medications causing you to lose nutrients 3?",
                                "language": {
                                    "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/blog/blog-page-are-your-medications-causing-you-to-lose-nutrients/",
                                    "displayName": "English",
                                    "name": "en"
                                },
                                "existingLanguages": [
                                    {
                                        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/blog/blog-page-are-your-medications-causing-you-to-lose-nutrients/",
                                        "displayName": "English",
                                        "name": "en"
                                    }
                                ],
                                "masterLanguage": {
                                    "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/blog/blog-page-are-your-medications-causing-you-to-lose-nutrients/",
                                    "displayName": "English",
                                    "name": "en"
                                },
                                "contentType": [
                                    "Page",
                                    "BlogPage"
                                ],
                                "parentLink": {
                                    "id": 407,
                                    "workId": 0,
                                    "guidValue": "27e1173d-fad0-485a-bc68-13bc9e9a2acc",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/blog/",
                                    "expanded": null
                                },
                                "routeSegment": "blog-page-are-your-medications-causing-you-to-lose-nutrients",
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/blog/blog-page-are-your-medications-causing-you-to-lose-nutrients/",
                                "changed": "2023-04-27T08:44:26Z",
                                "created": "2023-04-27T08:42:03Z",
                                "startPublish": "2023-04-27T08:44:26Z",
                                "stopPublish": null,
                                "saved": "2023-05-12T15:49:31Z",
                                "status": "Published",
                                "category": {
                                    "value": [],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "title": {
                                    "value": "Are your medications causing you to lose nutrients 3?",
                                    "propertyDataType": "PropertyLongString"
                                },
                                "pageTitle": {
                                    "value": "",
                                    "propertyDataType": "PropertyLongString"
                                },
                                "description": {
                                    "value": "<p><span style=\"white-space: pre-wrap;\">Central Fill as a Service can help retail and mail-order pharmacies save time, minimize mistakes, cut costs and improve adherence rates, with little to no upfront costs. This article explores Central Fill as a Service benefits and explains how CoverMyMeds can help pharmacies improve medication access, adherence and, ultimately, patient care.<br /><br />The COVID-19 pandemic transformed the way patients interact with pharmacists. As stay-at-home orders led telehealth&rsquo;s popularity to skyrocket, pharmacists had to take on increased patient care roles while also supporting government initiatives to control the pandemic and ensuring patients continued to receive their prescriptions.[1]<br /><br />According to a recent study, nearly 9 in 10 pharmacists were found to be at high risk for burnout due to the pandemic &mdash; feelings attributed to staffing and scheduling issues, precepting requirements and rising patient needs.[2]<br /><br />Central Fill as a Service can help alleviate some pressure while improving efficiencies. Instead of relying on the traditional central fill model that requires significant upfront investment, Central Fill as a Service is available to pharmacies through a per-prescription fee that can dramatically reduce the pharmacy&rsquo;s per-prescription cost.<br /><br />Overall, Central Fill as a Service can help pharmacies and pharmacists save time, minimize mistakes, cut costs and improve adherence rates. Let&rsquo;s explore each benefit in more depth.</span></p>\n<p><span style=\"white-space: pre-wrap;\"><video style=\"width: 694px; height: 347px;\" controls=\"controls\" width=\"660\" height=\"330\"> <source src=\"https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/samplevideo_1280x720_1mb.mp4\"></source></video></span></p>\n<h2><span style=\"white-space: pre-wrap;\"><a id=\"Section1\"></a>Benefit 1: Save time to focus on other priorities</span></h2>\n<p><span style=\"white-space: pre-wrap;\">Pharmacists&rsquo; <a href=\"https://www.google.com\">to-do lists are increasingly long</a>, growing beyond traditionally associated tasks like preparing and packaging prescription medications for patients. Now, they may also be expected to conduct health and wellness screenings, give immunizations and offer advice on healthy lifestyles.[3]<br /><br />If pharmacists can reduce or even eliminate the time it takes to count and dispense pills, they can instead focus on population health and experience of care.<br /><br />Central Fill as a Service connects pharmacies to central fill facilities where medicine is dispensed through automation technology and intelligent pharmacy control software to enable efficient prescription fulfillment.<br /><br />Once filled, the prescriptions are quickly verified and shipped directly to patients&rsquo; homes or their local pharmacies through advanced routing algorithms. With Central Fill as a Service on their side, pharmacists can save time on their traditional responsibilities and help more patients at the pharmacy counter &mdash; a benefit for both parties.</span></p>\n<blockquote>\n<p><span style=\"white-space: pre-wrap;\">&ldquo;Central Fill as a Service systems boast accuracy thanks to robotic filling&rdquo;.</span></p>\n</blockquote>\n<h3><span style=\"white-space: pre-wrap;\">Benefit 2: Minimize mistakes like medication errors</span></h3>\n<p><span style=\"white-space: pre-wrap;\">The three most common manual dispensing errors include:</span></p>\n<ul>\n<li><span style=\"white-space: pre-wrap;\">Dispensing an incorrect medication, dosage strength or dosage form</span></li>\n<li><span style=\"white-space: pre-wrap;\">Miscalculating a dose, and</span></li>\n<li><span style=\"white-space: pre-wrap;\">Failing to identify drug interactions or contraindications[4]</span></li>\n</ul>\n<p><span style=\"white-space: pre-wrap;\"> Each year 7,000 to 9,000 people die due to prescribing and/or dispensing errors in the U.S. Additionally, the total cost of looking after patients affected by those medication<img style=\"float: left;\" src=\"https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/acute-care-1.png\" alt=\"\" width=\"113\" height=\"150\" />associated errors exceeds $40 billion each year, with over 7 million patients affected.[5]<br />Central Fill as a Service, by design, focuses on safety and accuracy </span></p>\n<p>&nbsp;</p>\n<p>&nbsp;</p>\n<p><span style=\"white-space: pre-wrap;\">through robotic filling. Additionally, several safety measures are in place such as vision technology, scales, barcodes and RFID technology to ensure accuracy. The goal result is always right patient, right medication, and right dosage &mdash; with zero mistakes.</span></p>\n<h3><span style=\"white-space: pre-wrap;\">Benefit 3: Cut costs by paying a per-prescription fee</span></h3>\n<p><span style=\"white-space: pre-wrap;\">Central Fill as a Service doesn&rsquo;t only help save time and minimize mistakes, it can also provide cost savings for the pharmacy.<br />While automated dispensing is nothing new, pharmacies using traditional central fill models must pay upfront capital costs and ongoing fees for equipment, staffing and medication inventory, which prevents many retail and mail-order pharmacies from benefiting from these services. But now, pharmacies that might otherwise deem central fill unaffordable can also enjoy its rewards.<br /><br />By using Central Fill as a Service capabilities, pharmacies simply pay per prescription so they can decide which prescriptions to fill in-store and which to outsource to the central facility &mdash; a process that can save money and reduce inventory.<br />Convenient access through central fill can translate to better medication adherence.</span></p>\n<h3><span style=\"white-space: pre-wrap;\">Benefit 4: Improve adherence to enhance patient outcomes</span></h3>\n<table style=\"border-collapse: collapse; width: 100%;\" border=\"1\"><colgroup><col style=\"width: 50.0741%;\" /><col style=\"width: 50.0741%;\" /></colgroup>\n<tbody>\n<tr>\n<td><img src=\"https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/adhesive-bandages.png\" alt=\"\" width=\"250\" height=\"379\" /></td>\n<td><span style=\"white-space: pre-wrap;\">Medication adherence rates are low &mdash; only about 50% of U.S. patients take drugs exactly as prescribed. Additionally, nonadherence can account for up to 50% of treatment failures, around 125,000 deaths and up to 25% of hospitalizations each year in the U.S.[6]<br /><br />Since Central Fill as a Service helps free pharmacists to focus on other tasks, they can spend more time counseling patients on the importance of medication adherence and educating them on best practices for taking their prescription medications.<br />With an aging population on the rise, medication adherence is more important than ever. Nearly 95% percent of people over 65 have at least one chronic condition, and nearly 80% of have two or more.[7]<br />Many treatments for those chronic conditions overlap, which makes medication side effects and interactions even more likely. Fortunately, convenient access through central fill can translate to better medication adherence and, in turn, </span></td>\n</tr>\n</tbody>\n</table>\n<p><span style=\"white-space: pre-wrap;\">improved patient outcomes by enabling more patient counseling and education at the pharmacy counter.</span></p>\n<h3><span style=\"white-space: pre-wrap;\">Central Fill as a Service can propel retail and mail-order pharmacies into the future</span></h3>\n<p><span style=\"white-space: pre-wrap;\">CoverMyMeds&rsquo; mission is to help people get the medicine they need to live healthier lives. One of the ways we do that is through solutions that enable a variety of central fill opportunities. Central Fill as a Service is a CoverMyMeds-operated, centralized solution that allows retail and mail-order pharmacies to benefit from central fill automation and industry expertise without a major upfront investment.<br /><br />Our central fill offerings, including Central Fill as a Service, are helping provide better medication access, adherence and convenience for patients &mdash; wherever they are, whenever they need it.<br /><br />These offerings, which are managed by Sanitas pharmacy control software, support the entire pharmacy ecosystem. They provide a flexible model that brings value to pharmacies and their patients, and does so safely, more quickly and more reliably.<br />We&rsquo;ve spent 35 years innovating and providing a variety of solutions to pharmacies that allow them to leverage our scale and industry-specific expertise. Our customers can rely on us to set up their Central Fill as a Service pay-per-script systems in a way that helps them not only grow, but also meet the ever changing needs of today&rsquo;s patients.<br />To learn more about CoverMyMeds&rsquo; Central Fill as a Service solution, contact <a href=\"mailto:automation-info@covermymeds.com\">automation-info@covermymeds.com</a>.</span></p>\n<p><strong><span style=\"white-space: pre-wrap;\">Sources</span></strong></p>\n<ol>\n<li><a href=\"https://www.google.com\"><span style=\"white-space: pre-wrap;\">How COVID-19 has impacted the role of pharmacists around the world, National Library of Medicine, Feb. 22, 2021</span></a></li>\n<li><span style=\"white-space: pre-wrap;\">The Striking, Startling Realities of Pharmacist Burnout, University of Illinois Chicago, Dec. 6, 2022</span></li>\n</ol>",
                                    "propertyDataType": "PropertyXhtmlString"
                                },
                                "metaDescription": {
                                    "value": "",
                                    "propertyDataType": "PropertyLongString"
                                },
                                "relatedArticle": {
                                    "expandedValue": [],
                                    "value": [
                                        {
                                            "displayOption": "",
                                            "tag": null,
                                            "contentLink": {
                                                "id": 408,
                                                "workId": 0,
                                                "guidValue": "622fe0a9-cdb9-48a3-a8d2-1aedb66ec1b4",
                                                "providerName": null,
                                                "url": null,
                                                "expanded": null
                                            }
                                        }
                                    ],
                                    "propertyDataType": "PropertyContentArea"
                                },
                                "pageIndex": {
                                    "value": null,
                                    "propertyDataType": "PropertyBoolean"
                                },
                                "image": {
                                    "expandedValue": {
                                        "contentLink": {
                                            "id": 409,
                                            "workId": 0,
                                            "guidValue": "9714c30c-52a1-4eab-aebb-9936dccc73e2",
                                            "providerName": null,
                                            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/blog1.png",
                                            "expanded": null
                                        },
                                        "name": "blog1.png",
                                        "language": {
                                            "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/blog1.png",
                                            "displayName": "Invariant Language (Invariant Country)",
                                            "name": ""
                                        },
                                        "existingLanguages": [],
                                        "masterLanguage": null,
                                        "contentType": [
                                            "Image",
                                            "Media",
                                            "ImageFile"
                                        ],
                                        "parentLink": {
                                            "id": 3,
                                            "workId": 0,
                                            "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                                            "providerName": null,
                                            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                                            "expanded": null
                                        },
                                        "routeSegment": "blog1.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/blog1.png",
                                        "changed": "2023-04-27T08:43:18Z",
                                        "created": "2023-04-27T08:43:18Z",
                                        "startPublish": "2023-04-27T08:43:18Z",
                                        "stopPublish": null,
                                        "saved": "2023-05-06T04:36:15Z",
                                        "status": "Published",
                                        "category": {
                                            "value": [],
                                            "propertyDataType": "PropertyCategory"
                                        },
                                        "thumbnail": {
                                            "value": {
                                                "id": "epi.fx.blob://default/9714c30c52a14eabaebb9936dccc73e2/e58a63b9a1b74a8e8fc41bb2e427d7ff_Thumbnail.png",
                                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/blog1.png/Thumbnail"
                                            },
                                            "propertyDataType": "PropertyBlob"
                                        },
                                        "mimeType": {
                                            "value": "image/png",
                                            "propertyDataType": "PropertyString"
                                        },
                                        "altText": {
                                            "value": "",
                                            "propertyDataType": "PropertyLongString"
                                        }
                                    },
                                    "value": {
                                        "id": 409,
                                        "workId": 0,
                                        "guidValue": "9714c30c-52a1-4eab-aebb-9936dccc73e2",
                                        "providerName": null,
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/blog1.png",
                                        "expanded": null
                                    },
                                    "propertyDataType": "PropertyContentReference"
                                },
                                "noFollow": {
                                    "value": null,
                                    "propertyDataType": "PropertyBoolean"
                                },
                                "relatedArticleHeading": {
                                    "value": "<p>Are your medications causing you to lose nutrients?</p>",
                                    "propertyDataType": "PropertyXhtmlString"
                                },
                                "canoicalUrl": {
                                    "value": "",
                                    "propertyDataType": "PropertyLongString"
                                },
                                "relatedProducts": {
                                    "expandedValue": [],
                                    "value": [
                                        {
                                            "displayOption": "",
                                            "tag": null,
                                            "contentLink": {
                                                "id": 402,
                                                "workId": 0,
                                                "guidValue": "4bc298ce-44df-49b3-9be6-89ab9b74bb24",
                                                "providerName": null,
                                                "url": null,
                                                "expanded": null
                                            }
                                        },
                                        {
                                            "displayOption": "",
                                            "tag": null,
                                            "contentLink": {
                                                "id": 259,
                                                "workId": 0,
                                                "guidValue": "c74edf72-ee34-4c3c-9f65-993d5f003059",
                                                "providerName": null,
                                                "url": null,
                                                "expanded": null
                                            }
                                        },
                                        {
                                            "displayOption": "",
                                            "tag": null,
                                            "contentLink": {
                                                "id": 258,
                                                "workId": 0,
                                                "guidValue": "28a7c308-cf92-49b9-a142-e85b727c5977",
                                                "providerName": null,
                                                "url": null,
                                                "expanded": null
                                            }
                                        }
                                    ],
                                    "propertyDataType": "PropertyContentArea"
                                },
                                "relatedProductHeading": {
                                    "value": "Related Products",
                                    "propertyDataType": "PropertyLongString"
                                },
                                "tag": {
                                    "value": [
                                        {
                                            "id": 19,
                                            "name": "Acute Care",
                                            "description": "Acute Care"
                                        },
                                        {
                                            "id": 28,
                                            "name": "Preventative Care",
                                            "description": "Preventative Care"
                                        },
                                        {
                                            "id": 35,
                                            "name": "Every Day Care",
                                            "description": "Every Day Care"
                                        },
                                        {
                                            "id": 46,
                                            "name": "Diagnostic Care",
                                            "description": "Diagnostic Care"
                                        },
                                        {
                                            "id": 52,
                                            "name": "Health Needs",
                                            "description": "Health Needs"
                                        }
                                    ],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "trendingBlog": {
                                    "value": true,
                                    "propertyDataType": "PropertyBoolean"
                                },
                                "topBlog": {
                                    "value": true,
                                    "propertyDataType": "PropertyBoolean"
                                },
                                "readMinute": {
                                    "value": "65 min read",
                                    "propertyDataType": "PropertyLongString"
                                },
                                "tagBackgroundColorCode": {
                                    "value": "",
                                    "propertyDataType": "PropertyLongString"
                                }
                            }
                        ],
                        "value": [
                            {
                                "displayOption": "",
                                "tag": null,
                                "contentLink": {
                                    "id": 408,
                                    "workId": 0,
                                    "guidValue": "622fe0a9-cdb9-48a3-a8d2-1aedb66ec1b4",
                                    "providerName": null,
                                    "url": null,
                                    "expanded": null
                                }
                            }
                        ],
                        "propertyDataType": "PropertyContentArea"
                    },
                    "pageIndex": {
                        "value": null,
                        "propertyDataType": "PropertyBoolean"
                    },
                    "image": {
                        "expandedValue": {
                            "contentLink": {
                                "id": 409,
                                "workId": 0,
                                "guidValue": "9714c30c-52a1-4eab-aebb-9936dccc73e2",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/blog1.png",
                                "expanded": null
                            },
                            "name": "blog1.png",
                            "language": {
                                "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/blog1.png",
                                "displayName": "Invariant Language (Invariant Country)",
                                "name": ""
                            },
                            "existingLanguages": [],
                            "masterLanguage": null,
                            "contentType": [
                                "Image",
                                "Media",
                                "ImageFile"
                            ],
                            "parentLink": {
                                "id": 3,
                                "workId": 0,
                                "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                                "expanded": null
                            },
                            "routeSegment": "blog1.png",
                            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/blog1.png",
                            "changed": "2023-04-27T08:43:18Z",
                            "created": "2023-04-27T08:43:18Z",
                            "startPublish": "2023-04-27T08:43:18Z",
                            "stopPublish": null,
                            "saved": "2023-05-06T04:36:15Z",
                            "status": "Published",
                            "category": {
                                "value": [],
                                "propertyDataType": "PropertyCategory"
                            },
                            "thumbnail": {
                                "value": {
                                    "id": "epi.fx.blob://default/9714c30c52a14eabaebb9936dccc73e2/e58a63b9a1b74a8e8fc41bb2e427d7ff_Thumbnail.png",
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/blog1.png/Thumbnail"
                                },
                                "propertyDataType": "PropertyBlob"
                            },
                            "mimeType": {
                                "value": "image/png",
                                "propertyDataType": "PropertyString"
                            },
                            "altText": {
                                "value": "",
                                "propertyDataType": "PropertyLongString"
                            }
                        },
                        "value": {
                            "id": 409,
                            "workId": 0,
                            "guidValue": "9714c30c-52a1-4eab-aebb-9936dccc73e2",
                            "providerName": null,
                            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/blog1.png",
                            "expanded": null
                        },
                        "propertyDataType": "PropertyContentReference"
                    },
                    "noFollow": {
                        "value": null,
                        "propertyDataType": "PropertyBoolean"
                    },
                    "relatedArticleHeading": {
                        "value": "<p>Are your medications causing you to lose nutrients?</p>",
                        "propertyDataType": "PropertyXhtmlString"
                    },
                    "canoicalUrl": {
                        "value": "",
                        "propertyDataType": "PropertyLongString"
                    },
                    "relatedProducts": {
                        "expandedValue": [],
                        "value": [
                            {
                                "displayOption": "",
                                "tag": null,
                                "contentLink": {
                                    "id": 402,
                                    "workId": 0,
                                    "guidValue": "4bc298ce-44df-49b3-9be6-89ab9b74bb24",
                                    "providerName": null,
                                    "url": null,
                                    "expanded": null
                                }
                            },
                            {
                                "displayOption": "",
                                "tag": null,
                                "contentLink": {
                                    "id": 259,
                                    "workId": 0,
                                    "guidValue": "c74edf72-ee34-4c3c-9f65-993d5f003059",
                                    "providerName": null,
                                    "url": null,
                                    "expanded": null
                                }
                            },
                            {
                                "displayOption": "",
                                "tag": null,
                                "contentLink": {
                                    "id": 258,
                                    "workId": 0,
                                    "guidValue": "28a7c308-cf92-49b9-a142-e85b727c5977",
                                    "providerName": null,
                                    "url": null,
                                    "expanded": null
                                }
                            }
                        ],
                        "propertyDataType": "PropertyContentArea"
                    },
                    "relatedProductHeading": {
                        "value": "Related Products",
                        "propertyDataType": "PropertyLongString"
                    },
                    "tag": {
                        "value": [
                            {
                                "id": 19,
                                "name": "Acute Care",
                                "description": "Acute Care"
                            },
                            {
                                "id": 28,
                                "name": "Preventative Care",
                                "description": "Preventative Care"
                            },
                            {
                                "id": 35,
                                "name": "Every Day Care",
                                "description": "Every Day Care"
                            },
                            {
                                "id": 46,
                                "name": "Diagnostic Care",
                                "description": "Diagnostic Care"
                            },
                            {
                                "id": 52,
                                "name": "Health Needs",
                                "description": "Health Needs"
                            }
                        ],
                        "propertyDataType": "PropertyCategory"
                    },
                    "trendingBlog": {
                        "value": true,
                        "propertyDataType": "PropertyBoolean"
                    },
                    "topBlog": {
                        "value": true,
                        "propertyDataType": "PropertyBoolean"
                    },
                    "readMinute": {
                        "value": "65 min read",
                        "propertyDataType": "PropertyLongString"
                    },
                    "tagBackgroundColorCode": {
                        "value": "",
                        "propertyDataType": "PropertyLongString"
                    }
                }
            ],
            "value": [
                {
                    "displayOption": "",
                    "tag": null,
                    "contentLink": {
                        "id": 408,
                        "workId": 0,
                        "guidValue": "622fe0a9-cdb9-48a3-a8d2-1aedb66ec1b4",
                        "providerName": null,
                        "url": null,
                        "expanded": null
                    }
                }
            ],
            "propertyDataType": "PropertyContentArea"
        },
        "pageIndex": {
            "value": null,
            "propertyDataType": "PropertyBoolean"
        },
        "image": {
            "expandedValue": {
                "contentLink": {
                    "id": 409,
                    "workId": 0,
                    "guidValue": "9714c30c-52a1-4eab-aebb-9936dccc73e2",
                    "providerName": null,
                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/blog1.png",
                    "expanded": null
                },
                "name": "blog1.png",
                "language": {
                    "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/blog1.png",
                    "displayName": "Invariant Language (Invariant Country)",
                    "name": ""
                },
                "existingLanguages": [],
                "masterLanguage": null,
                "contentType": [
                    "Image",
                    "Media",
                    "ImageFile"
                ],
                "parentLink": {
                    "id": 3,
                    "workId": 0,
                    "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                    "providerName": null,
                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                    "expanded": null
                },
                "routeSegment": "blog1.png",
                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/blog1.png",
                "changed": "2023-04-27T08:43:18Z",
                "created": "2023-04-27T08:43:18Z",
                "startPublish": "2023-04-27T08:43:18Z",
                "stopPublish": null,
                "saved": "2023-05-06T04:36:15Z",
                "status": "Published",
                "category": {
                    "value": [],
                    "propertyDataType": "PropertyCategory"
                },
                "thumbnail": {
                    "value": {
                        "id": "epi.fx.blob://default/9714c30c52a14eabaebb9936dccc73e2/e58a63b9a1b74a8e8fc41bb2e427d7ff_Thumbnail.png",
                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/blog1.png/Thumbnail"
                    },
                    "propertyDataType": "PropertyBlob"
                },
                "mimeType": {
                    "value": "image/png",
                    "propertyDataType": "PropertyString"
                },
                "altText": {
                    "value": "",
                    "propertyDataType": "PropertyLongString"
                }
            },
            "value": {
                "id": 409,
                "workId": 0,
                "guidValue": "9714c30c-52a1-4eab-aebb-9936dccc73e2",
                "providerName": null,
                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/blog1.png",
                "expanded": null
            },
            "propertyDataType": "PropertyContentReference"
        },
        "noFollow": {
            "value": null,
            "propertyDataType": "PropertyBoolean"
        },
        "relatedArticleHeading": {
            "value": "<p>Are your medications causing you to lose nutrients?</p>",
            "propertyDataType": "PropertyXhtmlString"
        },
        "canoicalUrl": {
            "value": "",
            "propertyDataType": "PropertyLongString"
        },
        "relatedProducts": {
            "expandedValue": [
                {
                    "contentLink": {
                        "id": 402,
                        "workId": 0,
                        "guidValue": "4bc298ce-44df-49b3-9be6-89ab9b74bb24",
                        "providerName": null,
                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/vitamin-d3-50-mcg-2000/",
                        "expanded": null
                    },
                    "name": "Foster & Thrive Vitamin D3 50 mcg (2000 IU) Strong Bones & Immune Support*",
                    "language": {
                        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/vitamin-d3-50-mcg-2000/",
                        "displayName": "English",
                        "name": "en"
                    },
                    "existingLanguages": [
                        {
                            "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/vitamin-d3-50-mcg-2000/",
                            "displayName": "English",
                            "name": "en"
                        }
                    ],
                    "masterLanguage": {
                        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/vitamin-d3-50-mcg-2000/",
                        "displayName": "English",
                        "name": "en"
                    },
                    "contentType": [
                        "Page",
                        "ProductDetailsPage"
                    ],
                    "parentLink": {
                        "id": 112,
                        "workId": 0,
                        "guidValue": "5c0bd45c-faa2-4223-b688-a0d63097b80d",
                        "providerName": null,
                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/",
                        "expanded": null
                    },
                    "routeSegment": "vitamin-d3-50-mcg-2000",
                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/vitamin-d3-50-mcg-2000/",
                    "changed": "2023-04-26T18:34:54Z",
                    "created": "2023-04-26T18:32:30Z",
                    "startPublish": "2023-04-26T18:34:54Z",
                    "stopPublish": null,
                    "saved": "2023-05-13T11:05:07Z",
                    "status": "Published",
                    "category": {
                        "value": [],
                        "propertyDataType": "PropertyCategory"
                    },
                    "pageTitle": {
                        "value": "",
                        "propertyDataType": "PropertyLongString"
                    },
                    "title": {
                        "value": "<h1><span class=\"ui-provider gr b c d e f g h i j k l m n o p q r s t u v w x y z ab ac ae af ag ah ai aj ak\" dir=\"ltr\">Foster &amp; Thrive</span></h1>\n<h1><span class=\"ui-provider gr b c d e f g h i j k l m n o p q r s t u v w x y z ab ac ae af ag ah ai aj ak\" dir=\"ltr\">Vitamin D3</span></h1>\n<h2><span class=\"ui-provider gr b c d e f g h i j k l m n o p q r s t u v w x y z ab ac ae af ag ah ai aj ak\" dir=\"ltr\">50 mcg (2000 IU)</span></h2>\n<h2><span class=\"ui-provider gr b c d e f g h i j k l m n o p q r s t u v w x y z ab ac ae af ag ah ai aj ak\" dir=\"ltr\">Strong Bones &amp; Immune Support*</span></h2>",
                        "propertyDataType": "PropertyXhtmlString"
                    },
                    "metaDescription": {
                        "value": "",
                        "propertyDataType": "PropertyLongString"
                    },
                    "subTitle": {
                        "value": "<p>Liquid Filled | Rapid Release<br />Gluten Free</p>\n<p>Dietary supplement</p>",
                        "propertyDataType": "PropertyXhtmlString"
                    },
                    "pageIndex": {
                        "value": null,
                        "propertyDataType": "PropertyBoolean"
                    },
                    "volume": {
                        "value": "<p>100 SOFTGELS</p>",
                        "propertyDataType": "PropertyXhtmlString"
                    },
                    "noFollow": {
                        "value": null,
                        "propertyDataType": "PropertyBoolean"
                    },
                    "description": {
                        "value": "<ul>\n<li>IMMUNE SUPPORT (1): Vitamin D3 is an essential nutrient for immune support. (1) Each serving contains 2000 IU of Vitamin D for immune benefits and may assist the immune system by helping to regulate T and B-lymphocytes (1)</li>\n<li>SUPPORTS STRONG BONES (1): In addition to immune support, getting a sufficient amount of Vitamin D is critical to building and maintaining strong bones in adults. (1) It is essential for calcium absorption to help support healthy bones (1)</li>\n<li>YEAR-ROUND SUPPORT: Vitamin D3 supplements contain the same form of Vitamin D that is naturally formed in the body through exposure to sunshine. Nature&rsquo;s Bounty Vitamin D3 helps support the production of Vitamin D all year long (1)</li>\n<li>NON-GMO FORMULA: Nature&rsquo;s Bounty Vitamin D3 Softgels are non-GMO, gluten- and sugar-free, and contain no artificial colors or sweeteners</li>\n<li>UNSURPASSED QUALITY AND VALUE: Using the latest breakthroughs in nutritional science and the finest ingredients, Nature&rsquo;s Bounty provides supplements of unsurpassed quality and valueA</li>\n</ul>",
                        "propertyDataType": "PropertyXhtmlString"
                    },
                    "canoicalUrl": {
                        "value": "",
                        "propertyDataType": "PropertyLongString"
                    },
                    "highlightDescription": {
                        "value": "<p>UNSURPASSED QUALITY AND VALUE: Using the latest breakthroughs in nutritional science and the finest ingredients, Nature&rsquo;s Bounty provides supplements of unsurpassed quality and valueA</p>",
                        "propertyDataType": "PropertyXhtmlString"
                    },
                    "ingredients": {
                        "value": "<p>Vitamin D3, Soybean Oil, Gelatin, Glycerin, Water, Corn Oil.</p>",
                        "propertyDataType": "PropertyXhtmlString"
                    },
                    "directions": {
                        "value": "<p>Vitamin D3, Soybean Oil, Gelatin, Glycerin, Water, Corn Oil.</p>",
                        "propertyDataType": "PropertyXhtmlString"
                    },
                    "warnings": {
                        "value": "<p>Vitamin D3, Soybean Oil, Gelatin, Glycerin, Water, Corn Oil.</p>",
                        "propertyDataType": "PropertyXhtmlString"
                    },
                    "productType": {
                        "value": [
                            {
                                "id": 19,
                                "name": "Acute Care",
                                "description": "Acute Care"
                            }
                        ],
                        "propertyDataType": "PropertyCategory"
                    },
                    "healthNeeds": {
                        "value": [
                            {
                                "id": 52,
                                "name": "Health Needs",
                                "description": "Health Needs"
                            },
                            {
                                "id": 53,
                                "name": "Beauty",
                                "description": "Beauty"
                            },
                            {
                                "id": 54,
                                "name": "Bone",
                                "description": "Bone"
                            },
                            {
                                "id": 55,
                                "name": "Digestion",
                                "description": "Digestion"
                            },
                            {
                                "id": 56,
                                "name": "Energy",
                                "description": "Energy"
                            },
                            {
                                "id": 57,
                                "name": "Eye Health",
                                "description": "Eye Health"
                            },
                            {
                                "id": 58,
                                "name": "General Wellness",
                                "description": "General Wellness"
                            },
                            {
                                "id": 59,
                                "name": "Heart",
                                "description": "Heart"
                            },
                            {
                                "id": 60,
                                "name": "Immune Health",
                                "description": "Immune Health"
                            },
                            {
                                "id": 61,
                                "name": "Joints",
                                "description": "Joints"
                            }
                        ],
                        "propertyDataType": "PropertyCategory"
                    },
                    "gender": {
                        "value": [
                            {
                                "id": 2,
                                "name": "Gender",
                                "description": "Gender"
                            },
                            {
                                "id": 3,
                                "name": "Male",
                                "description": "Male"
                            },
                            {
                                "id": 4,
                                "name": "Female",
                                "description": "Female"
                            }
                        ],
                        "propertyDataType": "PropertyCategory"
                    },
                    "age": {
                        "value": [
                            {
                                "id": 5,
                                "name": "Age",
                                "description": "Age"
                            },
                            {
                                "id": 6,
                                "name": "Adults",
                                "description": "Adults"
                            },
                            {
                                "id": 7,
                                "name": "Children",
                                "description": "Children"
                            }
                        ],
                        "propertyDataType": "PropertyCategory"
                    },
                    "form": {
                        "value": [
                            {
                                "id": 8,
                                "name": "Form",
                                "description": "Form"
                            },
                            {
                                "id": 9,
                                "name": "Bandage",
                                "description": "Bandage"
                            },
                            {
                                "id": 10,
                                "name": "Capsule",
                                "description": "Capsule"
                            },
                            {
                                "id": 11,
                                "name": "Chewable",
                                "description": "Chewable"
                            },
                            {
                                "id": 12,
                                "name": "Liquid Gel",
                                "description": "Liquid Gel"
                            },
                            {
                                "id": 13,
                                "name": "Nasal Spray",
                                "description": "Nasal Spray"
                            },
                            {
                                "id": 14,
                                "name": "Tablet",
                                "description": "Tablet"
                            },
                            {
                                "id": 15,
                                "name": "Topical",
                                "description": "Topical"
                            }
                        ],
                        "propertyDataType": "PropertyCategory"
                    },
                    "availability": {
                        "value": [
                            {
                                "id": 16,
                                "name": "Availability",
                                "description": "Availability"
                            },
                            {
                                "id": 17,
                                "name": "Available Now",
                                "description": "Available Now"
                            },
                            {
                                "id": 18,
                                "name": "Coming Soon",
                                "description": "Coming Soon"
                            }
                        ],
                        "propertyDataType": "PropertyCategory"
                    },
                    "categortyBackgroundColorCode": {
                        "value": "",
                        "propertyDataType": "PropertyLongString"
                    },
                    "image": {
                        "expandedValue": {
                            "contentLink": {
                                "id": 405,
                                "workId": 0,
                                "guidValue": "238fcddf-17d1-4cac-affb-07700e86c2a9",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/d05b4e76368a4b1983d6a1ac7c0b9e8e/details_page_ffoster_thrive_vitamin_d3.png",
                                "expanded": null
                            },
                            "name": "details_page_Ffoster_thrive_vitamin_d3.png",
                            "language": {
                                "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/d05b4e76368a4b1983d6a1ac7c0b9e8e/details_page_ffoster_thrive_vitamin_d3.png",
                                "displayName": "Invariant Language (Invariant Country)",
                                "name": ""
                            },
                            "existingLanguages": [],
                            "masterLanguage": null,
                            "contentType": [
                                "Image",
                                "Media",
                                "ImageFile"
                            ],
                            "parentLink": {
                                "id": 403,
                                "workId": 0,
                                "guidValue": "d05b4e76-368a-4b19-83d6-a1ac7c0b9e8e",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/d05b4e76368a4b1983d6a1ac7c0b9e8e/",
                                "expanded": null
                            },
                            "routeSegment": "details_page_ffoster_thrive_vitamin_d3.png",
                            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/d05b4e76368a4b1983d6a1ac7c0b9e8e/details_page_ffoster_thrive_vitamin_d3.png",
                            "changed": "2023-04-26T18:49:28Z",
                            "created": "2023-04-26T18:36:53Z",
                            "startPublish": "2023-04-26T18:36:53Z",
                            "stopPublish": null,
                            "saved": "2023-05-06T04:36:23Z",
                            "status": "Published",
                            "category": {
                                "value": [],
                                "propertyDataType": "PropertyCategory"
                            },
                            "thumbnail": {
                                "value": {
                                    "id": "epi.fx.blob://default/238fcddf17d14cacaffb07700e86c2a9/f5ec603222b74efeb8281c0ee01f271a_Thumbnail.png",
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/d05b4e76368a4b1983d6a1ac7c0b9e8e/details_page_ffoster_thrive_vitamin_d3.png/Thumbnail"
                                },
                                "propertyDataType": "PropertyBlob"
                            },
                            "mimeType": {
                                "value": "image/png",
                                "propertyDataType": "PropertyString"
                            },
                            "altText": {
                                "value": "",
                                "propertyDataType": "PropertyLongString"
                            }
                        },
                        "value": {
                            "id": 405,
                            "workId": 0,
                            "guidValue": "238fcddf-17d1-4cac-affb-07700e86c2a9",
                            "providerName": null,
                            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/d05b4e76368a4b1983d6a1ac7c0b9e8e/details_page_ffoster_thrive_vitamin_d3.png",
                            "expanded": null
                        },
                        "propertyDataType": "PropertyContentReference"
                    },
                    "productImages": {
                        "expandedValue": [
                            {
                                "contentLink": {
                                    "id": 406,
                                    "workId": 0,
                                    "guidValue": "2cbc43f2-584f-4eec-a08c-8b5ee89d00f4",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/d05b4e76368a4b1983d6a1ac7c0b9e8e/vitamin_d3.png",
                                    "expanded": null
                                },
                                "name": "vitamin_D3.png",
                                "language": {
                                    "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/d05b4e76368a4b1983d6a1ac7c0b9e8e/vitamin_d3.png",
                                    "displayName": "Invariant Language (Invariant Country)",
                                    "name": ""
                                },
                                "existingLanguages": [],
                                "masterLanguage": null,
                                "contentType": [
                                    "Image",
                                    "Media",
                                    "ImageFile"
                                ],
                                "parentLink": {
                                    "id": 403,
                                    "workId": 0,
                                    "guidValue": "d05b4e76-368a-4b19-83d6-a1ac7c0b9e8e",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/d05b4e76368a4b1983d6a1ac7c0b9e8e/",
                                    "expanded": null
                                },
                                "routeSegment": "vitamin_d3.png",
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/d05b4e76368a4b1983d6a1ac7c0b9e8e/vitamin_d3.png",
                                "changed": "2023-04-26T18:53:04Z",
                                "created": "2023-04-26T18:53:04Z",
                                "startPublish": "2023-04-26T18:53:04Z",
                                "stopPublish": null,
                                "saved": "2023-05-06T04:36:23Z",
                                "status": "Published",
                                "category": {
                                    "value": [],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "thumbnail": {
                                    "value": {
                                        "id": "epi.fx.blob://default/2cbc43f2584f4eeca08c8b5ee89d00f4/5d23664099bd4bd4833220ff6bc36aa9_Thumbnail.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/d05b4e76368a4b1983d6a1ac7c0b9e8e/vitamin_d3.png/Thumbnail"
                                    },
                                    "propertyDataType": "PropertyBlob"
                                },
                                "mimeType": {
                                    "value": "image/png",
                                    "propertyDataType": "PropertyString"
                                },
                                "altText": {
                                    "value": "",
                                    "propertyDataType": "PropertyLongString"
                                }
                            },
                            {
                                "contentLink": {
                                    "id": 406,
                                    "workId": 0,
                                    "guidValue": "2cbc43f2-584f-4eec-a08c-8b5ee89d00f4",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/d05b4e76368a4b1983d6a1ac7c0b9e8e/vitamin_d3.png",
                                    "expanded": null
                                },
                                "name": "vitamin_D3.png",
                                "language": {
                                    "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/d05b4e76368a4b1983d6a1ac7c0b9e8e/vitamin_d3.png",
                                    "displayName": "Invariant Language (Invariant Country)",
                                    "name": ""
                                },
                                "existingLanguages": [],
                                "masterLanguage": null,
                                "contentType": [
                                    "Image",
                                    "Media",
                                    "ImageFile"
                                ],
                                "parentLink": {
                                    "id": 403,
                                    "workId": 0,
                                    "guidValue": "d05b4e76-368a-4b19-83d6-a1ac7c0b9e8e",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/d05b4e76368a4b1983d6a1ac7c0b9e8e/",
                                    "expanded": null
                                },
                                "routeSegment": "vitamin_d3.png",
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/d05b4e76368a4b1983d6a1ac7c0b9e8e/vitamin_d3.png",
                                "changed": "2023-04-26T18:53:04Z",
                                "created": "2023-04-26T18:53:04Z",
                                "startPublish": "2023-04-26T18:53:04Z",
                                "stopPublish": null,
                                "saved": "2023-05-06T04:36:23Z",
                                "status": "Published",
                                "category": {
                                    "value": [],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "thumbnail": {
                                    "value": {
                                        "id": "epi.fx.blob://default/2cbc43f2584f4eeca08c8b5ee89d00f4/5d23664099bd4bd4833220ff6bc36aa9_Thumbnail.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/d05b4e76368a4b1983d6a1ac7c0b9e8e/vitamin_d3.png/Thumbnail"
                                    },
                                    "propertyDataType": "PropertyBlob"
                                },
                                "mimeType": {
                                    "value": "image/png",
                                    "propertyDataType": "PropertyString"
                                },
                                "altText": {
                                    "value": "",
                                    "propertyDataType": "PropertyLongString"
                                }
                            },
                            {
                                "contentLink": {
                                    "id": 319,
                                    "workId": 0,
                                    "guidValue": "d8584e15-c4bc-4900-ad03-22029628d512",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/every-day-care--3.png",
                                    "expanded": null
                                },
                                "name": "Every day care -3.png",
                                "language": {
                                    "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/every-day-care--3.png",
                                    "displayName": "Invariant Language (Invariant Country)",
                                    "name": ""
                                },
                                "existingLanguages": [],
                                "masterLanguage": null,
                                "contentType": [
                                    "Image",
                                    "Media",
                                    "ImageFile"
                                ],
                                "parentLink": {
                                    "id": 3,
                                    "workId": 0,
                                    "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                                    "expanded": null
                                },
                                "routeSegment": "every-day-care--3.png",
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/every-day-care--3.png",
                                "changed": "2023-04-24T13:31:15Z",
                                "created": "2023-04-24T12:29:01Z",
                                "startPublish": "2023-04-24T12:29:01Z",
                                "stopPublish": null,
                                "saved": "2023-05-06T04:36:09Z",
                                "status": "Published",
                                "category": {
                                    "value": [],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "thumbnail": {
                                    "value": {
                                        "id": "epi.fx.blob://default/d8584e15c4bc4900ad0322029628d512/ae5a43e528fe41b5a553507bb83a63b8_Thumbnail.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/every-day-care--3.png/Thumbnail"
                                    },
                                    "propertyDataType": "PropertyBlob"
                                },
                                "mimeType": {
                                    "value": "image/png",
                                    "propertyDataType": "PropertyString"
                                },
                                "altText": {
                                    "value": "",
                                    "propertyDataType": "PropertyLongString"
                                }
                            },
                            {
                                "contentLink": {
                                    "id": 406,
                                    "workId": 0,
                                    "guidValue": "2cbc43f2-584f-4eec-a08c-8b5ee89d00f4",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/d05b4e76368a4b1983d6a1ac7c0b9e8e/vitamin_d3.png",
                                    "expanded": null
                                },
                                "name": "vitamin_D3.png",
                                "language": {
                                    "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/d05b4e76368a4b1983d6a1ac7c0b9e8e/vitamin_d3.png",
                                    "displayName": "Invariant Language (Invariant Country)",
                                    "name": ""
                                },
                                "existingLanguages": [],
                                "masterLanguage": null,
                                "contentType": [
                                    "Image",
                                    "Media",
                                    "ImageFile"
                                ],
                                "parentLink": {
                                    "id": 403,
                                    "workId": 0,
                                    "guidValue": "d05b4e76-368a-4b19-83d6-a1ac7c0b9e8e",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/d05b4e76368a4b1983d6a1ac7c0b9e8e/",
                                    "expanded": null
                                },
                                "routeSegment": "vitamin_d3.png",
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/d05b4e76368a4b1983d6a1ac7c0b9e8e/vitamin_d3.png",
                                "changed": "2023-04-26T18:53:04Z",
                                "created": "2023-04-26T18:53:04Z",
                                "startPublish": "2023-04-26T18:53:04Z",
                                "stopPublish": null,
                                "saved": "2023-05-06T04:36:23Z",
                                "status": "Published",
                                "category": {
                                    "value": [],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "thumbnail": {
                                    "value": {
                                        "id": "epi.fx.blob://default/2cbc43f2584f4eeca08c8b5ee89d00f4/5d23664099bd4bd4833220ff6bc36aa9_Thumbnail.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/d05b4e76368a4b1983d6a1ac7c0b9e8e/vitamin_d3.png/Thumbnail"
                                    },
                                    "propertyDataType": "PropertyBlob"
                                },
                                "mimeType": {
                                    "value": "image/png",
                                    "propertyDataType": "PropertyString"
                                },
                                "altText": {
                                    "value": "",
                                    "propertyDataType": "PropertyLongString"
                                }
                            },
                            {
                                "contentLink": {
                                    "id": 406,
                                    "workId": 0,
                                    "guidValue": "2cbc43f2-584f-4eec-a08c-8b5ee89d00f4",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/d05b4e76368a4b1983d6a1ac7c0b9e8e/vitamin_d3.png",
                                    "expanded": null
                                },
                                "name": "vitamin_D3.png",
                                "language": {
                                    "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/d05b4e76368a4b1983d6a1ac7c0b9e8e/vitamin_d3.png",
                                    "displayName": "Invariant Language (Invariant Country)",
                                    "name": ""
                                },
                                "existingLanguages": [],
                                "masterLanguage": null,
                                "contentType": [
                                    "Image",
                                    "Media",
                                    "ImageFile"
                                ],
                                "parentLink": {
                                    "id": 403,
                                    "workId": 0,
                                    "guidValue": "d05b4e76-368a-4b19-83d6-a1ac7c0b9e8e",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/d05b4e76368a4b1983d6a1ac7c0b9e8e/",
                                    "expanded": null
                                },
                                "routeSegment": "vitamin_d3.png",
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/d05b4e76368a4b1983d6a1ac7c0b9e8e/vitamin_d3.png",
                                "changed": "2023-04-26T18:53:04Z",
                                "created": "2023-04-26T18:53:04Z",
                                "startPublish": "2023-04-26T18:53:04Z",
                                "stopPublish": null,
                                "saved": "2023-05-06T04:36:23Z",
                                "status": "Published",
                                "category": {
                                    "value": [],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "thumbnail": {
                                    "value": {
                                        "id": "epi.fx.blob://default/2cbc43f2584f4eeca08c8b5ee89d00f4/5d23664099bd4bd4833220ff6bc36aa9_Thumbnail.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/d05b4e76368a4b1983d6a1ac7c0b9e8e/vitamin_d3.png/Thumbnail"
                                    },
                                    "propertyDataType": "PropertyBlob"
                                },
                                "mimeType": {
                                    "value": "image/png",
                                    "propertyDataType": "PropertyString"
                                },
                                "altText": {
                                    "value": "",
                                    "propertyDataType": "PropertyLongString"
                                }
                            },
                            {
                                "contentLink": {
                                    "id": 406,
                                    "workId": 0,
                                    "guidValue": "2cbc43f2-584f-4eec-a08c-8b5ee89d00f4",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/d05b4e76368a4b1983d6a1ac7c0b9e8e/vitamin_d3.png",
                                    "expanded": null
                                },
                                "name": "vitamin_D3.png",
                                "language": {
                                    "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/d05b4e76368a4b1983d6a1ac7c0b9e8e/vitamin_d3.png",
                                    "displayName": "Invariant Language (Invariant Country)",
                                    "name": ""
                                },
                                "existingLanguages": [],
                                "masterLanguage": null,
                                "contentType": [
                                    "Image",
                                    "Media",
                                    "ImageFile"
                                ],
                                "parentLink": {
                                    "id": 403,
                                    "workId": 0,
                                    "guidValue": "d05b4e76-368a-4b19-83d6-a1ac7c0b9e8e",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/d05b4e76368a4b1983d6a1ac7c0b9e8e/",
                                    "expanded": null
                                },
                                "routeSegment": "vitamin_d3.png",
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/d05b4e76368a4b1983d6a1ac7c0b9e8e/vitamin_d3.png",
                                "changed": "2023-04-26T18:53:04Z",
                                "created": "2023-04-26T18:53:04Z",
                                "startPublish": "2023-04-26T18:53:04Z",
                                "stopPublish": null,
                                "saved": "2023-05-06T04:36:23Z",
                                "status": "Published",
                                "category": {
                                    "value": [],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "thumbnail": {
                                    "value": {
                                        "id": "epi.fx.blob://default/2cbc43f2584f4eeca08c8b5ee89d00f4/5d23664099bd4bd4833220ff6bc36aa9_Thumbnail.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/d05b4e76368a4b1983d6a1ac7c0b9e8e/vitamin_d3.png/Thumbnail"
                                    },
                                    "propertyDataType": "PropertyBlob"
                                },
                                "mimeType": {
                                    "value": "image/png",
                                    "propertyDataType": "PropertyString"
                                },
                                "altText": {
                                    "value": "",
                                    "propertyDataType": "PropertyLongString"
                                }
                            }
                        ],
                        "value": [
                            {
                                "id": 406,
                                "workId": 0,
                                "guidValue": "2cbc43f2-584f-4eec-a08c-8b5ee89d00f4",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/d05b4e76368a4b1983d6a1ac7c0b9e8e/vitamin_d3.png",
                                "expanded": null
                            },
                            {
                                "id": 406,
                                "workId": 0,
                                "guidValue": "2cbc43f2-584f-4eec-a08c-8b5ee89d00f4",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/d05b4e76368a4b1983d6a1ac7c0b9e8e/vitamin_d3.png",
                                "expanded": null
                            },
                            {
                                "id": 319,
                                "workId": 0,
                                "guidValue": "d8584e15-c4bc-4900-ad03-22029628d512",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/every-day-care--3.png",
                                "expanded": null
                            },
                            {
                                "id": 406,
                                "workId": 0,
                                "guidValue": "2cbc43f2-584f-4eec-a08c-8b5ee89d00f4",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/d05b4e76368a4b1983d6a1ac7c0b9e8e/vitamin_d3.png",
                                "expanded": null
                            },
                            {
                                "id": 406,
                                "workId": 0,
                                "guidValue": "2cbc43f2-584f-4eec-a08c-8b5ee89d00f4",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/d05b4e76368a4b1983d6a1ac7c0b9e8e/vitamin_d3.png",
                                "expanded": null
                            },
                            {
                                "id": 406,
                                "workId": 0,
                                "guidValue": "2cbc43f2-584f-4eec-a08c-8b5ee89d00f4",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/contentassets/d05b4e76368a4b1983d6a1ac7c0b9e8e/vitamin_d3.png",
                                "expanded": null
                            }
                        ],
                        "propertyDataType": "PropertyContentReferenceList"
                    },
                    "recommendedProduct": {
                        "value": true,
                        "propertyDataType": "PropertyBoolean"
                    },
                    "recommendedProductDescription": {
                        "value": "",
                        "propertyDataType": "PropertyXhtmlString"
                    },
                    "recommendedProductBackgroundColorCode": {
                        "value": "#DBDFEB",
                        "propertyDataType": "PropertyLongString"
                    },
                    "recommendedProductBackgroundImage": {
                        "value": null,
                        "propertyDataType": "PropertyContentReference"
                    },
                    "recommendedProductLogoImage": {
                        "value": null,
                        "propertyDataType": "PropertyContentReference"
                    },
                    "recommendedProductButtonText": {
                        "value": "where to buy",
                        "propertyDataType": "PropertyLongString"
                    },
                    "recommendedProductButtonUrl": {
                        "value": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/vitamin-d3-50-mcg-2000/",
                        "propertyDataType": "PropertyUrl"
                    },
                    "recommendedProductButtonColor": {
                        "value": "#4F31BB",
                        "propertyDataType": "PropertyLongString"
                    },
                    "disclaimers": {
                        "value": "<p>Disclaimer: Products are subject to availability</p>",
                        "propertyDataType": "PropertyXhtmlString"
                    },
                    "upc": {
                        "value": "",
                        "propertyDataType": "PropertyLongString"
                    },
                    "packageSize": {
                        "value": "",
                        "propertyDataType": "PropertyLongString"
                    },
                    "uom": {
                        "value": "",
                        "propertyDataType": "PropertyLongString"
                    }
                },
                {
                    "contentLink": {
                        "id": 259,
                        "workId": 0,
                        "guidValue": "c74edf72-ee34-4c3c-9f65-993d5f003059",
                        "providerName": null,
                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22222322222/",
                        "expanded": null
                    },
                    "name": "Ear Care Product Type-08",
                    "language": {
                        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22222322222/",
                        "displayName": "English",
                        "name": "en"
                    },
                    "existingLanguages": [
                        {
                            "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22222322222/",
                            "displayName": "English",
                            "name": "en"
                        }
                    ],
                    "masterLanguage": {
                        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22222322222/",
                        "displayName": "English",
                        "name": "en"
                    },
                    "contentType": [
                        "Page",
                        "ProductDetailsPage"
                    ],
                    "parentLink": {
                        "id": 112,
                        "workId": 0,
                        "guidValue": "5c0bd45c-faa2-4223-b688-a0d63097b80d",
                        "providerName": null,
                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/",
                        "expanded": null
                    },
                    "routeSegment": "pdp22222322222",
                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp22222322222/",
                    "changed": "2023-04-21T16:27:19Z",
                    "created": "2023-04-19T16:21:33Z",
                    "startPublish": "2023-04-19T16:21:38Z",
                    "stopPublish": null,
                    "saved": "2023-05-08T12:21:24Z",
                    "status": "Published",
                    "category": {
                        "value": [],
                        "propertyDataType": "PropertyCategory"
                    },
                    "pageTitle": {
                        "value": "",
                        "propertyDataType": "PropertyLongString"
                    },
                    "title": {
                        "value": "<p>Foster &amp; Thrive&nbsp;<br />Vitamin D3<br />50 mcg (2000 IU)<br />Strong Bones &amp; Immune Support* Ear care 8</p>",
                        "propertyDataType": "PropertyXhtmlString"
                    },
                    "metaDescription": {
                        "value": "",
                        "propertyDataType": "PropertyLongString"
                    },
                    "subTitle": {
                        "value": "<p>Liquid Filled | Rapid Release<br />Gluten Free</p>\n<p>Dietary supplement</p>\n<p>100 SOFTGELS Ear care 8</p>",
                        "propertyDataType": "PropertyXhtmlString"
                    },
                    "pageIndex": {
                        "value": null,
                        "propertyDataType": "PropertyBoolean"
                    },
                    "volume": {
                        "value": "<p>100 SOFTGELS</p>",
                        "propertyDataType": "PropertyXhtmlString"
                    },
                    "noFollow": {
                        "value": null,
                        "propertyDataType": "PropertyBoolean"
                    },
                    "description": {
                        "value": "<p>IMMUNE SUPPORT (1): Vitamin D3 is an essential nutrient for immune support. (1) Each serving contains 2000 IU of Vitamin D for immune benefits and may assist the immune system by helping to regulate T and B-lymphocytes (1)<br />SUPPORTS STRONG BONES (1): In addition to immune support, getting a sufficient amount of Vitamin D is critical to building and maintaining strong bones in adults. (1) It is essential for calcium absorption to help support healthy bones (1)<br />YEAR-ROUND SUPPORT: Vitamin D3 supplements contain the same form of Vitamin D that is naturally formed in the body through exposure to sunshine. Nature&rsquo;s Bounty Vitamin D3 helps support the production of Vitamin D all year long (1)<br />NON-GMO FORMULA: Nature&rsquo;s Bounty Vitamin D3 Softgels are non-GMO, gluten- and sugar-free, and contain no artificial colors or sweeteners<br />UNSURPASSED QUALITY AND VALUE: Using the latest breakthroughs in nutritional science and the finest ingredients, Nature&rsquo;s Bounty provides supplements of unsurpassed quality and valueA</p>",
                        "propertyDataType": "PropertyXhtmlString"
                    },
                    "canoicalUrl": {
                        "value": "",
                        "propertyDataType": "PropertyLongString"
                    },
                    "highlightDescription": {
                        "value": "<div>\n<div>\n<div>Antihistamine Loratadine oral solution USP, 5 mg/5 ml product 1</div>\n</div>\n</div>",
                        "propertyDataType": "PropertyXhtmlString"
                    },
                    "ingredients": {
                        "value": "<p>Vitamin D3, Soybean Oil, Gelatin, Glycerin, Water, Corn Oil.</p>",
                        "propertyDataType": "PropertyXhtmlString"
                    },
                    "directions": {
                        "value": "<p>NA</p>",
                        "propertyDataType": "PropertyXhtmlString"
                    },
                    "warnings": {
                        "value": "<p>NA</p>",
                        "propertyDataType": "PropertyXhtmlString"
                    },
                    "productType": {
                        "value": [
                            {
                                "id": 19,
                                "name": "Acute Care",
                                "description": "Acute Care"
                            },
                            {
                                "id": 20,
                                "name": "Allergy Relief",
                                "description": "Allergy Relief"
                            },
                            {
                                "id": 21,
                                "name": "Pain Relief",
                                "description": "Pain Relief"
                            },
                            {
                                "id": 22,
                                "name": "Cough, Cold & Flu Relief",
                                "description": "Cough, Cold & Flu Relief"
                            },
                            {
                                "id": 23,
                                "name": "Digestion Health",
                                "description": "Digestion Health"
                            },
                            {
                                "id": 24,
                                "name": "Smoking Cessation",
                                "description": "Smoking Cessation"
                            },
                            {
                                "id": 25,
                                "name": "Ear Care",
                                "description": "Ear Care"
                            },
                            {
                                "id": 26,
                                "name": "Sinus Care",
                                "description": "Sinus Care"
                            },
                            {
                                "id": 27,
                                "name": "Oral Care",
                                "description": "Oral Care"
                            }
                        ],
                        "propertyDataType": "PropertyCategory"
                    },
                    "healthNeeds": {
                        "value": [
                            {
                                "id": 52,
                                "name": "Health Needs",
                                "description": "Health Needs"
                            },
                            {
                                "id": 53,
                                "name": "Beauty",
                                "description": "Beauty"
                            },
                            {
                                "id": 54,
                                "name": "Bone",
                                "description": "Bone"
                            },
                            {
                                "id": 55,
                                "name": "Digestion",
                                "description": "Digestion"
                            },
                            {
                                "id": 56,
                                "name": "Energy",
                                "description": "Energy"
                            },
                            {
                                "id": 57,
                                "name": "Eye Health",
                                "description": "Eye Health"
                            },
                            {
                                "id": 58,
                                "name": "General Wellness",
                                "description": "General Wellness"
                            },
                            {
                                "id": 59,
                                "name": "Heart",
                                "description": "Heart"
                            },
                            {
                                "id": 60,
                                "name": "Immune Health",
                                "description": "Immune Health"
                            },
                            {
                                "id": 61,
                                "name": "Joints",
                                "description": "Joints"
                            },
                            {
                                "id": 62,
                                "name": "Kids",
                                "description": "Kids"
                            },
                            {
                                "id": 63,
                                "name": "Men's Health",
                                "description": "Men's Health"
                            },
                            {
                                "id": 64,
                                "name": "Mood",
                                "description": "Mood"
                            },
                            {
                                "id": 65,
                                "name": "Prenatal & Postnatal",
                                "description": "Prenatal & Postnatal"
                            },
                            {
                                "id": 66,
                                "name": "Sleep",
                                "description": "Sleep"
                            },
                            {
                                "id": 67,
                                "name": "Stress",
                                "description": "Stress"
                            },
                            {
                                "id": 68,
                                "name": "Women's Health",
                                "description": "Women's Health"
                            }
                        ],
                        "propertyDataType": "PropertyCategory"
                    },
                    "gender": {
                        "value": [
                            {
                                "id": 2,
                                "name": "Gender",
                                "description": "Gender"
                            },
                            {
                                "id": 3,
                                "name": "Male",
                                "description": "Male"
                            },
                            {
                                "id": 4,
                                "name": "Female",
                                "description": "Female"
                            }
                        ],
                        "propertyDataType": "PropertyCategory"
                    },
                    "age": {
                        "value": [
                            {
                                "id": 5,
                                "name": "Age",
                                "description": "Age"
                            },
                            {
                                "id": 6,
                                "name": "Adults",
                                "description": "Adults"
                            },
                            {
                                "id": 7,
                                "name": "Children",
                                "description": "Children"
                            }
                        ],
                        "propertyDataType": "PropertyCategory"
                    },
                    "form": {
                        "value": [
                            {
                                "id": 8,
                                "name": "Form",
                                "description": "Form"
                            },
                            {
                                "id": 9,
                                "name": "Bandage",
                                "description": "Bandage"
                            },
                            {
                                "id": 10,
                                "name": "Capsule",
                                "description": "Capsule"
                            },
                            {
                                "id": 11,
                                "name": "Chewable",
                                "description": "Chewable"
                            },
                            {
                                "id": 12,
                                "name": "Liquid Gel",
                                "description": "Liquid Gel"
                            },
                            {
                                "id": 13,
                                "name": "Nasal Spray",
                                "description": "Nasal Spray"
                            },
                            {
                                "id": 14,
                                "name": "Tablet",
                                "description": "Tablet"
                            },
                            {
                                "id": 15,
                                "name": "Topical",
                                "description": "Topical"
                            }
                        ],
                        "propertyDataType": "PropertyCategory"
                    },
                    "availability": {
                        "value": [
                            {
                                "id": 16,
                                "name": "Availability",
                                "description": "Availability"
                            },
                            {
                                "id": 17,
                                "name": "Available Now",
                                "description": "Available Now"
                            },
                            {
                                "id": 18,
                                "name": "Coming Soon",
                                "description": "Coming Soon"
                            }
                        ],
                        "propertyDataType": "PropertyCategory"
                    },
                    "categortyBackgroundColorCode": {
                        "value": "",
                        "propertyDataType": "PropertyLongString"
                    },
                    "image": {
                        "expandedValue": {
                            "contentLink": {
                                "id": 310,
                                "workId": 0,
                                "guidValue": "99c7dad3-2157-4674-9c93-4e5063b72d62",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/acute-care-4.png",
                                "expanded": null
                            },
                            "name": "Acute care 4.png",
                            "language": {
                                "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/acute-care-4.png",
                                "displayName": "Invariant Language (Invariant Country)",
                                "name": ""
                            },
                            "existingLanguages": [],
                            "masterLanguage": null,
                            "contentType": [
                                "Image",
                                "Media",
                                "ImageFile"
                            ],
                            "parentLink": {
                                "id": 3,
                                "workId": 0,
                                "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                                "expanded": null
                            },
                            "routeSegment": "acute-care-4.png",
                            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/acute-care-4.png",
                            "changed": "2023-04-24T11:40:05Z",
                            "created": "2023-04-24T11:40:05Z",
                            "startPublish": "2023-04-24T11:40:05Z",
                            "stopPublish": null,
                            "saved": "2023-05-06T04:36:08Z",
                            "status": "Published",
                            "category": {
                                "value": [],
                                "propertyDataType": "PropertyCategory"
                            },
                            "thumbnail": {
                                "value": {
                                    "id": "epi.fx.blob://default/99c7dad3215746749c934e5063b72d62/de51ef8facf24fce9e127b6f4db83744_Thumbnail.png",
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/acute-care-4.png/Thumbnail"
                                },
                                "propertyDataType": "PropertyBlob"
                            },
                            "mimeType": {
                                "value": "image/png",
                                "propertyDataType": "PropertyString"
                            },
                            "altText": {
                                "value": "",
                                "propertyDataType": "PropertyLongString"
                            }
                        },
                        "value": {
                            "id": 310,
                            "workId": 0,
                            "guidValue": "99c7dad3-2157-4674-9c93-4e5063b72d62",
                            "providerName": null,
                            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/acute-care-4.png",
                            "expanded": null
                        },
                        "propertyDataType": "PropertyContentReference"
                    },
                    "productImages": {
                        "expandedValue": [
                            {
                                "contentLink": {
                                    "id": 200,
                                    "workId": 0,
                                    "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
                                    "expanded": null
                                },
                                "name": "vitamin_D3.png",
                                "language": {
                                    "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
                                    "displayName": "Invariant Language (Invariant Country)",
                                    "name": ""
                                },
                                "existingLanguages": [],
                                "masterLanguage": null,
                                "contentType": [
                                    "Image",
                                    "Media",
                                    "ImageFile"
                                ],
                                "parentLink": {
                                    "id": 3,
                                    "workId": 0,
                                    "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                                    "expanded": null
                                },
                                "routeSegment": "vitamin_d3.png",
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
                                "changed": "2023-04-26T18:38:59Z",
                                "created": "2023-04-21T09:21:38Z",
                                "startPublish": "2023-04-21T09:21:38Z",
                                "stopPublish": null,
                                "saved": "2023-05-06T04:36:02Z",
                                "status": "Published",
                                "category": {
                                    "value": [],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "thumbnail": {
                                    "value": {
                                        "id": "epi.fx.blob://default/86b7383a4b4a427eb87cd1ce8aa6404c/a739a747a1a34769bf63b7cc90ffbc06_Thumbnail.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png/Thumbnail"
                                    },
                                    "propertyDataType": "PropertyBlob"
                                },
                                "mimeType": {
                                    "value": "image/png",
                                    "propertyDataType": "PropertyString"
                                },
                                "altText": {
                                    "value": "",
                                    "propertyDataType": "PropertyLongString"
                                }
                            },
                            {
                                "contentLink": {
                                    "id": 200,
                                    "workId": 0,
                                    "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
                                    "expanded": null
                                },
                                "name": "vitamin_D3.png",
                                "language": {
                                    "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
                                    "displayName": "Invariant Language (Invariant Country)",
                                    "name": ""
                                },
                                "existingLanguages": [],
                                "masterLanguage": null,
                                "contentType": [
                                    "Image",
                                    "Media",
                                    "ImageFile"
                                ],
                                "parentLink": {
                                    "id": 3,
                                    "workId": 0,
                                    "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                                    "expanded": null
                                },
                                "routeSegment": "vitamin_d3.png",
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
                                "changed": "2023-04-26T18:38:59Z",
                                "created": "2023-04-21T09:21:38Z",
                                "startPublish": "2023-04-21T09:21:38Z",
                                "stopPublish": null,
                                "saved": "2023-05-06T04:36:02Z",
                                "status": "Published",
                                "category": {
                                    "value": [],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "thumbnail": {
                                    "value": {
                                        "id": "epi.fx.blob://default/86b7383a4b4a427eb87cd1ce8aa6404c/a739a747a1a34769bf63b7cc90ffbc06_Thumbnail.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png/Thumbnail"
                                    },
                                    "propertyDataType": "PropertyBlob"
                                },
                                "mimeType": {
                                    "value": "image/png",
                                    "propertyDataType": "PropertyString"
                                },
                                "altText": {
                                    "value": "",
                                    "propertyDataType": "PropertyLongString"
                                }
                            },
                            {
                                "contentLink": {
                                    "id": 200,
                                    "workId": 0,
                                    "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
                                    "expanded": null
                                },
                                "name": "vitamin_D3.png",
                                "language": {
                                    "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
                                    "displayName": "Invariant Language (Invariant Country)",
                                    "name": ""
                                },
                                "existingLanguages": [],
                                "masterLanguage": null,
                                "contentType": [
                                    "Image",
                                    "Media",
                                    "ImageFile"
                                ],
                                "parentLink": {
                                    "id": 3,
                                    "workId": 0,
                                    "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                                    "expanded": null
                                },
                                "routeSegment": "vitamin_d3.png",
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
                                "changed": "2023-04-26T18:38:59Z",
                                "created": "2023-04-21T09:21:38Z",
                                "startPublish": "2023-04-21T09:21:38Z",
                                "stopPublish": null,
                                "saved": "2023-05-06T04:36:02Z",
                                "status": "Published",
                                "category": {
                                    "value": [],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "thumbnail": {
                                    "value": {
                                        "id": "epi.fx.blob://default/86b7383a4b4a427eb87cd1ce8aa6404c/a739a747a1a34769bf63b7cc90ffbc06_Thumbnail.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png/Thumbnail"
                                    },
                                    "propertyDataType": "PropertyBlob"
                                },
                                "mimeType": {
                                    "value": "image/png",
                                    "propertyDataType": "PropertyString"
                                },
                                "altText": {
                                    "value": "",
                                    "propertyDataType": "PropertyLongString"
                                }
                            },
                            {
                                "contentLink": {
                                    "id": 200,
                                    "workId": 0,
                                    "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
                                    "expanded": null
                                },
                                "name": "vitamin_D3.png",
                                "language": {
                                    "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
                                    "displayName": "Invariant Language (Invariant Country)",
                                    "name": ""
                                },
                                "existingLanguages": [],
                                "masterLanguage": null,
                                "contentType": [
                                    "Image",
                                    "Media",
                                    "ImageFile"
                                ],
                                "parentLink": {
                                    "id": 3,
                                    "workId": 0,
                                    "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                                    "expanded": null
                                },
                                "routeSegment": "vitamin_d3.png",
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
                                "changed": "2023-04-26T18:38:59Z",
                                "created": "2023-04-21T09:21:38Z",
                                "startPublish": "2023-04-21T09:21:38Z",
                                "stopPublish": null,
                                "saved": "2023-05-06T04:36:02Z",
                                "status": "Published",
                                "category": {
                                    "value": [],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "thumbnail": {
                                    "value": {
                                        "id": "epi.fx.blob://default/86b7383a4b4a427eb87cd1ce8aa6404c/a739a747a1a34769bf63b7cc90ffbc06_Thumbnail.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png/Thumbnail"
                                    },
                                    "propertyDataType": "PropertyBlob"
                                },
                                "mimeType": {
                                    "value": "image/png",
                                    "propertyDataType": "PropertyString"
                                },
                                "altText": {
                                    "value": "",
                                    "propertyDataType": "PropertyLongString"
                                }
                            },
                            {
                                "contentLink": {
                                    "id": 200,
                                    "workId": 0,
                                    "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
                                    "expanded": null
                                },
                                "name": "vitamin_D3.png",
                                "language": {
                                    "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
                                    "displayName": "Invariant Language (Invariant Country)",
                                    "name": ""
                                },
                                "existingLanguages": [],
                                "masterLanguage": null,
                                "contentType": [
                                    "Image",
                                    "Media",
                                    "ImageFile"
                                ],
                                "parentLink": {
                                    "id": 3,
                                    "workId": 0,
                                    "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                                    "expanded": null
                                },
                                "routeSegment": "vitamin_d3.png",
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
                                "changed": "2023-04-26T18:38:59Z",
                                "created": "2023-04-21T09:21:38Z",
                                "startPublish": "2023-04-21T09:21:38Z",
                                "stopPublish": null,
                                "saved": "2023-05-06T04:36:02Z",
                                "status": "Published",
                                "category": {
                                    "value": [],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "thumbnail": {
                                    "value": {
                                        "id": "epi.fx.blob://default/86b7383a4b4a427eb87cd1ce8aa6404c/a739a747a1a34769bf63b7cc90ffbc06_Thumbnail.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png/Thumbnail"
                                    },
                                    "propertyDataType": "PropertyBlob"
                                },
                                "mimeType": {
                                    "value": "image/png",
                                    "propertyDataType": "PropertyString"
                                },
                                "altText": {
                                    "value": "",
                                    "propertyDataType": "PropertyLongString"
                                }
                            },
                            {
                                "contentLink": {
                                    "id": 200,
                                    "workId": 0,
                                    "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
                                    "expanded": null
                                },
                                "name": "vitamin_D3.png",
                                "language": {
                                    "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
                                    "displayName": "Invariant Language (Invariant Country)",
                                    "name": ""
                                },
                                "existingLanguages": [],
                                "masterLanguage": null,
                                "contentType": [
                                    "Image",
                                    "Media",
                                    "ImageFile"
                                ],
                                "parentLink": {
                                    "id": 3,
                                    "workId": 0,
                                    "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                                    "expanded": null
                                },
                                "routeSegment": "vitamin_d3.png",
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
                                "changed": "2023-04-26T18:38:59Z",
                                "created": "2023-04-21T09:21:38Z",
                                "startPublish": "2023-04-21T09:21:38Z",
                                "stopPublish": null,
                                "saved": "2023-05-06T04:36:02Z",
                                "status": "Published",
                                "category": {
                                    "value": [],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "thumbnail": {
                                    "value": {
                                        "id": "epi.fx.blob://default/86b7383a4b4a427eb87cd1ce8aa6404c/a739a747a1a34769bf63b7cc90ffbc06_Thumbnail.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png/Thumbnail"
                                    },
                                    "propertyDataType": "PropertyBlob"
                                },
                                "mimeType": {
                                    "value": "image/png",
                                    "propertyDataType": "PropertyString"
                                },
                                "altText": {
                                    "value": "",
                                    "propertyDataType": "PropertyLongString"
                                }
                            }
                        ],
                        "value": [
                            {
                                "id": 200,
                                "workId": 0,
                                "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
                                "expanded": null
                            },
                            {
                                "id": 200,
                                "workId": 0,
                                "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
                                "expanded": null
                            },
                            {
                                "id": 200,
                                "workId": 0,
                                "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
                                "expanded": null
                            },
                            {
                                "id": 200,
                                "workId": 0,
                                "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
                                "expanded": null
                            },
                            {
                                "id": 200,
                                "workId": 0,
                                "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
                                "expanded": null
                            },
                            {
                                "id": 200,
                                "workId": 0,
                                "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
                                "expanded": null
                            }
                        ],
                        "propertyDataType": "PropertyContentReferenceList"
                    },
                    "recommendedProduct": {
                        "value": true,
                        "propertyDataType": "PropertyBoolean"
                    },
                    "recommendedProductDescription": {
                        "value": "",
                        "propertyDataType": "PropertyXhtmlString"
                    },
                    "recommendedProductBackgroundColorCode": {
                        "value": "",
                        "propertyDataType": "PropertyLongString"
                    },
                    "recommendedProductBackgroundImage": {
                        "value": null,
                        "propertyDataType": "PropertyContentReference"
                    },
                    "recommendedProductLogoImage": {
                        "value": null,
                        "propertyDataType": "PropertyContentReference"
                    },
                    "recommendedProductButtonText": {
                        "value": "",
                        "propertyDataType": "PropertyLongString"
                    },
                    "recommendedProductButtonUrl": {
                        "value": null,
                        "propertyDataType": "PropertyUrl"
                    },
                    "recommendedProductButtonColor": {
                        "value": "",
                        "propertyDataType": "PropertyLongString"
                    },
                    "disclaimers": {
                        "value": "",
                        "propertyDataType": "PropertyXhtmlString"
                    },
                    "upc": {
                        "value": "",
                        "propertyDataType": "PropertyLongString"
                    },
                    "packageSize": {
                        "value": "",
                        "propertyDataType": "PropertyLongString"
                    },
                    "uom": {
                        "value": "",
                        "propertyDataType": "PropertyLongString"
                    }
                },
                {
                    "contentLink": {
                        "id": 258,
                        "workId": 0,
                        "guidValue": "28a7c308-cf92-49b9-a142-e85b727c5977",
                        "providerName": null,
                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp223222222/",
                        "expanded": null
                    },
                    "name": "First Aid Antibiotic Product Type -1",
                    "language": {
                        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp223222222/",
                        "displayName": "English",
                        "name": "en"
                    },
                    "existingLanguages": [
                        {
                            "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp223222222/",
                            "displayName": "English",
                            "name": "en"
                        }
                    ],
                    "masterLanguage": {
                        "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp223222222/",
                        "displayName": "English",
                        "name": "en"
                    },
                    "contentType": [
                        "Page",
                        "ProductDetailsPage"
                    ],
                    "parentLink": {
                        "id": 112,
                        "workId": 0,
                        "guidValue": "5c0bd45c-faa2-4223-b688-a0d63097b80d",
                        "providerName": null,
                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/",
                        "expanded": null
                    },
                    "routeSegment": "pdp223222222",
                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/en/pdp/pdp223222222/",
                    "changed": "2023-04-21T16:26:31Z",
                    "created": "2023-04-19T16:21:33Z",
                    "startPublish": "2023-04-19T16:21:38Z",
                    "stopPublish": null,
                    "saved": "2023-05-08T12:23:07Z",
                    "status": "Published",
                    "category": {
                        "value": [],
                        "propertyDataType": "PropertyCategory"
                    },
                    "pageTitle": {
                        "value": "",
                        "propertyDataType": "PropertyLongString"
                    },
                    "title": {
                        "value": "<p>First Aid Antibiotic</p>",
                        "propertyDataType": "PropertyXhtmlString"
                    },
                    "metaDescription": {
                        "value": "",
                        "propertyDataType": "PropertyLongString"
                    },
                    "subTitle": {
                        "value": "<p>Antihistamine Loratadine oral solution USP, 5 mg/5 ml</p>",
                        "propertyDataType": "PropertyXhtmlString"
                    },
                    "pageIndex": {
                        "value": null,
                        "propertyDataType": "PropertyBoolean"
                    },
                    "volume": {
                        "value": "",
                        "propertyDataType": "PropertyXhtmlString"
                    },
                    "noFollow": {
                        "value": null,
                        "propertyDataType": "PropertyBoolean"
                    },
                    "description": {
                        "value": "<p>IMMUNE SUPPORT (1): Vitamin D3 is an essential nutrient for immune support. (1) Each serving contains 2000 IU of Vitamin D for immune benefits and may assist the immune system by helping to regulate T and B-lymphocytes (1)<br />SUPPORTS STRONG BONES (1): In addition to immune support, getting a sufficient amount of Vitamin D is critical to building and maintaining strong bones in adults. (1) It is essential for calcium absorption to help support healthy bones (1)<br />YEAR-ROUND SUPPORT: Vitamin D3 supplements contain the same form of Vitamin D that is naturally formed in the body through exposure to sunshine. Nature&rsquo;s Bounty Vitamin D3 helps support the production of Vitamin D all year long (1)<br />NON-GMO FORMULA: Nature&rsquo;s Bounty Vitamin D3 Softgels are non-GMO, gluten- and sugar-free, and contain no artificial colors or sweeteners<br />UNSURPASSED QUALITY AND VALUE: Using the latest breakthroughs in nutritional science and the finest ingredients, Nature&rsquo;s Bounty provides supplements of unsurpassed quality and valueA</p>",
                        "propertyDataType": "PropertyXhtmlString"
                    },
                    "canoicalUrl": {
                        "value": "",
                        "propertyDataType": "PropertyLongString"
                    },
                    "highlightDescription": {
                        "value": "<p>Antihistamine Loratadine oral solution USP, 5 mg/5 ml product 2</p>",
                        "propertyDataType": "PropertyXhtmlString"
                    },
                    "ingredients": {
                        "value": "<p>Vitamin D3, Soybean Oil, Gelatin, Glycerin, Water, Corn Oil.</p>",
                        "propertyDataType": "PropertyXhtmlString"
                    },
                    "directions": {
                        "value": "",
                        "propertyDataType": "PropertyXhtmlString"
                    },
                    "warnings": {
                        "value": "",
                        "propertyDataType": "PropertyXhtmlString"
                    },
                    "productType": {
                        "value": [
                            {
                                "id": 35,
                                "name": "Every Day Care",
                                "description": "Every Day Care"
                            },
                            {
                                "id": 36,
                                "name": "First Aid",
                                "description": "First Aid"
                            },
                            {
                                "id": 37,
                                "name": "Daily Living Support",
                                "description": "Daily Living Support"
                            },
                            {
                                "id": 38,
                                "name": "Cosmetics",
                                "description": "Cosmetics"
                            },
                            {
                                "id": 39,
                                "name": "Family Planning",
                                "description": "Family Planning"
                            },
                            {
                                "id": 40,
                                "name": "Skin Care",
                                "description": "Skin Care"
                            },
                            {
                                "id": 41,
                                "name": "Foot Care",
                                "description": "Foot Care"
                            },
                            {
                                "id": 42,
                                "name": "Ankle Braces",
                                "description": "Ankle Braces"
                            },
                            {
                                "id": 43,
                                "name": "Muscle Soreness",
                                "description": "Muscle Soreness"
                            },
                            {
                                "id": 44,
                                "name": "Foot insoles",
                                "description": "Foot insoles"
                            },
                            {
                                "id": 45,
                                "name": "Facial Cleaner",
                                "description": "Facial Cleaner"
                            }
                        ],
                        "propertyDataType": "PropertyCategory"
                    },
                    "healthNeeds": {
                        "value": [
                            {
                                "id": 52,
                                "name": "Health Needs",
                                "description": "Health Needs"
                            },
                            {
                                "id": 53,
                                "name": "Beauty",
                                "description": "Beauty"
                            },
                            {
                                "id": 54,
                                "name": "Bone",
                                "description": "Bone"
                            },
                            {
                                "id": 55,
                                "name": "Digestion",
                                "description": "Digestion"
                            },
                            {
                                "id": 56,
                                "name": "Energy",
                                "description": "Energy"
                            },
                            {
                                "id": 57,
                                "name": "Eye Health",
                                "description": "Eye Health"
                            },
                            {
                                "id": 58,
                                "name": "General Wellness",
                                "description": "General Wellness"
                            },
                            {
                                "id": 59,
                                "name": "Heart",
                                "description": "Heart"
                            },
                            {
                                "id": 60,
                                "name": "Immune Health",
                                "description": "Immune Health"
                            },
                            {
                                "id": 61,
                                "name": "Joints",
                                "description": "Joints"
                            },
                            {
                                "id": 62,
                                "name": "Kids",
                                "description": "Kids"
                            },
                            {
                                "id": 63,
                                "name": "Men's Health",
                                "description": "Men's Health"
                            },
                            {
                                "id": 64,
                                "name": "Mood",
                                "description": "Mood"
                            },
                            {
                                "id": 65,
                                "name": "Prenatal & Postnatal",
                                "description": "Prenatal & Postnatal"
                            },
                            {
                                "id": 66,
                                "name": "Sleep",
                                "description": "Sleep"
                            },
                            {
                                "id": 67,
                                "name": "Stress",
                                "description": "Stress"
                            },
                            {
                                "id": 68,
                                "name": "Women's Health",
                                "description": "Women's Health"
                            }
                        ],
                        "propertyDataType": "PropertyCategory"
                    },
                    "gender": {
                        "value": [
                            {
                                "id": 2,
                                "name": "Gender",
                                "description": "Gender"
                            },
                            {
                                "id": 3,
                                "name": "Male",
                                "description": "Male"
                            },
                            {
                                "id": 4,
                                "name": "Female",
                                "description": "Female"
                            }
                        ],
                        "propertyDataType": "PropertyCategory"
                    },
                    "age": {
                        "value": [
                            {
                                "id": 5,
                                "name": "Age",
                                "description": "Age"
                            },
                            {
                                "id": 6,
                                "name": "Adults",
                                "description": "Adults"
                            },
                            {
                                "id": 7,
                                "name": "Children",
                                "description": "Children"
                            }
                        ],
                        "propertyDataType": "PropertyCategory"
                    },
                    "form": {
                        "value": [
                            {
                                "id": 8,
                                "name": "Form",
                                "description": "Form"
                            },
                            {
                                "id": 9,
                                "name": "Bandage",
                                "description": "Bandage"
                            },
                            {
                                "id": 10,
                                "name": "Capsule",
                                "description": "Capsule"
                            },
                            {
                                "id": 11,
                                "name": "Chewable",
                                "description": "Chewable"
                            },
                            {
                                "id": 12,
                                "name": "Liquid Gel",
                                "description": "Liquid Gel"
                            },
                            {
                                "id": 13,
                                "name": "Nasal Spray",
                                "description": "Nasal Spray"
                            },
                            {
                                "id": 14,
                                "name": "Tablet",
                                "description": "Tablet"
                            },
                            {
                                "id": 15,
                                "name": "Topical",
                                "description": "Topical"
                            }
                        ],
                        "propertyDataType": "PropertyCategory"
                    },
                    "availability": {
                        "value": [
                            {
                                "id": 16,
                                "name": "Availability",
                                "description": "Availability"
                            },
                            {
                                "id": 17,
                                "name": "Available Now",
                                "description": "Available Now"
                            },
                            {
                                "id": 18,
                                "name": "Coming Soon",
                                "description": "Coming Soon"
                            }
                        ],
                        "propertyDataType": "PropertyCategory"
                    },
                    "categortyBackgroundColorCode": {
                        "value": "",
                        "propertyDataType": "PropertyLongString"
                    },
                    "image": {
                        "expandedValue": {
                            "contentLink": {
                                "id": 39,
                                "workId": 0,
                                "guidValue": "80f9c744-55f7-4769-aed9-3f8a22d37901",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/every-day-care.png",
                                "expanded": null
                            },
                            "name": "Every Day Care.png",
                            "language": {
                                "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/every-day-care.png",
                                "displayName": "Invariant Language (Invariant Country)",
                                "name": ""
                            },
                            "existingLanguages": [],
                            "masterLanguage": null,
                            "contentType": [
                                "Image",
                                "Media",
                                "ImageFile(1)"
                            ],
                            "parentLink": {
                                "id": 3,
                                "workId": 0,
                                "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                                "expanded": null
                            },
                            "routeSegment": "every-day-care.png",
                            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/every-day-care.png",
                            "changed": "2023-04-24T12:14:54Z",
                            "created": "2023-04-18T09:12:46Z",
                            "startPublish": "2023-04-18T09:12:46Z",
                            "stopPublish": null,
                            "saved": "2023-05-06T04:35:59Z",
                            "status": "Published",
                            "category": {
                                "value": [],
                                "propertyDataType": "PropertyCategory"
                            },
                            "thumbnail": {
                                "value": {
                                    "id": "epi.fx.blob://default/80f9c74455f74769aed93f8a22d37901/ec17b92671364745b301f813144f1f40_Thumbnail.png",
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/every-day-care.png/Thumbnail"
                                },
                                "propertyDataType": "PropertyBlob"
                            },
                            "mimeType": {
                                "value": "image/png",
                                "propertyDataType": "PropertyString"
                            },
                            "copyright": {
                                "value": "",
                                "propertyDataType": "PropertyLongString"
                            }
                        },
                        "value": {
                            "id": 39,
                            "workId": 0,
                            "guidValue": "80f9c744-55f7-4769-aed9-3f8a22d37901",
                            "providerName": null,
                            "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/every-day-care.png",
                            "expanded": null
                        },
                        "propertyDataType": "PropertyContentReference"
                    },
                    "productImages": {
                        "expandedValue": [
                            {
                                "contentLink": {
                                    "id": 200,
                                    "workId": 0,
                                    "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
                                    "expanded": null
                                },
                                "name": "vitamin_D3.png",
                                "language": {
                                    "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
                                    "displayName": "Invariant Language (Invariant Country)",
                                    "name": ""
                                },
                                "existingLanguages": [],
                                "masterLanguage": null,
                                "contentType": [
                                    "Image",
                                    "Media",
                                    "ImageFile"
                                ],
                                "parentLink": {
                                    "id": 3,
                                    "workId": 0,
                                    "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                                    "expanded": null
                                },
                                "routeSegment": "vitamin_d3.png",
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
                                "changed": "2023-04-26T18:38:59Z",
                                "created": "2023-04-21T09:21:38Z",
                                "startPublish": "2023-04-21T09:21:38Z",
                                "stopPublish": null,
                                "saved": "2023-05-06T04:36:02Z",
                                "status": "Published",
                                "category": {
                                    "value": [],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "thumbnail": {
                                    "value": {
                                        "id": "epi.fx.blob://default/86b7383a4b4a427eb87cd1ce8aa6404c/a739a747a1a34769bf63b7cc90ffbc06_Thumbnail.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png/Thumbnail"
                                    },
                                    "propertyDataType": "PropertyBlob"
                                },
                                "mimeType": {
                                    "value": "image/png",
                                    "propertyDataType": "PropertyString"
                                },
                                "altText": {
                                    "value": "",
                                    "propertyDataType": "PropertyLongString"
                                }
                            },
                            {
                                "contentLink": {
                                    "id": 200,
                                    "workId": 0,
                                    "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
                                    "expanded": null
                                },
                                "name": "vitamin_D3.png",
                                "language": {
                                    "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
                                    "displayName": "Invariant Language (Invariant Country)",
                                    "name": ""
                                },
                                "existingLanguages": [],
                                "masterLanguage": null,
                                "contentType": [
                                    "Image",
                                    "Media",
                                    "ImageFile"
                                ],
                                "parentLink": {
                                    "id": 3,
                                    "workId": 0,
                                    "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                                    "expanded": null
                                },
                                "routeSegment": "vitamin_d3.png",
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
                                "changed": "2023-04-26T18:38:59Z",
                                "created": "2023-04-21T09:21:38Z",
                                "startPublish": "2023-04-21T09:21:38Z",
                                "stopPublish": null,
                                "saved": "2023-05-06T04:36:02Z",
                                "status": "Published",
                                "category": {
                                    "value": [],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "thumbnail": {
                                    "value": {
                                        "id": "epi.fx.blob://default/86b7383a4b4a427eb87cd1ce8aa6404c/a739a747a1a34769bf63b7cc90ffbc06_Thumbnail.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png/Thumbnail"
                                    },
                                    "propertyDataType": "PropertyBlob"
                                },
                                "mimeType": {
                                    "value": "image/png",
                                    "propertyDataType": "PropertyString"
                                },
                                "altText": {
                                    "value": "",
                                    "propertyDataType": "PropertyLongString"
                                }
                            },
                            {
                                "contentLink": {
                                    "id": 200,
                                    "workId": 0,
                                    "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
                                    "expanded": null
                                },
                                "name": "vitamin_D3.png",
                                "language": {
                                    "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
                                    "displayName": "Invariant Language (Invariant Country)",
                                    "name": ""
                                },
                                "existingLanguages": [],
                                "masterLanguage": null,
                                "contentType": [
                                    "Image",
                                    "Media",
                                    "ImageFile"
                                ],
                                "parentLink": {
                                    "id": 3,
                                    "workId": 0,
                                    "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                                    "expanded": null
                                },
                                "routeSegment": "vitamin_d3.png",
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
                                "changed": "2023-04-26T18:38:59Z",
                                "created": "2023-04-21T09:21:38Z",
                                "startPublish": "2023-04-21T09:21:38Z",
                                "stopPublish": null,
                                "saved": "2023-05-06T04:36:02Z",
                                "status": "Published",
                                "category": {
                                    "value": [],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "thumbnail": {
                                    "value": {
                                        "id": "epi.fx.blob://default/86b7383a4b4a427eb87cd1ce8aa6404c/a739a747a1a34769bf63b7cc90ffbc06_Thumbnail.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png/Thumbnail"
                                    },
                                    "propertyDataType": "PropertyBlob"
                                },
                                "mimeType": {
                                    "value": "image/png",
                                    "propertyDataType": "PropertyString"
                                },
                                "altText": {
                                    "value": "",
                                    "propertyDataType": "PropertyLongString"
                                }
                            },
                            {
                                "contentLink": {
                                    "id": 200,
                                    "workId": 0,
                                    "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
                                    "expanded": null
                                },
                                "name": "vitamin_D3.png",
                                "language": {
                                    "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
                                    "displayName": "Invariant Language (Invariant Country)",
                                    "name": ""
                                },
                                "existingLanguages": [],
                                "masterLanguage": null,
                                "contentType": [
                                    "Image",
                                    "Media",
                                    "ImageFile"
                                ],
                                "parentLink": {
                                    "id": 3,
                                    "workId": 0,
                                    "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                                    "expanded": null
                                },
                                "routeSegment": "vitamin_d3.png",
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
                                "changed": "2023-04-26T18:38:59Z",
                                "created": "2023-04-21T09:21:38Z",
                                "startPublish": "2023-04-21T09:21:38Z",
                                "stopPublish": null,
                                "saved": "2023-05-06T04:36:02Z",
                                "status": "Published",
                                "category": {
                                    "value": [],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "thumbnail": {
                                    "value": {
                                        "id": "epi.fx.blob://default/86b7383a4b4a427eb87cd1ce8aa6404c/a739a747a1a34769bf63b7cc90ffbc06_Thumbnail.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png/Thumbnail"
                                    },
                                    "propertyDataType": "PropertyBlob"
                                },
                                "mimeType": {
                                    "value": "image/png",
                                    "propertyDataType": "PropertyString"
                                },
                                "altText": {
                                    "value": "",
                                    "propertyDataType": "PropertyLongString"
                                }
                            },
                            {
                                "contentLink": {
                                    "id": 200,
                                    "workId": 0,
                                    "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
                                    "expanded": null
                                },
                                "name": "vitamin_D3.png",
                                "language": {
                                    "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
                                    "displayName": "Invariant Language (Invariant Country)",
                                    "name": ""
                                },
                                "existingLanguages": [],
                                "masterLanguage": null,
                                "contentType": [
                                    "Image",
                                    "Media",
                                    "ImageFile"
                                ],
                                "parentLink": {
                                    "id": 3,
                                    "workId": 0,
                                    "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                                    "expanded": null
                                },
                                "routeSegment": "vitamin_d3.png",
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
                                "changed": "2023-04-26T18:38:59Z",
                                "created": "2023-04-21T09:21:38Z",
                                "startPublish": "2023-04-21T09:21:38Z",
                                "stopPublish": null,
                                "saved": "2023-05-06T04:36:02Z",
                                "status": "Published",
                                "category": {
                                    "value": [],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "thumbnail": {
                                    "value": {
                                        "id": "epi.fx.blob://default/86b7383a4b4a427eb87cd1ce8aa6404c/a739a747a1a34769bf63b7cc90ffbc06_Thumbnail.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png/Thumbnail"
                                    },
                                    "propertyDataType": "PropertyBlob"
                                },
                                "mimeType": {
                                    "value": "image/png",
                                    "propertyDataType": "PropertyString"
                                },
                                "altText": {
                                    "value": "",
                                    "propertyDataType": "PropertyLongString"
                                }
                            },
                            {
                                "contentLink": {
                                    "id": 200,
                                    "workId": 0,
                                    "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
                                    "expanded": null
                                },
                                "name": "vitamin_D3.png",
                                "language": {
                                    "link": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
                                    "displayName": "Invariant Language (Invariant Country)",
                                    "name": ""
                                },
                                "existingLanguages": [],
                                "masterLanguage": null,
                                "contentType": [
                                    "Image",
                                    "Media",
                                    "ImageFile"
                                ],
                                "parentLink": {
                                    "id": 3,
                                    "workId": 0,
                                    "guidValue": "e56f85d0-e833-4e02-976a-2d11fe4d598c",
                                    "providerName": null,
                                    "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
                                    "expanded": null
                                },
                                "routeSegment": "vitamin_d3.png",
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
                                "changed": "2023-04-26T18:38:59Z",
                                "created": "2023-04-21T09:21:38Z",
                                "startPublish": "2023-04-21T09:21:38Z",
                                "stopPublish": null,
                                "saved": "2023-05-06T04:36:02Z",
                                "status": "Published",
                                "category": {
                                    "value": [],
                                    "propertyDataType": "PropertyCategory"
                                },
                                "thumbnail": {
                                    "value": {
                                        "id": "epi.fx.blob://default/86b7383a4b4a427eb87cd1ce8aa6404c/a739a747a1a34769bf63b7cc90ffbc06_Thumbnail.png",
                                        "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png/Thumbnail"
                                    },
                                    "propertyDataType": "PropertyBlob"
                                },
                                "mimeType": {
                                    "value": "image/png",
                                    "propertyDataType": "PropertyString"
                                },
                                "altText": {
                                    "value": "",
                                    "propertyDataType": "PropertyLongString"
                                }
                            }
                        ],
                        "value": [
                            {
                                "id": 200,
                                "workId": 0,
                                "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
                                "expanded": null
                            },
                            {
                                "id": 200,
                                "workId": 0,
                                "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
                                "expanded": null
                            },
                            {
                                "id": 200,
                                "workId": 0,
                                "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
                                "expanded": null
                            },
                            {
                                "id": 200,
                                "workId": 0,
                                "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
                                "expanded": null
                            },
                            {
                                "id": 200,
                                "workId": 0,
                                "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
                                "expanded": null
                            },
                            {
                                "id": 200,
                                "workId": 0,
                                "guidValue": "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
                                "providerName": null,
                                "url": "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
                                "expanded": null
                            }
                        ],
                        "propertyDataType": "PropertyContentReferenceList"
                    },
                    "recommendedProduct": {
                        "value": true,
                        "propertyDataType": "PropertyBoolean"
                    },
                    "recommendedProductDescription": {
                        "value": "",
                        "propertyDataType": "PropertyXhtmlString"
                    },
                    "recommendedProductBackgroundColorCode": {
                        "value": "",
                        "propertyDataType": "PropertyLongString"
                    },
                    "recommendedProductBackgroundImage": {
                        "value": null,
                        "propertyDataType": "PropertyContentReference"
                    },
                    "recommendedProductLogoImage": {
                        "value": null,
                        "propertyDataType": "PropertyContentReference"
                    },
                    "recommendedProductButtonText": {
                        "value": "",
                        "propertyDataType": "PropertyLongString"
                    },
                    "recommendedProductButtonUrl": {
                        "value": null,
                        "propertyDataType": "PropertyUrl"
                    },
                    "recommendedProductButtonColor": {
                        "value": "",
                        "propertyDataType": "PropertyLongString"
                    },
                    "disclaimers": {
                        "value": "",
                        "propertyDataType": "PropertyXhtmlString"
                    },
                    "upc": {
                        "value": "",
                        "propertyDataType": "PropertyLongString"
                    },
                    "packageSize": {
                        "value": "",
                        "propertyDataType": "PropertyLongString"
                    },
                    "uom": {
                        "value": "",
                        "propertyDataType": "PropertyLongString"
                    }
                }
            ],
            "value": [
                {
                    "displayOption": "",
                    "tag": null,
                    "contentLink": {
                        "id": 402,
                        "workId": 0,
                        "guidValue": "4bc298ce-44df-49b3-9be6-89ab9b74bb24",
                        "providerName": null,
                        "url": null,
                        "expanded": null
                    }
                },
                {
                    "displayOption": "",
                    "tag": null,
                    "contentLink": {
                        "id": 259,
                        "workId": 0,
                        "guidValue": "c74edf72-ee34-4c3c-9f65-993d5f003059",
                        "providerName": null,
                        "url": null,
                        "expanded": null
                    }
                },
                {
                    "displayOption": "",
                    "tag": null,
                    "contentLink": {
                        "id": 258,
                        "workId": 0,
                        "guidValue": "28a7c308-cf92-49b9-a142-e85b727c5977",
                        "providerName": null,
                        "url": null,
                        "expanded": null
                    }
                }
            ],
            "propertyDataType": "PropertyContentArea"
        },
        "relatedProductHeading": {
            "value": "Related Products",
            "propertyDataType": "PropertyLongString"
        },
        "tag": {
            "value": [
                {
                    "id": 19,
                    "name": "Acute Care",
                    "description": "Acute Care"
                },
                {
                    "id": 28,
                    "name": "Preventative Care",
                    "description": "Preventative Care"
                },
                {
                    "id": 35,
                    "name": "Every Day Care",
                    "description": "Every Day Care"
                },
                {
                    "id": 46,
                    "name": "Diagnostic Care",
                    "description": "Diagnostic Care"
                },
                {
                    "id": 52,
                    "name": "Health Needs",
                    "description": "Health Needs"
                }
            ],
            "propertyDataType": "PropertyCategory"
        },
        "trendingBlog": {
            "value": true,
            "propertyDataType": "PropertyBoolean"
        },
        "topBlog": {
            "value": true,
            "propertyDataType": "PropertyBoolean"
        },
        "readMinute": {
            "value": "65 min read",
            "propertyDataType": "PropertyLongString"
        },
        "tagBackgroundColorCode": {
            "value": "",
            "propertyDataType": "PropertyLongString"
        }
    }
]