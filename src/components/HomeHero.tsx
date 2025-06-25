import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

export default function HomeHero() {
  const { t } = useLanguage();
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[80vh] w-full overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      {/* Geometric shapes */}
      <div className="absolute left-[10%] top-[18%] w-24 h-24 border-2 border-blue-400 rounded-lg opacity-10 triangle animate-float" />
      <div className="absolute right-[15%] top-[12%] w-16 h-16 border-2 border-blue-400 rounded-full opacity-10 plus animate-float-delayed" />
      <div className="absolute left-[5%] bottom-[28%] w-20 h-20 border-2 border-blue-400 opacity-10 transform rotate-45 animate-float" />
      <div className="absolute right-[20%] bottom-[18%] w-12 h-12 border-2 border-blue-400 rounded-lg opacity-10 transform rotate-12 animate-float-delayed" />

      <div className="relative flex flex-col md:flex-row items-center justify-center w-full max-w-5xl px-4 gap-10 md:gap-20 py-8 md:py-16">
        <div className="flex flex-col items-center md:items-start z-10 max-w-xl text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Software Developer
          </h1>
          <p className="text-lg md:text-xl font-medium mb-6 text-gray-700">
            Frontend ontwikkelaar met een oog voor{" "}
            <span className="text-blue-600">design</span>
          </p>
          <button className="px-8 py-3 text-base md:text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            {t("viewProjects")}
          </button>
        </div>

        <div className="relative w-56 h-56 md:w-80 md:h-80 flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full opacity-60 blur-2xl animate-pulse"></div>
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
            <img
              src="/profile.svg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}