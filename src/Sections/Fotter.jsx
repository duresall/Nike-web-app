import React from "react";
import footerLogo from "../assets/images/footer-logo.svg";
import { footerLinks, socialMedia } from "../constantce";

const Fotter = () => {
  return (
    <footer className="bg-black">
      <div className="max-container padding-x py-14">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Logo and social media section */}
          <div className="flex-1">
            <a href="/">
              <img src={footerLogo} alt="logo" width={150} height={36} />
            </a>
            <p className="mt-5 font-montserrat text-white text-sm leading-7 max-w-sm">
              Get shoes ready for the new term at your nearest Nike store. Find
              Your perfect Size In Store. Get Rewards
            </p>
            <div className="flex gap-5 mt-8">
              {socialMedia.map((icon, index) => (
                <img
                  key={index}
                  src={icon.src}
                  alt={icon.alt}
                  width={24}
                  height={24}
                  className="cursor-pointer brightness-0 invert hover:brightness-90"
                />
              ))}
            </div>
          </div>

          {/* Links sections */}
          <div className="flex-1 flex flex-wrap gap-20 justify-between">
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h4 className="text-white font-montserrat text-2xl font-medium mb-6">
                  {section.title}
                </h4>
                <ul className="flex flex-col gap-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.link}
                        className="text-white font-montserrat text-sm leading-7 hover:text-slate-400"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Fotter;
