import LandingLayout from "@/components/Layout/LandingLayout";
import PrivacyComponent from "@/components/privacy/PrivacyComponent";
import GoogleTagManager from "@/components/google_tag_manager";

function privacy() {

    return (
        <>
            <GoogleTagManager />
            <div className="wrapper">
                <LandingLayout>
                    <PrivacyComponent />
                </LandingLayout>
            </div>
        </>
    )

}
export default privacy;