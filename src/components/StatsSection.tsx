
const StatsSection = () => {
  const stats = [
    { value: '₱45.2B', label: 'Provincial GDP', sublabel: 'Annual output' },
    { value: '280+', label: 'Active Projects', sublabel: 'Across all sectors' },
    { value: '12%', label: 'Economic Growth', sublabel: 'Year over year' },
    { value: '8.5K+', label: 'Jobs Created', sublabel: 'New positions' },
  ];

  return (
    <section className="py-16 bg-gradient-primary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-lg font-medium mb-1">{stat.label}</div>
              <div className="text-sm text-blue-200">{stat.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
