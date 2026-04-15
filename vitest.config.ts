import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    include: ["src/utils/_tests/**/*.test.ts"],
    coverage: {
      provider: "v8",
      include: ["src/utils/homeSectionsCopy.ts"],
    },
  },
});
