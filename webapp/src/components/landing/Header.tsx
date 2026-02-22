import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="bg-primary text-primary-foreground py-4 px-6 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Brandmark only on mobile */}
          <img
            src="/ky-brandmark.png"
            alt="Kol Yeshurun"
            className="h-8 invert brightness-0 filter sm:hidden"
          />
          {/* Full logo on desktop */}
          <img
            src="/artboard-3kylogo.png"
            alt="Kol Yeshurun"
            className="h-8 invert brightness-0 filter hidden sm:block"
          />
        </div>

        <nav className="flex items-center gap-3 sm:gap-6">
          <a
            href="https://open.spotify.com/show/5nJFkEaNStMy1bNqDLPPiS"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm hover:opacity-80 transition-opacity"
          >
            Shiurim
          </a>
          <a
            href="https://ky-cal.replit.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm hover:opacity-80 transition-opacity"
          >
            Zmanim
          </a>
          <Button
            asChild
            variant="outline"
            size="sm"
            className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            <a href="https://kydonate.replit.app/" target="_blank" rel="noopener noreferrer">
              Donate
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
