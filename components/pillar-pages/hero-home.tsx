import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import APITesting from "@/public/images/assests/Integration.png";
import Avatar01 from "@/public/images/avatar-01.jpg";
import Avatar02 from "@/public/images/avatar-02.jpg";
import Avatar03 from "@/public/images/avatar-03.jpg";
import Avatar04 from "@/public/images/avatar-04.jpg";
import Avatar05 from "@/public/images/avatar-05.jpg";
import Avatar06 from "@/public/images/avatar-06.jpg";

export default function HeroHome() {
  return (
      <section className="relative">
        <PageIllustration/>
        <div
            className="opacity-55 absolute -top-[45%] border-2 -right-[5%] w-[50%] h-[80%] rounded-full rotate-12 bg-gradient-to-br from-orange-400/10 to-orange-500/10 blur-[80px]"/>

        <div
            className="opacity-55 absolute top-[35%] -left-[30%] w-[45%] h-[60%] rounded-full rotate-45 bg-gradient-to-tr from-indigo-500/20 to-purple-500/10 blur-[90px]"/>

        <div
            className="absolute top-[35%] -right-[30%] w-[45%] h-[60%] rounded-full rotate-45 bg-gradient-to-tr from-orange-400/20 to-orange-500/10 blur-[90px]"/>

        <div
            className="absolute bottom-[15%] right-[20%] w-[40%] h-[40%] rounded-full -rotate-12 bg-gradient-to-bl from-orange-400/15 to-pink-400/5 blur-[70px]"/>


        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Hero content */}
          <div className="pb-12 pt-32 md:pb-20 md:pt-40">
            {/* Section header */}
            <div className="pb-12 text-center md:pb-16">
              <div
                  className="mb-6 border-y [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]"
                  data-aos="zoom-y-out"
              >
                <div className="-mx-0.5 flex justify-center -space-x-3">
                  <Image
                      className="box-content rounded-full border-2 border-gray-50"
                      src={Avatar01}
                      width={32}
                      height={32}
                      alt="Avatar 01"
                  />
                  <Image
                      className="box-content rounded-full border-2 border-gray-50"
                      src={Avatar02}
                      width={32}
                      height={32}
                      alt="Avatar 01"
                  />
                  <Image
                      className="box-content rounded-full border-2 border-gray-50"
                      src={Avatar03}
                      width={32}
                      height={32}
                      alt="Avatar 02"
                  />
                  <Image
                      className="box-content rounded-full border-2 border-gray-50"
                      src={Avatar04}
                      width={32}
                      height={32}
                      alt="Avatar 03"
                  />
                  <Image
                      className="box-content rounded-full border-2 border-gray-50"
                      src={Avatar05}
                      width={32}
                      height={32}
                      alt="Avatar 04"
                  />
                  <Image
                      className="box-content rounded-full border-2 border-gray-50"
                      src={Avatar06}
                      width={32}
                      height={32}
                      alt="Avatar 05"
                  />
                </div>
              </div>
              <h1
                  className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl"
                  data-aos="zoom-y-out"
                  data-aos-delay={150}
              >
                Automated API Testing Agent <br/>to Ship with Confidence
              </h1>
              <div className="mx-auto max-w-3xl">
                <p
                    className="mb-8 text-lg text-gray-700"
                    data-aos="zoom-y-out"
                    data-aos-delay={300}
                >
                  Master API Testing Without Breaking a Sweat
                  Make testing a superpower, not a burden
                </p>
                <div
                    className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
                  <div
                      className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                      data-aos="zoom-y-out"
                      data-aos-delay={450}
                  >
                    <a
                        className="btn group mb-4 w-full bg-gradient-to-r from-orange-500 to-red-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                        href="https://app.keploy.io"
                    >
                    <span className="relative inline-flex items-center">
                      Start Free Trial{" "}
                      <span
                          className="ml-1 tracking-normal text-white-300 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Hero image */}
            <div
                className="mx-auto max-w-3xl"
                data-aos="zoom-y-out"
                data-aos-delay={600}
            >
              <Image
                  className="rounded-2xl"
                  src={APITesting}
                  width={768}
                  height={432}
                  alt="API Testing"
              />
            </div>
          </div>
        </div>
      </section>
  );
}
