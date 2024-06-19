import { Metadata } from "next";
import BgTransition from "../ui/BgTransition";

export const metadata: Metadata = {
  title: "About",
};

const page = () => {
  return (
    <main
      className={
        "flex flex-col items-center justify-center gap-9 text-center font-nanum px-72 py-10 relative"
      }
    >
      <BgTransition />
      <h1 className="text-[#6b6061] whitespace-pre-wrap text-4xl font-geologica font-[500px]">
        MORE ABOUT ME
      </h1>
      <span>
        Seasoned and successful C-Suite executive in consumer products.
      </span>

      <p>
        In depth background of servicing expansive distribution channels,
        including better specialty shops, Majors (brick & mortar and .com
        platforms), i.e., Neiman Marcus, Saks, Macy&apos;s, Nordstrom, JC
        Penney, Sears, Kohl&apos;s, Walmart, all branches of military,
        membership only warehouse clubs and discounters, as well as e-tail
        channels, including Amazon, Zappos and more.
      </p>

      <p>
        Experienced in domestic and International business affairs having
        tenured in corporate and entrepreneurial environments, public and
        private enterprising across wholesale, retail/e-tail channels.
      </p>

      <p>
        High standard of ethics and integrity evidenced by impeccable
        professional reputation and qualitative industry relationships
        throughout North America and International (Asia, Europe, India).
      </p>
      <div className=" font-geologica font-bold text-md flex flex-col gap-2">
        <span>&quot;LABOR SHORTAGE&quot;?</span>
        <span>Let us fill the gap!</span>
      </div>
    </main>
  );
};

export default page;
