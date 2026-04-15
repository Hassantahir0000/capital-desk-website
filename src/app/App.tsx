"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import AboutUs from "./AboutUs";
import Navbar from "./Navbar";
import svgPaths from "../imports/Home-2/svg-mvwhm2i239";
import imgSb1 from "../imports/Home-2/ddc493d44b41d3f52b3d27457e6641ac57120ef9.png";
import imgEllipse6 from "../imports/Home-2/390b1861ea0e79201aefeba18d8c83bc94e99c87.png";
import imgEllipse7 from "../imports/Home-2/24530c13b99c10289ad2e34505aa800adc64f3b8.png";
import imgEllipse8 from "../imports/Home-2/0381804f069369ab31d97f5ffca868fd7c14ed2b.png";
import imgClayBanksXvSUKUoUaoUnsplash from "../imports/Home-2/0e8615eb294c38fac8af71c289b1ce17a097e2ee.png";
import imgYoungProfessionalWomanUsingLaptopToSearchForJobsOnlineAdvertisingWebServiceIsolatedOnTransparentBackgroundG1411 from "../imports/Home-2/0c57ce125f31c2174195fca4fccc8523a6929452.png";
import imgRectangle35 from "../imports/Home-2/ac9d3ddbbb1b5bdc1e63226b22d24566e3c65963.png";

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
          <motion.h1
            variants={fadeUp}
            className="font-['Faktum_Test'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-[#1a3347] tracking-tight mb-4 sm:mb-6 px-4"
          >
            The Capital Desk Underwriting Calculator is launching in beta
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="font-['Inter'] text-lg sm:text-xl md:text-2xl text-[#444] leading-relaxed max-w-4xl mx-auto mb-8 sm:mb-12 px-4"
          >
            A smarter way for brokers and MCA teams to review deals, model offers, and move underwriting decisions forward with more speed, structure, and clarity.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            id="beta"
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
                  className="absolute bottom-8 left-8 bg-white rounded-2xl p-4 shadow-xl"
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

      {/* ── Benefits Section ─────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
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

          {/* Benefit cards — stagger with alternating slide directions */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            {[
              { title: "Guaranteed Commissions", description: "Benefit from guaranteed commissions, ensuring that your efforts are always rewarded fairly and promptly." },
              { title: "Better Commission Splits", description: "Enjoy better commission splits that maximize your earnings and reward your hard work." },
              { title: "Ongoing Training Tools & Webinars", description: "Access a wealth of training tools and webinars designed to enhance your skills, knowledge, and effectiveness as a broker." },
              { title: "Remote Work", description: "Embrace the flexibility of remote work, allowing you to balance your professional and personal life while still achieving success in the MCA industry." },
              { title: "Thriving MCA Space", description: "Join a thriving MCA industry with endless opportunities for growth and success, backed by the expertise and support of the SuperBroker platform." },
              { title: "Funder Match", description: "Utilize our Funder Match system to connect with the best funders for your clients' needs, ensuring successful deals and satisfied customers." }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="border border-dashed border-[rgba(0,0,0,0.28)] rounded-2xl p-6 sm:p-8 hover:border-[#007BDA] transition-colors"
              >
                <h3 className="font-['Faktum_Test'] text-xl sm:text-2xl text-[#1a3347] mb-4">{benefit.title}</h3>
                <p className="font-['Inter'] text-base sm:text-lg text-[#444] leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Built Around Real Workflow ───────────────────────────────────── */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#007BDA] to-black">
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
