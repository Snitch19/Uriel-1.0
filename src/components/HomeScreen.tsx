import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageTab } from '../types';
import { UrielLogo } from './UrielLogo';

interface HomeScreenProps {
  setActiveTab: (tab: PageTab) => void;
  onSelectTier?: (tierName: string, amount: string, seats: number) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ setActiveTab, onSelectTier }) => {
  const [activeTierSeats, setActiveTierSeats] = useState<number>(20);
  const [activeTierName, setActiveTierName] = useState<string>('Gold (20 seats)');
  const [showSpecsAccordion, setShowSpecsAccordion] = useState(false);

  const tiers = [
    { name: 'Bronze', fullName: 'Bronze Tier (5 seats)', seats: 5, amount: '3500000', price: '₦3.5M' },
    { name: 'Silver', fullName: 'Silver Tier (10 seats)', seats: 10, amount: '6500000', price: '₦6.5M' },
    { name: 'Gold', fullName: 'Gold Tier (20 seats)', seats: 20, amount: '12000000', price: '₦12M' },
    { name: 'Platinum', fullName: 'Platinum Tier (40 seats)', seats: 40, amount: '20000000', price: '₦20M' },
  ];

  const handleTierSelect = (fullName: string, seats: number) => {
    setActiveTierName(fullName);
    setActiveTierSeats(seats);
  };

  const handleSponsorClick = () => {
    if (onSelectTier) {
      const selected = tiers.find(t => t.seats === activeTierSeats) || tiers[2];
      onSelectTier(selected.fullName, selected.amount, selected.seats);
    }
    setActiveTab('partnership');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.hash = 'partnership';
  };

  const handleTalkToUs = () => {
    setActiveTab('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.hash = 'contact';
  };

  return (
    <div className="flex flex-col w-full text-ink">
      <div className="max-w-4xl mx-auto px-3.5 sm:px-6 w-full py-6 sm:py-12 md:py-16 space-y-10 sm:space-y-16">
        
        {/* Concise High-Legibility Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-4 sm:space-y-5 max-w-2xl mx-auto pt-1 sm:pt-2"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-center gap-2"
          >
            <UrielLogo size={48} variant="orange-bg" className="shadow-sm sm:w-[54px] sm:h-[54px]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="inline-flex items-center flex-wrap justify-center gap-1.5 sm:gap-2.5 px-3 sm:px-3.5 py-1.5 rounded-full bg-surface-container border border-border-line text-[11px] sm:text-xs font-mono text-mute shadow-2xs max-w-full"
          >
            <span className="font-semibold text-ink">Ekpoma, Edo State</span>
            <span className="text-border-line">•</span>
            <span className="text-primary font-bold">40 Dedicated Workstations</span>
          </motion.div>

          <h1 className="font-display text-2xl min-[380px]:text-3xl sm:text-5xl lg:text-6xl text-ink leading-[1.14] sm:leading-[1.12] font-extrabold tracking-tight">
            Tech literacy in Edo State, starting with <span className="font-editorial-italic font-normal text-primary">Ekpoma</span>.
          </h1>

          <p className="font-sans text-sm sm:text-base md:text-lg text-mute max-w-xl mx-auto leading-relaxed px-1">
            Equipping local university students with dedicated computer workstations, continuous solar electricity, and hands-on software engineering mentorship.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3 pt-2 w-full max-w-md mx-auto sm:max-w-none"
          >
            <motion.button
              onClick={handleSponsorClick}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto px-6 sm:px-7 py-3 rounded-lg bg-primary hover:bg-primary-hover text-accent-contrast font-display text-sm font-bold shadow-sm transition-all cursor-pointer min-h-[46px] flex items-center justify-center"
            >
              Sponsorship Packages
            </motion.button>
            <motion.button
              onClick={handleTalkToUs}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto px-5 sm:px-6 py-3 rounded-lg bg-surface-card border border-border-line hover:border-outline text-ink font-display text-sm font-semibold transition-colors cursor-pointer shadow-xs min-h-[46px] flex items-center justify-center"
            >
              Contact Director
            </motion.button>
          </motion.div>
        </motion.section>

        {/* 4 Core Pillars (Mobile: 1 col, Tablet: 2 cols, Desktop: 4 cols) */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <motion.div
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="p-4 sm:p-5 rounded-xl bg-surface-card border border-border-line space-y-2 shadow-xs transition-shadow hover:shadow-sm"
          >
            <div className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined text-[22px]">desktop_windows</span>
              <span className="font-display font-bold text-sm text-ink">40 Terminals</span>
            </div>
            <p className="font-sans text-xs sm:text-sm text-mute leading-relaxed">
              Core i7 setups with dual 1080p monitors and NVMe storage for rapid software builds.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="p-4 sm:p-5 rounded-xl bg-surface-card border border-border-line space-y-2 shadow-xs transition-shadow hover:shadow-sm"
          >
            <div className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined text-[22px]">solar_power</span>
              <span className="font-display font-bold text-sm text-ink">10kVA Solar</span>
            </div>
            <p className="font-sans text-xs sm:text-sm text-mute leading-relaxed">
              Lithium microgrid power providing 99.8% uptime, eliminating city grid outages.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="p-4 sm:p-5 rounded-xl bg-surface-card border border-border-line space-y-2 shadow-xs transition-shadow hover:shadow-sm"
          >
            <div className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined text-[22px]">satellite_alt</span>
              <span className="font-display font-bold text-sm text-ink">Starlink Link</span>
            </div>
            <p className="font-sans text-xs sm:text-sm text-mute leading-relaxed">
              Low-latency satellite internet for GitHub pushes, remote standups, and cloud workloads.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="p-4 sm:p-5 rounded-xl bg-surface-card border border-border-line space-y-2 shadow-xs transition-shadow hover:shadow-sm"
          >
            <div className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined text-[22px]">school</span>
              <span className="font-display font-bold text-sm text-ink">Mentorship</span>
            </div>
            <p className="font-sans text-xs sm:text-sm text-mute leading-relaxed">
              Real-world software engineering coaching, code reviews, and career placement guidance.
            </p>
          </motion.div>
        </section>

        {/* 40-Seat Visual Grid (Mobile-Optimized & Animated) */}
        <section className="p-4 sm:p-6 md:p-7 rounded-2xl bg-surface-card border border-border-line space-y-4 sm:space-y-5 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pb-3 sm:pb-4 border-b border-border-line">
            <div>
              <h3 className="font-display text-lg sm:text-xl md:text-2xl font-bold text-ink tracking-tight">
                40-Workstation Capacity Grid
              </h3>
              <p className="font-sans text-xs sm:text-sm text-mute mt-0.5">
                Ekpoma hub floorplan for the 2025 student cohort.
              </p>
            </div>

            {/* Quick tier picker pills (Scrollable on small mobile) */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-1 sm:gap-1.5 p-1 bg-surface-container rounded-lg border border-border-line overflow-x-auto scrollbar-none">
              {tiers.map((t) => {
                const isSelected = activeTierSeats === t.seats;
                return (
                  <motion.button
                    key={t.name}
                    onClick={() => handleTierSelect(t.fullName, t.seats)}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className={`px-2.5 sm:px-3 py-1.5 rounded-md font-display text-xs font-semibold transition-all cursor-pointer whitespace-nowrap min-h-[34px] flex items-center ${
                      isSelected
                        ? 'bg-primary text-accent-contrast shadow-2xs font-bold'
                        : 'text-mute hover:text-ink'
                    }`}
                  >
                    {t.name} ({t.seats})
                  </motion.button>
                );
              })}
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-1 text-xs sm:text-sm text-mute font-mono">
              <span>Showing: <strong className="text-ink font-semibold">{activeTierName}</strong></span>
              <span className="text-primary font-bold">₦250,000 / seat / yr</span>
            </div>

            {/* Responsive interactive seat grid (5 cols mobile, 8 tablet, 10 desktop) */}
            <div className="grid grid-cols-5 min-[480px]:grid-cols-8 md:grid-cols-10 gap-1.5 sm:gap-2">
              {Array.from({ length: 40 }, (_, i) => {
                const seatNum = i + 1;
                const isFunded = seatNum <= activeTierSeats;
                return (
                  <motion.button
                    key={seatNum}
                    onClick={() => {
                      setActiveTierSeats(seatNum);
                      setActiveTierName(`Custom (${seatNum} seats)`);
                    }}
                    whileHover={{ scale: 1.12, zIndex: 10 }}
                    whileTap={{ scale: 0.92 }}
                    title={`Workstation ${seatNum}: ${isFunded ? 'Funded' : 'Available for Sponsorship'}`}
                    className={`h-8 min-[400px]:h-9 sm:h-10 rounded-lg flex items-center justify-center font-mono text-xs font-bold transition-colors cursor-pointer border ${
                      isFunded
                        ? 'bg-primary text-accent-contrast border-primary shadow-2xs'
                        : 'bg-surface-container text-mute border-border-line hover:border-outline hover:text-ink'
                    }`}
                  >
                    {seatNum < 10 ? `0${seatNum}` : seatNum}
                  </motion.button>
                );
              })}
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs sm:text-sm text-mute gap-2.5 sm:gap-3">
              <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="w-2.5 h-2.5 rounded bg-primary inline-block"></span>
                  <span className="text-ink font-semibold">Funded</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded bg-surface-container border border-border-line inline-block"></span>
                  <span className="text-mute font-medium">Available</span>
                </span>
              </div>
              <motion.button
                onClick={handleSponsorClick}
                whileHover={{ x: 3 }}
                className="text-primary hover:text-primary-hover font-display text-xs sm:text-sm font-bold flex items-center gap-1 cursor-pointer py-1"
              >
                <span>Sponsor this configuration</span>
                <span>→</span>
              </motion.button>
            </div>
          </div>

          {/* Collapsible Technical Hardware Details */}
          <div className="border-t border-border-line pt-3">
            <button
              onClick={() => setShowSpecsAccordion(!showSpecsAccordion)}
              className="w-full flex items-center justify-between text-xs sm:text-sm font-display font-semibold text-mute hover:text-ink cursor-pointer py-1.5 min-h-[38px]"
            >
              <span>{showSpecsAccordion ? 'Hide' : 'View'} Workstation Hardware & Lab Specifications</span>
              <span className="material-symbols-outlined text-[18px]">
                {showSpecsAccordion ? 'expand_less' : 'expand_more'}
              </span>
            </button>

            <AnimatePresence>
              {showSpecsAccordion && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="overflow-hidden pt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-mute"
                >
                  <div className="p-3 sm:p-3.5 rounded-lg bg-surface-container border border-border-line space-y-1">
                    <strong className="text-ink block font-display">Workstation Compute</strong>
                    <p>Intel Core i7, 32GB DDR4 RAM, 1TB NVMe SSD, Dual 24" 1080p IPS displays, ergonomic mechanical keyboard.</p>
                  </div>
                  <div className="p-3 sm:p-3.5 rounded-lg bg-surface-container border border-border-line space-y-1">
                    <strong className="text-ink block font-display">Power & Connectivity</strong>
                    <p>10kVA solar hybrid inverter, 15kWh LiFePO4 battery bank, Starlink V2 terminal with automated 4G failover.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* 4 Clean Metric Cards (2x2 on mobile, 4x1 on desktop) */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 text-center">
          <motion.div
            whileHover={{ y: -2 }}
            className="p-3.5 sm:p-5 rounded-xl bg-surface-card border border-border-line shadow-xs"
          >
            <span className="font-display text-[11px] sm:text-xs font-semibold text-mute uppercase tracking-wider block">Track Record</span>
            <div className="font-display text-2xl min-[400px]:text-3xl sm:text-4xl text-ink font-extrabold tracking-tight mt-1">4 Years</div>
            <span className="font-sans text-[11px] sm:text-xs text-mute mt-0.5 block">Youth training</span>
          </motion.div>

          <motion.div
            whileHover={{ y: -2 }}
            className="p-3.5 sm:p-5 rounded-xl bg-surface-card border border-border-line shadow-xs"
          >
            <span className="font-display text-[11px] sm:text-xs font-semibold text-mute uppercase tracking-wider block">Alumni</span>
            <div className="font-display text-2xl min-[400px]:text-3xl sm:text-4xl text-ink font-extrabold tracking-tight mt-1">100+</div>
            <span className="font-sans text-[11px] sm:text-xs text-mute mt-0.5 block">Graduates placed</span>
          </motion.div>

          <motion.div
            whileHover={{ y: -2 }}
            className="p-3.5 sm:p-5 rounded-xl bg-surface-card border border-border-line shadow-xs"
          >
            <span className="font-display text-[11px] sm:text-xs font-semibold text-mute uppercase tracking-wider block">Solar Uptime</span>
            <div className="font-display text-2xl min-[400px]:text-3xl sm:text-4xl text-primary font-extrabold tracking-tight mt-1">99.8%</div>
            <span className="font-sans text-[11px] sm:text-xs text-mute mt-0.5 block">Zero blackouts</span>
          </motion.div>

          <motion.div
            whileHover={{ y: -2 }}
            className="p-3.5 sm:p-5 rounded-xl bg-surface-card border border-border-line shadow-xs"
          >
            <span className="font-display text-[11px] sm:text-xs font-semibold text-mute uppercase tracking-wider block">Workstation</span>
            <div className="font-display text-2xl min-[400px]:text-3xl sm:text-4xl text-primary font-extrabold tracking-tight mt-1">₦250k</div>
            <span className="font-sans text-[11px] sm:text-xs text-mute mt-0.5 block">12-month access</span>
          </motion.div>
        </section>

        {/* Action Callout Banner */}
        <motion.section
          whileHover={{ scale: 1.005 }}
          className="p-5 min-[400px]:p-6 sm:p-8 md:p-10 rounded-2xl bg-surface-container border border-border-line text-center space-y-4 shadow-xs"
        >
          <h2 className="font-display text-xl min-[400px]:text-2xl sm:text-3xl lg:text-4xl text-ink font-extrabold tracking-tight">
            Support engineering talent in Ekpoma.
          </h2>
          <p className="font-sans text-xs sm:text-sm md:text-base text-mute max-w-lg mx-auto leading-relaxed">
            Choose a sponsorship level or connect directly with founder Will Osezele to discuss workstation adoption and on-site hub visits.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3 pt-2 w-full max-w-md mx-auto sm:max-w-none">
            <motion.button
              onClick={handleSponsorClick}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-primary hover:bg-primary-hover text-accent-contrast font-display text-sm font-bold shadow-sm transition-all cursor-pointer min-h-[46px] flex items-center justify-center"
            >
              Select Sponsorship Tier
            </motion.button>
            <motion.button
              onClick={handleTalkToUs}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto px-5 py-3 rounded-lg bg-surface-card border border-border-line hover:border-outline text-ink font-display text-sm font-semibold transition-colors cursor-pointer shadow-xs min-h-[46px] flex items-center justify-center"
            >
              Direct WhatsApp Desk
            </motion.button>
          </div>
        </motion.section>

      </div>
    </div>
  );
};
