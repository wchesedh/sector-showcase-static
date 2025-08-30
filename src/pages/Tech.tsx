import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import techImage from '@/assets/tech-sector.jpg';
import { Zap, Users, Building, Cpu } from 'lucide-react';

const Tech = () => {
  const companies = [
    { name: 'InnovateHub Technologies', type: 'Software Development', employees: '850+', revenue: '$12M' },
    { name: 'DataFlow Solutions', type: 'Analytics & AI', employees: '420+', revenue: '$8.5M' },
    { name: 'CloudSphere Inc.', type: 'Cloud Services', employees: '680+', revenue: '$15M' },
    { name: 'NextGen Robotics', type: 'Hardware & IoT', employees: '290+', revenue: '$6.2M' },
  ];

  const initiatives = [
    'National AI Strategy 2025',
    'Digital Innovation Hubs',
    'Startup Incubation Program',
    'Tech Talent Development'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-96">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${techImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-tech opacity-80" />
        <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Technology Sector</h1>
            <p className="text-xl text-tech-foreground/90 max-w-2xl">
              Driving digital transformation and innovation across all industries
            </p>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-12 bg-gradient-tech">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center text-tech-foreground">
              <Zap className="h-8 w-8 mx-auto mb-3" />
              <div className="text-3xl font-bold">340+</div>
              <div className="text-sm">Tech Companies</div>
            </div>
            <div className="text-center text-tech-foreground">
              <Users className="h-8 w-8 mx-auto mb-3" />
              <div className="text-3xl font-bold">22K</div>
              <div className="text-sm">Tech Workers</div>
            </div>
            <div className="text-center text-tech-foreground">
              <Building className="h-8 w-8 mx-auto mb-3" />
              <div className="text-3xl font-bold">8</div>
              <div className="text-sm">Innovation Hubs</div>
            </div>
            <div className="text-center text-tech-foreground">
              <Cpu className="h-8 w-8 mx-auto mb-3" />
              <div className="text-3xl font-bold">95%</div>
              <div className="text-sm">Digital Adoption</div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Leading Companies */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Leading Companies</h2>
            <div className="space-y-4">
              {companies.map((company, index) => (
                <Card key={index} className="hover:shadow-card transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold">{company.name}</h3>
                      <span className="text-sm bg-tech/10 text-tech px-2 py-1 rounded-full">
                        {company.type}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-muted-foreground text-sm">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <span>{company.employees} employees</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Zap className="h-4 w-4" />
                        <span>{company.revenue} revenue</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Government Initiatives */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Government Initiatives</h2>
            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-tech">Key Programs</h3>
                <ul className="space-y-3">
                  {initiatives.map((initiative, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Cpu className="h-5 w-5 text-tech mt-0.5" />
                      <span>{initiative}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Investment Incentives</h3>
                <p className="text-muted-foreground mb-4">
                  Tax breaks for R&D, startup grants, and infrastructure support for tech companies.
                </p>
                <Button variant="tech">
                  Apply for Incentives
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;