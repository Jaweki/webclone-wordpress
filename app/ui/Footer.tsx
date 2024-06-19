import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center justify-center gap-5 pt-16 pb-5 bg-white z-50">
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
  );
};

export default Footer;
