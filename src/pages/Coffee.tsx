import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import coffeeImage from '@/assets/coffee-sector.jpg';
import { TrendingUp, Users, MapPin, Award } from 'lucide-react';

const Coffee = () => {
  const companies = [
    { name: 'Premium Coffee Co.', type: 'Exporter', employees: '1,200+', location: 'Central Region' },
    { name: 'Arabica Farms Ltd.', type: 'Producer', employees: '800+', location: 'Highland Valley' },
    { name: 'Coffee Processing Inc.', type: 'Processor', employees: '450+', location: 'Industrial Zone' },
    { name: 'Specialty Roasters', type: 'Roaster', employees: '120+', location: 'Urban District' },
  ];

  const achievements = [
    'World\'s 3rd largest coffee exporter',
    'Organic certification for 60% of farms',
    'Fair Trade certified operations',
    'Sustainable farming practices leader'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-96">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${coffeeImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-coffee opacity-80" />
        <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Coffee Sector</h1>
            <p className="text-xl text-coffee-foreground/90 max-w-2xl">
              Leading global coffee production with sustainable practices and premium quality
            </p>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-12 bg-gradient-coffee">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center text-coffee-foreground">
              <TrendingUp className="h-8 w-8 mx-auto mb-3" />
              <div className="text-3xl font-bold">$850M</div>
              <div className="text-sm">Export Revenue</div>
            </div>
            <div className="text-center text-coffee-foreground">
              <Users className="h-8 w-8 mx-auto mb-3" />
              <div className="text-3xl font-bold">125K</div>
              <div className="text-sm">Farmers</div>
            </div>
            <div className="text-center text-coffee-foreground">
              <MapPin className="h-8 w-8 mx-auto mb-3" />
              <div className="text-3xl font-bold">89</div>
              <div className="text-sm">Cooperatives</div>
            </div>
            <div className="text-center text-coffee-foreground">
              <Award className="h-8 w-8 mx-auto mb-3" />
              <div className="text-3xl font-bold">4.2M</div>
              <div className="text-sm">Hectares</div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Major Companies */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Major Companies</h2>
            <div className="space-y-4">
              {companies.map((company, index) => (
                <Card key={index} className="hover:shadow-card transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold">{company.name}</h3>
                      <span className="text-sm bg-coffee/10 text-coffee px-2 py-1 rounded-full">
                        {company.type}
                      </span>
                    </div>
                    <div className="text-muted-foreground text-sm space-y-1">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <span>{company.employees} employees</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{company.location}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sector Achievements */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Sector Achievements</h2>
            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-coffee">Recognition & Standards</h3>
                <ul className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Award className="h-5 w-5 text-coffee mt-0.5" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Investment Opportunities</h3>
                <p className="text-muted-foreground mb-4">
                  Explore sustainable coffee farming, processing technology, and export infrastructure projects.
                </p>
                <Button className="bg-coffee hover:bg-coffee-light">
                  View Investment Guide
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coffee;