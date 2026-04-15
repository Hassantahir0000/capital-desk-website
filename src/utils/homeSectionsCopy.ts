export const WHY_THIS_MATTERS_BULLETS = [
  "Structured deal evaluation from start to finish",
  "One workflow replacing scattered manual processes",
  "Built for scale across brokers, underwriters, and funding teams",
] as const;

export type TeamAudienceCardVariant = "gradient" | "solid";

export type TeamAudienceCard = {
  title: string;
  description: string;
  variant: TeamAudienceCardVariant;
};

export const LAUNCHING_BETA = {
  title: "Launching in beta",
  body:
    "The Capital Desk Underwriting Calculator is the first product launching under Capital Desk. This beta phase is focused on putting the product in front of real users, refining workflow based on actual usage, and building the next layer of Capital Desk tools from a strong operational foundation.",
  launchingFirst: "Launching first: Underwriting Calculator",
  comingNext: "Coming next: MCA Calculator",
  ctaLabel: "Join the Beta",
} as const;

export const EARLY_USERS_HEADING = "Why early users should care";

export type EarlyUserBenefitIcon = "sparkle" | "chart" | "people" | "star";

export type EarlyUserBenefitCard = {
  title: string;
  description: string;
  icon: EarlyUserBenefitIcon;
};

export const EARLY_USER_BENEFIT_CARDS: EarlyUserBenefitCard[] = [
  {
    title: "Faster deal review",
    description:
      "Work through deals with less friction and less reliance on disconnected manual processes.",
    icon: "sparkle",
  },
  {
    title: "Clearer offer decisions",
    description:
      "Use a more structured approach to model offers and evaluate potential outcomes.",
    icon: "chart",
  },
  {
    title: "Better team consistency",
    description:
      "Create a repeatable workflow across brokers, underwriters, and internal teams.",
    icon: "people",
  },
  {
    title: "Early access advantage",
    description:
      "Get in early, see the product before wider rollout, and help shape the next phase of Capital Desk.",
    icon: "star",
  },
];

export const FIRST_STEP_HEADING = "This is the first step";

export const FIRST_STEP_SUBTEXT =
  "Capital Desk begins with the Underwriting Calculator because underwriting sits at the center of daily MCA decision-making. By launching here first, the brand starts with a focused product that solves a real operational problem. From there, the roadmap expands.";

export type RoadmapTimelineSide = "above" | "below";

export type RoadmapTimelineStep = {
  title: string;
  description: string;
  side: RoadmapTimelineSide;
};

/** Five roadmap beats; `side` controls alternating layout on large screens (below / above the axis). */
export const FIRST_STEP_ROADMAP_STEPS: RoadmapTimelineStep[] = [
  {
    title: "Underwriting Calculator (beta)",
    description:
      "Launch the core workflow for lead search, file review, underwriting inputs, offer modeling, and export in one place.",
    side: "below",
  },
  {
    title: "Workflow depth from usage",
    description:
      "Refine paths, validations, and defaults based on how real teams move deals through the calculator every day.",
    side: "above",
  },
  {
    title: "Team controls & scale",
    description:
      "Strengthen roles, permissions, and exports so brokers, underwriters, and funding teams share one consistent process.",
    side: "below",
  },
  {
    title: "MCA Calculator & extensions",
    description:
      "Add adjacent calculators and shared context so underwriting and portfolio decisions stay connected.",
    side: "above",
  },
  {
    title: "Broader Capital Desk platform",
    description:
      "Expand into additional MCA workflow tools built on the same structured foundation established in beta.",
    side: "below",
  },
];

export const TEAM_AUDIENCE_CARDS: TeamAudienceCard[] = [
  {
    title: "For Brokers",
    description:
      "Review opportunities faster, structure offers more clearly, and move into underwriting conversations with better preparation.",
    variant: "gradient",
  },
  {
    title: "For Underwriters",
    description:
      "Work through deal evaluation in a more organized environment with better visibility into data, assumptions, and offer scenarios.",
    variant: "solid",
  },
  {
    title: "For Funding Teams",
    description:
      "Bring more consistency to internal workflows with shared calculators, exports, and user-level controls.",
    variant: "gradient",
  },
];

export type GetInTouchInfoIcon = "star" | "calendar" | "clock";

export type GetInTouchInfoCard = {
  icon: GetInTouchInfoIcon;
  title: string;
  subtitle: string;
};

export const GET_IN_TOUCH = {
  badge: "Get in Touch",
  heading: "Get in touch",
  description:
    "Want early access, a walkthrough, or more details on the Capital Desk Underwriting Calculator? Contact our team to request beta access, schedule a demo, or learn what is coming next on the Capital Desk roadmap.",
  infoCards: [
    {
      icon: "star",
      title: "Request Beta Access",
      subtitle: "Get early access to the Underwriting Calculator before wider rollout.",
    },
    {
      icon: "calendar",
      title: "Schedule a Demo",
      subtitle: "Walk through the product with our team and see how it fits your underwriting workflow.",
    },
    {
      icon: "clock",
      title: "Roadmap & timing",
      subtitle: "Learn what is shipping next on Capital Desk and how beta feedback shapes the product.",
    },
  ] satisfies GetInTouchInfoCard[],
  form: {
    fullNameLabel: "Full Name *",
    fullNamePlaceholder: "Jane Smith",
    companyLabel: "Company Name *",
    companyPlaceholder: "Acme Funding LLC",
    emailLabel: "Work Email *",
    emailPlaceholder: "jane@company.com",
    phoneLabel: "Phone Number",
    phonePlaceholder: "+1 (555) 000-0000",
    messageLabel: "Message",
    messagePlaceholder:
      "Tell us about your team and how you'd use the Underwriting Calculator...",
    submitLabel: "Submit Request",
    disclaimer: "By submitting you agree to be contacted about Capital Desk beta access.",
  },
} as const;
