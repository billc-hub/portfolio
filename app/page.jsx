'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const stats = [
    { label: 'Years of Experience', value: '30+', detail: 'Global tech & telecom leadership' },
    { label: 'Countries Scaled', value: '29+', detail: 'Africa, Middle East, Asia, USA' },
    { label: 'Workforce Governed', value: '15,000+', detail: 'Across board directorships' },
    { label: 'Venture Capital Raised', value: '$70M', detail: 'Sequoia, JAFCO, SingTel Innov8' },
  ];

  const featuredWork = [
    {
      title: 'Pan-African Enterprise Expansion',
      organization: 'iSON Technologies / Mara-Ison',
      role: 'Managing Director & Launch Leader',
      location: 'Pan-Africa / UAE / India',
      highlight: 'Built 41 offices across 21 African nations',
      description: 'Architected and launched a comprehensive Pan-African IT services company from inception. Expanded footprint into 21 African countries with 41 regional offices in addition to central hubs in Dubai and India, building cross-border teams across 18 local languages.',
      tags: ['Infrastructure', 'Pan-African Scaling', 'Enterprise IT'],
    },
    {
      title: 'Global Social & Telco Scale (200M+ Users)',
      organization: 'Bubble Motion (Bubbly)',
      role: 'V.P. Worldwide Sales',
      location: 'Singapore, Silicon Valley & Global',
      highlight: '$70M Raised & Forbes Top 15 Social Network',
      description: 'Helped raise $70M from Sequoia Capital, JAFCO, and SingTel Innov8. Built and scaled global carrier distribution agreements across 14 countries with major telecom operators, expanding user base to over 200 million subscribers.',
      tags: ['Telecom VAS', 'Venture Capital', 'User Scale'],
    },
    {
      title: 'Dominant Market VoIP Inception',
      organization: 'Net2Phone',
      role: 'Managing Director Asia Pacific',
      location: 'Singapore & India',
      highlight: '62% Retail VoIP Market Share in 12 Months',
      description: 'Spearheaded entry into India from ground zero, capturing 62% retail VoIP market share within the first 12 months. Established regional headquarters in Singapore and negotiated strategic agreements with telecom carriers across 16 major regional markets.',
      tags: ['Market Entry', 'Telecommunications', 'P&L Management'],
    },
    {
      title: 'Fintech & Working Capital Innovation',
      organization: 'Trade Capital Partners & Tribal Credit',
      role: 'Founder & Co-Founder',
      location: 'Dubai, UAE',
      highlight: 'Emerging Market B2B Financial Solutions',
      description: 'Founded Trade Capital Partners to optimize cross-border working capital and trade finance for enterprises. Previously co-founded Tribal Credit in Dubai, developing specialized corporate financial products for emerging market businesses.',
      tags: ['Fintech', 'Trade Finance', 'Venture Creation'],
    },
    {
      title: 'Enterprise Restructuring & Strategic Investment',
      organization: 'GDCS FZ',
      role: 'Chief Executive Officer',
      location: 'Dubai, UAE',
      highlight: 'Executive IT Advisory & Capital Deployment',
      description: 'Providing senior C-level advisory services for corporate restructuring, digital transformation, and strategic technology investments for international organizations.',
      tags: ['Advisory', 'Restructuring', 'Strategic Investment'],
    },
    {
      title: 'Subsea Cable & Bandwidth Infrastructure',
      organization: 'Dishnet SEACN',
      role: 'Senior V.P Sales & Marketing',
      location: 'India & Singapore',
      highlight: 'TyCom Co-Marketing & Dark Fibre Commercialization',
      description: 'Promoted undersea fiber optic project to financial institutions and investors. Negotiated major supply agreements and built strategic co-marketing partnerships with TyCom Ltd. (USA) for dark fibre bandwidth across the Asia Pacific corridor.',
      tags: ['Subsea Cable', 'Dark Fibre', 'Infrastructure'],
    },
  ];

  const experience = [
    {
      company: 'GDCS FZ',
      role: 'Chief Executive Officer',
      period: 'August 2024 – Present',
      location: 'Dubai, UAE',
      category: 'current',
      details: [
        'Providing IT business and restructuring advisory services.',
        'Directing strategic digital investments and enterprise realignment.',
      ],
    },
    {
      company: 'ISON Technologies',
      role: 'Managing Director and Board Member',
      period: 'August 2016 – Present',
      location: 'Dubai, UAE',
      category: 'current',
      details: [
        'Executive board governance and strategic growth stewardship for enterprise technology solutions.',
        'Guiding systems integration and managed IT services delivery across regional enterprise clients.',
      ],
    },
    {
      company: 'ISON Group Africa',
      role: 'Board Director',
      period: 'February 2014 – Present',
      location: 'Pan-Africa, Middle East & Asia',
      category: 'current',
      details: [
        'Active board governance for a multinational group employing over 15,000 people across 29 countries.',
        'High-level advisory on enterprise risk, multi-jurisdiction expansion, and operational resilience.',
      ],
    },
    {
      company: 'Trade Capital Partners',
      role: 'Founder',
      period: 'September 2020 – Present',
      location: 'Dubai, UAE',
      category: 'current',
      details: [
        'Founded trade and working capital financial technology venture headquartered in Dubai.',
        'Developing scalable funding structures and liquidity channels for growth markets.',
      ],
    },
    {
      company: 'Tribal Credit',
      role: 'Co-Founder',
      period: 'May 2019 – June 2020',
      location: 'Dubai, UAE',
      category: 'executive',
      details: [
        'Co-founded corporate card and B2B payment platform designed for emerging market business needs.',
        'Navigated regulatory landscapes and structured early institutional partnerships.',
      ],
    },
    {
      company: 'TASC Outsourcing',
      role: 'Chief Operating Officer',
      period: 'January 2015 – December 2015',
      location: 'Dubai, Abu Dhabi, Bangalore',
      category: 'executive',
      details: [
        'Directed end-to-end operational execution for staffing and managed services across the UAE and India.',
        'Streamlined multi-city operational workflows and enterprise service delivery.',
      ],
    },
    {
      company: 'iSON Technologies (Mara-Ison)',
      role: 'Managing Director',
      period: 'February 2011 – April 2014',
      location: 'UAE / Pan Africa',
      category: 'executive',
      details: [
        'Built a Pan-African IT services company from zero into 41 offices across 21 African countries plus Dubai and India.',
        'Scaled operational teams to over 400 personnel speaking 18 local languages, reporting directly to shareholders.',
      ],
    },
    {
      company: 'ESCO Audio Visual Ltd',
      role: 'Board Member & Managing Director, Promoter',
      period: 'February 1992 – February 2013 (21 Years)',
      location: 'Singapore & SE Asia',
      category: 'executive',
      details: [
        'Served as Board Member (1992–2013) and Managing Director/Promoter (1992–1997).',
        'Expanded operations from Singapore to Malaysia, Hong Kong, Philippines, India, and Indonesia, growing footprint from 1 to 6 regional offices.',
      ],
    },
    {
      company: 'Bubble Motion (Bubbly)',
      role: 'V.P. Worldwide Sales & V.P. Sales Asia Pac / MEA',
      period: 'September 2005 – April 2011',
      location: 'Singapore & Global',
      category: 'executive',
      details: [
        'Bubbly raised $70M from Sequoia Capital, JAFCO, and SingTel Innov8; reached 200M+ users across 14 countries.',
        'Built an internal international sales force covering Asia Pacific, Japan, India, Middle East, Turkey, Africa, Europe, USA, and Latam.',
        'Ranked in Forbes top 15 most successful social networks.',
      ],
    },
    {
      company: 'Net2Phone',
      role: 'Managing Director Asia Pacific',
      period: 'February 2002 – April 2005',
      location: 'Singapore',
      category: 'executive',
      details: [
        'Established Net2Phone in India, achieving 62% market share of retail VoIP minutes in 12 months.',
        'Built Singapore regional headquarters and executed P&L strategy covering 16 major Asia Pacific markets.',
      ],
    },
    {
      company: 'Dishnet SEACN',
      role: 'Senior V.P Sales & Marketing',
      period: 'October 1999 – February 2002',
      location: 'Chennai Area, India & Singapore',
      category: 'telecom',
      details: [
        'Led business and marketing plans from project inception to institutional investors and regulatory bodies.',
        'Negotiated main supply contracts and established co-marketing agreement with TyCom Ltd. (USA) for dark fibre.',
      ],
    },
    {
      company: 'Silverslate Ltd',
      role: 'Partner / Promoter',
      period: 'February 1998 – November 1999',
      location: 'London, UK & Belgium',
      category: 'telecom',
      details: [
        'Delivered software development and niche manpower services focused on telecom switching infrastructure and GSM base station control.',
      ],
    },
    {
      company: 'IBM Offshore Operations',
      role: 'Sales Executive',
      period: 'January 1986 – February 1992 (6 Years)',
      location: 'Perth & Sydney, Australia & India',
      category: 'telecom',
      details: [
        'Started career at IBM as part of the Offshore Operations team (IBM pre-reentry team to India).',
        'Led enterprise client accounts in Oil & Gas, Steel Industry, and West Australian Public Sector.',
      ],
    },
  ];

  const competencies = [
    { title: 'Global Market Expansion', desc: 'Hands-on operational launch across 29+ countries in Africa, Middle East, Asia Pacific, and North America.' },
    { title: 'Board Governance & Advisory', desc: 'Board stewardship for enterprises employing over 15,000 personnel across systems integration, MSP, and BPO sectors.' },
    { title: 'Business Startup & Blitzscaling', desc: 'Certified in Blitzscaling methodology (Reid Hoffman & Chris Yeh); scaling startups rapidly through uncertain growth phases.' },
    { title: 'Go-To-Market & P&L Leadership', desc: 'Full commercial P&L accountability, market sizing, channel development, and partner network architecture.' },
    { title: 'Partner & Telco Alliances', desc: 'Extensive track record negotiating carrier distribution, dark fibre pacts, and joint ventures with global telecom providers.' },
    { title: 'Fintech & Capital Structuring', desc: 'Founding and scaling trade finance and corporate card ventures tailored to underserved emerging market enterprises.' },
  ];

  const filteredExperience = selectedCategory === 'all' 
    ? experience 
    : experience.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 flex flex-col justify-between selection:bg-gold-500 selection:text-navy-950">
      
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-navy-950/90 backdrop-blur-md border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="#top" className="flex items-center gap-3.5 group">
            <div className="w-11 h-11 rounded-lg bg-navy-900 border border-gold-500/40 flex items-center justify-center group-hover:border-gold-500 transition-colors">
              <span className="font-serif font-bold text-gold-400 text-lg tracking-wider">BC</span>
            </div>
            <div>
              <span className="block text-base font-bold text-white group-hover:text-gold-400 transition-colors">Bill Crawley</span>
              <span className="block text-xs uppercase tracking-widest text-slate-400">Dubai, United Arab Emirates</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-gold-400 transition-colors">About</a>
            <a href="#work" className="hover:text-gold-400 transition-colors">Featured Work</a>
            <a href="#experience" className="hover:text-gold-400 transition-colors">Experience</a>
            <a href="#competencies" className="hover:text-gold-400 transition-colors">Competencies</a>
            <a href="#education" className="hover:text-gold-400 transition-colors">Education</a>
            <a href="#contact" className="hover:text-gold-400 transition-colors">Contact</a>
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a 
              href="https://www.linkedin.com/in/bill-crawley-21b73a382/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-200 bg-navy-900 hover:bg-navy-800 border border-navy-700 transition-all flex items-center gap-1.5"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/billc-hub" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-200 bg-navy-900 hover:bg-navy-800 border border-navy-700 transition-all flex items-center gap-1.5"
            >
              GitHub
            </a>
            <a 
              href="#contact" 
              className="px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-navy-950 bg-gold-500 hover:bg-gold-400 transition-all shadow-md"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-navy-800 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-navy-900 border-b border-navy-800 px-6 py-4 space-y-3">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-slate-300 hover:text-gold-400">About</a>
            <a href="#work" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-slate-300 hover:text-gold-400">Featured Work</a>
            <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-slate-300 hover:text-gold-400">Experience</a>
            <a href="#competencies" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-slate-300 hover:text-gold-400">Competencies</a>
            <a href="#education" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-slate-300 hover:text-gold-400">Education</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-slate-300 hover:text-gold-400">Contact</a>
            <div className="pt-3 border-t border-navy-800 flex flex-wrap gap-2">
              <a href="https://www.linkedin.com/in/bill-crawley-21b73a382/" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded text-xs bg-navy-800 text-slate-200">LinkedIn</a>
              <a href="https://github.com/billc-hub" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded text-xs bg-navy-800 text-slate-200">GitHub</a>
              <a href="/Bill Resume Profile.pdf" target="_blank" className="px-3 py-1.5 rounded text-xs bg-gold-500 text-navy-950 font-semibold">Download CV</a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main id="top" className="flex-1">

        {/* Hero Section */}
        <section className="pt-20 pb-24 border-b border-navy-800/80">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-8 space-y-6">
                <div className="inline-block text-xs font-semibold uppercase tracking-wider text-gold-400 bg-navy-900 border border-gold-500/30 px-3 py-1.5 rounded-md">
                  Dubai, United Arab Emirates &bull; Global Executive & Board Director
                </div>

                <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-none">
                  Bill Crawley
                </h1>

                <p className="text-xl sm:text-2xl text-slate-300 font-serif font-light leading-snug">
                  Founder, CEO & Global Business Executive
                </p>

                <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
                  More than 30 years of global leadership building and scaling high-growth enterprises across 
                  <span className="text-slate-200 font-medium"> Africa, the Middle East, Asia Pacific, and the United States</span>. 
                  Specializing in emerging market venture startup, P&L stewardship, multinational board governance, and global expansion.
                </p>

                {/* Primary Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a 
                    href="#contact" 
                    className="px-6 py-3 rounded-lg text-sm font-bold text-navy-950 bg-gold-500 hover:bg-gold-400 transition-all shadow-lg"
                  >
                    Contact Bill
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/bill-crawley-21b73a382/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-lg text-sm font-semibold text-slate-200 bg-navy-900 hover:bg-navy-800 border border-navy-700 transition-all flex items-center gap-2"
                  >
                    LinkedIn Profile
                  </a>
                  <a 
                    href="https://github.com/billc-hub" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-lg text-sm font-semibold text-slate-200 bg-navy-900 hover:bg-navy-800 border border-navy-700 transition-all flex items-center gap-2"
                  >
                    GitHub
                  </a>
                  <a 
                    href="/Bill Resume Profile.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-lg text-sm font-semibold text-slate-300 hover:text-white bg-navy-800/60 hover:bg-navy-800 border border-slate-700 transition-all"
                  >
                    Download PDF CV
                  </a>
                </div>
              </div>

              {/* Right Profile Shield Card */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="w-full max-w-sm rounded-2xl bg-navy-900 border border-navy-700 p-8 text-center shadow-xl">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-navy-800 border-2 border-gold-500/50 flex items-center justify-center">
                    <span className="font-serif text-3xl font-bold text-gold-400 tracking-wider">BC</span>
                  </div>

                  <h3 className="text-xl font-bold text-white">Bill Crawley</h3>
                  <p className="text-xs text-gold-400 uppercase tracking-widest mt-1 font-semibold">Chief Executive Officer</p>
                  
                  <div className="my-6 border-t border-navy-800"></div>

                  <div className="space-y-3 text-left text-xs text-slate-300">
                    <div className="flex justify-between items-center py-1 border-b border-navy-800/60">
                      <span className="text-slate-400">Headquarters</span>
                      <span className="font-medium text-white">Dubai, UAE</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-navy-800/60">
                      <span className="text-slate-400">Direct Email</span>
                      <a href="mailto:bill@tcp.finance" className="text-gold-400 hover:underline">bill@tcp.finance</a>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-navy-800/60">
                      <span className="text-slate-400">Direct Phone</span>
                      <a href="tel:+971567378988" className="text-slate-200">+971 56 737 8988</a>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-navy-800/60">
                      <span className="text-slate-400">Certification</span>
                      <span className="text-slate-200">Blitzscaling</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-navy-800 text-[11px] text-slate-400">
                    Board Member &bull; Emerging Markets &bull; Scale
                  </div>
                </div>
              </div>

            </div>

            {/* Metric Counters Banner */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-10 border-t border-navy-800/80">
              {stats.map((stat, i) => (
                <div key={i} className="p-5 rounded-xl bg-navy-900/60 border border-navy-800">
                  <div className="text-3xl sm:text-4xl font-extrabold text-gold-400 font-serif">{stat.value}</div>
                  <div className="text-sm font-bold text-white mt-1">{stat.label}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{stat.detail}</div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="py-24 bg-navy-900/40 border-b border-navy-800/80">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="max-w-3xl mb-12">
              <h2 className="text-xs uppercase tracking-widest text-gold-400 font-semibold mb-2">Executive Overview</h2>
              <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Decades of Scale, Governance, and Expansion</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-300 text-base leading-relaxed">
              <div className="p-8 rounded-2xl bg-navy-900 border border-navy-800 space-y-4">
                <h4 className="text-lg font-bold text-white font-serif flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-gold-400"></span>
                  Origins & International Track Record
                </h4>
                <p>
                  Bill started his career at <strong>IBM</strong> and brings more than <strong>30 years of global executive experience</strong> to his leadership roles based in Dubai. He has a long history of building internationally successful, high-growth businesses with a particular focus on growth and emerging markets.
                </p>
                <p>
                  His proven expertise spans <strong>Business Startup, Global Expansion, Strategic Planning, Strategic Marketing, High-Stakes Negotiation, Partner Management,</strong> and <strong>Go-to-Market Business Planning</strong>.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-navy-900 border border-navy-800 space-y-4">
                <h4 className="text-lg font-bold text-white font-serif flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent-blue"></span>
                  Pan-Regional Scaling & Board Governance
                </h4>
                <p>
                  Recently, Bill served as the start-up Managing Director/CEO of <strong>MARA ISON</strong>, opening operations across <strong>23 countries in the Middle East and Africa</strong> with a team of over 400 people and 18 local languages.
                </p>
                <p>
                  In addition, Bill has held numerous <strong>Board of Director and advisory board positions</strong> for leading Systems Integration, Managed Service Providers (MSPs), BPO, and Value-Added Services companies across Dubai, Egypt, Singapore, Philippines, India, Africa, the UK, and the USA. Current appointments include <strong>ISON Group</strong>, employing over 15,000 people across 29 countries.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Featured Work & Real Scaling Projects */}
        <section id="work" className="py-24 border-b border-navy-800/80">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="max-w-3xl mb-16">
              <h2 className="text-xs uppercase tracking-widest text-gold-400 font-semibold mb-2">Proven Track Record</h2>
              <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Key Ventures & Scaling Milestones</h3>
              <p className="text-slate-400 mt-3 text-base">
                Major real-world initiatives founded, launched, and scaled over 30+ years in technology, telecommunications, and finance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredWork.map((project, idx) => (
                <div key={idx} className="p-7 rounded-2xl bg-navy-900 border border-navy-800 flex flex-col justify-between hover:border-gold-500/40 transition-all">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-gold-400 font-semibold mb-2">{project.organization}</div>
                    <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                    <div className="text-xs text-accent-blue font-medium mb-3">{project.highlight}</div>
                    <p className="text-sm text-slate-300 leading-relaxed">{project.description}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-navy-800 flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="px-2 py-0.5 rounded bg-navy-800 text-[11px] text-slate-300 border border-navy-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Work Experience Section */}
        <section id="experience" className="py-24 bg-navy-900/40 border-b border-navy-800/80">
          <div className="max-w-5xl mx-auto px-6">
            
            <div className="max-w-3xl mb-12">
              <h2 className="text-xs uppercase tracking-widest text-gold-400 font-semibold mb-2">Verified Experience</h2>
              <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Career Appointments & Timeline</h3>
              <p className="text-slate-400 mt-2 text-sm">Full chronological executive history from recent board and CEO directorships through early IBM sales leadership.</p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 mb-10">
              <button 
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${selectedCategory === 'all' ? 'bg-gold-500 text-navy-950' : 'bg-navy-900 text-slate-300 hover:bg-navy-800 border border-navy-800'}`}
              >
                All Roles ({experience.length})
              </button>
              <button 
                onClick={() => setSelectedCategory('current')}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${selectedCategory === 'current' ? 'bg-gold-500 text-navy-950' : 'bg-navy-900 text-slate-300 hover:bg-navy-800 border border-navy-800'}`}
              >
                Current Appointments
              </button>
              <button 
                onClick={() => setSelectedCategory('executive')}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${selectedCategory === 'executive' ? 'bg-gold-500 text-navy-950' : 'bg-navy-900 text-slate-300 hover:bg-navy-800 border border-navy-800'}`}
              >
                Executive Scaling
              </button>
              <button 
                onClick={() => setSelectedCategory('telecom')}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${selectedCategory === 'telecom' ? 'bg-gold-500 text-navy-950' : 'bg-navy-900 text-slate-300 hover:bg-navy-800 border border-navy-800'}`}
              >
                Telecom & Tech Foundation
              </button>
            </div>

            {/* Timeline List */}
            <div className="space-y-6">
              {filteredExperience.map((item, idx) => (
                <div key={idx} className="p-7 rounded-2xl bg-navy-900 border border-navy-800 hover:border-slate-700 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h4 className="text-xl font-bold text-white">{item.company}</h4>
                      <p className="text-gold-400 font-semibold text-sm">{item.role}</p>
                    </div>
                    <div className="text-xs font-semibold px-3 py-1 rounded bg-navy-800 text-slate-300 border border-navy-700 self-start sm:self-auto">
                      {item.period} &bull; {item.location}
                    </div>
                  </div>
                  <ul className="space-y-1.5 text-slate-300 text-sm list-disc pl-5">
                    {item.details.map((detail, dIdx) => (
                      <li key={dIdx} className="leading-relaxed">{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Skills & Core Competencies */}
        <section id="competencies" className="py-24 border-b border-navy-800/80">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="max-w-3xl mb-16">
              <h2 className="text-xs uppercase tracking-widest text-gold-400 font-semibold mb-2">Executive Competencies</h2>
              <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Capabilities & Specializations</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {competencies.map((comp, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-navy-900 border border-navy-800">
                  <h4 className="text-base font-bold text-white mb-2">{comp.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{comp.desc}</p>
                </div>
              ))}
            </div>

            {/* Verified Endorsed Skills */}
            <div className="mt-12 p-8 rounded-2xl bg-navy-900/60 border border-navy-800">
              <h4 className="text-sm uppercase tracking-wider text-slate-400 font-semibold mb-4">Top Skills from LinkedIn Profile</h4>
              <div className="flex flex-wrap gap-2.5">
                {['Product Management', 'Business Development', 'Management', 'Global Expansion', 'Strategic Planning', 'Strategic Marketing', 'High-Stakes Negotiation', 'Partner Management', 'Go to Market Business Planning', 'Board Governance', 'Emerging Markets'].map((skill, sIdx) => (
                  <span key={sIdx} className="px-4 py-2 rounded-lg bg-navy-800 text-slate-200 text-xs font-medium border border-navy-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Education & Certifications */}
        <section id="education" className="py-24 bg-navy-900/40 border-b border-navy-800/80">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Academic */}
              <div>
                <h2 className="text-xs uppercase tracking-widest text-gold-400 font-semibold mb-2">Academic Foundation</h2>
                <h3 className="text-3xl font-bold text-white mb-6">Education</h3>
                
                <div className="space-y-4">
                  <div className="p-6 rounded-2xl bg-navy-900 border border-navy-800">
                    <span className="text-xs font-semibold text-gold-400">1982 – 1986</span>
                    <h4 className="text-lg font-bold text-white mt-1">The University of Western Australia</h4>
                    <p className="text-sm text-slate-300">Master’s Degree, Education</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-navy-900 border border-navy-800">
                    <h4 className="text-lg font-bold text-white">The University of Western Australia</h4>
                    <p className="text-sm text-slate-300">Bachelor’s Degree, BPEd</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-navy-900 border border-navy-800">
                    <h4 className="text-lg font-bold text-white">Mount Lawley High School</h4>
                    <p className="text-sm text-slate-400">Western Australia</p>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h2 className="text-xs uppercase tracking-widest text-gold-400 font-semibold mb-2">Professional Accreditation</h2>
                <h3 className="text-3xl font-bold text-white mb-6">Certifications</h3>
                
                <div className="p-7 rounded-2xl bg-navy-900 border border-navy-800 border-l-4 border-l-gold-500">
                  <div className="text-xs uppercase tracking-widest text-gold-400 font-bold mb-1">Executive Program</div>
                  <h4 className="text-xl font-bold text-white">Blitzscaling</h4>
                  <p className="text-slate-300 text-sm mt-1">Certified by Reid Hoffman and Chris Yeh</p>
                  <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                    Frameworks and operational methodologies for driving hyper-growth, structuring multi-market expansion, and navigating extreme uncertainty at global enterprise scale.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24">
          <div className="max-w-4xl mx-auto px-6 text-center">
            
            <div className="w-16 h-16 rounded-2xl bg-navy-900 border-2 border-gold-500 text-gold-400 font-serif font-bold text-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
              BC
            </div>

            <h2 className="text-xs uppercase tracking-widest text-gold-400 font-semibold mb-2">Connect Directly</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">Board, Advisory & Strategic Inquiries</h3>
            <p className="text-slate-300 max-w-xl mx-auto text-base mb-10">
              Based in Dubai with active board directorships, advisory engagements, and venture investments worldwide.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
              
              <a href="mailto:bill@tcp.finance" className="p-6 rounded-2xl bg-navy-900 border border-navy-800 hover:border-gold-500/50 transition-all block">
                <div className="text-xs uppercase tracking-wider text-slate-400 mb-1">Direct Email</div>
                <div className="text-sm font-bold text-white truncate">bill@tcp.finance</div>
                <div className="text-xs text-gold-400 mt-3 font-medium">Send Email &rarr;</div>
              </a>

              <a href="tel:+971567378988" className="p-6 rounded-2xl bg-navy-900 border border-navy-800 hover:border-gold-500/50 transition-all block">
                <div className="text-xs uppercase tracking-wider text-slate-400 mb-1">Direct Phone</div>
                <div className="text-sm font-bold text-white">+971 56 737 8988</div>
                <div className="text-xs text-gold-400 mt-3 font-medium">Call Mobile &rarr;</div>
              </a>

              <a 
                href="https://www.linkedin.com/in/bill-crawley-21b73a382/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-6 rounded-2xl bg-navy-900 border border-navy-800 hover:border-gold-500/50 transition-all block"
              >
                <div className="text-xs uppercase tracking-wider text-slate-400 mb-1">LinkedIn</div>
                <div className="text-sm font-bold text-white truncate">Bill Crawley</div>
                <div className="text-xs text-accent-blue mt-3 font-medium">View Profile &rarr;</div>
              </a>

              <a 
                href="https://github.com/billc-hub" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-6 rounded-2xl bg-navy-900 border border-navy-800 hover:border-gold-500/50 transition-all block"
              >
                <div className="text-xs uppercase tracking-wider text-slate-400 mb-1">GitHub</div>
                <div className="text-sm font-bold text-white truncate">billc-hub</div>
                <div className="text-xs text-slate-300 mt-3 font-medium">View Repos &rarr;</div>
              </a>

            </div>

          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-navy-950 border-t border-navy-800/80 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-300">Bill Crawley</span>
            <span>&bull;</span>
            <span>Executive Portfolio</span>
            <span>&bull;</span>
            <span>Dubai, United Arab Emirates</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/in/bill-crawley-21b73a382/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300">LinkedIn</a>
            <a href="https://github.com/billc-hub" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300">GitHub</a>
            <a href="/Bill Resume Profile.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300">Resume PDF</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
