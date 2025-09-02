'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

export function CompetitorStrategy() {
  const [email, setEmail] = useState('');
  const [competitorLink, setCompetitorLink] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !competitorLink) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setEmail('');
      setCompetitorLink('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="bg-black py-24 relative" data-testid="section-competitor-strategy">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{
             backgroundImage: `radial-gradient(circle at 1px 1px, rgb(255,255,255) 1px, transparent 0)`,
             backgroundSize: '32px 32px'
           }}>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-xs font-medium mb-6">
            <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
            FREE COMPETITOR ANALYSIS
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">
            Get your competitor's strategy
            <br />
            analyzed for free
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Send us your competitor's Facebook page and we'll analyze their entire ad strategy. 
            Get a detailed report showing their top-performing ads, targeting strategies, and campaign insights.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Form */}
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-lg p-8 shadow-2xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Get your free analysis
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Your email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-adsmom-primary focus:border-transparent"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="competitor" className="block text-sm font-medium text-gray-700 mb-2">
                    Competitor's Facebook page URL
                  </label>
                  <input
                    type="url"
                    id="competitor"
                    value={competitorLink}
                    onChange={(e) => setCompetitorLink(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-adsmom-primary focus:border-transparent"
                    placeholder="https://facebook.com/competitor"
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-adsmom-primary hover:bg-green-600 text-white py-3 text-base font-medium"
                >
                  {isSubmitting ? 'Submitting...' : 'Get Free Analysis'}
                </Button>
              </form>
              
              <p className="text-xs text-gray-500 mt-4 text-center">
                We'll analyze your competitor and send the report to your email within 24 hours.
              </p>
            </div>
          </div>

          {/* Right side - Benefits */}
          <div className="order-1 lg:order-2">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  What you'll get:
                </h3>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-adsmom-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-2">Complete Ad Library Analysis</h4>
                    <p className="text-gray-300 text-sm">All active and recent ads with performance insights</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-adsmom-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-2">Strategic Intelligence Report</h4>
                    <p className="text-gray-300 text-sm">Campaign objectives, targeting strategies, and audience analysis</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-adsmom-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-2">Actionable Recommendations</h4>
                    <p className="text-gray-300 text-sm">Specific tactics you can implement in your own campaigns</p>
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
