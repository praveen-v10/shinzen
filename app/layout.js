

import React from "react";
import Header from "./components/Headerr";
import "./globals.css";



export const metadata = {
  title: "Zenth Tech",
  description: "Innovative Digital Services for Your Business",
  keywords: ["Digital Solutions, Technology Services, Business Growth, Innovative Technology, Digital Transformation, Tech Solutions, Efficiency Improvement, Advanced Digital Services"],
  icons: {
    icon: "https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/Group%20136%20(2).png?alt=media&token=a7d78059-53af-44d9-845f-738804651bec",
  },
  openGraph: {
    title: "Zenth Tech - Innovative Digital Services",
    description: "Providing cutting-edge digital solutions to enhance your business.",
    url: "https://www.zenth.in",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/Group%20136%20(2).png?alt=media&token=a7d78059-53af-44d9-845f-738804651bec",
        width: 800,
        height: 600,
        alt: "Zenth Tech Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zenth Tech - Innovative Digital Services",
    description: "We offer digital services that drive growth and efficiency for your business.",
    images: ["https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/Group%20136%20(2).png?alt=media&token=a7d78059-53af-44d9-845f-738804651bec"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
           <link rel="icon" href="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/Group%20136%20(2).png?alt=media&token=a7d78059-53af-44d9-845f-738804651bec" />

      <body >
        <Header/>
        {children}

        </body>
    
    </html>
  );
}
