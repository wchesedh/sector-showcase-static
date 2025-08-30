import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import tourismImage from '@/assets/tourism-sector.jpg';
import { Plane, MapPin, Star, Camera } from 'lucide-react';

const Tourism = () => {
  const destinations = [
    { name: 'Paradise Beach Resort', type: 'Beach Destination', visitors: '450K/year', rating: '4.8' },
    { name: 'Mountain Heritage Park', type: 'Eco Tourism', visitors: '280K/year', rating: '4.6' },
    { name: 'Cultural Heritage Center', type: 'Cultural Site', visitors: '320K/year', rating: '4.7' },
    { name: 'Adventure Sports Hub', type: 'Adventure Tourism', visitors: '180K/year', rating: '4.9' },
  ];

  const attractions = [
    'UNESCO World Heritage Sites (3)',
    'National Parks & Reserves (12)',
    'Cultural Festivals Year-round',
    'Adventure Sports Activities'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-96">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${tourismImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-tourism opacity-80" />
        <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Tourism Sector</h1>
            <p className="text-xl text-tourism-foreground/90 max-w-2xl">
              Discover breathtaking destinations and rich cultural experiences
            </p>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-12 bg-gradient-tourism">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center text-tourism-foreground">
              <Plane className="h-8 w-8 mx-auto mb-3" />
              <div className="text-3xl font-bold">2.4M</div>
              <div className="text-sm">Annual Visitors</div>
            </div>
            <div className="text-center text-tourism-foreground">
              <MapPin className="h-8 w-8 mx-auto mb-3" />
              <div className="text-3xl font-bold">150+</div>
              <div className="text-sm">Attractions</div>
            </div>
            <div className="text-center text-tourism-foreground">
              <Star className="h-8 w-8 mx-auto mb-3" />
              <div className="text-3xl font-bold">4.6</div>
              <div className="text-sm">Avg. Rating</div>
            </div>
            <div className="text-center text-tourism-foreground">
              <Camera className="h-8 w-8 mx-auto mb-3" />
              <div className="text-3xl font-bold">$580M</div>
              <div className="text-sm">Tourism Revenue</div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Top Destinations */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Top Destinations</h2>
            <div className="space-y-4">
              {destinations.map((destination, index) => (
                <Card key={index} className="hover:shadow-card transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold">{destination.name}</h3>
                      <span className="text-sm bg-tourism/10 text-tourism px-2 py-1 rounded-full">
                        {destination.type}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-muted-foreground text-sm">
                      <div className="flex items-center gap-2">
                        <Plane className="h-4 w-4" />
                        <span>{destination.visitors}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4" />
                        <span>{destination.rating} rating</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Tourism Highlights */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Tourism Highlights</h2>
            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-tourism">Key Attractions</h3>
                <ul className="space-y-3">
                  {attractions.map((attraction, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Camera className="h-5 w-5 text-tourism mt-0.5" />
                      <span>{attraction}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Tourism Development</h3>
                <p className="text-muted-foreground mb-4">
                  Sustainable tourism initiatives and infrastructure development projects.
                </p>
                <Button variant="tourism">
                  View Development Plans
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tourism;