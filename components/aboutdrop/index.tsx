import SignUpComponent from "../signup";

function AboutDropComponent() {
    return (
        <div className="w-full flex mx-auto absolute bg-mcklightyellow z-10 pt-3 left-0">
            <ul className="w-11/12 flex mx-auto ">
                <li className="w-1/5 pl-2">
                </li>
                <li className="w-1/5 pl-2">
                    <div className="border-l border-black">
                        <ul>
                            <li className="blue-txt text-left text-sofia-reg py-2 pl-2 hover:bg-beige-50"><a className="cursor-pointer">Beauty</a></li>
                            <li className="blue-txt text-left text-sofia-reg py-2 pl-2 hover:bg-beige-50"><a className="cursor-pointer">Bone</a></li>
                            <li className="blue-txt text-left text-sofia-reg py-2 pl-2 hover:bg-beige-50"><a className="cursor-pointer">Digestion</a></li>
                            <li className="blue-txt text-left text-sofia-reg py-2 pl-2 hover:bg-beige-50"><a className="cursor-pointer">Energy</a></li>
                            <li className="blue-txt text-left text-sofia-reg py-2 pl-2 hover:bg-beige-50"><a className="cursor-pointer">Eye Health</a></li>
                            <li className="blue-txt text-left text-sofia-reg py-2 pl-2 hover:bg-beige-50"><a className="cursor-pointer">General Wellness</a></li>
                            <li className="blue-txt text-left text-sofia-reg py-2 pl-2 hover:bg-beige-50"><a className="cursor-pointer">Heart</a></li>
                            <li className="blue-txt text-left text-sofia-reg py-2 pl-2 hover:bg-beige-50"><a className="cursor-pointer">Immune Health</a></li>
                        </ul>
                    </div>
                </li>
                <li className="w-1/5 pl-2">
                    <div className="border-l border-black">
                        <ul>
                            <li className="blue-txt text-left text-sofia-reg py-2 pl-2 hover:bg-beige-50"><a className="cursor-pointer">Joints</a></li>
                            <li className="blue-txt text-left text-sofia-reg py-2 pl-2 hover:bg-beige-50"><a className="cursor-pointer">Kids</a></li>
                            <li className="blue-txt text-left text-sofia-reg py-2 pl-2 hover:bg-beige-50"><a className="cursor-pointer">Men&#39;s Health</a></li>
                            <li className="blue-txt text-left text-sofia-reg py-2 pl-2 hover:bg-beige-50"><a className="cursor-pointer">Mood</a></li>
                            <li className="blue-txt text-left text-sofia-reg py-2 pl-2 hover:bg-beige-50"><a className="cursor-pointer">Prenatal & Post Natal</a></li>
                            <li className="blue-txt text-left text-sofia-reg py-2 pl-2 hover:bg-beige-50"><a className="cursor-pointer">Sleep</a></li>
                            <li className="blue-txt text-left text-sofia-reg py-2 pl-2 hover:bg-beige-50"><a className="cursor-pointer">Stress</a></li>
                            <li className="blue-txt text-left text-sofia-reg py-2 pl-2 hover:bg-beige-50"><a className="cursor-pointer">Women&#39;s Health</a></li>

                        </ul>
                    </div>
                </li>
                <li className="w-1/5 pl-2">
                </li>
                {/* <li className="w-1/5 signup-form">
                    <div className="px-0 py-0 whitespace-normal mb-5">
                        <div className="px-3 py-3 lg:px-3 bg-white rounded-lg border-mcknormalgrey border-solid border">
                            <h5 className="m-0 pb-6 px-0 text-2xl text-sofia-reg text-mckblue">Email Signup & Rewards</h5>
                            <div className="px-0 text-lg text-mckblue text-sofia-reg">
                                Want to receive tips, personalized content and exclusive offers
                                from Foster & Thrive?
                            </div>
                            <div className="py-3 px-0 text-lg text-sofia-reg text-mcknormalgrey">Sign up today!</div>
                            <SignUpComponent />
                        </div>
                    </div>
                </li> */}
            </ul>
        </div>
    );


}

export default AboutDropComponent;