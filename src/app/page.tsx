import Header from '@/components/header';
import Hero from '@/components/hero';
import TrustedByTeams from '@/components/trusted-by-teams';
import { ValuePropositions } from '@/components/value-propositions';
import { ProblemSolution } from '@/components/problem-solution';
import HowAdsmomWorks from '@/components/how-adsmom-works';
import { WeeklyInsights } from '@/components/weekly-insights';
import { CompetitorStrategy } from '@/components/competitor-strategy';
import { Pricing } from '@/components/pricing';
import { TrustSecurity } from '@/components/trust-security';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        <Hero />
        <TrustedByTeams />
        <ValuePropositions />
        <ProblemSolution />
        
        {/* Section Divider */}
        <div className="bg-gray-50 py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-t border-gray-200"></div>
          </div>
        </div>
        
        <HowAdsmomWorks />
        <WeeklyInsights />
        <CompetitorStrategy />
        <Pricing />
        <TrustSecurity />
      </main>
      <Footer />
    </div>
  );
}