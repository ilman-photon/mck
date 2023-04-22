import SignUpComponent from "../signup";

function AboutDropComponent() {
    return (
        <div className="w-full flex mx-auto absolute bg-mcklightyellow z-10 pt-3 left-0">
            <ul className="w-11/12 flex mx-auto ">
                <li className="w-1/4 pl-2">
                    <div className="border-l border-black">                        
                        <ul>
                            <li className="blue-txt text-left text-sofia-reg py-3 pl-2">Beauty</li>
                            <li className="blue-txt text-left text-sofia-reg py-3 pl-2">Bone</li>
                            <li className="blue-txt text-left text-sofia-reg py-3 pl-2">Digestion</li>
                            <li className="blue-txt text-left text-sofia-reg py-3 pl-2">Energy</li>
                            <li className="blue-txt text-left text-sofia-reg py-3 pl-2">Eye Health</li>
                            <li className="blue-txt text-left text-sofia-reg py-3 pl-2">General Wellness</li>
                            <li className="blue-txt text-left text-sofia-reg py-3 pl-2">Heart</li>
                            <li className="blue-txt text-left text-sofia-reg py-3 pl-2">Immune Health</li>
                        </ul>
                    </div>
                </li>
                <li className="w-1/4 pl-2">
                    <div className="border-l border-black">                       
                        <ul>
                        <li className="blue-txt text-left text-sofia-reg py-3 pl-2">Joints</li>
                        <li className="blue-txt text-left text-sofia-reg py-3 pl-2">Kids</li>
                            <li className="blue-txt text-left text-sofia-reg py-3 pl-2">Men&#39;s Health</li>
                            <li className="blue-txt text-left text-sofia-reg py-3 pl-2">Mood</li>
                            <li className="blue-txt text-left text-sofia-reg py-3 pl-2">Prenatal & Post Natal</li>
                            <li className="blue-txt text-left text-sofia-reg py-3 pl-2">Sleep</li>
                            <li className="blue-txt text-left text-sofia-reg py-3 pl-2">Stress</li>
                            <li className="blue-txt text-left text-sofia-reg py-3 pl-2">Women&#39;s Health</li>
                            
                        </ul>
                    </div>
                </li>
                <li className="w-1/4 pl-2">                    
                </li>
                <li className="w-1/4">
                    <div className="px-0 py-0 whitespace-normal mb-5">
                        <div className="px-3 py-3 lg:py-4 lg:px-3 bg-white rounded-lg border-mcknormalgrey border-solid border">
                            <h5 className="m-0 pb-6 px-0 text-2xl text-sofia-reg text-mckblue">Email Signup & Rewards</h5>
                            <div className="px-0 text-lg text-mckblue text-sofia-reg">
                                Want to receive tips, personalized content and exclusive offers
                                from Foster & Thrive?
                            </div>
                            <div className="text-mckblue py-6 px-0 text-lg text-sofia-reg">Sign up today!</div>
                            <SignUpComponent />
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );


}

export default AboutDropComponent;