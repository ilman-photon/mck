import FooterComponent from "@/components/footer";
import HeaderComponent from "@/components/header";
import HealthNeedsComponent from "@/components/health_needs";
import React from "react";

function HealthNeeds() {
  return (
    <>
      <div className="grid">
        <HeaderComponent />
        <HealthNeedsComponent />
        <FooterComponent />
      </div>
    </>
  );
}

export default HealthNeeds;
