import { Button } from "@/components/ui/button";
import { MessageCircle, MapPin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 px-6 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <img
                src="/artboard-3kylogo.png"
                alt="Kol Yeshurun"
                className="h-8 w-auto grayscale opacity-60"
              />
            </div>

            <div className="hidden sm:flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>540 Broadway, Passaic NJ</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail className="w-4 h-4" />
                <span>info@kolyeshurun.com</span>
              </div>
            </div>
          </div>

          <a
            href="https://chat.whatsapp.com/KOb52NiqR9B3cWcGxQDJtO"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Join the WhatsApp group
            </Button>
          </a>
        </div>

        <div className="mt-6 pt-4 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            Kol Yeshurun 2026. All Rights Reserved. A project of{" "}
            <a
              href="https://www.cramdyn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground transition-colors"
            >
              CRAMDYN
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
