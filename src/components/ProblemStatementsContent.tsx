import React, { useEffect, useRef, useState } from 'react';
import { Lightbulb, ChevronDown, ChevronUp, Shield, Heart, Cpu, Leaf, Rocket, Zap, Brain, Globe, Building, Coins } from 'lucide-react';

const ProblemStatementsContent: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elementsToAnimate = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elementsToAnimate?.forEach((el) => observer.observe(el));

    return () => {
      elementsToAnimate?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  const problemCategories = [
    {
      id: 'space-defense',
      title: 'Space Technology & Defense',
      icon: <Rocket className="h-8 w-8 text-blue-400" />,
      gradient: 'from-blue-400 to-purple-600',
      problems: [
        {
          title: 'Autonomous Navigation for Lunar Rovers',
          description: 'Develop an AI-powered navigation system for lunar rovers that can operate autonomously in the challenging lunar environment with minimal Earth communication.',
          difficulty: 'Advanced',
          tags: ['AI/ML', 'Robotics', 'Space Technology'],
          provider: 'ISRO'
        },
        {
          title: 'Satellite Debris Detection and Tracking',
          description: 'Create a system to detect, track, and predict the movement of space debris to protect operational satellites and spacecraft.',
          difficulty: 'Advanced',
          tags: ['Computer Vision', 'Tracking Systems', 'Space Safety'],
          provider: 'ISRO'
        },
        {
          title: 'Mars Habitat Design Optimization',
          description: 'Design an optimal habitat structure for Mars colonization considering radiation protection, resource utilization, and psychological well-being.',
          difficulty: 'Advanced',
          tags: ['Structural Design', 'Simulation', 'Human Factors'],
          provider: 'ISRO'
        },
        {
          title: 'Cybersecurity Threat Detection System',
          description: 'Develop an advanced cybersecurity system that can detect and respond to sophisticated cyber threats in real-time.',
          difficulty: 'Advanced',
          tags: ['Cybersecurity', 'Threat Detection', 'Network Security'],
          provider: 'DRDO'
        },
        {
          title: 'Drone Swarm Coordination System',
          description: 'Create a system for coordinating multiple drones in surveillance and reconnaissance missions with autonomous decision-making.',
          difficulty: 'Advanced',
          tags: ['Drone Technology', 'Swarm Intelligence', 'Autonomous Systems'],
          provider: 'DRDO'
        },
        {
          title: 'Secure Communication Protocol',
          description: 'Design a quantum-resistant secure communication protocol for military and defense applications.',
          difficulty: 'Advanced',
          tags: ['Cryptography', 'Secure Communications', 'Quantum Security'],
          provider: 'DRDO'
        }
      ]
    },
    {
      id: 'healthcare',
      title: 'Healthcare & Medical Technology',
      icon: <Heart className="h-8 w-8 text-pink-400" />,
      gradient: 'from-pink-400 to-red-500',
      problems: [
        {
          title: 'AI-Assisted Medical Diagnosis System',
          description: 'Develop an AI system that can assist doctors in diagnosing diseases from medical images and patient data with high accuracy and reliability.',
          difficulty: 'Advanced',
          tags: ['Medical AI', 'Computer Vision', 'Healthcare', 'Deep Learning'],
          provider: 'RG Hospitals'
        },
        {
          title: 'Hospital Resource Optimization Platform',
          description: 'Create a comprehensive system to optimize hospital resource allocation including beds, staff, equipment, and supplies based on real-time demand and predictive analytics.',
          difficulty: 'Intermediate',
          tags: ['Optimization', 'Resource Management', 'Healthcare Operations', 'Analytics'],
          provider: 'RG Hospitals'
        },
        {
          title: 'Patient Monitoring and Alert System',
          description: 'Build a comprehensive patient monitoring system that can predict health deterioration, alert medical staff, and provide early intervention recommendations.',
          difficulty: 'Advanced',
          tags: ['IoT', 'Predictive Analytics', 'Patient Care', 'Real-time Monitoring'],
          provider: 'RG Hospitals'
        },
        {
          title: 'Telemedicine Platform with AI Triage',
          description: 'Develop a telemedicine platform that includes AI-powered triage to prioritize patients and provide preliminary assessments before doctor consultations.',
          difficulty: 'Intermediate',
          tags: ['Telemedicine', 'AI Triage', 'Healthcare Access', 'Remote Care'],
          provider: 'RG Hospitals'
        },
        {
          title: 'Mental Health Assessment and Support System',
          description: 'Create a digital platform that can assess mental health conditions, provide personalized support, and connect users with appropriate mental health resources.',
          difficulty: 'Intermediate',
          tags: ['Mental Health', 'AI Assessment', 'Digital Therapy', 'Support Systems'],
          provider: 'RG Hospitals'
        }
      ]
    },
    {
      id: 'fintech-crypto',
      title: 'FinTech & Cryptocurrency',
      icon: <Coins className="h-8 w-8 text-yellow-400" />,
      gradient: 'from-yellow-400 to-orange-500',
      problems: [
        {
          title: 'Real-time Fraud Detection Platform',
          description: 'Develop a real-time fraud detection system for financial transactions using machine learning, behavioral analysis, and pattern recognition to prevent fraudulent activities.',
          difficulty: 'Advanced',
          tags: ['Machine Learning', 'Real-time Processing', 'Security', 'Fraud Detection'],
          provider: 'EPAM'
        },
        {
          title: 'Decentralized Finance (DeFi) Protocol',
          description: 'Build a secure and efficient DeFi protocol that enables lending, borrowing, and yield farming with innovative tokenomics and risk management.',
          difficulty: 'Advanced',
          tags: ['Blockchain', 'Smart Contracts', 'DeFi', 'Tokenomics'],
          provider: 'Open Innovation'
        },
        {
          title: 'Cryptocurrency Portfolio Management Tool',
          description: 'Create an intelligent portfolio management system that provides automated trading strategies, risk assessment, and market analysis for cryptocurrency investments.',
          difficulty: 'Intermediate',
          tags: ['Crypto Trading', 'Portfolio Management', 'Market Analysis', 'Risk Assessment'],
          provider: 'Open Innovation'
        },
        {
          title: 'Cross-border Payment Solution',
          description: 'Develop a blockchain-based cross-border payment system that reduces transaction costs, improves speed, and ensures regulatory compliance.',
          difficulty: 'Advanced',
          tags: ['Blockchain', 'Cross-border Payments', 'Regulatory Compliance', 'Fintech'],
          provider: 'Open Innovation'
        },
        {
          title: 'Digital Identity Verification System',
          description: 'Build a secure digital identity verification system using blockchain technology that protects user privacy while ensuring compliance with KYC/AML regulations.',
          difficulty: 'Advanced',
          tags: ['Digital Identity', 'Blockchain', 'Privacy', 'KYC/AML'],
          provider: 'Open Innovation'
        }
      ]
    },
    {
      id: 'ai-ml',
      title: 'Artificial Intelligence & Machine Learning',
      icon: <Brain className="h-8 w-8 text-purple-400" />,
      gradient: 'from-purple-400 to-indigo-600',
      problems: [
        {
          title: 'Intelligent Document Processing System',
          description: 'Build an AI-powered system that can extract, process, analyze, and understand information from various document formats including handwritten text, forms, and complex layouts.',
          difficulty: 'Intermediate',
          tags: ['NLP', 'OCR', 'Machine Learning', 'Document Processing'],
          provider: 'EPAM'
        },
        {
          title: 'Personalized Learning Management System',
          description: 'Create an adaptive learning platform that personalizes content delivery, learning paths, and assessment methods based on individual learning patterns, preferences, and performance.',
          difficulty: 'Intermediate',
          tags: ['EdTech', 'Personalization', 'Analytics', 'Adaptive Learning'],
          provider: 'EPAM'
        },
        {
          title: 'AI-Powered Resume Screening System',
          description: 'Develop an intelligent resume screening system that can match candidates to job requirements while eliminating bias and providing fair assessment of skills and qualifications.',
          difficulty: 'Intermediate',
          tags: ['NLP', 'Machine Learning', 'HR Tech', 'Bias Reduction'],
          provider: 'Talsmart'
        },
        {
          title: 'Virtual Interview Assessment Tool',
          description: 'Build a virtual interview platform with AI-powered assessment capabilities that can evaluate communication skills, technical knowledge, and cultural fit for remote hiring processes.',
          difficulty: 'Advanced',
          tags: ['Video Processing', 'AI Assessment', 'Remote Work', 'Natural Language Processing'],
          provider: 'Talsmart'
        },
        {
          title: 'Predictive Analytics for Business Intelligence',
          description: 'Create a comprehensive business intelligence platform that uses machine learning to predict market trends, customer behavior, and business outcomes.',
          difficulty: 'Advanced',
          tags: ['Predictive Analytics', 'Business Intelligence', 'Machine Learning', 'Data Science'],
          provider: 'Open Innovation'
        }
      ]
    },
    {
      id: 'sustainability',
      title: 'Sustainability & Green Technology',
      icon: <Leaf className="h-8 w-8 text-green-400" />,
      gradient: 'from-green-400 to-blue-500',
      problems: [
        {
          title: 'Smart Electric Vehicle Charging Infrastructure',
          description: 'Develop an intelligent EV charging network that optimizes energy distribution, reduces grid load, integrates renewable energy sources, and provides dynamic pricing.',
          difficulty: 'Intermediate',
          tags: ['IoT', 'Energy Management', 'Smart Grid', 'Renewable Energy'],
          provider: 'Mahindra'
        },
        {
          title: 'Precision Agriculture with Drone Technology',
          description: 'Create a comprehensive drone-based system for precision agriculture that can monitor crop health, optimize irrigation, predict yield, and reduce resource waste.',
          difficulty: 'Intermediate',
          tags: ['Drones', 'Computer Vision', 'Agriculture Tech', 'IoT Sensors'],
          provider: 'Mahindra'
        },
        {
          title: 'Autonomous Farm Equipment Navigation',
          description: 'Design an autonomous navigation system for farm equipment that can operate efficiently in various field conditions while optimizing fuel consumption and crop protection.',
          difficulty: 'Advanced',
          tags: ['Autonomous Systems', 'GPS', 'Agricultural Robotics', 'Precision Farming'],
          provider: 'Mahindra'
        },
        {
          title: 'Carbon Footprint Tracking and Reduction Platform',
          description: 'Build a comprehensive platform that tracks carbon emissions across supply chains and provides actionable insights for carbon footprint reduction.',
          difficulty: 'Intermediate',
          tags: ['Carbon Tracking', 'Supply Chain', 'Environmental Analytics', 'Sustainability'],
          provider: 'Open Innovation'
        },
        {
          title: 'Renewable Energy Grid Optimization',
          description: 'Develop a system that optimizes the integration of renewable energy sources into the power grid, managing supply-demand balance and energy storage.',
          difficulty: 'Advanced',
          tags: ['Renewable Energy', 'Grid Management', 'Energy Storage', 'Optimization'],
          provider: 'Open Innovation'
        }
      ]
    },
    {
      id: 'hr-workforce',
      title: 'Human Resources & Workforce Management',
      icon: <Building className="h-8 w-8 text-orange-400" />,
      gradient: 'from-orange-400 to-red-500',
      problems: [
        {
          title: 'Employee Skill Gap Analysis Platform',
          description: 'Create a comprehensive platform that identifies skill gaps in organizations, maps current capabilities, and recommends personalized learning paths and training programs for employees.',
          difficulty: 'Intermediate',
          tags: ['Analytics', 'Skills Assessment', 'Learning Platforms', 'Workforce Development'],
          provider: 'Talsmart'
        },
        {
          title: 'AI-Powered Performance Management System',
          description: 'Develop an intelligent performance management system that provides continuous feedback, goal tracking, and personalized development recommendations.',
          difficulty: 'Intermediate',
          tags: ['Performance Management', 'AI Analytics', 'Employee Development', 'Feedback Systems'],
          provider: 'Talsmart'
        },
        {
          title: 'Remote Work Collaboration Platform',
          description: 'Build a comprehensive remote work platform that enhances team collaboration, productivity tracking, and employee engagement in distributed work environments.',
          difficulty: 'Intermediate',
          tags: ['Remote Work', 'Collaboration Tools', 'Productivity', 'Team Management'],
          provider: 'Talsmart'
        },
        {
          title: 'Diversity and Inclusion Analytics Dashboard',
          description: 'Create a data-driven platform that measures, tracks, and improves diversity and inclusion metrics across organizations with actionable insights.',
          difficulty: 'Intermediate',
          tags: ['Diversity Analytics', 'Inclusion Metrics', 'HR Analytics', 'Organizational Development'],
          provider: 'Open Innovation'
        }
      ]
    },
    {
      id: 'smart-cities',
      title: 'Smart Cities & IoT',
      icon: <Globe className="h-8 w-8 text-cyan-400" />,
      gradient: 'from-cyan-400 to-blue-600',
      problems: [
        {
          title: 'Smart Traffic Management System',
          description: 'Develop an intelligent traffic management system that uses IoT sensors, AI, and real-time data to optimize traffic flow, reduce congestion, and improve urban mobility.',
          difficulty: 'Advanced',
          tags: ['IoT', 'Traffic Management', 'Smart Cities', 'Real-time Analytics'],
          provider: 'Open Innovation'
        },
        {
          title: 'Urban Air Quality Monitoring Network',
          description: 'Create a comprehensive air quality monitoring system using IoT sensors that provides real-time data, predictions, and recommendations for pollution control.',
          difficulty: 'Intermediate',
          tags: ['IoT Sensors', 'Environmental Monitoring', 'Air Quality', 'Data Analytics'],
          provider: 'Open Innovation'
        },
        {
          title: 'Smart Waste Management System',
          description: 'Build an intelligent waste management system that optimizes collection routes, monitors bin levels, and promotes recycling through IoT and AI technologies.',
          difficulty: 'Intermediate',
          tags: ['IoT', 'Waste Management', 'Route Optimization', 'Environmental Sustainability'],
          provider: 'Open Innovation'
        },
        {
          title: 'Smart Water Distribution Network',
          description: 'Develop a smart water distribution system that monitors water quality, detects leaks, optimizes pressure, and ensures efficient water resource management.',
          difficulty: 'Advanced',
          tags: ['IoT', 'Water Management', 'Leak Detection', 'Resource Optimization'],
          provider: 'Open Innovation'
        }
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity & Privacy',
      icon: <Shield className="h-8 w-8 text-red-400" />,
      gradient: 'from-red-400 to-pink-500',
      problems: [
        {
          title: 'Zero-Trust Security Architecture',
          description: 'Design and implement a zero-trust security model that provides comprehensive protection for modern distributed computing environments.',
          difficulty: 'Advanced',
          tags: ['Zero Trust', 'Network Security', 'Identity Management', 'Access Control'],
          provider: 'Open Innovation'
        },
        {
          title: 'Privacy-Preserving Data Analytics Platform',
          description: 'Build a platform that enables data analytics while preserving user privacy through techniques like differential privacy and homomorphic encryption.',
          difficulty: 'Advanced',
          tags: ['Privacy Preservation', 'Data Analytics', 'Differential Privacy', 'Encryption'],
          provider: 'Open Innovation'
        },
        {
          title: 'Automated Vulnerability Assessment Tool',
          description: 'Create an automated tool that continuously scans, identifies, and prioritizes security vulnerabilities across complex IT infrastructures.',
          difficulty: 'Intermediate',
          tags: ['Vulnerability Assessment', 'Security Scanning', 'Risk Management', 'Automation'],
          provider: 'Open Innovation'
        },
        {
          title: 'Blockchain-based Identity Management',
          description: 'Develop a decentralized identity management system using blockchain technology that gives users control over their digital identities.',
          difficulty: 'Advanced',
          tags: ['Blockchain', 'Identity Management', 'Decentralization', 'Digital Identity'],
          provider: 'Open Innovation'
        }
      ]
    },
    {
      id: 'emerging-tech',
      title: 'Emerging Technologies',
      icon: <Zap className="h-8 w-8 text-indigo-400" />,
      gradient: 'from-indigo-400 to-purple-600',
      problems: [
        {
          title: 'Quantum Computing Algorithm Optimization',
          description: 'Develop algorithms optimized for quantum computing that can solve complex optimization problems more efficiently than classical computers.',
          difficulty: 'Advanced',
          tags: ['Quantum Computing', 'Algorithm Optimization', 'Quantum Algorithms', 'Complex Systems'],
          provider: 'Open Innovation'
        },
        {
          title: 'Augmented Reality Training Platform',
          description: 'Create an AR-based training platform that provides immersive learning experiences for technical skills, safety training, and professional development.',
          difficulty: 'Intermediate',
          tags: ['Augmented Reality', 'Training Simulation', 'Immersive Learning', 'Skill Development'],
          provider: 'Open Innovation'
        },
        {
          title: 'Edge Computing Optimization Framework',
          description: 'Build a framework that optimizes computation distribution between edge devices and cloud infrastructure for improved performance and reduced latency.',
          difficulty: 'Advanced',
          tags: ['Edge Computing', 'Distributed Systems', 'Performance Optimization', 'Cloud Computing'],
          provider: 'Open Innovation'
        },
        {
          title: 'Voice-Controlled Smart Assistant for Accessibility',
          description: 'Develop an advanced voice-controlled assistant specifically designed to help people with disabilities navigate digital interfaces and control smart devices.',
          difficulty: 'Intermediate',
          tags: ['Voice Recognition', 'Accessibility', 'Smart Assistants', 'Inclusive Design'],
          provider: 'Open Innovation'
        }
      ]
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-400 bg-green-400/20';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-400/20';
      case 'Advanced': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  return (
    <div className="min-h-screen space-bg" ref={sectionRef}>
      <main className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <div className="inline-block p-3 bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-full mb-4 animate-on-scroll opacity-0">
            <Lightbulb className="h-8 w-8 text-pink-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-on-scroll opacity-0">
            Problem <span className="gradient-text">Statements</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-cyan-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto animate-on-scroll opacity-0 leading-relaxed">
            Choose from 40+ cutting-edge problem statements across 9 technology domains. Each challenge is designed to push the boundaries of innovation and create real-world impact across industries.
          </p>
        </div>

        <div className="space-y-6">
          {problemCategories.map((category, categoryIndex) => (
            <div
              key={category.id}
              className="glass-card rounded-2xl overflow-hidden transition-all duration-300 animate-on-scroll opacity-0"
              style={{ animationDelay: `${categoryIndex * 150}ms` }}
            >
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none hover:bg-white/5 transition-colors duration-300"
                onClick={() => toggleCategory(category.id)}
              >
                <div className="flex items-center space-x-4">
                  <div className={`bg-gradient-to-br ${category.gradient}/20 p-3 rounded-lg`}>
                    {category.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                    <p className="text-gray-400">{category.problems.length} Problem Statements</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-pink-500/20 to-purple-600/20 p-2 rounded-full">
                  {expandedCategory === category.id ? (
                    <ChevronUp className="h-6 w-6 text-pink-400" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-pink-400" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  expandedCategory === category.id ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-6 space-y-6">
                  {category.problems.map((problem, problemIndex) => (
                    <div
                      key={problemIndex}
                      className="glass-card rounded-xl p-6 hover:glass-card transition-all duration-300"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-2">{problem.title}</h3>
                          <p className="text-sm text-cyan-300 mb-2">Provided by: {problem.provider}</p>
                        </div>
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(problem.difficulty)} lg:ml-4`}>
                          {problem.difficulty}
                        </span>
                      </div>
                      
                      <p className="text-gray-300 mb-4 leading-relaxed">{problem.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {problem.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-gradient-to-r from-pink-400/20 to-cyan-400/20 text-cyan-300 rounded-full text-sm border border-cyan-400/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-on-scroll opacity-0">
          <div className="glass-card rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold gradient-text mb-6">Ready to Innovate?</h3>
            <p className="text-gray-300 mb-8 text-lg">
              Choose your problem statement and start building solutions that can change the world. 
              You can work on any problem statement regardless of the providing organization. Mix and match technologies, think outside the box!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="modern-button neon-button px-8 py-3 rounded-lg font-medium transition-all duration-300"
                onClick={() => window.open('https://unstop.com/hackathons/international-innovation-challenge-20-manipal-university-mu-jaipur-1527559', '_blank')}
              >
                Register Now
              </button>
              <button 
                className="glass-card hover:glass-card text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 border border-pink-400/30"
                onClick={() => window.open('/Guidelines.pdf', '_blank')}
              >
                View Guidelines
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProblemStatementsContent;