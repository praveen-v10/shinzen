
import React from "react";
import ServicePage from "./ServicePage";

export const metadata = {
  title: "Zenth Tech - Services",
  description: "Explore our wide range of digital services, including web development and app development, designed to help businesses thrive.",
  keywords: ["Digital Services", "Web Development", "App Development", "Tech Solutions", "Business Solutions","Digital Marketing" ,"Visual art","Product Shoot","Advertisement Shoot" ,"Zenth Tech Services"],
  openGraph: {
    title: "Zenth Tech - Services",
    description: "Offering comprehensive digital solutions including web and app development to enhance your business.",
    url: "https://www.zenth.in/Services",
  },
};


function page() {
  return <ServicePage/>
}

export default page;
