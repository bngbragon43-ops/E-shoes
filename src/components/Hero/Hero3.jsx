import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";

import img1 from "../../assets/yalamber-limbu-8VZvbvHSwY8-unsplash.jpg";
import img2 from "../../assets/7.jpg";
import img3 from "../../assets/11.jpg";
import img4 from "../../assets/6.jpg";

const SLIDES = [
  {
    image: img1,
   
    title: "Vos shoes sont la",
    subtitle: "Basket pres a porter",
    cta: "Profiter de l'offre",
  },
  {
    image: img2,
  
    title: "Vos shoes sont la",
    subtitle: "Basket pres a porter",
    cta: "Profiter de l'offre",
  },
  {
    image: img3,
   
    title: "Vos shoes sont la",
    subtitle: "Basket pres a porter",
    cta: "Profiter de l'offre",
  },
  {
    image: img4,
  
    title: "Vos shoes sont la",
    subtitle: "Basket pres a porter",
    cta: "Profiter de l'offre",
  },
];

const Hero3 = () => {
  const [index, setIndex] = useState(0);

  const suivant = () => setIndex((i) => (i + 1) % SLIDES.length);
  const precedent = () =>
    setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length);

  useEffect(() => {
    const timer = setInterval(suivant, 5000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <section className=" mx-auto px-4 mt-4">
      <div className="relative h-[280px] md:h-[400px] lg:h-[540px] rounded-2xl overflow-hidden group shadow-xl">
        {SLIDES.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-accent/50 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-14">
             
              <h1 className="text-3xl md:text-5xl font-bold font-averia text-white max-w-xl leading-tight">
                {slide.title}
              </h1>
              <p className="mt-3 text-sm md:text-lg text-white/85 max-w-md">
                {slide.subtitle}
              </p>
              <button className="group inline-flex items-center gap-2.5 bg-white hover:bg-secondary text-primary hover:text-white font-semibold py-3 px-6 mt-6 rounded-full transition-all duration-300 cursor-pointer">
                {slide.cta}
                <IoArrowForward className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        ))}

        {/* Flèches */}
        <button
          onClick={precedent}
          aria-label="Diapositive précédente"
          className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 bg-white/80 hover:bg-white text-secondary rounded-full shadow-md transition-colors cursor-pointer"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={suivant}
          aria-label="Diapositive suivante"
          className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 bg-white/80 hover:bg-white text-secondary rounded-full shadow-md transition-colors cursor-pointer"
        >
          <FaArrowRight />
        </button>

        {/* Points */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Aller à la diapositive ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                i === index
                  ? "w-8 bg-white"
                  : "w-2.5 bg-white/60 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero3;
