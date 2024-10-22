import React from 'react';
import { Brain, Cpu, Mic } from 'lucide-react';

const services = [
  {
    icon: <Brain className="h-12 w-12 text-electric-blue" />,
    title: 'Chatbot Development',
    description: 'Harness the power of AI to create intelligent, responsive chatbots that enhance customer interactions and automate support effortlessly.',
  },
  {
    icon: <Cpu className="h-12 w-12 text-electric-blue" />,
    title: 'Workflow Automation',
    description: 'Streamline your processes with AI-driven automation that boosts efficiency and reduces manual tasks, optimizing workflows from end to end.',
  },
  {
    icon: <Mic className="h-12 w-12 text-electric-blue" />,
    title: 'Voice Agent Development',
    description: 'Develop advanced voice AI solutions that enable seamless voice interactions, bringing powerful, natural speech capabilities to your applications.',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-black p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-neon hover:scale-105"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-center mb-2">{service.title}</h3>
              <p className="text-gray-400 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;