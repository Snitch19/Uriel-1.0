import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageTab } from '../types';
import { UrielLogo } from './UrielLogo';

interface AboutScreenProps {
  setActiveTab: (tab: PageTab) => void;
}

export const AboutScreen: React.FC<AboutScreenProps> = ({ setActiveTab }) => {
  const [activePhase, setActivePhase] = useState<number>(1);

  const phases = [
    {
      step: '01',
      title: 'Learn',
      subtitle: 'Modern Technical Fundamentals',
      description:
        'Intensive hands-on curriculum spanning Full-Stack Software Engineering (React, Node.js, databases, REST APIs), UI/UX & Digital Product Design (Figma, design systems, user research), and AI workflow integration.',
      tag: '12-Week Immersion',
    },
    {
      step: '02',
      title: 'Practise',
      subtitle: 'Unrestricted Hardware & Power',
      description:
        'Overcoming "The Practice Gap" by granting students daily hands-on access to dedicated multi-monitor Core i7 workstations, 24/7 hybrid solar power (zero blackout downtime), and low-latency Starlink connectivity.',
      tag: '40 Terminals',
    },
    {
      step: '03',
      title: 'Build',
      subtitle: 'Live Production Applications',
      description:
        'Moving past toy code. Every student builds and ships real-world systems—like university hostel management portals, client web apps, and community software—graduating with a verifiable live portfolio.',
      tag: '18+ Deployed Systems',
    },
    {
      step: '04',
      title: 'Progress',
      subtitle: 'Economic Independence',
      description:
        'Direct transition into global freelance marketplaces, remote international engineering roles, and our in-house student development studio that pays students while they continue honing their craft.',
      tag: '88% Placement',
    },
  ];

  const handleSponsor = () => {
    setActiveTab('partnership');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.hash = 'partnership';
  };

  const handleContact = () => {
    setActiveTab('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.hash = 'contact';
  };

  return (
    <div className="flex flex-col w-full text-ink">
      <div className="max-w-4xl mx-auto px-3.5 sm:px-6 w-full py-6 sm:py-12 md:py-16 space-y-12 sm:space-y-18">
        
        {/* Editorial Vision Header */}
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-4 sm:space-y-5 max-w-2xl mx-auto pt-1 sm:pt-2"
        >
          <div className="flex items-center justify-center">
            <UrielLogo size={52} variant="orange-bg" className="shadow-xs sm:w-[58px] sm:h-[58px]" />
          </div>

          <div className="inline-flex items-center flex-wrap justify-center gap-1.5 sm:gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-container border border-border-line text-[11px] sm:text-xs font-mono text-mute shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
            <span className="font-semibold text-ink">Vision Prospectus</span>
            <span>•</span>
            <span>Ekpoma Hub Project</span>
          </div>

          <h1 className="font-display text-2xl min-[380px]:text-3xl sm:text-5xl lg:text-6xl text-ink font-extrabold tracking-tight leading-[1.12]">
            The Blueprint for Edo State's Next Generation of <span className="text-primary font-editorial-italic font-normal">Builders</span>.
          </h1>

          <p className="font-sans text-sm sm:text-base md:text-lg text-mute max-w-xl mx-auto leading-relaxed">
            Turning raw ambition into self-sustaining tech careers in Ekpoma by eliminating the hardware and energy barriers holding young African engineers back.
          </p>

          {/* Formula Callout */}
          <div className="p-3 sm:p-4 rounded-xl bg-primary-container/60 border border-primary/20 text-xs sm:text-sm font-mono text-primary-text font-bold text-center">
            Knowledge + Hardware + 24/7 Solar + Enterprise Internet = Career Pathways
          </div>
        </motion.header>

        {/* Demonstrated Track Record Metrics */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 text-center">
          <motion.div whileHover={{ y: -2 }} className="p-4 sm:p-5 rounded-xl bg-surface-card border border-border-line shadow-xs">
            <span className="font-display text-[11px] sm:text-xs font-semibold text-mute uppercase tracking-wider block">Track Record</span>
            <div className="font-display text-2xl min-[400px]:text-3xl sm:text-4xl text-ink font-extrabold tracking-tight mt-1">4 Years</div>
            <span className="font-sans text-[11px] sm:text-xs text-mute mt-0.5 block">Grassroots hub</span>
          </motion.div>

          <motion.div whileHover={{ y: -2 }} className="p-4 sm:p-5 rounded-xl bg-surface-card border border-border-line shadow-xs">
            <span className="font-display text-[11px] sm:text-xs font-semibold text-mute uppercase tracking-wider block">Students Trained</span>
            <div className="font-display text-2xl min-[400px]:text-3xl sm:text-4xl text-primary font-extrabold tracking-tight mt-1">100+</div>
            <span className="font-sans text-[11px] sm:text-xs text-mute mt-0.5 block">Full-Stack &amp; UI/UX</span>
          </motion.div>

          <motion.div whileHover={{ y: -2 }} className="p-4 sm:p-5 rounded-xl bg-surface-card border border-border-line shadow-xs">
            <span className="font-display text-[11px] sm:text-xs font-semibold text-mute uppercase tracking-wider block">Completion Rate</span>
            <div className="font-display text-2xl min-[400px]:text-3xl sm:text-4xl text-ink font-extrabold tracking-tight mt-1">88%</div>
            <span className="font-sans text-[11px] sm:text-xs text-mute mt-0.5 block">Cohort retention</span>
          </motion.div>

          <motion.div whileHover={{ y: -2 }} className="p-4 sm:p-5 rounded-xl bg-surface-card border border-border-line shadow-xs">
            <span className="font-display text-[11px] sm:text-xs font-semibold text-mute uppercase tracking-wider block">Live Systems</span>
            <div className="font-display text-2xl min-[400px]:text-3xl sm:text-4xl text-primary font-extrabold tracking-tight mt-1">18+</div>
            <span className="font-sans text-[11px] sm:text-xs text-mute mt-0.5 block">Shipped to production</span>
          </motion.div>
        </section>

        {/* Section: Solving "The Practice Gap" */}
        <section className="p-5 sm:p-8 rounded-2xl bg-surface-card border border-border-line space-y-6 shadow-xs">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-xs font-mono text-primary font-bold">
              <span>The Ground Reality</span>
            </div>
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-ink tracking-tight">
              Solving "The Practice Gap" in Ekpoma
            </h2>
          </div>

          <div className="space-y-4 font-sans text-sm sm:text-base text-mute leading-relaxed">
            <p>
              Walk through the university town of Ekpoma, Edo State—home to Ambrose Alli University (AAU)—and you will find hundreds of young minds with the raw drive and intellect of Silicon Valley engineers. They spend hours watching YouTube coding tutorials and digital product design lectures on borrowed devices.
            </p>
            <p className="p-4 rounded-xl bg-surface-container border-l-4 border-primary text-ink font-medium">
              "The ambition is undeniably there. But when it is time to write the code or compile the application, they hit a hard wall: <span className="text-primary font-bold">they are trying to build the future on cracked mobile phone screens</span>."
            </p>
            <p>
              Online educational material is free, but practical application is expensive. Without a personal laptop, without stable electricity, and without reliable internet, theoretical knowledge stagnates. <strong>This is The Practice Gap.</strong>
            </p>
          </div>

          {/* 3 Critical Infrastructure Ceilings */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
            <div className="p-4 rounded-xl bg-surface-container border border-border-line space-y-2">
              <span className="material-symbols-outlined text-primary text-2xl">laptop_chromebook</span>
              <h4 className="font-display text-sm font-bold text-ink">Hardware Deficit</h4>
              <p className="font-sans text-xs text-mute leading-relaxed">
                Most students cannot afford personal laptops capable of compiling modern React/Node frameworks or Figma design canvases.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-surface-container border border-border-line space-y-2">
              <span className="material-symbols-outlined text-primary text-2xl">power_off</span>
              <h4 className="font-display text-sm font-bold text-ink">Grid Instability</h4>
              <p className="font-sans text-xs text-mute leading-relaxed">
                Frequent regional blackouts interrupt deep coding sessions and prevent students from meeting remote client deadlines.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-surface-container border border-border-line space-y-2">
              <span className="material-symbols-outlined text-primary text-2xl">wifi_off</span>
              <h4 className="font-display text-sm font-bold text-ink">Data Plan Costs</h4>
              <p className="font-sans text-xs text-mute leading-relaxed">
                Fluctuating mobile carrier data bundles make it cost-prohibitive to clone repositories, run Docker containers, or attend remote standups.
              </p>
            </div>
          </div>

          {/* The Current Bottleneck Alert */}
          <div className="p-4 sm:p-5 rounded-xl bg-primary-container/30 border border-primary/25 space-y-1.5">
            <div className="flex items-center gap-2 text-primary font-display font-bold text-sm">
              <span className="material-symbols-outlined text-[18px]">warning</span>
              <span>Our Current Bottleneck</span>
            </div>
            <p className="font-sans text-xs sm:text-sm text-mute leading-relaxed">
              Because hardware has been too expensive for us to purchase in bulk, our training has been heavily restricted. We have been forced to admit mainly those who already own personal computers—turning away hundreds of hungry, brilliant youths who simply cannot afford the initial hardware. <strong>Funding workstations changes this overnight.</strong>
            </p>
          </div>
        </section>

        {/* Section: The 4-Phase Ecosystem Blueprint */}
        <section className="space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-border-line">
            <div>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-ink tracking-tight">
                The Uriel Ecosystem Blueprint
              </h2>
              <p className="font-sans text-xs sm:text-sm text-mute mt-0.5">
                A structured, 4-phase talent incubation pipeline engineered to eliminate theoretical stagnation.
              </p>
            </div>
            <span className="font-mono text-xs font-bold text-primary bg-surface-container px-3 py-1 rounded-full border border-border-line w-fit">
              Learn → Practise → Build → Progress
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 items-stretch">
            {phases.map((phase, idx) => {
              const num = idx + 1;
              const isSelected = activePhase === num;
              return (
                <motion.div
                  key={phase.step}
                  onClick={() => setActivePhase(num)}
                  whileHover={{ y: -3 }}
                  className={`p-4 sm:p-5 rounded-2xl bg-surface-card border flex flex-col justify-between space-y-3 cursor-pointer transition-all shadow-xs ${
                    isSelected
                      ? 'border-primary ring-2 ring-primary/20 shadow-sm'
                      : 'border-border-line hover:border-outline'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-extrabold text-primary px-2 py-0.5 rounded bg-primary-container">
                        Phase {phase.step}
                      </span>
                      <span className="font-mono text-[11px] text-mute">{phase.tag}</span>
                    </div>

                    <h3 className="font-display text-lg font-bold text-ink tracking-tight">
                      {phase.title}
                    </h3>

                    <h4 className="font-display text-xs font-semibold text-primary">
                      {phase.subtitle}
                    </h4>

                    <p className="font-sans text-xs sm:text-sm text-mute leading-relaxed pt-1">
                      {phase.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-border-line flex items-center justify-between text-xs text-primary font-display font-semibold">
                    <span>{isSelected ? 'Active Focus' : 'Inspect Phase'}</span>
                    <span>→</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Section: What Proper Funding Unlocks (Comparison Table) */}
        <section className="p-4 sm:p-7 rounded-2xl bg-surface-card border border-border-line space-y-5 shadow-xs">
          <div>
            <h2 className="font-display text-lg sm:text-xl md:text-2xl font-bold text-ink tracking-tight">
              The Vision: What Proper Funding Unlocks
            </h2>
            <p className="font-sans text-xs sm:text-sm text-mute mt-1">
              We are not looking for funding to rewrite a syllabus or print certificates. We are building the physical engine of creation in Ekpoma.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left font-sans text-xs sm:text-sm border-collapse min-w-[560px]">
              <thead>
                <tr className="border-b border-border-line text-mute font-display text-[11px] sm:text-xs uppercase tracking-wider">
                  <th className="py-3 px-3">The Barrier</th>
                  <th className="py-3 px-3">Our Current Reality</th>
                  <th className="py-3 px-3 text-primary">With Proper Funding &amp; Resources</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-line">
                <tr>
                  <td className="py-3.5 px-3 font-display font-bold text-ink">Hardware Access</td>
                  <td className="py-3.5 px-3 text-mute">We can only train students who bring laptops, leaving the most vulnerable behind.</td>
                  <td className="py-3.5 px-3 font-medium text-ink bg-primary-container/20 rounded">
                    <strong className="text-primary font-bold">40 Dedicated Workstations:</strong> Pre-configured Core i7 developer desktops democratizing access for all.
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-3 font-display font-bold text-ink">Power Stability</td>
                  <td className="py-3.5 px-3 text-mute">Classes and practice hours frequently interrupted by unpredictable municipal grid blackouts.</td>
                  <td className="py-3.5 px-3 font-medium text-ink bg-primary-container/20 rounded">
                    <strong className="text-primary font-bold">24/7 Solar Infrastructure:</strong> 10kVA hybrid inverter &amp; lithium microgrid, allowing students to code day or night.
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-3 font-display font-bold text-ink">Student Reach</td>
                  <td className="py-3.5 px-3 text-mute">We cap intake at 25–30 students per year due to physical space and hardware limits.</td>
                  <td className="py-3.5 px-3 font-medium text-ink bg-primary-container/20 rounded">
                    <strong className="text-primary font-bold">300+ Students Annually:</strong> Continuous year-round pipeline entering the global digital economy.
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-3 font-display font-bold text-ink">Career Transition</td>
                  <td className="py-3.5 px-3 text-mute">Ad-hoc freelance advice for graduates trying to find opportunities independently.</td>
                  <td className="py-3.5 px-3 font-medium text-ink bg-primary-container/20 rounded">
                    <strong className="text-primary font-bold">In-House Dev Studio:</strong> Commercial studio taking on external client contracts, paying top students while they learn.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section: Broader Socio-Economic Impact (Beyond Code) */}
        <section className="space-y-4">
          <div>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-ink tracking-tight">
              Beyond Code: The Broader Socio-Economic Impact
            </h2>
            <p className="font-sans text-xs sm:text-sm text-mute mt-0.5">
              When you fund a workstation or power a hub in Ekpoma, you are altering the economic trajectory of a whole community.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-surface-card border border-border-line space-y-2 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-1">
                <span className="material-symbols-outlined text-2xl">shield</span>
              </div>
              <h3 className="font-display text-base font-bold text-ink">Youth Crime Diversion</h3>
              <p className="font-sans text-xs sm:text-sm text-mute leading-relaxed">
                Providing an authentic, productive, and highly lucrative alternative to idleness and digital fraud, giving young people a clear path to legitimate wealth and dignity.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface-card border border-border-line space-y-2 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-1">
                <span className="material-symbols-outlined text-2xl">currency_exchange</span>
              </div>
              <h3 className="font-display text-base font-bold text-ink">Local Economic Uplift</h3>
              <p className="font-sans text-xs sm:text-sm text-mute leading-relaxed">
                By equipping students for globally-paid remote roles and digital freelancing, we inject foreign exchange directly into the local Ekpoma food, rental, and family economy.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface-card border border-border-line space-y-2 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-1">
                <span className="material-symbols-outlined text-2xl">hub</span>
              </div>
              <h3 className="font-display text-base font-bold text-ink">A Regional Tech Node</h3>
              <p className="font-sans text-xs sm:text-sm text-mute leading-relaxed">
                Proving that world-class software engineers and digital product designers can be nurtured outside commercial metropolises like Lagos, decentralizing Nigeria's tech ecosystem.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Alumni Voices & Verifiable Proof */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 sm:p-6 rounded-2xl bg-surface-container border border-border-line space-y-3 shadow-xs flex flex-col justify-between">
            <p className="font-sans text-xs sm:text-sm text-ink italic leading-relaxed">
              "Before Uriel, I understood coding in theory but didn't have a computer capable of running a local server. I felt stuck. Finding a place with the hardware I needed changed everything. Today, I build live portals and earn my own money through freelance development."
            </p>
            <div className="border-t border-border-line pt-2 text-xs">
              <strong className="font-display text-ink block font-bold">Kelvin O.</strong>
              <span className="font-mono text-mute">AAU Undergraduate &amp; Full-Stack Alumnus</span>
            </div>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-surface-container border border-border-line space-y-3 shadow-xs flex flex-col justify-between">
            <p className="font-sans text-xs sm:text-sm text-ink italic leading-relaxed">
              "Learning UI/UX design right after secondary school gave me a marketable digital skill set while waiting for university admission, keeping me productive and focused on real-world product design work."
            </p>
            <div className="border-t border-border-line pt-2 text-xs">
              <strong className="font-display text-ink block font-bold">Ehibor M.</strong>
              <span className="font-mono text-mute">Digital Product Design Trainee</span>
            </div>
          </div>
        </section>

        {/* Section: Institutional Governance Standards */}
        <section className="p-5 sm:p-7 rounded-2xl bg-surface-card border border-border-line space-y-5 shadow-xs">
          <div>
            <h2 className="font-display text-lg sm:text-xl font-bold text-ink tracking-tight">
              Institutional Governance &amp; Transparency
            </h2>
            <p className="font-sans text-xs sm:text-sm text-mute mt-0.5">
              Operating with strict non-profit corporate integrity and transparent financial reporting.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-surface-container border border-border-line space-y-2">
              <div className="flex items-center gap-2 text-primary font-bold">
                <span className="material-symbols-outlined text-[18px]">verified</span>
                <span className="font-display text-ink">CAC Registered Legal Status</span>
              </div>
              <p className="text-mute leading-relaxed font-sans">
                Fully registered with the Corporate Affairs Commission (CAC) of Nigeria under Incorporated Trustees (IT / NGO status). Operates under formal statutory compliance.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-surface-container border border-border-line space-y-2">
              <div className="flex items-center gap-2 text-primary font-bold">
                <span className="material-symbols-outlined text-[18px]">account_balance</span>
                <span className="font-display text-ink">Dual-Signatory Accounting &amp; Direct Vendor Option</span>
              </div>
              <p className="text-mute leading-relaxed font-sans">
                Dedicated project bookkeeping and dual-signatory financial controls. Sponsors may also choose to pay equipment and solar suppliers directly via pro-forma invoices.
              </p>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-mute border-t border-border-line gap-2">
            <span><strong>Project Lead:</strong> Will Osezele (cruzcreations456@gmail.com • +234 707 117 5635)</span>
            <span className="font-mono text-primary font-semibold">Node: Ekpoma, Edo State, Nigeria</span>
          </div>
        </section>

        {/* Bottom Callout Banner */}
        <motion.section
          whileHover={{ scale: 1.005 }}
          className="p-6 sm:p-10 rounded-2xl bg-surface-container border border-border-line text-center space-y-4 shadow-xs"
        >
          <h2 className="font-display text-xl min-[400px]:text-2xl sm:text-3xl lg:text-4xl text-ink font-extrabold tracking-tight">
            The talent is here. Help us build the bridge.
          </h2>
          <p className="font-sans text-xs sm:text-sm md:text-base text-mute max-w-lg mx-auto leading-relaxed">
            Whether by funding a single ₦250,000 workstation or outfitting our entire solar grid, your investment translates directly into lives changed and careers launched.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3 pt-2 w-full max-w-md mx-auto sm:max-w-none">
            <motion.button
              onClick={handleSponsor}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-primary hover:bg-primary-hover text-accent-contrast font-display text-sm font-bold shadow-sm transition-all cursor-pointer min-h-[46px] flex items-center justify-center"
            >
              Sponsor Workstations
            </motion.button>
            <motion.button
              onClick={handleContact}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto px-5 py-3 rounded-lg bg-surface-card border border-border-line hover:border-outline text-ink font-display text-sm font-semibold transition-colors cursor-pointer shadow-xs min-h-[46px] flex items-center justify-center"
            >
              Contact Project Lead
            </motion.button>
          </div>
        </motion.section>

      </div>
    </div>
  );
};
