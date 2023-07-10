"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      alt="Logo"
      src="/images/logo.png"
      height={70}
      width={100}
      className="hidden md:block cursor-pointer"
    />
  );
};

export default Logo;
