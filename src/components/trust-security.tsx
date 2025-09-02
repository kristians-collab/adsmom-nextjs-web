import { Shield, Clock } from 'lucide-react';

export function TrustSecurity() {
  return (
    <section id="trust-security" className="py-24 bg-white relative" data-testid="section-trust-security">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.015]" 
           style={{
             backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0,0,0) 1px, transparent 0)`,
             backgroundSize: '32px 32px'
           }}>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-xs font-medium mb-6">
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            Trust & Transparency
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Built by founders,
            <br />
            for founders
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We understand the challenges of competitive research. That's why we've built ironclad guarantees to ensure your success.
          </p>
        </div>

        {/* Main Guarantees Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Money Back Guarantee */}
          <div className="bg-gray-50 border border-gray-200 p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              30-Day Money-Back Guarantee
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Don't like it? Just let us know within 30 days and we'll issue a full refund. No questions asked, no hassle.
            </p>
            <div className="bg-white border border-gray-200 p-3">
              <p className="text-sm font-medium text-gray-900">100% Risk-Free</p>
            </div>
          </div>

          {/* Risk-Free Trial */}
          <div className="bg-gray-50 border border-gray-200 p-8 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              14-Day Free Trial
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Test everything before you pay. Full access to all features, no credit card required to start.
            </p>
            <div className="bg-white border border-gray-200 p-3">
              <p className="text-sm font-medium text-gray-900">Start Free Today</p>
            </div>
          </div>
        </div>

        {/* Additional Trust Signals */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Secure & Private</h4>
            <p className="text-sm text-gray-600">Your data is encrypted and never shared with third parties</p>
          </div>

          <div className="text-center p-6">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Lightning Fast</h4>
            <p className="text-sm text-gray-600">Get insights in seconds, not hours of manual research</p>
          </div>

          <div className="text-center p-6">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">24/7 Support</h4>
            <p className="text-sm text-gray-600">Get help whenever you need it from our expert team</p>
          </div>
        </div>
      </div>
    </section>
  );
}
