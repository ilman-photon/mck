import { useRef, useState } from "react";
import { items } from "../../public/items.json";
import HeaderComponent from "../header";

export default function CarouselComponent() {
  const carousalData = [
    {
      id: 1,
      title: "Banner 1",
      body: "Banner 1 Example",
      imageUrl: "images/banner_2.png",
    },
    {
      id: 2,
      title: "Banner 2",
      body: "Banner 2 Example",
      imageUrl: "images/banner_1.png",
    },
  ];
  const imgRefDiv = useRef();

  function handleCarouselImage(id: any) {
    // imgRefDiv.current[id-1].style
    console.log("id", id, imgRefDiv.current);
  }

  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="relative"
        data-te-carousel-init
        data-te-carousel-slide
      >
        <HeaderComponent />
        <div
          className="absloute w-full overflow-hidden after:clear-both after:block after:content-['']"
        // ref={imgRefDiv}
        >
          {carousalData.map((ele) => {
            return (
              <div className="container mx-auto" key={ele.id}>
                <div
                  className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-active
                  data-te-carousel-item
                >
                  <img src={ele.imageUrl} className="block w-full" alt="..." />
                  <div className="hero-banner p-3 text-white rounded-r-2xl rounded-b-2xl rounded-l-none absolute left-0 bottom-8">
                    <h2 className="m-3">
                      Foster & Thrive <br /> With you for life.
                    </h2>
                    <p className="m-3">
                      You're in control of your health journey. <br /> We are
                      here to help.
                    </p>
                    <div className="btn w-[124px] h-[44px] m-3">Learn More</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div
          className="absolute right-0 bottom-0 left-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
          data-te-carousel-indicators
        >
          {carousalData.map((ele) => {
            return (
              <button
                key={ele.id}
                type="button"
                onClick={() => handleCarouselImage(ele.id)}
                data-te-target="#carouselExampleCaptions"
                data-te-slide-to="0"
                data-te-carousel-active
                className="mx-[3px] box-content h-[8px] w-[8px] flex-initial cursor-pointer border-0 border-transparent rounded bg-[#CCD1E3] bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
            );
          })}
        </div>
        

      </div>
    </div>
  );
}
