import Marquee from "react-fast-marquee";
import Image from "next/image";

import TeamImg01 from "@/public/images/team/team-mosaic-03.jpeg";
import TeamImg02 from "@/public/images/team/team-mosaic-04.png";
import TeamImg03 from "@/public/images/team/team-mosaic-16.png";
import TeamImg04 from "@/public/images/team/team-mosaic-06.png";
import TeamImg05 from "@/public/images/team/team-mosaic-07.png";
import TeamImg06 from "@/public/images/team/team-mosaic-08.png";
import TeamImg07 from "@/public/images/team/team-mosaic-09.jpeg";
import TeamImg08 from "@/public/images/team/team-mosaic-10.jpeg";
import TeamImg09 from "@/public/images/team/team-mosaic-11.jpeg";
import TeamImg10 from "@/public/images/team/team-mosaic-12.jpeg";
import TeamImg11 from "@/public/images/team/team-mosaic-13.jpeg";
import TeamImg12 from "@/public/images/team/team-mosaic-14.jpeg";
import TeamImg13 from "@/public/images/team/team-mosaic-15.jpg";

const images = [
  { src: TeamImg01.src, alt: 'Image 1' },
  { src: TeamImg02.src, alt: 'Image 2' },
  { src: TeamImg03.src, alt: 'Image 3' },
  { src: TeamImg04.src, alt: 'Image 4' },
  { src: TeamImg05.src, alt: 'Image 5' },
  { src: TeamImg06.src, alt: 'Image 6' },
  { src: TeamImg07.src, alt: 'Image 7' },
  { src: TeamImg08.src, alt: 'Image 8' },
  { src: TeamImg09.src, alt: 'Image 9' },
  { src: TeamImg10.src, alt: 'Image 10' },
  { src: TeamImg11.src, alt: 'Image 11' },
  { src: TeamImg12.src, alt: 'Image 12' },
  { src: TeamImg13.src, alt: 'Image 13' },

];

export default function Team() {
  const duplicatedImages = [...images, ...images];
  
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1]">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.orange.200),theme(colors.gray.50),theme(colors.orange.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              The Humans Behind the Code
            </h2>
          </div>

          {/* Double Marquee section */}
          <div className="space-y-12">
            {/* First Marquee - Left to Right */}
            <div className="w-full overflow-hidden">
              <Marquee
                speed={30}
                direction="left"
                pauseOnHover={true}
                gradient={false}
                className="py-4"
              >
                {duplicatedImages.map((image, index) => (
                  <div key={index} className="mx-6">
                    <div className="relative w-80 h-52 overflow-hidden rounded-lg">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </div>
                ))}
              </Marquee>
            </div>

            {/* Second Marquee - Right to Left */}
            <div className="w-full overflow-hidden">
              <Marquee
                speed={30}
                direction="right"
                pauseOnHover={true}
                gradient={false}
                className="py-4"
              >
                {[...duplicatedImages].reverse().map((image, index) => (
                  <div key={index} className="mx-6">
                    <div className="relative w-80 h-52 overflow-hidden rounded-lg">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}