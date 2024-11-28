"use client";

import Image from "next/image";
import React from "react";
import Footer from "../components/Footer";
import Link from "next/link";

function InternshipPage() {
  return (
    <div>
      {/* Desktop */}
      <div className="hidden  2xl:block bg-[#ECFDFF] ">
        <div className="max-w-[85%] mx-auto ">
          <div className="pt-[90px] flex justify-center">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/Internship-bro%20(1)%201.png?alt=media&token=33df6923-3c4d-43cc-ad91-d03b0f4f554c"
              alt="Intership"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "50%", height: "auto" }}
              className="select-none"
              onContextMenu={(e) => e.preventDefault()}
              draggable="false"
            />
          </div>

          <div className="pt-4">
            <h2 className="font-T1 font-extrabold text-center  text-[#008080] text-[1.8vw] tracking-wide">
              Internship Program
            </h2>
            <p className="font-T2 pt-4 font-light text-gray-500 pl-8 pr-8 text-center text-[1.1vw] tracking-wide">
              Join our 6-month internship program and work on real-world
              projects. Gain hands-on experience, enhance your skills, and
              receive an experience certificate.
            </p>
            <p className="font-T2 pt-4 font-light text-gray-800 pl-8 pr-8 text-center text-[1.1vw] tracking-wide">
              Note: Personal laptop (minimum 8GB RAM) required. Stipend not
              provided.
            </p>
          </div>

          <div className="w-full mt-8 h-[1px] bg-gray-300 "></div>

          <div className="pt-6">
            <h2 className="font-T1 font-extrabold text-center  text-[#008080] text-[1.8vw] tracking-wide">
              Why Intern with Us?
            </h2>

            <div className="flex justify-around pt-8">
              <div className="flex flex-col justify-center items-center w-[25%]">
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/image%20(1).png?alt=media&token=6ee1d1c5-498c-4850-9d61-d7defdb4ceb7"
                  alt="Intership Image 1"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "20%", height: "auto" }}
                  className="select-none"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />

                <h2 className="font-T1 pt-6 font-extrabold text-center  text-[#008080] text-[1.2vw] tracking-wide">
                  Skill Building
                </h2>
                <p className="font-T2 pt-2 font-light text-gray-500 pl-8 pr-8 text-center text-[1vw] tracking-wide">
                  Develop expertise in UI/UX, Marketing, Graphic Design, and
                  Development.
                </p>
              </div>

              <div className="flex flex-col justify-center items-center w-[25%]">
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/internship%20(1).png?alt=media&token=8ca9ff1c-ad94-453a-8c33-d2c09302cc9f"
                  alt="Intership Image 1"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "20%", height: "auto" }}
                  className="select-none"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />

                <h2 className="font-T1 pt-6 font-extrabold text-center  text-[#008080] text-[1.2vw] tracking-wide">
                  Real Projects
                </h2>
                <p className="font-T2 pt-2 font-light text-gray-500 pl-8 pr-8 text-center text-[1vw] tracking-wide">
                  Work on live client projects.
                </p>
              </div>

              <div className="flex flex-col justify-center items-center w-[25%]">
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/image%20(2).png?alt=media&token=9e90cda1-1255-44e9-9cfc-5d1f6b796df0"
                  alt="Intership Image 1"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "20%", height: "auto" }}
                  className="select-none"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />

                <h2 className="font-T1 pt-6 font-extrabold text-center  text-[#008080] text-[1.2vw] tracking-wide">
                  Future Opportunities
                </h2>
                <p className="font-T2 pt-2 font-light text-gray-500 pl-8 pr-8 text-center text-[1vw] tracking-wide">
                  Outstanding interns may join us as full-time employees.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full mt-8 h-[1px] bg-gray-300 "></div>

          <div className="pt-4">
            <p className="font-T2 pt-2 font-light text-gray-500 pl-8 pr-8 text-center text-[1vw] tracking-wide">
              Apply now and take the first step toward building your future.
              Application link open until (01 December 2024) .
            </p>

            <div className="flex justify-center pt-2 gap-4 items-center">
              <p className="font-T2  font-light text-gray-500 text-center text-[1vw] tracking-wide">
                Don&apos;t miss out!{" "}
              </p>

              <Link
                href="https://docs.google.com/forms/d/1AC1zvssRLythhFJI3C45f5wXlPkmNORagJieqgjLs6A/edit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-transparent  font-T3 hover:bg-[#008080] text-[1vw] text-[#008080] font-semibold hover:text-white py-1 px-2  border border-[#008080] hover:border-transparent rounded">
                  Apply Now
                </button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      {/* Desktop */}

      {/* Laptop */}

      <div className="hidden 2xl:hidden lg:block bg-[#ECFDFF] ">
        <div className="max-w-[85%] mx-auto">
          <div className="pt-[70px] flex justify-center">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/Internship-bro%20(1)%201.png?alt=media&token=33df6923-3c4d-43cc-ad91-d03b0f4f554c"
              alt="Intership"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "50%", height: "auto" }}
              className="select-none"
              onContextMenu={(e) => e.preventDefault()}
              draggable="false"
            />
          </div>

          <div className="pt-4">
            <h2 className="font-T1 font-extrabold text-center  text-[#008080] text-[1.8vw] tracking-wide">
              Internship Program
            </h2>
            <p className="font-T2 pt-4 font-light text-gray-500 pl-8 pr-8 text-center text-[1.1vw] tracking-wide">
              Join our 6-month internship program and work on real-world
              projects. Gain hands-on experience, enhance your skills, and
              receive an experience certificate.
            </p>
            <p className="font-T2 pt-4 font-light text-gray-800 pl-8 pr-8 text-center text-[1.1vw] tracking-wide">
              Note: Personal laptop (minimum 8GB RAM) required. Stipend not
              provided.
            </p>
          </div>

          <div className="w-full mt-8 h-[1px] bg-gray-300 "></div>

          <div className="pt-6">
            <h2 className="font-T1 font-extrabold text-center  text-[#008080] text-[1.8vw] tracking-wide">
              Why Intern with Us?
            </h2>

            <div className="flex justify-around pt-8">
              <div className="flex flex-col justify-center items-center w-[25%]">
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/image%20(1).png?alt=media&token=6ee1d1c5-498c-4850-9d61-d7defdb4ceb7"
                  alt="Intership Image 1"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "20%", height: "auto" }}
                  className="select-none"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />

                <h2 className="font-T1 pt-6 font-extrabold text-center  text-[#008080] text-[1.2vw] tracking-wide">
                  Skill Building
                </h2>
                <p className="font-T2 pt-2 font-light text-gray-500 pl-8 pr-8 text-center text-[1vw] tracking-wide">
                  Develop expertise in UI/UX, Marketing, Graphic Design, and
                  Development.
                </p>
              </div>

              <div className="flex flex-col justify-center items-center w-[25%]">
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/internship%20(1).png?alt=media&token=8ca9ff1c-ad94-453a-8c33-d2c09302cc9f"
                  alt="Intership Image 1"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "20%", height: "auto" }}
                  className="select-none"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />

                <h2 className="font-T1 pt-6 font-extrabold text-center  text-[#008080] text-[1.2vw] tracking-wide">
                  Real Projects
                </h2>
                <p className="font-T2 pt-2 font-light text-gray-500 pl-8 pr-8 text-center text-[1vw] tracking-wide">
                  Work on live client projects.
                </p>
              </div>

              <div className="flex flex-col justify-center items-center w-[25%]">
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/image%20(2).png?alt=media&token=9e90cda1-1255-44e9-9cfc-5d1f6b796df0"
                  alt="Intership Image 1"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "20%", height: "auto" }}
                  className="select-none"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />

                <h2 className="font-T1 pt-6 font-extrabold text-center  text-[#008080] text-[1.2vw] tracking-wide">
                  Future Opportunities
                </h2>
                <p className="font-T2 pt-2 font-light text-gray-500 pl-8 pr-8 text-center text-[1vw] tracking-wide">
                  Outstanding interns may join us as full-time employees.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full mt-8 h-[1px] bg-gray-300 "></div>

          <div className="pt-4">
            <p className="font-T2 pt-2 font-light text-gray-500 pl-8 pr-8 text-center text-[1vw] tracking-wide">
              Apply now and take the first step toward building your future.
              Application link open until (01 December 2024) .
            </p>

            <div className="flex justify-center pt-2 gap-4 items-center">
              <p className="font-T2  font-light text-gray-500 text-center text-[1vw] tracking-wide">
                Don&apos;t miss out!{" "}
              </p>

              <Link
                href="https://docs.google.com/forms/d/1AC1zvssRLythhFJI3C45f5wXlPkmNORagJieqgjLs6A/edit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-transparent  font-T3 hover:bg-[#008080] text-[1vw] text-[#008080] font-semibold hover:text-white py-1 px-2  border border-[#008080] hover:border-transparent rounded">
                  Apply Now
                </button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      {/* Laptop */}

      {/* Tab */}

      <div className="hidden 2xl:hidden lg:hidden  md:block  bg-[#ECFDFF] ">
        <div className="max-w-[90%] mx-auto ">
          <div className="pt-[100px] flex justify-center">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/Internship-bro%20(1)%201.png?alt=media&token=33df6923-3c4d-43cc-ad91-d03b0f4f554c"
              alt="Intership"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "80%", height: "auto" }}
              className="select-none"
              onContextMenu={(e) => e.preventDefault()}
              draggable="false"
            />
          </div>

          <div className="pt-4">
            <h2 className="font-T1 font-extrabold text-center  text-[#008080] text-[6.4vw] tracking-wide">
              Internship Program
            </h2>
            <p className="font-T2 pt-4 font-light text-gray-500  text-center text-[3.4vw] tracking-wide">
              Join our 6-month internship program and work on real-world
              projects. Gain hands-on experience, enhance your skills, and
              receive an experience certificate.
            </p>
            <p className="font-T2 pt-4 font-light text-gray-800  text-center text-[3.4vw] tracking-wide">
              Note: Personal laptop (minimum 8GB RAM) required. Stipend not
              provided.
            </p>
          </div>

          <div className="w-full mt-8 h-[1px] bg-gray-300 "></div>

          <div className="pt-6">
            <h2 className="font-T1 font-extrabold text-center  text-[#008080] text-[6.4vw] tracking-wide">
              Why Intern with Us?
            </h2>

            <div className="flex flex-col justify-center items-center pt-8">
              <div className="flex flex-col justify-center items-center ">
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/image%20(1).png?alt=media&token=6ee1d1c5-498c-4850-9d61-d7defdb4ceb7"
                  alt="Intership Image 1"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "20%", height: "auto" }}
                  className="select-none"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />

                <h2 className="font-T1 pt-6 font-extrabold text-center  text-[#008080] text-[4vw] tracking-wide">
                  Skill Building
                </h2>
                <p className="font-T2 pt-2 font-light text-gray-500 pl-8 pr-8 text-center text-[3.2vw] tracking-wide">
                  Develop expertise in UI/UX, Marketing, Graphic Design, and
                  Development.
                </p>
              </div>

              <div className="flex flex-col justify-center items-center pt-8 ">
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/internship%20(1).png?alt=media&token=8ca9ff1c-ad94-453a-8c33-d2c09302cc9f"
                  alt="Intership Image 1"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "28%", height: "auto" }}
                  className="select-none"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />

                <h2 className="font-T1 pt-6 font-extrabold text-center  text-[#008080] text-[4vw] tracking-wide">
                  Real Projects
                </h2>
                <p className="font-T2 pt-2 font-light text-gray-500 pl-8 pr-8 text-center text-[3.2vw] tracking-wide">
                  Work on live client projects.
                </p>
              </div>

              <div className="flex flex-col justify-center items-center pt-8">
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/image%20(2).png?alt=media&token=9e90cda1-1255-44e9-9cfc-5d1f6b796df0"
                  alt="Intership Image 1"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "20%", height: "auto" }}
                  className="select-none"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />

                <h2 className="font-T1 pt-6 font-extrabold text-center  text-[#008080] text-[4vw] tracking-wide">
                  Future Opportunities
                </h2>
                <p className="font-T2 pt-2 font-light text-gray-500 pl-8 pr-8 text-center text-[3.2vw] tracking-wide">
                  Outstanding interns may join us as full-time employees.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full mt-8 h-[1px] bg-gray-300 "></div>

          <div className="pt-4">
            <p className="font-T2 pt-2 font-light text-gray-500  text-center text-[3.4vw] tracking-wide">
              Apply now and take the first step toward building your future.
              Application link open until (01 December 2024) .
            </p>

            <div className="flex justify-center pt-6 gap-4 items-center">
              <p className="font-T2  font-light text-gray-500 text-center text-[3.4vw] tracking-wide">
                Don&apos;t miss out!
              </p>

              <Link
                href="https://docs.google.com/forms/d/1AC1zvssRLythhFJI3C45f5wXlPkmNORagJieqgjLs6A/edit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-transparent  font-T3 hover:bg-[#008080] text-[3.4vw] text-[#008080] font-semibold hover:text-white py-1 px-2  border border-[#008080] hover:border-transparent rounded">
                  Apply Now
                </button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>

      {/* Tab */}

      {/* Mobile */}

      <div className="md:hidden  bg-[#ECFDFF] ">
        <div className="max-w-[90%] mx-auto ">
          <div className="pt-[100px] flex justify-center">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/Internship-bro%20(1)%201.png?alt=media&token=33df6923-3c4d-43cc-ad91-d03b0f4f554c"
              alt="Intership"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "80%", height: "auto" }}
              className="select-none"
              onContextMenu={(e) => e.preventDefault()}
              draggable="false"
            />
          </div>

          <div className="pt-4">
            <h2 className="font-T1 font-extrabold text-center  text-[#008080] text-[6.4vw] tracking-wide">
              Internship Program
            </h2>
            <p className="font-T2 pt-4 font-light text-gray-500  text-center text-[3.4vw] tracking-wide">
              Join our 6-month internship program and work on real-world
              projects. Gain hands-on experience, enhance your skills, and
              receive an experience certificate.
            </p>
            <p className="font-T2 pt-4 font-light text-gray-800  text-center text-[3.4vw] tracking-wide">
              Note: Personal laptop (minimum 8GB RAM) required. Stipend not
              provided.
            </p>
          </div>

          <div className="w-full mt-8 h-[1px] bg-gray-300 "></div>

          <div className="pt-6">
            <h2 className="font-T1 font-extrabold text-center  text-[#008080] text-[6.4vw] tracking-wide">
              Why Intern with Us?
            </h2>

            <div className="flex flex-col justify-center items-center pt-8">
              <div className="flex flex-col justify-center items-center ">
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/image%20(1).png?alt=media&token=6ee1d1c5-498c-4850-9d61-d7defdb4ceb7"
                  alt="Intership Image 1"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "20%", height: "auto" }}
                  className="select-none"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />

                <h2 className="font-T1 pt-6 font-extrabold text-center  text-[#008080] text-[4vw] tracking-wide">
                  Skill Building
                </h2>
                <p className="font-T2 pt-2 font-light text-gray-500 pl-8 pr-8 text-center text-[3.2vw] tracking-wide">
                  Develop expertise in UI/UX, Marketing, Graphic Design, and
                  Development.
                </p>
              </div>

              <div className="flex flex-col justify-center items-center pt-8 ">
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/internship%20(1).png?alt=media&token=8ca9ff1c-ad94-453a-8c33-d2c09302cc9f"
                  alt="Intership Image 1"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "28%", height: "auto" }}
                  className="select-none"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />

                <h2 className="font-T1 pt-6 font-extrabold text-center  text-[#008080] text-[4vw] tracking-wide">
                  Real Projects
                </h2>
                <p className="font-T2 pt-2 font-light text-gray-500 pl-8 pr-8 text-center text-[3.2vw] tracking-wide">
                  Work on live client projects.
                </p>
              </div>

              <div className="flex flex-col justify-center items-center pt-8">
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/image%20(2).png?alt=media&token=9e90cda1-1255-44e9-9cfc-5d1f6b796df0"
                  alt="Intership Image 1"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "20%", height: "auto" }}
                  className="select-none"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />

                <h2 className="font-T1 pt-6 font-extrabold text-center  text-[#008080] text-[4vw] tracking-wide">
                  Future Opportunities
                </h2>
                <p className="font-T2 pt-2 font-light text-gray-500 pl-8 pr-8 text-center text-[3.2vw] tracking-wide">
                  Outstanding interns may join us as full-time employees.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full mt-8 h-[1px] bg-gray-300 "></div>

          <div className="pt-4">
            <p className="font-T2 pt-2 font-light text-gray-500  text-center text-[3.4vw] tracking-wide">
              Apply now and take the first step toward building your future.
              Application link open until (01 December 2024) .
            </p>

            <div className="flex justify-center pt-6 gap-4 items-center">
              <p className="font-T2  font-light text-gray-500 text-center text-[3.4vw] tracking-wide">
                Don&apos;t miss out!
              </p>
              <Link
                href="https://docs.google.com/forms/d/1AC1zvssRLythhFJI3C45f5wXlPkmNORagJieqgjLs6A/edit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-transparent  font-T3 hover:bg-[#008080] text-[3.4vw] text-[#008080] font-semibold hover:text-white py-1 px-2  border border-[#008080] hover:border-transparent rounded">
                  Apply Now
                </button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>

      {/* Mobile */}
    </div>
  );
}

export default InternshipPage;
