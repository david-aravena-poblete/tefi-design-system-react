import type {
    Meta,
    StoryObj,
  } from "@storybook/react-vite";
  
  import { Box } from "../Box";
  
  const meta = {
    title: "Laboratory / Box / Experiments / Card",
    component: Box,
  } satisfies Meta<typeof Box>;
  
  export default meta;
  
  type Story = StoryObj<typeof meta>;
  
  export const CardExperiment: Story = {
    render: () => (
      <Box
        direction="column"
        between="md"
        inside="lg"
        radius="lg"
        surface="elevated"
        text="primary"
        border="default"
      >
        <strong>BabyCard 👶</strong>
  
        <span>
          Nací solamente componiendo capacidades de BabyBox.
        </span>
      </Box>
    ),
  };
  
  export const CardInsideParent: Story = {
    render: () => (
      <Box
        direction="column"
        align="start"
      >
        <Box
          direction="column"
          between="md"
          inside="lg"
          radius="lg"
          surface="elevated"
          text="primary"
          border="default"
        >
          <strong>BabyCard 👶</strong>
  
          <span>
            Ahora mi tamaño depende de mi contenido.
          </span>
        </Box>
      </Box>
    ),
  };
