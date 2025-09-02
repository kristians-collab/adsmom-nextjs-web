import { BarChart3, Filter, PieChart } from 'lucide-react';
import Image from 'next/image';

export function ProblemSolution() {
  return (
    <section id="features" className="pt-24 pb-8 bg-white" data-testid="section-problem-solution">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            The problem isn't lack of ads.
            <br />
            It's lack of clarity.
          </h2>
        </div>

        {/* Split-screen Visual Contrast */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8 h-[600px]">
            {/* Before Adsmom - Left Side */}
            <div>
              <h3 className="text-2xl font-medium text-gray-900 mb-2">Before...</h3>
              <p className="text-gray-600 text-sm mb-6">Endless scrolling, wasted hours, limited insights.</p>
              <div className="relative bg-gray-50 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 h-[600px] border border-gray-200">
                {/* Ad library chaos background */}
                <div className="absolute inset-0">
                  <Image
                    src="/assets/Before-1_1756726607058.png"
                    alt="Overwhelming ad library interface"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* With Adsmom - Right Side */}
            <div>
              <h3 className="text-2xl font-medium text-gray-900 mb-2">With Adsmom</h3>
              <p className="text-gray-600 text-sm mb-6">Instant clarity from millions of ads, structured and analyzed daily.</p>
              <div className="relative bg-black overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 h-[600px] border border-gray-800">
                {/* Clean dashboard visualization */}
                <div className="absolute inset-0 p-6 pt-6">
                  {/* Dashboard header */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <div className="text-white text-sm font-medium">Live Data Processing</div>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-gray-800 p-3 border border-gray-700">
                        <div className="text-white text-lg font-light">2.1M</div>
                        <div className="text-gray-400 text-xs">Ads analyzed</div>
                      </div>
                      <div className="bg-gray-800 p-3 border border-gray-700">
                        <div className="text-white text-lg font-light">847</div>
                        <div className="text-gray-400 text-xs">Insights found</div>
                      </div>
                      <div className="bg-gray-800 p-3 border border-gray-700">
                        <div className="text-white text-lg font-light">4.2s</div>
                        <div className="text-gray-400 text-xs">Processing time</div>
                      </div>
                    </div>
                  </div>

                  {/* Structured data flow */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Filter className="w-4 h-4 text-gray-400" />
                      <div className="flex-1 bg-gray-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-white h-full w-3/4 animate-pulse"></div>
                      </div>
                      <span className="text-gray-400 text-xs">Filtering</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <BarChart3 className="w-4 h-4 text-gray-400" />
                      <div className="flex-1 bg-gray-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-white h-full w-5/6 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                      <span className="text-gray-400 text-xs">Analyzing</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <PieChart className="w-4 h-4 text-gray-400" />
                      <div className="flex-1 bg-gray-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-white h-full w-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                      <span className="text-gray-400 text-xs">Structuring</span>
                    </div>
                  </div>

                  {/* Results preview with insights */}
                  <div className="mt-6 space-y-4">
                    {/* Performance Analysis */}
                    <div className="bg-gray-800 border border-gray-700 p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-medium">high</div>
                        <span className="text-gray-400 text-xs">strategic</span>
                        <div className="ml-auto flex items-center gap-1">
                          <span className="text-white text-xs">Strategic</span>
                          <div className="w-12 h-1 bg-green-500 rounded-full"></div>
                          <span className="text-white text-xs font-medium">95%</span>
                        </div>
                      </div>
                      <p className="text-white text-xs leading-relaxed mb-2">
                        Monitor competitor's large-scale campaigns to anticipate broad promotional periods.
                      </p>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        Analysis reveals core scaling strategy and priority markets through dynamic ad titles and creative patterns.
                      </p>
                    </div>

                    {/* Key Strengths */}
                    <div className="bg-gray-800 border border-gray-700 p-4">
                      <div className="mb-3">
                        <h4 className="text-blue-400 text-sm font-medium mb-2">Key Strengths</h4>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs">Hyper-localized Targeting</span>
                          <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs">Effective Demographics</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-blue-400 text-sm font-medium mb-2">Competitive Advantage</h4>
                        <p className="text-gray-300 text-xs leading-relaxed">
                          Ability to pivot from broad campaigns to highly effective, culturally resonant local campaigns.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
