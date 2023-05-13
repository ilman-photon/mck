

import { memo } from "react";
const CommentComponent = () => {

    return (
        <div>
            <div className='text-sofia-reg text-lg font-extrabold text-mckblack pb-3 border border-t-0 border-x-0 border-mckdarkgrey mb-6'>1 Comment</div>
            <div className='flex items-center text-sofia-reg text-lg font-normal text-mcknormalgrey pb-6'>
                Sort by: <div className='flex items-center pl-2'>Most Recent <div className='pl-6 cursor-pointer'>
                    <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.08049 0.664435L6.79423 5.37818L11.508 0.664435C11.9818 0.190631 12.7472 0.190631 13.221 0.664435C13.6948 1.13824 13.6948 1.90361 13.221 2.37742L7.64465 7.95373C7.17084 8.42753 6.40547 8.42753 5.93166 7.95373L0.355353 2.37742C-0.118451 1.90361 -0.118451 1.13824 0.355353 0.664435C0.829157 0.20278 1.60668 0.190631 2.08049 0.664435Z" fill="#3A3E41" /></svg>
                </div>
                </div>
            </div>
            <div className='border border-mckdarkgrey rounded-lg p-6 mb-6'>
                <div className='flex pb-6'>
                    <div className=''>
                        <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_110_4273)"><rect y="0.809082" width="48" height="48" rx="24" fill="#DBDFEB" /><path d="M15 17.8091C15 12.8366 19.0275 8.80908 24 8.80908C28.9725 8.80908 33 12.8366 33 17.8091C33 22.7816 28.9725 26.8091 24 26.8091C19.0275 26.8091 15 22.7816 15 17.8091Z" fill="#CCD1E3" /><path d="M6 38.0591C6 32.0741 17.9925 29.0591 24 29.0591C30.0075 29.0591 42 32.0741 42 38.0591L37.5 44.3091L23.5 48.3091L10.5 44.3091L6 38.0591Z" fill="#CCD1E3" /></g><rect x="1" y="1.80908" width="46" height="46" rx="23" stroke="#CCD1E3" strokeWidth="2" /><defs><clipPath id="clip0_110_4273"><rect y="0.809082" width="48" height="48" rx="24" fill="white" /></clipPath></defs></svg>
                    </div>
                    <div className='ml-3'>
                        <div className='text-sofia-reg text-base font-normal text-mcknormalgrey'>Guest</div>
                        <div className='text-sofia-reg text-base font-normal text-mcknormalgrey'>March 8,2023</div>
                        <div className='pt-6 pb-6'>
                            <p className='text-sofia-reg text-base font-normal text-mcknormalgrey'>Thank you for this information it’s been super helpful!</p>
                        </div>
                    </div>
                </div>
                <div className='flex relative'>
                    <div className='flex items-center text-sofia-reg text-base font-normal text-mcknormalgrey pr-6 cursor-pointer'>
                        <svg width="20" height="19" className="mr-3" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 0.634033C12.76 0.634033 11.09 1.44403 10 2.72403C8.91 1.44403 7.24 0.634033 5.5 0.634033C2.42 0.634033 0 3.05403 0 6.13403C0 9.91403 3.4 12.994 8.55 17.674L10 18.984L11.45 17.664C16.6 12.994 20 9.91403 20 6.13403C20 3.05403 17.58 0.634033 14.5 0.634033ZM10.1 16.184L10 16.284L9.9 16.184C5.14 11.874 2 9.02403 2 6.13403C2 4.13403 3.5 2.63403 5.5 2.63403C7.04 2.63403 8.54 3.62403 9.07 4.99403H10.94C11.46 3.62403 12.96 2.63403 14.5 2.63403C16.5 2.63403 18 4.13403 18 6.13403C18 9.02403 14.86 11.874 10.1 16.184Z" fill="#3A3E41" /></svg>Like
                    </div>
                    <div className='flex items-center text-sofia-reg text-base font-normal text-mcknormalgrey pr-6 cursor-pointer'>
                        <svg width="22" height="22" className="mr-3" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.75 15.4791V2.30908H18.75V8.30908H20.75V2.30908C20.75 1.20908 19.85 0.309082 18.75 0.309082H2.75C1.65 0.309082 0.76 1.20908 0.76 2.30908L0.75 20.3091L4.75 16.3091H13.75V14.3091H3.92L2.75 15.4791Z" fill="#3A3E41" /><path d="M21.25 14.3091H19.05L20.75 10.3091H15.75V16.3091H17.75V21.3091L21.25 14.3091Z" fill="#3A3E41" /></svg>Reply
                    </div>
                    <div className='flex items-center text-sofia-reg text-base font-normal text-mcknormalgrey absolute right-0 cursor-pointer'>
                        <svg width="24" height="25" className="mr-3" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_110_4288)"><rect y="0.809082" width="24" height="24" rx="12" fill="#DBDFEB" /><path d="M7.5 9.30908C7.5 6.82283 9.51375 4.80908 12 4.80908C14.4862 4.80908 16.5 6.82283 16.5 9.30908C16.5 11.7953 14.4862 13.8091 12 13.8091C9.51375 13.8091 7.5 11.7953 7.5 9.30908Z" fill="#CCD1E3" /><path d="M3 19.4341C3 16.4416 8.99625 14.9341 12 14.9341C15.0037 14.9341 21 16.4416 21 19.4341L18.75 22.5591L11.75 24.5591L5.25 22.5591L3 19.4341Z" fill="#CCD1E3" /></g><rect x="1" y="1.80908" width="22" height="22" rx="11" stroke="#CCD1E3" strokeWidth="2" /><defs><clipPath id="clip0_110_4288"><rect y="0.809082" width="24" height="24" rx="12" fill="white" /></clipPath></defs></svg>1 Like
                    </div>
                </div>
            </div>


            <div className='border border-mckdarkgrey rounded'>
                <div className='border border-mckthingrey rounded bg-shadesblue py-3 px-4 h-32'>
                    <p className='text-sofia-reg text-base text-mcklggrey font-normal'>Comment</p>
                </div>
                <div className='grid lg:grid-cols-2 gap-4 relative items-center py-3 px-5'>
                    <div className='flex items-center'>
                        <div className='pr-4 cursor-pointer'>
                            <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 0.809082H2C1 0.809082 0 1.80908 0 2.80908V16.8091C0 17.9091 0.9 18.8091 2 18.8091H20C21 18.8091 22 17.8091 22 16.8091V2.80908C22 1.80908 21 0.809082 20 0.809082ZM20 16.7291C19.98 16.7591 19.94 16.7891 19.92 16.8091H2V2.88908L2.08 2.80908H19.91C19.94 2.82908 19.97 2.86908 19.99 2.88908V16.7291H20ZM10 13.3191L7.5 10.3091L4 14.8091H18L13.5 8.80908L10 13.3191Z" fill="#767676" /></svg>
                        </div>
                        <div className='pr-4 cursor-pointer'>
                            <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.225 7.59908C10.195 6.92908 10.875 5.82908 10.875 4.80908C10.875 2.54908 9.125 0.809082 6.875 0.809082H0.625V14.8091H7.665C9.755 14.8091 11.375 13.1091 11.375 11.0191C11.375 9.49908 10.515 8.19908 9.225 7.59908ZM3.625 3.30908H6.625C7.455 3.30908 8.125 3.97908 8.125 4.80908C8.125 5.63908 7.455 6.30908 6.625 6.30908H3.625V3.30908ZM7.125 12.3091H3.625V9.30908H7.125C7.955 9.30908 8.625 9.97908 8.625 10.8091C8.625 11.6391 7.955 12.3091 7.125 12.3091Z" fill="#767676" /></svg>
                        </div>
                        <div className='pr-4 cursor-pointer'>
                            <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 0.809082V3.80908H6.21L2.79 11.8091H0V14.8091H8V11.8091H5.79L9.21 3.80908H12V0.809082H4Z" fill="#767676" /></svg>
                        </div>
                        <div className='pr-4 cursor-pointer'>
                            <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 14.8091C10.31 14.8091 13 12.1191 13 8.80908V0.809082H10.5V8.80908C10.5 10.7391 8.93 12.3091 7 12.3091C5.07 12.3091 3.5 10.7391 3.5 8.80908V0.809082H1V8.80908C1 12.1191 3.69 14.8091 7 14.8091ZM0 16.8091V18.8091H14V16.8091H0Z" fill="#767676" /></svg>
                        </div>
                        <div className='pr-4 cursor-pointer'>
                            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.24 6.0542C3.98 5.5742 3.85 5.0242 3.85 4.3842C3.85 3.7742 3.98 3.2242 4.25 2.7142C4.51 2.2142 4.88 1.7842 5.36 1.4242C5.84 1.0742 6.41 0.794199 7.06 0.594199C7.72 0.404199 8.45 0.304199 9.24 0.304199C10.05 0.304199 10.78 0.414199 11.45 0.644199C12.11 0.864199 12.68 1.1842 13.14 1.5842C13.61 1.9842 13.97 2.4642 14.22 3.0142C14.47 3.5642 14.6 4.1642 14.6 4.8242H11.59C11.59 4.5142 11.54 4.2342 11.44 3.9742C11.35 3.7042 11.2 3.4842 11 3.2942C10.8 3.1042 10.55 2.9642 10.25 2.8542C9.95 2.7542 9.59 2.6942 9.19 2.6942C8.8 2.6942 8.45 2.7342 8.16 2.8242C7.87 2.9142 7.63 3.0342 7.44 3.1842C7.25 3.3442 7.1 3.5242 7 3.7342C6.9 3.9442 6.85 4.1642 6.85 4.3942C6.85 4.8742 7.1 5.2742 7.59 5.6042C7.97 5.8542 8.36 6.0842 9 6.3042H4.39C4.34 6.2242 4.28 6.1342 4.24 6.0542ZM18 7.3042H0V9.3042H9.62C9.8 9.3742 10.02 9.4442 10.17 9.5042C10.54 9.6742 10.83 9.8442 11.04 10.0142C11.25 10.1842 11.39 10.3742 11.47 10.5842C11.54 10.7842 11.58 11.0142 11.58 11.2742C11.58 11.5042 11.53 11.7242 11.44 11.9342C11.35 12.1342 11.21 12.3142 11.02 12.4642C10.83 12.6142 10.6 12.7242 10.31 12.8142C10.02 12.8942 9.68 12.9442 9.3 12.9442C8.87 12.9442 8.47 12.9042 8.12 12.8142C7.77 12.7242 7.46 12.5842 7.21 12.3942C6.96 12.2042 6.76 11.9542 6.62 11.6442C6.48 11.3342 6.37 10.8842 6.37 10.4342H3.4C3.4 10.9842 3.48 11.5642 3.64 12.0142C3.8 12.4642 4.01 12.8642 4.29 13.2242C4.57 13.5742 4.89 13.8842 5.27 14.1442C5.64 14.4042 6.05 14.6242 6.49 14.7942C6.93 14.9642 7.39 15.0942 7.87 15.1842C8.35 15.2642 8.83 15.3142 9.31 15.3142C10.11 15.3142 10.84 15.2242 11.49 15.0342C12.14 14.8442 12.7 14.5842 13.16 14.2442C13.62 13.9042 13.98 13.4742 14.23 12.9742C14.48 12.4742 14.61 11.9042 14.61 11.2642C14.61 10.6642 14.51 10.1242 14.3 9.6542C14.25 9.5442 14.19 9.4242 14.13 9.3242H18V7.3042Z" fill="#767676" /></svg>
                        </div>
                        <div className='pr-4 cursor-pointer'>
                            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 0.309082V3.30908H11.5V15.3091H14.5V3.30908H19.5V0.309082H6.5ZM0.5 8.30908H3.5V15.3091H6.5V8.30908H9.5V5.30908H0.5V8.30908Z" fill="#767676" /></svg>
                        </div>
                        <div className='pr-4 cursor-pointer'>
                            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.25 6.30908C1.42 6.30908 0.75 6.97908 0.75 7.80908C0.75 8.63908 1.42 9.30908 2.25 9.30908C3.08 9.30908 3.75 8.63908 3.75 7.80908C3.75 6.97908 3.08 6.30908 2.25 6.30908ZM2.25 0.309082C1.42 0.309082 0.75 0.979082 0.75 1.80908C0.75 2.63908 1.42 3.30908 2.25 3.30908C3.08 3.30908 3.75 2.63908 3.75 1.80908C3.75 0.979082 3.08 0.309082 2.25 0.309082ZM2.25 12.3091C1.42 12.3091 0.75 12.9891 0.75 13.8091C0.75 14.6291 1.43 15.3091 2.25 15.3091C3.07 15.3091 3.75 14.6291 3.75 13.8091C3.75 12.9891 3.08 12.3091 2.25 12.3091ZM5.25 14.8091H19.25V12.8091H5.25V14.8091ZM5.25 8.80908H19.25V6.80908H5.25V8.80908ZM5.25 0.809082V2.80908H19.25V0.809082H5.25Z" fill="#767676" /></svg>
                        </div>
                        <div className='pr-4 cursor-pointer'>
                            <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 13.8091H2.5V14.3091H1.5V15.3091H2.5V15.8091H0.5V16.8091H3.5V12.8091H0.5V13.8091ZM1.5 4.80908H2.5V0.809082H0.5V1.80908H1.5V4.80908ZM0.5 7.80908H2.3L0.5 9.90908V10.8091H3.5V9.80908H1.7L3.5 7.70908V6.80908H0.5V7.80908ZM5.5 1.80908V3.80908H19.5V1.80908H5.5ZM5.5 15.8091H19.5V13.8091H5.5V15.8091ZM5.5 9.80908H19.5V7.80908H5.5V9.80908Z" fill="#767676" /></svg>
                        </div>
                    </div>
                    <div className='lg:text-right'>
                        <button type='button' className='text-sofia-reg lg:text-base text-sm lg:font-extrabold font-normal text-center text-mckwhite rounded-lg bg-mckblue lg:p-3 px-3 py-2'>ADD COMMENT</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default memo(CommentComponent);
