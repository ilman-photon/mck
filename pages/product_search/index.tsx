import FooterComponent from "@/components/footer";
import HeaderComponent from "@/components/header";

function ProductSearchList() {
  return (
    <>
      <HeaderComponent />
      <div className="search-page-container">
        <div className="search-result-count">
          18 results found for &quot;Pain Relief&quot;
        </div>
        <div className="search-result-text">
          Showing results for Pain Relief
        </div>
      </div>
      <FooterComponent />
    </>
  );
}

export default ProductSearchList;
