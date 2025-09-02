'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import EnterprisePreview from './enterprise-preview';

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-white via-gray-50/30 to-white pt-20 pb-16 relative">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0,0,0) 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      ></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tagline */}
        <div className="text-center mb-8">
          <Badge
            variant="secondary"
            className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 text-xs font-medium tracking-wide uppercase"
            data-testid="text-hero-tagline"
          >
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            COMPETITIVE AD INTELLIGENCE PLATFORM
          </Badge>
        </div>

        {/* Main headline */}
        <div className="text-center mb-8">
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-tight tracking-tight"
            data-testid="heading-main"
          >
            Ad insights that turn
            <br />
            into revenue
          </h1>
        </div>

        {/* Description */}
        <div className="text-center mb-12">
          <p
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed"
            data-testid="text-hero-subtitle"
          >
            Beyond ad copy and creatives. Making magic by uniting 200 million
            ads with real performance data.
          </p>
        </div>

        {/* Enterprise Product Preview */}
        <div className="mb-12">
          <EnterprisePreview />
        </div>

        {/* CTA Buttons */}
        <div className="text-center mb-16">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-adsmom-primary hover:bg-green-600 text-white px-8 py-3 text-base font-medium"
            >
              Try Freemium
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-300 text-gray-700 px-8 py-3 text-base font-medium"
            >
              Book a Demo
            </Button>
          </div>
        </div>

        {/* Functionality blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-gray-100">
          {/* Track and discover */}
          <div className="text-left" data-testid="feature-track-discover">
            <div className="w-1 h-1 mb-4 bg-black rounded-full"></div>
            <h3 className="font-medium text-gray-900 mb-3 text-sm">
              Track and discover
            </h3>
            <p className="text-gray-600 text-sm font-light leading-relaxed">
              Monitor competitor ad strategies and discover new opportunities in
              real-time.
            </p>
          </div>

          {/* Analyze performance */}
          <div className="text-left" data-testid="feature-analyze-performance">
            <div className="w-1 h-1 mb-4 bg-black rounded-full"></div>
            <h3 className="font-medium text-gray-900 mb-3 text-sm">
              Analyze performance
            </h3>
            <p className="text-gray-600 text-sm font-light leading-relaxed">
              Deep dive into ad performance metrics and understand what drives
              results.
            </p>
          </div>

          {/* Get insights */}
          <div className="text-left" data-testid="feature-get-insights">
            <div className="w-1 h-1 mb-4 bg-black rounded-full"></div>
            <h3 className="font-medium text-gray-900 mb-3 text-sm">
              Get insights
            </h3>
            <p className="text-gray-600 text-sm font-light leading-relaxed">
              Receive actionable insights powered by machine learning and data
              science.
            </p>
          </div>

          {/* Scale revenue */}
          <div className="text-left" data-testid="feature-scale-revenue">
            <div className="w-1 h-1 mb-4 bg-black rounded-full"></div>
            <h3 className="font-medium text-gray-900 mb-3 text-sm">
              Scale revenue
            </h3>
            <p className="text-gray-600 text-sm font-light leading-relaxed">
              Apply learnings to optimize your campaigns and accelerate growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
