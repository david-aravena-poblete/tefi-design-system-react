import type {
    Meta,
    StoryObj,
  } from "@storybook/react-vite";
  
  import { Box } from "../Box";
  
  const meta = {
    title: "Laboratory / Box / Experiments / Conversation",
    component: Box,
  } satisfies Meta<typeof Box>;
  
  export default meta;
  
  type Story = StoryObj<typeof meta>;
  
  export const ConversationExperiment: Story = {
    render: () => (
      <Box
        direction="column"
        between="sm"
      >
        <Box
          direction="row"
          justify="start"
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
            <span>Holaaa 👋</span>
            <small>06:30</small>
          </Box>
        </Box>
  
        <Box
          direction="row"
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
            <span>Holiii 😌</span>
            <small>06:31</small>
          </Box>
        </Box>
  
        <Box
          direction="row"
          justify="start"
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
              Estoy probando un mensaje bastante más largo para descubrir
              qué ocurre cuando la burbuja necesita crecer, llegar a su
              límite y comenzar a envolver el contenido en varias líneas.
            </span>
  
            <small>06:32</small>
          </Box>
        </Box>
  
        <Box
          direction="row"
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
              Perfecto 👀 Y este mensaje también es largo para comprobar
              que una burbuja enviada se comporte exactamente igual,
              aunque esté alineada al otro extremo de la conversación.
            </span>
  
            <small>06:33</small>
          </Box>
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

  export const MessageGroupExperiment: Story = {
    render: () => (
      <Box
        direction="column"
        between="lg"
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
            align="start"
            between="xs"
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
              <span>Holaaa 👋</span>
              <small>06:30</small>
            </Box>
  
            <Box
              direction="column"
              between="xs"
              inside="md"
              radius="lg"
              surface="elevated"
              text="primary"
              maxWidth="sm"
            >
              <span>¿Cómo estás?</span>
              <small>06:31</small>
            </Box>
  
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
                Estoy probando qué ocurre cuando mando varios mensajes
                consecutivos.
              </span>
              <small>06:32</small>
            </Box>
          </Box>
        </Box>
      </Box>
    ),
  };

  export const MultipleMessageGroupsExperiment: Story = {
    render: () => (
      <Box
        direction="column"
        between="lg"
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
            align="start"
            between="xs"
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
              <span>Holaaa 👋</span>
              <small>06:30</small>
            </Box>
  
            <Box
              direction="column"
              between="xs"
              inside="md"
              radius="lg"
              surface="elevated"
              text="primary"
              maxWidth="sm"
            >
              <span>¿Cómo estás?</span>
              <small>06:31</small>
            </Box>
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
            align="end"
            between="xs"
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
              <span>Holiii 😌</span>
              <small>06:32</small>
            </Box>
  
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
                Muy bien, estamos construyendo una conversación solamente
                componiendo BabyBox.
              </span>
              <small>06:33</small>
            </Box>
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