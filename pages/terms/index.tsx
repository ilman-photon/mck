import FooterComponent from "@/components/footer";
import HeaderNoStickyComponent from "@/components/header_nosticky";
import TermsComponent from "@/components/termsofuse/TermsofuseComponent";

function terms() {

    return (
        <>
            <HeaderNoStickyComponent />
            <TermsComponent />
            <FooterComponent />
        </>
    )

}
export default terms;