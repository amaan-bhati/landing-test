import Image from "next/image";

export default function Tweet({
  testimonial,
  cloned = false,
  className,
  children,
}: {
  testimonial: {
    image: string;
    name: string;
    user?: string;
    link: string;
    content?: string;
  };
  cloned?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <article
      className={`relative flex flex-col rounded-2xl bg-white/70 p-5 shadow-lg shadow-black/[0.03] before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] md:odd:-rotate-1 md:even:rotate-1 ${className}`}
    >
      <header className="mb-4 flex items-center gap-3">
        <Image
          className="shrink-0 rounded-full"
          src={testimonial.image}
          width={44}
          height={44}
          alt={testimonial.name}
        />
        <div>
          <div className="font-bold">{testimonial.name}</div>
          {testimonial.user ? (
            <div>
              <a
                className="text-sm font-medium text-gray-500/80 transition hover:text-gray-500"
                href={testimonial.link}
                tabIndex={cloned ? -1 : 0}
              >
                @{testimonial.user}
              </a>
            </div>
          ) : null}
        </div>
      </header>

      {testimonial.content ? (
        <div className="grow">
          <a href={testimonial.link} tabIndex={cloned ? -1 : 0}>
            <p className="mb-4 font-dmSans">{children}</p>
          </a>
        </div>
      ) : (
        <div className="grow text-sm text-gray-700">{children}</div>
      )}
    </article>
  );
}
