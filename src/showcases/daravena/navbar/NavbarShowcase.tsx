import {
  Avatar,
  Box,
  Button,
  Container,
  Inline,
  Text,
} from "@/index";

export function NavbarShowcase() {
  return (
    <Box
      background="gray-soft"
      insideY="md"
    >
      <Container>
        <Inline
          align="center"
          justify="between"
          gap="lg"
        >
          {/* ======================================
             PROFILE
          ====================================== */}

          <Inline
            align="center"
            gap="md"
          >
            <Avatar
              src="https://i.pravatar.cc/100"
              alt="David Aravena"
              size="lg"
            />

            <Inline
              align="center"
              gap="sm"
            >
              <Text>David Aravena</Text>

              <Text>Desarrollo de IA</Text>
            </Inline>
          </Inline>

          {/* ======================================
             NAVIGATION
          ====================================== */}

          <Inline
            align="center"
            gap="md"
          >
            <Button variant="link">
              Proyectos
            </Button>

            <Button variant="link">
              Contáctame
            </Button>
          </Inline>
        </Inline>
      </Container>
    </Box>
  );
}