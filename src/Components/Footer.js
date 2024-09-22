import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";

const sections = [
  {
    title: "Solutions",
    items: ["Marketing", "Analytics", "Commerce", "Data", "Cloud"],
  },
  {
    title: "Support",
    items: ["Pricing", "Documentation", "Guides", "API Status"],
  },
  {
    title: "Company",
    items: ["About", "Blog", "Jobs", "Press", "Partners"],
  },
  {
    title: "Legal",
    items: ["Claims", "Privacy", "Terms", "Policies", "Conditions"],
  },
];

const items = [
  { name: "Facebook", icon: FaFacebook, link: "https://www.facebook.com/" },
  { name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/" },
  { name: "Twitter", icon: FaTwitter, link: "https://twitter.com/" },
  { name: "Twitch", icon: FaTwitch, link: "https://www.twitch.tv/" },
  { name: "Github", icon: FaGithub, link: "https://github.com/" },
];

const Footer = () => {
  return (
    <div className="w-full mt-10 bg-slate-900 text-gray-300 px-4">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 border-b-2 border-gray-600 py-8 gap-4">
        {sections.map((section, index) => (
          <div key={index}>
            <h6 className="font-bold uppercase pt-2">{section.title}</h6>
            <ul>
              {section.items.map((item, i) => (
                <li key={i} className="py-1 text-gray-500 cursor-pointer duration-200 hover:text-white">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="col-span-1 md:col-span-2 lg:col-span-2 pt-8 md:pt-2">
          <p className="font-bold uppercase">Let's Make a Deal</p>
          <p className="py-4">The latest resources, sent to your inbox weekly.</p>
          <form className="flex flex-col sm:flex-row">
            <input
              className="w-full p-2 mr-0 sm:mr-4 rounded-md mb-4"
              type="email"
              placeholder="Enter email..."
            />
            <button className="p-2 mb-4 bg-blue-600 text-white rounded-md">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="flex flex-col max-w-[1240px] px-4 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
        <p className="py-4">Orflax. All rights reserved</p>
        <div className="flex justify-center sm:justify-between sm:w-[300px] pt-4 text-2xl">
          {items.map((x, index) => {
            const Icon = x.icon;
            return (
              <a href={x.link} key={index} className="hover:text-white">
                <Icon />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
