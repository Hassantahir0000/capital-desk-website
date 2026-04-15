import { describe, expect, it } from "vitest";
import {
  EARLY_USER_BENEFIT_CARDS,
  EARLY_USERS_HEADING,
  FIRST_STEP_ROADMAP_STEPS,
  FIRST_STEP_HEADING,
  FIRST_STEP_SUBTEXT,
  GET_IN_TOUCH,
  LAUNCHING_BETA,
  TEAM_AUDIENCE_CARDS,
  WHY_THIS_MATTERS_BULLETS,
} from "../homeSectionsCopy";

describe("WHY_THIS_MATTERS_BULLETS", () => {
  it("has three non-empty items", () => {
    expect(WHY_THIS_MATTERS_BULLETS).toHaveLength(3);
    for (const line of WHY_THIS_MATTERS_BULLETS) {
      expect(line.trim().length).toBeGreaterThan(0);
    }
  });
});

describe("EARLY_USER_BENEFIT_CARDS", () => {
  it("defines four benefits with icons", () => {
    expect(EARLY_USERS_HEADING.length).toBeGreaterThan(0);
    expect(EARLY_USER_BENEFIT_CARDS).toHaveLength(4);
    const icons = new Set(EARLY_USER_BENEFIT_CARDS.map((c) => c.icon));
    expect(icons.size).toBe(4);
    for (const card of EARLY_USER_BENEFIT_CARDS) {
      expect(card.title.trim().length).toBeGreaterThan(3);
      expect(card.description.trim().length).toBeGreaterThan(20);
    }
  });
});

describe("FIRST_STEP_ROADMAP_STEPS", () => {
  it("has five steps with alternating sides starting below", () => {
    expect(FIRST_STEP_HEADING).toBe("This is the first step");
    expect(FIRST_STEP_SUBTEXT).toContain("Underwriting Calculator");
    expect(FIRST_STEP_ROADMAP_STEPS).toHaveLength(5);
    const sides = FIRST_STEP_ROADMAP_STEPS.map((s) => s.side);
    expect(sides).toEqual(["below", "above", "below", "above", "below"]);
    for (const step of FIRST_STEP_ROADMAP_STEPS) {
      expect(step.description.length).toBeGreaterThan(30);
    }
  });
});

describe("GET_IN_TOUCH", () => {
  it("includes badge, heading, three info cards, and form strings", () => {
    expect(GET_IN_TOUCH.badge).toBe("Get in Touch");
    expect(GET_IN_TOUCH.heading.toLowerCase()).toContain("touch");
    expect(GET_IN_TOUCH.infoCards).toHaveLength(3);
    expect(new Set(GET_IN_TOUCH.infoCards.map((c) => c.icon)).size).toBe(3);
    expect(GET_IN_TOUCH.form.submitLabel).toBe("Submit Request");
    expect(GET_IN_TOUCH.form.disclaimer.length).toBeGreaterThan(20);
  });
});

describe("LAUNCHING_BETA", () => {
  it("includes headline, body, roadmap lines, and CTA", () => {
    expect(LAUNCHING_BETA.title).toBe("Launching in beta");
    expect(LAUNCHING_BETA.body.length).toBeGreaterThan(80);
    expect(LAUNCHING_BETA.launchingFirst).toContain("Underwriting Calculator");
    expect(LAUNCHING_BETA.comingNext).toContain("MCA Calculator");
    expect(LAUNCHING_BETA.ctaLabel).toBe("Join the Beta");
  });
});

describe("TEAM_AUDIENCE_CARDS", () => {
  it("has exactly three cards in broker / underwriter / funding order", () => {
    expect(TEAM_AUDIENCE_CARDS).toHaveLength(3);
    expect(TEAM_AUDIENCE_CARDS[0].title).toBe("For Brokers");
    expect(TEAM_AUDIENCE_CARDS[1].title).toBe("For Underwriters");
    expect(TEAM_AUDIENCE_CARDS[2].title).toBe("For Funding Teams");
  });

  it("uses gradient for outer cards and solid for the featured middle card", () => {
    expect(TEAM_AUDIENCE_CARDS[0].variant).toBe("gradient");
    expect(TEAM_AUDIENCE_CARDS[1].variant).toBe("solid");
    expect(TEAM_AUDIENCE_CARDS[2].variant).toBe("gradient");
  });

  it("requires non-empty descriptions", () => {
    for (const card of TEAM_AUDIENCE_CARDS) {
      expect(card.description.trim().length).toBeGreaterThan(20);
    }
  });
});
