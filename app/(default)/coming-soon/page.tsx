import Link from "next/link";
import { RocketIcon, ChevronRight } from "lucide-react";

export default function ComingSoon() {
  return (
    
    <section className="relative min-h-[calc(100vh-0.2rem)] flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 ">
        <div className="opacity-55 absolute -top-[45%] border-2 -right-[5%] w-[50%] h-[80%] rounded-full rotate-12 bg-gradient-to-br from-orange-400/10 to-orange-500/10 blur-[80px]" />
        <div className="opacity-55 absolute top-[35%] -left-[30%] w-[45%] h-[60%] rounded-full rotate-45 bg-gradient-to-tr from-indigo-500/20 to-purple-500/10 blur-[90px]" />
        <div className="absolute top-[35%] -right-[30%] w-[45%] h-[60%] rounded-full rotate-45 bg-gradient-to-tr from-orange-400/20 to-orange-500/10 blur-[90px]" />

        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <div
              className="mb-8 lg:flex sm:justify-center"
              data-aos="fade-down"
            >
              <div className="group inline-flex items-center">
                <div className="relative rounded-full px-3 py-1 text-sm/2 text-theme-secondary flex items-center transition-all duration-200 ease-in-out border-[0.1rem] border-black/5 shadow-slate-400/90 hover:shadow-sm">
                  <RocketIcon size={16} color="#fb923c" />
                  <span className="mx-2">Something exciting is coming!</span>
                  <Link
                    href="https://github.com/keploy/keploy"
                    aria-label="Check our GitHub"
                    className="font-bold text-indigo-900 underline"
                    target="_blank"
                  >
                    Star us on GitHub
                  </Link>
                  <ChevronRight
                    size={16}
                    className="transition-transform text-indigo-900 duration-300 group-hover:translate-x-1"
                  />
                </div>
              </div>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-center bg-gradient-to-l from-orange-500 to-red-500 bg-clip-text text-transparent mb-6 pb-2">
              Coming Soon
            </h1>
            <p className="text-lg text-slate-800/70 mb-8">
              We’re building something incredible for you. Stay tuned for
              exciting updates!
            </p>

            <div className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center sm:space-y-0 sm:space-x-4 ">
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
              <div>
                <Link
                  className="btn text-sm text-indigo-900 border border-indigo-700 rounded-full shadow-md hover:shadow-lg hover:bg-gradient-to-r hover:from-indigo-800 hover:to-purple-900 hover:text-white focus:bg-gradient-to-r focus:from-indigo-800 focus:to-purple-900 focus:text-white transition-all duration-300 ease-in-out flex items-center justify-center px-6 py-2"
                  href="https://calendar.app.google/cXVaj6hbMUjvmrnt9"
                  aria-label="Join Cloud Waitlist"
                  target="_blank"
                >
                  <RocketIcon
                    size={16}
                    className="mr-2 transition-transform hover:scale-105"
                  />
                  Book Cloud Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
