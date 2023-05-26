import React from "react";
type typeCokkieSetting = {
  onAccept?: any;
  onReject?: any;
};
const CookieSetting = ({ onAccept, onReject }: typeCokkieSetting) => {
  return (
    <div className="fixed inset-x-0 top-0 flex items-center justify-center z-50">
      <div className="container flex text-sofia-reg text-sm mx-auto grey-bg text-white">
        <div className="flex-none lg:flex w-11/12 lg:w-fit mx-auto p-9">
          <p className="p-1 pl-0 text-center lg:text-left lg:w-fit">
            We use cookies to enhance your browsing experience, serve
            personalized ads or content, and analyze our traffic. By clicking
            "Accept", you consent to our use of cookies.
          </p>
          <div className="flex ml-5">
            <div
              onClick={onAccept}
              className="p-1 font-bold w-8/12 text-right lg:w-fit cursor-pointer"
            >
              Reject
            </div>
            <div
              onClick={onReject}
              className="p-1 font-bold w-4/12 text-left lg:w-fit cursor-pointer"
            >
              Accept
            </div>
          </div>
        </div>
        <div className="p-1 pr-0 w-1/12">
          <button onClick={onReject}>X</button>
        </div>
      </div>
    </div>
  );
};

export default CookieSetting;
