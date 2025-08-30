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
      description: 'Premium coffee production and export with sustainable farming practices',
      image: coffeeImage,
      path: '/coffee',
      gradient: 'from-coffee/80 to-coffee-light/80',
      stats: [
        { value: '$850M', label: 'Export Revenue' },
        { value: '125K', label: 'Farmers' }
      ]
    },
    {
      title: 'Technology',
      description: 'Digital innovation driving economic transformation across industries',
      image: techImage,
      path: '/tech',
      gradient: 'from-tech/80 to-tech-light/80',
      stats: [
        { value: '340+', label: 'Companies' },
        { value: '22K', label: 'Tech Workers' }
      ]
    },
    {
      title: 'Tourism',
      description: 'Rich cultural heritage and natural attractions drawing global visitors',
      image: tourismImage,
      path: '/tourism',
      gradient: 'from-tourism/80 to-tourism-light/80',
      stats: [
        { value: '2.4M', label: 'Annual Visitors' },
        { value: '$580M', label: 'Revenue' }
      ]
    },
    {
      title: 'Real Estate',
      description: 'Modern urban development and infrastructure investment opportunities',
      image: realEstateImage,
      path: '/real-estate',
      gradient: 'from-realestate/80 to-realestate-light/80',
      stats: [
        { value: '$1.2B', label: 'Market Value' },
        { value: '23%', label: 'Growth Rate' }
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
              Explore the key sectors driving our economic growth and discover investment opportunities
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
