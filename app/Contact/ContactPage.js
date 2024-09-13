"use client";
import Image from "next/image";
import React from "react";
import Footer from "../components/Footer";
import Link from "next/link";

function ContactPage() {
  return (
    <div>
      {/* Desktop */}
      <div className="hidden  2xl:block ">
        <div className="bg-white ">
          <div className="max-w-[85%] mx-auto">
            <div className="flex justify-center pt-40">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/contact.png?alt=media&token=286efd16-92e5-4a6d-93ce-a3f359157de9"
                alt="Home About"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "80%", height: "auto" }}
                className="select-none"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
            </div>

            <div className="flex flex-col justify-center items-center pt-8">
              <h2 className="text-center font-T1 font-semibold text-[1.5vw] text-[#008080]">
                Let’s Build Something Amazing Together
              </h2>

              <div className="w-[60%] pt-2">
                <p className="text-center font-T2 font-medium text-[1.1vw] text-gray-600">
                  Got an idea or need assistance with your project? We’re here
                  to help! Let’s collaborate to create custom solutions that
                  elevate your brand. Whether it’s a quick chat or detailed
                  discussion, we’re always excited to connect with you.
                </p>
              </div>
            </div>

            <div>
              <div className="flex justify-evenly pt-[20vh]">
                <div className="h-[200px] w-[25%] border-2 border-gray-300 rounded-lg flex flex-col justify-center items-center ">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/contact%20e1.png?alt=media&token=18cd72a2-1210-40ec-8039-09c006a24eb2"
                    alt="Contact Sales"
                    width={70}
                    height={70}
                    className="select-none"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />

                  <h2 className="font-T1 pt-4 font-semibold text-gray-800 text-[1.5vw]">
                    Sales
                  </h2>
                  <p className="font-T2 pt-2 font-medium text-gray-600 text-[1.2vw]">
                    sales@zenth.in
                  </p>
                </div>

                <div className="h-[200px] w-[25%] border-2 border-gray-300 rounded-lg flex flex-col justify-center items-center ">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/contact%20e2.png?alt=media&token=ae0a84db-e45d-407e-9380-1bd71cc86a8b"
                    alt="Contact Sales"
                    width={70}
                    height={70}
                    className="select-none"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />

                  <h2 className="font-T1 pt-4 font-semibold text-gray-800 text-[1.5vw]">
                    Support
                  </h2>
                  <p className="font-T2 pt-2 font-medium text-gray-600 text-[1.2vw]">
                    support@zenth.in
                  </p>
                </div>

                <div className="h-[200px] w-[25%] border-2 border-gray-300 rounded-lg flex flex-col justify-center items-center ">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/contact%20e3.png?alt=media&token=8a0c218b-c569-42ff-9b1d-a03e00814071"
                    alt="Contact Sales"
                    width={70}
                    height={70}
                    className="select-none"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />

                  <h2 className="font-T1 pt-4 font-semibold text-gray-800 text-[1.5vw]">
                    Business Hours
                  </h2>
                  <p className="font-T2 pt-2 font-medium text-gray-600 text-[1.2vw]">
                    Mon - Sat : 09:00AM - 06:00PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#E3F4F5] h-[200px] w-full mt-[100px] flex items-center justify-center">
          <div className="max-w-[85%] w-full flex items-center justify-evenly">
            <h2 className="text-center font-T1 font-semibold text-gray-800 text-[2vw]">
              Zenth Makes your work Easier
            </h2>

            <Image
              src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/contact%20wh.png?alt=media&token=8745859d-3bdf-4476-9231-43e89bbf704e"
              alt="Whatsapp"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "20%", height: "auto" }}
              className="select-none cursor-pointer"
              onContextMenu={(e) => e.preventDefault()}
              draggable="false"
            />
          </div>
        </div>

        <div className="bg-white mt-20">
          <div className="max-w-[85%] mx-auto">
            <div className="flex justify-center space-x-4">
              <h1 className="text-[3vw] font-T1 font-bold text-[#008080]">
                Stay
              </h1>
              <h1 className="text-[3vw] font-T1 font-bold text-gray-500">
                Connected
              </h1>
            </div>
            <div className="flex justify-center">
              <p className="text-[1.2vw] font-T2 font-medium text-black">
                Follow us on social media for updates, news, and more.
              </p>
            </div>

            <div className="flex justify-evenly pt-20">
              <Link
                href="https://www.linkedin.com/company/zenth-tech/about/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/contact%20li.png?alt=media&token=ed79a13c-89dd-456f-950b-5bf99b624189"
                  alt="Linked in"
                  width={180} // Set the width directly
                  height={180} // Set the height directly
                  className="select-none cursor-pointer hover:translate-y-[-6px] transition-transform duration-500 ease-in-out"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />
              </Link>

              <Link
                href="https://www.youtube.com/@Zenthtech_Official"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/contact%20yt.png?alt=media&token=61dcce50-979e-4cd2-b7dc-b5d08555b8d9"
                  alt="Youtube"
                  width={180} // Set the width directly
                  height={180} // Set the height directly
                  className="select-none cursor-pointer hover:translate-y-[-6px] transition-transform duration-500 ease-in-out"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />
              </Link>

              <Link
                href="https://www.instagram.com/zenth_tech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/contact%20in.png?alt=media&token=12f8c245-a1e5-4e8a-86f7-04c678e52ea9"
                  alt="Instagram"
                  width={180} // Set the width directly
                  height={180} // Set the height directly
                  className="select-none cursor-pointer hover:translate-y-[-6px] transition-transform duration-500 ease-in-out"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />
              </Link>

              <Link
                href="https://www.facebook.com/profile.php?id=61563341759261"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/contact%20fb.png?alt=media&token=d503b01c-8ae4-4781-b011-0b3bfa5c888e"
                  alt="Facebook"
                  width={180} // Set the width directly
                  height={180} // Set the height directly
                  className="select-none cursor-pointer hover:translate-y-[-6px] transition-transform duration-500 ease-in-out"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />
              </Link>
            </div>
          </div>

          <Footer />
        </div>
      </div>
      {/* Desktop */}

      {/* Laptop */}

      <div className="hidden 2xl:hidden lg:block">
        <div className="bg-white ">
          <div className="max-w-[85%] mx-auto">
            <div className="flex justify-center pt-40">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/contact.png?alt=media&token=286efd16-92e5-4a6d-93ce-a3f359157de9"
                alt="Home About"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "80%", height: "auto" }}
                className="select-none"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
            </div>

            <div className="flex flex-col justify-center items-center pt-8">
              <h2 className="text-center font-T1 font-semibold text-[1.5vw] text-[#008080]">
                Let’s Build Something Amazing Together
              </h2>

              <div className="w-[60%] pt-2">
                <p className="text-center font-T2 font-medium text-[1.1vw] text-gray-600">
                  Got an idea or need assistance with your project? We’re here
                  to help! Let’s collaborate to create custom solutions that
                  elevate your brand. Whether it’s a quick chat or detailed
                  discussion, we’re always excited to connect with you.
                </p>
              </div>
            </div>

            <div>
              <div className="flex justify-evenly pt-[20vh]">
                <div className="h-[200px] w-[25%] border-2 border-gray-300 rounded-lg flex flex-col justify-center items-center ">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/contact%20e1.png?alt=media&token=18cd72a2-1210-40ec-8039-09c006a24eb2"
                    alt="Contact Sales"
                    width={70}
                    height={70}
                    className="select-none"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />

                  <h2 className="font-T1 pt-4 font-semibold text-gray-800 text-[1.5vw]">
                    Sales
                  </h2>
                  <p className="font-T2 pt-2 font-medium text-gray-600 text-[1.2vw]">
                    sales@zenth.in
                  </p>
                </div>

                <div className="h-[200px] w-[25%] border-2 border-gray-300 rounded-lg flex flex-col justify-center items-center ">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/contact%20e2.png?alt=media&token=ae0a84db-e45d-407e-9380-1bd71cc86a8b"
                    alt="Contact Sales"
                    width={70}
                    height={70}
                    className="select-none"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />

                  <h2 className="font-T1 pt-4 font-semibold text-gray-800 text-[1.5vw]">
                    Support
                  </h2>
                  <p className="font-T2 pt-2 font-medium text-gray-600 text-[1.2vw]">
                    support@zenth.in
                  </p>
                </div>

                <div className="h-[200px] w-[25%] border-2 border-gray-300 rounded-lg flex flex-col justify-center items-center ">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/contact%20e3.png?alt=media&token=8a0c218b-c569-42ff-9b1d-a03e00814071"
                    alt="Contact Sales"
                    width={70}
                    height={70}
                    className="select-none"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />

                  <h2 className="font-T1 pt-4 font-semibold text-gray-800 text-[1.5vw]">
                    Business Hours
                  </h2>
                  <p className="font-T2 pt-2 font-medium text-gray-600 text-[1.2vw]">
                    Mon - Sat : 09:00AM - 06:00PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#E3F4F5] h-[200px] w-full mt-[100px] flex items-center justify-center">
          <div className="max-w-[85%] w-full flex items-center justify-evenly">
            <h2 className="text-center font-T1 font-semibold text-gray-800 text-[2vw]">
              Zenth Makes your work Easier
            </h2>

            <Image
              src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/contact%20wh.png?alt=media&token=8745859d-3bdf-4476-9231-43e89bbf704e"
              alt="Home About"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "20%", height: "auto" }}
              className="select-none cursor-pointer"
              onContextMenu={(e) => e.preventDefault()}
              draggable="false"
            />
          </div>
        </div>

        <div className="bg-white mt-20">
          <div className="max-w-[85%] mx-auto">
            <div className="flex justify-center space-x-4">
              <h1 className="text-[3vw] font-T1 font-bold text-[#008080]">
                Stay
              </h1>
              <h1 className="text-[3vw] font-T1 font-bold text-gray-500">
                Connected
              </h1>
            </div>
            <div className="flex justify-center">
              <p className="text-[1.2vw] font-T2 font-medium text-black">
                Follow us on social media for updates, news, and more.
              </p>
            </div>

            <div className="flex justify-evenly pt-20">
              <Link
                href="https://www.linkedin.com/company/zenth-tech/about/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/contact%20li.png?alt=media&token=ed79a13c-89dd-456f-950b-5bf99b624189"
                  alt="Linked in"
                  width={180} // Set the width directly
                  height={180} // Set the height directly
                  className="select-none cursor-pointer hover:translate-y-[-6px] transition-transform duration-500 ease-in-out"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />
              </Link>

              <Link
                href="https://www.youtube.com/@Zenthtech_Official"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/contact%20yt.png?alt=media&token=61dcce50-979e-4cd2-b7dc-b5d08555b8d9"
                  alt="Youtube"
                  width={180} // Set the width directly
                  height={180} // Set the height directly
                  className="select-none cursor-pointer hover:translate-y-[-6px] transition-transform duration-500 ease-in-out"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />
              </Link>

              <Link
                href="https://www.instagram.com/zenth_tech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/contact%20in.png?alt=media&token=12f8c245-a1e5-4e8a-86f7-04c678e52ea9"
                  alt="Instagram"
                  width={180} // Set the width directly
                  height={180} // Set the height directly
                  className="select-none cursor-pointer hover:translate-y-[-6px] transition-transform duration-500 ease-in-out"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />
              </Link>

              <Link
                href="https://www.facebook.com/profile.php?id=61563341759261"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/contact%20fb.png?alt=media&token=d503b01c-8ae4-4781-b011-0b3bfa5c888e"
                  alt="Facebook"
                  width={180} // Set the width directly
                  height={180} // Set the height directly
                  className="select-none cursor-pointer hover:translate-y-[-6px] transition-transform duration-500 ease-in-out"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />
              </Link>
            </div>
          </div>

          <Footer />
        </div>
      </div>
      {/* Laptop */}

      {/* Tab */}

      <div className="hidden 2xl:hidden lg:hidden  md:block">
        <div className="bg-white ">
          <div className="max-w-[95%] mx-auto">
            <div className="flex justify-center pt-20">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/contact.png?alt=media&token=286efd16-92e5-4a6d-93ce-a3f359157de9"
                alt="Home About"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "90%", height: "auto" }}
                className="select-none"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
            </div>

            <div className="flex flex-col justify-center items-center pt-8">
              <h2 className="text-center font-T1 font-semibold text-[4.5vw] text-[#008080]">
                Let’s Build Something Amazing Together
              </h2>

              <div className="w-[95%] pt-2">
                <p className="text-center font-T2 font-medium text-[3.6vw] text-gray-600">
                  Got an idea or need assistance with your project? We’re here
                  to help! Let’s collaborate to create custom solutions that
                  elevate your brand. Whether it’s a quick chat or detailed
                  discussion, we’re always excited to connect with you.
                </p>
              </div>
            </div>

            <div>
              <div className="flex flex-col justify-center items-center pt-[10vh] space-y-10">
                <div className="h-[200px] w-[70%] border-2 border-gray-300 rounded-lg flex flex-col justify-center items-center ">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/contact%20e1.png?alt=media&token=18cd72a2-1210-40ec-8039-09c006a24eb2"
                    alt="Contact Sales"
                    width={70}
                    height={70}
                    className="select-none"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />

                  <h2 className="font-T1 pt-4 font-semibold text-gray-800 text-[4.5vw]">
                    Sales
                  </h2>
                  <p className="font-T2 pt-2 font-medium text-gray-600 text-[3.8vw]">
                    sales@zenth.in
                  </p>
                </div>

                <div className="h-[200px] w-[70%] border-2 border-gray-300 rounded-lg flex flex-col justify-center items-center ">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/contact%20e2.png?alt=media&token=ae0a84db-e45d-407e-9380-1bd71cc86a8b"
                    alt="Contact Sales"
                    width={70}
                    height={70}
                    className="select-none"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />

                  <h2 className="font-T1 pt-4 font-semibold text-gray-800 text-[4.5vw]">
                    Support
                  </h2>
                  <p className="font-T2 pt-2 font-medium text-gray-600 text-[3.8vw]">
                    support@zenth.in
                  </p>
                </div>

                <div className="h-[200px] w-[70%] border-2 border-gray-300 rounded-lg flex flex-col justify-center items-center ">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/contact%20e3.png?alt=media&token=8a0c218b-c569-42ff-9b1d-a03e00814071"
                    alt="Contact Sales"
                    width={70}
                    height={70}
                    className="select-none"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />

                  <h2 className="font-T1 pt-4 font-semibold text-gray-800 text-[4.5vw]">
                    Business Hours
                  </h2>
                  <p className="font-T2 pt-2 font-medium text-gray-600 text-[3.8vw]">
                    Mon - Sat : 09:00AM - 06:00PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#E3F4F5] w-full mt-20 flex  items-center justify-center">
          <div className="max-w-[90%] w-full flex flex-col items-center justify-center space-y-6 pt-16 pb-16">
            <h2 className="text-center font-T1 font-semibold text-gray-800 text-[5vw]">
              Zenth Makes your work Easier
            </h2>

            <Image
              src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/contact%20wh.png?alt=media&token=8745859d-3bdf-4476-9231-43e89bbf704e"
              alt="Home About"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "60%", height: "auto" }}
              className="select-none "
              onContextMenu={(e) => e.preventDefault()}
              draggable="false"
            />
          </div>
        </div>

        <div className="bg-white mt-20">
          <div className="max-w-[90%] mx-auto">
            <div className="flex justify-center space-x-4">
              <h1 className="text-[8vw] font-T1 font-bold text-[#008080]">
                Stay
              </h1>
              <h1 className="text-[8vw] font-T1 font-bold text-gray-500">
                Connected
              </h1>
            </div>
            <div className="flex justify-center">
              <p className="text-[3.8vw] pl-6 pr-6 text-center font-T2 font-medium text-black">
                Follow us on social media for updates, news, and more.
              </p>
            </div>

            <div className="flex  justify-evenly  pt-10">
              <Link
                href="https://www.linkedin.com/company/zenth-tech/about/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/contact%20li.png?alt=media&token=ed79a13c-89dd-456f-950b-5bf99b624189"
                  alt="Linked in"
                  width={130} // Set the width directly
                  height={130} // Set the height directly
                  className="select-none cursor-pointer hover:translate-y-[-6px] transition-transform duration-500 ease-in-out"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />
              </Link>

              <Link
                href="https://www.youtube.com/@Zenthtech_Official"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/contact%20yt.png?alt=media&token=61dcce50-979e-4cd2-b7dc-b5d08555b8d9"
                  alt="Youtube"
                  width={130} // Set the width directly
                  height={130} // Set the height directly
                  className="select-none cursor-pointer hover:translate-y-[-6px] transition-transform duration-500 ease-in-out"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />
              </Link>
            </div>

            <div className="flex  justify-evenly  pt-10">
              <Link
                href="https://www.instagram.com/zenth_tech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/contact%20in.png?alt=media&token=12f8c245-a1e5-4e8a-86f7-04c678e52ea9"
                  alt="Instagram"
                  width={130} // Set the width directly
                  height={130} // Set the height directly
                  className="select-none cursor-pointer hover:translate-y-[-6px] transition-transform duration-500 ease-in-out"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />
              </Link>

              <Link
                href="https://www.facebook.com/profile.php?id=61563341759261"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/contact%20fb.png?alt=media&token=d503b01c-8ae4-4781-b011-0b3bfa5c888e"
                  alt="Facebook"
                  width={130} // Set the width directly
                  height={130} // Set the height directly
                  className="select-none cursor-pointer hover:translate-y-[-6px] transition-transform duration-500 ease-in-out"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />
              </Link>
            </div>
          </div>

          <Footer />
        </div>
      </div>

      {/* Tab */}

      {/* Mobile */}

      <div className="md:hidden ">
        <div className="bg-white ">
          <div className="max-w-[95%] mx-auto">
            <div className="flex justify-center pt-20">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/contact.png?alt=media&token=286efd16-92e5-4a6d-93ce-a3f359157de9"
                alt="Home About"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "90%", height: "auto" }}
                className="select-none"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
            </div>

            <div className="flex flex-col justify-center items-center pt-8">
              <h2 className="text-center font-T1 font-semibold text-[4.5vw] text-[#008080]">
                Let’s Build Something Amazing Together
              </h2>

              <div className="w-[95%] pt-2">
                <p className="text-center font-T2 font-medium text-[3.6vw] text-gray-600">
                  Got an idea or need assistance with your project? We’re here
                  to help! Let’s collaborate to create custom solutions that
                  elevate your brand. Whether it’s a quick chat or detailed
                  discussion, we’re always excited to connect with you.
                </p>
              </div>
            </div>

            <div>
              <div className="flex flex-col justify-center items-center pt-[10vh] space-y-10">
                <div className="h-[200px] w-[70%] border-2 border-gray-300 rounded-lg flex flex-col justify-center items-center ">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/contact%20e1.png?alt=media&token=18cd72a2-1210-40ec-8039-09c006a24eb2"
                    alt="Contact Sales"
                    width={70}
                    height={70}
                    className="select-none"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />

                  <h2 className="font-T1 pt-4 font-semibold text-gray-800 text-[4.5vw]">
                    Sales
                  </h2>
                  <p className="font-T2 pt-2 font-medium text-gray-600 text-[3.8vw]">
                    sales@zenth.in
                  </p>
                </div>

                <div className="h-[200px] w-[70%] border-2 border-gray-300 rounded-lg flex flex-col justify-center items-center ">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/contact%20e2.png?alt=media&token=ae0a84db-e45d-407e-9380-1bd71cc86a8b"
                    alt="Contact Sales"
                    width={70}
                    height={70}
                    className="select-none"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />

                  <h2 className="font-T1 pt-4 font-semibold text-gray-800 text-[4.5vw]">
                    Support
                  </h2>
                  <p className="font-T2 pt-2 font-medium text-gray-600 text-[3.8vw]">
                    support@zenth.in
                  </p>
                </div>

                <div className="h-[200px] w-[70%] border-2 border-gray-300 rounded-lg flex flex-col justify-center items-center ">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/contact%20e3.png?alt=media&token=8a0c218b-c569-42ff-9b1d-a03e00814071"
                    alt="Contact Sales"
                    width={70}
                    height={70}
                    className="select-none"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />

                  <h2 className="font-T1 pt-4 font-semibold text-gray-800 text-[4.5vw]">
                    Business Hours
                  </h2>
                  <p className="font-T2 pt-2 font-medium text-gray-600 text-[3.8vw]">
                    Mon - Sat : 09:00AM - 06:00PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#E3F4F5] w-full mt-20 flex  items-center justify-center">
          <div className="max-w-[90%] w-full flex flex-col items-center justify-center space-y-6 pt-16 pb-16">
            <h2 className="text-center font-T1 font-semibold text-gray-800 text-[5vw]">
              Zenth Makes your work Easier
            </h2>

            <Image
              src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/contact%20wh.png?alt=media&token=8745859d-3bdf-4476-9231-43e89bbf704e"
              alt="Home About"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "60%", height: "auto" }}
              className="select-none "
              onContextMenu={(e) => e.preventDefault()}
              draggable="false"
            />
          </div>
        </div>

        <div className="bg-white mt-20">
          <div className="max-w-[90%] mx-auto">
            <div className="flex justify-center space-x-4">
              <h1 className="text-[8vw] font-T1 font-bold text-[#008080]">
                Stay
              </h1>
              <h1 className="text-[8vw] font-T1 font-bold text-gray-500">
                Connected
              </h1>
            </div>
            <div className="flex justify-center">
              <p className="text-[3.8vw] pl-6 pr-6 text-center font-T2 font-medium text-black">
                Follow us on social media for updates, news, and more.
              </p>
            </div>

            <div className="flex  justify-evenly  pt-10">
              <Link
                href="https://www.linkedin.com/company/zenth-tech/about/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/contact%20li.png?alt=media&token=ed79a13c-89dd-456f-950b-5bf99b624189"
                  alt="Linked in"
                  width={130} // Set the width directly
                  height={130} // Set the height directly
                  className="select-none cursor-pointer hover:translate-y-[-6px] transition-transform duration-500 ease-in-out"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />
              </Link>

              <Link
                href="https://www.youtube.com/@Zenthtech_Official"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/contact%20yt.png?alt=media&token=61dcce50-979e-4cd2-b7dc-b5d08555b8d9"
                  alt="Youtube"
                  width={130} // Set the width directly
                  height={130} // Set the height directly
                  className="select-none cursor-pointer hover:translate-y-[-6px] transition-transform duration-500 ease-in-out"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />
              </Link>
            </div>

            <div className="flex  justify-evenly  pt-10">
              <Link
                href="https://www.instagram.com/zenth_tech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/contact%20in.png?alt=media&token=12f8c245-a1e5-4e8a-86f7-04c678e52ea9"
                  alt="Instagram"
                  width={130} // Set the width directly
                  height={130} // Set the height directly
                  className="select-none cursor-pointer hover:translate-y-[-6px] transition-transform duration-500 ease-in-out"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />
              </Link>

              <Link
                href="https://www.facebook.com/profile.php?id=61563341759261"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/contact%20fb.png?alt=media&token=d503b01c-8ae4-4781-b011-0b3bfa5c888e"
                  alt="Facebook"
                  width={130} // Set the width directly
                  height={130} // Set the height directly
                  className="select-none cursor-pointer hover:translate-y-[-6px] transition-transform duration-500 ease-in-out"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />
              </Link>
            </div>
          </div>

          <Footer />
        </div>
      </div>

      {/* Mobile */}
    </div>
  );
}

export default ContactPage
