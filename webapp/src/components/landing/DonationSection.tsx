import { Button } from "@/components/ui/button";
import { Building2, UtensilsCrossed, Users, Heart } from "lucide-react";

const donationOptions = [
  { id: "building", label: "Building Fund", icon: Building2 },
  { id: "kiddush", label: "Sponsor a Kiddush", icon: UtensilsCrossed },
  { id: "membership", label: "Annual Membership", icon: Users },
  { id: "general", label: "General Donation", icon: Heart },
];

export function DonationSection() {
  return (
    <section className="py-12 md:py-16 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-2 leading-tight">
              Donate to our cause
            </h2>
            <p className="text-xl text-muted-foreground mb-8">and help build our future home</p>

            <div className="space-y-2 mb-10">
              {donationOptions.map((option) => (
                <a
                  key={option.id}
                  href="https://kydonate.replit.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-lg md:text-xl text-muted-foreground hover:text-primary hover:translate-x-2 transition-all duration-300 ease-out"
                >
                  <option.icon className="w-5 h-5 text-gray-400" />
                  {option.label}
                </a>
              ))}
            </div>

            <Button
              asChild
              size="lg"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-lg py-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a href="https://kydonate.replit.app/" target="_blank" rel="noopener noreferrer">
                Donate Now
              </a>
            </Button>
          </div>

          <div className="rounded-xl overflow-hidden h-[300px] md:h-[400px] bg-muted">
            <img
              src="/k262--1-.jpeg"
              alt="Community learning"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
