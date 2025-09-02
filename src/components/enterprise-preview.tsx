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
                {activePopup === 'tracking' && '24/7 Real-time Ad Monitoring'}
                {activePopup === 'insights' && '100% Complete Ad Coverage'}
              </h3>
              <div className="text-sm text-gray-600 leading-relaxed space-y-4">
                {activePopup === 'brands' && (
                  <div>
                    <p className="mb-6">We monitor over 10,000 active brands across all major industries, tracking their advertising strategies and performance in real-time.</p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
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
                      <div className="flex items-center justify-between p-3 bg-gray-50 border">
                        <div className="flex items-center gap-3">
                          <Image src="/assets/BMW_1756712754435.webp" alt="BMW" width={32} height={32} className="object-contain" />
                          <span className="font-medium text-sm">BMW</span>
                        </div>
                        <div className="text-right text-xs">
                          <div className="font-semibold">1,456 ads</div>
                          <div className="text-gray-500">12.8M reach</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 border">
                        <div className="flex items-center gap-3">
                          <Image src="/assets/MCdonalds_1756712970500.jpg" alt="McDonald's" width={32} height={32} className="object-contain" />
                          <span className="font-medium text-sm">McDonald's</span>
                        </div>
                        <div className="text-right text-xs">
                          <div className="font-semibold">892 ads</div>
                          <div className="text-gray-500">67.4M reach</div>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500">And thousands more across Fashion, Tech, Finance, Healthcare, Automotive, and other industries.</p>
                  </div>
                )}
                {activePopup === 'datapoints' && (
                  <div>
                    <p className="mb-4">Every day we process over 1 million data points from active advertisements, extracting comprehensive intelligence:</p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-gray-50 p-4 border rounded">
                        <h4 className="font-semibold text-gray-900 mb-3">Creative & Content</h4>
                        <ul className="space-y-1 text-gray-600">
                          <li>• Ad copies & headlines</li>
                          <li>• Visual creatives & videos</li>
                          <li>• Call-to-action buttons</li>
                          <li>• Landing page URLs</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-4 border rounded">
                        <h4 className="font-semibold text-gray-900 mb-3">Performance Data</h4>
                        <ul className="space-y-1 text-gray-600">
                          <li>• Total reach & impressions</li>
                          <li>• Estimated ad spend</li>
                          <li>• Campaign duration</li>
                          <li>• Engagement metrics</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-4 border rounded">
                        <h4 className="font-semibold text-gray-900 mb-3">Targeting Details</h4>
                        <ul className="space-y-1 text-gray-600">
                          <li>• Age groups (18-24, 25-34, etc.)</li>
                          <li>• Geographic locations</li>
                          <li>• Gender targeting</li>
                          <li>• Interest & behavior data</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-4 border rounded">
                        <h4 className="font-semibold text-gray-900 mb-3">Account Structure</h4>
                        <ul className="space-y-1 text-gray-600">
                          <li>• Payer & beneficiary info</li>
                          <li>• Campaign objectives</li>
                          <li>• Ad set structures</li>
                          <li>• Platform distribution</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
                {activePopup === 'tracking' && (
                  <div>
                    <p className="mb-6">Our monitoring system works 24/7 to detect new ads and changes in real-time:</p>
                    <div className="bg-white p-6 border rounded">
                      <div className="flex items-center justify-center space-x-6">
                        {/* Step 1: Detection */}
                        <div className="flex flex-col items-center text-center">
                          <div className="w-16 h-16 bg-gray-900 border border-gray-800 flex items-center justify-center mb-4 shadow-md rounded">
                            <div className="w-3 h-3 bg-green-400 animate-pulse rounded-full"></div>
                          </div>
                          <div className="text-sm font-semibold text-gray-900">Detection</div>
                          <div className="text-xs text-gray-600 mt-1">New ad spotted</div>
                        </div>
                        
                        {/* Arrow */}
                        <div className="w-8 h-px bg-gray-400 relative">
                          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-400 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
                        </div>
                        
                        {/* Step 2: Processing */}
                        <div className="flex flex-col items-center text-center">
                          <div className="w-16 h-16 bg-black border border-gray-800 flex items-center justify-center mb-4 shadow-md rounded">
                            <div className="w-8 h-4 bg-white flex items-center justify-center text-black text-xs font-bold rounded">AI</div>
                          </div>
                          <div className="text-sm font-semibold text-gray-900">AI Analysis</div>
                          <div className="text-xs text-gray-600 mt-1">Processing</div>
                        </div>
                        
                        {/* Arrow */}
                        <div className="w-8 h-px bg-gray-400 relative">
                          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-400 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
                        </div>
                        
                        {/* Step 3: Delivery */}
                        <div className="flex flex-col items-center text-center">
                          <div className="w-16 h-16 bg-white border border-gray-300 flex items-center justify-center mb-4 shadow-md rounded p-2">
                            <Image src="/assets/ADS MOM logo file (1)_1756450232603.png" alt="Adsmom" width={40} height={40} className="object-contain" />
                          </div>
                          <div className="text-sm font-semibold text-gray-900">Insights</div>
                          <div className="text-xs text-gray-600 mt-1">Delivered</div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 border border-t-0 text-center rounded-b">
                      <div className="text-sm font-semibold text-gray-900 mb-1">Automated monitoring • Real-time processing • Actionable insights</div>
                      <div className="text-xs text-gray-600">Average processing time: 4.2 seconds</div>
                    </div>
                  </div>
                )}
                {activePopup === 'insights' && (
                  <div>
                    <p className="mb-6">We provide 100% complete ad data coverage, ensuring you never miss important competitive intelligence:</p>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="bg-gray-50 p-4 text-center border rounded">
                        <div className="text-2xl font-bold text-gray-900">200M+</div>
                        <div className="text-sm text-gray-600">Total ads tracked</div>
                      </div>
                      <div className="bg-gray-50 p-4 text-center border rounded">
                        <div className="text-2xl font-bold text-gray-900">100%</div>
                        <div className="text-sm text-gray-600">Data completeness</div>
                      </div>
                      <div className="bg-gray-50 p-4 text-center border rounded">
                        <div className="text-2xl font-bold text-gray-900">50+</div>
                        <div className="text-sm text-gray-600">Countries covered</div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-gray-50 border rounded">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">Complete ad account overviews</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-gray-50 border rounded">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">Historical performance data</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-gray-50 border rounded">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">Cross-platform ad tracking</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-gray-50 border rounded">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">Real-time strategy insights</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
