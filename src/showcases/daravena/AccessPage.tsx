import { Button } from "@/components/button";
import { Card } from "@/components/card";

import { FormActions } from "@/components/form";

import { Input } from "@/components/field/input";

import { Heading } from "@/components/typography/heading";

import { Container } from "@/layouts/container";
import { Stack } from "@/layouts/stack";

export function AccessPage() {
  return (
    <Container size="sm">

      <Card>

        <Card.Header>

          <Heading level={1}>
            Ingreso por Clave
          </Heading>

        </Card.Header>

        <Card.Body>

          <Stack gap="xl">

            <Input
              placeholder="Ingresa tu clave de acceso"
            />

            <Button
              variant="primary"
              fullWidth
            >
              Ingresar al chat
            </Button>

          </Stack>

        </Card.Body>

        <Card.Footer>

          <FormActions>

            <Button variant="link">
              Volver al formulario de contacto
            </Button>

          </FormActions>

        </Card.Footer>

      </Card>

    </Container>
  );
}