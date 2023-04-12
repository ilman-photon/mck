function CookiesComponent() {
  return (
    <div className="container flex text-sofia-reg text-sm mx-auto p-1">
      <div className="flex-none lg:flex w-11/12 lg:w-fit">
        <p className="p-1 pl-0 text-center lg:text-left lg:w-fit">
          We use cookies to enhance your browsing experience, serve personalized
          ads or content, and analyze our traffic. By clicking &quot;Accept
          &quot;, you consent to our use of cookies.
        </p>
        <div className="flex">
          <div className="p-1 font-bold w-8/12 text-right lg:w-fit">Manage Setting</div>
          <div className="p-1 font-bold w-4/12 text-left lg:w-fit">Accept</div>
        </div>
      </div>
      <div className="p-1 pr-0 w-1/12">X</div>
    </div>
  );
}

export default CookiesComponent;
