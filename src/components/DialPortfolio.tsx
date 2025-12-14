import { useState } from 'react';
import { User, GraduationCap, Rocket, Trophy, Heart, Mail, Code } from 'lucide-react';
import { CircularDial, type DialSection } from './CircularDial';
import { ContentPanel } from './ContentPanel';
import { ContactForm } from './ContactForm';
import { TypingText } from './TypingText';
import { GlitchEffect } from './GlitchEffect';
import sciFiBackground from '@/assets/sci-fi-background.jpg';

interface Section extends DialSection {
  subtitle?: string;
  content: string[];
}

const sections: Section[] = [
  {
    id: 'personal',
    title: 'NEURAL PROFILE',
    subtitle: 'Personal Identity Matrix',
    icon: User,
    angle: 0,
    content: [
      'DESIGNATION: Abhijeet Soren',
      'CLASSIFICATION: Developer & Enthusiast',
      'COORDINATES: Bhubaneswar, Odisha, India',
      'SPECIALIZATION: React, Vite, IoT Development, Web Technologies',
      'CLEARANCE LEVEL: B.Tech Student (2023-2027)',
      'BIOMETRIC STATUS: Active'
    ]
  },
  {
    id: 'education',
    title: 'KNOWLEDGE BASE',
    subtitle: 'Educational Algorithms',
    icon: GraduationCap,
    angle: 60,
    content: [
      'Bachelor of Technology (Pursuing) - Institute of Technical Education and Research, SOA (2023-2027)',
      'Class 12 - DPS Kalinga (Completed)',
      'Date of Birth: 14.11.2004',
      'Current Status: Undergraduate Student',
      'Focus Areas: Computer Science & Engineering',
      'Academic Journey: Building foundation in technology'
    ]
  },
  {
    id: 'projects',
    title: 'PROJECT ARCHIVES',
    subtitle: 'Mission Accomplishments',
    icon: Rocket,
    angle: 120,
    content: [
      'VigilloT: IoT monitoring system with real-time anomaly detection and notifications',
      'Built with Vite and React, featuring responsive interface for device visualization',
      'Live Demo: https://abhijeetvigillot.netlify.app/',
      'CodeCrafter: Interactive front-end teaching platform for web development beginners',
      'Features tutorials, coding challenges, and real-time feedback for HTML, CSS, JavaScript',
      'Live Demo: https://codecrafterz.netlify.app/ (In Development)'
    ]
  },
  {
    id: 'skills',
    title: 'SKILL MATRIX',
    subtitle: 'Technical Capabilities Database',
    icon: Code,
    angle: 120,
    content: [
      'LANGUAGES → Python | Java | C | JavaScript | TypeScript',
      'FRAMEWORKS → Django | Django REST Framework | Spring Boot | React',
      'TOOLS → Linux | Git | GitHub | Postman',
      'BACKEND → REST APIs | System Design (Basics) | API Security (Basics)',
      'SPECIALIZATION → Backend Development | Full-Stack Development',
      'STATUS → Continuously Expanding Skill Set'
    ]
  },
  {
    id: 'extracurricular',
    title: 'AUXILIARY PROGRAMS',
    subtitle: 'Extended Activities',
    icon: Trophy,
    angle: 180,
    content: [
      'STUDENT: Bachelor of Technology Computer Science - SOA University',
      'DEVELOPER: Personal projects in Internet of Things and Web Development',
      'LEARNER: Continuous skill development in modern web technologies',
      'CREATOR: Building educational platforms for coding beginners',
      'INNOVATOR: Exploring Internet of Things solutions for real-world problems',
      'TECH ENTHUSIAST: Passionate about emerging technologies'
    ]
  },
  {
    id: 'about',
    title: 'CONSCIOUSNESS PROFILE',
    subtitle: 'Core Directives and Philosophy',
    icon: Heart,
    angle: 240,
    content: [
      'PRIMARY DIRECTIVE: Creating innovative solutions through technology',
      'MISSION: Building user-friendly applications that solve real-world problems',
      'PASSION: Internet of Things development and interactive web experiences',
      'FOCUS: Front-end development with emphasis on React and modern frameworks',
      'PHILOSOPHY: Technology should be accessible and educational for everyone',
      'VISION: Becoming a skilled developer who contributes to technological advancement'
    ]
  },
  {
    id: 'contact',
    title: 'COMMUNICATION PROTOCOLS',
    subtitle: 'Quantum Channel Access',
    icon: Mail,
    angle: 300,
    content: [
      'EMAIL: abhijeetsoren222@gmail.com',
      'PHONE: +91-9348957556',
      'LINKEDIN: https://www.linkedin.com/in/abhijeet-soren-a7654b2b5/',
      'PROJECTS: VigilloT & CodeCrafter (Live Demos Available)',
      'AVAILABILITY: Open for collaboration and opportunities',
      'PREFERRED: Email for professional inquiries'
    ]
  }
];

