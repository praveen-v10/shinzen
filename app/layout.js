import React from "react";
import Header from "./components/Headerr";
import "./globals.css";

export const metadata = {
  title: "Zenth Tech | Innovative Digital Solutions for Growth",
  description:
    "Zenth Tech offers innovative digital solutions, including custom software services, brand growth strategies, and policy-driven solutions to help your business thrive.",
  keywords: [
    "Zenth Tech",
    "zenth",
    "Digital Solutions",
    "Technology Services",
    "Business Growth",
    "Innovative Technology",
    "Digital Transformation",
    "Tech Solutions",
    "Brand",
    "Service",
    "Solutions",
  ],
  icons: {
    icon: "https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/Group%20136%20(2).png?alt=media&token=a7d78059-53af-44d9-845f-738804651bec",
  },
  metadataBase: new URL("https://www.zenth.in"),  
  openGraph: {
    title: "Zenth Tech | Innovative Digital Solutions for Growth",
    description:
      "Zenth Tech offers innovative digital solutions, including custom software services, brand growth strategies, and policy-driven solutions to help your business thrive.",
    url: "https://www.zenth.in",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Zenth Tech Logo",
      },
    ],
    type: "website",
    locale: "en_IN", // Added locale to match the site
    site_name: "Zenth Tech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zenth Tech | Innovative Digital Solutions for Growth",
    description:
      "Zenth Tech offers innovative digital solutions, including custom software services, brand growth strategies, and policy-driven solutions to help your business thrive.",
      images: [
        {
          url: "/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: "Zenth Tech Logo",
        },
      ],
  },
  additionalMetaTags: [
    {
      name: "viewport",
      content:
        "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=2, user-scalable=1, viewport-fit=cover",
    },
    {
      httpEquiv: "X-UA-Compatible",
      content: "IE=edge,chrome=1",
    },
    {
      name: "format-detection",
      content: "telephone=no",
    },
  ],
  socialMedia: {
    instagram: "https://www.instagram.com/zenth_tech/",
    facebook: "https://www.facebook.com/profile.php?id=61563341759261",
    linkedIn:
      "https://www.linkedin.com/company/zenth-tech/about/?viewAsMember=true",
    youtube: "https://www.youtube.com/@Zenthtech_Official",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
