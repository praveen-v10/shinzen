"use client";

import Image from "next/image";
import React from "react";
import Footer from "../components/Footer";

function InternshipPage() {
  return (
    <div>
      {/* Desktop */}
      <div className="hidden  2xl:block bg-[#ECFDFF] ">
        <div className="max-w-[85%] mx-auto h-screen">
          <div className="pt-[150px] flex justify-center">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/internship.png?alt=media&token=fd2dd60b-d2bd-464e-ab65-f61b03f16efe"
              alt="Intership"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "70%", height: "auto" }}
              className="select-none"
              onContextMenu={(e) => e.preventDefault()}
              draggable="false"
            />
          </div>

          <div className="pt-10">
            <h2 className="font-T1 font-semibold text-center  text-[#008080] text-[1.5vw] tracking-wide">
              Your Future Starts Here
            </h2>
            <p className="font-T2 font-semibold text-black text-center text-[2vw] tracking-wide">
              Internship Oppturtunities Soon
            </p>
          </div>
        </div>
        <Footer />
      </div>
      {/* Desktop */}

      {/* Laptop */}

      <div className="hidden 2xl:hidden lg:block bg-[#ECFDFF] ">
        <div className="max-w-[85%] mx-auto">
          <div className="pt-[150px] flex justify-center">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/internship.png?alt=media&token=fd2dd60b-d2bd-464e-ab65-f61b03f16efe"
              alt="Intership"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "70%", height: "auto" }}
              className="select-none"
              onContextMenu={(e) => e.preventDefault()}
              draggable="false"
            />
          </div>

          <div className="pt-10">
            <h2 className="font-T1 font-semibold text-center  text-[#008080] text-[1.5vw] tracking-wide">
              Your Future Starts Here
            </h2>
            <p className="font-T2 font-semibold text-black text-center text-[2vw] tracking-wide">
              Internship Oppturtunities Soon
            </p>
          </div>
        </div>
        <Footer />
      </div>
      {/* Laptop */}

      {/* Tab */}

      <div className="hidden 2xl:hidden lg:hidden  md:block  bg-[#ECFDFF] ">
        <div className="max-w-[90%] mx-auto h-screen">
          <div className="pt-[150px] flex justify-center ">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/internship.png?alt=media&token=fd2dd60b-d2bd-464e-ab65-f61b03f16efe"
              alt="Intership"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "85%", height: "auto" }}
              className="select-none"
              onContextMenu={(e) => e.preventDefault()}
              draggable="false"
            />
          </div>

          <div className="pt-10">
            <h2 className="font-T1 font-semibold text-center  text-[#008080] text-[5vw] tracking-wide">
              Your Future Starts Here
            </h2>
            <p className="font-T2 font-semibold text-black text-center text-[6vw] tracking-wide">
              Internship Oppturtunities Soon
            </p>
          </div>
        </div>
        <Footer />
      </div>

      {/* Tab */}

      {/* Mobile */}

      <div className="md:hidden  bg-[#ECFDFF] ">
        <div className="max-w-[90%] mx-auto h-screen">
          <div className="pt-[150px] flex justify-center ">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/internship.png?alt=media&token=fd2dd60b-d2bd-464e-ab65-f61b03f16efe"
              alt="Intership"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "85%", height: "auto" }}
              className="select-none"
              onContextMenu={(e) => e.preventDefault()}
              draggable="false"
            />
          </div>

          <div className="pt-10">
            <h2 className="font-T1 font-semibold text-center  text-[#008080] text-[5vw] tracking-wide">
              Your Future Starts Here
            </h2>
            <p className="font-T2 font-semibold text-black text-center text-[6vw] tracking-wide">
              Internship Oppturtunities Soon
            </p>
          </div>
        </div>
        <Footer />
      </div>

      {/* Mobile */}
    </div>
  );
}

export default InternshipPage