export const DialPortfolio = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [showWelcome, setShowWelcome] = useState(true);

  const handleSectionChange = (index: number) => {
    setActiveSection(index);
    if (showWelcome) {
      setShowWelcome(false);
    }
  };

  return (
    <div
      className="h-screen w-screen overflow-hidden bg-background text-foreground relative"
      style={{
        backgroundImage: `url(${sciFiBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Enhanced Background Overlay */}
      <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />

      {/* Matrix Rain Effect */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main Container */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Header */}
        <div className="relative px-8 py-6 border-b border-primary/20">
          <div className="hud-corner top-left"></div>
          <div className="hud-corner top-right"></div>
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-orbitron font-black hologram-text animate-text-glow">
                <TypingText text="ABHIJEET SOREN - PORTFOLIO SYSTEM" speed={60} />
              </h1>
              <div className="text-primary/80 font-tech text-sm mt-1">
                <TypingText
                  text="// DEVELOPER & ENTHUSIAST //"
                  speed={30}
                  delay={2500}
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-xs font-mono">
              <span className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                <span className="text-green-400">ONLINE</span>
              </span>
              <span className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-primary">QUANTUM-LINKED</span>
              </span>
              <span className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                <span className="text-blue-400">ENCRYPTED</span>
              </span>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 flex overflow-hidden">
          {/* Left Panel - Circular Dial */}
          <div className="w-[40%] border-r border-primary/20 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-transparent" />
            <div className="hud-corner top-left"></div>
            <div className="hud-corner bottom-left"></div>
            
            <div className="relative h-full flex flex-col">
              <div className="px-6 py-4 border-b border-primary/20">
                <h2 className="text-sm font-orbitron font-bold text-primary tracking-wider">
                  NAVIGATION DIAL
                </h2>
                <p className="text-xs text-primary/60 font-tech mt-1">
                  Scroll to rotate and select sections
                </p>
              </div>
              
              <div className="flex-1 flex items-center justify-center p-8">
                <CircularDial
                  sections={sections}
                  activeSection={activeSection}
                  onSectionChange={handleSectionChange}
                />
              </div>
              
              <div className="px-6 py-4 border-t border-primary/20">
                <div className="text-xs font-orbitron text-primary/50 mb-2">SYSTEM METRICS</div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Synchronization</span>
                    <span className="text-primary font-mono">99.2%</span>
                  </div>
                  <div className="w-full bg-background/20 rounded-full h-1">
                    <div className="bg-primary h-1 rounded-full animate-pulse-glow" style={{ width: '99%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - Content Display */}
          <div className="flex-1 relative">
            <div className="absolute inset-0 bg-gradient-to-l from-background/50 to-transparent" />
            <div className="hud-corner top-right"></div>
            <div className="hud-corner bottom-right"></div>
            
            <div className="relative h-full">
              {showWelcome ? (
                <div className="h-full flex items-center justify-center p-8">
                  <div className="text-center space-y-6 max-w-2xl">
                    <div className="text-6xl animate-bounce">🧠</div>
                    <h2 className="text-4xl font-orbitron font-bold hologram-text">
                      <TypingText text="SYSTEM INITIALIZED" speed={60} delay={1000} />
                    </h2>
                    <p className="text-lg font-tech text-primary/70">
                      <TypingText
                        text=">>> ROTATE THE NAVIGATION DIAL TO EXPLORE MY PORTFOLIO <<<"
                        speed={30}
                        delay={3500}
                      />
                    </p>
                    <div className="h-px w-64 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent animate-circuit-flow"></div>
                  </div>
                </div>
              ) : sections[activeSection].id === 'contact' ? (
                <ContactForm />
              ) : (
                <ContentPanel
                  section={sections[activeSection]}
                  sectionIndex={activeSection}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none z-5">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              backgroundColor: `hsl(${180 + Math.random() * 40}, 100%, ${50 + Math.random() * 30}%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* TV Glitch Effect */}
      <GlitchEffect />
    </div>
  );
};
