import { ArrowRight, PhoneCall } from "lucide-react";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
      <a
        href="#contacts"
        onClick={(e) => {
          e.preventDefault();
          document
            .getElementById("contacts")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
        className="
          inline-flex
          w-full
          sm:w-auto
          items-center
          justify-center
          gap-3
          rounded-2xl
          bg-red-600
          px-8
          py-4
          text-base
          font-semibold
          text-white
          shadow-lg
          shadow-red-600/20
          transition-all
          duration-300
          hover:-translate-y-1
          hover:scale-[1.02]
          hover:bg-red-700
          hover:shadow-red-500/40
        "
      >
        Запись на диагностику
        <ArrowRight
          size={20}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </a>

      <a
        href="tel:+77718721040"
        className="
          inline-flex
          w-full
          sm:w-auto
          items-center
          justify-center
          gap-3
          rounded-2xl
          border
          border-white/15
          bg-white/10
          px-8
          py-4
          text-base
          font-semibold
          text-white
          backdrop-blur-xl
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-white/30
          hover:bg-white/15
        "
      >
        <PhoneCall size={20} />
        Позвонить сейчас
      </a>
    </div>
  );
}
