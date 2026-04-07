import worldMapBg from "@/assets/world-map-bg.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <img
        src={worldMapBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        width={1920}
        height={1080}
      />
      <div className="relative z-10 text-center px-6">
        <p className="font-sans text-sm editorial-spacing uppercase tracking-widest text-muted-foreground mb-6 animate-fade-in-up">
          AI &amp; Cloud Architecture
        </p>
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-foreground leading-none mb-4 animate-fade-in-up animate-delay-100">
          Mercedes D.
        </h1>
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-foreground leading-none mb-8 animate-fade-in-up animate-delay-200">
          Edwards
        </h1>
        <p className="font-sans text-lg sm:text-xl editorial-spacing uppercase text-muted-foreground animate-fade-in-up animate-delay-300">
          AI &amp; Cloud Architect
        </p>
        <div className="mt-12 animate-fade-in-up animate-delay-400">
          <a
            href="#about"
            className="inline-block border border-foreground px-8 py-3 font-sans text-sm editorial-spacing uppercase text-foreground hover:bg-foreground hover:text-primary-foreground transition-colors duration-300"
          >
            Explore Portfolio
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-foreground opacity-30" />
      </div>
    </section>
  );
};

export default Hero;
