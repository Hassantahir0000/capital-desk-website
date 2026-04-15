"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./Navbar";
import svgPaths from "../imports/Home-2/svg-mvwhm2i239";
import imgSb1 from "../imports/Home-2/ddc493d44b41d3f52b3d27457e6641ac57120ef9.png";
import imgEllipse6 from "../imports/Home-2/390b1861ea0e79201aefeba18d8c83bc94e99c87.png";
import imgEllipse7 from "../imports/Home-2/24530c13b99c10289ad2e34505aa800adc64f3b8.png";
import imgEllipse8 from "../imports/Home-2/0381804f069369ab31d97f5ffca868fd7c14ed2b.png";
import imgClayBanks from "../imports/Home-2/what-capital-desk.png";

// ── Animation variants ──────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" as const } },
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

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

// viewport preset — animate once when 15% of element is visible
const vp = { once: true, amount: 0.15 };

// ── Logo SVG ─────────────────────────────────────────────────────────────────
function CapitalDeskLogo({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" preserveAspectRatio="xMinYMid meet" viewBox="0 0 223.994 69.1116">
      <g>
        <path d={svgPaths.p3ae1e780} fill="#007BDA" />
        <path d={svgPaths.pfbdf900} fill="black" />
        <path d={svgPaths.p2a24cd00} fill="black" />
        <path d={svgPaths.p1831b480} fill="#007BDA" />
      </g>
    </svg>
  );
}

// ── Plus / Minus icon for accordion ─────────────────────────────────────────
function PlusIcon({ open }: { open: boolean }) {
  return (
    <div className="relative w-6 h-6 flex-shrink-0">
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="block w-4 h-0.5 bg-[#1a3347] transition-all duration-300" />
      </span>
      <span className="absolute inset-0 flex items-center justify-center">
        <span
          className={`block w-0.5 h-4 bg-[#1a3347] transition-all duration-300 ${open ? "opacity-0 rotate-90" : "opacity-100 rotate-0"}`}
        />
      </span>
    </div>
  );
}

interface AboutUsProps {
  onNavigateHome?: () => void;
}

