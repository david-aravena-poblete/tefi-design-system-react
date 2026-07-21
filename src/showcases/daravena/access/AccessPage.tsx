import { Button } from "@/components/button";
import { Card } from "@/components/card";

import { Form, FormActions } from "@/components/form";

import { Input } from "@/components/input/input";

import { Heading } from "@/components/typography/heading";

import { Container } from "@/layouts/container";
import { Stack } from "@/layouts/stack";

export function AccessPage() {
  return (
    <Container size="sm">
      <Card>
        <Card.Header>
          <Heading level={1}>Ingreso por Clave</Heading>
        </Card.Header>

        <Card.Body>
          <Form>
            <Stack gap="lg">
              <Input placeholder="Ingresa tu clave de acceso" />

              <Button type="submit" variant="primary" fullWidth>
                Ingresar al chat
              </Button>
            </Stack>
          </Form>
        </Card.Body>

        <Card.Footer>
          <FormActions>
            <Button variant="link">Volver al formulario de contacto</Button>
          </FormActions>
        </Card.Footer>
      </Card>
    </Container>
  );
}
