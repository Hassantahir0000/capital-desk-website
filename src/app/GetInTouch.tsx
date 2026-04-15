"use client";

import { type FormEvent } from "react";
import { motion } from "motion/react";
import { GET_IN_TOUCH, type GetInTouchInfoIcon } from "../utils/homeSectionsCopy";

const vp = { once: true, amount: 0.15 };

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

function InfoIcon({ name }: { name: GetInTouchInfoIcon }) {
  const cls = "w-5 h-5 text-white";
  switch (name) {
    case "star":
      return (
        <svg className={cls} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M12 2.5l2.8 5.7 6.3.9-4.5 4.4 1.1 6.3L12 17.4 6.3 19.8l1.1-6.3-4.5-4.4 6.3-.9L12 2.5z" />
        </svg>
      );
    case "calendar":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path strokeLinecap="round" d="M16 3v4M8 3v4M3 11h18" />
        </svg>
      );
    case "clock":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
          <circle cx="12" cy="12" r="9" />
          <path strokeLinecap="round" d="M12 7v6l3 2" />
        </svg>
      );
    default:
      return null;
  }
}

export default function GetInTouch() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  const f = GET_IN_TOUCH.form;

  return (
    <section
      id="contact"
      aria-labelledby="get-in-touch-heading"
      className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl overflow-hidden shadow-2xl bg-[linear-gradient(90deg,#007BDA_0%,#007BDA_52%,#0a7ee8_62%,#0468b8_76%,#0a4a7a_88%,#0c3558_100%)] p-8 sm:p-10 lg:p-12 xl:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <motion.span
                className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-['Inter'] font-medium text-white mb-6"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
              >
                {GET_IN_TOUCH.badge}
              </motion.span>
              <motion.h2
                id="get-in-touch-heading"
                className="font-['Faktum_Test'] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
                transition={{ delay: 0.04 }}
              >
                {GET_IN_TOUCH.heading}
              </motion.h2>
              <motion.p
                className="font-['Inter'] text-base sm:text-lg text-white/85 leading-relaxed mb-10 max-w-xl"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
                transition={{ delay: 0.08 }}
              >
                {GET_IN_TOUCH.description}
              </motion.p>
              <motion.ul
                className="space-y-4"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
                transition={{ delay: 0.12 }}
              >
                {GET_IN_TOUCH.infoCards.map((card) => (
                  <li
                    key={card.title}
                    className="flex gap-4 rounded-2xl border border-white/15 bg-white/10 p-4 sm:p-5 backdrop-blur-sm"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/20">
                      <InfoIcon name={card.icon} />
                    </div>
                    <div>
                      <p className="font-['Inter'] font-semibold text-white">{card.title}</p>
                      <p className="font-['Inter'] text-sm sm:text-base text-white/75 mt-1 leading-relaxed">{card.subtitle}</p>
                    </div>
                  </li>
                ))}
              </motion.ul>
            </div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              transition={{ delay: 0.06 }}
              className="w-full rounded-2xl border border-white/20 bg-[#031f3a]/55 p-6 sm:p-8 backdrop-blur-md shadow-inner"
            >
              <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="git-full-name" className="mb-1.5 block text-sm font-['Inter'] font-medium text-white">
                      {f.fullNameLabel}
                    </label>
                    <input
                      id="git-full-name"
                      name="fullName"
                      type="text"
                      autoComplete="name"
                      placeholder={f.fullNamePlaceholder}
                      className="w-full rounded-xl border border-white/20 bg-[#042a47]/50 px-4 py-3 font-['Inter'] text-white placeholder:text-gray-400 outline-none focus:border-white/40 focus:ring-2 focus:ring-white/30"
                    />
                  </div>
                  <div>
                    <label htmlFor="git-company" className="mb-1.5 block text-sm font-['Inter'] font-medium text-white">
                      {f.companyLabel}
                    </label>
                    <input
                      id="git-company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      placeholder={f.companyPlaceholder}
                      className="w-full rounded-xl border border-white/20 bg-[#042a47]/50 px-4 py-3 font-['Inter'] text-white placeholder:text-gray-400 outline-none focus:border-white/40 focus:ring-2 focus:ring-white/30"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="git-email" className="mb-1.5 block text-sm font-['Inter'] font-medium text-white">
                    {f.emailLabel}
                  </label>
                  <input
                    id="git-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder={f.emailPlaceholder}
                    className="w-full rounded-xl border border-white/20 bg-[#042a47]/50 px-4 py-3 font-['Inter'] text-white placeholder:text-gray-400 outline-none focus:border-white/40 focus:ring-2 focus:ring-white/30"
                  />
                </div>
                <div>
                  <label htmlFor="git-phone" className="mb-1.5 block text-sm font-['Inter'] font-medium text-white">
                    {f.phoneLabel}
                  </label>
                  <input
                    id="git-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder={f.phonePlaceholder}
                    className="w-full rounded-xl border border-white/20 bg-[#042a47]/50 px-4 py-3 font-['Inter'] text-white placeholder:text-gray-400 outline-none focus:border-white/40 focus:ring-2 focus:ring-white/30"
                  />
                </div>
                <div>
                  <label htmlFor="git-message" className="mb-1.5 block text-sm font-['Inter'] font-medium text-white">
                    {f.messageLabel}
                  </label>
                  <textarea
                    id="git-message"
                    name="message"
                    rows={4}
                    placeholder={f.messagePlaceholder}
                    className="w-full resize-y rounded-xl border border-white/20 bg-[#042a47]/50 px-4 py-3 font-['Inter'] text-white placeholder:text-gray-400 outline-none focus:border-white/40 focus:ring-2 focus:ring-white/30 min-h-[120px]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#007BDA] py-3.5 font-['Inter'] font-semibold text-white shadow-lg transition-opacity hover:opacity-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {f.submitLabel}
                </button>
                <p className="text-center font-['Inter'] text-xs sm:text-sm text-white/70">{f.disclaimer}</p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
