import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <>
      {/* Contact - Footer */}
      <footer
        id="contact"
        className="z-20 bg-white fixed bottom-0 md:static w-full md:w-auto border-b md:border-none shadow-lg"
      >
        <div className="container mx-auto px-5 py-8 flex items-center justify-center">
          <div className="w-full flex justify-center gap-10">
            <a
              href="https://github.com/cristianmorenof23"
              target="_blank"
              className="text-black cursor-pointer"
            >
              <Image
                width={40}
                height={40}
                src="/github-logo_icon-icons.com_73546.png"
                alt="github logo"
                className="h-10 w-10 text-2xl transition hover:-translate-y-1 hover:scale-110"
              />
            </a>
            <a
              href="https://www.instagram.com/cristianmorenof23/"
              target="_blank"
              className="text-black cursor-pointer"
            >
              <Image
                width={40}
                height={40}
                src="/instagram_socialnetwork_20033.png"
                alt="instagram logo"
                className="h-10 w-10 text-2xl transition hover:-translate-y-1 hover:scale-110"
              />
            </a>
          </div>
          <span className="text-sm text-gray-600 sm:text-center text-start dark:text-gray-400">
            © {new Date().getFullYear()} All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
}
