
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import SectorCard from '@/components/SectorCard';
import Navigation from '@/components/Navigation';
import coffeeImage from '@/assets/coffee-sector.jpg';
import techImage from '@/assets/tech-sector.jpg';
import tourismImage from '@/assets/tourism-sector.jpg';
import realEstateImage from '@/assets/realestate-sector.jpg';

const Index = () => {
  const sectors = [
    {
      title: 'Coffee Sector',
      description: 'Premium highland Arabica coffee from the mountains of Northern Mindanao',
      image: coffeeImage,
      path: '/coffee',
      gradient: 'from-coffee/80 to-coffee-light/80',
      stats: [
        { value: '₱2.8B', label: 'Annual Production' },
        { value: '25K', label: 'Coffee Farmers' }
      ]
    },
    {
      title: 'Technology',
      description: 'Digital innovation and IT services driving Bukidnon\'s modernization',
      image: techImage,
      path: '/tech',
      gradient: 'from-tech/80 to-tech-light/80',
      stats: [
        { value: '120+', label: 'Tech Companies' },
        { value: '3.2K', label: 'IT Professionals' }
      ]
    },
    {
      title: 'Tourism',
      description: 'Natural wonders and rich indigenous culture in the heart of Mindanao',
      image: tourismImage,
      path: '/tourism',
      gradient: 'from-tourism/80 to-tourism-light/80',
      stats: [
        { value: '615K', label: 'Annual Visitors' },
        { value: '₱8.2B', label: 'Tourism Revenue' }
      ]
    },
    {
      title: 'Real Estate',
      description: 'Strategic development opportunities in Northern Mindanao\'s growing cities',
      image: realEstateImage,
      path: '/real-estate',
      gradient: 'from-realestate/80 to-realestate-light/80',
      stats: [
        { value: '₱28B', label: 'Market Value' },
        { value: '18%', label: 'Growth Rate' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <StatsSection />
      
      <section id="sectors" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Economic Sectors</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore the key sectors driving Bukidnon's economic growth and discover investment opportunities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sectors.map((sector, index) => (
              <SectorCard key={index} {...sector} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
