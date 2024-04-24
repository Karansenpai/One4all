"use client";
import React, { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import { Button } from "../ui/button";
import ContactPage from "../contact/contact";
// Little helpers ...
import Features from "../features/features";
const url = (name: string, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;

export default function ParallaxPage() {
  const parallax = useRef<IParallax>(null!);
  return (
    <div
      className="overflow-y-hidden"
      style={{ width: "100%", height: "100%", background: "#253237" }}
    >
      <Parallax ref={parallax} pages={4}>
        <ParallaxLayer
          offset={1}
          speed={1}
          style={{ backgroundColor: "white" }}
        />

        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={
            {
              // backgroundColor: "white",
            }
          }
        />

        <ParallaxLayer
          offset={1.3}
          speed={-0.3}
          style={{ pointerEvents: "none" }}
        >
          <div className="px-[50px]">
            <h1 className="text-[#000000] flex justify-center font-bold">
              FEATURES
            </h1>
            {/* <img src="/HP.jpg" style={{ width: "15%", marginLeft: "70%" }} /> */}
            <Features />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img
            src="/HP.jpg"
            style={{ display: "block", width: "20%", marginLeft: "55%" }}
          />

          <img
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "15%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "70%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "40%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "10%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "75%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "60%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "25%", marginLeft: "30%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "80%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "5%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "15%", marginLeft: "75%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.5}
          speed={-0.4}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <img src={url("earth")} style={{ width: "60%" }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.3}
          speed={-0.3}
          style={{
            backgroundSize: "80%",
            backgroundPosition: "center",
            // backgroundImage: url("clients", true),
          }}
        >
          <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Our Team
                </h2>
              </div>
              <ul
                role="list"
                className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
              >
                <li>
                  <div className="flex items-center gap-x-6">
                    {/* <img src={url("earth")} style={{ width: "60%" }} /> */}
                    <div className="w-[100%]">
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                        Aditya Mertia
                      </h3>
                      <p className="text-sm font-semibold leading-6 text-indigo-600">
                        {/* Co-Founder / CEO */}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                        Rishabh Kumar
                      </h3>
                      <p className="text-sm font-semibold leading-6 text-indigo-600">
                        {/* Co-Founder / CEO */}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                        Karan Singh
                      </h3>
                      <p className="text-sm font-semibold leading-6 text-indigo-600">
                        {/* Co-Founder / CEO */}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                        Tejas Sharma
                      </h3>
                      <p className="text-sm font-semibold leading-6 text-indigo-600">
                        {/* Co-Founder / CEO */}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                        Varun Naik
                      </h3>
                      <p className="text-sm font-semibold leading-6 text-indigo-600">
                        {/* Co-Founder / CEO */}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                        Atharva Chavan
                      </h3>
                      <p className="text-sm font-semibold leading-6 text-indigo-600">
                        {/* Co-Founder / CEO */}
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0.1}
          // onClick={() => parallax.current.scrollTo(1)}
          style={{
            padding: "50px",
            display: "flex",
            gap: "30px",
            alignItems: "center",
            justifyContent: "space-around ",
          }}
        >
          <div className="flex flex-col gap-[20px] justify-center items-center text-justify">
            <h1 className="text-[70px]">One for All</h1>
            <p className="text-[20px] w-[60%]">
              One4All is a comprehensive web application designed to address the
              various needs of college students, faculty, and staff. It serves
              as a centralized platform for managing tasks related to attendance
              tracking, academic performance monitoring, communication, and
              feedback within educational institutions
            </p>
            <div className="flex gap-[20px]">
              <Button onClick={() => parallax.current.scrollTo(1)}>
                Know More
              </Button>
              <Button onClick={() => parallax.current.scrollTo(2.9)}>
                Contact Us
              </Button>
            </div>
          </div>
          {/*  <img src="/HP.jpg" style={{ width: "40%" }} /> */}
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={0.1}
          // onClick={() => parallax.current.scrollTo(2)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* <img src={url("bash")} style={{ width: "40%" }} /> */}
          <div className="bg-[#000000] w-[100%]">
            <ContactPage />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
