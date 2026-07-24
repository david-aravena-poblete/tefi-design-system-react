import type {
    Meta,
    StoryObj,
  } from "@storybook/react-vite";
  
  import { Box } from "../Box";
  
  const meta = {
    title: "Laboratory / Box / Experiments / Message Bubble",
    component: Box,
  } satisfies Meta<typeof Box>;
  
  export default meta;
  
  type Story = StoryObj<typeof meta>;
  
  export const MessageBubbleExperiment: Story = {
    render: () => (
      <Box
        direction="column"
        align="start"
      >
        <Box
          direction="column"
          between="xs"
          inside="md"
          radius="lg"
          surface="elevated"
          text="primary"
        >
          <span>
            Holaaa 👋 Esta es una BabyBubble
          </span>
  
          <small>
            05:24
          </small>
        </Box>
      </Box>
    ),
  };
  
  export const LongMessageBubbleExperiment: Story = {
    render: () => (
      <Box
        direction="column"
        align="start"
      >
        <Box
          direction="column"
          between="xs"
          inside="md"
          radius="lg"
          surface="elevated"
          text="primary"
          maxWidth="sm"
        >
          <span>
            Holaaa 👋 Esta es una BabyBubble con un mensaje muchísimo
            más largo para descubrir qué ocurre cuando el contenido
            empieza a necesitar bastante espacio horizontal y comprobar
            hasta dónde crece nuestra Box sin agregar ninguna capability
            nueva.
          </span>
  
          <small>
            05:32
          </small>
        </Box>
      </Box>
    ),
  };

  export const ConversationWithAvatarExperiment: Story = {
  render: () => (
    <Box
      direction="column"
      between="sm"
    >
      <Box
        direction="row"
        align="end"
        between="sm"
        justify="start"
      >
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            border: "1px solid",
            flexShrink: 0,
          }}
        />

        <Box
          direction="column"
          between="xs"
          inside="md"
          radius="lg"
          surface="elevated"
          text="primary"
          maxWidth="sm"
        >
          <span>
            Holaaa 👋 Estoy probando cómo se comporta una burbuja cuando
            tiene un avatar al lado.
          </span>

          <small>06:30</small>
        </Box>
      </Box>

      <Box
        direction="row"
        align="end"
        between="sm"
        justify="end"
      >
        <Box
          direction="column"
          between="xs"
          inside="md"
          radius="lg"
          surface="inverse"
          text="inverse"
          maxWidth="sm"
        >
          <span>
            Y yo estoy al otro lado 😌
          </span>

          <small>06:31</small>
        </Box>

        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            border: "1px solid",
            flexShrink: 0,
          }}
        />
      </Box>
    </Box>
  ),
};