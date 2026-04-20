import worldMapBg from "@/assets/world-map-bg.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <img
        src={worldMapBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        width={1920}
        height={1080}
      />
      <div className="relative z-10 text-center px-6">
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-none mb-10 animate-fade-in-up">
          Mercedes D. Edwards
        </h1>
        <p className="font-serif text-xl sm:text-2xl font-bold editorial-spacing uppercase text-foreground animate-fade-in-up animate-delay-100">
          Solutions Architect — AI Enablement
        </p>
        <div className="mt-12 flex items-center justify-center gap-4 animate-fade-in-up animate-delay-200">
          <a
            href="#about"
            className="inline-block border border-foreground px-8 py-3 font-sans text-sm editorial-spacing uppercase text-foreground hover:bg-foreground hover:text-primary-foreground transition-colors duration-300"
          >
            Explore Portfolio
          </a>
          <a
            href="/resume.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-foreground text-primary-foreground px-8 py-3 font-sans text-sm editorial-spacing uppercase hover:bg-accent transition-colors duration-300"
          >
            View Resume
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
