export default function TrustedByTeams() {
  const reviews = [
    {
      name: "TechChill 2025 Winner",
      text: "Selected from hundreds of startups for revolutionary ad intelligence platform",
      company: "Fifty Founders Battle"
    },
    {
      name: "Oleksandr",
      text: "We spend heavily on Meta ads with a team of 9 specialists creating hundreds of creatives monthly. Adsmom makes our creative and performance teams far more efficient",
      company: "CEO, Pleso Therapy"
    },
    {
      name: "Head of Paid Social",
      text: "You spend 5 hours making screenshots of ads libraries for competitive analysis, present it to the client, and they say it looks great, let's do that regularly. We can't afford to spend 5 hours on this for each client.",
      company: "PHD Media"
    }
  ];

  return (
    <section className="py-20 bg-black text-white relative overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light mb-4 tracking-wide">Trusted by Marketing Teams Worldwide</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Join hundreds of agencies and brands who save hours weekly with competitive ad intelligence
          </p>
        </div>

        {/* Enhanced Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="group relative"
              data-testid={`review-${index}`}
            >
              {/* Quote accent */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-white text-black flex items-center justify-center text-lg font-bold z-10">
                "
              </div>
              
              {/* Card */}
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-950 p-8 border border-gray-800 hover:border-gray-600 transition-all duration-500 shadow-2xl group-hover:shadow-3xl group-hover:transform group-hover:-translate-y-1">
                {/* Subtle corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/5 to-transparent"></div>
                
                <div className="relative z-10">
                  <div className="mb-6">
                    <p className="text-gray-200 leading-relaxed font-light text-base">
                      {review.text}
                    </p>
                  </div>
                  
                  <div className="border-t border-gray-700 pt-6">
                    <div className="font-semibold text-white text-base">{review.name}</div>
                    <div className="text-sm text-gray-400 mt-1 font-medium tracking-wide">{review.company}</div>
                  </div>
                </div>
                
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-white/40 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
