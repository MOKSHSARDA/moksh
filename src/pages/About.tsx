
import React, { useEffect } from 'react';
import { Calendar, MapPin, Code, Coffee, Music, Camera } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
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

  const journey = [
    {
      year: '2022',
      title: 'Started Frontend Development',
      description: 'Began learning HTML, CSS, and JavaScript. Built my first responsive websites.',
      icon: Code,
    },
    {
      year: '2023',
      title: 'React & Modern Tools',
      description: 'Mastered React.js, learned TypeScript, and started working with modern development tools.',
      icon: Code,
    },
    {
      year: '2024',
      title: 'Professional Growth',
      description: 'Expanded skills in full-stack development, UI/UX design, and project management.',
      icon: Code,
    },
    {
      year: '2025',
      title: 'Current Focus',
      description: 'Building scalable applications and contributing to open-source projects.',
      icon: Code,
    },
  ];

  const technologies = [
    { name: 'React', level: 80, color: 'bg-blue-500' },
    { name: 'TypeScript', level: 85, color: 'bg-blue-600' },
    { name: 'JavaScript', level: 95, color: 'bg-yellow-500' },
    { name: 'CSS/SCSS', level: 90, color: 'bg-pink-500' },
    { name: 'Tailwind CSS', level: 95, color: 'bg-cyan-500' },
    { name: 'Node.js', level: 75, color: 'bg-green-500' },
    { name: 'Git/GitHub', level: 85, color: 'bg-gray-600' },
    { name: 'Figma', level: 80, color: 'bg-purple-500' },
  ];

  const interests = [
    { name: 'Coding', icon: Code, description: 'Building innovative solutions' },
    { name: 'Coffee', icon: Coffee, description: 'Fuel for productivity' },
    { name: 'Music', icon: Music, description: 'Creative inspiration' },
    { name: 'Photography', icon: Camera, description: 'Capturing moments' },
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate frontend developer with a love for creating beautiful, functional, and user-centered digital experiences.
          </p>
        </div>

        {/* Personal Story */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-reveal">
              <img
                src="moksh.jpg"
                alt="Moksh Sarda"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6 scroll-reveal">
              <h2 className="text-3xl font-bold">My Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Hi! I'm Moksh Sarda, a passionate frontend developer with 2 years of experience in creating 
                  digital experiences that users love. My journey began with curiosity about how websites work, 
                  and it has evolved into a deep passion for crafting beautiful, functional web applications.
                </p>
                <p>
                  I specialize in React.js, TypeScript, and modern CSS frameworks like Tailwind CSS. 
                  I believe in writing clean, maintainable code and creating interfaces that are not only 
                  visually appealing but also accessible and performant.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                  projects, or enjoying a good cup of coffee while planning my next project.
                </p>
              </div>
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <MapPin size={16} className="mr-2" />
                  India
                </div>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  Available for work
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 scroll-reveal">My Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20"></div>
            <div className="space-y-12">
              {journey.map((item, index) => (
                <div key={item.year} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'} scroll-reveal`}>
                    <Card className="hover:shadow-lg transition-all duration-300 hover-glow">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-2">
                          <span className="text-2xl font-bold text-primary">{item.year}</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center relative z-10">
                    <item.icon size={24} className="text-primary-foreground" />
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 scroll-reveal">Technologies & Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technologies.map((tech, index) => (
              <div key={tech.name} className="scroll-reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{tech.name}</span>
                  <span className="text-sm text-muted-foreground">{tech.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${tech.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${tech.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Interests */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12 scroll-reveal">When I'm Not Coding</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((interest, index) => (
              <Card key={interest.name} className="text-center hover:shadow-lg transition-all duration-300 hover-glow scroll-reveal">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <interest.icon size={32} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{interest.name}</h3>
                  <p className="text-sm text-muted-foreground">{interest.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
