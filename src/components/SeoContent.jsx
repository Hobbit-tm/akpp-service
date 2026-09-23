import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function SeoContent({ data }) {
  if (!data) {
    return null;
  }

  const cards = data.cards || [];
  const paragraphs = data.seoContent?.paragraphs || [];

  return (
    <section id="seo" className="relative overflow-hidden bg-slate-950 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(239,68,68,.08),transparent_45%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        {/* Карточки */}
        {cards.length > 0 && (
          <div className="grid gap-8 lg:grid-cols-3">
            {cards.map((item) => (
              <div
                key={item.title}
                className="group rounded-[32px] border border-white/10 bg-slate-900/70 p-8 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-red-500/40"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600">
                  <CheckCircle2 className="h-7 w-7 text-white" />
                </div>

                <h3 className="mt-8 text-2xl font-black text-white">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {/* SEO-текст */}
        {data.seoContent && (
          <div className="mt-16 rounded-[32px] border border-white/10 bg-slate-900/70 p-10 shadow-2xl backdrop-blur-xl">
            <h2 className="text-3xl font-black text-white">
              {data.seoContent.title}
            </h2>

            {paragraphs.map((paragraph, index) => (
              <p key={index} className="mt-6 text-lg leading-9 text-slate-300">
                {paragraph}
              </p>
            ))}

            {data.seoContent.link && (
              <div className="mt-10">
                <Link
                  to={data.seoContent.link.url}
                  className="inline-flex items-center gap-3 rounded-full bg-red-600 px-7 py-4 font-semibold text-white transition hover:bg-red-700"
                >
                  {data.seoContent.link.text}

                  <ArrowRight size={18} />
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
