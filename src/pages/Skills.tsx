import React, { useEffect, useState } from 'react';
import { Code, Palette, Database, Settings, Smartphone, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

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

  const skillCategories = [
    {
      id: 'frontend',
      name: 'Frontend',
      icon: Code,
      color: 'text-blue-500',
      skills: [
        { name: 'React.js', level: 95, description: 'Component-based UI development with hooks and context' },
        { name: 'TypeScript', level: 90, description: 'Type-safe JavaScript development' },
        { name: 'JavaScript', level: 95, description: 'ES6+ features, async programming, DOM manipulation' },
        { name: 'HTML5', level: 98, description: 'Semantic markup, accessibility, web standards' },
        { name: 'CSS3', level: 90, description: 'Flexbox, Grid, animations, responsive design' },
        { name: 'Tailwind CSS', level: 95, description: 'Utility-first CSS framework' },
        { name: 'SASS/SCSS', level: 85, description: 'CSS preprocessing, mixins, variables' },
        { name: 'Next.js', level: 80, description: 'React framework for production applications' }
      ]
    },
    {
      id: 'tools',
      name: 'Tools & Workflow',
      icon: Settings,
      color: 'text-green-500',
      skills: [
        { name: 'Git/GitHub', level: 90, description: 'Version control, collaboration, CI/CD' },
        { name: 'VS Code', level: 95, description: 'Code editor with extensions and debugging' },
        { name: 'Webpack', level: 75, description: 'Module bundling and build optimization' },
        { name: 'Vite', level: 85, description: 'Fast build tool and development server' },
        { name: 'NPM/Yarn', level: 90, description: 'Package management and dependency handling' },
        { name: 'ESLint/Prettier', level: 85, description: 'Code linting and formatting' },
        { name: 'Chrome DevTools', level: 90, description: 'Debugging and performance optimization' },
        { name: 'Figma', level: 80, description: 'Design collaboration and handoff' }
      ]
    },
    {
      id: 'design',
      name: 'Design & UX',
      icon: Palette,
      color: 'text-purple-500',
      skills: [
        { name: 'Figma', level: 85, description: 'UI/UX design and prototyping' },
        { name: 'Adobe XD', level: 75, description: 'Design systems and wireframing' },
        { name: 'Responsive Design', level: 95, description: 'Mobile-first, cross-device compatibility' },
        { name: 'UI/UX Principles', level: 80, description: 'User-centered design and accessibility' },
        { name: 'Color Theory', level: 75, description: 'Visual hierarchy and brand consistency' },
        { name: 'Prototyping', level: 80, description: 'Interactive mockups and user flows' }
      ]
    },
    {
      id: 'backend',
      name: 'Backend & APIs',
      icon: Database,
      color: 'text-orange-500',
      skills: [
        { name: 'Node.js', level: 75, description: 'Server-side JavaScript development' },
        { name: 'Express.js', level: 70, description: 'Web application framework' },
        { name: 'REST APIs', level: 85, description: 'API design and integration' },
        { name: 'MongoDB', level: 70, description: 'NoSQL database operations' },
        { name: 'Firebase', level: 80, description: 'Backend-as-a-Service platform' },
        { name: 'GraphQL', level: 60, description: 'Query language for APIs' },
        { name: 'Supabase', level: 75, description: 'Open source Firebase alternative' },
        { name: 'PostgreSQL', level: 65, description: 'Relational database management' }
      ]
    },
    {
      id: 'mobile',
      name: 'Mobile & Performance',
      icon: Smartphone,
      color: 'text-pink-500',
      skills: [
        { name: 'Progressive Web Apps', level: 80, description: 'Offline-capable web applications' },
        { name: 'Web Performance', level: 85, description: 'Optimization techniques and best practices' },
        { name: 'Cross-browser Testing', level: 85, description: 'Compatibility across different browsers' },
        { name: 'Mobile Optimization', level: 90, description: 'Touch interfaces and mobile UX' },
        { name: 'Lighthouse Optimization', level: 80, description: 'Core Web Vitals and performance metrics' },
        { name: 'Service Workers', level: 75, description: 'Offline functionality and caching' },
        { name: 'Responsive Images', level: 85, description: 'Optimized images for different devices' }
      ]
    },
    {
      id: 'soft',
      name: 'Soft Skills',
      icon: Globe,
      color: 'text-cyan-500',
      skills: [
        { name: 'Problem Solving', level: 90, description: 'Analytical thinking and debugging' },
        { name: 'Team Collaboration', level: 85, description: 'Working effectively in teams' },
        { name: 'Project Management', level: 80, description: 'Planning and execution of projects' },
        { name: 'Communication', level: 85, description: 'Clear technical communication' },
        { name: 'Continuous Learning', level: 95, description: 'Staying updated with new technologies' },
        { name: 'Mentoring', level: 75, description: 'Helping junior developers grow' },
        { name: 'Time Management', level: 82, description: 'Efficient task prioritization and delivery' },
        { name: 'Adaptability', level: 88, description: 'Flexibility in changing environments' }
      ]
    }
  ];

  const activeSkills = skillCategories.find(cat => cat.id === activeCategory)?.skills || [];

  console.log('Active category:', activeCategory);
  console.log('Active skills:', activeSkills);

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Skills & Expertise</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills, tools, and expertise in frontend development and related technologies.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="mb-12 scroll-reveal">
          <div className="flex flex-wrap justify-center gap-4">
            {skillCategories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className="flex items-center space-x-2 hover-glow"
              >
                <category.icon size={20} className={activeCategory === category.id ? '' : category.color} />
                <span>{category.name}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Debug: Show active category */}
        <div className="text-center text-sm text-gray-500 mb-4">
          Active Category: <span className="font-mono font-bold">{activeCategory}</span>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {activeSkills.map((skill, index) => (
            <Card key={skill.name} className="group hover:shadow-lg transition-all duration-300 hover-glow">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                  <Badge variant="secondary">{skill.level}%</Badge>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-muted rounded-full h-2 mb-4">
                  <div
                    className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Overall Skills Summary */}
        <section className="scroll-reveal">
          <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center mb-8">Technical Proficiency Overview</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">Frontend</div>
                  <div className="text-sm text-muted-foreground">React, TypeScript, Modern CSS</div>
                  <div className="mt-2">
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full w-[92%]"></div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">Tools</div>
                  <div className="text-sm text-muted-foreground">Git, Build Tools, DevOps</div>
                  <div className="mt-2">
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full w-[87%]"></div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">Design</div>
                  <div className="text-sm text-muted-foreground">UI/UX, Responsive Design</div>
                  <div className="mt-2">
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full w-[83%]"></div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">Backend</div>
                  <div className="text-sm text-muted-foreground">Node.js, APIs, Databases</div>
                  <div className="mt-2">
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full w-[74%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Skills;
