import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="bg-primary text-primary-foreground py-4 px-6 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="/artboard-3kylogo.png"
            alt="Kol Yeshurun"
            className="h-8 invert brightness-0 filter"
          />
        </div>

        <nav className="flex items-center gap-6">
          <a
            href="https://open.spotify.com/show/5nJFkEaNStMy1bNqDLPPiS"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:opacity-80 transition-opacity hidden sm:inline"
          >
            Shiurim
          </a>
          <a
            href="https://ky-cal.replit.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:opacity-80 transition-opacity hidden sm:inline"
          >
            Zmanim
          </a>
          <Button
            asChild
            variant="outline"
            size="sm"
            className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            <a href="http://tinyurl.com/KolYeshurun" target="_blank" rel="noopener noreferrer">
              Donate
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
