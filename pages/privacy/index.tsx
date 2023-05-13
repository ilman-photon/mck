import FooterComponent from "@/components/footer";
import GoogleTagManager from "@/components/google_tag_manager";
import HeaderNoStickyComponent from "@/components/header_nosticky";
import PrivacyComponent from "@/components/privacy/PrivacyComponent";

function privacy() {

    return (
        <>
            <GoogleTagManager/>
            <HeaderNoStickyComponent />
            <PrivacyComponent />
            <FooterComponent />
        </>
    )

}
export default privacy;