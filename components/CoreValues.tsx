import { Heart, Users, Lightbulb, Target } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Excellence',
    description: 'Uncompromising commitment to quality in every aspect of our service delivery.'
  },
  {
    icon: Users,
    title: 'Integrity',
    description: 'Building trust through transparent processes and honest business practices.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Continuously evolving our methods to deliver cutting-edge solutions.'
  },
  {
    icon: Target,
    title: 'Partnership',
    description: 'Creating long-term relationships built on mutual success and shared values.'
  }
];

export default function CoreValues() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-secondary to-secondary/80 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}