const StatsSection = () => {
  const stats = [
    { value: '$2.4B', label: 'Total Investment', sublabel: 'Last 12 months' },
    { value: '450+', label: 'Active Projects', sublabel: 'Across all sectors' },
    { value: '28%', label: 'GDP Growth', sublabel: 'Year over year' },
    { value: '15K+', label: 'Jobs Created', sublabel: 'New positions' },
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