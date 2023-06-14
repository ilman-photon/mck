import LandingLayout from "@/components/Layout/LandingLayout";
import TermsComponent from "@/components/terms/TermsComponent";
import GoogleTagManager from "@/components/google_tag_manager";

function terms() {

    return (
        <>
            <GoogleTagManager />
            <div className="wrapper">
        <LandingLayout>
            <TermsComponent />
        </LandingLayout>
            </div>
        </>
    )

}
export default terms;