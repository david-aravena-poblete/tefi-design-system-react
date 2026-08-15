/* ======================================
   IMPORTS
====================================== */

import type { Meta, StoryObj } from "@storybook/react-vite";

import { Grid } from "./Grid";

/* ======================================
   META
====================================== */

const meta = {
  title: "Layouts/Grid",

  component: Grid,

  parameters: {
    layout: "fullscreen",
  },

  tags: ["autodocs"],

  argTypes: {
    children: {
      control: false,

      table: {
        disable: true,
      },
    },

    columns: {
      control: "select",

      options: ["auto", 1, 2, 3, 4, 6, 12],

      mapping: {
        auto: undefined,
      },
    },

    gap: {
      control: "select",

      options: ["xs", "sm", "md", "lg", "xl", "xxl", "xxxl"],
    },
  },
} satisfies Meta<typeof Grid>;

export default meta;

type Story = StoryObj<typeof meta>;

/* ======================================
   STYLES
====================================== */

const pageStyle = {
  padding: "var(--space-xl)",

  background: "var(--color-bg-primary)",
};

const itemStyle = {
  minHeight: "80px",

  display: "flex",

  alignItems: "center",

  justifyContent: "center",

  border: "2px dashed var(--color-border-primary)",

  background: "var(--color-bg-secondary)",

  color: "var(--color-text-primary)",

  fontWeight: "var(--font-weight-semibold)",
};

/* ======================================
   ITEMS
====================================== */

const items = Array.from({ length: 12 }, (_, index) => index + 1);

/* ======================================
   PLAYGROUND
====================================== */

export const Playground: Story = {
  args: {
    gap: "lg",

    children: items.map((item) => (
      <div key={item} style={itemStyle}>
        Item {item}
      </div>
    )),
  },

  render: (args) => (
    <div style={pageStyle}>
      <Grid {...args} />
    </div>
  ),
};

/* ======================================
   COLUMNS
====================================== */

export const Columns: Story = {
  argTypes: {
    columns: {
      control: false,

      table: {
        disable: true,
      },
    },

    gap: {
      control: false,

      table: {
        disable: true,
      },
    },
  },

  render: () => (
    <div style={pageStyle}>
      {[1, 2, 3, 4, 6, 12].map((columns) => (
        <div
          key={columns}
          style={{
            marginBottom: "var(--space-xl)",
          }}
        >
          <Grid columns={columns as 1 | 2 | 3 | 4 | 6 | 12} gap="md">
            {items.map((item) => (
              <div key={item} style={itemStyle}>
                {item}
              </div>
            ))}
          </Grid>
        </div>
      ))}
    </div>
  ),
};

/* ======================================
   RESPONSIVE
====================================== */

export const Responsive: Story = {
  argTypes: {
    columns: {
      control: false,

      table: {
        disable: true,
      },
    },

    gap: {
      control: false,

      table: {
        disable: true,
      },
    },
  },

  render: () => (
    <div style={pageStyle}>
      <Grid gap="lg">
        {items.map((item) => (
          <div key={item} style={itemStyle}>
            Item {item}
          </div>
        ))}
      </Grid>
    </div>
  ),
};
