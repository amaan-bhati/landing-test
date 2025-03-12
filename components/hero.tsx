"use client";

import { ChevronRight, RocketIcon } from "lucide-react";
import ModalVideo from "@/components/modal-video";
import VideoThumb from "@/public/images/demo-thumbnail.png";
import Link from "next/link";
import { Assets } from "./icons";
export default function Hero() {
  return (
    <section className="text-center">
      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Particles animation */}
        {/*<Particles className="absolute inset-0 -z-10  " />*/}
        <div className="opacity-55 absolute -top-[45%] border-2 -right-[5%] w-[50%] h-[80%] rounded-full rotate-12 bg-gradient-to-br from-orange-400/10 to-orange-500/10 blur-[80px]" />

        <div className="opacity-55 absolute top-[35%] -left-[30%] w-[45%] h-[60%] rounded-full rotate-45 bg-gradient-to-tr from-indigo-500/20 to-purple-500/10 blur-[90px]" />

        <div className="absolute top-[35%] -right-[30%] w-[45%] h-[60%] rounded-full rotate-45 bg-gradient-to-tr from-orange-400/20 to-orange-500/10 blur-[90px]" />

        <div className="absolute bottom-[15%] right-[20%] w-[40%] h-[40%] rounded-full -rotate-12 bg-gradient-to-bl from-orange-400/15 to-pink-400/5 blur-[70px]" />

        <div className="pt-28 md:pt-40">
          <div className="max-w-6xl mx-auto text-center relative">
            {/* Badge */}
            <div
              className=" mb-8 lg:flex sm:justify-center"
              data-aos="fade-down"
            >
              <div className="group inline-flex items-center">
                <Link
                      href="https://marketplace.visualstudio.com/items?itemName=Keploy.keployio"
                      aria-label="Get Started with Keploy"
                      target="_blank"
                    > <div className="relative rounded-full px-4 py-1 text-sm/2 text-theme-secondary flex items-center transition-all duration-200 ease-in-out border-[0.1rem]  border-black/5 shadow-slate-400/90 hover:shadow-sm">
                    <RocketIcon size={16} color="#fb923c" />
                    <span className="mx-2"> 2 minutes to 90% coverage. </span>
                      <span className="font-bold text-indigo-900 underline">Try Now!</span>
                    <span className="py-1.5 inline-flex justify-center items-center rounded-full font-semibold text-sm transition-transform transform group-hover:translate-x-1 ml-1">
                      <ChevronRight
                        size={16}
                        className="transition-transform text-indigo-900 duration-300 group-hover:text-indigo-800/90 group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Main Heading */}
            <div className="relative inline-flex font-black text-center bg-gradient-to-l from-red-500 to-orange-500 bg-clip-text text-transparent">
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl" >AI Generated Tests that work!
              </h1>
              <div className="absolute right-0 bottom-[-0.8rem] z-0  transform w-[clamp(80px,15vw,150px)] opacity-0 md:opacity-100"   data-aos="fade-in"   data-aos-easing="ease-in">
                <Assets.underlineStroke2/>
              </div>  
              <div className="absolute left-1/2 bottom-[-0.8rem] z-0 transform -translate-x-1/2  w-[clamp(20px,20vw,150px)] md:hidden" data-aos="fade-in"   data-aos-easing="ease-in">
                <Assets.underlineStroke1 />
              </div>
            </div>

            {/* Subtext */}
            <div
              className="my-6"
              data-aos="fade-down"
              // data-aos-delay="200"
            >
              <p className="text-lg text-theme-secondary">
                <span className="font-bold text-indigo-900">Open source</span>{" "}
                testing agent for generating valid{" "}
                <span className="font-medium text-indigo-900">unit</span>
                <span className="text-slate-400/90">,</span>{" "}
                <span className="font-medium text-indigo-900">api</span>
                <span className="text-slate-400/90">,</span>{" "}
                <span className="font-medium text-indigo-900">integration</span>
                {" "}  tests
                {/*<span className="text-slate-400/50">,</span>{" "}*/}
                {/*<span className="font-medium text-indigo-900">e2e tests</span>*/}
              </p>
            </div>

            {/* Call-to-Action Buttons */}
            <div
              className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center sm:space-y-0 sm:space-x-4 "
              // data-aos="fade-down"
              // data-aos-delay="400"
            >
              <div className="mb-2 sm:mb-0 sm:mr-1">
                <Link
                  className="btn text-sm py-2 px-6 text-white bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-lg hover:shadow-xl hover:from-red-500 hover:to-orange-500 transition-all duration-300 ease-in-out flex items-center justify-center relative overflow-hidden"
                  href="https://app.keploy.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Get Started"
                >
                  <svg
                    className="shrink-0 fill-white mr-2 transition-transform hover:scale-105"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                  >
                    <path d="M1.999 0L3 2 2 4l2-1 2 1-1-2 1-2-2 1zM11.999 0l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 10l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM6.292 7.586l2.646-2.647L11.06 7.06 8.413 9.707zM0 13.878l5.586-5.586 2.122 2.121L2.12 16z" />
                  </svg>
                  <span>Try for Free!</span>
                  <div className="absolute inset-0 -translate-x-full hover:translate-x-0 transition-transform duration-700 bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 opacity-20" />
                </Link>
              </div>
              <Link
                href="https://calendar.app.google/cXVaj6hbMUjvmrnt9"
                className="group btn text-sm text-indigo-900 border border-indigo-700 rounded-full shadow-md px-6 py-2 flex items-center justify-center transition-all duration-300 ease-in-out hover:shadow-lg hover:bg-indigo-800 hover:text-white  hover:border-indigo-900 z-10 will-change-transform"
                aria-label="Join Cloud Waitlist"
                target="_blank"
                rel="noopener noreferrer"
            >
                <RocketIcon size={16} className="mr-2" />
                Book Cloud Demo
            </Link>
            </div>
          </div>

          <div className="max-w-xl mx-auto text-center pt-3 justify-center align-middle">
            <ModalVideo
              thumb={VideoThumb}
              thumbWidth={768}
              thumbHeight={432}
              thumbAlt="Keploy Demo video"
              video="https://www.youtube.com/embed/gvWvpqWM48s"
              videoWidth={768}
              videoHeight={432}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
