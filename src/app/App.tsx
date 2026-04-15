"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import AboutUs from "./AboutUs";
import GetInTouch from "./GetInTouch";
import HeroTypingHeading from "./HeroTypingHeading";
import Navbar from "./Navbar";
import svgPaths from "../imports/Home-2/svg-mvwhm2i239";
import imgSb1 from "../imports/Home-2/ddc493d44b41d3f52b3d27457e6641ac57120ef9.png";
import imgEllipse6 from "../imports/Home-2/390b1861ea0e79201aefeba18d8c83bc94e99c87.png";
import imgEllipse7 from "../imports/Home-2/24530c13b99c10289ad2e34505aa800adc64f3b8.png";
import imgEllipse8 from "../imports/Home-2/0381804f069369ab31d97f5ffca868fd7c14ed2b.png";
import imgClayBanksXvSUKUoUaoUnsplash from "../imports/Home-2/0e8615eb294c38fac8af71c289b1ce17a097e2ee.png";
import imgYoungProfessionalWomanUsingLaptopToSearchForJobsOnlineAdvertisingWebServiceIsolatedOnTransparentBackgroundG1411 from "../imports/Home-2/0c57ce125f31c2174195fca4fccc8523a6929452.png";
import {
  EARLY_USER_BENEFIT_CARDS,
  EARLY_USERS_HEADING,
  type EarlyUserBenefitIcon,
  FIRST_STEP_HEADING,
  FIRST_STEP_ROADMAP_STEPS,
  FIRST_STEP_SUBTEXT,
  LAUNCHING_BETA,
  TEAM_AUDIENCE_CARDS,
  WHY_THIS_MATTERS_BULLETS,
} from "../utils/homeSectionsCopy";
import imgSb2 from "../imports/Home-2/why-it-matters.png";
import moneyLayout from "../imports/Home-2/money-layout.png";

// ── Animation variants ──────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" as const } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const slideFromLeft = {
  hidden: { opacity: 0, x: -70 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const slideFromRight = {
  hidden: { opacity: 0, x: 70 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.75, ease: "easeOut" as const } },
};

