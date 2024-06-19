import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
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
  );
};

export default Header;
