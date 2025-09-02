'use client';

import React, { useState } from 'react';
import { ChevronRight, BarChart3 } from 'lucide-react';
import Image from 'next/image';

interface ReportData {
  brand: string;
  followers: string;
  week: string;
  newAds: number;
  totalReach: string;
  activityLevel: string;
  strategicFocus: string;
}

export function WeeklyInsights() {
  const [selectedReportIndex] = useState<number>(0);
  
  const allReports: ReportData[] = [
    {
      brand: "Nike",
      followers: "39,568,041",
      week: "Aug 18 - Aug 25",
      newAds: 31,
      totalReach: "36,146,642",
      activityLevel: "High",
      strategicFocus: "Execution of a multi-pronged strategy, simultaneously launching seasonal campaigns while maintaining core product focus..."
    },
    {
      brand: "Nike",
      followers: "39,568,041", 
      week: "Aug 11 - Aug 18",
      newAds: 1,
      totalReach: "19,994,482",
      activityLevel: "High",
      strategicFocus: "The primary focus was the aggressive scaling and reach accumulation for core athletic products..."
    },
    {
      brand: "Nike",
      followers: "39,568,041",
      week: "Aug 4 - Aug 11", 
      newAds: 352,
      totalReach: "36,253,711",
      activityLevel: "High",
      strategicFocus: "The primary focus was a major strategic pivot to a seasonal campaign structure..."
    }
  ];

  const selectedReport = allReports[selectedReportIndex];

  return (
    <section id="weekly-insights" className="py-24 bg-gray-50" data-testid="section-weekly-insights">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-6 tracking-tight">
            Weekly Competitor Intelligence
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
            Get comprehensive weekly reports on your competitors' advertising strategies, 
            delivered straight to your inbox every Monday morning.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Report Preview */}
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
              {/* Report Header */}
              <div className="bg-black text-white p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/assets/image_1756557521190.png"
                      alt="Nike logo"
                      width={32}
                      height={32}
                      className="object-contain bg-white rounded p-1"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{selectedReport.brand}</h3>
                      <p className="text-gray-300 text-sm">{selectedReport.followers} followers</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-300">Week of</div>
                    <div className="font-medium">{selectedReport.week}</div>
                  </div>
                </div>
              </div>

              {/* Report Content */}
              <div className="p-6">
                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-gray-50 rounded">
                    <div className="text-2xl font-light text-gray-900">{selectedReport.newAds}</div>
                    <div className="text-xs text-gray-600">New Ads</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded">
                    <div className="text-2xl font-light text-gray-900">{selectedReport.totalReach}</div>
                    <div className="text-xs text-gray-600">Total Reach</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded">
                    <div className="text-2xl font-light text-gray-900">{selectedReport.activityLevel}</div>
                    <div className="text-xs text-gray-600">Activity Level</div>
                  </div>
                </div>

                {/* Strategic Focus */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <BarChart3 className="w-4 h-4" />
                    Strategic Focus
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {selectedReport.strategicFocus}
                  </p>
                </div>

                {/* Sample Ad Preview */}
                <div className="border-t pt-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Top Performing Ad</h4>
                  <div className="relative bg-gray-100 rounded overflow-hidden">
                    <Image
                      src="/assets/Screenshot 2025-08-31 at 20.47.15_1756662474179.png"
                      alt="Sample ad screenshot"
                      width={400}
                      height={200}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Benefits */}
          <div className="order-1 lg:order-2">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Stay ahead of your competition
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Receive detailed weekly intelligence reports about your competitors' 
                  advertising strategies. Track their campaign changes, creative pivots, 
                  and strategic shifts before they impact your market position.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-adsmom-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Automated Analysis</h4>
                    <p className="text-sm text-gray-600">AI-powered insights delivered every Monday morning</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-adsmom-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Strategic Intelligence</h4>
                    <p className="text-sm text-gray-600">Understand campaign objectives and targeting strategies</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-adsmom-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Actionable Insights</h4>
                    <p className="text-sm text-gray-600">Clear recommendations for your own campaigns</p>
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