export default function AboutUs({ onNavigateHome }: AboutUsProps) {
  // 0 = "Our first product" open by default
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const accordionItems = [
    {
      title: "Our first product",
      body: "The first Capital Desk product is the Underwriting Calculator. It is being launched in beta as a practical underwriting tool that supports the real steps teams already work through: searching leads, creating calculators, reviewing deposit and account activity, accessing supporting files, entering underwriting assumptions, modeling offer scenarios, reviewing active and past offers, and saving or exporting the work for internal use. Rather than trying to position Capital Desk as a vague future concept, we are launching something teams can use right now.",
    },
    {
      title: "A product-first approach",
      body: "We build tools around specific, real workflows — not vague platforms. Every feature in the Underwriting Calculator exists because it maps to an actual step in the MCA underwriting process.",
    },
    {
      title: "Built around real workflow",
      body: "The Underwriting Calculator covers lead search, deposit review, underwriting inputs, offer modeling, exports, and user management — all in one structured flow.",
    },
    {
      title: "Built for teams moving deals forward",
      body: "Speed and structure shouldn't be at odds. Capital Desk helps teams move faster by making the right information visible at the right time.",
    },
  ];

  return (
    <div className="bg-[#f5f5f5] min-h-screen w-full overflow-x-hidden">

      <Navbar currentPage="about" onNavigateHome={onNavigateHome} />

      {/* ── Section 1: Hero ─────────────────────────────────────────────── */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 lg:pt-32 pb-24 sm:pb-32 lg:pb-48">
        <motion.div
          className="max-w-7xl mx-auto text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow label */}
          <motion.div variants={fadeUp} className="flex items-center justify-center mb-6">
            <span className="inline-flex items-center gap-2 bg-white border border-[#d8d8d8] text-[#007bda] text-sm sm:text-base font-['Inter'] font-medium px-5 py-2 rounded-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#007bda] inline-block" />
              About Us
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-['Faktum_Test'] text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-[1.1] text-[#1a3347] tracking-tight mb-4 sm:mb-6 px-4 max-w-5xl mx-auto"
          >
            Built for the workflow behind better underwriting
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="font-['Inter'] text-lg sm:text-xl md:text-2xl text-[#444] leading-relaxed max-w-4xl mx-auto mb-8 sm:mb-12 px-4"
          >
            Capital Desk is a software brand focused on building practical tools for the MCA space.
            We are starting with the Capital Desk Underwriting Calculator — a product designed to help
            brokers, underwriters, and funding teams review deals more clearly, and make decisions
            forward with greater structure and clarity. This is the first step in the Capital Desk
            roadmap, with more workflow tools planned next.
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
              Learn Our Story
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

        
      </section>

      {/* ── Section 2: Why Capital Desk Exists ──────────────────────────── */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">

            {/* Left: Heading + Body ─────────────────────────────────────── */}
            <motion.div
              variants={slideFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
            >
              <h2 className="font-['Faktum_Test'] text-3xl sm:text-4xl lg:text-5xl text-[#007BDA] leading-tight mb-8">
                Why Capital Desk exists
              </h2>

              <div className="space-y-5 font-['Inter'] text-base sm:text-lg text-[#444] leading-relaxed">
                <p>
                  Capital Desk was built around a simple idea: some of the most important work in the
                  MCA process still happens through scattered spreadsheets, manual account tracking,
                  and disconnected files. Review and approval workflows slow down because the tools
                  aren't built for the actual job.
                </p>
                <p>
                  This is one of the clearest examples of that problem. It is repeated every day, it
                  directly affects how quickly teams can move. That is why Capital Desk is starting
                  here. We are building workflow software that brings more structure, visibility, and
                  consistency to the underwriting process — beginning with a product designed for
                  actual use, not just presentation.
                </p>
              </div>
            </motion.div>

            {/* Right: unified accordion stack ───────────────────────────── */}
            <motion.div
              variants={slideFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              className="space-y-3"
            >
              {accordionItems.map((item, index) => {
                const isOpen = openAccordion === index;
                return (
                  <div
                    key={index}
                    className={`rounded-2xl overflow-hidden shadow-sm transition-colors duration-300 ${
                      isOpen
                        ? "bg-gradient-to-br from-[#1565c0] via-[#1976d2] to-[#1a237e] border-transparent"
                        : "bg-white border border-[#e8eaed]"
                    }`}
                  >
                    <button
                      onClick={() => setOpenAccordion(isOpen ? null : index)}
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className={`font-['Inter'] text-base sm:text-lg font-medium transition-colors duration-300 ${isOpen ? "text-white" : "text-[#1a3347]"}`}>
                        {item.title}
                      </span>
                      {/* Chevron: rotates 180° when open */}
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-white/20 rotate-180" : "bg-[#f0f2f5] rotate-0"}`}>
                        <svg className={`w-4 h-4 transition-colors duration-300 ${isOpen ? "text-white" : "text-[#1a3347]"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="body"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="font-['Inter'] text-sm sm:text-base text-white/80 leading-relaxed px-6 pb-5 border-t border-white/20 pt-4">
                            {item.body}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Section 3: This is only the beginning ───────────────────────── */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#f0f2f5]">
        <div className="max-w-5xl mx-auto">

          {/* Heading + subtext */}
          <div className="text-center mb-16 sm:mb-20">
            <motion.h2
              className="font-['Faktum_Test'] text-3xl sm:text-4xl lg:text-5xl text-[#007bda] mb-6"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
            >
              This is only the beginning
            </motion.h2>
            <motion.p
              className="font-['Inter'] text-base sm:text-lg text-[#555] leading-relaxed max-w-3xl mx-auto"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              transition={{ delay: 0.1 }}
            >
              The Underwriting Calculator is the first Capital Desk product launching in beta, but it is
              not the last. We are starting with underwriting because it sits at the center of daily MCA
              decision-making. From there, Capital Desk will continue expanding with additional tools
              designed to improve workflow, speed, and operational clarity across the space.
            </motion.p>
          </div>

          {/* ── Roadmap grid ─────────────────────────────────────────────── */}
          {/*
            4-col grid layout — dots alternate above/below:
              Col 1: dot → "Underwriting Calculator" below
              Col 2: "Launching first." above → dot
              Col 3: dot → "MCA Calculator" below
              Col 4: "Coming Next." above → dot
          */}
          <motion.div
            className="grid grid-cols-4"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            transition={{ delay: 0.2 }}
          >

            {/* ── ROW A: top labels (cols 1 & 3 empty, cols 2 & 4 have boxes) ── */}
            {/* Col 1 — empty */}
            <div />
            {/* Col 2 — "Launching first." */}
            <div className="flex flex-col items-center gap-0">
              <div className="border border-dashed border-[#b0bec5] rounded-2xl px-4 py-4 w-full text-center">
                <span className="font-['Inter'] text-base sm:text-lg text-[#1a3347]">Launching first.</span>
              </div>
              {/* connector down to dot */}
              <div className="w-px h-6 border-l border-dashed border-[#b0bec5]" />
            </div>
            {/* Col 3 — empty */}
            <div />
            {/* Col 4 — "Coming Next." */}
            <div className="flex flex-col items-center gap-0">
              <div className="rounded-2xl px-4 py-4 w-full text-center bg-gradient-to-br from-[#1565c0] via-[#1976d2] to-[#1a237e] shadow-md">
                <span className="font-['Inter'] text-base sm:text-lg text-white font-medium">Coming Next.</span>
              </div>
              {/* connector down to dot */}
              <div className="w-px h-6 border-l border-[#1565c0]/60" />
            </div>

            {/* ── ROW B: the 4 dots + dashed horizontal line ─────────────── */}
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="relative flex items-center justify-center py-0">
                {/* horizontal dashed line segment — drawn as a full-width rule behind each cell */}
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 border-t border-dashed border-[#90a4ae]/60 z-0" />
                {/* dot */}
                <div className="relative z-10 w-4 h-4 rounded-full bg-[#1565c0] shadow-sm ring-2 ring-[#1565c0]/30 ring-offset-2 ring-offset-[#f0f2f5]" />
              </div>
            ))}

            {/* ── ROW C: connector down from col-1 & col-3 dots ──────────── */}
            {/* Col 1 — connector down */}
            <div className="flex flex-col items-center">
              <div className="w-px h-6 border-l border-dashed border-[#b0bec5]" />
            </div>
            {/* Col 2 — empty */}
            <div />
            {/* Col 3 — connector down */}
            <div className="flex flex-col items-center">
              <div className="w-px h-6 border-l border-dashed border-[#b0bec5]" />
            </div>
            {/* Col 4 — empty */}
            <div />

            {/* ── ROW D: bottom labels (cols 1 & 3 have boxes, 2 & 4 empty) ── */}
            {/* Col 1 — "Underwriting Calculator" */}
            <div className="flex flex-col items-center">
              <div className="border border-dashed border-[#b0bec5] rounded-2xl px-4 py-4 w-full text-left">
                <span className="font-['Inter'] text-base sm:text-lg text-[#1a3347]">Underwriting Calculator</span>
              </div>
            </div>
            {/* Col 2 — empty */}
            <div />
            {/* Col 3 — "MCA Calculator" */}
            <div className="flex flex-col items-center">
              <div className="border border-dashed border-[#b0bec5] rounded-2xl px-4 py-4 w-full text-left">
                <span className="font-['Inter'] text-base sm:text-lg text-[#1a3347]">MCA Calculator</span>
              </div>
            </div>
            {/* Col 4 — empty */}
            <div />

          </motion.div>
        </div>
      </section>

      {/* ── Section 4: What Capital Desk stands for ──────────────────────── */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

            {/* Left: heading + body */}
            <motion.div
              variants={slideFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
            >
              <h2 className="font-['Faktum_Test'] text-3xl sm:text-4xl lg:text-5xl text-[#007bda] leading-tight mb-8">
                What Capital Desk stands for
              </h2>
              <div className="space-y-5 font-['Inter'] text-base sm:text-lg text-[#444] leading-relaxed">
                <p>
                  We believe good software should make complex work feel clearer. We believe workflow
                  matters just as much as the output. We believe trust is built when a product is
                  useful, focused, and grounded in real operations.
                </p>
                <p>
                  And we believe the strongest way to enter a market is not by saying everything at
                  once, but by launching something real, doing it well, and building from there. That
                  is the approach behind Capital Desk.
                </p>
              </div>
            </motion.div>

            {/* Right: image */}
            <motion.div
              className="rounded-3xl overflow-hidden shadow-xl"
              variants={slideFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
            >
              <img
                alt="Professional at work"
                className="w-full h-auto object-cover"
                src={imgClayBanks.src}
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
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
                answer: "Capital Desk is launching the Underwriting Calculator in beta as its first product.",
              },
              {
                question: "What does the Underwriting Calculator do?",
                answer: "It helps teams search leads, review data, run underwriting inputs, model offers, and save or export calculators in one workflow.",
              },
              {
                question: "Can I search for leads and create calculators?",
                answer: "Yes. Users can search by lead ID or name, select the right customer, and create a calculator tied to that workflow.",
              },
              {
                question: "Can I model my own offers?",
                answer: "Yes. The calculator includes a dedicated offer modeling section with outputs for daily, weekly, monthly, and withhold scenarios.",
              },
              {
                question: "Can teams use it together?",
                answer: "Yes. The platform includes users, roles, and permission controls for more structured team use.",
              },
              {
                question: "What comes next?",
                answer: "The next planned Capital Desk release is the MCA Calculator.",
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
                  <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 transition-transform duration-300 ${openFaq === index ? "rotate-90" : ""}`}>
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
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Logo & Description */}
            <div className="lg:col-span-2">
              <div className="h-16 w-auto mb-6">
                <CapitalDeskLogo className="h-full w-auto" />
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
                <li><button onClick={onNavigateHome} className="hover:text-[#007BDA] transition-colors">Product</button></li>
                <li><button onClick={onNavigateHome} className="hover:text-[#007BDA] transition-colors">How It Works</button></li>
                <li><button onClick={onNavigateHome} className="hover:text-[#007BDA] transition-colors">Beta Access</button></li>
                <li><button onClick={onNavigateHome} className="hover:text-[#007BDA] transition-colors">FAQ</button></li>
                <li><button onClick={onNavigateHome} className="hover:text-[#007BDA] transition-colors">Contact</button></li>
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
      </footer>
    </div>
  );
}
