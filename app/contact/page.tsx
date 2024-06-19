import ContactForm from "./ui/ContactForm";
import BgTransition from "../ui/BgTransition";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

const page = () => {
  return (
    <main className="py-20 font-nanum flex flex-row items-start justify-around space-x-20 relative">
      <BgTransition />
      <section className="w-[35%] flex flex-col gap-5 items-center text-center">
        <h1 className=" font-bold text-[#6b6061] whitespace-pre-wrap text-4xl">
          CONTACT ME
        </h1>
        <div className=" font-geologica font-bold text-md flex flex-col gap-2">
          <span>&quot;LABOR SHORTAGE&quot;?</span>
          <span>Let us fill the gap!</span>
        </div>

        <p>
          Contact me today and see what I can do for you. No assignment too
          small or impossible... Available short term, long term. References
          provided.
        </p>
        <span>glenfarraye@gmail.com</span>

        <span>201-755-1172</span>
      </section>

      <ContactForm />
    </main>
  );
};

export default page;
