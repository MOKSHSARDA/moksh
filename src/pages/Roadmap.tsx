
import React, { useEffect } from 'react';
import { CheckCircle, Circle, ArrowRight, Calendar, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Roadmap = () => {
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

  const roadmapItems = [
    {
      id: 1,
      title: 'HTML & CSS Fundamentals',
      description: 'Learned the basics of web development with semantic HTML and responsive CSS',
      period: '2022 Q1',
      status: 'completed',
      technologies: ['HTML5', 'CSS3', 'Flexbox', 'CSS Grid'],
      achievements: ['Built first responsive website', 'Mastered CSS animations', 'Learned accessibility basics']
    },
    {
      id: 2,
      title: 'JavaScript Mastery',
      description: 'Deep dive into JavaScript fundamentals, ES6+ features, and DOM manipulation',
      period: '2022 Q2',
      status: 'completed',
      technologies: ['JavaScript', 'ES6+', 'DOM', 'Async/Await'],
      achievements: ['Built interactive web applications', 'Learned async programming', 'Mastered array methods']
    },
    {
      id: 3,
      title: 'React.js Development',
      description: 'Mastered React fundamentals, hooks, state management, and component architecture',
      period: '2022 Q3-Q4',
      status: 'completed',
      technologies: ['React', 'JSX', 'Hooks', 'Context API'],
      achievements: ['Built multiple React projects', 'Learned component lifecycle', 'Implemented state management']
    },
    {
      id: 4,
      title: 'TypeScript & Advanced React',
      description: 'Enhanced React skills with TypeScript for better code quality and maintainability',
      period: '2023 Q1',
      status: 'completed',
      technologies: ['TypeScript', 'React', 'Type Safety', 'Interfaces'],
      achievements: ['Migrated projects to TypeScript', 'Improved code quality', 'Learned advanced patterns']
    },
    {
      id: 5,
      title: 'Modern CSS Frameworks',
      description: 'Mastered Tailwind CSS and modern styling approaches for rapid development',
      period: '2023 Q2',
      status: 'completed',
      technologies: ['Tailwind CSS', 'CSS-in-JS', 'Styled Components', 'SASS'],
      achievements: ['Adopted utility-first approach', 'Improved development speed', 'Built design systems']
    },
    
    {
      id: 7,
      title: 'Build Tools & DevOps',
      description: 'Mastered modern build tools, CI/CD pipelines, and deployment strategies',
      period: '2023 Q4',
      status: 'completed',
      technologies: ['Webpack', 'Vite', 'GitHub Actions', 'Docker'],
      achievements: ['Set up CI/CD pipelines', 'Optimized build processes', 'Learned containerization']
    },
    {
      id: 8,
      title: 'Advanced Frontend Architecture',
      description: 'Learning advanced patterns, micro-frontends, and scalable application architecture',
      period: '2024 Q1-Q2',
      status: 'in-progress',
      technologies: ['Next.js', 'Micro-frontends', 'Testing', 'Performance'],
      achievements: ['Improving application performance', 'Learning testing strategies', 'Building scalable apps']
    },
    {
      id: 9,
      title: 'Full-Stack Development',
      description: 'Expanding into full-stack development with modern frameworks and databases',
      period: '2024 Q3-Q4',
      status: 'planned',
      technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'Authentication'],
      achievements: []
    },
    {
      id: 10,
      title: 'Cloud & Advanced DevOps',
      description: 'Learning cloud platforms, advanced DevOps practices, and infrastructure as code',
      period: '2025 Q1',
      status: 'planned',
      technologies: ['AWS', 'Terraform', 'Kubernetes', 'Monitoring'],
      achievements: []
    },
    {
      id: 11,
      title: 'Mobile Development',
      description: 'Exploring React Native and PWA development for mobile applications',
      period: '2025 Q2',
      status: 'planned',
      technologies: ['React Native', 'PWA', 'Mobile UX', 'App Store'],
      achievements: []
    },
    {
      id: 12,
      title: 'Tech Leadership & Mentoring',
      description: 'Developing leadership skills and contributing to the developer community',
      period: '2025 Q3+',
      status: 'planned',
      technologies: ['Team Leadership', 'Mentoring', 'Open Source', 'Speaking'],
      achievements: []
    }
  ];

  const completedItems = roadmapItems.filter(item => item.status === 'completed');
  const inProgressItems = roadmapItems.filter(item => item.status === 'in-progress');
  const plannedItems = roadmapItems.filter(item => item.status === 'planned');

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-6 h-6 text-green-500" />;
      case 'in-progress':
        return <Circle className="w-6 h-6 text-blue-500 animate-pulse" />;
      default:
        return <Circle className="w-6 h-6 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'border-green-500 bg-green-50 dark:bg-green-900/20';
      case 'in-progress':
        return 'border-blue-500 bg-blue-50 dark:bg-blue-900/20';
      default:
        return 'border-gray-300 bg-gray-50 dark:bg-gray-800/20';
    }
  };

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Learning Roadmap</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My journey through frontend development technologies and future learning goals
          </p>
        </div>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 scroll-reveal">
          <Card className="text-center bg-green-50 dark:bg-green-900/20 border-green-200">
            <CardContent className="p-6">
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-600 mb-2">{completedItems.length}</h3>
              <p className="text-green-700 dark:text-green-300">Completed Milestones</p>
            </CardContent>
          </Card>
          
          <Card className="text-center bg-blue-50 dark:bg-blue-900/20 border-blue-200">
            <CardContent className="p-6">
              <Target className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-blue-600 mb-2">{inProgressItems.length}</h3>
              <p className="text-blue-700 dark:text-blue-300">In Progress</p>
            </CardContent>
          </Card>
          
          <Card className="text-center bg-gray-50 dark:bg-gray-800/20 border-gray-200">
            <CardContent className="p-6">
              <Calendar className="w-12 h-12 text-gray-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-600 mb-2">{plannedItems.length}</h3>
              <p className="text-gray-700 dark:text-gray-300">Planned</p>
            </CardContent>
          </Card>
        </div>

        {/* Roadmap Timeline */}
        <div className="relative">
          {/* Horizontal scroll container */}
          <div className="overflow-x-auto pb-6">
            <div className="flex space-x-6 min-w-max px-4">
              {roadmapItems.map((item, index) => (
                <div key={item.id} className="flex flex-col items-center scroll-reveal">
                  {/* Timeline Item */}
                  <Card className={`w-80 ${getStatusColor(item.status)} border-2 hover:shadow-lg transition-all duration-300 hover-glow`}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        {getStatusIcon(item.status)}
                        <Badge variant="outline" className="text-xs">
                          {item.period}
                        </Badge>
                      </div>
                      
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-medium mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-1">
                          {item.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      {item.achievements.length > 0 && (
                        <div>
                          <h4 className="text-sm font-medium mb-2">Key Achievements:</h4>
                          <ul className="space-y-1">
                            {item.achievements.slice(0, 2).map((achievement, idx) => (
                              <li key={idx} className="text-xs text-muted-foreground flex items-start">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                  
                  {/* Arrow connector */}
                  {index < roadmapItems.length - 1 && (
                    <div className="flex items-center mt-4">
                      <ArrowRight className="w-6 h-6 text-primary" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Current Focus */}
        <section className="mt-16 scroll-reveal">
          <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center mb-6">Current Focus & Goals</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-primary">What I'm Learning Now</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm">Advanced React patterns and architecture</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm">Performance optimization techniques</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm">Testing strategies and best practices</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-primary">Upcoming Goals</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Target className="w-4 h-4 text-blue-500 mr-2" />
                      <span className="text-sm">Full-stack development with Next.js</span>
                    </li>
                    <li className="flex items-center">
                      <Target className="w-4 h-4 text-blue-500 mr-2" />
                      <span className="text-sm">Cloud platform expertise (AWS)</span>
                    </li>
                    <li className="flex items-center">
                      <Target className="w-4 h-4 text-blue-500 mr-2" />
                      <span className="text-sm">Open source contributions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Roadmap;
