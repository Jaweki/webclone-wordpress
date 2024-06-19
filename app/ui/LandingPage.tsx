import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const LandingPage = () => {
  useEffect(() => {
    const imageElem = document.getElementById("hero-image") as HTMLImageElement;
    const handleScrolling = () => {
      const offsetY = window.scrollY;
      imageElem.style.top = offsetY * 0.8 + "px";
      console.log(offsetY);
    };

    if (imageElem) {
      console.log("image element found");
      window.addEventListener("scroll", () => handleScrolling());
    }
  }, []);
  return (
    <div className="relative z-0">
      <div id="hero-image" className="w-auto h-auto absolute top-10 z-10">
        <Image
          src="https://del229.wordpress.com/wp-content/uploads/2024/06/screenshot-2024-06-19-030534.png"
          alt=""
          width={1376}
          height={1000}
          className={"w-auto h-auto"}
        />
      </div>
      <main className="absolute z-50 w-full top-0 flex flex-col items-end">
        <header className="w-full flex flex-row justify-between items-center px-20 py-7 bg-white">
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="https://del229.wordpress.com/wp-content/uploads/2024/06/logo-image.webp"
              alt="logo"
              width={150}
              height={80}
              className="w-auto h-auto"
            />
            <span className=" font-geologica text-xl font-semibold">
              I<i>AM</i>&nbsp;(THAT IAM)&nbsp;*RETAIL&nbsp;THERAPY
            </span>
          </div>
          <nav className="text-sm font-light flex flex-row items-center gap-5">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        <section className=" w-1/2 flex flex-col gap-5 px-24 pt-12 font-nanum">
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
        <footer className="w-full flex flex-col items-center justify-center gap-5 pt-16 pb-5 bg-white">
          <section className="flex flex-row gap-2">
            <Image
              src="https://del229.wordpress.com/wp-content/uploads/2024/06/facebook-icon-1.webp"
              alt="facebook account"
              width={50}
              height={50}
              className="w-auto h-auto"
            />
            <Image
              src="https://del229.wordpress.com/wp-content/uploads/2024/06/twitter-icon.webp"
              alt="twitter account"
              width={50}
              height={50}
              className="w-auto h-auto"
            />
            <Image
              src="https://del229.wordpress.com/wp-content/uploads/2024/06/linkedin-icon.webp"
              alt="linkedin account"
              width={50}
              height={50}
              className="w-auto h-auto"
            />
          </section>
          <div className="flex flex-row items-center font-nanum">
            <span>&copy;</span>
            <span>
              {new Date().getFullYear()} by iAM (that iAM) Retail Therapy, Inc.
              Proudly created with Wix.com
            </span>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default LandingPage;
