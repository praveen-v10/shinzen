"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div>
      {/* Desktop */}
      <div className="hidden  2xl:block ">
        <div className="pt-32">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/Footer%20(2).png?alt=media&token=274c4aca-b953-4244-94ce-d7a8f13ebe1c"
            alt="Footer"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="select-none"
            onContextMenu={(e) => e.preventDefault()}
            draggable="false"
          />
        </div>

        <div className=" w-full bg-[#104E56] pb-10">
          <div className=" max-w-[85%] mx-auto">
            <div className="flex justify-between pt-12">
              <div className=" w-[60%] flex space-x-[100px] items-center">
                <div className="h-[220px]  ">
                  <h1 className="text-[1.3vw] text-white font-T1 font-semibold">
                    Pages
                  </h1>

                  <Link href='/'>
                  <p className="text-[1vw] text-[#D7D7D7] font-T2 font-medium pt-4 hover:underline cursor-pointer">
                    Home
                  </p>
                  </Link>

                  <Link href='/About'>
                  <p className="text-[1vw] text-[#D7D7D7] font-T2 font-medium pt-1 hover:underline cursor-pointer">
                    About
                  </p>
                  </Link>
                  <Link href='/Service'>
                  <p className="text-[1vw] text-[#D7D7D7] font-T2 font-medium pt-1 hover:underline cursor-pointer">
                    Service
                  </p>
                  </Link>
                  <Link href='/Internship'>
                  <p className="text-[1vw] text-[#D7D7D7] font-T2 font-medium pt-1 hover:underline cursor-pointer">
                    Internship
                  </p>
                  </Link>
                  <Link href='/Career'>
                  <p className="text-[1vw] text-[#D7D7D7] font-T2 font-medium pt-1 hover:underline cursor-pointer">
                    Career
                  </p>
                  </Link>
                </div>

                <div className="h-[220px]  ">
                  <h1 className="text-[1.3vw] text-white font-T1 font-semibold">
                  Service
                  </h1>
                  <Link href='/Service#software'>
                  <p className="text-[1vw] text-[#D7D7D7] font-T2 font-medium pt-4 hover:underline cursor-pointer">
                    Software
                  </p>
                  </Link>

                  <Link href='/Service#web'>
                  <p className="text-[1vw] text-[#D7D7D7] font-T2 font-medium pt-1 hover:underline cursor-pointer">
                    Web solutions
                  </p>
                  </Link>
                  <Link href='/Service#app'>
                  <p className="text-[1vw] text-[#D7D7D7] font-T2 font-medium pt-1 hover:underline cursor-pointer">
                   Mobile App
                  </p>  
                  </Link>  

                     <Link href='/Service#marketing'>         
                  <p className="text-[1vw] text-[#D7D7D7] font-T2 font-medium pt-1 hover:underline cursor-pointer">
                    Marketing
                  </p>
                  </Link>
                  <Link href='/Service#ui/ux'>
                  <p className="text-[1vw] text-[#D7D7D7] font-T2 font-medium pt-1 hover:underline cursor-pointer">
                    UI & UX
                  </p>
                  </Link>
                  <Link href='/Service#visual'>
                  <p className="text-[1vw] text-[#D7D7D7] font-T2 font-medium pt-1 hover:underline cursor-pointer">
                    Visual Arts
                  </p>
                  </Link>
                </div>

                <div className="h-[220px] ">
                  <h1 className="text-[1.3vw] text-white font-T1 font-semibold">
                    Support
                  </h1>
                  <Link href='/Contact'>
                  <p className="text-[1vw] text-[#D7D7D7] font-T2 font-medium pt-4 hover:underline cursor-pointer">
                    Contact
                  </p>
                  </Link>
                  <p className="text-[1vw] text-[#D7D7D7] font-T2 font-medium pt-1 hover:underline cursor-pointer">
                    Privacy Policy
                  </p>
                  <p className="text-[1vw] text-[#D7D7D7] font-T2 font-medium pt-1 hover:underline cursor-pointer">
                    Terms & Conditions
                  </p>
                  <p className="text-[1vw] text-[#D7D7D7] font-T2 font-medium pt-1 hover:underline cursor-pointer">
                    Refund Policy
                  </p>
                </div>
              </div>
              <div className="w-[30%]">
                <div className="flex justify-start items-center">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/footer%20logo.png?alt=media&token=8bae70c7-996e-436f-a4f2-eaf0e8414655"
                    alt="Footer"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "80%", height: "auto" }}
                    className="select-none"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />
                </div>

                <div className="pt-6">
                  <h1 className="text-[1.3vw] text-white font-T1 font-medium text-center">
                    Start Your Journey with Us
                  </h1>

                  <div className="flex items-center justify-center space-x-3 pt-2">
                    <Image
                      src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/linkedin.png?alt=media&token=2dae6518-3c01-4b15-b404-73b284071b98"
                      alt="Youtube"
                      width={40}
                      height={40}
                      className="select-none"
                      onContextMenu={(e) => e.preventDefault()}
                      draggable="false"
                    />

                    <Image
                      src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/youtube.png?alt=media&token=195eeb47-bb1d-4ff8-9809-bfbaf0372828"
                      alt="Youtube"
                      width={40}
                      height={40}
                      className="select-none"
                      onContextMenu={(e) => e.preventDefault()}
                      draggable="false"
                    />

                    <Image
                      src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/instagram.png?alt=media&token=7f6f736c-47ec-42a0-abdd-69fccbb88e4e"
                      alt="Youtube"
                      width={40}
                      height={40}
                      className="select-none"
                      onContextMenu={(e) => e.preventDefault()}
                      draggable="false"
                    />

                    <Image
                      src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/facebook.png?alt=media&token=1d9adf4f-d3c6-4a36-9b4e-101c2394c23e"
                      alt="Youtube"
                      width={40}
                      height={40}
                      className="select-none"
                      onContextMenu={(e) => e.preventDefault()}
                      draggable="false"
                    />

                  </div>
                </div>
              </div>
            </div>

            <div className="h-[1px] w-full bg-white mt-6"></div>

            <div>
              <p className="text-[1vw] text-[#D7D7D7] font-T2 font-medium pt-4 text-center">
                Copyright 2024 ©. All right reserved by Shinever Infotech Pvt
                Ltd
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Desktop */}

      {/* Laptop */}

      <div className="hidden 2xl:hidden lg:block  ">
        <div className="pt-32">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/Footer%20(2).png?alt=media&token=274c4aca-b953-4244-94ce-d7a8f13ebe1c"
            alt="Footer"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="select-none"
            onContextMenu={(e) => e.preventDefault()}
            draggable="false"
          />
        </div>

        <div className=" w-full bg-[#104E56] pb-10">
          <div className=" max-w-[85%] mx-auto">
            <div className="flex justify-between pt-12">
              <div className=" w-[60%] flex space-x-[100px] items-center">
                <div className="h-[200px]  ">
                  <h1 className="text-[1.3vw] text-white font-T1 font-semibold">
                    Pages
                  </h1>

                  <Link href='/'>
                  <p className="text-[1vw] text-[#D7D7D7] font-T2 font-medium pt-4 hover:underline cursor-pointer">
                    Home
                  </p>
                  </Link>

                  <Link href='/About'>    <p className="text-[1vw] text-[#D7D7D7] font-T2 font-medium pt-1 hover:underline cursor-pointer">
                    About
                  </p></Link>
              

                  <Link href='/Service'>     <p className="text-[1vw] text-[#D7D7D7] font-T2 font-medium pt-1 hover:underline cursor-pointer">
                    Service
                  </p></Link>
             
                  <Link href='/Internship'>   <p className="text-[1vw] text-[#D7D7D7] font-T2 font-medium pt-1 hover:underline cursor-pointer">
                    Internship
                  </p></Link>
               
                  <Link href='/Career'>      <p className="text-[1vw] text-[#D7D7D7] font-T2 font-medium pt-1 hover:underline cursor-pointer">
                    Career
                  </p>
                  </Link>
                </div>

                <div className="h-[200px]  ">
                  <h1 className="text-[1.3vw] text-white font-T1 font-semibold">
                    Services
                  </h1>

                  <Link href='/Service#lapsoftware'>  
                  <p className="text-[1vw] text-[#D7D7D7] font-T2 font-medium pt-4 hover:underline cursor-pointer">
                    Software
                  </p>
                  </Link>

                  <Link href='/Service#lapweb'>  
                  <p className="text-[1vw] text-[#D7D7D7] font-T2 font-medium pt-1 hover:underline cursor-pointer">
                   Web Solution
                  </p>
                  </Link>
                  <Link href='/Service#lapapp'>  
                  <p className="text-[1vw] text-[#D7D7D7] font-T2 font-medium pt-1 hover:underline cursor-pointer">
                   Mobile Apps
                  </p>
                  </Link>
                  <Link href='/Service#lapui/ux'>  
                  <p className="text-[1vw] text-[#D7D7D7] font-T2 font-medium pt-1 hover:underline cursor-pointer">
                    UI & UX
                  </p>
                  </Link>
                  <Link href='/Service#lapmarketing'>  
                  <p className="text-[1vw] text-[#D7D7D7] font-T2 font-medium pt-1 hover:underline cursor-pointer">
                    Marketing
                  </p>
                  </Link>
                  <Link href='/Service#lapvisual'>  
                  <p className="text-[1vw] text-[#D7D7D7] font-T2 font-medium pt-1 hover:underline cursor-pointer">
                    Visual Arts
                  </p>
                  </Link>
                </div>

                <div className="h-[200px] ">
                  <h1 className="text-[1.3vw] text-white font-T1 font-semibold">
                    Support
                  </h1>
                  <Link href='/Career'>  
                  <p className="text-[1vw] text-[#D7D7D7] font-T2 font-medium pt-4 hover:underline cursor-pointer">
                    Contact
                  </p>
                  </Link>
                  <p className="text-[1vw] text-[#D7D7D7] font-T2 font-medium pt-1 hover:underline cursor-pointer">
                    Privacy Policy
                  </p>
                  <p className="text-[1vw] text-[#D7D7D7] font-T2 font-medium pt-1 hover:underline cursor-pointer">
                    Terms & Conditions
                  </p>
                  <p className="text-[1vw] text-[#D7D7D7] font-T2 font-medium pt-1 hover:underline cursor-pointer">
                    Refund Policy
                  </p>
                </div>
              </div>
              <div className="w-[30%]">
                <div className="flex justify-start items-center">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/footer%20logo.png?alt=media&token=8bae70c7-996e-436f-a4f2-eaf0e8414655"
                    alt="Footer"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "80%", height: "auto" }}
                    className="select-none"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />
                </div>

                <div className="pt-6">
                  <h1 className="text-[1.3vw] text-white font-T1 font-medium text-center">
                    Start Your Journey with Us
                  </h1>

                  <div className="flex items-center justify-center space-x-3 pt-2">
                    <Image
                      src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/linkedin.png?alt=media&token=2dae6518-3c01-4b15-b404-73b284071b98"
                      alt="Youtube"
                      width={40}
                      height={40}
                      className="select-none"
                      onContextMenu={(e) => e.preventDefault()}
                      draggable="false"
                    />

                    <Image
                      src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/youtube.png?alt=media&token=195eeb47-bb1d-4ff8-9809-bfbaf0372828"
                      alt="Youtube"
                      width={40}
                      height={40}
                      className="select-none"
                      onContextMenu={(e) => e.preventDefault()}
                      draggable="false"
                    />

                    <Image
                      src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/instagram.png?alt=media&token=7f6f736c-47ec-42a0-abdd-69fccbb88e4e"
                      alt="Youtube"
                      width={40}
                      height={40}
                      className="select-none"
                      onContextMenu={(e) => e.preventDefault()}
                      draggable="false"
                    />

                    <Image
                      src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/facebook.png?alt=media&token=1d9adf4f-d3c6-4a36-9b4e-101c2394c23e"
                      alt="Youtube"
                      width={40}
                      height={40}
                      className="select-none"
                      onContextMenu={(e) => e.preventDefault()}
                      draggable="false"
                    />

             
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[1px] w-full bg-white mt-6"></div>

            <div>
              <p className="text-[1vw] text-[#D7D7D7] font-T2 font-medium pt-4 text-center">
                Copyright 2024 ©. All right reserved by Shinever Infotech Pvt
                Ltd
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Laptop */}

      {/* Tab */}

      <div className="hidden 2xl:hidden lg:hidden  md:block"></div>

      {/* Tab */}

      {/* Mobile */}

      <div className="md:hidden  ">
        <div className="pt-20">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/footer%20m.png?alt=media&token=38d3130b-beff-4bea-904c-213d7a146a7e"
            alt="Footer"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="select-none"
            onContextMenu={(e) => e.preventDefault()}
            draggable="false"
          />
        </div>
        <div className=" w-full bg-[#104E56] pb-10">
          <div className="max-w-[90%] mx-auto">
            <div className="flex justify-center items-center pt-10">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/footer%20logo.png?alt=media&token=8bae70c7-996e-436f-a4f2-eaf0e8414655"
                alt="Footer"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "60%", height: "auto" }}
                className="select-none"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
            </div>

            <div className="flex justify-between items-center pt-10">
              <div className="h-[220px]  ">
                <h1 className="text-[4.2vw] text-white font-T1 font-semibold">
                  Pages
                </h1>

                <Link href='/'>

          
                <p className="text-[3.7vw] text-[#D7D7D7] font-T2 font-medium pt-4 hover:underline cursor-pointer">
                  Home
                </p>
                </Link>

                <Link href='/About'>
                <p className="text-[3.7vw] text-[#D7D7D7] font-T2 font-medium pt-1 hover:underline cursor-pointer">
                  About
                </p>
                </Link>
                <Link href='/Service'>
                <p className="text-[3.7vw] text-[#D7D7D7] font-T2 font-medium pt-1 hover:underline cursor-pointer">
                  Service
                </p>
                </Link>
                <Link href='/Internship'>
                <p className="text-[3.7vw] text-[#D7D7D7] font-T2 font-medium pt-1 hover:underline cursor-pointer">
                  Internship
                </p>
                </Link>
                <Link href='/Career'>
                <p className="text-[3.7vw] text-[#D7D7D7] font-T2 font-medium pt-1 hover:underline cursor-pointer">
                  Career
                </p>
                </Link>
              </div>

              <div className="h-[220px]  ">
                <h1 className="text-[4.2vw] text-white font-T1 font-semibold">
                  Services
                </h1>

                <Link href='/Service#mobsoftware'>
                <p className="text-[3.7vw] text-[#D7D7D7] font-T2 font-medium pt-4 hover:underline cursor-pointer">
                  Software
                </p>
                </Link>

                <Link href='/Service#mobweb'> <p className="text-[3.7vw] text-[#D7D7D7] font-T2 font-medium pt-1 hover:underline cursor-pointer">
                  Web
                </p></Link>
               

                <Link href='/Service#mobapp'>   <p className="text-[3.7vw] text-[#D7D7D7] font-T2 font-medium pt-1 hover:underline cursor-pointer">
                  App
                </p></Link>
             

                <Link href='/Service#mobui/ux'>     <p className="text-[3.7vw] text-[#D7D7D7] font-T2 font-medium pt-1 hover:underline cursor-pointer">
                  UI & UX
                </p></Link>
           

                <Link href='/Service#mobmarketing'>       <p className="text-[3.7vw] text-[#D7D7D7] font-T2 font-medium pt-1 hover:underline cursor-pointer">
                  Marketing
                </p></Link>
         

                <Link href='/Service#mobvisual'>        <p className="text-[3.7vw] text-[#D7D7D7] font-T2 font-medium pt-1 hover:underline cursor-pointer">
                  Visual Arts
                </p></Link>
        
              </div>

              <div className="h-[220px] ">
                <h1 className="text-[4.2vw] text-white font-T1 font-semibold">
                  Support
                </h1>

                <Link href='/Contact'>
                <p className="text-[3.7vw] text-[#D7D7D7] font-T2 font-medium pt-4 hover:underline cursor-pointer">
                  Contact
                </p>
                </Link>
                <p className="text-[3.7vw] text-[#D7D7D7] font-T2 font-medium pt-1 hover:underline cursor-pointer">
                  Privacy Policy
                </p>
                <p className="text-[3.7vw] text-[#D7D7D7] font-T2 font-medium pt-1 hover:underline cursor-pointer">
                  Refund Policy
                </p>
                <p className="text-[3.7vw] text-[#D7D7D7] font-T2 font-medium pt-1 hover:underline cursor-pointer">
                  Terms & <br />
                  Conditions
                </p>
              </div>
            </div>

            <div className="">
              <h1 className="text-[4vw] text-white font-T1 font-medium text-center">
                Start Your Journey with Us
              </h1>

              <div className="flex items-center justify-center space-x-3 pt-2">
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/linkedin.png?alt=media&token=2dae6518-3c01-4b15-b404-73b284071b98"
                  alt="Youtube"
                  width={40}
                  height={40}
                  className="select-none"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />

                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/youtube.png?alt=media&token=195eeb47-bb1d-4ff8-9809-bfbaf0372828"
                  alt="Youtube"
                  width={40}
                  height={40}
                  className="select-none"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />

                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/instagram.png?alt=media&token=7f6f736c-47ec-42a0-abdd-69fccbb88e4e"
                  alt="Youtube"
                  width={40}
                  height={40}
                  className="select-none"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />

                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/facebook.png?alt=media&token=1d9adf4f-d3c6-4a36-9b4e-101c2394c23e"
                  alt="Youtube"
                  width={40}
                  height={40}
                  className="select-none"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />

   
              </div>
            </div>

            <div className="h-[1px] w-full bg-white mt-6"></div>

            <div>
              <p className="text-[3vw] text-[#D7D7D7] font-T2 font-medium pt-4 text-center">
                Copyright 2024 ©. All right reserved <br /> by Shinever Infotech
                Pvt Ltd
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
    </div>
  );
}

export default Footer;
