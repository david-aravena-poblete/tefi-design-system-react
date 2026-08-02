/* ======================================
   IMPORTS
====================================== */

import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import { createBox } from "@/laboratory/recipes/box";

/* ======================================
   META
====================================== */

const meta = {
  title: "Laboratory/Architecture",
} satisfies Meta;

export default meta;

type Story = StoryObj;

/* ======================================
   STORIES
====================================== */

export const Validation: Story = {
  render: () => {
    const className = createBox({
      layout: {
        direction: "row",
        between: "md",
        inside: "lg",
      },

      surface: {
        background: "blue",
        radius: "md",
      },
    });

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <h2>Generated classes</h2>

        <pre
          style={{
            padding: "16px",
            border: "1px solid #ddd",
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
          }}
        >
          {className}
        </pre>

        <h2>Rendered element</h2>

        <div
          className={className}
          style={{
            minHeight: "200px",
          }}
        >
          🚀 Architecture validated!
        </div>
      </div>
    );
  },
};