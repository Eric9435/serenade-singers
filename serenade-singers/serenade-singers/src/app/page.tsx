import { ArrowRight } from "lucide-react";

import { site } from "@/data/site";

export default function Home() {
  return (
    <main>

      <section className="mx-auto grid min-h-[85vh] max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">

        <div>

          <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-[#C9A24A]">
            Premium Choir Community
          </p>

          <h1 className="text-6xl font-black tracking-tight text-[#061A2F] md:text-8xl">
            Serenade
            <span className="block text-[#C9A24A]">
              Singers
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#1F2933]/75">
            {site.description}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">

            <a
              href={site.signupForm}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full bg-[#061A2F] px-7 py-4 font-semibold text-white hover:bg-[#C9A24A]"
            >
              Join Now
              <ArrowRight size={18} />
            </a>

          </div>
        </div>

        <div className="rounded-[2.5rem] border border-[#e8dfcc] bg-white p-10 shadow-2xl">

          <div className="rounded-[2rem] bg-[#061A2F] p-10 text-white">

            <h2 className="text-4xl font-bold">
              Music. Harmony. Elegance.
            </h2>

            <p className="mt-5 text-white/70">
              Choir training, music classes, webinars,
              performances, and modern musical experiences.
            </p>

          </div>
        </div>

      </section>
    </main>
  );
}
