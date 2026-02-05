import { useState, useCallback } from "react";

const images = [
  { src: "/artboard-2hero.jpeg", alt: "Future Kol Yeshurun building" },
  { src: "/whatsapp-image-2025-12-22-at-09.jpeg", alt: "Construction progress - steel framework" },
  { src: "/whatsapp-image-2026-01-06-at-09.jpeg", alt: "Construction progress - roof structure" },
  { src: "/whatsapp-image-2025-12-09-at-10.jpeg", alt: "Construction site with crane" },
  { src: "/basement-lobby.jpeg", alt: "Basement lobby render" },
  { src: "/cam-03-washing-station-1.jpeg", alt: "Washing station render" },
];

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleThumbnailClick = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent, index: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActiveIndex(index);
    }
  }, []);

  // Show all images as thumbnails (limited to 6)
  const thumbnailImages = images.slice(0, 6);

  return (
    <section className="py-8 md:py-16 px-4 md:px-6 bg-primary">
      <div className="max-w-6xl mx-auto">
        {/* Headline - smaller on mobile */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-center mb-8 md:mb-12 text-primary-foreground leading-tight font-sans font-semibold">
          A Makom Where Torah
          <br />
          and Tefillah Thrive
        </h1>

        {/* Mobile: Single static image */}
        <div className="block md:hidden">
          <div className="rounded-xl overflow-hidden h-[280px]">
            <img
              src="/artboard-2hero.jpeg"
              alt="Future Kol Yeshurun building"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Desktop/Tablet: User-controlled gallery */}
        <div className="hidden md:flex gap-4 h-[500px]">
          {/* Primary (active) image - dominant left side */}
          <div
            className="flex-1 rounded-xl overflow-hidden shadow-xl transition-all duration-300"
            aria-label="Active gallery image"
          >
            <img
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              className="w-full h-full object-cover transition-opacity duration-300"
            />
          </div>

          {/* Thumbnail column - vertical stack of square thumbnails */}
          <div className="w-24 flex flex-col gap-2">
            {thumbnailImages.map((image, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={image.src}
                  onClick={() => handleThumbnailClick(index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className={`aspect-square w-full rounded-lg overflow-hidden cursor-pointer transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-secondary ${
                    isActive
                      ? "ring-2 ring-secondary"
                      : "hover:ring-2 hover:ring-secondary/60 hover:scale-105 opacity-70 hover:opacity-100"
                  }`}
                  aria-label={`View ${image.alt}`}
                  aria-current={isActive}
                  tabIndex={0}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
