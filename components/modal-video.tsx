"use client";

import { useState, useEffect, useRef, Fragment } from "react";
import type { StaticImageData } from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import Particles from "@/components/particles";

interface ModalVideoProps {
  thumb: StaticImageData;
  thumbWidth: number;
  thumbHeight: number;
  thumbAlt: string;
  video: string;
  videoWidth: number;
  videoHeight: number;
}

export default function ModalVideo({
  thumb,
  thumbWidth,
  thumbHeight,
  thumbAlt,
  video,
  videoWidth,
  videoHeight,
}: ModalVideoProps) {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [color, setColor] = useState("#ffffff");

  return (
    <div className="relative">
      <div>
        <div
          className="relative flex justify-center z-10 "
          data-aos="zoom-y-out"
          data-aos-delay="450"
        >
          <div className="flex flex-col justify-center">
            <Image
              className="mx-auto rounded-lg h-auto sm:w-auto md:w-auto"
              src={thumb}
              width={thumbWidth}
              height={thumbHeight}
              alt={thumbAlt}
            />
            <svg
              onMouseEnter={() => {
                setIsHovered(true);
              }}
              onMouseLeave={() => {
                setIsHovered(false);
              }}
              className="absolute inset-0 max-w-full mx-auto md:max-w-none h-auto cursor-pointer "
              onClick={() => {
                setModalOpen(true);
              }}
              width="568"
              height="432"
              viewBox="0 0 768 532"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <defs>
                <linearGradient
                  x1="50%"
                  y1="0%"
                  x2="50%"
                  y2="100%"
                  id="hero-ill-a"
                >
                  <stop stopColor="#FFF" offset="0%" />
                  <stop stopColor="#EAEAEA" offset="77.402%" />
                  <stop stopColor="#DFDFDF" offset="100%" />
                </linearGradient>
                <linearGradient
                  x1="50%"
                  y1="0%"
                  x2="50%"
                  y2="99.24%"
                  id="hero-ill-b"
                >
                  <stop stopColor="#FFF" offset="0%" />
                  <stop stopColor="#EAEAEA" offset="48.57%" />
                  <stop stopColor="#DFDFDF" stopOpacity="0" offset="100%" />
                </linearGradient>
                <radialGradient
                  cx="21.152%"
                  cy="86.063%"
                  fx="21.152%"
                  fy="86.063%"
                  r="79.941%"
                  id="hero-ill-e"
                >
                  <stop stopColor="#29456E" offset="0%" />
                  <stop stopColor="#00163d" offset="25.871%" />
                  <stop stopColor="#00061A" offset="100%" />
                </radialGradient>
                <circle
                  id="hero-ill-d"
                  cx="384"
                  cy="216"
                  r="40"
                  fill="#000"
                  opacity={isHovered ? 0.5 : 0.3}
                />
              </defs>
              <g fill="none" fillRule="evenodd">
                <circle
                  fillOpacity={isHovered ? 0.3 : 0.2}
                  fill="url(#hero-ill-a)"
                  cx="384"
                  cy="216"
                  r="128"
                />
                <circle
                  fillOpacity={isHovered ? 0.5 : 0.4}
                  fill="url(#hero-ill-b)"
                  cx="384"
                  cy="216"
                  r="96"
                />
                <g fillRule="nonzero">
                  <use fill="#000" xlinkHref="#hero-ill-d" />
                  <use fill="url(#hero-ill-e)" xlinkHref="#hero-ill-d" />
                </g>
                <g transform="translate(342 174)">
                  <polygon
                    fill="#ff914d"
                    stroke="#6f0a0d"
                    strokeWidth="1"
                    points="32,25 32,58 60,42"
                  />
                </g>
              </g>
            </svg>
          </div>
          <Particles
            className="absolute transition ease-out inset-0 -z-10"
            quantity={150}
            ease={80}
            refresh
          />
        </div>
      </div>

      <Transition
        show={modalOpen}
        as={Fragment}
        afterEnter={() => videoRef.current?.play()}
      >
        <Dialog
          initialFocus={videoRef}
          onClose={() => {
            setModalOpen(false);
          }}
        >
          <Transition.Child
            enter="transition ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-out duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            aria-hidden="true"
          >
            <div className="fixed inset-0 z-[99999] bg-black bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <Transition.Child
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-out duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-[99999] overflow-hidden transform px-4 sm:px-6">
              <div className="w-full max-w-6xl h-full flex items-center justify-center">
                <Dialog.Panel className="w-full max-h-full bg-blur overflow-hidden">
                  <div className="w-full sm:w-[70%] md:w-[80%] lg:w-[90%] mx-auto">
                    <div
                      className="h-0 relative"
                      style={{ paddingBottom: "56.25%" }}
                    >
                      <iframe
                        src={video}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full"
                      />
                    </div>
                  </div>
                </Dialog.Panel>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </div>
  );
}
