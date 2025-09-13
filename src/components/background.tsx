"use client";
import Image from "next/image";
import { ReactNode } from "react";

interface ImageBackgroundProps {
  image: string;
  children?: ReactNode;
}

export default function ImageBackground({
  image,
  children,
}: ImageBackgroundProps) {
  return (
    <>
      <div className="relative w-full h-full flex flex-col justify-end">
        <Image src={image} alt="Background" fill className="object-cover" />
        <div className="relative z-10">{children}</div>
      </div>
    </>
  );
}
