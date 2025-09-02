'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Image
                src="/assets/ADS MOM logo file (1)_1756710655080.png"
                alt="Adsmom"
                width={120}
                height={40}
                className="h-10 w-auto cursor-pointer"
                data-testid="logo-adsmom"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-light text-sm"
              data-testid="nav-features"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-light text-sm"
              data-testid="nav-pricing"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-light text-sm"
              data-testid="nav-team"
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection('blog')}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-light text-sm"
              data-testid="nav-blog"
            >
              Blog
            </button>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="ghost"
              className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 font-light text-sm"
              data-testid="button-signin"
            >
              Sign in
            </Button>
            <Button
              className="bg-black text-white px-6 py-2 rounded-md font-medium hover:bg-gray-900 transition-colors duration-200 text-sm shadow-sm"
              data-testid="button-try-freemium"
            >
              Try Freemium
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  data-testid="button-mobile-menu"
                >
                  <Menu className="h-6 w-6 text-gray-900" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  <button
                    onClick={() => scrollToSection('features')}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-light text-left text-sm"
                    data-testid="nav-mobile-features"
                  >
                    Features
                  </button>
                  <button
                    onClick={() => scrollToSection('pricing')}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-light text-left text-sm"
                    data-testid="nav-mobile-pricing"
                  >
                    Pricing
                  </button>
                  <button
                    onClick={() => scrollToSection('team')}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-light text-left text-sm"
                    data-testid="nav-mobile-team"
                  >
                    Team
                  </button>
                  <button
                    onClick={() => scrollToSection('blog')}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-light text-left text-sm"
                    data-testid="nav-mobile-blog"
                  >
                    Blog
                  </button>
                  <div className="flex flex-col space-y-2 pt-4 border-t border-gray-100">
                    <Button
                      variant="ghost"
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-light justify-start text-sm"
                      data-testid="button-mobile-signin"
                    >
                      Sign in
                    </Button>
                    <Button
                      className="bg-black text-white font-medium hover:bg-gray-900 transition-colors duration-200 text-sm"
                      data-testid="button-mobile-try-freemium"
                    >
                      Try Freemium
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
