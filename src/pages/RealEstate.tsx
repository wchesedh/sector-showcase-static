import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import realEstateImage from '@/assets/realestate-sector.jpg';
import { Building, TrendingUp, Home, MapPin } from 'lucide-react';

const RealEstate = () => {
  const projects = [
    { name: 'Metropolitan Business District', type: 'Commercial', units: '450 units', investment: '$180M' },
    { name: 'Green Valley Residences', type: 'Residential', units: '1,200 units', investment: '$95M' },
    { name: 'Innovation Tech Park', type: 'Mixed Use', units: '300 units', investment: '$220M' },
    { name: 'Waterfront Luxury Complex', type: 'Luxury', units: '80 units', investment: '$65M' },
  ];

  const highlights = [
    '23% property value growth (YoY)',
    'Green building certification program',
    'Smart city infrastructure integration',
    'Foreign investment incentives'
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
            <h1 className="text-5xl font-bold mb-4">Real Estate Sector</h1>
            <p className="text-xl text-realestate-foreground/90 max-w-2xl">
              Modern developments and sustainable urban growth opportunities
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
              <div className="text-3xl font-bold">$1.2B</div>
              <div className="text-sm">Market Value</div>
            </div>
            <div className="text-center text-realestate-foreground">
              <Home className="h-8 w-8 mx-auto mb-3" />
              <div className="text-3xl font-bold">45K</div>
              <div className="text-sm">Properties</div>
            </div>
            <div className="text-center text-realestate-foreground">
              <TrendingUp className="h-8 w-8 mx-auto mb-3" />
              <div className="text-3xl font-bold">23%</div>
              <div className="text-sm">Growth Rate</div>
            </div>
            <div className="text-center text-realestate-foreground">
              <MapPin className="h-8 w-8 mx-auto mb-3" />
              <div className="text-3xl font-bold">12</div>
              <div className="text-sm">Development Zones</div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Major Projects */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Major Projects</h2>
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
                  Explore commercial and residential development opportunities with government support.
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