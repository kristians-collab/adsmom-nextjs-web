'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';

export function Pricing() {
  const plans = [
    {
      name: 'Freemium',
      price: '€0',
      period: 'forever',
      description: 'Perfect for getting started with ad intelligence',
      features: [
        'Access to basic ad library',
        'Up to 50 ad searches per month',
        'Basic competitor tracking',
        'Community support',
      ],
      cta: 'Start Free',
      popular: false,
    },
    {
      name: 'Professional',
      price: '€99',
      period: 'month',
      description: 'For marketers and agencies who need deeper insights',
      features: [
        'Unlimited ad searches',
        'Advanced filtering & analytics',
        'Competitor strategy reports',
        'Weekly insights reports',
        'Email support',
        'Export capabilities',
      ],
      cta: 'Start 14-day Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'For large teams and organizations',
      features: [
        'Everything in Professional',
        'Custom integrations',
        'Dedicated account manager',
        'Priority support',
        'Custom reporting',
        'Team collaboration tools',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-6 tracking-tight">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
            Choose the plan that fits your needs. All plans include our core ad intelligence features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative ${
                plan.popular 
                  ? 'border-2 border-adsmom-primary bg-black text-white' 
                  : 'border border-gray-200 bg-white'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-adsmom-primary text-white px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-6">
                <CardTitle className={`text-2xl font-light ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </CardTitle>
                <div className="mt-4">
                  <span className={`text-4xl font-light ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                  {plan.period !== 'pricing' && (
                    <span className={`text-sm ${plan.popular ? 'text-gray-300' : 'text-gray-600'}`}>
                      /{plan.period}
                    </span>
                  )}
                </div>
                <p className={`text-sm mt-4 ${plan.popular ? 'text-gray-300' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className={`w-4 h-4 mt-0.5 ${plan.popular ? 'text-adsmom-primary' : 'text-adsmom-primary'}`} />
                      <span className={`text-sm ${plan.popular ? 'text-gray-200' : 'text-gray-700'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-adsmom-primary hover:bg-green-600 text-white' 
                      : 'bg-black hover:bg-gray-800 text-white'
                  }`}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-sm">
            All plans include 24/7 access to our ad intelligence platform. 
            <br />
            Need something different? <a href="#" className="text-adsmom-primary hover:underline">Contact us</a> for custom solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
