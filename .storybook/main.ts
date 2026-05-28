import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: [
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],

  addons: [],

  framework: "@storybook/react-vite",

  viteFinal: async (config) => {
    return mergeConfig(config, {
      server: {
        host: "0.0.0.0",

        hmr: {
          protocol: "wss",
        },
      },
    });
  },
};

export default config;