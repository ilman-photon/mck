import FooterComponent from "@/components/footer";
import GoogleTagManager from "@/components/google_tag_manager";
import HeaderComponent from "@/components/header";
import PrivacyComponent from "@/components/privacy/PrivacyComponent";

function privacy() {

    return (
        <>
            <GoogleTagManager/>
            <HeaderComponent />
            <PrivacyComponent />
            <FooterComponent />
        </>
    )

}
export default privacy;