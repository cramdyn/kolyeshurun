import { useState } from "react";

export function PodcastSection() {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const getIconStyle = (iconName: string) => ({
    backgroundColor: hoveredIcon === iconName ? "#e8dd9d" : "rgba(255, 255, 255, 0.1)",
    color: hoveredIcon === iconName ? "#1e3a5f" : "inherit",
  });

  return (
    <section className="py-12 md:py-16 px-6 bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <div className="rounded-xl overflow-hidden aspect-square max-w-[320px]">
              <img
                src="/21podcast-2024.jpeg"
                alt="From Our Rov - R' Aharon Cohen Shlita"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-serif mb-6">
              Listen to past shiurim on the
              <br />
              Kol Yeshurun podcast
            </h2>

            <p className="text-sm uppercase tracking-wider mb-4 opacity-70">Select a platform</p>

            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                style={getIconStyle("apple")}
                onMouseEnter={() => setHoveredIcon("apple")}
                onMouseLeave={() => setHoveredIcon(null)}
                aria-label="Apple Podcasts"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </a>
              <a
                href="#"
                className="px-4 py-2 rounded-full flex items-center gap-2 transition-colors text-sm font-medium"
                style={getIconStyle("24six")}
                onMouseEnter={() => setHoveredIcon("24six")}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                <span>24Six</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                style={getIconStyle("spotify")}
                onMouseEnter={() => setHoveredIcon("spotify")}
                onMouseLeave={() => setHoveredIcon(null)}
                aria-label="Spotify"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
