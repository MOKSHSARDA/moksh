
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, ChevronRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com', color: 'hover:text-gray-800 dark:hover:text-gray-200' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/mokshsarda/', color: 'hover:text-blue-600' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com', color: 'hover:text-blue-400' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-5 dark:opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8 scroll-reveal">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                  <span className="block text-foreground">Hello, I'm</span>
                  <span className="block text-primary animate-fade-in-up">Moksh Sarda</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
                  Frontend Developer with 2 years of experience crafting beautiful, responsive, and user-friendly web applications.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="group hover-glow">
                  <Link to="/projects">
                    View My Projects
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="group">
                  <Link to="/contact">
                    Get In Touch
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex space-x-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover-glow ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>

            {/* Profile Image */}
            <div className="relative scroll-reveal">
              <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-primary rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute inset-4 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full"></div>
                <img
                  src="moksh.jpg"
                  alt="Moksh Sarda"
                  className="absolute inset-8 w-full h-full object-cover rounded-full border-4 border-background shadow-2xl"
                />
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                
 <a href="/web developer moksh.pdf" target="_blank" rel="noopener noreferrer" download>
  <Button variant="secondary" size="sm" className="group">
    <Download className="mr-2 h-4 w-4" />
    Resume
  </Button>
</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Quick Overview Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center scroll-reveal">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">2+</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Years Experience</h3>
              <p className="text-muted-foreground">Building modern web applications</p>
            </div>
            
            <div className="text-center scroll-reveal">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">15+</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Projects Completed</h3>
              <p className="text-muted-foreground">From concept to deployment</p>
            </div>
            
            <div className="text-center scroll-reveal">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">∞</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Learning Mindset</h3>
              <p className="text-muted-foreground">Always growing and improving</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
