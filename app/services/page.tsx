import Image from "next/image";
import BgTransition from "../ui/BgTransition";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
};

const page = () => {
  return (
    <main className="flex flex-col items-center justify-center gap-14 text-center px-72 py-14 font-geologica font-semibold text-md relative">
      <BgTransition />
      <h1 className="text-[#6b6061] whitespace-pre-wrap text-4xl font-[500px]">
        360 - DEGREE SOLUTIONS
      </h1>

      <section className="flex flex-col gap-2">
        <span>*PROJECT MANAGEMENT</span>
        <span>*TEAM BUILDING</span>
        <span>*ORGANIZATIONAL DEVELOPMENT</span>
        <span>*PLM – PRODUCT LIFECYCLE MANAGEMENT (design, merchandising)</span>
        <span>*SUPPLY CHAIN (sourcing, production)</span>
        <span>*LOGISTICS (import, DC-warehousing, shipping)</span>
        <span>*SALES</span>
        <span>*MARKETING (traditional & digital)</span>
        <span>*P&L</span>
        <span>*BRANDING (PR, messaging)</span>
        <span>*LICENSING & NEGOTIATING (Licensor & Licensee)</span>
        <span>*CATEGORY EXTENSION</span>
        <span>*BUSINESS EXPANSION</span>
        <span>*B2B/B2C/D2C</span>
        <span>*WHOLESALE/RETAIL/E-COMMERCE</span>
      </section>

      <div className="mt-10 flex flex-col gap-2">
        <span>&quot;LABOR SHORTAGE&quot;?</span>
        <span>Let us fill the gap!</span>
      </div>

      <Image
        src={"/rating-star-icon.svg"}
        alt=""
        width={30}
        height={30}
        className=" mt-12"
      />
    </main>
  );
};

export default page;
