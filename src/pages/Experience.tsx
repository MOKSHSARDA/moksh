
import React, { useEffect } from 'react';
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
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

  const experiences = [
    {
      id: 1,
      type: 'work',
      title: 'Frontend Developer',
      company: 'Hiimpact Consultants Pvt. Ltd.',
      location: 'Remote',
      period: '2025 - Present',
      description: 'Leading frontend development for multiple client projects, implementing modern React applications with TypeScript and ensuring high-performance, accessible user interfaces.',
      achievements: [
        'Improved website performance by 40% through code optimization',
        'Led the migration from JavaScript to TypeScript for better code quality',
        'Mentored junior developers and conducted code reviews',
        'Implemented responsive designs resulting in 25% increase in mobile engagement'
      ],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Git']
    },
    {
      id: 2,
      type: 'work',
      title: 'Frontend Developer',
      company: 'Insuretech Skills',
      location: 'Dehradhun, India',
      period: '2024 - 2025 November',
      description: 'Developed and maintained client websites and web applications, collaborated with design teams to implement pixel-perfect UI components.',
      achievements: [
        'Built 15+ responsive websites for various clients',
        'Reduced page load times by 30% through optimization techniques',
        'Collaborated with UX/UI designers to improve user experience',
        'Implemented automated testing reducing bugs by 50%'
      ],
      technologies: ['React', 'JavaScript', 'CSS3', 'SASS', 'Bootstrap']
    },
    {
      id: 3,
      type: 'education',
      title: 'Bachelor of Science in Information Technology',
      company: 'Graphic Era University',
      location: 'India',
      period: '2020 - 2024',
      description: 'Completed comprehensive computer science program with focus on software development, algorithms, and web technologies.',
      achievements: [
        'Graduated with First Class Honors (7.67/10 CGPA)',
        'Led the university coding club',
        'Marketing Manager at Tech Wizard',
        'Completed capstone project on e-commerce platform development'
      ],
      technologies: ['Java', 'Python', 'C++', 'Database Management', 'Software Engineering','HTML','CSS','JavaScript']
    },
    {
      id: 4,
      type: 'work',
      title: 'Web Development Intern',
      company: 'Insuretech Skills',
      location: 'Dehradhun, India',
      period: '2023 (Summer)',
      description: 'Contributed to the development of the company\'s main product, a SaaS platform for small businesses.',
      achievements: [
        'Developed user-friendly dashboard components',
        'Fixed 20+ UI/UX issues improving user satisfaction',
        'Learned industry best practices and agile methodologies',
        'Received outstanding intern feedback from supervisor'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'React','Git', 'GitHub',]
    }
  ];

  const workExperience = experiences.filter(exp => exp.type === 'work');
  const education = experiences.filter(exp => exp.type === 'education');

  const TimelineItem = ({ item, index, isLast }: { item: any, index: number, isLast: boolean }) => (
    <div className="relative scroll-reveal">
      <div className="flex items-start">
        <div className="flex flex-col items-center mr-6">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
            item.type === 'work' ? 'bg-primary' : 'bg-secondary'
          } hover:scale-110 transition-transform duration-300`}>
            {item.type === 'work' ? (
              <Briefcase className="w-6 h-6 text-primary-foreground" />
            ) : (
              <GraduationCap className="w-6 h-6 text-secondary-foreground" />
            )}
          </div>
          {!isLast && <div className="w-0.5 h-full bg-border mt-4"></div>}
        </div>
        
        <div className="flex-1 pb-12">
          <Card className="hover:shadow-lg transition-all duration-300 hover-glow">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-1">{item.title}</h3>
                  <p className="text-lg font-medium">{item.company}</p>
                </div>
                <div className="flex flex-col md:items-end mt-2 md:mt-0">
                  <div className="flex items-center text-sm text-muted-foreground mb-1">
                    <Calendar className="w-4 h-4 mr-1" />
                    {item.period}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-1" />
                    {item.location}
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4">{item.description}</p>
              
              <div className="mb-4">
                <h4 className="font-medium mb-2">Key Achievements:</h4>
                <ul className="space-y-1">
                  {item.achievements.map((achievement: string, idx: number) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech: string) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );

  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Experience & Education</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey and educational background that shaped my skills as a frontend developer.
          </p>
        </div>

        {/* Professional Experience */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center scroll-reveal">
            <Briefcase className="mr-3 text-primary" />
            Professional Experience
          </h2>
          <div className="space-y-8">
            {workExperience.map((item, index) => (
              <TimelineItem 
                key={item.id} 
                item={item} 
                index={index} 
                isLast={index === workExperience.length - 1}
              />
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-3xl font-bold mb-8 flex items-center scroll-reveal">
            <GraduationCap className="mr-3 text-primary" />
            Education
          </h2>
          <div className="space-y-8">
            {education.map((item, index) => (
              <TimelineItem 
                key={item.id} 
                item={item} 
                index={index} 
                isLast={index === education.length - 1}
              />
            ))}
          </div>
        </section>

        {/* Summary Stats */}
        <section className="mt-16 scroll-reveal">
          <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center mb-8">Career Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">2+</div>
                  <div className="text-muted-foreground">Years of Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-muted-foreground">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">8.5</div>
                  <div className="text-muted-foreground">CGPA (First Class)</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Experience;
