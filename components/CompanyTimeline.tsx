const timelineEvents = [
  {
    year: '2015',
    title: 'Company Foundation',
    description: 'Ideall Solutions was established in Singapore with a focus on premium interior procurement.'
  },
  {
    year: '2017',
    title: 'Global Expansion',
    description: 'Extended our sourcing network to key Asian and European markets.'
  },
  {
    year: '2019',
    title: 'Quality Certification',
    description: 'Achieved international quality certifications and established our quality assurance protocols.'
  },
  {
    year: '2021',
    title: 'Digital Innovation',
    description: 'Launched our digital platform for streamlined procurement processes.'
  },
  {
    year: '2024',
    title: 'Industry Leadership',
    description: 'Recognized as a leading procurement partner with 50+ global partnerships.'
  }
];

export default function CompanyTimeline() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-16">
          Expanding Our Capabilities
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-1 bg-gradient-to-b from-primary to-secondary hidden lg:block"></div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <div className="text-2xl font-bold text-secondary mb-2">{event.year}</div>
                    <h3 className="text-xl font-bold text-primary mb-3">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="hidden lg:flex w-2/12 justify-center">
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                </div>
                
                <div className="hidden lg:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}