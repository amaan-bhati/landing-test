import Image from "next/image";

import TeamImg01 from "@/public/images/team/devscribe-event.jpeg";
import TeamImg03 from"@/public/images/team/gittogether-event.jpg";
import TeamImg02 from "@/public/images/team/team-mosaic-01.jpeg";
import TeamImg04 from "@/public/images/team/team-mosaic-05.jpeg";

export default function HeroAbout() {
  return (
    <section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
          <div className="py-12 md:py-20">

              {/* Section header */}
              <div className="pt-20 pb-12 text-center md:pb-20">
                  <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black leading-tight text-center bg-gradient-to-l from-orange-500 to-red-500 bg-clip-text text-transparent">
                      On a mission to end Regressions!
                  </h1>
                  <div className=" pt-10 mx-auto max-w-3xl">
                      <p className="text-lg text-theme-secondary ">
                          We’ve been developers, just like you—faced the same challenges and frustrations. Our goal is
                          to make testing effortless, so you don’t have to worry about regressions again.
                      </p>
                  </div>
              </div>

              <div className="mx-auto max-w-3xl">

                  <div className="relative aspect-[4/3] w-full">
                      <div
                          className="opacity-55 absolute -top-[45%] border-2 -right-[5%] w-[50%] h-[80%] rounded-full rotate-12 bg-gradient-to-br from-orange-400/10 to-orange-500/10 blur-[80px]"/>

                      <div
                          className="opacity-55 absolute top-[35%] -left-[30%] w-[45%] h-[60%] rounded-full rotate-45 bg-gradient-to-tr from-orange-500/20 to-purple-500/10 blur-[90px]"/>

                      <div
                          className="absolute top-[35%] -right-[30%] w-[45%] h-[60%] rounded-full rotate-45 bg-gradient-to-tr from-orange-400/20 to-orange-500/10 blur-[90px]"/>

                      <div
                          className="absolute bottom-[15%] right-[20%] w-[40%] h-[40%] rounded-full -rotate-12 bg-gradient-to-bl from-orange-400/15 to-pink-400/5 blur-[70px]"/>

                      <figure
                          className="absolute h-auto"
                          style={{
                              top: "45%",
                              width: "41.67%",
                              maxWidth: 320
                          }}
                          data-aos="fade-right"
                      >
                          <div
                              className="relative -rotate-2 overflow-hidden rounded-2xl before:absolute before:inset-0 before:bg-gradient-to-br before:from-gray-900 before:via-orange-500 before:to-gray-900">
                              <Image
                                  className="opacity-80 grayscale"
                                  src={TeamImg02}
                                  width={320}
                                  height={240}
                                  alt="Team mosaic 02"
                              />
                          </div>
                      </figure>
                      <figure
                          className="relative mx-auto"
                          style={{
                              width: "78.13%",
                              maxWidth: 600
                          }}
                          data-aos="fade-down"
                          data-aos-delay={100}
                      >
                          <div
                              className="relative -rotate-2 overflow-hidden rounded-2xl before:absolute before:inset-0 before:bg-gradient-to-br before:from-gray-900 before:via-orange-500 before:to-gray-900">
                              <Image
                                  className="opacity-90 grayscale"
                                  src={TeamImg01}
                                  width={600}
                                  height={338}
                                  alt="DevScribe event"
                              />
                          </div>
                      </figure>
                      <figure
                          className="absolute h-auto"
                          style={{
                              top: "8.5%",
                              right: 0,
                              width: "32.56%",
                              maxWidth: 250,
                          }}
                          data-aos="fade-left"
                          data-aos-delay={200}
                      >
                          <div
                              className="relative rotate-2 overflow-hidden rounded-2xl before:absolute before:inset-0 before:bg-gradient-to-br before:from-gray-900 before:via-orange-500 before:to-gray-900">
                              <Image
                                  className="opacity-90 grayscale"
                                  src={TeamImg03}
                                  width={250}
                                  height={188}
                                  alt="GitTogether event"
                              />
                          </div>
                      </figure>
                      <figure
                          className="absolute h-auto"
                          style={{
                              top: "45%",
                              right: "20%",
                              width: "25.53%",
                              maxWidth: 196,
                          }}
                          data-aos="fade-up"
                          data-aos-delay={300}
                      >
                          <div
                              className="relative rotate-2 overflow-hidden rounded-2xl before:absolute before:inset-0 before:bg-gradient-to-br before:from-gray-900 before:via-orange-500 before:to-gray-900 before:opacity-40">
                              <Image
                                  className="opacity-70 grayscale"
                                  src={TeamImg04}
                                  width={250}
                                  height={250}
                                  alt="Team mosaic 04"
                              />
                          </div>
                      </figure>
                  </div>
              </div>
          </div>
      </div>
    </section>
  );
}
