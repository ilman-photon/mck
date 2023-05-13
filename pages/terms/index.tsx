import FooterComponent from "@/components/footer";
import GoogleTagManager from "@/components/google_tag_manager";
import HeaderNoStickyComponent from "@/components/header_nosticky";
import TermsComponent from "@/components/termsofuse/TermsofuseComponent";

function terms() {

    return (
        <>
            <GoogleTagManager/>
            <HeaderNoStickyComponent />
            <TermsComponent />
            <FooterComponent />
        </>
    )

}
export default terms;