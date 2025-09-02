'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function EnterprisePreview() {
  const [activePopup, setActivePopup] = useState<string | null>(null);

  const openPopup = (type: string) => {
    setActivePopup(type);
  };

  const closePopup = () => {
    setActivePopup(null);
  };

  return (
    <div className="relative py-16 px-8">
      {/* Elevated Platform Card */}
      <div className="relative max-w-5xl mx-auto">
        {/* Main Platform Card - Elevated and prominent */}
        <div className="relative z-10">
          <div className="bg-white shadow-[0_20px_80px_rgba(0,0,0,0.12)] border border-gray-200 overflow-hidden transform hover:scale-[1.01] transition-transform duration-300">
            {/* Enhanced top bar */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-700 px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                    <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                    <div className="w-3 h-3 rounded-full" style={{backgroundColor: '#00bf63'}}></div>
                  </div>
                  <div className="text-sm text-white font-medium">app.adsmom.com</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-xs text-gray-300 bg-white/10 px-2 py-1 rounded">Ad Intelligence</div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
            
            {/* Platform image */}
            <div className="relative">
              <Image
                src="/assets/Screenshot 2025-08-28 at 18.37.48_1756395476464.png"
                alt="Adsmom Platform Interface"
                width={800}
                height={500}
                className="w-full h-auto"
                data-testid="platform-screenshot"
              />
            </div>
          </div>
        </div>

        {/* Floating Connected Data Elements */}
        
        {/* Top Left Floating Element - Moved much further out, lower position, with 3D shadows */}
        <div className="absolute top-40 left-0 z-20 transform -translate-x-20">
          <div className="bg-white/90 backdrop-blur-sm shadow-[0_15px_50px_rgba(0,0,0,0.15),0_5px_15px_rgba(0,0,0,0.1)] border border-gray-100/50 p-5 hover:bg-white/95 hover:shadow-[0_25px_70px_rgba(0,0,0,0.2),0_10px_25px_rgba(0,0,0,0.15)] transition-all duration-300 w-48 h-44">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-2 h-2 bg-blue-500"></div>
              <span className="text-xs font-semibold text-gray-700 tracking-wide">ACTIVE BRANDS</span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">10,000</div>
            <p className="text-xs text-gray-600 mb-3">Monitored globally</p>
            <button 
              onClick={() => openPopup('brands')}
              className="w-full bg-gray-900 text-white px-3 py-2 text-xs font-medium hover:bg-gray-800 transition-colors"
            >
              View Details
            </button>
          </div>
        </div>

        {/* Top Right Floating Element - Moved much further out with 3D shadows */}
        <div className="absolute top-16 right-0 z-20 transform translate-x-20">
          <div className="bg-white/90 backdrop-blur-sm shadow-[0_15px_50px_rgba(0,0,0,0.15),0_5px_15px_rgba(0,0,0,0.1)] border border-gray-100/50 p-5 hover:bg-white/95 hover:shadow-[0_25px_70px_rgba(0,0,0,0.2),0_10px_25px_rgba(0,0,0,0.15)] transition-all duration-300 w-48 h-44">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-2 h-2 bg-purple-500"></div>
              <span className="text-xs font-semibold text-gray-700 tracking-wide">DATA POINTS</span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">1M+</div>
            <p className="text-xs text-gray-600 mb-3">Analyzed daily</p>
            <button 
              onClick={() => openPopup('datapoints')}
              className="w-full bg-gray-900 text-white px-3 py-2 text-xs font-medium hover:bg-gray-800 transition-colors"
            >
              View Details
            </button>
          </div>
        </div>

        {/* Bottom Left Floating Element - Moved much further out with 3D shadows */}
        <div className="absolute bottom-8 left-0 z-20 transform -translate-x-20">
          <div className="bg-white/90 backdrop-blur-sm shadow-[0_15px_50px_rgba(0,0,0,0.15),0_5px_15px_rgba(0,0,0,0.1)] border border-gray-100/50 p-5 hover:bg-white/95 hover:shadow-[0_25px_70px_rgba(0,0,0,0.2),0_10px_25px_rgba(0,0,0,0.15)] transition-all duration-300 w-48 h-44">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-2 h-2 bg-yellow-500"></div>
              <span className="text-xs font-semibold text-gray-700 tracking-wide">COVERAGE</span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
            <p className="text-xs text-gray-600 mb-3">Complete ad data</p>
            <button 
              onClick={() => openPopup('insights')}
              className="w-full bg-gray-900 text-white px-3 py-2 text-xs font-medium hover:bg-gray-800 transition-colors"
            >
              View Details
            </button>
          </div>
        </div>

        {/* Bottom Right Floating Element - Moved much further out with 3D shadows */}
        <div className="absolute bottom-8 right-0 z-20 transform translate-x-20">
          <div className="bg-white/90 backdrop-blur-sm shadow-[0_15px_50px_rgba(0,0,0,0.15),0_5px_15px_rgba(0,0,0,0.1)] border border-gray-100/50 p-5 hover:bg-white/95 hover:shadow-[0_25px_70px_rgba(0,0,0,0.2),0_10px_25px_rgba(0,0,0,0.15)] transition-all duration-300 w-48 h-44">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-2 h-2 bg-red-500"></div>
              <span className="text-xs font-semibold text-gray-700 tracking-wide">MONITORING</span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
            <p className="text-xs text-gray-600 mb-3">Real-time detection</p>
            <button 
              onClick={() => openPopup('tracking')}
              className="w-full bg-gray-900 text-white px-3 py-2 text-xs font-medium hover:bg-gray-800 transition-colors"
            >
              View Details
            </button>
          </div>
        </div>

        {/* Center Bottom Floating Element */}
        <div className="absolute bottom-0 left-1/2 z-20 transform -translate-x-1/2 translate-y-4">
          <div className="bg-gradient-to-r from-gray-900 to-gray-700 shadow-[0_15px_50px_rgba(0,0,0,0.25),0_5px_15px_rgba(0,0,0,0.15)] p-5 hover:shadow-[0_25px_70px_rgba(0,0,0,0.35),0_10px_25px_rgba(0,0,0,0.2)] transition-all duration-300">
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-xs text-gray-300 mb-1">AI INSIGHTS</div>
                <div className="text-lg font-bold text-white">ACTIVE</div>
              </div>
              <div className="w-px h-8 bg-gray-500"></div>
              <div>
                <div className="text-xs text-gray-300 mb-2">Weekly Reports</div>
                <button 
                  onClick={() => {
                    const element = document.getElementById('weekly-insights');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="text-xs bg-white text-gray-900 px-4 py-2 hover:bg-gray-100 transition-colors font-medium"
                >
                  View Latest
                </button>
              </div>
            </div>
          </div>
          {/* Connecting line upward */}
          <div className="absolute top-0 left-1/2 w-px h-8 bg-gray-300/60 transform -translate-x-1/2 -translate-y-full"></div>
        </div>
      </div>

      {/* Popup Modal */}
      {activePopup && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={closePopup}
        >
          <div 
            className="bg-white max-w-4xl max-h-[90vh] overflow-auto relative rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                {activePopup === 'brands' && '10k+ Active Brands Being Monitored'}
                {activePopup === 'datapoints' && '1M+ Data Points Analyzed Daily'} 
                {activePopup === 'tracking' && 'Daily Ad Tracking & Change Detection'}
                {activePopup === 'insights' && 'Complete Ad Coverage & Intelligence'}
              </h3>
              <div className="text-sm text-gray-600 leading-relaxed">
                {activePopup === 'brands' && (
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center justify-between p-3 bg-gray-50 border">
                      <div className="flex items-center gap-3">
                        <Image src="/assets/Nike-logo_1756712754436.jpg" alt="Nike" width={32} height={32} className="object-contain" />
                        <span className="font-medium text-sm">Nike</span>
                      </div>
                      <div className="text-right text-xs">
                        <div className="font-semibold">2,847 ads</div>
                        <div className="text-gray-500">45.2M reach</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 border">
                      <div className="flex items-center gap-3">
                        <Image src="/assets/Adidas-logo_1756712754434.jpg" alt="Adidas" width={32} height={32} className="object-contain" />
                        <span className="font-medium text-sm">Adidas</span>
                      </div>
                      <div className="text-right text-xs">
                        <div className="font-semibold">1,923 ads</div>
                        <div className="text-gray-500">38.1M reach</div>
                      </div>
                    </div>
                    {/* Add more brands as needed */}
                  </div>
                )}
                {activePopup === 'datapoints' && (
                  <p>We extract and analyze comprehensive data from every ad, giving you complete competitive intelligence including creative content, performance data, targeting details, and account structure.</p>
                )}
                {activePopup === 'tracking' && (
                  <p>Real-time competitive intelligence workflow that detects new ads, processes them through Meta's library, analyzes them with AI, and delivers actionable insights through Adsmom.</p>
                )}
                {activePopup === 'insights' && (
                  <p>Complete ad account overviews with detailed statistics, recent activity tracking, and comprehensive competitive analysis for strategic decision making.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
