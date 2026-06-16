import { Button } from "@/components/button";
import { Card } from "@/components/card";

import {
  Heading,
  Text,
} from "@/components/typography";

import { Stack } from "@/layouts";

export function ContactPage() {
  return (
    <Stack
      gap="xl"
      align="center"
    >
      <Stack
        gap="sm"
        align="center"
      >
        <Heading level={1}>
          Contacto
        </Heading>

        <Text>
          Envíame un mensaje o entra con tu clave de acceso.
        </Text>
      </Stack>

      <Card>
        <Stack gap="lg">

          <Button variant="primary">
            Enviar mensaje
          </Button>

          <Button variant="link">
            Tengo clave de acceso
          </Button>

          <Button variant="link">
            ← Volver al inicio
          </Button>

        </Stack>
      </Card>

    </Stack>
  );
}