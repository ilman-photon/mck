import FooterComponent from "@/components/footer";
import GoogleTagManager from "@/components/google_tag_manager";
import HeaderComponent from "@/components/header";
import TermsComponent from "@/components/terms/TermsComponent";

function terms() {

    return (
        <>
            <GoogleTagManager/>
            <HeaderComponent />
            <TermsComponent />
            <FooterComponent />
        </>
    )

}
export default terms;