import React from 'react';

const Header = () => (
  <header className="bg-gradient-to-br from-[#3f87a6] to-[#ebf8e1] text-white py-12 text-center shadow-lg">
    <div className="max-w-6xl mx-auto px-4">
      <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wide">About Us</h1>
      <p className="mt-4 text-lg italic">Innovating the Future with Cutting-Edge Solutions</p>
    </div>
  </header>
);

const FuturisticBorder = () => (
  <div className="w-24 h-1 bg-gradient-to-br from-[#00e0ff] to-[#ff0080] mx-auto my-4"></div>
);

const Section = ({ title, children, bgColor = 'bg-[#1b1b1b]' }) => (
  <section className={`${bgColor} py-16 text-center`}>
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl text-[#00e0ff] uppercase mb-4">{title}</h2>
      <FuturisticBorder />
      {children}
    </div>
  </section>
);

const TeamMember = ({ name, role, img }) => (
  <div className="bg-gradient-to-br from-[#222] to-[#333] p-6 rounded-xl w-full sm:w-[80%] md:w-[30%] mb-8 shadow-md hover:-translate-y-2 hover:shadow-xl transition">
    <img
      src={img}
      alt={`Photo of ${name}, ${role}`}
      className="w-28 h-28 mx-auto rounded-full border-4 border-[#00e0ff] object-cover"
    />
    <h3 className="text-xl text-[#00e0ff] mt-4">{name}</h3>
    <p className="text-gray-300">{role}</p>
  </div>
);

const ServiceItem = ({ title, description }) => (
  <div className="bg-gradient-to-br from-[#222] to-[#333] p-6 rounded-xl w-full sm:w-[80%] md:w-[30%] mb-8 shadow-md hover:-translate-y-2 hover:shadow-xl transition">
    <h3 className="text-xl text-[#c994f5] mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

const About = () => (
  <main className="bg-[#111] text-[#ddd] font-sans">
    <Header />

    <Section title="Who We Are">
      <p className="max-w-3xl mx-auto text-lg text-gray-400">
        We are a team of experts driven by a passion for technology and innovation...
      </p>
    </Section>

    <Section title="Our Services" bgColor="bg-[#111]">
      <p className="max-w-3xl mx-auto text-lg text-gray-400">
        We provide cutting-edge services designed to accelerate your business growth...
      </p>
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        <ServiceItem
          title="Custom Software Development"
          description="We develop innovative software tailored to your business..."
        />
        <ServiceItem
          title="Digital Marketing"
          description="Our marketing experts help you grow your brand..."
        />
        <ServiceItem
          title="Consulting Services"
          description="Insightful strategies to help navigate your industry..."
        />
      </div>
    </Section>

    <Section title="Why Us">
      <p className="max-w-3xl mx-auto text-lg text-gray-400">
        We focus on delivering high-quality, futuristic solutions...
      </p>
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        <ServiceItem
          title="Expertise"
          description="Years of experience delivering exceptional results..."
        />
        <ServiceItem
          title="Client-Centric Approach"
          description="We tailor our services to meet your goals..."
        />
        <ServiceItem
          title="Proven Results"
          description="Helping businesses achieve their objectives..."
        />
      </div>
    </Section>

    <Section title="Our Mission">
      <p className="max-w-3xl mx-auto text-lg text-gray-400">
        At NovaTech Solutions, we are committed to delivering exceptional services with innovation, quality, and dedication...
      </p>
    </Section>
  </main>
);

export default About;
