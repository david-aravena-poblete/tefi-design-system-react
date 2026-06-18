import { Button } from "@/components/button";
import { Card } from "@/components/card";

import {
  Form,
  FormActions,
  FormField,
  FormRow,
} from "@/components/form";

import { Input } from "@/components/field/input";
import { Label } from "@/components/field/label";
import { Textarea } from "@/components/field/textarea";

import { Heading } from "@/components/typography/heading";
import { Text } from "@/components/typography/text";

import { Container } from "@/layouts/container";
import { Stack } from "@/layouts/stack";

export function ContactPage() {
  return (
    <Container size="sm">

      <Card>

        <Card.Header>

          <Stack gap="sm">

            <Heading level={1}>
              Contacto
            </Heading>

            <Text>
              Envíame un mensaje o entra con tu clave de acceso.
            </Text>

          </Stack>

        </Card.Header>

        <Card.Body>

          <Form>

            <Stack gap="lg">

              <FormField>

                <Label>
                  Tu Nombre
                </Label>

                <Input
                  placeholder="Escribe tu nombre"
                />

              </FormField>

              <FormRow>

                <FormField>

                  <Label>
                    Email (Opcional)
                  </Label>

                  <Input
                    placeholder="tu@email.com"
                  />

                </FormField>

                <FormField>

                  <Label>
                    Fono (Opcional)
                  </Label>

                  <Input
                    placeholder="+569..."
                  />

                </FormField>

              </FormRow>

              <FormField>

                <Label>
                  Mensaje para David Aravena
                </Label>

                <Textarea
                  placeholder="Escribe tu mensaje..."
                />

              </FormField>

              <Button
                type="submit"
                variant="primary"
                fullWidth
              >
                Enviar mensaje
              </Button>

            </Stack>

          </Form>

        </Card.Body>

        <Card.Footer>

          <FormActions>

            <Button variant="link">
              Tengo clave de acceso
            </Button>

            <Button variant="link">
              ← Volver al inicio
            </Button>

          </FormActions>

        </Card.Footer>

      </Card>

    </Container>
  );
}