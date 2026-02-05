import {
  Header,
  HeroSection,
  DonationSection,
  ScheduleSection,
  Footer,
} from "@/components/landing";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <DonationSection />
        <ScheduleSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
