import Image from 'next/image';

export default function HowAdsmomWorks() {
  return (
    <section className="bg-black py-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-white mb-6 tracking-tight">How Adsmom Works</h2>
          <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto">
            Enterprise-grade ad intelligence through our proven methodology
          </p>
        </div>

        {/* Process Flow with Adsmom as Central Processor */}
        <div className="relative">
          {/* Flow visualization */}
          <div className="flex flex-col lg:flex-row items-center gap-6 mb-16">
            
            {/* Input Steps */}
            <div className="flex flex-col gap-4 lg:w-1/4">
              {/* Step 1 */}
              <div className="text-center lg:text-right bg-white p-4 shadow-sm border border-black">
                <div className="w-10 h-10 bg-black text-white flex items-center justify-center mb-3 text-sm font-bold mx-auto lg:ml-auto lg:mr-0">01</div>
                <h3 className="text-sm font-semibold text-black mb-2">Data Collection</h3>
                <p className="text-xs text-gray-700 leading-relaxed lg:text-right">Find your competitors' winning ads in 2 clicks. We track 200 million active ads across Meta platforms with real-time performance metrics.</p>
              </div>
              
              {/* Step 2 */}
              <div className="text-center lg:text-right bg-white p-4 shadow-sm border border-black">
                <div className="w-10 h-10 bg-black text-white flex items-center justify-center mb-3 text-sm font-bold mx-auto lg:ml-auto lg:mr-0">02</div>
                <h3 className="text-sm font-semibold text-black mb-2">Intelligence Processing</h3>
                <p className="text-xs text-gray-700 leading-relaxed lg:text-right">Our intelligent algorithms structure the ad data for you, to answer any question you have. Our technology tracks ad changes daily, allowing us to do predictive analysis.</p>
              </div>
            </div>

            {/* Central Solar System */}
            <div className="lg:w-1/2 flex flex-col items-center">
              <div className="relative w-80 h-80 flex items-center justify-center">
                
                {/* Central Adsmom Sun */}
                <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-2xl border-2 border-gray-300 z-10">
                  <Image
                    src="/assets/Adsmom (1)_1756473719209.png"
                    alt="Adsmom"
                    width={56}
                    height={56}
                    className="object-contain"
                  />
                </div>

                {/* More Visible Orbital Rings */}
                <div className="absolute inset-0 border-2 border-gray-300 rounded-full opacity-60"></div>
                <div className="absolute inset-6 border border-gray-400 rounded-full opacity-40"></div>
                <div className="absolute inset-12 border border-gray-300 rounded-full opacity-30"></div>

                {/* Fixed Platform Logos positioned in solar system */}
                {/* Facebook - Active */}
                <div className="absolute" 
                     style={{
                       top: '8%', 
                       left: '50%', 
                       transform: 'translateX(-50%)'
                     }}>
                  <div className="flex flex-col items-center animate-pulse" style={{ animationDuration: '3s' }}>
                    <Image
                      src="/assets/Facebook_1756728418546.png"
                      alt="Facebook"
                      width={40}
                      height={40}
                      className="object-contain shadow-lg"
                    />
                  </div>
                </div>

                {/* Instagram - Active */}
                <div className="absolute"
                     style={{
                       top: '50%', 
                       right: '8%', 
                       transform: 'translateY(-50%)'
                     }}>
                  <div className="flex flex-col items-center animate-pulse" style={{ animationDuration: '3s' }}>
                    <Image
                      src="/assets/Instagram_1756728418557.png"
                      alt="Instagram"
                      width={40}
                      height={40}
                      className="object-contain shadow-lg"
                    />
                  </div>
                </div>

                {/* Google - Soon */}
                <div className="absolute"
                     style={{
                       bottom: '8%', 
                       right: '28%'
                     }}>
                  <div className="flex flex-col items-center">
                    <Image
                      src="/assets/Google_1756728418556.png"
                      alt="Google"
                      width={36}
                      height={36}
                      className="object-contain opacity-50 shadow-lg"
                    />
                    <div className="text-xs text-gray-500 font-medium mt-1">Soon</div>
                  </div>
                </div>

                {/* TikTok - Soon */}
                <div className="absolute"
                     style={{
                       bottom: '8%', 
                       left: '28%'
                     }}>
                  <div className="flex flex-col items-center">
                    <Image
                      src="/assets/TikTok_1756728418560.png"
                      alt="TikTok"
                      width={36}
                      height={36}
                      className="object-contain opacity-50 shadow-lg"
                    />
                    <div className="text-xs text-gray-500 font-medium mt-1">Soon</div>
                  </div>
                </div>

                {/* LinkedIn - Soon */}
                <div className="absolute"
                     style={{
                       top: '50%', 
                       left: '8%', 
                       transform: 'translateY(-50%)'
                     }}>
                  <div className="flex flex-col items-center">
                    <Image
                      src="/assets/LinkedIn_1756728418559.png"
                      alt="LinkedIn"
                      width={36}
                      height={36}
                      className="object-contain opacity-50 shadow-lg"
                    />
                    <div className="text-xs text-gray-500 font-medium mt-1">Soon</div>
                  </div>
                </div>

                {/* Flow arrows pointing to center */}
                <div className="hidden lg:block absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-8">
                  <div className="w-6 h-0.5 bg-gray-400"></div>
                  <div className="w-0 h-0 border-l-4 border-l-gray-400 border-t-2 border-b-2 border-t-transparent border-b-transparent absolute right-0 top-1/2 transform -translate-y-1/2"></div>
                </div>
                <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-8">
                  <div className="w-6 h-0.5 bg-gray-400"></div>
                  <div className="w-0 h-0 border-l-4 border-l-gray-400 border-t-2 border-b-2 border-t-transparent border-b-transparent absolute right-0 top-1/2 transform -translate-y-1/2"></div>
                </div>
              </div>
              
              {/* Processing label */}
              <div className="text-center mt-4">
                <div className="text-sm font-medium text-gray-400">Millions of ads processed for you</div>
              </div>
            </div>

            {/* Output Steps */}
            <div className="flex flex-col gap-4 lg:w-1/4">
              {/* Step 3 */}
              <div className="text-center lg:text-left bg-gray-50 p-4 shadow-sm border border-black">
                <div className="w-10 h-10 bg-black text-white flex items-center justify-center mb-3 text-sm font-bold mx-auto lg:mx-0">03</div>
                <h3 className="text-sm font-semibold text-black mb-2">Strategic Analysis</h3>
                <p className="text-xs text-gray-700 leading-relaxed lg:text-left">Machine learning algorithms analyze patterns across complete ad account data. Receive concise, actionable reports about your competitors' ad focus, marketing changes, and strategy shifts.</p>
              </div>
              
              {/* Step 4 */}
              <div className="text-center lg:text-left bg-gray-50 p-4 shadow-sm border border-black">
                <div className="w-10 h-10 bg-black text-white flex items-center justify-center mb-3 text-sm font-bold mx-auto lg:mx-0">04</div>
                <h3 className="text-sm font-semibold text-black mb-2">Strategic Execution</h3>
                <p className="text-xs text-gray-700 leading-relaxed lg:text-left">Transform insights into actionable strategies derived from proven high-performing campaigns. Expanding into new markets in EU/UK? Preparing for a client pitch? Get entire ad account insights instantly.</p>
              </div>
            </div>
          </div>

          {/* Alternative: Simple horizontal flow for smaller screens */}
          <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mobile/Tablet simplified view */}
            <div className="text-center bg-gray-50 rounded-2xl p-6 shadow-sm">
              <div className="w-10 h-10 bg-black text-white flex items-center justify-center mb-3 text-sm font-bold mx-auto">01</div>
              <h3 className="text-sm font-semibold text-gray-900 mb-2">Data Collection</h3>
              <p className="text-xs text-gray-600 leading-relaxed">200M active ads tracked across Meta platforms</p>
            </div>
            
            <div className="text-center bg-gray-50 rounded-2xl p-6 shadow-sm">
              <div className="w-10 h-10 bg-black text-white flex items-center justify-center mb-3 text-sm font-bold mx-auto">02</div>
              <h3 className="text-sm font-semibold text-gray-900 mb-2">Intelligence Processing</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Performance-verified data filtering</p>
            </div>
            
            <div className="text-center bg-gray-50 rounded-2xl p-6 shadow-sm">
              <div className="w-10 h-10 bg-black text-white flex items-center justify-center mb-3 text-sm font-bold mx-auto">03</div>
              <h3 className="text-sm font-semibold text-gray-900 mb-2">Strategic Analysis</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Advanced algorithms identify insights patterns</p>
            </div>
            
            <div className="text-center bg-gray-50 rounded-2xl p-6 shadow-sm">
              <div className="w-10 h-10 bg-black text-white flex items-center justify-center mb-3 text-sm font-bold mx-auto">04</div>
              <h3 className="text-sm font-semibold text-gray-900 mb-2">Strategic Execution</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Actionable strategies with continuous monitoring</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
