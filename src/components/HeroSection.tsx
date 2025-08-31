import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-government.jpg';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToSectors = () => {
    document.getElementById('sectors')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-75" />
      
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Economic
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
            Development Portal
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
          Discover investment opportunities and sector insights driving our nation's economic growth
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            variant="secondary" 
            className="text-lg px-8 py-4"
          >
            Explore Sectors
          </Button>
          <Button 
            size="lg" 
            variant="default" 
            className="text-lg px-8 py-4"
          >
            Investment Guide
          </Button>
        </div>

        <button 
          onClick={scrollToSectors}
          className="animate-bounce inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-white/30 hover:border-white/60 transition-colors"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;