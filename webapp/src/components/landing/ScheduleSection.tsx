import { Button } from "@/components/ui/button";

const scheduleItems = [
  { name: "6 am Chaburah", time: "6:00 am" },
  { name: "Shachris 1", time: "6:55 / 7:00 am" },
  { name: "Shachris 2", time: "8:15 am" },
  { name: "Maariv", time: "9:55 pm" },
];

export function ScheduleSection() {
  return (
    <section className="py-12 md:py-16 px-6 bg-muted">
      <div className="max-w-6xl mx-auto">
        {/* Schedule Card */}
        <div className="bg-card rounded-2xl p-6 md:p-8 shadow-sm mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="space-y-4">
                {scheduleItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-3 border-b border-border last:border-b-0"
                  >
                    <span className="text-foreground font-medium">{item.name}</span>
                    <span className="text-muted-foreground">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
                Daily Schedule
              </h2>
              <Button
                asChild
                variant="outline"
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-medium"
              >
                <a href="https://ky-cal.replit.app/" target="_blank" rel="noopener noreferrer">
                  Monthly Calendar
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Podcast Card - nested inside the muted section */}
        <div className="bg-primary rounded-2xl p-6 md:p-8 text-primary-foreground">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="relative flex-shrink-0">
              <div className="rounded-xl overflow-hidden aspect-square w-[220px] md:w-[250px]">
                <img
                  src="/21podcast-2024.jpeg"
                  alt="From Our Rov - R' Aharon Cohen Shlita"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:pl-2">
              <h3 className="text-2xl md:text-3xl font-serif mb-4">
                Listen to past shiurim on the
                <br />
                Kol Yeshurun podcast
              </h3>

              <p className="text-xs uppercase tracking-wider mb-3 opacity-70">Select a platform</p>

              <div className="flex items-center gap-4">
                <a
                  href="https://podcasts.apple.com/us/podcast/from-our-rov/id1504157978"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-200 hover:brightness-0 hover:invert-0 hover:[filter:invert(78%)_sepia(60%)_saturate(600%)_hue-rotate(360deg)_brightness(95%)]"
                  aria-label="Apple Podcasts"
                >
                  <img
                    src="/artboard-4listen3.png"
                    alt="Apple Podcasts"
                    className="h-9 invert"
                  />
                </a>
                <a
                  href="https://24six.app/preview/podcast/collection/12769/from-our-rov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-200 hover:brightness-0 hover:invert-0 hover:[filter:invert(78%)_sepia(60%)_saturate(600%)_hue-rotate(360deg)_brightness(95%)]"
                  aria-label="24Six"
                >
                  <img
                    src="/artboard-4-copylisten3.png"
                    alt="24Six"
                    className="h-9 invert"
                  />
                </a>
                <a
                  href="https://open.spotify.com/show/5nJFkEaNStMy1bNqDLPPiS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-200 hover:brightness-0 hover:invert-0 hover:[filter:invert(78%)_sepia(60%)_saturate(600%)_hue-rotate(360deg)_brightness(95%)]"
                  aria-label="Spotify"
                >
                  <img
                    src="/artboard-4-copy-2listen3.png"
                    alt="Spotify"
                    className="h-9 invert"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
