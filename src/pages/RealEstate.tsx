
import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import realEstateImage from '@/assets/realestate-sector.jpg';
import { Building, TrendingUp, Home, MapPin } from 'lucide-react';

const RealEstate = () => {
  const projects = [
    { name: 'Malaybalay City Center', type: 'Commercial', units: '180 units', investment: '₱2.4B' },
    { name: 'Valencia Highlands', type: 'Residential', units: '450 units', investment: '₱1.8B' },
    { name: 'Don Carlos Business Park', type: 'Mixed Use', units: '120 units', investment: '₱3.2B' },
    { name: 'Manolo Fortich Estates', type: 'Residential', units: '200 units', investment: '₱1.2B' },
  ];

  const highlights = [
    '18% property value growth (YoY)',
    'Green building initiatives',
    'Smart infrastructure development',
    'Housing programs for OFWs'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-96">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${realEstateImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-realestate opacity-80" />
        <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Bukidnon Real Estate</h1>
            <p className="text-xl text-realestate-foreground/90 max-w-2xl">
              Strategic development opportunities in Northern Mindanao's growing economy
            </p>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-12 bg-gradient-realestate">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center text-realestate-foreground">
              <Building className="h-8 w-8 mx-auto mb-3" />
              <div className="text-3xl font-bold">₱28B</div>
              <div className="text-sm">Market Value</div>
            </div>
            <div className="text-center text-realestate-foreground">
              <Home className="h-8 w-8 mx-auto mb-3" />
              <div className="text-3xl font-bold">12K</div>
              <div className="text-sm">Properties</div>
            </div>
            <div className="text-center text-realestate-foreground">
              <TrendingUp className="h-8 w-8 mx-auto mb-3" />
              <div className="text-3xl font-bold">18%</div>
              <div className="text-sm">Growth Rate</div>
            </div>
            <div className="text-center text-realestate-foreground">
              <MapPin className="h-8 w-8 mx-auto mb-3" />
              <div className="text-3xl font-bold">8</div>
              <div className="text-sm">City Centers</div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Major Projects */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Major Development Projects</h2>
            <div className="space-y-4">
              {projects.map((project, index) => (
                <Card key={index} className="hover:shadow-card transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold">{project.name}</h3>
                      <span className="text-sm bg-realestate/10 text-realestate px-2 py-1 rounded-full">
                        {project.type}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-muted-foreground text-sm">
                      <div className="flex items-center gap-2">
                        <Home className="h-4 w-4" />
                        <span>{project.units}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4" />
                        <span>{project.investment}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Market Insights */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Market Insights</h2>
            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-realestate">Market Highlights</h3>
                <ul className="space-y-3">
                  {highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Building className="h-5 w-5 text-realestate mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Investment Opportunities</h3>
                <p className="text-muted-foreground mb-4">
                  Explore residential and commercial development opportunities with provincial government incentives.
                </p>
                <Button variant="realestate">
                  Investment Portfolio
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealEstate;
