import LandingLayout from "@/components/Layout/LandingLayout";
import TermsComponent from "@/components/terms/TermsComponent";

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