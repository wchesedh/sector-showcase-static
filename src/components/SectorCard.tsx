import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SectorCardProps {
  title: string;
  description: string;
  image: string;
  path: string;
  gradient: string;
  stats: {
    value: string;
    label: string;
  }[];
}

const SectorCard = ({ title, description, image, path, gradient, stats }: SectorCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-sector transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${gradient} opacity-60`} />
        <div className="absolute top-4 left-4">
          <h3 className="text-white text-xl font-bold">{title}</h3>
        </div>
      </div>
      
      <CardContent className="p-6">
        <p className="text-muted-foreground mb-4">{description}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <Link to={path}>
          <Button className="w-full group">
            Explore {title}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default SectorCard;