const rotateIn = {
  hidden: { opacity: 0, rotate: -4, scale: 0.95 },
  visible: { opacity: 1, rotate: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

const staggerItemScale = {
  hidden: { opacity: 0, scale: 0.92, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

// viewport preset — animate once when 15 % of element is visible
const vp = { once: true, amount: 0.15 };

function EarlyUserBenefitIcon({ name }: { name: EarlyUserBenefitIcon }) {
  const common = "w-6 h-6 text-white";
  switch (name) {
    case "sparkle":
      return (
        <svg className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
          <path strokeLinecap="round" d="M12 3v3M12 18v3M5 12H2M22 12h-3M6.8 6.8 4.6 4.6M19.4 19.4l-2.2-2.2M17.2 6.8l2.2-2.2M4.6 19.4l2.2-2.2" />
          <path strokeLinejoin="round" d="M12 9.5l1.1 2.4 2.6.4-1.9 1.8.5 2.6L12 15.3l-2.3 1.2.5-2.6-1.9-1.8 2.6-.4 1.1-2.4z" />
        </svg>
      );
    case "chart":
      return (
        <svg className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <path strokeLinecap="round" d="M8 14l2.5-3 2 2.5L16 9" />
        </svg>
      );
    case "people":
      return (
        <svg className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
          <path d="M9 11a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM5 20v-.5a4 4 0 014-4h0a4 4 0 014 4V20" strokeLinecap="round" />
          <path d="M17 10.5h.5M14 20h4.5v-.5a3.5 3.5 0 00-3.5-3.5h-1" strokeLinecap="round" />
        </svg>
      );
    case "star":
      return (
        <svg className={common} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M12 2.5l2.8 5.7 6.3.9-4.5 4.4 1.1 6.3L12 17.4 6.3 19.8l1.1-6.3-4.5-4.4 6.3-.9L12 2.5z" />
        </svg>
      );
    default:
      return null;
  }
}

// ────────────────────────────────────────────────────────────────────────────

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [page, setPage] = useState<"home" | "about">("home");

  if (page === "about") {
    return <AboutUs onNavigateHome={() => { setPage("home"); window.scrollTo(0, 0); }} />;
  }

  return (
    <div className="bg-[#f5f5f5] min-h-screen w-full overflow-x-hidden">

      <Navbar
        currentPage="home"
        onNavigateAbout={() => { setPage("about"); window.scrollTo(0, 0); }}
      />

      {/* ── Hero Section ────────────────────────────────────────────────── */}
      <section id="home" className="relative px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 lg:pt-32 pb-24 sm:pb-32 lg:pb-48">
        {/* Stagger children on load (above fold — use animate, not whileInView) */}
        <motion.div
          className="max-w-7xl mx-auto text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <HeroTypingHeading variants={fadeUp} />

          <motion.p
            variants={fadeUp}
            className="font-['Inter'] text-lg sm:text-xl md:text-2xl text-[#444] leading-relaxed max-w-4xl mx-auto mb-8 sm:mb-12 px-4"
          >
            A smarter way for brokers and MCA teams to review deals, model offers, and move underwriting decisions forward with more speed, structure, and clarity.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 sm:mb-12"
          >
            <button className="w-full sm:w-auto bg-gradient-to-r from-[#007BDA] to-black text-white px-8 py-4 rounded-full font-['Inter'] font-medium text-lg sm:text-xl hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl">
              Request Beta Access
            </button>
            <button className="w-full sm:w-auto border-2 border-black text-black px-8 py-4 rounded-full font-['Inter'] font-medium text-lg sm:text-xl hover:bg-black hover:text-white transition-colors shadow-lg hover:shadow-xl">
              Book a Demo
            </button>
          </motion.div>

          {/* User Stats */}
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-8">
            <div className="flex -space-x-3">
              <img alt="" className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white" src={imgEllipse6.src} />
              <img alt="" className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white" src={imgEllipse7.src} />
              <img alt="" className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white" src={imgEllipse8.src} />
            </div>
            <div className="text-left">
              <p className="font-['Faktum_Test'] text-xl sm:text-2xl text-[#06113c] font-bold">3K+</p>
              <p className="font-['Inter'] text-sm text-[#06113c]">users in USA</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Hero Image — scale up with a slight delay */}
        <motion.div
          className="max-w-6xl mx-auto mt-12 sm:mt-16 px-4"
          variants={scaleUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.45 }}
        >
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
            <img alt="Capital Desk Platform" className="w-full h-auto" src={imgSb1.src} />
          </div>
        </motion.div>
      </section>

      {/* ── What is Capital Desk ─────────────────────────────────────────── */}
      <section id="product" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

            {/* Image — slides in from the left */}
            <motion.div
              className="relative order-2 lg:order-1"
              variants={slideFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
            >
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#007BDA] to-black p-8 sm:p-12">
                <img
                  alt="Professional woman"
                  className="w-full h-auto relative z-10"
                  src={imgYoungProfessionalWomanUsingLaptopToSearchForJobsOnlineAdvertisingWebServiceIsolatedOnTransparentBackgroundG1411.src}
                />

                {/* Floating notification — top right */}
                <motion.div
                  className="absolute top-8 right-8 bg-white rounded-2xl p-4 shadow-xl max-w-[200px]"
                  initial={{ opacity: 0, y: -20, scale: 0.85 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={vp}
                  transition={{ delay: 0.45, duration: 0.55, ease: "easeOut" }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#007BDA] to-black flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 14.8549 10.6594">
                        <path d={svgPaths.p37b4ecc0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.42955" />
                      </svg>
                    </div>
                  </div>
                  <p className="font-['Faktum_Test'] text-lg font-bold text-[#06113c]">$8,755.43</p>
                  <p className="font-['Faktum_Test'] text-sm text-[#06113c]">Commission</p>
                  <p className="font-['Faktum_Test'] text-xs text-[#06113c]">Received!</p>
                </motion.div>

                {/* Floating notification — bottom left */}
                <motion.div
                  className="absolute bottom-8 left-8 bg-white rounded-2xl p-4 shadow-xl z-[10]"
                  initial={{ opacity: 0, y: 20, scale: 0.85 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={vp}
                  transition={{ delay: 0.6, duration: 0.55, ease: "easeOut" }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#2EB70C] flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 18.2832 13.2045">
                        <path d={svgPaths.p8db0a00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.03146" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-['Faktum_Test'] text-base font-bold text-[#06113c]">Deal Funded!</p>
                      <p className="font-['Inter'] text-xs text-[#06113c]">Commission in 3-5 days</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Content — slides in from the right */}
            <motion.div
              className="order-1 lg:order-2"
              variants={slideFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
            >
              <h2 className="font-['Faktum_Test'] text-3xl sm:text-4xl lg:text-5xl text-[#007bda] leading-tight mb-6">
                What is Capital Desk?
              </h2>
              <div className="space-y-4 text-[#444] font-['Inter'] text-lg sm:text-xl leading-relaxed">
                <p>
                  Capital Desk is a software brand focused on building practical workflow tools for the MCA industry. We are starting with the Capital Desk Underwriting Calculator — a product designed to help brokers, underwriters, and funding teams work through deals more efficiently.
                </p>
                <p>
                  Instead of relying on scattered spreadsheets, disconnected files, and manual back-and-forth, Capital Desk brings key underwriting actions into one structured workflow.
                </p>
                <p>
                  This beta launch marks the first step in the Capital Desk product roadmap, with additional tools planned next.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Features / How It Works ──────────────────────────────────────── */}
      <section id="how-it-works" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Heading fades up */}
          <motion.h2
            className="font-['Faktum_Test'] text-3xl sm:text-4xl lg:text-5xl text-center bg-gradient-to-b from-[#0e5575] to-[#043a53] bg-clip-text text-transparent mb-12 sm:mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            How It Works
          </motion.h2>

          {/* Cards stagger with scale+fade */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            {/* Feature 1 */}
            <motion.div
              variants={staggerItemScale}
              className="bg-white border border-[#d8d8d8] rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 mb-6 bg-gradient-to-br from-[#007BDA] to-black rounded-2xl flex items-center justify-center">
                <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="none" viewBox="0 0 88 88">
                  <path clipRule="evenodd" d={svgPaths.p11dcfe80} fill="url(#paint0_linear_features_1)" fillRule="evenodd" />
                  <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_features_1" x1="50.3505" x2="-13.6516" y1="53.5468" y2="109.947">
                      <stop stopColor="#007BDA" />
                      <stop offset="1" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="font-['Faktum_Test'] text-xl sm:text-2xl text-[#1a3347] mb-3">Find the right lead</h3>
              <p className="font-['Inter'] text-base sm:text-lg text-[#0e5575] leading-relaxed">
                Search by lead ID or name, select the correct customer record, and open or create a calculator tied to that deal.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              variants={staggerItemScale}
              className="bg-white border border-[#d8d8d8] rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 mb-6 bg-gradient-to-br from-[#007BDA] to-black rounded-2xl flex items-center justify-center">
                <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="none" viewBox="0 0 89.8762 88">
                  <path d={svgPaths.p153e2b00} fill="url(#paint0_linear_features_2)" />
                  <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_features_2" x1="51.424" x2="-12.734" y1="53.5468" y2="111.29">
                      <stop stopColor="#007BDA" />
                      <stop offset="1" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="font-['Faktum_Test'] text-xl sm:text-2xl text-[#1a3347] mb-3">Run underwriting inputs</h3>
              <p className="font-['Inter'] text-base sm:text-lg text-[#0e5575] leading-relaxed">
                Work through key variables like withhold, term, rate, and payment frequency while viewing the impact on core underwriting calculations.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              variants={staggerItemScale}
              className="bg-white border border-[#d8d8d8] rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 mb-6 bg-gradient-to-br from-[#007BDA] to-black rounded-2xl flex items-center justify-center">
                <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="none" viewBox="0 0 85.0081 82.7203">
                  <path d={svgPaths.p2d25d180} fill="url(#paint0_linear_features_3)" />
                  <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_features_3" x1="38.5795" x2="-18.89" y1="50.3342" y2="91.6149">
                      <stop stopColor="#007BDA" />
                      <stop offset="1" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="font-['Faktum_Test'] text-xl sm:text-2xl text-[#1a3347] mb-3">Model offer scenarios</h3>
              <p className="font-['Inter'] text-base sm:text-lg text-[#0e5575] leading-relaxed">
                Create and compare multiple offer structures, adjust key terms, and see how changes affect the overall deal metrics.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Features Grid ────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[linear-gradient(to_bottom_right,#007BDA_0%,#007BDA_52%,#0468b8_74%,#023a66_90%,#000000_100%)]">
        <div className="max-w-7xl mx-auto">

          {/* Badge */}
          <motion.div
            className="flex justify-center mb-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-sm font-['Inter'] font-medium px-5 py-2 rounded-full">
              Features
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="font-['Faktum_Test'] text-3xl sm:text-4xl lg:text-[48px] font-bold text-white text-center leading-tight mb-4"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            transition={{ delay: 0.05 }}
          >
            Built for actual underwriting workflow
          </motion.h2>

          {/* Subtext */}
          <motion.p
            className="font-['Inter'] text-base sm:text-lg text-white/60 text-center max-w-2xl mx-auto mb-14 sm:mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            transition={{ delay: 0.1 }}
          >
            Every part of the product is designed to support the way MCA teams already work — but with more speed, better visibility, and less friction.
          </motion.p>

          {/* Feature cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            {[
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" strokeLinecap="round" />
                  </svg>
                ),
                title: "Lead Search & Calculator Creation",
                body: "Find the right lead quickly and create a new calculator without starting from scratch each time.",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18M7 16l4-4 4 4 4-6" />
                  </svg>
                ),
                title: "Deposit & Account Review",
                body: "Review deposit trends and key financial activity in a more organized underwriting workflow.",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
                title: "Bank Statements & File Access",
                body: "Open and review statements and supporting documents inside the calculator flow.",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                ),
                title: "Underwriting Inputs That Matter",
                body: "Adjust withhold, term, rate, and payment frequency while tracking the impact on underwriting outputs.",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 7H7a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V9a2 2 0 00-2-2h-2M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M9 7h6" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6M9 16h4" />
                  </svg>
                ),
                title: "Offer Modeling",
                body: "Calculate your own offer scenarios and compare daily, weekly, monthly, and withhold outcomes with more clarity.",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                ),
                title: "Active & Past Offer Visibility",
                body: "See what is active, what was previously offered, and what context matters before moving forward.",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                ),
                title: "Save & Export",
                body: "Save calculator records for future use and export data when needed for internal review or reporting.",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" />
                  </svg>
                ),
                title: "Team Management Ready",
                body: "Manage users, roles, and permissions inside the platform for a more structured team environment.",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                variants={staggerItemScale}
                className="bg-white/8 border border-white/10 rounded-2xl p-6 hover:bg-white/12 transition-colors duration-200"
              >
                {/* Icon circle */}
                <div className="w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-['Inter'] text-base font-semibold text-white mb-2 leading-snug">
                  {feature.title}
                </h3>
                <p className="font-['Inter'] text-sm text-white/55 leading-relaxed">
                  {feature.body}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ── Why this matters ─────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              className="relative order-2 lg:order-1"
              variants={slideFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
            >
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden  ">
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,255,255,0.35),transparent_55%)] pointer-events-none" aria-hidden />
                <img
                  alt="The Capital Desk Underwriting Calculator is launching in beta."
                  className="relative z-10 w-full h-auto rounded-xl sm:rounded-2xl"
                  src={imgSb2.src}
                />
              </div>
            </motion.div>

            <motion.div
              className="order-1 lg:order-2"
              variants={slideFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
            >
              <h2 className="font-['Faktum_Test'] text-3xl sm:text-4xl lg:text-5xl text-[#007bda] leading-tight mb-6">
                Why this matters
              </h2>
              <div className="space-y-4 font-['Inter'] text-base sm:text-lg text-[#12141d] leading-relaxed">
                <p>
                  Underwriting is one of the most repeated and important workflows in the MCA process. Yet for many teams, it still happens across disconnected tools, manual calculations, and fragmented communication.
                </p>
                <p className="font-semibold text-[#1a3347]">
                  Capital Desk is being built to improve that.
                </p>
                <p>
                  The Underwriting Calculator gives teams a more structured way to review deals, work through offer scenarios, and keep underwriting decisions organized. The result is a workflow that feels faster, cleaner, and easier to operate at scale.
                </p>
              </div>
              <ul className="mt-8 sm:mt-10 space-y-4">
                {WHY_THIS_MATTERS_BULLETS.map((line) => (
                  <li key={line} className="flex gap-4 items-start">
                    <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#5EB0FF]">
                      <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="font-['Inter'] text-base sm:text-lg text-[#12141d] leading-relaxed pt-0.5">{line}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Audience: teams moving deals forward ───────────────────────── */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="font-['Faktum_Test'] text-3xl sm:text-4xl lg:text-5xl text-[#007bda] mb-4"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            Built for the teams moving deals forward
          </motion.h2>
          <motion.p
            className="font-['Inter'] text-lg sm:text-xl md:text-2xl text-[#444] max-w-4xl mx-auto mb-12 sm:mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            transition={{ delay: 0.15 }}
          >
            Capital Desk is built for the people doing the work every day.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch lg:items-end text-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            {TEAM_AUDIENCE_CARDS.map((card) => {
              const isCenter = card.variant === "solid";
              return (
                <motion.div
                  key={card.title}
                  variants={staggerItem}
                  className={[
                    "rounded-[15px] px-6 sm:px-8 flex flex-col justify-center border border-white/10",
                    isCenter
                      ? " py-10 bg-[linear-gradient(90deg,#007BDA_0%,#007BDA_40%,#085aa8_78%,#06113c_100%)] sm:py-12 lg:py-14 lg:min-h-[380px] lg:-translate-y-2 shadow-xl"
                      : "bg-[linear-gradient(90deg,#007BDA_0%,#007BDA_40%,#085aa8_78%,#06113c_100%)] py-9 sm:py-10 lg:min-h-[320px]",
                  ].join(" ")}
                >
                  <h3 className="font-['Faktum_Test'] text-xl sm:text-2xl font-bold text-white mb-4">
                    {card.title}
                  </h3>
                  <p className="font-['Inter'] text-base sm:text-lg text-white/95 leading-relaxed">
                    {card.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Launching in beta (money overlay on gradient) ───────────────── */}
      <section
        id="beta"
        className="relative overflow-hidden py-20 sm:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 bg-[linear-gradient(to_bottom_right,#007BDA_0%,#007BDA_52%,#0468b8_74%,#023a66_90%,#000000_100%)]"
      >
        <div className="pointer-events-none absolute inset-0 z-0 select-none" aria-hidden>
          <img
            alt=""
            src={moneyLayout.src}
            className="absolute inset-0 h-full w-full object-cover opacity-[0.42] mix-blend-soft-light sm:opacity-[0.45]"
          />
        </div>
        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-[#007BDA]/15 via-transparent to-black/25"
          aria-hidden
        />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.h2
            className="font-['Faktum_Test'] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8 tracking-tight"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            {LAUNCHING_BETA.title}
          </motion.h2>
          <motion.p
            className="font-['Inter'] text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed mb-10 sm:mb-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            transition={{ delay: 0.06 }}
          >
            {LAUNCHING_BETA.body}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6 sm:gap-10 mb-10 sm:mb-12 text-left sm:text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            transition={{ delay: 0.12 }}
          >
            <div className="flex items-center gap-3 max-w-[280px] sm:max-w-none">
              <span
                className="relative shrink-0 flex h-3 w-3 rounded-full bg-[#22ee5c]"
                style={{ boxShadow: "0 0 14px 4px rgba(34, 238, 92, 0.55)" }}
              />
              <span className="font-['Inter'] text-sm sm:text-base text-white/95 leading-snug">
                {LAUNCHING_BETA.launchingFirst}
              </span>
            </div>
            <div className="flex items-center gap-3 max-w-[280px] sm:max-w-none">
              <span className="shrink-0 h-3 w-3 rounded-full bg-sky-300/45 ring-1 ring-sky-200/30" />
              <span className="font-['Inter'] text-sm sm:text-base text-white/80 leading-snug">
                {LAUNCHING_BETA.comingNext}
              </span>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            transition={{ delay: 0.18 }}
          >
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full border border-white bg-transparent px-10 py-3.5 sm:py-4 font-['Inter'] font-medium text-base sm:text-lg text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {LAUNCHING_BETA.ctaLabel}
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── Why early users should care ───────────────────────────────────── */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="font-['Faktum_Test'] text-3xl sm:text-4xl lg:text-5xl text-[#007bda] text-center mb-12 sm:mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            {EARLY_USERS_HEADING}
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            {EARLY_USER_BENEFIT_CARDS.map((card) => (
              <motion.div
                key={card.title}
                variants={staggerItemScale}
                className="bg-white border border-[#d8d8d8] rounded-2xl p-6 sm:p-8 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-[#007BDA] flex items-center justify-center mb-5">
                  <EarlyUserBenefitIcon name={card.icon} />
                </div>
                <h3 className="font-['Faktum_Test'] text-lg sm:text-xl font-bold text-[#1a3347] mb-3">{card.title}</h3>
                <p className="font-['Inter'] text-base text-[#444] leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── This is the first step (roadmap) ────────────────────────────── */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#ececec]">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="font-['Faktum_Test'] text-3xl sm:text-4xl lg:text-5xl text-[#007bda] text-center mb-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            {FIRST_STEP_HEADING}
          </motion.h2>
          <motion.p
            className="font-['Inter'] text-base sm:text-lg text-[#444] text-center max-w-4xl mx-auto leading-relaxed mb-14 sm:mb-20"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            transition={{ delay: 0.06 }}
          >
            {FIRST_STEP_SUBTEXT}
          </motion.p>

          {/* Mobile / tablet: vertical timeline */}
          <motion.div
            className="lg:hidden relative border-l-2 border-[#007BDA] ml-3 pl-8 sm:pl-10 py-1"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            {FIRST_STEP_ROADMAP_STEPS.map((step) => (
              <motion.div key={step.title} variants={staggerItem} className="relative pb-12 last:pb-0">
                <span className="absolute -left-[calc(2rem+5px)] sm:-left-[calc(2.5rem+5px)] top-2 h-3.5 w-3.5 rounded-full bg-[#007BDA] ring-4 ring-white shadow-sm" />
                <div className="border border-dashed border-[rgba(0,0,0,0.28)] rounded-2xl p-5 sm:p-6 bg-white">
                  <h3 className="font-['Faktum_Test'] text-base sm:text-lg font-bold text-[#1a3347] mb-2">{step.title}</h3>
                  <p className="font-['Inter'] text-sm sm:text-base text-[#444] leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Desktop: horizontal axis with alternating cards */}
          <motion.div
            className="hidden lg:block"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            <div className="grid grid-cols-5 gap-3 min-h-[160px] items-end mb-0">
              {FIRST_STEP_ROADMAP_STEPS.map((step) => (
                <div key={`above-${step.title}`} className="flex justify-center px-1">
                  {step.side === "above" ? (
                    <div className="w-full max-w-[220px] border border-dashed border-[rgba(0,0,0,0.28)] rounded-2xl p-4 bg-white text-center">
                      <h3 className="font-['Faktum_Test'] text-sm font-bold text-[#1a3347] mb-2 leading-snug">{step.title}</h3>
                      <p className="font-['Inter'] text-xs text-[#444] leading-relaxed">{step.description}</p>
                    </div>
                  ) : (
                    <span className="invisible select-none max-w-[220px] block min-h-[1px]" aria-hidden>
                      .
                    </span>
                  )}
                </div>
              ))}
            </div>
            <div className="relative h-5 my-0">
              <div className="absolute left-[2%] right-[2%] top-1/2 h-0.5 bg-[#007BDA] -translate-y-1/2" aria-hidden />
              <div className="grid grid-cols-5 h-full items-center relative z-10">
                {FIRST_STEP_ROADMAP_STEPS.map((step) => (
                  <div key={`dot-${step.title}`} className="flex justify-center">
                    <span className="h-3.5 w-3.5 rounded-full bg-[#007BDA] border-[3px] border-white shadow-sm shrink-0" />
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-5 gap-3 min-h-[160px] items-start mt-0">
              {FIRST_STEP_ROADMAP_STEPS.map((step) => (
                <div key={`below-${step.title}`} className="flex justify-center px-1">
                  {step.side === "below" ? (
                    <div className="w-full max-w-[220px] border border-dashed border-[rgba(0,0,0,0.28)] rounded-2xl p-4 bg-white text-center">
                      <h3 className="font-['Faktum_Test'] text-sm font-bold text-[#1a3347] mb-2 leading-snug">{step.title}</h3>
                      <p className="font-['Inter'] text-xs text-[#444] leading-relaxed">{step.description}</p>
                    </div>
                  ) : (
                    <span className="invisible select-none max-w-[220px] block min-h-[1px]" aria-hidden>
                      .
                    </span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Built Around Real Workflow ───────────────────────────────────── */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[linear-gradient(90deg,#007BDA_0%,#007BDA_48%,#0468b8_72%,#023a66_90%,#000000_100%)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

            {/* Text — slides in from the left */}
            <motion.div
              className="text-white"
              variants={slideFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
            >
              <h2 className="font-['Faktum_Test'] text-3xl sm:text-4xl lg:text-5xl mb-6">
                Built around real workflow
              </h2>
              <p className="font-['Inter'] text-lg sm:text-xl md:text-2xl font-light leading-relaxed">
                The Underwriting Calculator is not being positioned as a vague future concept. It is being launched around a clear, usable workflow that already includes lead search, calculator creation, deposit and file review, underwriting calculations, offer modeling, exports, and user management.
              </p>
            </motion.div>

            {/* Image — slides in from the right + slight rotation */}
            <motion.div
              className="rounded-2xl overflow-hidden shadow-2xl"
              variants={rotateIn}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
            >
              <img alt="Workflow example" className="w-full h-auto" src={imgClayBanksXvSUKUoUaoUnsplash.src} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ──────────────────────────────────────────────────── */}
      <section id="faqs" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="font-['Faktum_Test'] text-3xl sm:text-4xl lg:text-5xl text-center bg-gradient-to-b from-[#0e5575] to-[#043a53] bg-clip-text text-transparent mb-12 sm:mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            Frequently Asked Questions
          </motion.h2>

          {/* FAQ items stagger in */}
          <motion.div
            className="space-y-0"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            {[
              {
                question: "What is Capital Desk launching first?",
                answer: "Capital Desk is launching the Underwriting Calculator in beta as its first product."
              },
              {
                question: "What does the Underwriting Calculator do?",
                answer: "It helps teams search leads, review data, run underwriting inputs, model offers, and save or export calculators in one workflow."
              },
              {
                question: "Can I search for leads and create calculators?",
                answer: "Yes. Users can search by lead ID or name, select the right customer, and create a calculator tied to that workflow."
              },
              {
                question: "Can I model my own offers?",
                answer: "Yes. The calculator includes a dedicated offer modeling section with outputs for daily, weekly, monthly, and withhold scenarios."
              },
              {
                question: "Can teams use it together?",
                answer: "Yes. The platform includes users, roles, and permission controls for more structured team use."
              },
              {
                question: "What comes next?",
                answer: "The next planned Capital Desk release is the MCA Calculator."
              },
            ].map((faq, index) => (
              <motion.div key={index} variants={staggerItem} className="border-b border-[#122038]/20">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between text-left gap-4 py-6"
                >
                  <p className="font-['Inter'] text-lg sm:text-xl lg:text-2xl text-[#122038]">
                    {faq.question}
                  </p>
                  <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 transition-transform duration-300 ${openFaq === index ? 'rotate-90' : ''}`}>
                    <svg className="w-full h-full" fill="none" viewBox="0 0 76.5 22.0919">
                      <path d={svgPaths.p306f3b80} fill="#122038" />
                    </svg>
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === index && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="font-['Inter'] text-base sm:text-lg text-[#444] leading-relaxed pb-6 pr-14">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <GetInTouch />

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <motion.footer
        className="bg-white border-t border-gray-200"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={vp}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Logo & Description */}
            <div className="lg:col-span-2">
              <div className="h-16 w-auto mb-6">
                <svg className="h-full w-auto" fill="none" preserveAspectRatio="xMinYMid meet" viewBox="0 0 223.994 69.1116">
                  <g>
                    <path d={svgPaths.p3ae1e780} fill="#007BDA" />
                    <path d={svgPaths.pfbdf900} fill="black" />
                    <path d={svgPaths.p2a24cd00} fill="black" />
                    <path d={svgPaths.p1831b480} fill="#007BDA" />
                  </g>
                </svg>
              </div>
              <p className="font-['Inter'] text-lg text-[#404040] mb-6 max-w-md">
                Workflow tools for MCA teams, starting with the Underwriting Calculator.
              </p>

              {/* Social Media */}
              <div className="flex gap-4">
                <div className="bg-[#d7e0e5] p-2 rounded-full hover:bg-[#007BDA] transition-colors cursor-pointer">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                    <path d={svgPaths.p1f3eb480} fill="white" />
                  </svg>
                </div>
                <div className="bg-[#d7e0e5] p-2 rounded-full hover:bg-[#007BDA] transition-colors cursor-pointer">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                    <path d={svgPaths.p35d17b00} fill="white" />
                  </svg>
                </div>
                <div className="bg-[#d7e0e5] p-2 rounded-full hover:bg-[#007BDA] transition-colors cursor-pointer">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                    <path d={svgPaths.p50be600} fill="white" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Home Links */}
            <div>
              <h3 className="font-['Inter'] font-bold text-xl sm:text-2xl text-[#12141d] mb-6">Home</h3>
              <ul className="space-y-3 font-['Inter'] text-lg text-[#404040]">
                <li><a href="#product" className="hover:text-[#007BDA] transition-colors">Product</a></li>
                <li><a href="#how-it-works" className="hover:text-[#007BDA] transition-colors">How It Works</a></li>
                <li><a href="#beta" className="hover:text-[#007BDA] transition-colors">Beta Access</a></li>
                <li><a href="#faqs" className="hover:text-[#007BDA] transition-colors">FAQ</a></li>
                <li><a href="#contact" className="hover:text-[#007BDA] transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* About Us Links */}
            <div>
              <h3 className="font-['Inter'] font-bold text-xl sm:text-2xl text-[#12141d] mb-6">About Us</h3>
              <ul className="space-y-3 font-['Inter'] text-lg text-[#404040]">
                <li><a href="#company" className="hover:text-[#007BDA] transition-colors">Company</a></li>
                <li><a href="#contact" className="hover:text-[#007BDA] transition-colors">Contact</a></li>
                <li><a href="#career" className="hover:text-[#007BDA] transition-colors">Career</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-[#f2f5f6] border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="font-['Inter'] font-medium text-[#92a7b0]">
                ©2025-2026 Capital Desk
              </p>
              <div className="flex items-center gap-2 text-[#92a7b0]">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p1dd6ca00} fill="#92A7B0" />
                </svg>
                <span className="font-['Inter'] font-medium">English</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                  <path d={svgPaths.p21637080} fill="#92A7B0" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
