import Image from "next/image";
import { useEffect } from "react";
import BgTransition from "./BgTransition";

const LandingPage = () => {
  useEffect(() => {
    const imageElem = document.getElementById("hero-image") as HTMLImageElement;
    const handleScrolling = () => {
      const offsetY = window.scrollY;
      imageElem.style.top = offsetY * 0.4 + "px";
      console.log(offsetY);
    };

    if (imageElem) {
      console.log("image element found");
      window.addEventListener("scroll", () => handleScrolling());
    }
  }, []);
  return (
    <main className="relative w-full flex flex-col overflow-hidden ">
      <BgTransition />
      <section id="hero-image" className="w-auto h-auto absolute -top-8 -z-10">
        <Image
          src="https://del229.wordpress.com/wp-content/uploads/2024/06/screenshot-2024-06-19-030534.png"
          alt=""
          width={1376}
          height={1000}
          className={"w-auto h-auto"}
        />
      </section>

      <section className="z-50 w-1/2 flex flex-col gap-5 px-24 pt-12 font-nanum self-end">
        <h1 className="w-full text-[#6b6061] whitespace-pre-wrap text-[70px] font-geologica font-[500px]">
          I<i style={{ color: "#6b6061" }}>AM</i> (THAT I
          <i style={{ color: "#6b6061" }}>AM</i>) *RETAIL THERAPY
        </h1>
        <span>Professional Consultant</span>
        <p style={{ lineHeight: "30px" }}>
          Business development strategist with demonstrated success for
          ideating, cultivating and consummating new Brands, spearheading
          turnarounds, as well as generating, or accelerating growth potential
          across Men&apos;s, Women&apos;s, Children&apos;s Apparel/Footwear/
          Accessories, Home, Health & Wellness (products and services),
          Hospitality, Healthcare.
        </p>
        <div className=" font-geologica font-bold text-md flex flex-col gap-2">
          <span>&quot;LABOR SHORTAGE&quot;?</span>
          <span>Let us fill the gap!</span>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
