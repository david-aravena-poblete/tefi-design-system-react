import type { Preview } from "@storybook/react-vite";

import "../src/index.css";

const preview: Preview = {

  globalTypes: {
    theme: {
      name: "Theme",
      defaultValue: "light",

      toolbar: {
        icon: "mirror",

        items: [
          { value: "light", title: "Light" },
          { value: "dark", title: "Dark" },
        ],
      },
    },

    brand: {
      name: "Brand",
      defaultValue: "default",

      toolbar: {
        icon: "paintbrush",

        items: [
          { value: "default", title: "Default" },
          { value: "daravena", title: "Daravena" },
        ],
      },
    },
  },

  decorators: [
    (Story, context) => {

      document.documentElement.setAttribute(
        "data-theme",
        context.globals.theme
      );

      document.documentElement.setAttribute(
        "data-brand",
        context.globals.brand
      );

      return Story();
    },
  ],

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;