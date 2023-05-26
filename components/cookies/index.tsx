import React, { useState } from "react";
import { HiPlus, HiMinus } from "react-icons/hi";

type CookiesComponentProps = {
  onAccept?: () => void;
  onManageSettings?: () => void;
};

const CookiesComponent = ({
  onAccept,
  onManageSettings,
}: CookiesComponentProps) => {
  const [strictlyNecessaryOpen, setStrictlyNecessaryOpen] = useState(false);
  const [sharingInfoOpen, setSharingInfoOpen] = useState(false);

  const handleStrictlyNecessaryToggle = () => {
    setStrictlyNecessaryOpen(!strictlyNecessaryOpen);
  };

  const handleSharingInfoToggle = () => {
    setSharingInfoOpen(!sharingInfoOpen);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 align-middle px-96">
      <div className="fixed inset-0 bg-black opacity-75"></div>
      <div className="relative bg-white p-4">
        <div>
          <h1 className="text-3xl font-bold text-blue-900 mb-4">
            Privacy Preference Center
          </h1>
          <p>
            When you visit any website, it may store or retrieve information on
            your browser, mostly in the form of cookies. This information might
            be about you, your preferences, or your device and is mostly used to
            make the site work as you expect it to. The information does not
            usually directly identify you, but it can give you a more
            personalized web experience. Because we respect your right to
            privacy, you can choose not to allow some types of cookies. Click on
            the different category headings to find out more and change our
            default settings. However, blocking some types of cookies may impact
            your experience of the site and the services we are able to offer.
          </p>
          <a className="text-sm text-blue-900" href={""}>
            More Information
          </a>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Manage Consent Preferences
          </h2>
          <div>
            <div
              className="cursor-pointer"
              onClick={handleStrictlyNecessaryToggle}
            >
              <div className="flex items-center p-2 gap-3 border-2 justify-between">
                <div className="flex p-2 align-middle items-center">
                  {strictlyNecessaryOpen ? (
                    <HiMinus className="mr-2" />
                  ) : (
                    <HiPlus className="mr-2" />
                  )}
                  <h3>Strictly Necessary Cookies</h3>
                </div>
                <div className="flex">
                  <p>Always Active</p>
                </div>
              </div>
              {strictlyNecessaryOpen && (
                <div className="bg-blue-50 p-2 border-2">
                  <p>
                    These cookies are necessary for the website to function and
                    cannot be switched off in our systems. They are usually only
                    set in response to actions made by you which amount to a
                    request for services, such as setting your privacy
                    preferences, logging in or filling in forms. You can set
                    your browser to block or alert you about these cookies, but
                    some parts of the site will not then work. These cookies do
                    not store any personally identifiable information.
                  </p>
                </div>
              )}
            </div>
            <div className="cursor-pointer" onClick={handleSharingInfoToggle}>
              <div className="flex items-center p-2 gap-3 border-2 justify-between">
                <div className="flex p-2 align-middle items-center">
                  {sharingInfoOpen ? (
                    <HiMinus className="mr-2" />
                  ) : (
                    <HiPlus className="mr-2" />
                  )}
                  <h3>Sharing of My Personal Information</h3>
                </div>
                <div className="relative inline-block w-12 h-6 bg-gray-300 rounded-full">
                  <input
                    type="checkbox"
                    className="absolute opacity-0 w-0 h-0"
                    checked={sharingInfoOpen}
                    onChange={() => {}}
                  />
                  <span
                    className={`${
                      sharingInfoOpen ? "translate-x-6" : "translate-x-0"
                    } inline-block w-6 h-6 bg-blue-900 rounded-full transition-transform`}
                    onClick={handleSharingInfoToggle}
                  ></span>
                </div>
              </div>
              {sharingInfoOpen && (
                <div className="bg-blue-50 p-2 border-2">
                  <p>
                    These cookies are necessary for the website to function and
                    cannot be switched off in our systems. They are usually only
                    set in response to actions made by you which amount to a
                    request for services, such as setting your privacy
                    preferences, logging in or filling in forms. You can set
                    your browser to block or alert you about these cookies, but
                    some parts of the site will not then work. These cookies do
                    not store any personally identifiable information.
                  </p>
                </div>
              )}
            </div>
            <div className="flex gap-1 py-2">
              <input type="checkbox" />
              <a className="text-sm text-blue-900" href={""}>
                Don’t show this message again
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center space-x-4 p-3">
            <button
              onClick={onManageSettings}
              className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800"
            >
              REJECT ALL
            </button>
            <button
              onClick={onAccept}
              className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800"
            >
              CONFIRM MY CHOICES
            </button>
          </div>
        </div>
      </div>
      <div className="p-1 pr-0 w-1/12">X</div>
    </div>
  );
};

export default CookiesComponent;
