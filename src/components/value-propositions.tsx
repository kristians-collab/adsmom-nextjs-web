export function ValuePropositions() {
  const valueProps = [
    {
      number: "01",
      title: "Find your competitors' winning ads in 2 clicks",
      description: "Access the entire Meta Ads library with AI-powered aggregations and automated insights. No more manual screenshots or limited Meta Ads Library searches."
    },
    {
      number: "02", 
      title: "Get complete ad intelligence in seconds",
      description: "We extract all raw ad data automatically - reach calculations, targeting details, creatives, ad copies, landing pages. Direct insights, not manual work."
    },
    {
      number: "03",
      title: "Weekly competitor strategy reports in your inbox",
      description: "Receive concise, actionable reports every Monday about your competitors' ad focus, changes, and strategy shifts. Stay ahead without constant monitoring."
    },
    {
      number: "04",
      title: "Complete ad account overviews for agency pitches", 
      description: "Expanding into new markets in EU/UK? Preparing for a client pitch? Get entire ad account insights instantly for any brand or industry."
    }
  ];

  return (
    <section className="py-24 bg-white relative" data-testid="section-value-propositions">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {valueProps.map((prop, index) => (
            <div 
              key={index}
              className="group relative p-8 bg-gray-50 border border-gray-200 hover:border-gray-900 transition-all duration-300"
              data-testid={`value-prop-${index}`}
            >
              {/* Number badge */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-black text-white flex items-center justify-center font-bold text-lg">
                {prop.number}
              </div>
              
              {/* Content */}
              <div className="pt-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-tight group-hover:text-black transition-colors">
                  {prop.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {prop.description}
                </p>
              </div>
              
              {/* Visual indicator */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-black/10 to-transparent group-hover:via-black/30 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
