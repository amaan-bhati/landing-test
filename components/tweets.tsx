"use client";
import Testimonial from "@/components/tweet";

export default function Tweets() {
  const testimonials = [
    {
      image:
        "https://pbs.twimg.com/profile_images/1653250498127089665/x5RJbLq5_400x400.jpg",
      name: "きょん/kyong",
      user: "kyongshiii06",
      link: "https://x.com/kyongshiii06/status/1753030333128495470?s=20",
      content:
        "I tried keploy, it was amazing. Just wrap and start docker, and then just hit the API with curl or the client and you'll be able to test more and more. This is the golden test.",
    },
    {
      image:
        "https://pbs.twimg.com/profile_images/1741543460115812352/8x4aAI9k_400x400.jpg",
      name: "Shivam Sourav Jha",
      user: "ShivamSouravJha",
      link: "https://x.com/ShivamSouravJha/status/1747517726749286713?s=20",
      content:
        "Why do I like keploy so much? Literally I see many tools and so hard to integrate. I mean update VScode , use the sdk , make this change make that change. With Keploy, don't worry buddy just run your application, we will literally do everything for you. You need to 0 efforts.",
    },
    {
      image:
        "https://pbs.twimg.com/profile_images/837573171427487744/IGQLsM55_400x400.jpg",
      name: "やまもと@視力2.0",
      user: "yamamoto_febc",
      link: "https://x.com/yamamoto_febc/status/1755802346188390531?s=20",
      content:
        "It is quite easy to create normal tests. On the other hand, abnormal systems may be a little difficult. I think it's okay to use it only for normal systems.",
    },
    {
      image:
        "https://pbs.twimg.com/profile_images/1422864637532332033/mC1Nx0vj_400x400.jpg",
      name: "matsuu@充電期間",
      user: "matsuu",
      link: "https://x.com/matsuu/status/1747448928575099236?s=20",
      content:
        "Based on the communication trace information that can be obtained using eBPF, it is possible to generate a test and a stub server to be used when executing the test.",
    },
    {
      image:
        "https://pbs.twimg.com/profile_images/1604797450124144640/6G7KytX8_400x400.jpg",
      name: "あんどーぼんばー",
      user: "AndooBomber",
      link: "https://x.com/AndooBomber/status/1747663021747691808?s=20",
      content: "I tried Keploy, good tool.",
    },
    {
      image:
        "https://pbs.twimg.com/profile_images/1569793803313201154/Lso5fu1j_400x400.jpg",
      name: "Jay Vasant",
      user: "__alter123",
      link: "https://x.com/__alter123/status/1731985031521014236?s=20",
      content:
        "The point being, maintaining unit tests is terribly difficult, and in general requires more efforts than the actual development itself. I've hardly seen any startups even at good scale able to manage unit tests. If you really think it's a requirement you can try tools like Keploy. But I feel even if you honestly think, manual testing should be always feasible",
    },
    {
      image:
        "https://pbs.twimg.com/profile_images/1213737438830452736/5_5zXtXN_400x400.jpg",
      name: "mugi",
      user: "mugi_uno",
      link: "https://x.com/mugi_uno/status/1745726154924003502?s=20",
      content:
        "I think the problem with mock data is that it is difficult to maintain, so if it makes it easier, I think it would be a good idea. The automated testing tool “Keploy” using eBPF is amazing",
    },
    {
      image:
        "https://pbs.twimg.com/profile_images/1653250498127089665/x5RJbLq5_400x400.jpg",
      name: "きょん/kyong",
      user: "kyongshiii06",
      link: "https://x.com/kyongshiii06/status/1746532217336250821?s=20",
      content:
        "Keploy can record and replay complex, distributed API flows as mocks and stubs. It's like having a time machine for your tests—saving you tons of time.",
    },
    {
      image:
        "https://pbs.twimg.com/profile_images/1482259385959464960/1pQMXwj7_400x400.jpg",
      name: "yadon",
      user: "Seipann11",
      link: "https://x.com/Seipann11/status/1755989987039064103?s=20",
      content:
        "Keploy is seriously amazing, a genius tool crushing issues at lightning speed.",
    },
    {
      image:
        "https://pbs.twimg.com/profile_images/1712175220176355329/sLXbk_PZ_400x400.jpg",
      name: "TadasG",
      user: "JustADude404",
      link: "https://x.com/JustADude404/status/1746888711491424681?s=20",
      content:
        "Keploy is a tool which can automatically generate tests based on data from your running app. It simply attaches to your app, reads the data being passed through, and generates tests with real data. Pretty cool, huh?",
    },
    {
      image:
        "https://pbs.twimg.com/profile_images/1701251291861712897/PiTZ0UO7_400x400.jpg",
      name: "Junichi.Y🐼@休職中",
      user: "ymnk_8752",
      link: "https://x.com/ymnk_8752/status/1745458928698450057?s=20",
      content:
        "It is amazing! I hear about eBPF a lot, but I don't know what it is.",
    },
  ];

  return (
    <section className="relative before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:h-[120%] before:bg-gradient-to-b before:from-gray-100">
      <div className="mt-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-xl font-bold md:text-2xl bg-gradient-to-l from-orange-500 to-purple-950 bg-clip-text text-transparent ">
              We love when you Tweet!
            </h2>
          </div>
        </div>
        <div className="relative mx-auto flex max-w-[94rem] justify-center">
          <div
            className="absolute bottom-20 -z-10 -translate-x-36"
            aria-hidden="true"
          >
            <div className="h-80 w-80 rounded-full bg-gradient-to-tr from-orange-500 to-gray-900 opacity-30 blur-[160px] will-change-[filter]" />
          </div>
          <div className="absolute -bottom-30 -z-10" aria-hidden="true">
            <div className="h-80 w-80 rounded-full bg-indigo-500 opacity-40 blur-[160px] will-change-[filter]" />
          </div>
          <div className="absolute bottom-20 -z-10" aria-hidden="true">
            <div className="h-56 w-56 rounded-full border-[20px] border-slate-100 blur-[20px] will-change-[filter]" />
          </div>
          {/* Row */}
          <div className="group inline-flex w-full flex-nowrap py-12 [mask-image:_linear-gradient(to_right,transparent_0,_black_10%,_black_90%,transparent_100%)] md:py-20">
            <div className="flex animate-[infinite-scroll_60s_linear_infinite] items-start justify-center group-hover:[animation-play-state:paused] md:justify-start [&>*]:mx-3">
              {/* Items */}
              {testimonials.map((testimonial, index) => (
                <Testimonial
                  key={index}
                  testimonial={testimonial}
                  className="w-[22rem] transition-transform duration-300 group-hover:rotate-0"
                >
                  {testimonial.content}
                </Testimonial>
              ))}
            </div>
            {/* Duplicated element for infinite scroll */}
            <div
              className="flex animate-[infinite-scroll_60s_linear_infinite] items-start justify-center group-hover:[animation-play-state:paused] md:justify-start [&>*]:mx-3"
              aria-hidden="true"
            >
              {/* Items */}
              {testimonials.map((testimonial, index) => (
                <Testimonial
                  key={index}
                  testimonial={testimonial}
                  cloned={true}
                  className="w-[22rem] transition-transform duration-300 group-hover:rotate-0"
                >
                  {testimonial.content}
                </Testimonial>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
