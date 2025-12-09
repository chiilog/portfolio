"use client";

import { useEffect, useRef } from "react";

interface Props {
  src: string;
  children: React.ReactNode;
}

export default function HeroImage({ src, children }: Props) {
  const heroImageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const heroImage = heroImageRef.current;
    if (heroImage) {
      heroImage.classList.add("opacity-0");
      setTimeout(() => {
        heroImage.classList.remove("opacity-0");
        heroImage.classList.add("opacity-100");
      }, 100);
    }
  }, []);

  return (
    <section className="relative bg-gray-300 h-screen">
      <div className="absolute inset-0">
        <img
          ref={heroImageRef}
          src={src}
          alt="Hero Image"
          className="hero-image w-full h-full object-cover object-top opacity-0 transition-opacity duration-[2200ms] ease-in-out"
        />
        <div className="absolute inset-0 bg-salmon opacity-50"></div>
      </div>
      <div
        className="relative
                   flex
                   flex-col
                   items-center
                   justify-center
                   h-full
                   max-w-7xl
                   mx-auto
                   py-24
                   px-6
                   text-center"
      >
        {children}

        <div className="absolute bottom-10 left-0 right-0 text-center">
          <a
            href="#about"
            className="flex flex-col items-center cursor-pointer transition-transform hover:scale-105 focus:outline-none rounded-lg p-2"
            aria-label="次のセクションへスクロール"
          >
            <p className="font-quicksand text-white">Scroll down</p>
            <div className="text-white">
              <img src="/arrow-down.svg" width="24" height="24" alt="arrow down" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
