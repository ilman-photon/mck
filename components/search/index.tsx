export default function Search() {
  return (
    <>
      <div className="desktop-search">
        <input
          className="search input-box"
          type="text"
          alt="Search"
          placeholder="Search"
        />
      </div>
      <div className="mobile-search">
        <img src="images/search_btn.png" />
      </div>
    </>
  );
}
