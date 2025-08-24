import React from 'react';

const Header = () => (
  <header className="bg-[#0f172a] text-[#e2e8f0] py-12 text-center shadow-lg">
    <div className="max-w-6xl mx-auto px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-400 uppercase tracking-wide">About Us</h1>
      <p className="mt-4 text-lg italic">Innovating the Future with Cutting-Edge Solutions</p>
    </div>
  </header>
);

const Card = ({ children }) => (
  <div className="bg-[#1e293b] text-[#e2e8f0] p-6 rounded-xl shadow-md hover:shadow-xl transition w-full sm:w-[80%] md:w-[30%] mb-8">
    {children}
  </div>
);

const Section = ({ title, children }) => (
  <section className="bg-[#0f172a] py-12 text-center">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl uppercase mb-4 text-blue-500">{title}</h2>
      <div className="w-24 h-1 bg-[#e2e8f0] mx-auto mb-4"></div>
      {children}
    </div>
  </section>
);

const ServiceItem = ({ title, description }) => (
  <Card>
    <h3 className="text-xl font-semibold mb-2 text-purple-400">{title}</h3>
    <p>{description}</p>
  </Card>
);

const About = () => (
  <main className="bg-[#0f172a] font-sans">
    <Header />

    <Section title="Who We Are">
      <div className='text-[#f1f5f9] text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed'>
        <p>
          We are a team of experts driven by a passion for technology and innovation...
        </p>
      </div>
    </Section>

    <Section title="Our Services">
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
      <div className='text-[#f1f5f9] text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed'>
        <p>
          At Jambavan Software Systems, we are committed to delivering exceptional services with innovation, quality, and dedication...
        </p>
      </div>
    </Section>
  </main>
);

export default About;
